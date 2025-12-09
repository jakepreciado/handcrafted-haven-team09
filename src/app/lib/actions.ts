'use server';

import { signIn } from '../../../auth';
import { auth } from "../../../auth";
import { AuthError } from 'next-auth';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import postgres from 'postgres';


const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require', prepare: false });

const ProductFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Product name is required" })
    .max(255, { message: "Name too long" }),

  description: z
    .string()
    .min(1, { message: "Description is required" }),

  price: z.coerce
    .number()
    .gt(0, { message: "Price must be greater than 0" }),

  category: z
    .string()
    .min(1, { message: "Category is required" })
    .max(255, { message: "Category too long" }),

  product_image_url: z
    .string()
    .max(255)
    .optional(),
});

export type State = {
  errors?: {
    name?: string[];
    description?: string[];
    price?: number[];
    category?: string[];
    product_image_url?: string[];
  };
  message?: string | null;
};

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function createProduct(formData: FormData): Promise<void> {
  // Validate form data
  const validated = ProductFormSchema.safeParse({
    name: formData.get("name")?.toString(),
    description: formData.get("description")?.toString(),
    price: formData.get("price")?.toString(),
    category: formData.get("category")?.toString(),
    product_image_url: formData.get("product_image_url")?.toString(),
  });

  if (!validated.success) {
    throw new Error("Missing or invalid fields. Failed to create product.");
  }

  // Get logged-in user
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) throw new Error("Unauthorized. Must be logged in.");

  const { name, description, price, category, product_image_url } = validated.data;

  try {
    await sql`
      INSERT INTO products (user_id, name, description, price, category, product_image_url)
      VALUES (${userId}, ${name}, ${description}, ${price}, ${category}, ${product_image_url ?? null})
    `;
  } catch (err) {
    console.error(err);
    throw new Error("Database error: Failed to create product.");
  }

  // Revalidate and redirect
  revalidatePath("/seller-dashboard");
  redirect("/seller-dashboard");
}


export async function deleteProduct(id: string) {
  try {
    await sql`DELETE FROM products WHERE id = ${id}`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to delete product data.');
  }
  revalidatePath('/seller-dashboard');
}


export async function updateProduct(id: string, formData: FormData,) {
  try {
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const price = Number(formData.get('price'));
    const category = formData.get('category') as string;
    const product_image_url = formData.get('product_image_url') as string;

    await sql`
      UPDATE products
      SET name = ${name},
          description = ${description},
          price = ${price},
          category = ${category},
          product_image_url = ${product_image_url}
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to update product data.');
  }

  revalidatePath("/seller-dashboard");
  redirect("/seller-dashboard");
}



export async function createReview(formData: FormData): Promise<void> {
  const productId = formData.get("productId")?.toString();
  const name = formData.get("name")?.toString();
  const ratingStr = formData.get("rating")?.toString();
  const comment = formData.get("comment")?.toString();

  if (!productId || !name || !ratingStr || !comment) {
    throw new Error("Missing fields: productId, name, rating, and comment are required.");
  }

  const rating = Number(ratingStr);
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    throw new Error("Rating must be an integer between 1 and 5.");
  }

  try {
    await sql`
      INSERT INTO reviews (product_id, rating, comment, reviewer_name)
      VALUES (${productId}::uuid, ${rating}::int, ${comment}, ${name})
    `;

  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to create review.");
  }

  revalidatePath(`/products/${productId}`);
  redirect(`/products/${productId}`);
}








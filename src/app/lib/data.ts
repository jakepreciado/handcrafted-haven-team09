// lib/data.ts
import postgres from "postgres";
import { Product } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

// Fetch all products
export async function fetchProducts(): Promise<Product[]> {
  const rows = await sql`
    SELECT id, user_id, name, description, price, category, product_image_url
    FROM products
  `;
  return rows.map((row: any) => ({
    id: row.id,
    user_id: row.user_id,
    name: row.name,
    description: row.description,
    price: Number(row.price),
    category: row.category,
    product_image_url: row.product_image_url,
    reviews: [], // if needed
  }));
}

export async function fetchProductById(id: string) {
  try {
    const data = await sql`
    SELECT * FROM products WHERE id = ${id}
  `;
  console.log("Fetched Product:", data);
    return data[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product.");
  }
}


// Fetch all products for a specific user
export async function fetchProductsByUser(userId: string): Promise<Product[]> {
  const rows = await sql<Product[]>`
    SELECT id, user_id, name, description, price, category, product_image_url
    FROM products
    WHERE user_id = ${userId};
  `;

  // Map database rows to Product objects
  return rows.map((row) => ({
    id: row.id,
    user_id: row.user_id,
    name: row.name,
    description: row.description,
    price: Number(row.price),
    category: row.category,
    product_image_url: row.product_image_url,
    reviews: [], // optional: you can populate later
  }));
}


// Fetch all reviews
export async function fetchReviews() {
  return await sql`
    SELECT id, user_id, rating, comment, product_id
    FROM reviews
  `;
}

// Fetch all users
export async function fetchUsers() {
  return await sql`
    SELECT user_id, first_name, last_name, email
    FROM users
  `;
}

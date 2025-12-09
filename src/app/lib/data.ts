// lib/data.ts
import postgres from "postgres";
import { Product, Review } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

// Fetch all products
export async function fetchProducts(): Promise<Product[]> {
  const rows = await sql`
    SELECT id, user_id, name, description, price, category_id, product_image_url
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

export async function fetchProductById(id: string): Promise<Product | null> {
  const [product] = await sql<Product[]>`
    SELECT p.id, p.user_id, p.name, p.description, p.price, p.category_id, p.product_image_url, c.name as category
    FROM products p
    JOIN category c ON p.category_id = c.id
    WHERE p.id = ${id};
  `;

  if (!product) return null;

  // Fetch reviews for this product
  const reviews = await sql<Review[]>`
    SELECT id, product_id, reviewer_name, rating, comment
    FROM reviews
    WHERE product_id = ${id};
  `;

  return {
    ...product,
    category: product.category,
    reviews: reviews ?? [],
  };
}


// Fetch all products for a specific user
export async function fetchProductsByUser(userId: string): Promise<Product[]> {
  const rows = await sql<Product[]>`
    SELECT id, user_id, name, description, price, category_id, product_image_url
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




type ProductRow = {
  id: string;
  user_id: string;
  product_name: string;
  description: string;
  price: string | number;
  category_id: string;
  product_image_url: string;
  category_name: string;
};


export async function fetchProductsByCategory(categoryId: string): Promise<Product[]> {
  const rows = await sql<ProductRow[]>`
    SELECT 
      p.id, 
      p.user_id, 
      p.name AS product_name, 
      p.description, 
      p.price, 
      p.category_id, 
      p.product_image_url, 
      c.name AS category_name
    FROM products p
    JOIN category c ON p.category_id = c.id
    WHERE p.category_id = ${categoryId};
  `;

  return rows.map((row) => ({
    id: row.id,
    user_id: row.user_id,
    name: row.product_name,       // keep product name
    description: row.description,
    price: Number(row.price),
    category: row.category_name,  // readable category name
    product_image_url: row.product_image_url,
    reviews: [],                  // populate if needed
  }));
}


export async function fetchCategories() {
  return await sql`
    SELECT id, name
    FROM category
  `;
}

// Fetch all reviews
export async function fetchReviews() {
  return await sql`
    SELECT id, user_id, rating, comment, product_id
    FROM reviews
  `;
}

export async function fetchReviewsByProduct(productId: string) {
  return await sql`
    SELECT id, reviewer_name, rating, comment, product_id
    FROM reviews
    WHERE product_id = ${productId}
  `;
}


// Fetch all users
export async function fetchUsers() {
  return await sql`
    SELECT * FROM users
  `;
}


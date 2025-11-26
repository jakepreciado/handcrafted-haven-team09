// lib/data.ts
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

// Fetch all products
export async function fetchProducts() {
  return await sql`
    SELECT product_id, seller_id, name AS product_name, description, price, category, product_image_url
    FROM products
  `;
}

// Fetch all sellers
export async function fetchSellers() {
  return await sql`
    SELECT seller_id, user_id, store_name, profile_image_url, bio
    FROM seller_profiles
  `;
}

// Fetch all reviews
export async function fetchReviews() {
  return await sql`
    SELECT review_id, user_id, rating, comment, product_id
    FROM reviews
  `;
}

// Fetch all users
export async function fetchUsers() {
  return await sql`
    SELECT user_id, first_name, last_name, email, is_seller
    FROM users
  `;
}

import bcrypt from 'bcrypt';
import postgres from 'postgres';
import { users, products, reviews } from '../lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedUsers() {
await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

await sql`     CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY,
      first_name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      store_name TEXT NOT NULL
    )
  `;

return Promise.all(
users.map(async (user) => {
const hashedPassword = await bcrypt.hash(user.password, 10);
return sql`         INSERT INTO users (id, first_name, last_name, email, password, store_name)
        VALUES (${user.user_id}, ${user.first_name}, ${user.last_name}, ${user.email}, ${hashedPassword}, ${user.store_name})
        ON CONFLICT (id) DO NOTHING
      `;
})
);
}

async function seedProducts() {
await sql`     CREATE TABLE IF NOT EXISTS products (
      id UUID PRIMARY KEY,
      user_id UUID NOT NULL REFERENCES users(id),
      name VARCHAR(255) NOT NULL,
      description TEXT,
      price NUMERIC(10,2) NOT NULL,
      category VARCHAR(255),
      product_image_url VARCHAR(255)
    )
  `;

return Promise.all(
products.map(
(p) => sql`         INSERT INTO products (id, user_id, name, description, price, category, product_image_url)
        VALUES (${p.product_id}, ${p.user_id}, ${p.name}, ${p.description}, ${p.price}, ${p.category}, ${p.product_image_url})
        ON CONFLICT (id) DO NOTHING
      `
)
);
}

async function seedReviews() {
await sql`     CREATE TABLE IF NOT EXISTS reviews (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      product_id UUID NOT NULL REFERENCES products(id),
      user_id UUID NOT NULL REFERENCES users(id),
      rating INT NOT NULL,
      comment TEXT
    )
  `;

return Promise.all(
reviews.map(
(r) => sql`         INSERT INTO reviews (product_id, user_id, rating, comment)
        VALUES (${r.product_id}, ${r.user_id}, ${r.rating}, ${r.comment})
        ON CONFLICT (id) DO NOTHING
      `
)
);
}

export async function GET() {
try {
// Run in sequence to satisfy FK dependencies
await seedUsers();
await seedProducts();
await seedReviews();



return Response.json({ message: 'Database seeded successfully' });
} catch (error) {
return Response.json({ error: String(error) }, { status: 500 });
}
}


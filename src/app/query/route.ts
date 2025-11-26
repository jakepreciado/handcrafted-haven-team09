import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
    }
    // Check if user already exists
    const existing = await sql`SELECT * FROM users WHERE email=${email}`;
    if (existing.length > 0) {
      return NextResponse.json({ error: 'User already exists' }, { status: 409 });
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Insert user into DB
    await sql`INSERT INTO users (email, password) VALUES (${email}, ${hashedPassword})`;
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Sign-up error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

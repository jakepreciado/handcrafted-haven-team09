'use client';

import { useState } from 'react';
import bcrypt from 'bcryptjs';
import Header from "@/app/ui/header";
import styles from "@/app/page.module.css";

export default function SignUpForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setMessage('');
        try {
            // Hash password client-side (for demo; best practice is server-side)
            const hashedPassword = await bcrypt.hash(password, 10);
            const res = await fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password: hashedPassword }),
            });
            const data = await res.json();
            if (res.ok) {
                setMessage('Sign-up successful!');
            } else {
                setMessage(data.error || 'Sign-up failed');
            }
        } catch (err) {
            if (err instanceof Error) {
                setMessage('Error: ' + err.message);
            } else {
                setMessage('An unknown error occurred');
            }
        }
    }

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <h1 className="mb-3 text-2xl">Sign Up</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        className="block w-full rounded-md border py-2 px-3 mb-2"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        minLength={6}
                        className="block w-full rounded-md border py-2 px-3 mb-2"
                    />
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">Sign Up</button>
                    {message && <p className="text-red-500 mt-2">{message}</p>}
                </form>
            </main>
        </div>
    );
}

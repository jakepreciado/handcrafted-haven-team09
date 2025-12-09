"use client";

import { useState } from "react";
import { createReview } from "@/app/lib/actions";

export default function ReviewForm({ productId }: { productId: string }) {
    const [rating, setRating] = useState<number>(0);
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmitting(true);
        setMessage(null);
        const fd = new FormData(e.currentTarget);
        fd.set("productId", productId);

        try {
            await createReview(fd);
            setMessage("Review submitted. Thank you!");
            setName("");
            setText("");
            setRating(5);
        } catch (err: any) {
            setMessage(err.message || "Something went wrong");
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <form onSubmit={onSubmit} className="mt-8 space-y-4">

            <div>
                <label className="block text-sm font-medium mb-2">Rating</label>
                <div className="flex items-center gap-4">
                    {[1, 2, 3, 4, 5].map((r) => (
                        <label key={r} className="flex items-center gap-2">
                            <span>{r}</span>
                            <input
                                type="radio"
                                name="rating"
                                value={r}
                                checked={rating === r}
                                onChange={() => setRating(r)}
                                className="h-4 w-4"
                                required
                            />
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 p-2"
                    placeholder="Your name"
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Review</label>
                <textarea
                    name="comment"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 p-2"
                    rows={4}
                    placeholder="Share your experience..."
                    required
                />
            </div>

            <button
                type="submit"
                disabled={submitting}
                className="rounded-md bg-blue-600 text-white px-4 py-2 disabled:opacity-50"
            >
                {submitting ? "Submitting..." : "Submit Review"}
            </button>

            {message && <p className="text-sm mt-2">{message}</p>}
        </form>
    );
}
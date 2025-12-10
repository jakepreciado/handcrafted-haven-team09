'use client';

import {
    AtSymbolIcon,
    KeyIcon,
    UserIcon,
    BuildingStorefrontIcon,
    PhotoIcon,
    ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { useActionState } from 'react';
import { register } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';
import styles from "@/app/page.module.css";
import { ebGaramond, cormorantGaramond } from "@/app/ui/fonts";

export default function SignupForm() {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/login';
    const [errorMessage, formAction, isPending] = useActionState(register, undefined);

    return (
        <form action={formAction} className="space-y-4">
            <div className="rounded-lg bg-gray-50 px-6 pb-6 pt-8">
                <h2 className={`${styles.loginH2} ${ebGaramond.className}`}>Create your account</h2>

                {/* First Name */}
                <div className="mt-4 relative">
                    <label htmlFor="first_name" className="sr-only">First Name</label>
                    <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        placeholder="First Name"
                        required
                        className="peer block w-full rounded border border-gray-300 py-2 pl-10 text-sm placeholder-gray-500"
                    />
                </div>

                {/* Last Name */}
                <div className="mt-4 relative">
                    <label htmlFor="last_name" className="sr-only">Last Name</label>
                    <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        placeholder="Last Name"
                        required
                        className="peer block w-full rounded border border-gray-300 py-2 pl-10 text-sm placeholder-gray-500"
                    />
                </div>

                {/* Email */}
                <div className="mt-4 relative">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="peer block w-full rounded border border-gray-300 py-2 pl-10 text-sm placeholder-gray-500"
                    />
                </div>

                {/* Password */}
                <div className="mt-4 relative">
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        required
                        minLength={6}
                        className="peer block w-full rounded border border-gray-300 py-2 pl-10 text-sm placeholder-gray-500"
                    />
                </div>

                {/* ConfirmPassword */}
                <div className="mt-4 relative">
                    <label htmlFor="confirm_password" className="sr-only">Confirm Password</label>
                    <input
                        type="password"
                        id="confirm_password"
                        name="confirmPassword" // <-- match register function
                        placeholder="Confirm Password"
                        required
                        minLength={6}
                        className="peer block w-full rounded border border-gray-300 py-2 pl-10 text-sm placeholder-gray-500"
                    />
                </div>

                {/* Store Name */}
                <div className="mt-4 relative">
                    <label htmlFor="store_name" className="sr-only">Store Name</label>
                    <input
                        type="text"
                        id="store_name"
                        name="store_name"
                        placeholder="Store Name"
                        required
                        className="peer block w-full rounded border border-gray-300 py-2 pl-10 text-sm placeholder-gray-500"
                    />
                </div>

                {/* Profile Image URL */}
                <div className="mt-4 relative">
                    <label htmlFor="profile_image_url" className="sr-only">Profile Image URL</label>
                    <input
                        type="text"
                        id="profile_image_url"
                        name="profile_image_url"
                        placeholder="Profile Image URL"
                        className="peer block w-full rounded border border-gray-300 py-2 pl-10 text-sm placeholder-gray-500"
                    />
                </div>

                {/* Hidden Redirect */}
                <input type="hidden" name="redirectTo" value="/login" />

                {/* Submit Button */}
                <button
                    className={`${styles.loginButton} ${cormorantGaramond.className} mt-6`}
                    aria-disabled={isPending}
                >
                    Create account <ArrowRightIcon className={styles.loginArrow} />
                </button>



            </div>
        </form>
    );
}

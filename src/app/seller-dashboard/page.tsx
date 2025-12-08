import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '../../../auth';

export default function Page() {
    return (
        <main className="p-4">
            <h1 className="text-2xl font-bold mb-4">Seller Dashboard</h1>
            <p>You are logged in.</p>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                <form
                    action={async () => {
                        'use server';
                        await signOut({ redirectTo: '/' });
                    }}
                >
                    <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                        <PowerIcon className="w-6" />
                        <div className="md:block">Sign Out</div>
                    </button>

                    <a href="/products/add" className="mt-4 flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-green-100 hover:text-green-600 md:flex-none md:justify-start md:p-2 md:px-3">Add Product</a>

                </form>
            </div>
        </main>
    );
}
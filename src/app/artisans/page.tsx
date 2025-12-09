import { fetchUsers } from "../lib/data";
import StoreCard from "../ui/cards/store-card";
import Link from "next/link";
import Card from "../ui/cards/card";

export default async function Page() {
    const users = await fetchUsers();
    if (users.length === 0) {
        return <p>No Artisans Found!</p>;
    }
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Artisans</h1>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {users.map((user) => (
                    <StoreCard
                        key={user.id}
                        id={user.id}
                        storeName={user.store_name}
                        firstName={user.first_name}
                        lastName={user.last_name}
                    />
                ))}
            </div>
        </div>

    );
}
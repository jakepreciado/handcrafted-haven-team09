import Link from "next/link";

interface StoreCardProps {
  id: string;        // UUID
  storeName: string;
  firstName?: string;
  lastName?: string;
}

export default function StoreCard({ id, storeName, firstName, lastName }: StoreCardProps) {
  return (
    <Link
      href={`/product/${id}`}
      className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 group"
    >
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600">
        {storeName}
      </h2>
      {(firstName || lastName) && (
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          {firstName} {lastName}
        </p>
      )}
    </Link>
  );
}
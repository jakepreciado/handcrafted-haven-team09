import styles from "../../page.module.css";
import Image from "next/image";

interface StoreCardProps {
  id: string;        // UUID
  storeName: string;
  firstName?: string;
  lastName?: string;
  profileImageUrl?: string;
}

export default function StoreCard({ id, storeName, firstName, lastName, profileImageUrl }: StoreCardProps) {
  return (
    <div className={`${styles.card} text-center group hover:shadow-lg p-4 rounded-lg`}>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600">
          {storeName}
        </h2>
        <Image
          src={profileImageUrl || "/placeholder-profile.jpg"}
          alt={storeName}
          width={250}
          height={250}
          className="text-center justify-center mt-4 w-full h-auto rounded"
        />
        {(firstName || lastName) && (
          <h2 className="text-gray-600 dark:text-gray-300 mt-1">
            {firstName} {lastName}
          </h2>
        )}
    </div>
  );
}
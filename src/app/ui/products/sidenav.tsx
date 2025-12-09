import Link from "next/link";
import { fetchCategories } from "@/app/lib/data"; // Make sure this returns an array of { id, name }
import '@/app/globals.css';

export default async function SideNav() {
  const categories = await fetchCategories();

  return (
    <nav className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="sidenav">
        <h1 className="page-header text-xl font-semibold  mb-6">Categories</h1>

        <ul className="space-y-3 text-gray-700">
          <li className="text-center">
            <Link
              href="/products"
            >
              All Products
            </Link>
          </li>

          {categories.map((category) => (
            <li key={category.id}>
              <Link
                href={`/products/category/${category.id}`}
                className="block rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-700"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

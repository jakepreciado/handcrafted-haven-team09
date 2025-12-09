import Link from "next/link";

export default function SideNav() {
  return (
    <nav className="w-64 min-h-screen bg-gray-100 border-r border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Categories
      </h2>

      <ul className="space-y-3 text-gray-700">
        <li>
          <Link
            href="/products"
            className="block rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-700"
          >
            All Products
          </Link>
        </li>

        <li>
          <Link
            href="/products/category/electronics"
            className="block rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-700"
          >
            Electronics
          </Link>
        </li>

        <li>
          <Link
            href="/products/category/books"
            className="block rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-700"
          >
            Books
          </Link>
        </li>

        <li>
          <Link
            href="/products/category/clothing"
            className="block rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-700"
          >
            Clothing
          </Link>
        </li>

        <li>
          <Link
            href="/products/category/home"
            className="block rounded-md px-3 py-2 hover:bg-blue-100 hover:text-blue-700"
          >
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}

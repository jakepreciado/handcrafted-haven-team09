import { fetchProducts } from "@/app/lib/data";
import { Product } from "@/app/lib/definitions";
import SideNav from "../ui/products/sidenav";
import Card from "@/app/ui/cards/card";
import Link from "next/link";
import SortButtons from "@/app/ui/products/sort-buttons";
import '@/app/globals.css';

export default async function Page() {
  const products = await fetchProducts();

  return (
    <main className="bg-white dark:bg-gray-900 py-10">
      <div className="max-w-[1400px] mx-auto flex gap-10 px-4">
        <SideNav />
        <section className="flex-1 w-full">
          <h1 className="page-header text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Products
          </h1>
          <SortButtons initialProducts={products} />
        </section>
      </div >
    </main >
  );
}
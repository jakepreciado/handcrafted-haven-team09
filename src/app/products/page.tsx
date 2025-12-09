import { fetchProducts } from "@/app/lib/data";
import { Product } from "@/app/lib/definitions";
import SideNav from "../ui/products/sidenav";
import Card from "@/app/ui/card";
import Link from "next/link";
import "@/app/globals.css";

export default async function Page() {
  const products = await fetchProducts();

  return (
    <main className="bg-white py-10 dark:bg-gray-900">
      <div className="container-1400 flex gap-10">
        <SideNav />

        <section className="flex-1">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Products</h2>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group block"
              >
                <Card
                  titleAndImgAlt={product.name}
                  imgSrc={product.product_image_url}
                  imgWidth={250}
                  imgHeight={375}
                  description={product.description}
                  category={product.category}
                  buttonWordsPrice={`$${product.price}`}
                />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

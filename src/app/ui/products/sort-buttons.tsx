"use client";

import { useState } from "react";
import { Product } from "@/app/lib/definitions";
import Card from "../cards/card";
import Link from "next/link";

type SortButtonsProps = {
  initialProducts: Product[];
};

export default function SortButtons({ initialProducts }: SortButtonsProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const sortPriceAsc = () => setProducts([...products].sort((a, b) => a.price - b.price));
  const sortPriceDesc = () => setProducts([...products].sort((a, b) => b.price - a.price));
  const sortAlphaAsc = () => setProducts([...products].sort((a, b) => a.name.localeCompare(b.name)));
  const sortAlphaDesc = () => setProducts([...products].sort((a, b) => b.name.localeCompare(a.name)));

  return (
    <div>
      {/* Buttons */}
      <div className="sort-buttons flex gap-2 mb-6">
        <button onClick={sortPriceAsc} className="px-4 py-2 text-white rounded-md">Price ↑</button>
        <button onClick={sortPriceDesc} className="px-4 py-2 text-white rounded-md">Price ↓</button>
        <button onClick={sortAlphaAsc} className="px-4 py-2 text-white rounded-md">A → Z</button>
        <button onClick={sortAlphaDesc} className="px-4 py-2 text-white rounded-md">Z → A</button>
      </div>

      {/* Grid */}
      <div className="card-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} className="block w-full">
            <Card
              titleAndImgAlt={product.name}
              imgSrc={product.product_image_url}
              imgWidth={250}
              imgHeight={250}
              description={product.description}
              category={product.category}
              buttonWordsPrice={`$${product.price}`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

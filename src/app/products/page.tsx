import { fetchProducts } from "@/app/lib/data";
import { Product } from "@/app/lib/definitions";
import Card from "@/app/ui/card";
import Header from "@/app/ui/header";
import styles from "@/app/page.module.css";

export default async function Page() {
  const products: Product[] = await fetchProducts();

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {products.map((product) => (
            <Card
              key={product.id}
              titleAndImgAlt={product.name}
              imgSrc={product.product_image_url}
              imgWidth={300}
              imgHeight={300}
              description={product.description}
              category={product.category}
              buttonWordsPrice={`$${product.price}`}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

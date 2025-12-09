import { notFound } from "next/navigation";
import { fetchProductById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/products/breadcrumbs";
import ReviewForm from "@/app/ui/review-form";

export default async function ProductPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const [product] = await Promise.all([fetchProductById(id)]);

    if (!product) {
        notFound();
    }

  return (
    <main className="container mx-auto px-4 py-10">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: product.name, href: `/products/${id}` },
          { label: "Add Review", href: `/products/${id}/review`, active: true },
        ]}
      />
      <section className="max-w-2xl">
        <h1 className="text-2xl font-semibold mb-4">Add a review for {product.name}</h1>
        <ReviewForm productId={id} />
      </section>
    </main>
  );
}
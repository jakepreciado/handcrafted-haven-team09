import { fetchProductById } from "@/app/lib/data";
import "../../globals.css";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/app/ui/products/breadcrumbs";
import ProductDescription from "@/app/ui/products/product-description";

export default async function ProductPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const [product] = await Promise.all([fetchProductById(id)]);

    if (!product) {
        notFound();
    }

    return (
        <>
            <Breadcrumbs
                breadcrumbs={[
                    { label: ' Products ', href: '/products' },
                    {
                        label: ` ${product.name} `,
                        href: `/products/${id}`,
                        active: true,
                    },
                ]}
            />
            
            <ProductDescription params={props.params} />
        </>
    );
}
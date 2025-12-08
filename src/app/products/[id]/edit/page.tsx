import Form from '@/app/ui/products/edit-product';
import { fetchProductById } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const [product] = await Promise.all([
        fetchProductById(id),
    ]);


    if (!product) {
        notFound();
    }
    return (
        <Form id={product.id} />

    );
}

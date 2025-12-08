import EditProduct from "@/app/ui/products/edit-product";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <EditProduct id={(await params).id} />;
}
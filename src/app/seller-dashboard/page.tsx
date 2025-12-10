import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut, auth } from '../../../auth';
import { fetchProductsByUser } from '@/app/lib/data';
import { CreateProduct, DeleteProduct, UpdateProduct } from '@/app/ui/products/buttons';
import DashboardCard from '../ui/seller-dashboard/dashboard-cards';

export default async function Page() {
  // Get the logged-in user's session
  const session = await auth();
  const userId = session?.user?.id;

  // Fetch all products for this user
  const products = userId ? await fetchProductsByUser(userId) : [];

  return (
    <>
      <h1 className="page-header text-2xl font-bold mb-4">Welcome Back, {session?.user?.name}!</h1>
      <div className='flex'>
        <CreateProduct />
        <div className='justify-center text-center mx-auto mr-4'>
          <h2 className="page-header text-xl text-center font-semibold mb-4">Your Products</h2>
          <p className="page-header text-center mb-4">Create, Edit, or Delete your products as needed below.</p>
        </div>
      </div>
      <section className="card-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="mb-4 flex items-center justify-between">
            <DashboardCard
              titleAndImgAlt={product.name}
              imgSrc={product.product_image_url}
              imgWidth={250}
              imgHeight={250}
              description={product.description}
              category={product.category}
              buttonWordsPrice={`$${product.price}`}
              id={product.id}
            />

          </div>
        ))}

      </section>
    </>
  );
}
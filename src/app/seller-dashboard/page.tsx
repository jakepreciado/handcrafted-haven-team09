import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut, auth } from '../../../auth';
import { fetchProductsByUser } from '@/app/lib/data';
import { CreateProduct, DeleteProduct, UpdateProduct } from '@/app/ui/products/buttons';
import Card from '../ui/cards/card';

export default async function Page() {
  // Get the logged-in user's session
  const session = await auth();
  const userId = session?.user?.id;

  // Fetch all products for this user
  const products = userId ? await fetchProductsByUser(userId) : [];

  return (
    <>
      <h1 className="page-header text-2xl font-bold mb-4">Welcome Back, {session?.user?.name}!</h1>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}
        >
          <button>
            <PowerIcon />
            <div className="md:block">Sign Out</div>
          </button>
          <CreateProduct />
        </form>
      </div>
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Your Products</h2>
        {products.map((product) => (
          <div key={product.id} className="mb-4 flex items-center justify-between">
            <Card
              titleAndImgAlt={product.name}
              imgSrc={product.product_image_url}
              imgWidth={250}
              imgHeight={250}
              description={product.description}
              category={product.category}
              buttonWordsPrice={`$${product.price}`}
            />
            <UpdateProduct id={product.id} />
            <DeleteProduct id={product.id} />
          </div>
        ))}

      </section>
    </>
  );
}
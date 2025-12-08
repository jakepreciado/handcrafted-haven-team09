import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut, auth } from '../../../auth';
import { fetchProductsByUser } from '@/app/lib/data';
import { CreateProduct, DeleteProduct, UpdateProduct } from '@/app/ui/products/buttons';
import Header from "@/app/ui/header";
import styles from "@/app/page.module.css"

export default async function Page() {
  // Get the logged-in user's session
  const session = await auth();
  const userId = session?.user?.id;

  // Fetch all products for this user
  const products = userId ? await fetchProductsByUser(userId) : [];

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1 className="text-2xl font-bold mb-4">Seller Dashboard</h1>
        <p>You are logged in as {session?.user?.name}.</p>

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
          {products.length === 0 ? (
            <p>No products yet.</p>
          ) : (
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <li key={product.id} className="rounded-md border p-4 shadow-sm">
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p>{product.description}</p>
                  <p className="font-medium mt-2">${product.price}</p>
                  <DeleteProduct id={product.id} />
                  <UpdateProduct id={product.id} />
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}
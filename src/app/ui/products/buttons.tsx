'use client';

import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteProduct } from '@/app/lib/actions';
import '@/app/globals.css';

export function CreateProduct() {
  return (
    <Link
      href="/products/add"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <button>
        <PlusIcon className="w-6" />
        <div className="md:block create-button">Add Product</div>
      </button>
    </Link>
  );
}

export function UpdateProduct({ id }: { id: string }) {
  return (
    <Link
      href={`/products/${id}/edit`}
      className="rounded-md  hover:bg-gray-100"
    >
      <button className='seller-card-button'><PencilIcon className='edit-icon' /></button>

    </Link >
  );
}

export function DeleteProduct({ id }: { id: string }) {
  const deleteProductWithId = deleteProduct.bind(null, id);
  return (
    <form action={deleteProductWithId}>
      <button>
        <TrashIcon className='seller-card-button' />
      </button>
    </form>
  );
}

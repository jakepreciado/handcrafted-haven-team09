'use client';

import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteProduct } from '@/app/lib/actions';

export function CreateProduct() {
  return (
    <Link
      href="/products/add"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <button>
        <PlusIcon className="w-6" />
        <div className="md:block">Create</div>
      </button>
    </Link>
  );
}

export function UpdateProduct({ id }: { id: string }) {
  return (
    <Link
      href={`/products/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <button>
        <PencilIcon />
        <span>Update</span>
      </button>

    </Link >
  );
}

export function DeleteProduct({ id }: { id: string }) {
  const deleteProductWithId = deleteProduct.bind(null, id);
  return (
    <form action={deleteProductWithId}>
      <button>
        <TrashIcon />
        <div className="md:block">Delete</div>
      </button>
    </form>
  );
}

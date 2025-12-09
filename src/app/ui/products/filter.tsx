"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

type Filters = { category?: string; minPrice?: number; maxPrice?: number; search?: string; };

export default function FilterBar({ initialFilters }: { initialFilters: Filters }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [category, setCategory] = useState(initialFilters.category ?? "");
  const [minPrice, setMinPrice] = useState<string>(initialFilters.minPrice?.toString() ?? "");
  const [maxPrice, setMaxPrice] = useState<string>(initialFilters.maxPrice?.toString() ?? "");
  const [search, setSearch] = useState(initialFilters.search ?? "");

  useEffect(() => {
    setCategory(searchParams.get("category") ?? "");
    setMinPrice(searchParams.get("minPrice") ?? "");
    setMaxPrice(searchParams.get("maxPrice") ?? "");
    setSearch(searchParams.get("search") ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.toString()]);

  function apply() {
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (search) params.set("search", search);
    router.push(`/products?${params.toString()}`);
  }

  function clear() {
    setCategory("");
    setMinPrice("");
    setMaxPrice("");
    setSearch("");
    router.push(`/products`);
  }

  return (
    <div className="mt-4 flex flex-wrap items-end gap-4">
      <div>
        <label className="block text-sm mb-1">Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-md border border-gray-300 p-2">
          <option value="">All</option>
          <option value="clothing">Clothing</option>
          <option value="jewelry">Jewelry</option>
          <option value="home">Home</option>
          <option value="art">Art</option>
          {/* add real categories */}
        </select>
      </div>

      <div>
        <label className="block text-sm mb-1">Min price</label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="rounded-md border border-gray-300 p-2 w-28"
          min={0}
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Max price</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="rounded-md border border-gray-300 p-2 w-28"
          min={0}
        />
      </div>

      <div className="flex-1 min-w-[220px]">
        <label className="block text-sm mb-1">Search</label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-md border border-gray-300 p-2 w-full"
          placeholder="Name or description"
        />
      </div>

      <div className="flex gap-2">
        <button onClick={apply} className="rounded-md bg-blue-600 text-white px-4 py-2">Apply Filters</button>
        <button onClick={clear} className="rounded-md bg-gray-200 text-gray-800 px-4 py-2">Clear</button>
      </div>
    </div>
  );
}
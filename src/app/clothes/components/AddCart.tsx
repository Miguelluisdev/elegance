"use client"
import { Product } from "@/@types/product"
import { useCartStore } from "@/store"

export default function Products({ product }: { product: Product }) {
  const { addProduct } = useCartStore()
  return (
    <button className="flex items-center justify-center rounded-md bg-[#D9A273]  text-white px-5 py-2.5 text-center text-sm font-medium hover:bg-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
        onClick={() => addProduct(product)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      Adicionar ao carrinho
    </button>
  )
}

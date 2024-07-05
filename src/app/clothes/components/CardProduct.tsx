import { Product } from "@/@types/product"
import ProductImage from "@/components/ProductImage"
import Image from "next/image"
import Link from "next/link"

type Productsprops = {
  product: Product
}

export default async function CardProduct({ product }: Productsprops) {
  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg  shadow-md">
      <ProductImage product={product} fill />
      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl tracking-tight ">{product.tittle}</h5>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold ">${product.price}</span>
          </p>
        </div>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-xl ">
              {product.description?.slice(0, 15)}
            </span>
          </p>
        </div>

        <button className="flex items-center justify-center rounded-md bg-[#D9A273]  text-white px-5 py-2.5 text-center text-sm font-medium hover:bg-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-300">
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
      </div>
    </div>
  )
}

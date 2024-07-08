import { Product } from "@/@types/product"
import ProductImage from "@/components/ProductImage"
import { formatPrice } from "@/lib/format-price"
import AddCart from "./AddCart"

type Productsprops = {
  product: Product
}

export default async function CardProduct({ product }: Productsprops) {
  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg  shadow-md">
      <ProductImage product={product} fill />
      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl tracking-tight ">{product.name}</h5>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold ">{ formatPrice(product.price)}</span>
          </p>
        </div>

        <AddCart product={product} />
      </div>
    </div>
  )
}

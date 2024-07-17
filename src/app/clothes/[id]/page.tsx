import { Product } from "@/@types/product"
import { fecthProducts } from "@/app/actions"
import ProductImage from "@/components/ProductImage"
import { formatPrice } from "@/lib/format-price"
import Stripe from "stripe"
import AddCart from "../components/AddCart"
import CardProduct from "../components/CardProduct"



type ProductPageProps = {
  params: {
    id: string
  }
}

async function getProductById(id: string) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-06-20",
  })
  const product = await stripe.products.retrieve(id)
  const price = await stripe.prices.list({
    product: product.id,
  })
  return {
    id: product.id,
    price: price.data[0].unit_amount,
    name: product.name,
    image: product.images[0],
    description: product.description,
    currency: price.data[0].currency,
  }
}

export default async function ClothesProduct({
  params: { id },
}: ProductPageProps) {
  const product = await getProductById(id)

  const  {formatedProducts} = await fecthProducts({})

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
        <div className="grid gap-3 items-start rounded-xl ">
          <ProductImage product={product} />
        </div>
        <div className="grid gap-4 sm:mt-20 md:gap-10 items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-3xl lg:text-4xl">{product.name}</h1>
            <div>
              <p>{product.description}</p>
            </div>
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-bold">
                {formatPrice(product.price)}
              </h2>
            </div>
          </div>
          <AddCart product={product} />
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Produtos Recomendados</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6 justify-items-center">
          {formatedProducts.slice(4, 8).map((product: Product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  )
}

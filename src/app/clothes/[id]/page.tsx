import { Product } from "@/@types/product"
import ProductImage from "@/components/ProductImage"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { formatPrice } from "@/lib/format-price"
import Stripe from "stripe"
import AddCart from "../components/AddCart"

type ProductPageProps = {
  params: {
    id: string
  }
}

async function getProductid(id: string) {
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
  const product = await getProductid(id)
  return (
    <MaxWidthWrapper>
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
        <div className="grid gap-3 items-start">
          <ProductImage product={product} />
        </div>
        <div className="grid gap-4 mt-48  md:gap-10 items-start">
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
    </MaxWidthWrapper>
  )
}

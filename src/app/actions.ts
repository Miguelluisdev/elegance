import { Product } from "@/@types/product"
import Stripe from "stripe"

export async function fecthProducts({
  lastProductId,
}: {
  lastProductId?: string | undefined
}) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-06-20",
  })
  const params = lastProductId
    ? { starting_after: lastProductId, limit: 4 }
    : {}

  const { data: products, has_more } = await stripe.products.list()

  const formatedProducts = await Promise.all(
    products.map(async (product) => {
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
    }),
  )
  return {formatedProducts , has_more}
}

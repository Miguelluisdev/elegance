import { Product } from "@/@types/product"
import { stripe } from "@/lib/stripe"
import { auth } from "@clerk/nextjs/server"
import { connect } from "http2"
import { NextResponse } from "next/server"

const calculateOrderAmount = (items: any[]) => {
  const totalPrice = items.reduce(
    (total: number, item: { price: number; quantity: number }) => {
      const itemPrice = item.price ?? 0
      const itemQuantity = item.quantity ?? 1
      return total + itemPrice * itemQuantity
    },
    0,
  )
  return totalPrice
}

export async function POST(req: Request) {
  const { userId } = auth()

  const { items, payment_intent_id } = await req.json()

  if (!userId) {
    return new Response("não autorizado", { status: 401 })
  }

  const customerIdTemp = "cus_QTwqub6oJIuLs8"
  const total = calculateOrderAmount(items)

  const orderData = {
    user: { connect: { id: 1 } },
    amount: total,
    currency: "brl",
    status: "pending",
    paymentIntentId: payment_intent_id,
    products: {
      create: items.map((item: Product) => ({
        name: item.name,
        description: item.description,
        quantity: item.quantity,
        price: item.price,
        image: item.image,
      })),
    },
  }
  if (payment_intent_id) {
    const current_intent = await stripe.paymentIntents.retrieve(
      payment_intent_id,
    )

    if (current_intent) {
      const updated_intent = await stripe.paymentIntents.update(
        payment_intent_id,
        {
          amount: total,
        },
      )

      const [existing_order, updated_order] = await Promise.all([
        prisma?.order.findFirst({
          where: { paymentIntentID: payment_intent_id },
          include: { products: true },
        }),
        prisma?.order.update({
          where: { paymentIntentID: payment_intent_id },
          data: {
            amount: total,
            products: {
              deleteMany: {},
              create: items.map((item: Product) => ({
                name: item.name,
                description: item.description,
                quantity: item.quantity,
                price: item.price,
                image: item.image,
              })),
            },
          },
        }),
      ])

      if (!existing_order) {
        return new Response("Order not found", { status: 404 })
      }

      return NextResponse.json(
        { paymentIntent: updated_intent },
        { status: 200 },
      )
    }
  } else {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "brl",
      automatic_payment_methods: { enabled: true },
    })
    orderData.paymentIntentId = paymentIntent.id

    const newOrder = await prisma?.order.create({
      data: orderData,
    })
    return Response.json({ paymentIntent }, { status: 200 })
  }
}

import { useCartStore } from "@/store"
import { useEffect } from "react"

export function Checkout(){
    const cartStore = useCartStore()
    useEffect(()=>{
        fetch("/api/create-payment-intent" , {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                item: cartStore.cart,
                payment_intent_id: cartStore.paymentIntent,
            }),
        } ).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data.paymentIntent)
        })
    },[cartStore.cart , cartStore.paymentIntent])
    return (
        <div className="">cu</div>
    )
}
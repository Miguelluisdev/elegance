import { create } from "zustand"
import { persist } from "zustand/middleware"
import { Product } from "./@types/product"

type CartState = {
  cart: Product[]
  addProduct: (product: Product) => void
  removeProduct: (product: Product) => void
  onCheckout: string
  setCheckout: (checkout: string) => void
  clearCart: () => void // Adicionar clearCart ao estado
  paymentIntent: string
  setPaymentIntent: (paymentIntent: string) => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addProduct: (item) =>
        set((state) => {
          const product = state.cart.find((p) => p.id === item.id)
          if (product) {
            const updatedCart = state.cart.map((p) => {
              if (p.id === item.id) {
                return { ...p, quantity: p.quantity ? p.quantity + 1 : 1 }
              }
              return p
            })
            return { cart: updatedCart }
          }
          return { cart: [...state.cart, { ...item, quantity: 1 }] }
        }),
      removeProduct: (item) =>
        set((state) => {
          const existingProduct = state.cart.find((p) => p.id === item.id)

          if (existingProduct && existingProduct.quantity! > 1) {
            const updatedCart = state.cart.map((p) => {
              if (p.id === item.id) {
                return { ...p, quantity: p.quantity! - 1 }
              }
              return p
            })
            return { cart: updatedCart }
          } else {
            const filteredCart = state.cart.filter((p) => p.id !== item.id)
            return { cart: filteredCart }
          }
        }),
      onCheckout: "cart",
      setCheckout: (checkout) => set(() => ({ onCheckout: checkout })),
      clearCart: () => set({ cart: [] }), // Implementação da função clearCart
      paymentIntent: "",
      setPaymentIntent: (paymentIntent) => set(() => ({ paymentIntent}))
    }),
    { name: "cart-storage" },
  ),
)

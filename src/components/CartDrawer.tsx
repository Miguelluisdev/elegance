import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { formatPrice } from "@/lib/format-price"
import { useCartStore } from "@/store"
import { useUser } from "@clerk/nextjs"
import { ShoppingBag } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Checkout } from "./Checkout"
import EmptyCart from "./EmptyCart"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function CartDrawer() {
  const router = useRouter()
  const { user } = useUser()
  const useStore = useCartStore()
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false)

  const totalPrice = useStore.cart.reduce((total, item) => {
    const itemPrice = item.price ?? 0
    const itemQuantity = item.quantity ?? 1
    return total + itemPrice * itemQuantity
  }, 0)

  const handleCheckout = async () => {
    if (!user) {
      router.push("/sign-in/[[...rest]]")
    } else {
      setIsCheckoutModalOpen(true)
    }
  }

  const confirmCheckout = async () => {
    useStore.setCheckout("checkout")
    useStore.clearCart()
    setIsCheckoutModalOpen(false)
  }

  return (
    <span className="cursor-pointer">
      <Sheet>
        <SheetTrigger>
          <div className="flex relative items-center">
            <ShoppingBag />
            <span className="bg-[#D9A273] font-bold text-2xl rounded-full h-5 w-5 absolute left-3 bottom-3 flex items-center justify-center">
              {useStore.cart.length}
            </span>
          </div>
        </SheetTrigger>
        <SheetContent className="border-none bg-white/50 dark:bg-black/25 overflow-auto">
          <SheetHeader>
            <SheetTitle>Meu Carrinho</SheetTitle>
            <SheetDescription>
              {useStore.cart.length === 0 ? (
                <EmptyCart />
              ) : (
                <>
                  {useStore.cart.map((item) => (
                    <main
                      key={item.id}
                      className="flex flex-col sm:flex-row gap-4 py-4"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="object-cover w-24"
                      />
                      <div className="flex flex-col sm:flex-row justify-between w-full">
                        <div>
                          <h2 className="w-42 font-bold truncate">
                            {item.name}
                          </h2>
                          <h2 className="font-bold text-md ">
                            Quantidade: {item.quantity ?? 1}
                          </h2>
                          <p className="text-[#D9A273] text-md font-bold">
                            {formatPrice(item.price ?? 0)}
                          </p>
                        </div>
                        <div className="flex gap-2 mt-2  sm:mt-0">
                          <button
                            className="text-2xl sm:text-2xl font-bold rounded-full px-2 py-1"
                            onClick={() => useStore.addProduct(item)}
                          >
                            +
                          </button>
                          <button
                            className="text-2xl sm:text-2xl  font-bold rounded-full px-2 py-1"
                            onClick={() => useStore.removeProduct(item)}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </main>
                  ))}
                  <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-300 pt-4 mt-4">
                    <span className="font-bold text-xl">Total:</span>
                    <span className="font-bold text-xl text-[#D9A273]">
                      {formatPrice(totalPrice)}
                    </span>
                    
                    <button
                      onClick={handleCheckout}
                      className="flex items-center justify-center mt-4 rounded-md bg-[#D9A273] text-white px-5 py-2.5 text-center text-sm font-medium hover:bg-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                      Finalizar compra
                    </button>
                  </div>
                </>
              )}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Dialog open={isCheckoutModalOpen} onOpenChange={setIsCheckoutModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmação de Compra</DialogTitle>
            <DialogDescription>
              Tem certeza de que deseja finalizar a compra? Esta ação não pode ser desfeita.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end mt-4">
            <button
              onClick={() => setIsCheckoutModalOpen(false)}
              className="mr-2 px-4 py-2 rounded-md bg-gray-300 text-gray-700 hover:bg-gray-400"
            >
              Cancelar
            </button>
            <button
              onClick={confirmCheckout}
              className="px-4 py-2 rounded-md bg-[#D9A273] text-white hover:bg-slate-500"
            >
              Confirmar
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </span>
  )
}

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { useCartStore } from "@/store"
  import { ShoppingBag } from "lucide-react"
  import EmptyCart from "./EmptyCart"
  import Image from "next/image"
  import { formatPrice } from "@/lib/format-price"
  
  export function CartDrawer() {
    const useStore = useCartStore()
  
    const totalPrice = useStore.cart.reduce((total, item) => {
      const itemPrice = item.price ?? 0
      const itemQuantity = item.quantity ?? 1
      return total + itemPrice * itemQuantity
    }, 0)
  
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
                            <h2 className="w-42 font-bold truncate">{item.name}</h2>
                            <h2 className="font-bold">Quantidade: {item.quantity ?? 1}</h2>
                            <p className="text-[#D9A273] text-md font-bold">
                              {formatPrice(item.price ?? 0)}
                            </p>
                          </div>
                          <div className="flex gap-2 mt-2 pr-20 sm:mt-0">
                            <button
                              className="text-xl sm:text-2xl rounded-full px-2 py-1"
                              onClick={() => useStore.addProduct(item)}
                            >
                              +
                            </button>
                            <button
                              className="text-xl sm:text-2xl rounded-full px-2 py-1"
                              onClick={() => useStore.removeProduct(item)}
                            >
                              -
                            </button>
                          </div>
                        </div>
                      </main>
                    ))}
                    <div className="flex justify-between items-center border-t border-gray-300 pt-4 mt-4">
                      <span className="font-bold text-xl">Total:</span>
                      <span className="font-bold text-xl text-[#D9A273]">
                        {formatPrice(totalPrice)}
                      </span>
                    </div>
                  </>
                )}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </span>
    )
  }
  
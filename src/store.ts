import {create} from "zustand";
import {persist} from "zustand/middleware"
import { Product } from "./@types/product";


type CartState = {
    cart: Product[];
    addProduct: (product: Product) => void;
    // removeProduct: (productId: string) => void;
}

export const useCartStore = create<CartState>()(
    persist((set) => ({
        cart: [],
        addProduct: (item) => set((state) => {
            const product = state.cart.find((p)=> p.id === item.id);
            if(product) {
                const updatedCart = state.cart.map((p) => {
                    if(p.id === item.id) {
                        return {...p , quantity: p.quantity ? p.quantity +1 : 1}
                    }
                    return p;
                })
                return {cart: updatedCart}
            }
            return {cart: [...state.cart , {...item , quantity: 1}]}
        })
    }) , {name: "cart-storage"})
)
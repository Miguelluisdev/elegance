"use client"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useCartStore } from "@/store"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Logs, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { CartDrawer } from "./CartDrawer"
import EmptyCart from "./EmptyCart"
import { ModeToggle } from "./mode-toggle"
export const Navbar = () => {
  const useStore = useCartStore()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader)

      return () => {
        window.removeEventListener("scroll", controlHeader)
      }
    }
  }, [lastScrollY])

  return (
    <header
      className={`sticky top-0 left-0 w-full bg-[#a66c4b00] h-16 z-50 transition-transform  duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="">
        <div className="max-w-7xl mx-auto py-4 px-6 flex items-center justify-around">
          <Link href="/">
            <h1 className="text-2xl font-bold">Elegance</h1>
          </Link>
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <Link
              href="/clothes"
              className={`buttonVariants({variant:"ghost"}) `}
            >
              Produtos
            </Link>
            <div className="flex items-center ">
              {" "}
              <SignedOut>
                <SignInButton mode="modal"> Login</SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
            <span>
              <ModeToggle />
            </span>
            <span className="cursor-pointer">
              <CartDrawer />
            </span>
          </div>
          <div className="flex lg:hidden lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
            <Sheet>
              <SheetTrigger>
                <span className="cursor-pointer">
                  <Logs />
                </span>
              </SheetTrigger>
              <SheetContent className="border-none">
                <SheetHeader>
                  <SheetDescription className="">
                    <div className="ml-4 flex flex-col justify-between items-center m-3 lg:ml-6">
                      <Link
                        href="/clothes"
                        className={`buttonVariants({variant:"ghost"}) text-xl font-bold  `}
                      >
                        Produtos
                      </Link>
                      <span className="m-3">
                        <ModeToggle />
                      </span>
                    </div>

                    <SignedOut>
                      <SignInButton mode="modal"> Login</SignInButton>
                    </SignedOut>
                    <SignedIn>
                      <UserButton />
                    </SignedIn>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
            <span className="cursor-pointer px-5 ">
              <CartDrawer />
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

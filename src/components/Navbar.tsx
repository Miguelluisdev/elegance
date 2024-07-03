"use client"
import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logs, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ModeToggle } from "./mode-toggle"
export const Navbar = () => {
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
      className={`sticky top-0 left-0 w-full bg-[#a66c4b] h-16 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="">
        <div className="max-w-7xl mx-auto py-4 px-6 flex items-center justify-around">
          <Link href="/" >
            <h1 className="text-2xl font-bold">Elegance</h1>
          </Link>
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <Link
              href="/clothes"
              className={`buttonVariants({variant:"ghost"}) text-xl `}
            >
              Produtos
            </Link>
            <Link
              href="/sign-in"
              className={`buttonVariants({variant:"ghost"}) text-xl  `}
            >
              {" "}
              Login
            </Link>
            <span>
              <ModeToggle />
            </span>
            <span className="cursor-pointer">
              <ShoppingBag />
            </span>
          </div>
          <div className="flex lg:hidden lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
            <Sheet>
              <SheetTrigger>
                <span className="cursor-pointer" ><Logs /></span>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetDescription className="">
                    <div className="ml-4 flex flex-col justify-between items-center m-3 lg:ml-6">
                      <Link
                        href="/cu"
                        className={`buttonVariants({variant:"ghost"}) text-xl font-bold  `}
                      >
                        Produtos
                      </Link>
                      <Link
                        href="/sign-in"
                        className={`buttonVariants({variant:"ghost"}) text-xl font-bold  `}
                      >
                        {" "}
                        Login
                      </Link>
                      <span className="m-3"  >
                        <ModeToggle />
                      </span>
                      <span className="cursor-pointer">
                        <ShoppingBag />
                      </span>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

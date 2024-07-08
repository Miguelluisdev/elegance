"use client"
import { Button } from "@/components/ui/button"
import { ArrowBigUp } from "lucide-react"
import  { useEffect, useState } from "react"
const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {isVisible && (
        <Button
          className="fixed bottom-4 right-4 text-white px-6 py-6 rounded-lg"
          onClick={scrollToTop}
        >
          <ArrowBigUp />
        </Button>
      )}
    </>
  )
}

export default ScrollTop

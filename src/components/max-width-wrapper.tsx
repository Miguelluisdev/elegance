"use client"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ReactNode } from "react"
import { variant1 } from "./animation"

export const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <motion.div
      variants={variant1(0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div
        className={cn(
          "mx-auto w-full h-full  max-w-screen-2xl px-2.5",
          className,
        )}
      >
        {children}
      </div>
    </motion.div>
  )
}

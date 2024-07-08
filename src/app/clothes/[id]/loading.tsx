import React from "react"
import SkeletonProcut from "./SkeletonProduct"

export default function Loading() {
  const skeletonCount = 1

  return (
    <main className="flex items-center justify-center h-screen">
      <section className="grid grid-cols-1 gap-10 justify-items-center">
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <SkeletonProcut key={index} isLoading />
        ))}
      </section>
    </main>
  )
}

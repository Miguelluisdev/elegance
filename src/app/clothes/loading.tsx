import SkeletonCard from "@/components/SkeletonCard"

export default function Loading() {
  const skeletonCount = 8 

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20 xl:gap-6 justify-items-center">
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <SkeletonCard key={index} isLoading />
      ))}
    </section>
  )
}
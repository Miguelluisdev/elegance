import clsx from "clsx"
import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonProcut({ isLoading }: { isLoading?: boolean }) {
  return (
    <div
      className={clsx(
        "flex shadow-lg p-5 text-gray-300",
        {
          "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent":
            isLoading,
        },
      )}
    >
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[400px] w-[400px] rounded-xl" />
      </div>
      <div className="flex flex-col p-5 space-y-3">
        <Skeleton className='h-[40px] w-[200px] '/>
        <Skeleton className="h-[50px] w-[150px] rounded-xl" />
        </div>
    </div>
  )
}

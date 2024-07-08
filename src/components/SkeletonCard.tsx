import clsx from "clsx"
import { Skeleton } from "./ui/skeleton"

export default function SkeletonCard({ isLoading }: { isLoading?: boolean }) {
  return (
    <div
      className={clsx(
        "flex flex-col shadow-lg p-5 text-gray-300",
        {
          "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent":
            isLoading,
        },
      )}
    >
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[400px] w-[280px] rounded-xl" />
        <Skeleton className='h-[10px] w-[200px] '/>
        <Skeleton className="h-[50px] w-[150px] rounded-xl" />
      </div>
    </div>
  )
}

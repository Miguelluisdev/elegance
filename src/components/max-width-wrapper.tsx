import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full h-full  max-w-screen-2xl px-2.5",
        className
      )}
    >
      {children}
    </div>
  );
};
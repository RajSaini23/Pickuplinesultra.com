import { cn } from "@/lib/utils"

export const Loader = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-12 w-12 animate-spin rounded-full border-4 border-solid border-t-primary border-r-accent border-b-secondary border-l-transparent",
        className
      )}
    />
  )
}

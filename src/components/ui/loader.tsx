import { cn } from "@/lib/utils"

export const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative h-24 w-24", className)}>
      <div className="absolute inset-0 animate-spin rounded-full border-8 border-solid border-t-[#DB4437] border-r-[#4285F4] border-b-[#0F9D58] border-l-[#F4B400]" />
      <div className="absolute inset-2 animate-spin rounded-full border-8 border-dashed border-t-cyan-400 border-r-purple-400 border-b-fuchsia-400 border-l-orange-400 opacity-70 [animation-direction:reverse]" />
    </div>
  )
}

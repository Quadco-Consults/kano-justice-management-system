import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils/cn"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  text?: string
  fullScreen?: boolean
  className?: string
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
}

export function LoadingSpinner({
  size = "md",
  text,
  fullScreen = false,
  className,
}: LoadingSpinnerProps) {
  const spinner = (
    <div className={cn("flex flex-col items-center justify-center gap-2", className)}>
      <Loader2 className={cn("animate-spin text-[#006403]", sizeClasses[size])} />
      {text && <p className="text-sm text-gray-600">{text}</p>}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
        {spinner}
      </div>
    )
  }

  return spinner
}

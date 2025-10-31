import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils/cn"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#006403] text-white hover:bg-[#004d02]",
        secondary:
          "border-transparent bg-gray-200 text-gray-900 hover:bg-gray-300",
        destructive:
          "border-transparent bg-red-600 text-white hover:bg-red-700",
        outline: "border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
        success:
          "border-transparent bg-[#2D5016] text-white hover:bg-green-700",
        warning:
          "border-transparent bg-[#E67E22] text-white hover:bg-[#D35400]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

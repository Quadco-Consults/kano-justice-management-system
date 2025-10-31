import { Badge } from "@/components/ui/badge"
import { AlertCircle, Circle, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils/cn"

export type PriorityLevel = "low" | "medium" | "high" | "urgent"

interface PriorityIndicatorProps {
  priority: PriorityLevel
  showLabel?: boolean
  className?: string
}

const priorityConfig: Record<
  PriorityLevel,
  {
    label: string
    variant: "default" | "secondary" | "destructive" | "outline" | "success" | "warning"
    icon: React.ReactNode
  }
> = {
  low: {
    label: "Low",
    variant: "secondary",
    icon: <Circle className="w-3 h-3" />,
  },
  medium: {
    label: "Medium",
    variant: "warning",
    icon: <TrendingUp className="w-3 h-3" />,
  },
  high: {
    label: "High",
    variant: "default",
    icon: <AlertCircle className="w-3 h-3" />,
  },
  urgent: {
    label: "Urgent",
    variant: "destructive",
    icon: <AlertCircle className="w-3 h-3 animate-pulse" />,
  },
}

export function PriorityIndicator({
  priority,
  showLabel = true,
  className,
}: PriorityIndicatorProps) {
  const config = priorityConfig[priority]

  if (!showLabel) {
    return (
      <span
        className={cn(
          "inline-flex items-center justify-center",
          priority === "low" && "text-gray-500",
          priority === "medium" && "text-[#E67E22]",
          priority === "high" && "text-[#006403]",
          priority === "urgent" && "text-red-600",
          className
        )}
      >
        {config.icon}
      </span>
    )
  }

  return (
    <Badge variant={config.variant} className={cn("gap-1", className)}>
      {config.icon}
      {config.label}
    </Badge>
  )
}

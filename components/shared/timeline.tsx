import { cn } from "@/lib/utils/cn"
import { Circle, CheckCircle } from "lucide-react"

export interface TimelineItem {
  id: string
  title: string
  description?: string
  date: string
  status: "completed" | "current" | "pending"
  user?: string
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <div key={item.id} className="relative flex gap-4">
          {/* Timeline Line */}
          {index !== items.length - 1 && (
            <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-gray-200" />
          )}

          {/* Timeline Marker */}
          <div className="relative flex-shrink-0 mt-1">
            {item.status === "completed" ? (
              <CheckCircle className="w-6 h-6 text-green-600 fill-green-50" />
            ) : item.status === "current" ? (
              <Circle className="w-6 h-6 text-[#8B1538] fill-[#8B1538]" />
            ) : (
              <Circle className="w-6 h-6 text-gray-300" />
            )}
          </div>

          {/* Timeline Content */}
          <div className="flex-1 pb-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4
                  className={cn(
                    "text-sm font-medium",
                    item.status === "pending" ? "text-gray-500" : "text-gray-900"
                  )}
                >
                  {item.title}
                </h4>
                {item.description && (
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                )}
                {item.user && (
                  <p className="text-xs text-gray-500 mt-1">By {item.user}</p>
                )}
              </div>
              <time className="text-xs text-gray-500 whitespace-nowrap">
                {item.date}
              </time>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

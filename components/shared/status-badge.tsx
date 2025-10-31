import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils/cn"

export type StatusType =
  | "pending"
  | "in-progress"
  | "completed"
  | "approved"
  | "rejected"
  | "cancelled"
  | "draft"
  | "submitted"
  | "under-review"
  | "overdue"
  | "active"
  | "inactive"
  | "won"
  | "lost"
  | "settled"

interface StatusBadgeProps {
  status: StatusType
  className?: string
}

const statusConfig: Record<
  StatusType,
  { label: string; variant: "default" | "secondary" | "destructive" | "outline" | "success" | "warning" }
> = {
  pending: { label: "Pending", variant: "warning" },
  "in-progress": { label: "In Progress", variant: "default" },
  completed: { label: "Completed", variant: "success" },
  approved: { label: "Approved", variant: "success" },
  rejected: { label: "Rejected", variant: "destructive" },
  cancelled: { label: "Cancelled", variant: "secondary" },
  draft: { label: "Draft", variant: "secondary" },
  submitted: { label: "Submitted", variant: "default" },
  "under-review": { label: "Under Review", variant: "warning" },
  overdue: { label: "Overdue", variant: "destructive" },
  active: { label: "Active", variant: "success" },
  inactive: { label: "Inactive", variant: "secondary" },
  won: { label: "Won", variant: "success" },
  lost: { label: "Lost", variant: "destructive" },
  settled: { label: "Settled", variant: "outline" },
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status]

  return (
    <Badge variant={config.variant} className={cn("capitalize", className)}>
      {config.label}
    </Badge>
  )
}

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils/cn"
import {
  FileText,
  Scale,
  AlertCircle,
  CheckCircle,
  XCircle,
  Clock,
  Pause
} from "lucide-react"

export type CaseStatus =
  | "filed"
  | "under-investigation"
  | "in-trial"
  | "verdict-delivered"
  | "appeal"
  | "closed"
  | "dismissed"
  | "pending"

interface CaseStatusIndicatorProps {
  status: CaseStatus
  showIcon?: boolean
  className?: string
}

const caseStatusConfig: Record<
  CaseStatus,
  {
    label: string
    variant: "default" | "secondary" | "destructive" | "outline" | "success" | "warning"
    icon: React.ReactNode
  }
> = {
  "filed": {
    label: "Filed",
    variant: "outline",
    icon: <FileText className="w-3 h-3" />,
  },
  "under-investigation": {
    label: "Under Investigation",
    variant: "warning",
    icon: <AlertCircle className="w-3 h-3" />,
  },
  "in-trial": {
    label: "In Trial",
    variant: "default",
    icon: <Scale className="w-3 h-3" />,
  },
  "verdict-delivered": {
    label: "Verdict Delivered",
    variant: "success",
    icon: <CheckCircle className="w-3 h-3" />,
  },
  "appeal": {
    label: "Appeal",
    variant: "warning",
    icon: <Clock className="w-3 h-3" />,
  },
  "closed": {
    label: "Closed",
    variant: "secondary",
    icon: <CheckCircle className="w-3 h-3" />,
  },
  "dismissed": {
    label: "Dismissed",
    variant: "destructive",
    icon: <XCircle className="w-3 h-3" />,
  },
  "pending": {
    label: "Pending",
    variant: "secondary",
    icon: <Pause className="w-3 h-3" />,
  },
}

export function CaseStatusIndicator({
  status,
  showIcon = true,
  className,
}: CaseStatusIndicatorProps) {
  const config = caseStatusConfig[status] || {
    label: status,
    variant: "secondary" as const,
    icon: <FileText className="w-3 h-3" />
  }

  return (
    <Badge variant={config.variant} className={cn("gap-1.5", className)}>
      {showIcon && config.icon}
      {config.label}
    </Badge>
  )
}

import { LucideIcon } from 'lucide-react'
import clsx from 'clsx'

interface MetricCardProps {
  title: string
  value: string | number
  change?: {
    value: number
    type: 'increase' | 'decrease'
  }
  icon: LucideIcon
  iconColor?: string
  description?: string
}

export default function MetricCard({
  title,
  value,
  change,
  icon: Icon,
  iconColor = 'text-primary-600',
  description
}: MetricCardProps) {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-secondary-600">{title}</p>
          <div className="mt-2">
            <h3 className="text-3xl font-bold text-secondary-900">{value}</h3>
            {change && (
              <div className="mt-1 flex items-center">
                <span
                  className={clsx(
                    'text-sm font-medium',
                    change.type === 'increase' ? 'text-green-600' : 'text-red-600'
                  )}
                >
                  {change.type === 'increase' ? '+' : '-'}{Math.abs(change.value)}%
                </span>
                <span className="text-sm text-secondary-500 ml-1">vs last month</span>
              </div>
            )}
            {description && (
              <p className="text-sm text-secondary-500 mt-1">{description}</p>
            )}
          </div>
        </div>
        <div className={clsx('p-3 rounded-lg bg-primary-50', iconColor)}>
          <Icon className="h-8 w-8" />
        </div>
      </div>
    </div>
  )
}
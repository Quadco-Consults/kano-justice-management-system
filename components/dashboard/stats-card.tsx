import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpIcon, ArrowDownIcon, LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: LucideIcon;
  iconColor: string;
}

export function StatsCard({ title, value, change, icon: Icon, iconColor }: StatsCardProps) {
  const isPositive = change >= 0;

  return (
    <Card className="bg-white border-gray-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-700">{title}</CardTitle>
        <div className={`rounded-full p-2 ${iconColor}`}>
          <Icon className="h-4 w-4 text-white" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <div className="flex items-center text-xs text-gray-600">
          {isPositive ? (
            <ArrowUpIcon className="mr-1 h-3 w-3 text-green-600" />
          ) : (
            <ArrowDownIcon className="mr-1 h-3 w-3 text-red-600" />
          )}
          <span className={isPositive ? 'text-green-700 font-medium' : 'text-red-700 font-medium'}>
            {Math.abs(change)}%
          </span>
          <span className="ml-1 text-gray-600">from last month</span>
        </div>
      </CardContent>
    </Card>
  );
}

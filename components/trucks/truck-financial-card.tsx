'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TruckFinancialSummary } from '@/lib/types';
import { TrendingUp, TrendingDown, DollarSign, CheckCircle, Clock } from 'lucide-react';

interface TruckFinancialCardProps {
  summary: TruckFinancialSummary;
  onClick?: () => void;
}

export function TruckFinancialCard({ summary, onClick }: TruckFinancialCardProps) {
  const profitMargin = summary.totalEarnings > 0
    ? ((summary.netProfit / summary.totalEarnings) * 100).toFixed(1)
    : '0';

  const getROIColor = (roi: number) => {
    if (roi >= 50) return 'text-green-600';
    if (roi >= 20) return 'text-blue-600';
    if (roi >= 0) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={onClick}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{summary.registrationNumber}</CardTitle>
            <p className="text-sm text-gray-500 mt-1">
              {summary.monthsSinceAcquisition} months in service
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            {summary.isBreakEven ? (
              <Badge variant="success" className="gap-1">
                <CheckCircle className="h-3 w-3" />
                Break Even
              </Badge>
            ) : (
              <Badge variant="warning" className="gap-1">
                <Clock className="h-3 w-3" />
                Paying Off
              </Badge>
            )}
            <Badge variant={summary.roi >= 0 ? 'default' : 'destructive'}>
              ROI: {summary.roi.toFixed(1)}%
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Financial Summary */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-500 mb-1">Total Earnings</p>
            <p className="text-lg font-bold text-green-600">
              ₦{summary.totalEarnings.toLocaleString()}
            </p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-500 mb-1">Total Expenses</p>
            <p className="text-lg font-bold text-red-600">
              ₦{summary.totalExpenses.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Net Profit */}
        <div className="p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs font-medium text-blue-600">Net Profit</p>
            <p className="text-xs text-blue-600">Margin: {profitMargin}%</p>
          </div>
          <p className={`text-2xl font-bold ${summary.netProfit >= 0 ? 'text-blue-700' : 'text-red-700'}`}>
            ₦{summary.netProfit.toLocaleString()}
          </p>
        </div>

        {/* Break Even Status */}
        <div className="pt-3 border-t space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Acquisition Cost</span>
            <span className="font-medium">₦{summary.acquisitionCost.toLocaleString()}</span>
          </div>
          {!summary.isBreakEven && (
            <>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Remaining Debt</span>
                <span className="font-medium text-orange-600">
                  ₦{summary.remainingDebt.toLocaleString()}
                </span>
              </div>
              <div className="mt-2">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-500">Progress to Break Even</span>
                  <span className="font-medium">
                    {((summary.netProfit / summary.acquisitionCost) * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600"
                    style={{
                      width: `${Math.min(((summary.netProfit / summary.acquisitionCost) * 100), 100)}%`,
                    }}
                  />
                </div>
              </div>
              {summary.projectedBreakEvenMonths && (
                <p className="text-xs text-gray-500 mt-1">
                  Est. {summary.projectedBreakEvenMonths} more months to break even
                </p>
              )}
            </>
          )}
          {summary.isBreakEven && summary.breakEvenDate && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Break Even Date</span>
              <span className="font-medium text-green-600">
                {new Date(summary.breakEvenDate).toLocaleDateString()}
              </span>
            </div>
          )}
        </div>

        {/* Monthly Performance */}
        <div className="pt-3 border-t">
          <p className="text-xs font-medium text-gray-500 mb-2">This Month</p>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <p className="text-xs text-gray-500">Earnings</p>
              <p className="text-sm font-semibold text-green-600">
                ₦{(summary.monthlyEarnings / 1000).toFixed(0)}k
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Expenses</p>
              <p className="text-sm font-semibold text-red-600">
                ₦{(summary.monthlyExpenses / 1000).toFixed(0)}k
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Profit</p>
              <p className={`text-sm font-semibold ${summary.monthlyProfit >= 0 ? 'text-blue-600' : 'text-red-600'}`}>
                ₦{(summary.monthlyProfit / 1000).toFixed(0)}k
              </p>
            </div>
          </div>
        </div>

        {/* Trip Stats */}
        <div className="pt-3 border-t">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Completed Trips</span>
            <span className="font-medium">{summary.completedTrips} / {summary.totalTrips}</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span className="text-gray-500">Avg. Profit/Trip</span>
            <span className="font-medium">
              ₦{(summary.averageEarningsPerTrip - summary.averageExpensesPerTrip).toLocaleString()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

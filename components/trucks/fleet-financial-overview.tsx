'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FleetFinancialReport } from '@/lib/types';
import { TrendingUp, TrendingDown, Truck, CheckCircle, DollarSign } from 'lucide-react';

interface FleetFinancialOverviewProps {
  report: FleetFinancialReport;
}

export function FleetFinancialOverview({ report }: FleetFinancialOverviewProps) {
  const overallROI = report.totalFleetValue > 0
    ? ((report.totalFleetProfit / report.totalFleetValue) * 100).toFixed(1)
    : '0';

  const profitMargin = report.totalFleetEarnings > 0
    ? ((report.totalFleetProfit / report.totalFleetEarnings) * 100).toFixed(1)
    : '0';

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {/* Fleet Value & ROI */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500 flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            Fleet Value & ROI
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div>
              <p className="text-2xl font-bold">₦{(report.totalFleetValue / 1000000).toFixed(1)}M</p>
              <p className="text-xs text-gray-500">Total Investment</p>
            </div>
            <div className="pt-2 border-t">
              <p className={`text-xl font-bold ${parseFloat(overallROI) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {overallROI}%
              </p>
              <p className="text-xs text-gray-500">Overall ROI</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Total Earnings */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500 flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Total Earnings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div>
              <p className="text-2xl font-bold text-green-600">
                ₦{(report.totalFleetEarnings / 1000000).toFixed(1)}M
              </p>
              <p className="text-xs text-gray-500">Cumulative</p>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-2 border-t text-xs">
              <div>
                <p className="font-semibold">₦{(report.monthlyFleetEarnings / 1000).toFixed(0)}k</p>
                <p className="text-gray-500">This Month</p>
              </div>
              <div>
                <p className="font-semibold">₦{(report.annualFleetEarnings / 1000000).toFixed(1)}M</p>
                <p className="text-gray-500">This Year</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Net Profit */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500 flex items-center gap-2">
            <TrendingDown className="h-4 w-4" />
            Net Profit
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div>
              <p className={`text-2xl font-bold ${report.totalFleetProfit >= 0 ? 'text-blue-600' : 'text-red-600'}`}>
                ₦{(report.totalFleetProfit / 1000000).toFixed(1)}M
              </p>
              <p className="text-xs text-gray-500">Margin: {profitMargin}%</p>
            </div>
            <div className="pt-2 border-t">
              <p className="text-sm font-medium text-orange-600">
                ₦{(report.totalRemainingDebt / 1000000).toFixed(1)}M
              </p>
              <p className="text-xs text-gray-500">Remaining Debt</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Fleet Status */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500 flex items-center gap-2">
            <Truck className="h-4 w-4" />
            Fleet Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Total Trucks</span>
              <span className="text-lg font-bold">{report.trucks.length}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <CheckCircle className="h-3 w-3 text-green-600" />
                Break Even
              </span>
              <span className="text-lg font-bold text-green-600">{report.breakEvenTrucks}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Profitable</span>
              <span className="text-lg font-bold text-blue-600">{report.profitableTrucks}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

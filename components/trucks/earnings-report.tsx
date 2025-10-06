'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TruckFinancialSummary } from '@/lib/types';
import { Calendar, Download, TrendingUp } from 'lucide-react';

interface MonthlyReport {
  month: string;
  earnings: number;
  expenses: number;
  profit: number;
  trips: number;
}

interface EarningsReportProps {
  summary: TruckFinancialSummary;
  monthlyData: MonthlyReport[];
}

export function EarningsReport({ summary, monthlyData }: EarningsReportProps) {
  const [viewMode, setViewMode] = useState<'monthly' | 'annual'>('monthly');

  // Calculate annual totals
  const annualData = monthlyData.reduce(
    (acc, month) => ({
      earnings: acc.earnings + month.earnings,
      expenses: acc.expenses + month.expenses,
      profit: acc.profit + month.profit,
      trips: acc.trips + month.trips,
    }),
    { earnings: 0, expenses: 0, profit: 0, trips: 0 }
  );

  const handleExport = () => {
    // Implement CSV export
    console.log('Exporting report...');
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Earnings Report - {summary.registrationNumber}</CardTitle>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant={viewMode === 'monthly' ? 'default' : 'outline'}
              onClick={() => setViewMode('monthly')}
            >
              Monthly
            </Button>
            <Button
              size="sm"
              variant={viewMode === 'annual' ? 'default' : 'outline'}
              onClick={() => setViewMode('annual')}
            >
              Annual
            </Button>
            <Button size="sm" variant="outline" onClick={handleExport}>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {viewMode === 'monthly' ? (
          <div className="space-y-3">
            <div className="grid grid-cols-5 gap-4 pb-2 border-b font-medium text-sm text-gray-500">
              <div>Month</div>
              <div className="text-right">Earnings</div>
              <div className="text-right">Expenses</div>
              <div className="text-right">Profit</div>
              <div className="text-right">Trips</div>
            </div>
            {monthlyData.map((month, index) => (
              <div key={index} className="grid grid-cols-5 gap-4 items-center">
                <div className="font-medium">{month.month}</div>
                <div className="text-right text-green-600">
                  ₦{month.earnings.toLocaleString()}
                </div>
                <div className="text-right text-red-600">
                  ₦{month.expenses.toLocaleString()}
                </div>
                <div className={`text-right font-semibold ${month.profit >= 0 ? 'text-blue-600' : 'text-red-600'}`}>
                  ₦{month.profit.toLocaleString()}
                </div>
                <div className="text-right">{month.trips}</div>
              </div>
            ))}
            <div className="grid grid-cols-5 gap-4 pt-3 border-t font-bold">
              <div>Total (Year to Date)</div>
              <div className="text-right text-green-600">
                ₦{annualData.earnings.toLocaleString()}
              </div>
              <div className="text-right text-red-600">
                ₦{annualData.expenses.toLocaleString()}
              </div>
              <div className={`text-right ${annualData.profit >= 0 ? 'text-blue-600' : 'text-red-600'}`}>
                ₦{annualData.profit.toLocaleString()}
              </div>
              <div className="text-right">{annualData.trips}</div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Annual Summary Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-600 mb-1">Total Earnings</p>
                <p className="text-2xl font-bold text-green-700">
                  ₦{summary.annualEarnings.toLocaleString()}
                </p>
                <p className="text-xs text-green-600 mt-1">
                  Avg: ₦{(summary.annualEarnings / 12).toLocaleString()}/month
                </p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <p className="text-sm text-red-600 mb-1">Total Expenses</p>
                <p className="text-2xl font-bold text-red-700">
                  ₦{summary.annualExpenses.toLocaleString()}
                </p>
                <p className="text-xs text-red-600 mt-1">
                  Avg: ₦{(summary.annualExpenses / 12).toLocaleString()}/month
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-600 mb-1">Annual Profit</p>
                <p className={`text-2xl font-bold ${summary.annualProfit >= 0 ? 'text-blue-700' : 'text-red-700'}`}>
                  ₦{summary.annualProfit.toLocaleString()}
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  Margin: {summary.annualEarnings > 0 ? ((summary.annualProfit / summary.annualEarnings) * 100).toFixed(1) : 0}%
                </p>
              </div>
            </div>

            {/* Trend Chart (Simple Bar Representation) */}
            <div>
              <p className="text-sm font-medium mb-3">Monthly Profit Trend</p>
              <div className="space-y-2">
                {monthlyData.map((month, index) => {
                  const maxProfit = Math.max(...monthlyData.map((m) => Math.abs(m.profit)));
                  const barWidth = maxProfit > 0 ? (Math.abs(month.profit) / maxProfit) * 100 : 0;

                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-16 text-xs text-gray-600">{month.month}</div>
                      <div className="flex-1 flex items-center gap-2">
                        <div className="flex-1 bg-gray-100 rounded h-6 relative overflow-hidden">
                          <div
                            className={`h-full ${month.profit >= 0 ? 'bg-blue-500' : 'bg-red-500'}`}
                            style={{ width: `${barWidth}%` }}
                          />
                        </div>
                        <div className="w-24 text-right text-sm font-medium">
                          ₦{(month.profit / 1000).toFixed(0)}k
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div>
                <p className="text-sm text-gray-500 mb-1">Best Month</p>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="font-semibold">
                    {monthlyData.reduce((best, month) =>
                      month.profit > best.profit ? month : best
                    ).month}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Trips</p>
                <p className="text-lg font-bold">{annualData.trips}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Avg Profit/Trip</p>
                <p className="text-lg font-bold">
                  ₦{annualData.trips > 0 ? (annualData.profit / annualData.trips).toLocaleString() : 0}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Profitable Months</p>
                <p className="text-lg font-bold text-green-600">
                  {monthlyData.filter((m) => m.profit > 0).length} / {monthlyData.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

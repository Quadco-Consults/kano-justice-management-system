'use client';

import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { StatCard } from '@/components/shared/stat-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gavel, FileText, Scale, Clock, TrendingUp, AlertCircle } from 'lucide-react';
import { StatusBadge } from '@/components/shared/status-badge';

export default function DashboardPage() {
  // Mock data - replace with actual API calls
  const stats = {
    totalCases: 1247,
    pendingAdvisory: 38,
    activeProsecution: 156,
    civilLitigation: 89,
  };

  const recentAdvisory = [
    { id: 1, agency: 'Ministry of Education', subject: 'Contract Review - School Construction', status: 'pending', date: '2 hours ago' },
    { id: 2, agency: 'Ministry of Health', subject: 'Legal Opinion on Procurement', status: 'in-progress', date: '5 hours ago' },
    { id: 3, agency: 'Ministry of Works', subject: 'Compliance Advisory', status: 'completed', date: '1 day ago' },
    { id: 4, agency: 'Ministry of Agriculture', subject: 'Policy Review', status: 'under-review', date: '2 days ago' },
    { id: 5, agency: 'Ministry of Finance', subject: 'Contract Vetting', status: 'pending', date: '3 days ago' },
  ];

  const activeProsecutions = [
    { id: 1, caseNo: 'CR/45/2025', accused: 'State v. Ahmad Musa', offense: 'Armed Robbery', court: 'High Court 1', status: 'in-trial' },
    { id: 2, caseNo: 'CR/46/2025', accused: 'State v. Fatima Ibrahim', offense: 'Fraud', court: 'High Court 2', status: 'under-investigation' },
    { id: 3, caseNo: 'CR/47/2025', accused: 'State v. Yusuf Ali', offense: 'Assault', court: 'Magistrate Court 3', status: 'filed' },
    { id: 4, caseNo: 'CR/48/2025', accused: 'State v. Hauwa Sani', offense: 'Embezzlement', court: 'High Court 1', status: 'in-trial' },
    { id: 5, caseNo: 'CR/49/2025', accused: 'State v. Ibrahim Garba', offense: 'Theft', court: 'Magistrate Court 1', status: 'pending' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Overview of Ministry of Justice operations</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Cases"
            value={stats.totalCases.toString()}
            icon={Gavel}
            description="All active matters"
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            title="Pending Advisory"
            value={stats.pendingAdvisory.toString()}
            icon={FileText}
            description="Awaiting review"
            trend={{ value: 5, isPositive: false }}
          />
          <StatCard
            title="Active Prosecution"
            value={stats.activeProsecution.toString()}
            icon={Gavel}
            description="Ongoing cases"
          />
          <StatCard
            title="Civil Litigation"
            value={stats.civilLitigation.toString()}
            icon={Scale}
            description="Active litigation"
            trend={{ value: 8, isPositive: true }}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Recent Advisory Requests */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#8B1538]" />
                Recent Advisory Requests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAdvisory.map((item) => (
                  <div key={item.id} className="flex items-start justify-between pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{item.agency}</p>
                      <p className="text-xs text-gray-600 truncate">{item.subject}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                    </div>
                    <StatusBadge status={item.status as any} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Active Prosecutions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gavel className="w-5 h-5 text-[#8B1538]" />
                Active Prosecutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeProsecutions.map((item) => (
                  <div key={item.id} className="flex items-start justify-between pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{item.caseNo}</p>
                      <p className="text-xs text-gray-600 truncate">{item.accused}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500">{item.offense}</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500">{item.court}</span>
                      </div>
                    </div>
                    <StatusBadge status={item.status as any} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Average Response Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold text-gray-900">4.2</p>
                <p className="text-sm text-gray-600">days</p>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <TrendingUp className="w-3 h-3 text-green-600" />
                <span className="text-xs text-green-600">15% faster than last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <Gavel className="w-4 h-4" />
                Conviction Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold text-gray-900">78%</p>
                <p className="text-sm text-gray-600">success</p>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <TrendingUp className="w-3 h-3 text-green-600" />
                <span className="text-xs text-green-600">3% increase</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Overdue Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold text-gray-900">12</p>
                <p className="text-sm text-gray-600">items</p>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-xs text-orange-600">Requires attention</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

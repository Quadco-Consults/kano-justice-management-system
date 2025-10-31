"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Scale,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle,
  XCircle,
  DollarSign,
  Calendar,
  FileText,
  AlertCircle,
  Award,
  Gavel,
  Users,
  Building2
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const mockDashboardData = {
  overview: {
    totalCases: 127,
    activeCases: 45,
    wonCases: 58,
    settledCases: 18,
    lostCases: 6,
    pendingCases: 45,
    totalClaimAmount: "₦2,450,000,000",
    totalRecovered: "₦1,680,000,000",
    totalCosts: "₦42,500,000",
    averageResolutionDays: 287,
    successRate: 92.8
  },
  trends: {
    casesFiledThisMonth: 8,
    casesFiledLastMonth: 12,
    casesResolvedThisMonth: 5,
    casesResolvedLastMonth: 7,
    avgResolutionThisQuarter: 287,
    avgResolutionLastQuarter: 312
  },
  byCategory: [
    { id: 'CL-001', name: 'Contract Disputes', total: 42, active: 15, won: 20, settled: 5, lost: 2, claimAmount: '₦850M' },
    { id: 'CL-002', name: 'Land Disputes', total: 28, active: 10, won: 12, settled: 4, lost: 2, claimAmount: '₦620M' },
    { id: 'CL-005', name: 'Debt Recovery', total: 24, active: 8, won: 12, settled: 3, lost: 1, claimAmount: '₦480M' },
    { id: 'CL-003', name: 'Employment Matters', total: 18, active: 7, won: 8, settled: 3, lost: 0, claimAmount: '₦280M' },
    { id: 'CL-006', name: 'Breach of Agreement', total: 15, active: 5, won: 6, settled: 3, lost: 1, claimAmount: '₦220M' }
  ],
  byCourt: [
    { id: 'CL-001', name: 'Federal High Court', cases: 45, active: 18, won: 20, success: 95.2 },
    { id: 'CL-002', name: 'State High Court', cases: 38, active: 12, won: 18, success: 90.0 },
    { id: 'CL-003', name: 'Magistrate Court', cases: 28, active: 10, won: 14, success: 93.3 },
    { id: 'CL-007', name: 'Customary Court', cases: 16, active: 5, won: 6, success: 85.7 }
  ],
  byCounsel: [
    { name: 'Barr. Fatima Ibrahim', cases: 28, active: 12, won: 13, success: 96.3 },
    { name: 'Barr. Yusuf Ali', cases: 24, active: 10, won: 11, success: 91.7 },
    { name: 'Barr. Ibrahim Bello', cases: 22, active: 8, won: 10, success: 90.9 },
    { name: 'Barr. Amina Yusuf', cases: 18, active: 7, won: 9, success: 94.7 },
    { name: 'Others', cases: 35, active: 8, won: 15, success: 88.2 }
  ],
  upcomingHearings: [
    { suitNo: 'CL-001', title: 'Kano State v. ABC Construction', court: 'Federal High Court', date: '2025-11-15', purpose: 'Trial Continuation' },
    { suitNo: 'CL-002', title: 'State v. XYZ Properties Ltd', court: 'State High Court', date: '2025-11-16', purpose: 'Judgment' },
    { suitNo: 'CL-003', title: 'State v. John Doe', court: 'Magistrate Court', date: '2025-11-18', purpose: 'Motion Hearing' },
    { suitNo: 'CL-004', title: 'Ministry of Works v. Contractor', court: 'Federal High Court', date: '2025-11-20', purpose: 'Pre-Trial Conference' }
  ],
  criticalCases: [
    { suitNo: 'CL-001', title: 'ABC Construction Contract Breach', status: 'Trial', daysInCourt: 92, claimAmount: '₦25M', nextHearing: '2025-11-15' },
    { suitNo: 'CL-002', title: 'XYZ Land Dispute', status: 'Awaiting Judgment', daysInCourt: 156, claimAmount: '₦45M', nextHearing: '2025-11-16' },
    { suitNo: 'CL-005', title: 'Debt Recovery - ABC Bank', status: 'Appeal', daysInCourt: 387, claimAmount: '₦120M', nextHearing: '2025-12-05' }
  ],
  allCases: [
    { suitNo: 'CL-001', title: 'ABC Construction Contract Breach', category: 'Contract Disputes', court: 'Federal High Court', status: 'in-trial', claimAmount: '₦25M', counsel: 'Barr. Fatima Ibrahim', filingDate: '2025-08-15', nextHearing: '2025-11-15' },
    { suitNo: 'CL-002', title: 'XYZ Properties Land Dispute', category: 'Land Disputes', court: 'State High Court', status: 'awaiting-judgment', claimAmount: '₦45M', counsel: 'Barr. Yusuf Ali', filingDate: '2025-05-22', nextHearing: '2025-11-16' },
    { suitNo: 'CL-003', title: 'John Doe Employment Dispute', category: 'Employment Matters', court: 'Magistrate Court', status: 'in-trial', claimAmount: '₦8M', counsel: 'Barr. Amina Yusuf', filingDate: '2025-09-10', nextHearing: '2025-11-18' },
    { suitNo: 'CL-004', title: 'Ministry of Works v. Contractor', category: 'Contract Disputes', court: 'Federal High Court', status: 'pre-trial', claimAmount: '₦35M', counsel: 'Barr. Ibrahim Bello', filingDate: '2025-07-05', nextHearing: '2025-11-20' },
    { suitNo: 'CL-005', title: 'ABC Bank Debt Recovery', category: 'Debt Recovery', court: 'Federal High Court', status: 'appeal', claimAmount: '₦120M', counsel: 'Barr. Fatima Ibrahim', filingDate: '2024-03-12', nextHearing: '2025-12-05' },
    { suitNo: 'CL-006', title: 'Commercial Lease Agreement Breach', category: 'Breach of Agreement', court: 'State High Court', status: 'settled', claimAmount: '₦18M', counsel: 'Barr. Yusuf Ali', filingDate: '2025-02-14', nextHearing: null },
    { suitNo: 'CL-007', title: 'Land Boundary Dispute - Plot 123', category: 'Land Disputes', court: 'State High Court', status: 'won', claimAmount: '₦22M', counsel: 'Barr. Ibrahim Bello', filingDate: '2025-01-08', nextHearing: null },
    { suitNo: 'CL-008', title: 'Wrongful Termination Case', category: 'Employment Matters', court: 'Magistrate Court', status: 'in-trial', claimAmount: '₦5M', counsel: 'Barr. Amina Yusuf', filingDate: '2025-08-20', nextHearing: '2025-11-22' },
    { suitNo: 'CL-009', title: 'Supply Contract Dispute', category: 'Contract Disputes', court: 'Federal High Court', status: 'won', claimAmount: '₦42M', counsel: 'Barr. Fatima Ibrahim', filingDate: '2025-04-03', nextHearing: null },
    { suitNo: 'CL-010', title: 'Partnership Dissolution', category: 'Breach of Agreement', court: 'State High Court', status: 'in-trial', claimAmount: '₦28M', counsel: 'Barr. Yusuf Ali', filingDate: '2025-06-18', nextHearing: '2025-11-25' }
  ]
}

export function LitigationDashboard() {
  const [timeFilter, setTimeFilter] = useState("all")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Civil Litigation Dashboard</h1>
          <p className="text-gray-600">Comprehensive analytics and case management overview</p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={timeFilter} onValueChange={setTimeFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>
          <Link href="/civil-litigation/new">
            <Button>
              <FileText className="w-4 h-4 mr-2" />
              File New Suit
            </Button>
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview & Analytics</TabsTrigger>
          <TabsTrigger value="cases">All Cases</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-6">

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Cases</p>
                <p className="text-3xl font-bold text-gray-900">{mockDashboardData.overview.totalCases}</p>
                <p className="text-xs text-gray-500 mt-1">{mockDashboardData.overview.activeCases} active</p>
              </div>
              <Scale className="w-10 h-10 text-gray-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Success Rate</p>
                <p className="text-3xl font-bold text-green-600">{mockDashboardData.overview.successRate}%</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-green-600" />
                  <p className="text-xs text-green-600">+2.4% vs last quarter</p>
                </div>
              </div>
              <Award className="w-10 h-10 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Resolution Time</p>
                <p className="text-3xl font-bold text-blue-600">{mockDashboardData.overview.averageResolutionDays}</p>
                <p className="text-xs text-gray-500 mt-1">days</p>
              </div>
              <Clock className="w-10 h-10 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Recovered</p>
                <p className="text-2xl font-bold text-[#006403]">{mockDashboardData.overview.totalRecovered}</p>
                <p className="text-xs text-gray-500 mt-1">of {mockDashboardData.overview.totalClaimAmount} claimed</p>
              </div>
              <DollarSign className="w-10 h-10 text-[#006403]" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Case Status Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Case Status Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-sm font-medium text-green-900">Won</p>
              </div>
              <p className="text-2xl font-bold text-green-900">{mockDashboardData.overview.wonCases}</p>
              <p className="text-xs text-green-700 mt-1">45.7% of total</p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Gavel className="w-5 h-5 text-blue-600" />
                <p className="text-sm font-medium text-blue-900">Settled</p>
              </div>
              <p className="text-2xl font-bold text-blue-900">{mockDashboardData.overview.settledCases}</p>
              <p className="text-xs text-blue-700 mt-1">14.2% of total</p>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                <p className="text-sm font-medium text-orange-900">Pending</p>
              </div>
              <p className="text-2xl font-bold text-orange-900">{mockDashboardData.overview.pendingCases}</p>
              <p className="text-xs text-orange-700 mt-1">35.4% of total</p>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-5 h-5 text-red-600" />
                <p className="text-sm font-medium text-red-900">Lost</p>
              </div>
              <p className="text-2xl font-bold text-red-900">{mockDashboardData.overview.lostCases}</p>
              <p className="text-xs text-red-700 mt-1">4.7% of total</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-gray-600" />
                <p className="text-sm font-medium text-gray-900">Total Costs</p>
              </div>
              <p className="text-xl font-bold text-gray-900">{mockDashboardData.overview.totalCosts}</p>
              <p className="text-xs text-gray-700 mt-1">Litigation expenses</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cases by Category */}
        <Card>
          <CardHeader>
            <CardTitle>Cases by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockDashboardData.byCategory.map((category, index) => (
                <Link key={index} href={`/civil-litigation/${category.id}`}>
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-[#006403] hover:shadow-sm transition-all cursor-pointer">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-semibold text-gray-900">{category.name}</p>
                        <p className="text-sm text-gray-600">Claim Amount: {category.claimAmount}</p>
                      </div>
                      <Badge className="bg-gray-100 text-gray-900">{category.total} cases</Badge>
                    </div>
                    <div className="grid grid-cols-4 gap-3 text-sm">
                      <div>
                        <p className="text-gray-600">Active</p>
                        <p className="font-semibold text-orange-600">{category.active}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Won</p>
                        <p className="font-semibold text-green-600">{category.won}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Settled</p>
                        <p className="font-semibold text-blue-600">{category.settled}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Lost</p>
                        <p className="font-semibold text-red-600">{category.lost}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Cases by Court */}
        <Card>
          <CardHeader>
            <CardTitle>Performance by Court</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockDashboardData.byCourt.map((court, index) => (
                <Link key={index} href={`/civil-litigation/${court.id}`}>
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-[#006403] hover:shadow-sm transition-all cursor-pointer">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-gray-400" />
                        <p className="font-semibold text-gray-900">{court.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-green-600">{court.success}%</p>
                        <p className="text-xs text-gray-500">success rate</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-sm">
                      <div>
                        <p className="text-gray-600">Total</p>
                        <p className="font-semibold text-gray-900">{court.cases}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Active</p>
                        <p className="font-semibold text-orange-600">{court.active}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Won</p>
                        <p className="font-semibold text-green-600">{court.won}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Counsel Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Counsel Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockDashboardData.byCounsel.map((counsel, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#006403] transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#006403]/10 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#006403]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{counsel.name}</p>
                    <p className="text-sm text-gray-600">{counsel.cases} total cases • {counsel.active} active</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">{counsel.won}</p>
                    <p className="text-xs text-gray-600">Won</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#006403]">{counsel.success}%</p>
                    <p className="text-xs text-gray-600">Success Rate</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Hearings */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Upcoming Hearings</CardTitle>
              <Link href="/civil-litigation/calendar">
                <Button variant="outline" size="sm">View Calendar</Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockDashboardData.upcomingHearings.map((hearing, index) => (
                <Link key={index} href={`/civil-litigation/${hearing.suitNo}`}>
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-[#006403] hover:shadow-sm transition-all cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{hearing.suitNo}</Badge>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(hearing.date).toLocaleDateString('en-NG')}</span>
                      </div>
                    </div>
                    <p className="font-medium text-gray-900 mb-1">{hearing.title}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{hearing.court}</span>
                      <Badge className="bg-blue-100 text-blue-800">{hearing.purpose}</Badge>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Critical Cases */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Critical Cases</CardTitle>
              <Link href="/civil-litigation?filter=critical">
                <Button variant="outline" size="sm">View All</Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockDashboardData.criticalCases.map((caseItem, index) => (
                <Link key={index} href={`/civil-litigation/${caseItem.suitNo}`}>
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-[#006403] hover:shadow-sm transition-all cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{caseItem.suitNo}</Badge>
                      <Badge className="bg-red-100 text-red-800">
                        {caseItem.daysInCourt} days in court
                      </Badge>
                    </div>
                    <p className="font-medium text-gray-900 mb-2">{caseItem.title}</p>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <p className="text-gray-600">Status</p>
                        <p className="font-medium text-gray-900">{caseItem.status}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Claim</p>
                        <p className="font-medium text-[#006403]">{caseItem.claimAmount}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Next Date</p>
                        <p className="font-medium text-gray-900">
                          {new Date(caseItem.nextHearing).toLocaleDateString('en-NG', { month: 'short', day: 'numeric' })}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
        </TabsContent>

        {/* Cases Tab */}
        <TabsContent value="cases" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>All Civil Litigation Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockDashboardData.allCases.map((caseItem, index) => (
                  <Link key={index} href={`/civil-litigation/${caseItem.suitNo}`}>
                    <div className="p-4 border border-gray-200 rounded-lg hover:border-[#006403] hover:shadow-sm transition-all cursor-pointer">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline">{caseItem.suitNo}</Badge>
                            <Badge
                              className={
                                caseItem.status === 'won'
                                  ? 'bg-green-100 text-green-800'
                                  : caseItem.status === 'settled'
                                  ? 'bg-blue-100 text-blue-800'
                                  : caseItem.status === 'in-trial'
                                  ? 'bg-orange-100 text-orange-800'
                                  : caseItem.status === 'awaiting-judgment'
                                  ? 'bg-purple-100 text-purple-800'
                                  : caseItem.status === 'appeal'
                                  ? 'bg-red-100 text-red-800'
                                  : 'bg-gray-100 text-gray-800'
                              }
                            >
                              {caseItem.status.replace('-', ' ')}
                            </Badge>
                          </div>
                          <p className="font-semibold text-gray-900 mb-1">{caseItem.title}</p>
                          <p className="text-sm text-gray-600">{caseItem.category}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-[#006403]">{caseItem.claimAmount}</p>
                          <p className="text-xs text-gray-500">Claim Amount</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 text-sm pt-3 border-t border-gray-100">
                        <div>
                          <p className="text-gray-600">Court</p>
                          <p className="font-medium text-gray-900">{caseItem.court}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Counsel</p>
                          <p className="font-medium text-gray-900">{caseItem.counsel}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Filed</p>
                          <p className="font-medium text-gray-900">
                            {new Date(caseItem.filingDate).toLocaleDateString('en-NG', { month: 'short', year: 'numeric' })}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">Next Hearing</p>
                          <p className="font-medium text-gray-900">
                            {caseItem.nextHearing
                              ? new Date(caseItem.nextHearing).toLocaleDateString('en-NG', { month: 'short', day: 'numeric' })
                              : 'N/A'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

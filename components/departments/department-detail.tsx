"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Building2,
  Users,
  Briefcase,
  User,
  Mail,
  Phone,
  Settings,
  TrendingUp,
  Award
} from "lucide-react"
import Link from "next/link"

const mockDepartment = {
  id: 1,
  name: 'Public Prosecution',
  code: 'PROS',
  head: {
    name: 'Barr. Ahmad Sani',
    email: 'ahmad.sani@justice.kano.gov.ng',
    phone: '+234 803 234 5678'
  },
  description: 'Handles criminal prosecution and case management for the state',
  staffCount: 12,
  activeCases: 156,
  completedCases: 342,
  convictionRate: 78,
  avgCaseResolution: 45, // days
  staff: [
    {
      id: 1,
      name: 'Ahmad Sani',
      role: 'Director',
      email: 'ahmad.sani@justice.kano.gov.ng',
      status: 'active',
      activeCases: 8
    },
    {
      id: 2,
      name: 'Maryam Usman',
      role: 'Senior State Counsel',
      email: 'maryam.usman@justice.kano.gov.ng',
      status: 'active',
      activeCases: 15
    },
    {
      id: 3,
      name: 'Ibrahim Yusuf',
      role: 'State Counsel',
      email: 'ibrahim.yusuf@justice.kano.gov.ng',
      status: 'active',
      activeCases: 12
    },
    {
      id: 4,
      name: 'Fatima Abdullahi',
      role: 'Legal Officer',
      email: 'fatima.abdullahi@justice.kano.gov.ng',
      status: 'active',
      activeCases: 10
    },
    {
      id: 5,
      name: 'Hassan Mohammed',
      role: 'Legal Officer',
      email: 'hassan.mohammed@justice.kano.gov.ng',
      status: 'active',
      activeCases: 9
    }
  ],
  recentCases: [
    {
      id: 1,
      caseNo: 'PROS-20251028-012',
      title: 'State v. Aliyu Bala - Armed Robbery',
      status: 'in-progress',
      assignedTo: 'Maryam Usman',
      nextHearing: '2025-11-05'
    },
    {
      id: 2,
      caseNo: 'PROS-20251027-011',
      title: 'State v. Ibrahim Sani - Fraud',
      status: 'pending',
      assignedTo: 'Ibrahim Yusuf',
      nextHearing: '2025-11-08'
    },
    {
      id: 3,
      caseNo: 'PROS-20251026-010',
      title: 'State v. Fatima Hassan - Embezzlement',
      status: 'completed',
      assignedTo: 'Ahmad Sani',
      completedDate: '2025-10-30'
    }
  ],
  performance: {
    monthlyStats: [
      { month: 'Jun', cases: 45, convictions: 35 },
      { month: 'Jul', cases: 52, convictions: 41 },
      { month: 'Aug', cases: 48, convictions: 38 },
      { month: 'Sep', cases: 56, convictions: 44 },
      { month: 'Oct', cases: 61, convictions: 48 }
    ]
  }
}

export function DepartmentDetail() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/departments">
            <Button variant="outline" size="sm">← Back</Button>
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-gray-900">{mockDepartment.name}</h1>
              <Badge variant="outline">{mockDepartment.code}</Badge>
            </div>
            <p className="text-gray-600">{mockDepartment.description}</p>
          </div>
        </div>
        <Button variant="outline">
          <Settings className="w-4 h-4 mr-2" />
          Edit Department
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Staff Members</p>
                <p className="text-2xl font-bold text-gray-900">{mockDepartment.staffCount}</p>
              </div>
              <Users className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Cases</p>
                <p className="text-2xl font-bold text-[#8B1538]">{mockDepartment.activeCases}</p>
              </div>
              <Briefcase className="w-8 h-8 text-[#8B1538]" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed Cases</p>
                <p className="text-2xl font-bold text-green-600">{mockDepartment.completedCases}</p>
              </div>
              <Award className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Conviction Rate</p>
                <p className="text-2xl font-bold text-blue-600">{mockDepartment.convictionRate}%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Resolution</p>
                <p className="text-2xl font-bold text-orange-600">{mockDepartment.avgCaseResolution}</p>
                <p className="text-xs text-gray-500">days</p>
              </div>
              <Briefcase className="w-8 h-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="staff">Staff</TabsTrigger>
          <TabsTrigger value="cases">Recent Cases</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Department Head</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-[#8B1538]/10 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-[#8B1538]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{mockDepartment.head.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">Director of Public Prosecutions</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Mail className="w-4 h-4" />
                      <span>{mockDepartment.head.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Phone className="w-4 h-4" />
                      <span>{mockDepartment.head.phone}</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">View Profile</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Department Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Department Code</p>
                  <p className="font-medium text-gray-900">{mockDepartment.code}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Total Staff</p>
                  <p className="font-medium text-gray-900">{mockDepartment.staffCount}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Active Cases</p>
                  <p className="font-medium text-gray-900">{mockDepartment.activeCases}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Completed Cases</p>
                  <p className="font-medium text-gray-900">{mockDepartment.completedCases}</p>
                </div>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600 mb-2">Description</p>
                <p className="text-gray-900">{mockDepartment.description}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Staff Tab */}
        <TabsContent value="staff" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Department Staff</CardTitle>
                <Button size="sm">
                  <Users className="w-4 h-4 mr-2" />
                  Add Staff Member
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockDepartment.staff.map((staff) => (
                  <div
                    key={staff.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#8B1538] transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#8B1538]/10 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-[#8B1538]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <p className="font-semibold text-gray-900">{staff.name}</p>
                          <Badge variant="outline">{staff.role}</Badge>
                          <Badge variant="success">{staff.status}</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Mail className="w-4 h-4" />
                            <span>{staff.email}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{staff.activeCases} active cases</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">View Profile</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Cases Tab */}
        <TabsContent value="cases" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockDepartment.recentCases.map((case_) => (
                  <div
                    key={case_.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#8B1538] transition-all"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <p className="font-semibold text-gray-900">{case_.caseNo}</p>
                        <Badge
                          variant={
                            case_.status === 'in-progress'
                              ? 'default'
                              : case_.status === 'completed'
                              ? 'success'
                              : 'secondary'
                          }
                        >
                          {case_.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{case_.title}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>Assigned to: {case_.assignedTo}</span>
                        {case_.nextHearing && (
                          <span>Next hearing: {new Date(case_.nextHearing).toLocaleDateString('en-NG')}</span>
                        )}
                        {case_.completedDate && (
                          <span>Completed: {new Date(case_.completedDate).toLocaleDateString('en-NG')}</span>
                        )}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">View Case</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Performance Tab */}
        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockDepartment.performance.monthlyStats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-900">{stat.month} 2025</span>
                      <span className="text-gray-600">
                        {stat.convictions} / {stat.cases} ({Math.round((stat.convictions / stat.cases) * 100)}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#8B1538] h-2 rounded-full"
                        style={{ width: `${(stat.convictions / stat.cases) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Average Conviction Rate</p>
                  <p className="text-3xl font-bold text-[#8B1538]">{mockDepartment.convictionRate}%</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Avg Case Resolution</p>
                  <p className="text-3xl font-bold text-blue-600">{mockDepartment.avgCaseResolution}</p>
                  <p className="text-xs text-gray-500">days</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Cases per Staff</p>
                  <p className="text-3xl font-bold text-green-600">
                    {Math.round(mockDepartment.activeCases / mockDepartment.staffCount)}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

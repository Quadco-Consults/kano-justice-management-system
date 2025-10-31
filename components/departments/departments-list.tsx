"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Building2, Users, Briefcase, MoreVertical } from "lucide-react"
import Link from "next/link"

const mockDepartments = [
  {
    id: 1,
    name: 'Public Prosecution',
    code: 'PROS',
    head: 'Barr. Ahmad Sani',
    staffCount: 12,
    activeCases: 156,
    description: 'Handles criminal prosecution and case management',
  },
  {
    id: 2,
    name: 'Civil Litigation',
    code: 'CIVIL',
    head: 'Barr. Halima Mohammed',
    staffCount: 8,
    activeCases: 89,
    description: 'Manages civil litigation matters where the state is a party',
  },
  {
    id: 3,
    name: 'Legal Advisory',
    code: 'ADVISORY',
    head: 'Barr. Fatima Ibrahim',
    staffCount: 10,
    activeCases: 38,
    description: 'Provides legal opinions and advisory services to MDAs',
  },
  {
    id: 4,
    name: 'Legislative Drafting',
    code: 'LEGIS',
    head: 'Barr. Ibrahim Bello',
    staffCount: 6,
    activeCases: 12,
    description: 'Drafts bills, amendments, and legislative documents',
  },
  {
    id: 5,
    name: 'Compliance & Statutory',
    code: 'COMP',
    head: 'Barr. Maryam Usman',
    staffCount: 5,
    activeCases: 18,
    description: 'Manages statutory submissions and compliance reporting',
  },
  {
    id: 6,
    name: 'Legal Records',
    code: 'RECORDS',
    head: 'Alhaji Yusuf Ali',
    staffCount: 4,
    activeCases: 0,
    description: 'Maintains legal documents and knowledge repository',
  },
  {
    id: 7,
    name: 'Administration',
    code: 'ADMIN',
    head: 'Mal. Kabir Abdullahi',
    staffCount: 6,
    activeCases: 0,
    description: 'Handles administrative and support functions',
  },
]

export function DepartmentsList() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Departments</h1>
          <p className="text-gray-600">Manage organizational departments and units</p>
        </div>
        <Link href="/departments/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Department
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Departments</p>
                <p className="text-2xl font-bold text-gray-900">{mockDepartments.length}</p>
              </div>
              <Building2 className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Staff</p>
                <p className="text-2xl font-bold text-blue-600">
                  {mockDepartments.reduce((sum, dept) => sum + dept.staffCount, 0)}
                </p>
              </div>
              <Users className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Cases</p>
                <p className="text-2xl font-bold text-[#006403]">
                  {mockDepartments.reduce((sum, dept) => sum + dept.activeCases, 0)}
                </p>
              </div>
              <Briefcase className="w-8 h-8 text-[#006403]" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Staff per Dept</p>
                <p className="text-2xl font-bold text-green-600">
                  {Math.round(mockDepartments.reduce((sum, dept) => sum + dept.staffCount, 0) / mockDepartments.length)}
                </p>
              </div>
              <Users className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search departments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Departments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockDepartments.map((dept) => (
          <Card key={dept.id} className="hover:border-[#006403] hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#006403]/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-[#006403]" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{dept.name}</CardTitle>
                    <Badge variant="outline" className="mt-1">{dept.code}</Badge>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">{dept.description}</p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <Users className="w-4 h-4" />
                    <span>Staff Members</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{dept.staffCount}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <Briefcase className="w-4 h-4" />
                    <span>Active Cases</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{dept.activeCases}</p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600 mb-1">Department Head</p>
                <p className="font-medium text-gray-900">{dept.head}</p>
              </div>

              <Link href={`/departments/${dept.id}`}>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

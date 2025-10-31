"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/shared/status-badge"
import { Search, Plus, Filter, BookOpen, Calendar, User } from "lucide-react"
import Link from "next/link"

const mockBills = [
  {
    id: 1,
    billNo: 'BILL/2025/001',
    title: 'Kano State Environmental Protection Bill 2025',
    type: 'Executive Bill',
    category: 'Environmental Law',
    status: 'draft',
    stage: 'Drafting',
    assignedTo: 'Barr. Fatima Ibrahim',
    dateInitiated: '2025-10-15',
    lastUpdated: '2025-10-28',
  },
  {
    id: 2,
    billNo: 'BILL/2025/002',
    title: 'Land Use Amendment Bill 2025',
    type: 'Executive Bill',
    category: 'Land & Property',
    status: 'under-review',
    stage: 'Stakeholder Consultation',
    assignedTo: 'Barr. Ahmad Sani',
    dateInitiated: '2025-09-20',
    lastUpdated: '2025-10-25',
  },
  {
    id: 3,
    billNo: 'BILL/2025/003',
    title: 'Public Procurement Reform Bill 2025',
    type: 'Executive Bill',
    category: 'Public Administration',
    status: 'in-progress',
    stage: 'Legal Review',
    assignedTo: 'Barr. Halima Mohammed',
    dateInitiated: '2025-08-10',
    lastUpdated: '2025-10-20',
  },
  {
    id: 4,
    billNo: 'BILL/2025/004',
    title: 'Education Sector Reform Bill 2025',
    type: 'Private Member Bill',
    category: 'Education',
    status: 'submitted',
    stage: 'Assembly Review',
    assignedTo: 'Barr. Ibrahim Bello',
    dateInitiated: '2025-07-01',
    lastUpdated: '2025-10-10',
  },
  {
    id: 5,
    billNo: 'BILL/2024/015',
    title: 'Healthcare Administration Amendment 2024',
    type: 'Amendment',
    category: 'Healthcare',
    status: 'completed',
    stage: 'Assent & Gazetted',
    assignedTo: 'Barr. Maryam Usman',
    dateInitiated: '2024-05-15',
    lastUpdated: '2025-09-30',
  },
]

export function DraftingList() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Legislative Drafting</h1>
          <p className="text-gray-600">Manage bills, amendments, and legislative documents</p>
        </div>
        <Link href="/legislative-drafting/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Bill
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by bill number, title, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Bills</p>
                <p className="text-2xl font-bold text-gray-900">47</p>
              </div>
              <BookOpen className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">In Drafting</p>
                <p className="text-2xl font-bold text-blue-600">12</p>
              </div>
              <BookOpen className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Under Review</p>
                <p className="text-2xl font-bold text-orange-600">8</p>
              </div>
              <BookOpen className="w-8 h-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Passed</p>
                <p className="text-2xl font-bold text-green-600">23</p>
              </div>
              <BookOpen className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Success Rate</p>
                <p className="text-2xl font-bold text-[#8B1538]">83%</p>
              </div>
              <BookOpen className="w-8 h-8 text-[#8B1538]" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bills List */}
      <Card>
        <CardHeader>
          <CardTitle>Active Bills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockBills.map((bill) => (
              <Link key={bill.id} href={`/legislative-drafting/${bill.id}`}>
                <div className="p-4 border border-gray-200 rounded-lg hover:border-[#8B1538] hover:shadow-sm transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-900">{bill.billNo}</h3>
                        <StatusBadge status={bill.status as any} />
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          {bill.type}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-gray-700">{bill.title}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <p className="text-sm text-gray-600">{bill.category}</p>
                        <span className="text-gray-400">•</span>
                        <p className="text-sm font-medium text-[#8B1538]">{bill.stage}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span>{bill.assignedTo}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>Initiated: {new Date(bill.dateInitiated).toLocaleDateString('en-NG')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>Updated: {new Date(bill.lastUpdated).toLocaleDateString('en-NG')}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

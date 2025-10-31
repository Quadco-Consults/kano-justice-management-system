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
  const [showFilters, setShowFilters] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState<string>("all")
  const [selectedType, setSelectedType] = useState<string>("all")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  // Filter bills based on search and filters
  const filteredBills = mockBills.filter((bill) => {
    const matchesSearch =
      bill.billNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bill.category.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = selectedStatus === "all" || bill.status === selectedStatus
    const matchesType = selectedType === "all" || bill.type === selectedType
    const matchesCategory = selectedCategory === "all" || bill.category === selectedCategory

    return matchesSearch && matchesStatus && matchesType && matchesCategory
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Legislative Drafting</h1>
          <p className="text-gray-900">Manage bills, amendments, and legislative documents</p>
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
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-900" />
              <Input
                type="text"
                placeholder="Search by bill number, title, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Status</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full p-2 border border-gray-200 rounded-lg"
                >
                  <option value="all">All Statuses</option>
                  <option value="draft">Draft</option>
                  <option value="under-review">Under Review</option>
                  <option value="in-progress">In Progress</option>
                  <option value="submitted">Submitted</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Bill Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full p-2 border border-gray-200 rounded-lg"
                >
                  <option value="all">All Types</option>
                  <option value="Executive Bill">Executive Bill</option>
                  <option value="Private Member Bill">Private Member Bill</option>
                  <option value="Amendment">Amendment</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 border border-gray-200 rounded-lg"
                >
                  <option value="all">All Categories</option>
                  <option value="Environmental Law">Environmental Law</option>
                  <option value="Land & Property">Land & Property</option>
                  <option value="Public Administration">Public Administration</option>
                  <option value="Education">Education</option>
                  <option value="Healthcare">Healthcare</option>
                </select>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-900">Total Bills</p>
                <p className="text-2xl font-bold text-gray-900">47</p>
              </div>
              <BookOpen className="w-8 h-8 text-gray-900" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-900">In Drafting</p>
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
                <p className="text-sm text-gray-900">Under Review</p>
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
                <p className="text-sm text-gray-900">Passed</p>
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
                <p className="text-sm text-gray-900">Success Rate</p>
                <p className="text-2xl font-bold text-[#006403]">83%</p>
              </div>
              <BookOpen className="w-8 h-8 text-[#006403]" />
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
            {filteredBills.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-900">No bills found matching your criteria</p>
              </div>
            ) : (
              filteredBills.map((bill) => (
              <Link key={bill.id} href={`/legislative-drafting/${bill.id}`}>
                <div className="p-4 border border-gray-200 rounded-lg hover:border-[#006403] hover:shadow-sm transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-900">{bill.billNo}</h3>
                        <StatusBadge status={bill.status as any} />
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          {bill.type}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-gray-900">{bill.title}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <p className="text-sm text-gray-900">{bill.category}</p>
                        <span className="text-gray-900">•</span>
                        <p className="text-sm font-medium text-[#006403]">{bill.stage}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-900">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-900" />
                      <span>{bill.assignedTo}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-900" />
                      <span>Initiated: {new Date(bill.dateInitiated).toLocaleDateString('en-NG')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-900" />
                      <span>Updated: {new Date(bill.lastUpdated).toLocaleDateString('en-NG')}</span>
                    </div>
                  </div>
                </div>
              </Link>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

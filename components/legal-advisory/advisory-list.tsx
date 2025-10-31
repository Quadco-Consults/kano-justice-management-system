"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/shared/status-badge"
import { PriorityIndicator } from "@/components/shared/priority-indicator"
import { Search, Plus, Filter, FileText, Calendar, Building2, X } from "lucide-react"
import Link from "next/link"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

const mockRequests = [
  {
    id: 1,
    trackingNo: 'LAR-20251028-001',
    agency: 'Ministry of Education',
    contactPerson: 'Dr. Amina Hassan',
    subject: 'Contract Review - School Construction Project',
    category: 'Contract Review',
    priority: 'high',
    status: 'pending',
    dateSubmitted: '2025-10-28',
    assignedTo: null,
  },
  {
    id: 2,
    trackingNo: 'LAR-20251027-002',
    agency: 'Ministry of Health',
    contactPerson: 'Barr. Ibrahim Musa',
    subject: 'Legal Opinion on Procurement Regulations',
    category: 'Legal Opinion',
    priority: 'urgent',
    status: 'in-progress',
    dateSubmitted: '2025-10-27',
    assignedTo: 'Maryam Usman',
  },
  {
    id: 3,
    trackingNo: 'LAR-20251026-003',
    agency: 'Ministry of Works',
    contactPerson: 'Engr. Yusuf Ali',
    subject: 'Compliance Advisory - Environmental Impact',
    category: 'Compliance Advisory',
    priority: 'medium',
    status: 'under-review',
    dateSubmitted: '2025-10-26',
    assignedTo: 'Fatima Ibrahim',
  },
  {
    id: 4,
    trackingNo: 'LAR-20251025-004',
    agency: 'Ministry of Agriculture',
    contactPerson: 'Dr. Hauwa Bello',
    subject: 'Policy Review - Land Acquisition Framework',
    category: 'Policy Review',
    priority: 'medium',
    status: 'completed',
    dateSubmitted: '2025-10-25',
    assignedTo: 'Ahmad Sani',
  },
  {
    id: 5,
    trackingNo: 'LAR-20251024-005',
    agency: 'Ministry of Finance',
    contactPerson: 'Mal. Kabir Abdullahi',
    subject: 'Contract Vetting - IT Infrastructure',
    category: 'Contract Review',
    priority: 'high',
    status: 'in-progress',
    dateSubmitted: '2025-10-24',
    assignedTo: 'Halima Mohammed',
  },
]

export function AdvisoryList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    status: "",
    priority: "",
    category: "",
    agency: "",
  })

  const clearFilters = () => {
    setFilters({
      status: "",
      priority: "",
      category: "",
      agency: "",
    })
  }

  const hasActiveFilters = Object.values(filters).some(value => value !== "")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Legal Advisory Requests</h1>
          <p className="text-gray-600">Manage and track legal advisory requests from agencies</p>
        </div>
        <Link href="/legal-advisory/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Request
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search by tracking number, agency, or subject..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className={hasActiveFilters ? "border-[#006403] text-[#006403]" : ""}
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
                {hasActiveFilters && (
                  <Badge className="ml-2 bg-[#006403] text-white">
                    {Object.values(filters).filter(v => v !== "").length}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Filter Options */}
            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Status</label>
                  <Select
                    value={filters.status}
                    onValueChange={(value) => setFilters({ ...filters, status: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All Statuses" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="under-review">Under Review</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Priority</label>
                  <Select
                    value={filters.priority}
                    onValueChange={(value) => setFilters({ ...filters, priority: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All Priorities" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Priorities</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Category</label>
                  <Select
                    value={filters.category}
                    onValueChange={(value) => setFilters({ ...filters, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="contract">Contract Review</SelectItem>
                      <SelectItem value="legal-opinion">Legal Opinion</SelectItem>
                      <SelectItem value="compliance">Compliance Advisory</SelectItem>
                      <SelectItem value="policy">Policy Review</SelectItem>
                      <SelectItem value="procurement">Procurement Advisory</SelectItem>
                      <SelectItem value="employment">Employment Matters</SelectItem>
                      <SelectItem value="property">Property/Land Matters</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Agency/MDA</label>
                  <Select
                    value={filters.agency}
                    onValueChange={(value) => setFilters({ ...filters, agency: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All Agencies" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Agencies</SelectItem>
                      <SelectItem value="education">Ministry of Education</SelectItem>
                      <SelectItem value="health">Ministry of Health</SelectItem>
                      <SelectItem value="works">Ministry of Works</SelectItem>
                      <SelectItem value="agriculture">Ministry of Agriculture</SelectItem>
                      <SelectItem value="finance">Ministry of Finance</SelectItem>
                      <SelectItem value="water">Ministry of Water Resources</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {hasActiveFilters && (
                  <div className="md:col-span-4 flex justify-end">
                    <Button variant="ghost" onClick={clearFilters} size="sm">
                      <X className="w-4 h-4 mr-2" />
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Requests</p>
                <p className="text-2xl font-bold text-gray-900">247</p>
              </div>
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-orange-600">38</p>
              </div>
              <FileText className="w-8 h-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-blue-600">42</p>
              </div>
              <FileText className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-green-600">167</p>
              </div>
              <FileText className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Requests List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockRequests.map((request) => (
              <Link key={request.id} href={`/legal-advisory/${request.id}`}>
                <div className="p-4 border border-gray-200 rounded-lg hover:border-[#006403] hover:shadow-sm transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-900">{request.trackingNo}</h3>
                        <StatusBadge status={request.status as any} />
                        <PriorityIndicator priority={request.priority as any} />
                      </div>
                      <p className="text-sm font-medium text-gray-700">{request.subject}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-gray-400" />
                      <span>{request.agency}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{new Date(request.dateSubmitted).toLocaleDateString('en-NG')}</span>
                    </div>
                    {request.assignedTo && (
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500">Assigned to:</span>
                        <span className="font-medium text-gray-700">{request.assignedTo}</span>
                      </div>
                    )}
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

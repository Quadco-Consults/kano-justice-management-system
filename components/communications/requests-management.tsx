"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Plus,
  Filter,
  FileText,
  Calendar,
  User,
  Clock,
  Eye,
} from "lucide-react"
import Link from "next/link"

const mockRequests = [
  {
    id: 1,
    requestNo: 'REQ-2025-001',
    title: 'Legal Opinion on Land Acquisition Policy',
    stakeholder: 'Ministry of Lands and Physical Planning',
    contactPerson: 'Barr. Amina Hassan',
    requestType: 'Legal Opinion',
    priority: 'high',
    status: 'pending',
    dateSubmitted: '2025-10-28',
    dueDate: '2025-11-05',
  },
  {
    id: 2,
    requestNo: 'REQ-2025-002',
    title: 'Contract Review - IT Infrastructure Procurement',
    stakeholder: 'Ministry of Science and Technology',
    contactPerson: 'Eng. Ibrahim Bello',
    requestType: 'Contract Review',
    priority: 'medium',
    status: 'in-review',
    dateSubmitted: '2025-10-25',
    dueDate: '2025-11-02',
  },
  {
    id: 3,
    requestNo: 'REQ-2025-003',
    title: 'Litigation Support - Environmental Compliance',
    stakeholder: 'Ministry of Environment',
    contactPerson: 'Dr. Fatima Usman',
    requestType: 'Litigation Support',
    priority: 'urgent',
    status: 'approved',
    dateSubmitted: '2025-10-30',
    dueDate: '2025-11-01',
  },
  {
    id: 4,
    requestNo: 'REQ-2025-004',
    title: 'Policy Advisory - Public Health Regulations',
    stakeholder: 'Ministry of Health',
    contactPerson: 'Dr. Ahmad Sani',
    requestType: 'Policy Advisory',
    priority: 'medium',
    status: 'completed',
    dateSubmitted: '2025-10-20',
    dueDate: '2025-10-28',
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'pending': return 'bg-orange-100 text-orange-800'
    case 'in-review': return 'bg-blue-100 text-blue-800'
    case 'approved': return 'bg-green-100 text-green-800'
    case 'completed': return 'bg-gray-100 text-gray-800'
    case 'rejected': return 'bg-red-100 text-red-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'urgent': return 'bg-red-100 text-red-800'
    case 'high': return 'bg-orange-100 text-orange-800'
    case 'medium': return 'bg-yellow-100 text-yellow-800'
    case 'low': return 'bg-blue-100 text-blue-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

export function RequestsManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  const filteredRequests = mockRequests.filter((request) => {
    const matchesSearch =
      request.requestNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.stakeholder.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType = selectedType === "all" || request.requestType === selectedType
    const matchesStatus = selectedStatus === "all" || request.status === selectedStatus

    return matchesSearch && matchesType && matchesStatus
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Legal Advisory Requests</h1>
          <p className="text-gray-600">
            Manage incoming legal advisory requests from stakeholders
          </p>
        </div>
        <Link href="/communications/requests/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Request
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Requests</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
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
                <p className="text-2xl font-bold text-orange-600">8</p>
              </div>
              <Clock className="w-8 h-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">In Review</p>
                <p className="text-2xl font-bold text-blue-600">6</p>
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
                <p className="text-2xl font-bold text-[#006403]">10</p>
              </div>
              <FileText className="w-8 h-8 text-[#006403]" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by request number, title, or stakeholder..."
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

          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Request Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full p-2 border border-gray-200 rounded-lg"
                >
                  <option value="all">All Types</option>
                  <option value="Legal Opinion">Legal Opinion</option>
                  <option value="Contract Review">Contract Review</option>
                  <option value="Litigation Support">Litigation Support</option>
                  <option value="Policy Advisory">Policy Advisory</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Status</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full p-2 border border-gray-200 rounded-lg"
                >
                  <option value="all">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="in-review">In Review</option>
                  <option value="approved">Approved</option>
                  <option value="completed">Completed</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Requests List */}
      <Card>
        <CardHeader>
          <CardTitle>All Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredRequests.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">No requests found matching your criteria</p>
              </div>
            ) : (
              filteredRequests.map((request) => (
                <Link key={request.id} href={`/communications/requests/${request.id}`}>
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-[#006403] hover:shadow-sm transition-all cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-gray-900">{request.requestNo}</h3>
                          <Badge className={getStatusColor(request.status)}>
                            {request.status}
                          </Badge>
                          <Badge className={getPriorityColor(request.priority)}>
                            {request.priority}
                          </Badge>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            {request.requestType}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-gray-900 mb-2">{request.title}</p>
                        <p className="text-sm text-gray-600">
                          {request.stakeholder} • {request.contactPerson}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Submitted: {new Date(request.dateSubmitted).toLocaleDateString('en-NG')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Due: {new Date(request.dueDate).toLocaleDateString('en-NG')}</span>
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

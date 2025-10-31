"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Plus,
  Search,
  Filter,
  Calendar,
  User,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  FileText,
} from "lucide-react"
import Link from "next/link"

const mockRequests = [
  {
    id: 'REQ-001',
    correspondenceId: 'CORR-2025-001',
    correspondenceTitle: 'School Construction Contract Review',
    title: 'Initial Contract Review',
    description: 'Review the contract terms and identify any legal risks or non-compliance issues.',
    type: 'Legal Advisory',
    status: 'completed',
    priority: 'high',
    requestedBy: 'Hon. Commissioner Ahmed Ibrahim',
    requestedDate: '2025-10-20',
    assignedTo: 'Barr. Fatima Ibrahim',
    dueDate: '2025-10-27',
    completedDate: '2025-10-25',
    stakeholder: 'Ministry of Education',
  },
  {
    id: 'REQ-002',
    correspondenceId: 'CORR-2025-002',
    correspondenceTitle: 'Healthcare Policy Analysis',
    title: 'Policy Compliance Review',
    description: 'Analyze the new healthcare policy for legal compliance and provide recommendations.',
    type: 'Legal Advisory',
    status: 'in-progress',
    priority: 'medium',
    requestedBy: 'Dr. Aisha Mohammed',
    requestedDate: '2025-10-22',
    assignedTo: 'Barr. Ibrahim Suleiman',
    dueDate: '2025-10-30',
    stakeholder: 'Ministry of Health',
  },
  {
    id: 'REQ-003',
    correspondenceId: 'CORR-2025-003',
    correspondenceTitle: 'Budget Approval Process',
    title: 'Financial Regulation Review',
    description: 'Review financial regulations for the upcoming budget cycle.',
    type: 'Statutory Review',
    status: 'pending',
    priority: 'high',
    requestedBy: 'Mal. Usman Abdullahi',
    requestedDate: '2025-10-25',
    dueDate: '2025-11-05',
    stakeholder: 'Ministry of Finance',
  },
  {
    id: 'REQ-004',
    correspondenceId: 'CORR-2025-004',
    correspondenceTitle: 'Road Infrastructure Development',
    title: 'Environmental Impact Assessment',
    description: 'Legal review of environmental impact assessment for road construction project.',
    type: 'Environmental Law',
    status: 'in-progress',
    priority: 'medium',
    requestedBy: 'Eng. Mohammed Ali',
    requestedDate: '2025-10-23',
    assignedTo: 'Barr. Zainab Hassan',
    dueDate: '2025-11-02',
    stakeholder: 'Ministry of Works',
  },
]

export function RequestsManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")

  const filteredRequests = mockRequests.filter(request => {
    const matchesSearch = request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.stakeholder.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || request.status === statusFilter
    const matchesPriority = priorityFilter === "all" || request.priority === priorityFilter

    return matchesSearch && matchesStatus && matchesPriority
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case 'in-progress':
        return <Clock className="w-4 h-4 text-blue-600" />
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-orange-600" />
      default:
        return <MessageSquare className="w-4 h-4 text-gray-600" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'medium':
        return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'low':
        return 'bg-gray-100 text-gray-800 border-gray-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Requests Management</h1>
          <p className="text-gray-600">
            Manage and track all communication requests across departments
          </p>
        </div>
        <Link href="/communications/requests/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Request
          </Button>
        </Link>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Requests</p>
                <p className="text-2xl font-bold text-gray-900">{mockRequests.length}</p>
              </div>
              <MessageSquare className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-blue-600">
                  {mockRequests.filter(r => r.status === 'in-progress').length}
                </p>
              </div>
              <Clock className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-green-600">
                  {mockRequests.filter(r => r.status === 'completed').length}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-orange-600">
                  {mockRequests.filter(r => r.status === 'pending').length}
                </p>
              </div>
              <AlertCircle className="w-8 h-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search requests..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="high">High Priority</SelectItem>
                <SelectItem value="medium">Medium Priority</SelectItem>
                <SelectItem value="low">Low Priority</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Requests List */}
      <div className="space-y-4">
        {filteredRequests.map((request) => (
          <Card key={request.id} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Link href={`/communications/requests/${request.id}`}>
                      <h3 className="text-lg font-semibold text-gray-900 hover:text-[#8B1538] cursor-pointer">
                        {request.title}
                      </h3>
                    </Link>
                    <Badge variant="outline">{request.id}</Badge>
                    <div className="flex items-center gap-1">
                      {getStatusIcon(request.status)}
                      <Badge
                        variant={
                          request.status === 'completed'
                            ? 'success'
                            : request.status === 'in-progress'
                            ? 'default'
                            : 'secondary'
                        }
                      >
                        {request.status}
                      </Badge>
                    </div>
                    <Badge className={getPriorityColor(request.priority)}>
                      {request.priority} priority
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-3">{request.description}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{request.requestedBy}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Requested {new Date(request.requestedDate).toLocaleDateString('en-NG')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      <Link href={`/correspondences/${request.correspondenceId}`} className="hover:underline">
                        {request.correspondenceTitle}
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-600">
                        <strong>Stakeholder:</strong> {request.stakeholder}
                      </span>
                      {request.assignedTo && (
                        <span className="text-gray-600">
                          <strong>Assigned to:</strong> {request.assignedTo}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">
                        Due: {new Date(request.dueDate).toLocaleDateString('en-NG')}
                      </span>
                      {request.completedDate && (
                        <span className="text-sm text-green-600">
                          Completed: {new Date(request.completedDate).toLocaleDateString('en-NG')}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredRequests.length === 0 && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-8">
              <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No requests found</h3>
              <p className="text-gray-600 mb-4">
                {searchTerm || statusFilter !== "all" || priorityFilter !== "all"
                  ? "Try adjusting your search or filter criteria"
                  : "No requests have been created yet"}
              </p>
              <Link href="/communications/requests/new">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Create First Request
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
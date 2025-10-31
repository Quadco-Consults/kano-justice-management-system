"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { StatusBadge } from "@/components/shared/status-badge"
import { Search, Plus, Filter, ClipboardList, Calendar, Building2, AlertCircle, X } from "lucide-react"
import Link from "next/link"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const mockSubmissions = [
  {
    id: 1,
    submissionNo: 'SUB/2025/Q4/001',
    name: 'Quarterly Compliance Report',
    regulatoryBody: 'Federal Ministry of Justice',
    frequency: 'Quarterly',
    dueDate: '2025-11-30',
    status: 'pending',
    assignedTo: 'Barr. Fatima Ibrahim',
    lastSubmitted: '2025-08-31',
    daysUntilDue: 30,
  },
  {
    id: 2,
    submissionNo: 'SUB/2025/M10/002',
    name: 'Monthly Case Statistics',
    regulatoryBody: 'National Judicial Council',
    frequency: 'Monthly',
    dueDate: '2025-11-05',
    status: 'in-progress',
    assignedTo: 'Barr. Ahmad Sani',
    lastSubmitted: '2025-10-05',
    daysUntilDue: 5,
  },
  {
    id: 3,
    submissionNo: 'SUB/2025/A/003',
    name: 'Annual Performance Report',
    regulatoryBody: 'Office of the Attorney General Federation',
    frequency: 'Annual',
    dueDate: '2025-12-31',
    status: 'draft',
    assignedTo: 'Barr. Halima Mohammed',
    lastSubmitted: '2024-12-31',
    daysUntilDue: 60,
  },
  {
    id: 4,
    submissionNo: 'SUB/2025/Q3/004',
    name: 'Financial Compliance Statement',
    regulatoryBody: 'Office of the Auditor General',
    frequency: 'Quarterly',
    dueDate: '2025-10-31',
    status: 'submitted',
    assignedTo: 'Barr. Ibrahim Bello',
    lastSubmitted: '2025-10-28',
    daysUntilDue: 0,
  },
  {
    id: 5,
    submissionNo: 'SUB/2025/M09/005',
    name: 'Prosecution Performance Review',
    regulatoryBody: 'Nigerian Police Force',
    frequency: 'Monthly',
    dueDate: '2025-11-01',
    status: 'overdue',
    assignedTo: 'Barr. Maryam Usman',
    lastSubmitted: '2025-09-05',
    daysUntilDue: -3,
  },
]

export function SubmissionsList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    status: "",
    frequency: "",
    regulatoryBody: "",
    assignee: "",
  })

  const clearFilters = () => {
    setFilters({
      status: "",
      frequency: "",
      regulatoryBody: "",
      assignee: "",
    })
  }

  const hasActiveFilters = Object.values(filters).some(value => value !== "")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Statutory Submissions</h1>
          <p className="text-gray-600">Track and manage regulatory submissions and compliance reports</p>
        </div>
        <Link href="/statutory-submissions/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Submission
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
                  placeholder="Search by submission name, number, or regulatory body..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className={hasActiveFilters ? "border-[#8B1538] text-[#8B1538]" : ""}
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
                {hasActiveFilters && (
                  <Badge className="ml-2 bg-[#8B1538] text-white">
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
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="submitted">Submitted</SelectItem>
                      <SelectItem value="overdue">Overdue</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Frequency</label>
                  <Select
                    value={filters.frequency}
                    onValueChange={(value) => setFilters({ ...filters, frequency: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All Frequencies" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Frequencies</SelectItem>
                      <SelectItem value="Monthly">Monthly</SelectItem>
                      <SelectItem value="Quarterly">Quarterly</SelectItem>
                      <SelectItem value="Annual">Annual</SelectItem>
                      <SelectItem value="Ad-hoc">Ad-hoc</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Regulatory Body</label>
                  <Select
                    value={filters.regulatoryBody}
                    onValueChange={(value) => setFilters({ ...filters, regulatoryBody: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All Bodies" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Bodies</SelectItem>
                      <SelectItem value="fmoj">Federal Ministry of Justice</SelectItem>
                      <SelectItem value="njc">National Judicial Council</SelectItem>
                      <SelectItem value="oagf">Office of the Attorney General Federation</SelectItem>
                      <SelectItem value="oag">Office of the Auditor General</SelectItem>
                      <SelectItem value="npf">Nigerian Police Force</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Assigned To</label>
                  <Select
                    value={filters.assignee}
                    onValueChange={(value) => setFilters({ ...filters, assignee: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All Assignees" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Assignees</SelectItem>
                      <SelectItem value="fatima">Barr. Fatima Ibrahim</SelectItem>
                      <SelectItem value="ahmad">Barr. Ahmad Sani</SelectItem>
                      <SelectItem value="halima">Barr. Halima Mohammed</SelectItem>
                      <SelectItem value="ibrahim">Barr. Ibrahim Bello</SelectItem>
                      <SelectItem value="maryam">Barr. Maryam Usman</SelectItem>
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
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Submissions</p>
                <p className="text-2xl font-bold text-gray-900">124</p>
              </div>
              <ClipboardList className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-orange-600">18</p>
              </div>
              <ClipboardList className="w-8 h-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Overdue</p>
                <p className="text-2xl font-bold text-red-600">3</p>
              </div>
              <AlertCircle className="w-8 h-8 text-red-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-green-600">103</p>
              </div>
              <ClipboardList className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">On-Time Rate</p>
                <p className="text-2xl font-bold text-[#8B1538]">97%</p>
              </div>
              <ClipboardList className="w-8 h-8 text-[#8B1538]" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Submissions List */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockSubmissions.map((submission) => (
              <Link key={submission.id} href={`/statutory-submissions/${submission.id}`}>
                <div className="p-4 border border-gray-200 rounded-lg hover:border-[#8B1538] hover:shadow-sm transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-900">{submission.submissionNo}</h3>
                        <StatusBadge status={submission.status as any} />
                        {submission.daysUntilDue <= 7 && submission.daysUntilDue > 0 && (
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                            Due in {submission.daysUntilDue} days
                          </span>
                        )}
                        {submission.daysUntilDue < 0 && (
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            {Math.abs(submission.daysUntilDue)} days overdue
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-gray-700">{submission.name}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <p className="text-sm text-gray-600">{submission.frequency}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-gray-400" />
                      <span>{submission.regulatoryBody}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>Due: {new Date(submission.dueDate).toLocaleDateString('en-NG')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">Assigned to:</span>
                      <span className="font-medium text-gray-700">{submission.assignedTo}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">Last submitted:</span>
                      <span className="font-medium text-gray-700">{new Date(submission.lastSubmitted).toLocaleDateString('en-NG')}</span>
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

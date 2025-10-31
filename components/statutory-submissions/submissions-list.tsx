"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/shared/status-badge"
import { Search, Plus, Filter, ClipboardList, Calendar, Building2, AlertCircle } from "lucide-react"
import Link from "next/link"

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

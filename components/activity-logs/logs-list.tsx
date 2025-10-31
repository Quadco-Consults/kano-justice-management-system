"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, FileCheck, User, Calendar, Download } from "lucide-react"

const mockLogs = [
  {
    id: 1,
    user: 'Barr. Fatima Ibrahim',
    action: 'Created',
    resource: 'Legal Advisory Request',
    resourceId: 'LAR-20251031-001',
    timestamp: '2025-10-31T14:30:00',
    ipAddress: '192.168.1.45',
    details: 'Created new advisory request from Ministry of Education',
  },
  {
    id: 2,
    user: 'Barr. Ahmad Sani',
    action: 'Updated',
    resource: 'Prosecution Case',
    resourceId: 'CR/45/2025',
    timestamp: '2025-10-31T13:15:00',
    ipAddress: '192.168.1.52',
    details: 'Updated case status to "In Trial"',
  },
  {
    id: 3,
    user: 'Barr. Halima Mohammed',
    action: 'Downloaded',
    resource: 'Legal Document',
    resourceId: 'DOC/2025/0348',
    timestamp: '2025-10-31T12:00:00',
    ipAddress: '192.168.1.67',
    details: 'Downloaded court judgment document',
  },
  {
    id: 4,
    user: 'Barr. Ibrahim Bello',
    action: 'Approved',
    resource: 'Legal Opinion',
    resourceId: 'LAR-20251028-003',
    timestamp: '2025-10-31T11:45:00',
    ipAddress: '192.168.1.89',
    details: 'Approved legal opinion for Ministry of Works',
  },
  {
    id: 5,
    user: 'Barr. Maryam Usman',
    action: 'Submitted',
    resource: 'Statutory Submission',
    resourceId: 'SUB/2025/Q3/004',
    timestamp: '2025-10-31T10:30:00',
    ipAddress: '192.168.1.23',
    details: 'Submitted quarterly compliance report',
  },
  {
    id: 6,
    user: 'Admin User',
    action: 'Created',
    resource: 'User Account',
    resourceId: 'USR-0045',
    timestamp: '2025-10-31T09:15:00',
    ipAddress: '192.168.1.100',
    details: 'Created new user account for Legal Officer',
  },
  {
    id: 7,
    user: 'Barr. Fatima Ibrahim',
    action: 'Deleted',
    resource: 'Draft Document',
    resourceId: 'DRAFT-2025-0123',
    timestamp: '2025-10-31T08:00:00',
    ipAddress: '192.168.1.45',
    details: 'Deleted draft legislative document',
  },
  {
    id: 8,
    user: 'Barr. Ahmad Sani',
    action: 'Shared',
    resource: 'Case File',
    resourceId: 'CR/46/2025',
    timestamp: '2025-10-30T16:45:00',
    ipAddress: '192.168.1.52',
    details: 'Shared case file with Kano State Police',
  },
]

const actionColors: Record<string, string> = {
  Created: 'bg-green-100 text-green-800 border-green-200',
  Updated: 'bg-blue-100 text-blue-800 border-blue-200',
  Deleted: 'bg-red-100 text-red-800 border-red-200',
  Downloaded: 'bg-purple-100 text-purple-800 border-purple-200',
  Approved: 'bg-green-100 text-green-800 border-green-200',
  Rejected: 'bg-red-100 text-red-800 border-red-200',
  Submitted: 'bg-blue-100 text-blue-800 border-blue-200',
  Shared: 'bg-orange-100 text-orange-800 border-orange-200',
}

export function LogsList() {
  const [searchQuery, setSearchQuery] = useState("")

  const getTimeAgo = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (hours < 1) return 'Just now'
    if (hours < 24) return `${hours}h ago`
    return `${days}d ago`
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Activity Logs</h1>
          <p className="text-gray-600">Track all user activities and system events</p>
        </div>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export Logs
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Activities</p>
                <p className="text-2xl font-bold text-gray-900">12,456</p>
              </div>
              <FileCheck className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Today</p>
                <p className="text-2xl font-bold text-blue-600">234</p>
              </div>
              <Calendar className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Users</p>
                <p className="text-2xl font-bold text-[#8B1538]">47</p>
              </div>
              <User className="w-8 h-8 text-[#8B1538]" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Security Events</p>
                <p className="text-2xl font-bold text-orange-600">12</p>
              </div>
              <FileCheck className="w-8 h-8 text-orange-400" />
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
                placeholder="Search by user, action, or resource..."
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

      {/* Activity Logs */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockLogs.map((log) => (
              <div
                key={log.id}
                className="p-4 border border-gray-200 rounded-lg hover:border-[#8B1538] hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className={actionColors[log.action] || 'bg-gray-100 text-gray-800'}>
                        {log.action}
                      </Badge>
                      <span className="text-sm font-medium text-gray-900">{log.resource}</span>
                      <span className="text-sm text-gray-600">#{log.resourceId}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{log.details}</p>
                  </div>
                  <span className="text-xs text-gray-500">{getTimeAgo(log.timestamp)}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span>{log.user}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span>{new Date(log.timestamp).toLocaleString('en-NG')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">IP:</span>
                    <span className="font-medium text-gray-700">{log.ipAddress}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

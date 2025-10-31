"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Search,
  Filter,
  X,
  Plus,
  AlertCircle,
  CheckCircle2,
  Clock,
  FileText,
  MessageSquare,
  Users
} from "lucide-react"
import Link from "next/link"

const mockCorrespondences = [
  {
    id: 'CORR-2025-001',
    title: 'School Construction Contract Review',
    stakeholder: { id: 1, name: 'Ministry of Education', code: 'MOE' },
    status: 'active',
    priority: 'high',
    createdDate: '2025-10-20',
    lastActivity: '2025-10-30',
    requestsCount: 3,
    documentsCount: 12,
    commentsCount: 8,
    participants: ['Barr. Fatima Ibrahim', 'Hon. Commissioner', 'Legal Advisory Team']
  },
  {
    id: 'CORR-2025-002',
    title: 'Police Investigation Legal Support',
    stakeholder: { id: 2, name: 'Kano State Police Command', code: 'KSPC' },
    status: 'active',
    priority: 'high',
    createdDate: '2025-10-18',
    lastActivity: '2025-10-30',
    requestsCount: 5,
    documentsCount: 18,
    commentsCount: 15,
    participants: ['Barr. Yusuf Ali', 'ACP Ibrahim', 'Litigation Team']
  },
  {
    id: 'CORR-2025-003',
    title: 'Court Case Filing - Land Dispute',
    stakeholder: { id: 3, name: 'Federal High Court Kano', code: 'FHCK' },
    status: 'pending-approval',
    priority: 'high',
    createdDate: '2025-10-15',
    lastActivity: '2025-10-29',
    requestsCount: 4,
    documentsCount: 25,
    commentsCount: 12,
    participants: ['Chief Registrar', 'Barr. Ibrahim Bello', 'Court Liaison']
  },
  {
    id: 'CORR-2025-004',
    title: 'Teacher Training Partnership MOU',
    stakeholder: { id: 1, name: 'Ministry of Education', code: 'MOE' },
    status: 'active',
    priority: 'medium',
    createdDate: '2025-10-15',
    lastActivity: '2025-10-29',
    requestsCount: 2,
    documentsCount: 8,
    commentsCount: 5,
    participants: ['Barr. Yusuf Ali', 'Permanent Secretary']
  },
  {
    id: 'CORR-2025-005',
    title: 'Budget Review Legal Opinion',
    stakeholder: { id: 4, name: 'Ministry of Finance', code: 'MOF' },
    status: 'active',
    priority: 'medium',
    createdDate: '2025-10-12',
    lastActivity: '2025-10-28',
    requestsCount: 3,
    documentsCount: 10,
    commentsCount: 7,
    participants: ['Director Legal', 'Commissioner Finance', 'Advisory Team']
  },
  {
    id: 'CORR-2025-006',
    title: 'Education Policy Bill Amendment',
    stakeholder: { id: 5, name: 'Kano State House of Assembly', code: 'KSHA' },
    status: 'pending-approval',
    priority: 'high',
    createdDate: '2025-10-10',
    lastActivity: '2025-10-28',
    requestsCount: 5,
    documentsCount: 15,
    commentsCount: 12,
    participants: ['Legislative Team', 'Director Legal', 'Clerk of House']
  },
  {
    id: 'CORR-2025-007',
    title: 'Public Procurement Dispute Resolution',
    stakeholder: { id: 6, name: 'Bureau of Public Procurement', code: 'BPP' },
    status: 'active',
    priority: 'medium',
    createdDate: '2025-10-08',
    lastActivity: '2025-10-27',
    requestsCount: 4,
    documentsCount: 14,
    commentsCount: 10,
    participants: ['Barr. Amina Yusuf', 'Director BPP', 'Dispute Team']
  },
  {
    id: 'CORR-2025-008',
    title: 'School Facilities Legal Compliance',
    stakeholder: { id: 1, name: 'Ministry of Education', code: 'MOE' },
    status: 'completed',
    priority: 'medium',
    createdDate: '2025-09-25',
    lastActivity: '2025-10-15',
    requestsCount: 2,
    documentsCount: 6,
    commentsCount: 4,
    participants: ['Barr. Ibrahim Bello', 'MOE Legal Officer']
  },
  {
    id: 'CORR-2024-045',
    title: 'Federal Agency Collaboration Framework',
    stakeholder: { id: 7, name: 'Office of the Attorney General Federation', code: 'AGF' },
    status: 'completed',
    priority: 'low',
    createdDate: '2024-12-01',
    lastActivity: '2025-01-15',
    requestsCount: 1,
    documentsCount: 3,
    commentsCount: 2,
    participants: ['Director Legal Advisory', 'AGF Representative']
  }
]

const stakeholdersList = [
  { id: 'all', name: 'All Stakeholders' },
  { id: 1, name: 'Ministry of Education' },
  { id: 2, name: 'Kano State Police Command' },
  { id: 3, name: 'Federal High Court Kano' },
  { id: 4, name: 'Ministry of Finance' },
  { id: 5, name: 'Kano State House of Assembly' },
  { id: 6, name: 'Bureau of Public Procurement' },
  { id: 7, name: 'Office of the Attorney General Federation' }
]

export function CorrespondencesTab() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    stakeholder: "",
    status: "",
    priority: "",
  })

  const clearFilters = () => {
    setFilters({
      stakeholder: "",
      status: "",
      priority: "",
    })
  }

  const hasActiveFilters = Object.values(filters).some(value => value !== "")

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search correspondences by title, stakeholder, or ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Link href="/correspondences/new">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  New Correspondence
                </Button>
              </Link>
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Stakeholder</label>
                  <Select
                    value={filters.stakeholder}
                    onValueChange={(value) => setFilters({ ...filters, stakeholder: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All Stakeholders" />
                    </SelectTrigger>
                    <SelectContent>
                      {stakeholdersList.map((stakeholder) => (
                        <SelectItem key={stakeholder.id} value={stakeholder.id.toString()}>
                          {stakeholder.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

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
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="pending-approval">Pending Approval</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
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
                      <SelectItem value="high">High Priority</SelectItem>
                      <SelectItem value="medium">Medium Priority</SelectItem>
                      <SelectItem value="low">Low Priority</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {hasActiveFilters && (
                  <div className="md:col-span-3 flex justify-end">
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

      {/* Correspondences List */}
      <Card>
        <CardHeader>
          <CardTitle>All Correspondences</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockCorrespondences.map((correspondence) => (
              <Link key={correspondence.id} href={`/correspondences/${correspondence.id}`}>
                <div className="p-4 border border-gray-200 rounded-lg hover:border-[#8B1538] hover:shadow-sm transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-gray-900">{correspondence.title}</h4>
                        <Badge variant="outline" className="text-xs">{correspondence.id}</Badge>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Link
                          href={`/stakeholders/${correspondence.stakeholder.id}`}
                          onClick={(e) => e.stopPropagation()}
                          className="hover:underline"
                        >
                          <Badge variant="outline">
                            {correspondence.stakeholder.name}
                          </Badge>
                        </Link>
                        <Badge
                          variant={
                            correspondence.status === 'active'
                              ? 'default'
                              : correspondence.status === 'pending-approval'
                              ? 'secondary'
                              : 'success'
                          }
                        >
                          {correspondence.status}
                        </Badge>
                        <Badge
                          className={
                            correspondence.priority === 'high'
                              ? 'bg-red-100 text-red-800'
                              : correspondence.priority === 'medium'
                              ? 'bg-orange-100 text-orange-800'
                              : 'bg-gray-100 text-gray-800'
                          }
                        >
                          {correspondence.priority}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>{correspondence.requestsCount} requests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>{correspondence.documentsCount} documents</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>{correspondence.commentsCount} comments</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-3">
                      <span>Created: {new Date(correspondence.createdDate).toLocaleDateString('en-NG')}</span>
                      <span>•</span>
                      <span>Last activity: {new Date(correspondence.lastActivity).toLocaleDateString('en-NG')}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-2 text-xs text-gray-600">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span>{correspondence.participants.join(', ')}</span>
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

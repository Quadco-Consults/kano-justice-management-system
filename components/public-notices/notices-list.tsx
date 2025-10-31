"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Filter, FileText, Calendar, Eye, Globe, X } from "lucide-react"
import Link from "next/link"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const mockNotices = [
  {
    id: 1,
    noticeNo: 'PN/2025/001',
    title: 'Public Notice on Proposed Amendment to Kano State Land Use Act',
    category: 'Legislative Notice',
    publishDate: '2025-10-25',
    expiryDate: '2025-11-25',
    status: 'published',
    views: 1247,
    downloads: 89,
    publishedBy: 'Barr. Fatima Ibrahim',
    summary: 'Notice of public hearing on proposed amendments to the Kano State Land Use Act 2024. All stakeholders are invited to submit comments.',
  },
  {
    id: 2,
    noticeNo: 'PN/2025/002',
    title: 'Call for Public Comments - Kano State Criminal Justice Reform Bill',
    category: 'Public Consultation',
    publishDate: '2025-10-28',
    expiryDate: '2025-12-28',
    status: 'published',
    views: 892,
    downloads: 56,
    publishedBy: 'Barr. Ahmad Sani',
    summary: 'The Ministry of Justice invites public comments on the draft Criminal Justice Reform Bill 2025.',
  },
  {
    id: 3,
    noticeNo: 'PN/2025/003',
    title: 'Tender Notice for Legal Research Services',
    category: 'Tender Notice',
    publishDate: '2025-10-30',
    expiryDate: '2025-11-15',
    status: 'published',
    views: 534,
    downloads: 42,
    publishedBy: 'Procurement Unit',
    summary: 'Request for proposals for legal research and documentation services for the Ministry of Justice.',
  },
  {
    id: 4,
    noticeNo: 'PN/2025/004',
    title: 'Notice of Appointment - New Director of Public Prosecution',
    category: 'Official Announcement',
    publishDate: '2025-10-20',
    expiryDate: null,
    status: 'published',
    views: 2156,
    downloads: 145,
    publishedBy: 'Attorney General Office',
    summary: 'Official announcement of the appointment of Barr. Ibrahim Bello as the new Director of Public Prosecution.',
  },
  {
    id: 5,
    noticeNo: 'PN/2025/005',
    title: 'Draft Environmental Compliance Guidelines',
    category: 'Draft Regulation',
    publishDate: '2025-11-02',
    expiryDate: '2025-12-02',
    status: 'draft',
    views: 0,
    downloads: 0,
    publishedBy: 'Barr. Halima Mohammed',
    summary: 'Draft guidelines for environmental compliance in industrial and commercial operations within Kano State.',
  },
]

export function PublicNoticesList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    category: "",
    status: "",
    month: "",
  })

  const clearFilters = () => {
    setFilters({
      category: "",
      status: "",
      month: "",
    })
  }

  const hasActiveFilters = Object.values(filters).some(value => value !== "")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Public Notices Portal</h1>
          <p className="text-gray-600">Publish and manage statutory notices for public access and transparency</p>
        </div>
        <Link href="/public-notices/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Publish Notice
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
                  placeholder="Search notices by title, category, or notice number..."
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
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
                      <SelectItem value="legislative">Legislative Notice</SelectItem>
                      <SelectItem value="consultation">Public Consultation</SelectItem>
                      <SelectItem value="tender">Tender Notice</SelectItem>
                      <SelectItem value="announcement">Official Announcement</SelectItem>
                      <SelectItem value="regulation">Draft Regulation</SelectItem>
                      <SelectItem value="directive">AG Directive</SelectItem>
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
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="expired">Expired</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Publication Month</label>
                  <Select
                    value={filters.month}
                    onValueChange={(value) => setFilters({ ...filters, month: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All Months" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Months</SelectItem>
                      <SelectItem value="2025-11">November 2025</SelectItem>
                      <SelectItem value="2025-10">October 2025</SelectItem>
                      <SelectItem value="2025-09">September 2025</SelectItem>
                      <SelectItem value="2025-08">August 2025</SelectItem>
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

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Notices</p>
                <p className="text-2xl font-bold text-gray-900">87</p>
              </div>
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Published</p>
                <p className="text-2xl font-bold text-green-600">62</p>
              </div>
              <Globe className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Views</p>
                <p className="text-2xl font-bold text-blue-600">15,483</p>
              </div>
              <Eye className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-[#8B1538]">12</p>
              </div>
              <Calendar className="w-8 h-8 text-[#8B1538]" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Notices List */}
      <Card>
        <CardHeader>
          <CardTitle>Public Notices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockNotices.map((notice) => (
              <Link key={notice.id} href={`/public-notices/${notice.id}`}>
                <div className="p-4 border border-gray-200 rounded-lg hover:border-[#8B1538] hover:shadow-sm transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-900">{notice.noticeNo}</h3>
                        <Badge
                          className={
                            notice.status === 'published'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }
                        >
                          {notice.status}
                        </Badge>
                        <Badge variant="outline">{notice.category}</Badge>
                      </div>
                      <p className="text-lg font-medium text-gray-700 mb-2">{notice.title}</p>
                      <p className="text-sm text-gray-600">{notice.summary}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>Published: {new Date(notice.publishDate).toLocaleDateString('en-NG')}</span>
                    </div>
                    {notice.expiryDate && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span>Expires: {new Date(notice.expiryDate).toLocaleDateString('en-NG')}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-gray-400" />
                      <span>{notice.views} views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">By:</span>
                      <span className="font-medium text-gray-700">{notice.publishedBy}</span>
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

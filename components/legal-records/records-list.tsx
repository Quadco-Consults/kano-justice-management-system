"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Filter, FolderOpen, Calendar, FileText, Download, X } from "lucide-react"
import Link from "next/link"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const mockRecords = [
  {
    id: 1,
    documentNo: 'DOC/2025/0347',
    title: 'Legal Opinion - Land Acquisition Framework Review',
    category: 'Legal Opinions',
    tags: ['Land Law', 'Property', 'Policy Review'],
    author: 'Barr. Fatima Ibrahim',
    date: '2025-10-25',
    fileSize: '2.4 MB',
    fileType: 'PDF',
  },
  {
    id: 2,
    documentNo: 'DOC/2025/0348',
    title: 'Court Judgment - State v. XYZ Construction Ltd',
    category: 'Court Judgments',
    tags: ['Contract Dispute', 'Construction', 'Civil Litigation'],
    author: 'High Court Kano',
    date: '2025-10-20',
    fileSize: '1.8 MB',
    fileType: 'PDF',
  },
  {
    id: 3,
    documentNo: 'DOC/2025/0349',
    title: 'Attorney General Directive on Procurement Compliance',
    category: 'AG Directives',
    tags: ['Procurement', 'Compliance', 'Public Administration'],
    author: 'Attorney General Office',
    date: '2025-10-18',
    fileSize: '856 KB',
    fileType: 'PDF',
  },
  {
    id: 4,
    documentNo: 'DOC/2025/0350',
    title: 'Legal Precedent - Environmental Impact Assessment Requirements',
    category: 'Legal Precedents',
    tags: ['Environment', 'Regulation', 'Precedent'],
    author: 'Barr. Ahmad Sani',
    date: '2025-10-15',
    fileSize: '1.2 MB',
    fileType: 'PDF',
  },
  {
    id: 5,
    documentNo: 'DOC/2025/0351',
    title: 'Ministry Policy - Digital Transformation Initiative',
    category: 'Ministry Policies',
    tags: ['Technology', 'Policy', 'Innovation'],
    author: 'Ministry of Justice',
    date: '2025-10-10',
    fileSize: '3.1 MB',
    fileType: 'PDF',
  },
]

const categories = [
  'Legal Opinions',
  'Court Judgments',
  'Legal Precedents',
  'Ministry Policies',
  'Legal Templates',
  'Legislation & Statutes',
  'Research Materials',
  'AG Directives',
]

export function RecordsList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    category: "",
    securityLevel: "",
    fileType: "",
    author: "",
  })

  const clearFilters = () => {
    setFilters({
      category: "",
      securityLevel: "",
      fileType: "",
      author: "",
    })
  }

  const hasActiveFilters = Object.values(filters).some(value => value !== "")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Legal Records</h1>
          <p className="text-gray-600">Access and manage legal documents and knowledge repository</p>
        </div>
        <Link href="/legal-records/upload">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Upload Document
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
                  placeholder="Search documents by title, category, tags, or content..."
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
              <div className="space-y-4 pt-4 border-t">
                {/* Category Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Category</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={filters.category === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFilters({ ...filters, category: filters.category === category ? "" : category })}
                        className={filters.category === category ? "bg-[#006403] hover:bg-[#6B0F28]" : ""}
                      >
                        <FolderOpen className="w-4 h-4 mr-2" />
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Other Filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Security Level</label>
                    <Select
                      value={filters.securityLevel}
                      onValueChange={(value) => setFilters({ ...filters, securityLevel: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Levels" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Levels</SelectItem>
                        <SelectItem value="Public">Public</SelectItem>
                        <SelectItem value="Confidential">Confidential</SelectItem>
                        <SelectItem value="Restricted">Restricted</SelectItem>
                        <SelectItem value="Top Secret">Top Secret</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">File Type</label>
                    <Select
                      value={filters.fileType}
                      onValueChange={(value) => setFilters({ ...filters, fileType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="PDF">PDF</SelectItem>
                        <SelectItem value="DOCX">DOCX</SelectItem>
                        <SelectItem value="DOC">DOC</SelectItem>
                        <SelectItem value="TXT">TXT</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Author</label>
                    <Select
                      value={filters.author}
                      onValueChange={(value) => setFilters({ ...filters, author: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Authors" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Authors</SelectItem>
                        <SelectItem value="fatima">Barr. Fatima Ibrahim</SelectItem>
                        <SelectItem value="ahmad">Barr. Ahmad Sani</SelectItem>
                        <SelectItem value="maryam">Barr. Maryam Usman</SelectItem>
                        <SelectItem value="ibrahim">Barr. Ibrahim Sani</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {hasActiveFilters && (
                  <div className="flex justify-end">
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
                <p className="text-sm text-gray-600">Total Documents</p>
                <p className="text-2xl font-bold text-gray-900">1,247</p>
              </div>
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-blue-600">38</p>
              </div>
              <FileText className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Categories</p>
                <p className="text-2xl font-bold text-[#006403]">8</p>
              </div>
              <FolderOpen className="w-8 h-8 text-[#006403]" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Storage Used</p>
                <p className="text-2xl font-bold text-gray-900">2.4 GB</p>
              </div>
              <FolderOpen className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Documents */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockRecords.map((record) => (
              <Link key={record.id} href={`/legal-records/${record.id}`}>
                <div className="p-4 border border-gray-200 rounded-lg hover:border-[#006403] hover:shadow-sm transition-all cursor-pointer">

                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="w-5 h-5 text-[#006403]" />
                      <h3 className="font-semibold text-gray-900">{record.documentNo}</h3>
                      <Badge variant="outline" className="text-xs">
                        {record.category}
                      </Badge>
                    </div>
                    <p className="text-sm font-medium text-gray-700 mb-2">{record.title}</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      {record.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">Author:</span>
                    <span className="font-medium text-gray-700">{record.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span>{new Date(record.date).toLocaleDateString('en-NG')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">Type:</span>
                    <span className="font-medium text-gray-700">{record.fileType}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">Size:</span>
                    <span className="font-medium text-gray-700">{record.fileSize}</span>
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

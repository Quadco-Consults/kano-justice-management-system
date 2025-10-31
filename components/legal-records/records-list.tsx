"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Filter, FolderOpen, Calendar, FileText, Download } from "lucide-react"
import Link from "next/link"

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
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Categories Grid */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link key={category} href={`/legal-records/category/${category.toLowerCase().replace(/\s+/g, '-')}`}>
              <Card className="hover:border-[#8B1538] hover:shadow-sm transition-all cursor-pointer">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <FolderOpen className="w-5 h-5 text-[#8B1538]" />
                    <span className="text-sm font-medium text-gray-900">{category}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

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
                <p className="text-2xl font-bold text-[#8B1538]">8</p>
              </div>
              <FolderOpen className="w-8 h-8 text-[#8B1538]" />
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
              <div
                key={record.id}
                className="p-4 border border-gray-200 rounded-lg hover:border-[#8B1538] hover:shadow-sm transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="w-5 h-5 text-[#8B1538]" />
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
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

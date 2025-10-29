'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import {
  Plus,
  Search,
  Filter,
  FileText,
  Clock,
  User,
  Calendar,
  AlertCircle,
  CheckCircle,
  XCircle,
  Eye
} from 'lucide-react'

import Navbar from '@/components/dashboard/navbar'
import Sidebar from '@/components/dashboard/sidebar'
import { legalAdvisoryRequests } from '@/lib/legal-advisory-data'
import { LegalAdvisoryRequest } from '@/types/legal-advisory'

export default function LegalAdvisoryPage() {
  const { data: session } = useSession()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [priorityFilter, setPriorityFilter] = useState<string>('all')
  const [selectedRequest, setSelectedRequest] = useState<LegalAdvisoryRequest | null>(null)

  const filteredRequests = legalAdvisoryRequests.filter(request => {
    const matchesSearch = request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.requestingMinistry.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.category.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === 'all' || request.status === statusFilter
    const matchesPriority = priorityFilter === 'all' || request.priority === priorityFilter

    return matchesSearch && matchesStatus && matchesPriority
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'text-yellow-700 bg-yellow-100'
      case 'under_review':
        return 'text-blue-700 bg-blue-100'
      case 'requires_clarification':
        return 'text-orange-700 bg-orange-100'
      case 'completed':
        return 'text-green-700 bg-green-100'
      case 'rejected':
        return 'text-red-700 bg-red-100'
      default:
        return 'text-gray-700 bg-gray-100'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'text-red-700 bg-red-100'
      case 'high':
        return 'text-orange-700 bg-orange-100'
      case 'medium':
        return 'text-yellow-700 bg-yellow-100'
      case 'low':
        return 'text-green-700 bg-green-100'
      default:
        return 'text-gray-700 bg-gray-100'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4" />
      case 'under_review':
        return <Eye className="h-4 w-4" />
      case 'requires_clarification':
        return <AlertCircle className="h-4 w-4" />
      case 'completed':
        return <CheckCircle className="h-4 w-4" />
      case 'rejected':
        return <XCircle className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-NG', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date)
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={isMobileMenuOpen} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar
          onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          isMobileMenuOpen={isMobileMenuOpen}
        />

        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-secondary-900">Legal Advisory</h1>
                <p className="text-secondary-600 mt-1">
                  Manage legal opinion requests and advisory services
                </p>
              </div>
              <button className="btn-primary flex items-center space-x-2">
                <Plus className="h-5 w-5" />
                <span>New Request</span>
              </button>
            </div>

            {/* Filters and Search */}
            <div className="card mb-6">
              <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" />
                    <input
                      type="text"
                      placeholder="Search requests..."
                      className="input-field pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex space-x-4">
                  <select
                    className="input-field w-40"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="all">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="under_review">Under Review</option>
                    <option value="requires_clarification">Needs Clarification</option>
                    <option value="completed">Completed</option>
                    <option value="rejected">Rejected</option>
                  </select>
                  <select
                    className="input-field w-40"
                    value={priorityFilter}
                    onChange={(e) => setPriorityFilter(e.target.value)}
                  >
                    <option value="all">All Priority</option>
                    <option value="urgent">Urgent</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Requests List */}
            <div className="grid gap-6">
              {filteredRequests.map((request) => (
                <div key={request.id} className="card hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-secondary-900">
                          {request.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                          <div className="flex items-center space-x-1">
                            {getStatusIcon(request.status)}
                            <span className="capitalize">{request.status.replace('_', ' ')}</span>
                          </div>
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(request.priority)}`}>
                          {request.priority.toUpperCase()}
                        </span>
                      </div>

                      <p className="text-secondary-600 mb-3 line-clamp-2">
                        {request.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-secondary-400" />
                          <span className="text-secondary-600">ID: {request.id}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-secondary-400" />
                          <span className="text-secondary-600">{request.requestingMinistry}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-secondary-400" />
                          <span className="text-secondary-600">Created: {formatDate(request.createdAt)}</span>
                        </div>
                        {request.assignedTo && (
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4 text-secondary-400" />
                            <span className="text-secondary-600">Assigned: {request.assignedTo}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-secondary-500">
                            Category: {request.category}
                          </span>
                          {request.documents.length > 0 && (
                            <span className="text-sm text-secondary-500">
                              {request.documents.length} document(s)
                            </span>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setSelectedRequest(request)}
                            className="btn-secondary text-sm"
                          >
                            View Details
                          </button>
                          {(session?.user?.role === 'LEGAL_OFFICER' ||
                            session?.user?.role === 'DEPUTY_ATTORNEY_GENERAL' ||
                            session?.user?.role === 'ATTORNEY_GENERAL') && (
                            <button className="btn-primary text-sm">
                              Take Action
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {filteredRequests.length === 0 && (
                <div className="text-center py-12">
                  <FileText className="h-12 w-12 text-secondary-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-secondary-900">No requests found</h3>
                  <p className="text-secondary-600">
                    {searchTerm || statusFilter !== 'all' || priorityFilter !== 'all'
                      ? 'Try adjusting your search criteria'
                      : 'No legal advisory requests have been submitted yet'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Request Details Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-bold text-secondary-900">Request Details</h2>
                <button
                  onClick={() => setSelectedRequest(null)}
                  className="text-secondary-400 hover:text-secondary-600"
                >
                  <XCircle className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-2">{selectedRequest.title}</h3>
                  <p className="text-secondary-600">{selectedRequest.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-secondary-700">Request ID</label>
                    <p className="text-secondary-900">{selectedRequest.id}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-secondary-700">Status</label>
                    <p className="text-secondary-900 capitalize">{selectedRequest.status.replace('_', ' ')}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-secondary-700">Priority</label>
                    <p className="text-secondary-900 capitalize">{selectedRequest.priority}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-secondary-700">Category</label>
                    <p className="text-secondary-900">{selectedRequest.category}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-secondary-700">Requesting Ministry</label>
                    <p className="text-secondary-900">{selectedRequest.requestingMinistry}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-secondary-700">Contact Person</label>
                    <p className="text-secondary-900">{selectedRequest.contactPerson}</p>
                  </div>
                </div>

                {selectedRequest.documents.length > 0 && (
                  <div>
                    <label className="text-sm font-medium text-secondary-700 mb-2 block">Documents</label>
                    <div className="space-y-2">
                      {selectedRequest.documents.map((doc) => (
                        <div key={doc.id} className="flex items-center justify-between p-3 border border-secondary-200 rounded-lg">
                          <div>
                            <p className="font-medium text-secondary-900">{doc.name}</p>
                            <p className="text-sm text-secondary-600">
                              {(doc.size / 1024 / 1024).toFixed(2)} MB • Uploaded {formatDate(doc.uploadedAt)}
                            </p>
                          </div>
                          <button className="btn-secondary text-sm">Download</button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedRequest.legalOpinion && (
                  <div>
                    <label className="text-sm font-medium text-secondary-700 mb-2 block">Legal Opinion</label>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-secondary-900">{selectedRequest.legalOpinion}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
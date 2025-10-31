"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  FileText,
  MessageSquare,
  User,
  Calendar,
  Download,
  Eye,
  Send,
  Edit,
  CheckCircle,
  XCircle,
  Plus,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const mockCorrespondence = {
  id: 'CORR-2025-001',
  title: 'School Construction Contract Review',
  description: 'Legal review and advisory for the new school construction project contract including compliance verification and risk assessment.',
  stakeholder: {
    id: 1,
    name: 'Ministry of Education',
    code: 'MOE'
  },
  status: 'active',
  priority: 'high',
  createdDate: '2025-10-20',
  createdBy: 'Hon. Commissioner Ahmed Ibrahim',
  lastActivity: '2025-10-30',
  participants: [
    { name: 'Barr. Fatima Ibrahim', role: 'Lead Counsel' },
    { name: 'Hon. Commissioner', role: 'Stakeholder Representative' },
    { name: 'Legal Advisory Team', role: 'Support Team' }
  ],
  requests: [
    {
      id: 'REQ-001',
      title: 'Initial Contract Review',
      type: 'Legal Advisory',
      status: 'completed',
      priority: 'high',
      requestedBy: 'Hon. Commissioner',
      assignedTo: 'Barr. Fatima Ibrahim',
      dateRequested: '2025-10-20',
      dateCompleted: '2025-10-25',
      description: 'Review the contract terms and identify any legal risks or non-compliance issues.'
    },
    {
      id: 'REQ-002',
      title: 'Compliance Verification',
      type: 'Legal Advisory',
      status: 'completed',
      priority: 'high',
      requestedBy: 'Barr. Fatima Ibrahim',
      assignedTo: 'Legal Advisory Team',
      dateRequested: '2025-10-25',
      dateCompleted: '2025-10-28',
      description: 'Verify compliance with state procurement laws and regulations.'
    },
    {
      id: 'REQ-003',
      title: 'Risk Assessment Report',
      type: 'Legal Advisory',
      status: 'in-progress',
      priority: 'medium',
      requestedBy: 'Legal Advisory Team',
      assignedTo: 'Barr. Fatima Ibrahim',
      dateRequested: '2025-10-28',
      dateCompleted: null,
      description: 'Prepare comprehensive risk assessment report for the contract.'
    }
  ],
  documents: [
    {
      id: 'DOC-001',
      name: 'Construction Contract - Draft v1.pdf',
      type: 'Contract',
      uploadedBy: 'Hon. Commissioner',
      uploadDate: '2025-10-20',
      size: '2.5 MB',
      views: 12,
      downloads: 5
    },
    {
      id: 'DOC-002',
      name: 'Legal Review Report.pdf',
      type: 'Report',
      uploadedBy: 'Barr. Fatima Ibrahim',
      uploadDate: '2025-10-25',
      size: '1.8 MB',
      views: 8,
      downloads: 3
    },
    {
      id: 'DOC-003',
      name: 'Compliance Checklist.xlsx',
      type: 'Checklist',
      uploadedBy: 'Legal Advisory Team',
      uploadDate: '2025-10-28',
      size: '450 KB',
      views: 6,
      downloads: 2
    },
    {
      id: 'DOC-004',
      name: 'Procurement Law Reference.pdf',
      type: 'Reference',
      uploadedBy: 'Legal Advisory Team',
      uploadDate: '2025-10-28',
      size: '3.2 MB',
      views: 5,
      downloads: 2
    }
  ],
  comments: [
    {
      id: 1,
      author: 'Barr. Fatima Ibrahim',
      date: '2025-10-30',
      comment: 'The risk assessment is almost complete. Will submit by end of day today.'
    },
    {
      id: 2,
      author: 'Hon. Commissioner',
      date: '2025-10-29',
      comment: 'Thank you for the thorough compliance verification. Please prioritize the risk assessment as we need it for the cabinet meeting.'
    },
    {
      id: 3,
      author: 'Legal Advisory Team',
      date: '2025-10-28',
      comment: 'Compliance verification completed. All requirements met except for one minor clause that needs amendment.'
    },
    {
      id: 4,
      author: 'Barr. Fatima Ibrahim',
      date: '2025-10-25',
      comment: 'Initial review completed. Contract is generally sound but requires some amendments to ensure full compliance.'
    }
  ],
  approvals: [
    {
      id: 1,
      stage: 'Legal Review',
      approver: 'Barr. Fatima Ibrahim',
      status: 'approved',
      date: '2025-10-25',
      comments: 'Legal review completed with recommended amendments.'
    },
    {
      id: 2,
      stage: 'Compliance Verification',
      approver: 'Director - Legal Advisory',
      status: 'approved',
      date: '2025-10-28',
      comments: 'Compliance verified with minor amendments required.'
    },
    {
      id: 3,
      stage: 'Final Approval',
      approver: 'Attorney General',
      status: 'pending',
      date: null,
      comments: null
    }
  ],
  activityTimeline: [
    {
      id: 1,
      type: 'comment',
      user: 'Barr. Fatima Ibrahim',
      action: 'Added a comment',
      date: '2025-10-30T14:30:00',
      details: 'The risk assessment is almost complete.'
    },
    {
      id: 2,
      type: 'comment',
      user: 'Hon. Commissioner',
      action: 'Added a comment',
      date: '2025-10-29T11:20:00',
      details: 'Thank you for the thorough compliance verification.'
    },
    {
      id: 3,
      type: 'approval',
      user: 'Director - Legal Advisory',
      action: 'Approved compliance verification',
      date: '2025-10-28T16:45:00',
      details: 'Compliance verified with minor amendments required.'
    },
    {
      id: 4,
      type: 'document',
      user: 'Legal Advisory Team',
      action: 'Uploaded document',
      date: '2025-10-28T15:30:00',
      details: 'Compliance Checklist.xlsx'
    },
    {
      id: 5,
      type: 'request',
      user: 'Legal Advisory Team',
      action: 'Submitted new request',
      date: '2025-10-28T10:15:00',
      details: 'Risk Assessment Report'
    },
    {
      id: 6,
      type: 'request',
      user: 'Barr. Fatima Ibrahim',
      action: 'Completed request',
      date: '2025-10-25T17:00:00',
      details: 'Initial Contract Review'
    }
  ]
}

interface CorrespondenceDetailProps {
  id: string
}

export function CorrespondenceDetail({ id }: CorrespondenceDetailProps) {
  const router = useRouter()
  const [showNewRequestDialog, setShowNewRequestDialog] = useState(false)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href={`/stakeholders/${mockCorrespondence.stakeholder.id}`}>
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Stakeholder
            </Button>
          </Link>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-3xl font-bold text-gray-900">{mockCorrespondence.title}</h1>
              <Badge variant="outline">{mockCorrespondence.id}</Badge>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Link href={`/stakeholders/${mockCorrespondence.stakeholder.id}`} className="hover:underline">
                <span>{mockCorrespondence.stakeholder.name}</span>
              </Link>
              <span>•</span>
              <Badge
                variant={
                  mockCorrespondence.status === 'active'
                    ? 'default'
                    : mockCorrespondence.status === 'pending-approval'
                    ? 'secondary'
                    : 'success'
                }
              >
                {mockCorrespondence.status}
              </Badge>
              <span>•</span>
              <Badge
                className={
                  mockCorrespondence.priority === 'high'
                    ? 'bg-red-100 text-red-800'
                    : mockCorrespondence.priority === 'medium'
                    ? 'bg-orange-100 text-orange-800'
                    : 'bg-gray-100 text-gray-800'
                }
              >
                {mockCorrespondence.priority} priority
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Requests</p>
                <p className="text-2xl font-bold text-gray-900">{mockCorrespondence.requests.length}</p>
              </div>
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Documents</p>
                <p className="text-2xl font-bold text-blue-600">{mockCorrespondence.documents.length}</p>
              </div>
              <FileText className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Comments</p>
                <p className="text-2xl font-bold text-purple-600">{mockCorrespondence.comments.length}</p>
              </div>
              <MessageSquare className="w-8 h-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Participants</p>
                <p className="text-2xl font-bold text-[#8B1538]">{mockCorrespondence.participants.length}</p>
              </div>
              <User className="w-8 h-8 text-[#8B1538]" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="requests">Requests</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="comments">Comments</TabsTrigger>
          <TabsTrigger value="approvals">Approvals</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Correspondence Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Created By</p>
                  <p className="font-medium text-gray-900">{mockCorrespondence.createdBy}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Created Date</p>
                  <p className="font-medium text-gray-900">
                    {new Date(mockCorrespondence.createdDate).toLocaleDateString('en-NG', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Last Activity</p>
                  <p className="font-medium text-gray-900">
                    {new Date(mockCorrespondence.lastActivity).toLocaleDateString('en-NG', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Status</p>
                  <div>
                    <Badge
                      variant={
                        mockCorrespondence.status === 'active'
                          ? 'default'
                          : mockCorrespondence.status === 'pending-approval'
                          ? 'secondary'
                          : 'success'
                      }
                    >
                      {mockCorrespondence.status}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600 mb-2">Description</p>
                <p className="text-gray-900">{mockCorrespondence.description}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Participants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockCorrespondence.participants.map((participant, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#8B1538]/10 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-[#8B1538]" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{participant.name}</p>
                        <p className="text-sm text-gray-600">{participant.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Requests Tab */}
        <TabsContent value="requests" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>All Requests</CardTitle>
                <Link href={`/communications/requests/new?correspondence=${id}`}>
                  <Button size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    New Request
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockCorrespondence.requests.map((request) => (
                  <Link key={request.id} href={`/communications/requests/${request.id}`}>
                    <div className="p-4 border border-gray-200 rounded-lg hover:border-[#8B1538] hover:shadow-sm transition-all cursor-pointer">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-gray-900">{request.title}</h4>
                            <Badge variant="outline">{request.id}</Badge>
                            <Badge variant="outline">{request.type}</Badge>
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
                          <p className="text-sm text-gray-600 mb-2">{request.description}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-xs text-gray-500">
                        <div>
                          <span className="font-medium">Requested by:</span> {request.requestedBy}
                        </div>
                        <div>
                          <span className="font-medium">Assigned to:</span> {request.assignedTo}
                        </div>
                        <div>
                          <span className="font-medium">Date:</span>{' '}
                          {new Date(request.dateRequested).toLocaleDateString('en-NG')}
                        </div>
                        {request.dateCompleted && (
                          <div>
                            <span className="font-medium">Completed:</span>{' '}
                            {new Date(request.dateCompleted).toLocaleDateString('en-NG')}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Documents Tab */}
        <TabsContent value="documents" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Shared Documents</CardTitle>
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Upload Document
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockCorrespondence.documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#8B1538] transition-all"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{doc.name}</p>
                        <div className="flex items-center gap-3 text-xs text-gray-600 mt-1">
                          <Badge variant="outline">{doc.type}</Badge>
                          <span>{doc.size}</span>
                          <span>•</span>
                          <span>Uploaded by {doc.uploadedBy}</span>
                          <span>•</span>
                          <span>{new Date(doc.uploadDate).toLocaleDateString('en-NG')}</span>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            <span>{doc.views} views</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            <span>{doc.downloads} downloads</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Comments Tab */}
        <TabsContent value="comments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Comments & Discussion</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockCorrespondence.comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold text-gray-900">{comment.author}</p>
                          <span className="text-xs text-gray-500">
                            {new Date(comment.date).toLocaleDateString('en-NG', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        <p className="text-gray-900">{comment.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t">
                <Button className="w-full">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Add Comment
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Approvals Tab */}
        <TabsContent value="approvals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Approval Workflow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockCorrespondence.approvals.map((approval, index) => (
                  <div key={approval.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          approval.status === 'approved'
                            ? 'bg-green-100'
                            : approval.status === 'rejected'
                            ? 'bg-red-100'
                            : 'bg-gray-100'
                        }`}
                      >
                        {approval.status === 'approved' ? (
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        ) : approval.status === 'rejected' ? (
                          <XCircle className="w-6 h-6 text-red-600" />
                        ) : (
                          <Clock className="w-6 h-6 text-gray-600" />
                        )}
                      </div>
                      {index < mockCorrespondence.approvals.length - 1 && (
                        <div className="w-0.5 h-16 bg-gray-200 my-1" />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-gray-900">{approval.stage}</p>
                        <Badge
                          variant={
                            approval.status === 'approved'
                              ? 'success'
                              : approval.status === 'rejected'
                              ? 'destructive'
                              : 'secondary'
                          }
                        >
                          {approval.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{approval.approver}</p>
                      {approval.date && (
                        <p className="text-xs text-gray-500 mb-2">
                          {new Date(approval.date).toLocaleDateString('en-NG', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      )}
                      {approval.comments && <p className="text-sm text-gray-700">{approval.comments}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Activity Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockCorrespondence.activityTimeline.map((activity, index) => (
                  <div key={activity.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          activity.type === 'approval'
                            ? 'bg-green-100'
                            : activity.type === 'comment'
                            ? 'bg-blue-100'
                            : activity.type === 'document'
                            ? 'bg-purple-100'
                            : 'bg-orange-100'
                        }`}
                      >
                        {activity.type === 'approval' ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : activity.type === 'comment' ? (
                          <MessageSquare className="w-5 h-5 text-blue-600" />
                        ) : activity.type === 'document' ? (
                          <FileText className="w-5 h-5 text-purple-600" />
                        ) : (
                          <Send className="w-5 h-5 text-orange-600" />
                        )}
                      </div>
                      {index < mockCorrespondence.activityTimeline.length - 1 && (
                        <div className="w-0.5 h-12 bg-gray-200 my-1" />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex items-start justify-between mb-1">
                        <div>
                          <p className="font-medium text-gray-900">{activity.user}</p>
                          <p className="text-sm text-gray-600">{activity.action}</p>
                        </div>
                        <span className="text-xs text-gray-500">
                          {new Date(activity.date).toLocaleDateString('en-NG', {
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">{activity.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

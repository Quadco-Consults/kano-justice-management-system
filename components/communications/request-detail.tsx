"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ArrowLeft,
  Edit,
  CheckCircle,
  XCircle,
  Clock,
  Send,
  FileText,
  User,
  Calendar,
  MessageSquare
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const mockRequest = {
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
  assignedDate: '2025-10-20',
  dueDate: '2025-10-27',
  completedDate: '2025-10-25',
  stakeholder: { id: 1, name: 'Ministry of Education', code: 'MOE' },
  attachments: [
    { id: 1, name: 'Construction Contract - Draft v1.pdf', size: '2.5 MB', uploadDate: '2025-10-20' },
    { id: 2, name: 'Procurement Guidelines.pdf', size: '1.2 MB', uploadDate: '2025-10-20' }
  ],
  response: {
    summary: 'The contract has been reviewed and found to be generally compliant with procurement laws. However, several amendments are recommended to ensure full legal protection.',
    details: 'After thorough review of the construction contract, the following issues were identified:\n\n1. Clause 5.2 needs amendment to include force majeure provisions\n2. Payment terms in Section 7 should be aligned with state financial regulations\n3. Dispute resolution mechanism should specify Kano State jurisdiction\n4. Performance bond requirements need to be explicitly stated\n\nAll amendments have been marked in the attached reviewed document.',
    respondedBy: 'Barr. Fatima Ibrahim',
    respondedDate: '2025-10-25'
  },
  comments: [
    {
      id: 1,
      author: 'Hon. Commissioner',
      date: '2025-10-26',
      comment: 'Thank you for the thorough review. We will incorporate all recommended amendments.'
    },
    {
      id: 2,
      author: 'Barr. Fatima Ibrahim',
      date: '2025-10-25',
      comment: 'Review completed. Please see attached document with tracked changes.'
    }
  ],
  activityLog: [
    { id: 1, action: 'Request completed', user: 'Barr. Fatima Ibrahim', date: '2025-10-25T17:00:00' },
    { id: 2, action: 'Response submitted', user: 'Barr. Fatima Ibrahim', date: '2025-10-25T16:45:00' },
    { id: 3, action: 'Request assigned', user: 'System', date: '2025-10-20T10:30:00' },
    { id: 4, action: 'Request created', user: 'Hon. Commissioner', date: '2025-10-20T09:15:00' }
  ]
}

interface RequestDetailProps {
  id: string
}

export function RequestDetail({ id }: RequestDetailProps) {
  const router = useRouter()
  const [showEditDialog, setShowEditDialog] = useState(false)
  const [showActionDialog, setShowActionDialog] = useState(false)
  const [actionType, setActionType] = useState<'approve' | 'reject' | 'reassign'>('approve')
  const [actionNotes, setActionNotes] = useState("")

  const handleAction = () => {
    console.log("Action:", actionType, actionNotes)
    setShowActionDialog(false)
    setActionNotes("")
  }

  const handleEdit = () => {
    router.push(`/communications/requests/${id}/edit`)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href={`/correspondences/${mockRequest.correspondenceId}`}>
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Correspondence
            </Button>
          </Link>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-3xl font-bold text-gray-900">{mockRequest.title}</h1>
              <Badge variant="outline">{mockRequest.id}</Badge>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Link href={`/correspondences/${mockRequest.correspondenceId}`} className="hover:underline">
                <span>{mockRequest.correspondenceTitle}</span>
              </Link>
              <span>•</span>
              <Badge
                variant={
                  mockRequest.status === 'completed'
                    ? 'success'
                    : mockRequest.status === 'in-progress'
                    ? 'default'
                    : 'secondary'
                }
              >
                {mockRequest.status}
              </Badge>
              <span>•</span>
              <Badge
                className={
                  mockRequest.priority === 'high'
                    ? 'bg-red-100 text-red-800'
                    : mockRequest.priority === 'medium'
                    ? 'bg-orange-100 text-orange-800'
                    : 'bg-gray-100 text-gray-800'
                }
              >
                {mockRequest.priority} priority
              </Badge>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handleEdit}>
            <Edit className="w-4 h-4 mr-2" />
            Edit Request
          </Button>
          <Dialog open={showActionDialog} onOpenChange={setShowActionDialog}>
            <DialogTrigger asChild>
              <Button>
                <CheckCircle className="w-4 h-4 mr-2" />
                Take Action
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Take Action on Request</DialogTitle>
                <DialogDescription>
                  Choose an action and provide notes if necessary.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>Action Type</Label>
                  <Select value={actionType} onValueChange={(value: any) => setActionType(value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="approve">Approve Request</SelectItem>
                      <SelectItem value="reject">Reject Request</SelectItem>
                      <SelectItem value="reassign">Reassign Request</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Notes / Comments</Label>
                  <Textarea
                    placeholder="Add any notes or comments..."
                    value={actionNotes}
                    onChange={(e) => setActionNotes(e.target.value)}
                    rows={4}
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setShowActionDialog(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleAction}>
                    {actionType === 'approve' && <CheckCircle className="w-4 h-4 mr-2" />}
                    {actionType === 'reject' && <XCircle className="w-4 h-4 mr-2" />}
                    {actionType === 'reassign' && <Send className="w-4 h-4 mr-2" />}
                    Confirm {actionType.charAt(0).toUpperCase() + actionType.slice(1)}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Request Details */}
      <Card>
        <CardHeader>
          <CardTitle>Request Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Request Type</p>
              <p className="font-medium text-gray-900">{mockRequest.type}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Status</p>
              <Badge
                variant={
                  mockRequest.status === 'completed'
                    ? 'success'
                    : mockRequest.status === 'in-progress'
                    ? 'default'
                    : 'secondary'
                }
              >
                {mockRequest.status}
              </Badge>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Requested By</p>
              <p className="font-medium text-gray-900">{mockRequest.requestedBy}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Requested Date</p>
              <p className="font-medium text-gray-900">
                {new Date(mockRequest.requestedDate).toLocaleDateString('en-NG', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Assigned To</p>
              <p className="font-medium text-gray-900">{mockRequest.assignedTo}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Due Date</p>
              <p className="font-medium text-gray-900">
                {new Date(mockRequest.dueDate).toLocaleDateString('en-NG', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
            {mockRequest.completedDate && (
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Completed Date</p>
                <p className="font-medium text-green-600">
                  {new Date(mockRequest.completedDate).toLocaleDateString('en-NG', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            )}
            <div className="space-y-1">
              <p className="text-sm text-gray-600">Stakeholder</p>
              <Link href={`/stakeholders/${mockRequest.stakeholder.id}`} className="hover:underline">
                <p className="font-medium text-blue-600">{mockRequest.stakeholder.name}</p>
              </Link>
            </div>
          </div>
          <div className="pt-4 border-t">
            <p className="text-sm text-gray-600 mb-2">Description</p>
            <p className="text-gray-900">{mockRequest.description}</p>
          </div>
        </CardContent>
      </Card>

      {/* Response */}
      {mockRequest.response && (
        <Card>
          <CardHeader>
            <CardTitle>Response</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-6 pb-4 border-b">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Responded By</p>
                <p className="font-medium text-gray-900">{mockRequest.response.respondedBy}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Response Date</p>
                <p className="font-medium text-gray-900">
                  {new Date(mockRequest.response.respondedDate).toLocaleDateString('en-NG', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Summary</p>
              <p className="text-gray-900">{mockRequest.response.summary}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Detailed Response</p>
              <p className="text-gray-900 whitespace-pre-line">{mockRequest.response.details}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Attachments */}
      <Card>
        <CardHeader>
          <CardTitle>Attachments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockRequest.attachments.map((attachment) => (
              <div
                key={attachment.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#006403] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{attachment.name}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-600 mt-1">
                      <span>{attachment.size}</span>
                      <span>•</span>
                      <span>Uploaded {new Date(attachment.uploadDate).toLocaleDateString('en-NG')}</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Comments */}
      <Card>
        <CardHeader>
          <CardTitle>Comments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockRequest.comments.map((comment) => (
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

      {/* Activity Log */}
      <Card>
        <CardHeader>
          <CardTitle>Activity Log</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockRequest.activityLog.map((activity, index) => (
              <div key={activity.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  {index < mockRequest.activityLog.length - 1 && (
                    <div className="w-0.5 h-12 bg-gray-200 my-1" />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <p className="font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-600">{activity.user}</p>
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
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

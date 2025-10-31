"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { StatusBadge } from "@/components/shared/status-badge"
import { PriorityIndicator } from "@/components/shared/priority-indicator"
import { Timeline } from "@/components/shared/timeline"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  User,
  Mail,
  Phone,
  Calendar,
  FileText,
  Download,
  Upload,
  Send,
  CheckCircle,
  XCircle,
  Clock,
  MessageSquare,
  Edit,
  UserPlus,
} from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface AdvisoryDetailProps {
  id: string
}

export function AdvisoryDetail({ id }: AdvisoryDetailProps) {
  const [comment, setComment] = useState("")
  const [assignedTo, setAssignedTo] = useState("")
  const [isReassignDialogOpen, setIsReassignDialogOpen] = useState(false)
  const router = useRouter()

  // Mock list of legal officers - replace with actual API call
  const legalOfficers = [
    { id: '1', name: 'Barr. Fatima Ibrahim' },
    { id: '2', name: 'Barr. Musa Abdullahi' },
    { id: '3', name: 'Barr. Aisha Mohammed' },
    { id: '4', name: 'Barr. Ibrahim Sani' },
    { id: '5', name: 'Barr. Hauwa Garba' },
  ]

  const handleReassign = () => {
    // Add API call to reassign the request
    console.log('Reassigning to:', assignedTo)
    setIsReassignDialogOpen(false)
    // Show success toast
  }

  const handleEdit = () => {
    router.push(`/legal-advisory/new?id=${id}`)
  }

  // Mock data - replace with actual API call
  const advisory = {
    id: 1,
    trackingNo: 'LAR-20251028-001',
    agency: 'Ministry of Education',
    contactPerson: 'Dr. Amina Hassan',
    email: 'amina.hassan@education.kano.gov.ng',
    phone: '+234 803 456 7890',
    subject: 'Contract Review - School Construction Project',
    category: 'Contract Review',
    priority: 'high',
    status: 'in-progress',
    dateSubmitted: '2025-10-28',
    expectedDeadline: '2025-11-11',
    assignedTo: 'Barr. Fatima Ibrahim',
    description: `The Ministry of Education is seeking legal review and advisory on a proposed contract for the construction of 5 new secondary schools across Kano State. The contract value is ₦2.5 billion and involves multiple stakeholders including contractors, consultants, and funding agencies.

Key areas requiring review:
1. Contract terms and conditions
2. Payment schedules and milestones
3. Performance guarantees and penalties
4. Dispute resolution mechanisms
5. Compliance with public procurement regulations

The ministry requires urgent advisory as the project is scheduled to commence by December 2025.`,
    documents: [
      { name: 'Draft Contract Agreement.pdf', size: '2.4 MB', uploadedBy: 'Dr. Amina Hassan', date: '2025-10-28' },
      { name: 'Project Specifications.pdf', size: '1.8 MB', uploadedBy: 'Dr. Amina Hassan', date: '2025-10-28' },
      { name: 'Contractor Profile.pdf', size: '856 KB', uploadedBy: 'Dr. Amina Hassan', date: '2025-10-28' },
    ],
    timeline: [
      {
        title: 'Request Submitted',
        description: 'Advisory request submitted by Ministry of Education',
        timestamp: '2025-10-28T09:00:00',
        status: 'completed' as const,
      },
      {
        title: 'Request Reviewed',
        description: 'Request reviewed and assigned to Barr. Fatima Ibrahim',
        timestamp: '2025-10-28T10:30:00',
        status: 'completed' as const,
      },
      {
        title: 'Analysis in Progress',
        description: 'Legal analysis and contract review underway',
        timestamp: '2025-10-29T14:00:00',
        status: 'in-progress' as const,
      },
      {
        title: 'Draft Opinion',
        description: 'Draft legal opinion pending',
        timestamp: null,
        status: 'pending' as const,
      },
      {
        title: 'Final Review',
        description: 'Final review and approval pending',
        timestamp: null,
        status: 'pending' as const,
      },
    ],
    comments: [
      {
        id: 1,
        user: 'Barr. Fatima Ibrahim',
        message: 'Received the request. Initial review shows potential compliance issues with procurement regulations. Will conduct detailed analysis.',
        timestamp: '2025-10-28T11:00:00',
      },
      {
        id: 2,
        user: 'Dr. Amina Hassan',
        message: 'Thank you. Please prioritize the payment terms review as we need clarity on milestone-based disbursements.',
        timestamp: '2025-10-28T15:30:00',
      },
    ],
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-gray-900">{advisory.trackingNo}</h1>
            <StatusBadge status={advisory.status as any} />
            <PriorityIndicator priority={advisory.priority as any} />
          </div>
          <p className="text-xl text-gray-700">{advisory.subject}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handleEdit}>
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </Button>
          <Button variant="outline">
            <Upload className="w-4 h-4 mr-2" />
            Upload Response
          </Button>
          <Button>
            <CheckCircle className="w-4 h-4 mr-2" />
            Mark Complete
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Request Details */}
          <Card>
            <CardHeader>
              <CardTitle>Request Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-2">Description</h3>
                <p className="text-gray-900 whitespace-pre-line">{advisory.description}</p>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="outline">{advisory.category}</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Supporting Documents */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Supporting Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {advisory.documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-[#8B1538] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-[#8B1538]" />
                      <div>
                        <p className="font-medium text-gray-900">{doc.name}</p>
                        <p className="text-sm text-gray-600">
                          {doc.size} • Uploaded by {doc.uploadedBy} • {new Date(doc.date).toLocaleDateString('en-NG')}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Comments & Communication */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Comments & Communication
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {advisory.comments.map((comment) => (
                  <div key={comment.id} className="border-l-4 border-[#8B1538] pl-4 py-2">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-medium text-gray-900">{comment.user}</p>
                      <span className="text-sm text-gray-500">
                        {new Date(comment.timestamp).toLocaleString('en-NG')}
                      </span>
                    </div>
                    <p className="text-gray-700">{comment.message}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t">
                <Textarea
                  placeholder="Add a comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={3}
                />
                <Button>
                  <Send className="w-4 h-4 mr-2" />
                  Send Comment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Request Information */}
          <Card>
            <CardHeader>
              <CardTitle>Request Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Agency</p>
                  <p className="font-medium text-gray-900">{advisory.agency}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Contact Person</p>
                  <p className="font-medium text-gray-900">{advisory.contactPerson}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium text-gray-900 text-sm break-all">{advisory.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium text-gray-900">{advisory.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Date Submitted</p>
                  <p className="font-medium text-gray-900">
                    {new Date(advisory.dateSubmitted).toLocaleDateString('en-NG')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Expected Deadline</p>
                  <p className="font-medium text-gray-900">
                    {new Date(advisory.expectedDeadline).toLocaleDateString('en-NG')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Assigned To</p>
                  <p className="font-medium text-gray-900">{advisory.assignedTo}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Progress Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <Timeline items={advisory.timeline} />
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start text-white">
                <CheckCircle className="w-4 h-4 mr-2" />
                Approve Request
              </Button>
              <Button variant="outline" className="w-full justify-start text-white">
                <XCircle className="w-4 h-4 mr-2" />
                Reject Request
              </Button>

              <Dialog open={isReassignDialogOpen} onOpenChange={setIsReassignDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-white">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Reassign
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Reassign Request</DialogTitle>
                    <DialogDescription>
                      Assign this legal advisory request to a different legal officer.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900">Currently Assigned To</label>
                      <p className="text-sm text-gray-700">{advisory.assignedTo}</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900">Reassign To</label>
                      <Select value={assignedTo} onValueChange={setAssignedTo}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a legal officer" />
                        </SelectTrigger>
                        <SelectContent>
                          {legalOfficers.map((officer) => (
                            <SelectItem key={officer.id} value={officer.id}>
                              {officer.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsReassignDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleReassign} disabled={!assignedTo}>
                      Reassign Request
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              <Button variant="outline" className="w-full justify-start text-white">
                <MessageSquare className="w-4 h-4 mr-2" />
                Request Information
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

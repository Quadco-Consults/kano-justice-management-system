"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Calendar,
  User,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Download,
  Eye,
  GitBranch,
  History,
  ThumbsUp,
  ThumbsDown,
  ArrowRight,
  Edit3
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
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

const mockBill = {
  id: 1,
  billNo: 'BILL-2025-001',
  title: 'Kano State Anti-Corruption Amendment Bill 2025',
  type: 'Amendment',
  status: 'in-review',
  priority: 'high',
  sponsor: 'Ministry of Justice',
  draftedBy: 'Barr. Ibrahim Bello',
  assignedTo: 'Legislative Drafting Team',
  dateInitiated: '2025-10-15',
  targetCompletion: '2025-11-30',
  lastUpdated: '2025-10-31T10:00:00',
  description: 'Amendment to strengthen anti-corruption provisions and update penalties in line with current economic realities',
  objectives: [
    'Update penalty provisions for corruption offenses',
    'Introduce asset recovery mechanisms',
    'Strengthen whistleblower protection',
    'Align with federal anti-corruption framework'
  ],
  sections: [
    {
      id: 1,
      number: 1,
      title: 'Short Title and Commencement',
      status: 'completed',
      lastReviewed: '2025-10-20'
    },
    {
      id: 2,
      number: 2,
      title: 'Amendment to Principal Law',
      status: 'completed',
      lastReviewed: '2025-10-22'
    },
    {
      id: 3,
      number: 3,
      title: 'Penalty Provisions',
      status: 'in-review',
      lastReviewed: '2025-10-28'
    },
    {
      id: 4,
      number: 4,
      title: 'Asset Recovery Mechanism',
      status: 'draft',
      lastReviewed: null
    },
    {
      id: 5,
      number: 5,
      title: 'Whistleblower Protection',
      status: 'pending',
      lastReviewed: null
    }
  ],
  stakeholders: [
    {
      id: 1,
      name: 'Kano State House of Assembly',
      type: 'Primary',
      status: 'engaged',
      feedback: 'Awaiting review'
    },
    {
      id: 2,
      name: 'Anti-Corruption Commission',
      type: 'Collaborating Agency',
      status: 'consulted',
      feedback: 'Provided technical input'
    },
    {
      id: 3,
      name: 'Civil Society Organizations',
      type: 'External',
      status: 'pending',
      feedback: 'Consultation scheduled'
    }
  ],
  timeline: [
    {
      id: 1,
      date: '2025-10-15',
      event: 'Bill initiated',
      actor: 'Ministry of Justice',
      type: 'milestone'
    },
    {
      id: 2,
      date: '2025-10-16',
      event: 'Assigned to Legislative Drafting Team',
      actor: 'Director',
      type: 'assignment'
    },
    {
      id: 3,
      date: '2025-10-20',
      event: 'First draft completed - Sections 1-2',
      actor: 'Barr. Ibrahim Bello',
      type: 'progress'
    },
    {
      id: 4,
      date: '2025-10-25',
      event: 'Stakeholder consultation with Anti-Corruption Commission',
      actor: 'Legislative Team',
      type: 'consultation'
    },
    {
      id: 5,
      date: '2025-10-28',
      event: 'Section 3 submitted for review',
      actor: 'Barr. Ibrahim Bello',
      type: 'progress'
    }
  ],
  comments: [
    {
      id: 1,
      author: 'Barr. Fatima Hassan',
      role: 'Senior Legislative Counsel',
      date: '2025-10-29T14:30:00',
      comment: 'Section 3 penalty provisions need to be reviewed against recent Supreme Court rulings on proportionality of penalties.'
    },
    {
      id: 2,
      author: 'Barr. Ibrahim Bello',
      role: 'Chief Drafter',
      date: '2025-10-30T09:15:00',
      comment: 'Acknowledged. Will incorporate the Yusuf v. State (2024) precedent in the penalty framework.'
    }
  ],
  documents: [
    {
      id: 1,
      name: 'Draft Bill - Version 1.2',
      type: 'Draft',
      size: '245 KB',
      uploadedBy: 'Barr. Ibrahim Bello',
      uploadedDate: '2025-10-28'
    },
    {
      id: 2,
      name: 'Principal Law (Original)',
      type: 'Reference',
      size: '180 KB',
      uploadedBy: 'Legal Records',
      uploadedDate: '2025-10-15'
    },
    {
      id: 3,
      name: 'Stakeholder Comments - ACC',
      type: 'Consultation',
      size: '95 KB',
      uploadedBy: 'Legislative Team',
      uploadedDate: '2025-10-26'
    }
  ],
  versions: [
    {
      id: 1,
      version: '1.2',
      date: '2025-10-28T14:30:00',
      author: 'Barr. Ibrahim Bello',
      changes: 'Updated Section 3 penalty provisions with new Supreme Court precedents',
      changesSummary: '12 additions, 5 deletions',
      isCurrent: true
    },
    {
      id: 2,
      version: '1.1',
      date: '2025-10-22T10:15:00',
      author: 'Barr. Ibrahim Bello',
      changes: 'Completed Section 2 with amendments to principal law',
      changesSummary: '25 additions, 8 deletions',
      isCurrent: false
    },
    {
      id: 3,
      version: '1.0',
      date: '2025-10-20T09:00:00',
      author: 'Barr. Ibrahim Bello',
      changes: 'Initial draft - Sections 1 completed',
      changesSummary: '45 additions, 0 deletions',
      isCurrent: false
    }
  ],
  amendments: [
    {
      id: 1,
      section: 'Section 3',
      amendmentNo: 'AMD-001',
      proposedBy: 'Barr. Fatima Hassan',
      date: '2025-10-29',
      description: 'Increase maximum penalty from ₦5M to ₦10M for serious corruption offenses',
      status: 'pending-approval',
      votes: { approved: 2, rejected: 0, pending: 3 }
    },
    {
      id: 2,
      section: 'Section 4',
      amendmentNo: 'AMD-002',
      proposedBy: 'Anti-Corruption Commission',
      date: '2025-10-26',
      description: 'Add provision for immediate freezing of suspect assets pending investigation',
      status: 'approved',
      votes: { approved: 5, rejected: 0, pending: 0 }
    },
    {
      id: 3,
      section: 'Section 5',
      amendmentNo: 'AMD-003',
      proposedBy: 'Barr. Ahmad Sani',
      date: '2025-10-25',
      description: 'Extend whistleblower protection to family members of whistleblower',
      status: 'in-discussion',
      votes: { approved: 1, rejected: 1, pending: 3 }
    }
  ],
  approvals: [
    {
      id: 1,
      approver: 'Barr. Fatima Hassan',
      role: 'Senior Legislative Counsel',
      stage: 'Technical Review',
      status: 'approved',
      date: '2025-10-29T16:00:00',
      comments: 'Technically sound. Recommend approval with minor amendments.'
    },
    {
      id: 2,
      approver: 'Director of Legislative Drafting',
      role: 'Department Head',
      stage: 'Department Review',
      status: 'approved',
      date: '2025-10-30T10:30:00',
      comments: 'Approved for stakeholder consultation.'
    },
    {
      id: 3,
      approver: 'Legal Advisor to the Governor',
      role: 'Chief Legal Advisor',
      stage: 'Executive Review',
      status: 'pending',
      date: null,
      comments: null
    },
    {
      id: 4,
      approver: 'Attorney General',
      role: 'State Attorney General',
      stage: 'Final Legal Review',
      status: 'pending',
      date: null,
      comments: null
    },
    {
      id: 5,
      approver: 'Governor',
      role: 'State Governor',
      stage: 'Executive Assent',
      status: 'pending',
      date: null,
      comments: null
    }
  ],
  sectionComments: {
    3: [
      {
        id: 1,
        author: 'Barr. Fatima Hassan',
        date: '2025-10-29T14:30:00',
        comment: 'The penalty provisions in subsection (2) need to reference the recent Supreme Court ruling on proportionality.',
        resolved: false
      },
      {
        id: 2,
        author: 'Barr. Ibrahim Bello',
        date: '2025-10-30T09:15:00',
        comment: 'Acknowledged. Will update to include Yusuf v. State (2024) precedent.',
        resolved: false
      }
    ]
  }
}

export function BillDetail() {
  const [showAmendmentDialog, setShowAmendmentDialog] = useState(false)
  const [showApprovalDialog, setShowApprovalDialog] = useState(false)
  const [amendmentText, setAmendmentText] = useState("")
  const [approvalComments, setApprovalComments] = useState("")
  const [selectedSection, setSelectedSection] = useState<number | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'success'
      case 'in-review': return 'default'
      case 'draft': return 'secondary'
      default: return 'outline'
    }
  }

  const getAmendmentStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800'
      case 'pending-approval': return 'bg-orange-100 text-orange-800'
      case 'in-discussion': return 'bg-blue-100 text-blue-800'
      case 'rejected': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/legislative-drafting">
            <Button variant="outline" size="sm">← Back</Button>
          </Link>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-3xl font-bold text-gray-900">{mockBill.billNo}</h1>
              <Badge variant={mockBill.status === 'in-review' ? 'default' : 'secondary'}>
                {mockBill.status}
              </Badge>
              <Badge variant={mockBill.priority === 'high' ? 'destructive' : 'secondary'}>
                {mockBill.priority}
              </Badge>
            </div>
            <h2 className="text-xl text-gray-700">{mockBill.title}</h2>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export PDF
          </Button>
          <Button variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Sections</p>
                <p className="text-2xl font-bold text-gray-900">{mockBill.sections.length}</p>
              </div>
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-green-600">
                  {mockBill.sections.filter(s => s.status === 'completed').length}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">In Review</p>
                <p className="text-2xl font-bold text-[#8B1538]">
                  {mockBill.sections.filter(s => s.status === 'in-review').length}
                </p>
              </div>
              <AlertCircle className="w-8 h-8 text-[#8B1538]" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Stakeholders</p>
                <p className="text-2xl font-bold text-blue-600">{mockBill.stakeholders.length}</p>
              </div>
              <Users className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Days Left</p>
                <p className="text-2xl font-bold text-orange-600">
                  {Math.ceil((new Date(mockBill.targetCompletion).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}
                </p>
              </div>
              <Clock className="w-8 h-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sections">Bill Sections</TabsTrigger>
          <TabsTrigger value="versions">Version History</TabsTrigger>
          <TabsTrigger value="amendments">Amendments</TabsTrigger>
          <TabsTrigger value="approvals">Approval Workflow</TabsTrigger>
          <TabsTrigger value="stakeholders">Stakeholders</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="comments">Comments</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Bill Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Bill Number</p>
                  <p className="font-medium text-gray-900">{mockBill.billNo}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Bill Type</p>
                  <p className="font-medium text-gray-900">{mockBill.type}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Sponsor</p>
                  <p className="font-medium text-gray-900">{mockBill.sponsor}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Chief Drafter</p>
                  <p className="font-medium text-gray-900">{mockBill.draftedBy}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Date Initiated</p>
                  <p className="font-medium text-gray-900">
                    {new Date(mockBill.dateInitiated).toLocaleDateString('en-NG', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Target Completion</p>
                  <p className="font-medium text-gray-900">
                    {new Date(mockBill.targetCompletion).toLocaleDateString('en-NG', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600 mb-2">Description</p>
                <p className="text-gray-900">{mockBill.description}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bill Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {mockBill.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#8B1538] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-900">{objective}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Sections Tab */}
        <TabsContent value="sections" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bill Sections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockBill.sections.map((section) => (
                  <div
                    key={section.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#8B1538] transition-all"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 bg-[#8B1538]/10 rounded-lg flex items-center justify-center">
                        <span className="font-bold text-[#8B1538]">{section.number}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <p className="font-semibold text-gray-900">{section.title}</p>
                          <Badge variant={getStatusColor(section.status)}>{section.status}</Badge>
                        </div>
                        {section.lastReviewed && (
                          <p className="text-xs text-gray-500">
                            Last reviewed: {new Date(section.lastReviewed).toLocaleDateString('en-NG')}
                          </p>
                        )}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Edit Section</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Version History Tab */}
        <TabsContent value="versions" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Version History</CardTitle>
                <Badge className="bg-blue-100 text-blue-800">
                  <History className="w-3 h-3 mr-1" />
                  Current: v{mockBill.versions.find(v => v.isCurrent)?.version}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockBill.versions.map((version) => (
                  <div
                    key={version.id}
                    className={`p-4 border rounded-lg ${
                      version.isCurrent ? 'border-[#8B1538] bg-[#8B1538]/5' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <GitBranch className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-bold text-gray-900">Version {version.version}</p>
                            {version.isCurrent && (
                              <Badge className="bg-[#8B1538] text-white">Current</Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">
                            {new Date(version.date).toLocaleString('en-NG')} • {version.author}
                          </p>
                        </div>
                      </div>
                      {!version.isCurrent && (
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
                      )}
                    </div>
                    <p className="text-gray-900 mb-2">{version.changes}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Badge variant="outline" className="text-green-600">
                        +{version.changesSummary.split(',')[0].trim()}
                      </Badge>
                      <Badge variant="outline" className="text-red-600">
                        -{version.changesSummary.split(',')[1].trim()}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Amendments Tab */}
        <TabsContent value="amendments" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Proposed Amendments</CardTitle>
                <Dialog open={showAmendmentDialog} onOpenChange={setShowAmendmentDialog}>
                  <DialogTrigger asChild>
                    <Button size="sm">
                      <Edit3 className="w-4 h-4 mr-2" />
                      Propose Amendment
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Propose New Amendment</DialogTitle>
                      <DialogDescription>
                        Suggest changes to specific sections of the bill
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label>Section</Label>
                        <select className="w-full p-2 border border-gray-200 rounded-lg">
                          {mockBill.sections.map((section) => (
                            <option key={section.id} value={section.number}>
                              Section {section.number}: {section.title}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label>Amendment Description</Label>
                        <Textarea
                          placeholder="Describe the proposed amendment..."
                          value={amendmentText}
                          onChange={(e) => setAmendmentText(e.target.value)}
                          rows={5}
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={() => setShowAmendmentDialog(false)}>
                        Cancel
                      </Button>
                      <Button>Submit Amendment</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockBill.amendments.map((amendment) => (
                  <div
                    key={amendment.id}
                    className="p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{amendment.amendmentNo}</Badge>
                          <Badge className={getAmendmentStatusColor(amendment.status)}>
                            {amendment.status.replace('-', ' ')}
                          </Badge>
                          <span className="text-sm text-gray-600">{amendment.section}</span>
                        </div>
                        <p className="text-gray-900 mb-2">{amendment.description}</p>
                        <p className="text-sm text-gray-600">
                          Proposed by {amendment.proposedBy} • {new Date(amendment.date).toLocaleDateString('en-NG')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 pt-3 border-t">
                      <div className="flex items-center gap-2">
                        <ThumbsUp className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-green-600">{amendment.votes.approved} Approved</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ThumbsDown className="w-4 h-4 text-red-600" />
                        <span className="text-sm font-medium text-red-600">{amendment.votes.rejected} Rejected</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-orange-600" />
                        <span className="text-sm font-medium text-orange-600">{amendment.votes.pending} Pending</span>
                      </div>
                      {amendment.status !== 'approved' && amendment.status !== 'rejected' && (
                        <div className="ml-auto flex gap-2">
                          <Button variant="outline" size="sm">
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            Approve
                          </Button>
                          <Button variant="outline" size="sm">
                            <ThumbsDown className="w-4 h-4 mr-1" />
                            Reject
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Approval Workflow Tab */}
        <TabsContent value="approvals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Approval Workflow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockBill.approvals.map((approval, index) => (
                  <div key={approval.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        approval.status === 'approved' ? 'bg-green-100' :
                        approval.status === 'pending' ? 'bg-orange-100' :
                        'bg-red-100'
                      }`}>
                        {approval.status === 'approved' ? <CheckCircle className="w-6 h-6 text-green-600" /> :
                         approval.status === 'pending' ? <Clock className="w-6 h-6 text-orange-600" /> :
                         <AlertCircle className="w-6 h-6 text-red-600" />}
                      </div>
                      {index < mockBill.approvals.length - 1 && (
                        <div className={`w-0.5 h-16 my-2 ${
                          approval.status === 'approved' ? 'bg-green-200' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-semibold text-gray-900">{approval.stage}</p>
                            <Badge variant={
                              approval.status === 'approved' ? 'success' :
                              approval.status === 'pending' ? 'secondary' : 'destructive'
                            }>
                              {approval.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">{approval.approver} • {approval.role}</p>
                          {approval.date && (
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(approval.date).toLocaleString('en-NG')}
                            </p>
                          )}
                        </div>
                        {approval.status === 'pending' && index === mockBill.approvals.findIndex(a => a.status === 'pending') && (
                          <Dialog open={showApprovalDialog} onOpenChange={setShowApprovalDialog}>
                            <DialogTrigger asChild>
                              <Button size="sm">
                                <ArrowRight className="w-4 h-4 mr-1" />
                                Review
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Review & Approve</DialogTitle>
                                <DialogDescription>
                                  Review the bill and provide your approval decision
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4 py-4">
                                <div className="space-y-2">
                                  <Label>Review Comments</Label>
                                  <Textarea
                                    placeholder="Provide comments or feedback..."
                                    value={approvalComments}
                                    onChange={(e) => setApprovalComments(e.target.value)}
                                    rows={4}
                                  />
                                </div>
                              </div>
                              <div className="flex justify-end gap-2">
                                <Button variant="outline" onClick={() => setShowApprovalDialog(false)}>
                                  Cancel
                                </Button>
                                <Button variant="destructive">
                                  <ThumbsDown className="w-4 h-4 mr-1" />
                                  Reject
                                </Button>
                                <Button>
                                  <ThumbsUp className="w-4 h-4 mr-1" />
                                  Approve
                                </Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        )}
                      </div>
                      {approval.comments && (
                        <div className="p-3 bg-gray-50 rounded-lg mt-2">
                          <p className="text-sm text-gray-900">{approval.comments}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Stakeholders Tab */}
        <TabsContent value="stakeholders" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Stakeholder Engagement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockBill.stakeholders.map((stakeholder) => (
                  <div
                    key={stakeholder.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <p className="font-semibold text-gray-900">{stakeholder.name}</p>
                        <Badge variant="outline">{stakeholder.type}</Badge>
                        <Badge variant={stakeholder.status === 'consulted' ? 'success' : 'secondary'}>
                          {stakeholder.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{stakeholder.feedback}</p>
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
              <CardTitle>Bill Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockBill.timeline.map((item, index) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        item.type === 'milestone' ? 'bg-[#8B1538]/10' :
                        item.type === 'progress' ? 'bg-green-100' :
                        'bg-blue-100'
                      }`}>
                        {item.type === 'milestone' ? <CheckCircle className="w-5 h-5 text-[#8B1538]" /> :
                         item.type === 'progress' ? <FileText className="w-5 h-5 text-green-600" /> :
                         <Users className="w-5 h-5 text-blue-600" />}
                      </div>
                      {index < mockBill.timeline.length - 1 && (
                        <div className="w-0.5 h-12 bg-gray-200 my-1" />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <p className="font-medium text-gray-900">{item.event}</p>
                      <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
                        <span>{new Date(item.date).toLocaleDateString('en-NG')}</span>
                        <span>•</span>
                        <span>{item.actor}</span>
                      </div>
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
              <CardTitle>Review Comments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockBill.comments.map((comment) => (
                <div key={comment.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 bg-[#8B1538]/10 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-[#8B1538]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-gray-900">{comment.author}</p>
                        <Badge variant="outline">{comment.role}</Badge>
                      </div>
                      <p className="text-xs text-gray-500">
                        {new Date(comment.date).toLocaleString('en-NG')}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-900 ml-13">{comment.comment}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Documents Tab */}
        <TabsContent value="documents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Related Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockBill.documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#8B1538] transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{doc.name}</p>
                        <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                          <Badge variant="outline">{doc.type}</Badge>
                          <span>{doc.size}</span>
                          <span>•</span>
                          <span>{doc.uploadedBy}</span>
                          <span>•</span>
                          <span>{new Date(doc.uploadedDate).toLocaleDateString('en-NG')}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
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

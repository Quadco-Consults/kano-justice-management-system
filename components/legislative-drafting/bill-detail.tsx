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
  Eye
} from "lucide-react"
import Link from "next/link"

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
  ]
}

export function BillDetail() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'success'
      case 'in-review': return 'default'
      case 'draft': return 'secondary'
      default: return 'outline'
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

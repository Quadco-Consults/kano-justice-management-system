"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Calendar,
  User,
  Clock,
  CheckCircle,
  AlertTriangle,
  Upload,
  Download,
  Send,
  Edit,
  Bell
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const mockSubmission = {
  id: 1,
  submissionNo: 'SUB-2025-028',
  title: 'Quarterly Report to Nigerian Law Reform Commission',
  type: 'Compliance Report',
  recipient: 'Nigerian Law Reform Commission',
  status: 'in-progress',
  priority: 'high',
  dueDate: '2025-11-15',
  submittedDate: null,
  createdDate: '2025-10-20',
  preparedBy: 'Barr. Maryam Usman',
  reviewedBy: null,
  description: 'Quarterly compliance report detailing state legal reforms, pending legislation, and implementation status of federal law recommendations',
  requirements: [
    'Summary of enacted state laws in Q3 2025',
    'Status of pending bills aligned with federal recommendations',
    'Implementation report of previous commission directives',
    'Statistical data on law enforcement and prosecution',
    'Challenges and recommendations'
  ],
  sections: [
    {
      id: 1,
      title: 'Executive Summary',
      status: 'completed',
      progress: 100,
      lastUpdated: '2025-10-25'
    },
    {
      id: 2,
      title: 'Enacted Legislation',
      status: 'completed',
      progress: 100,
      lastUpdated: '2025-10-28'
    },
    {
      id: 3,
      title: 'Pending Bills',
      status: 'in-progress',
      progress: 75,
      lastUpdated: '2025-10-30'
    },
    {
      id: 4,
      title: 'Implementation Status',
      status: 'in-progress',
      progress: 60,
      lastUpdated: '2025-10-31'
    },
    {
      id: 5,
      title: 'Statistical Analysis',
      status: 'pending',
      progress: 0,
      lastUpdated: null
    },
    {
      id: 6,
      title: 'Recommendations',
      status: 'pending',
      progress: 0,
      lastUpdated: null
    }
  ],
  timeline: [
    {
      id: 1,
      date: '2025-10-20',
      event: 'Submission initiated',
      actor: 'Compliance Officer',
      type: 'start'
    },
    {
      id: 2,
      date: '2025-10-21',
      event: 'Assigned to Barr. Maryam Usman',
      actor: 'Director',
      type: 'assignment'
    },
    {
      id: 3,
      date: '2025-10-25',
      event: 'Executive Summary completed',
      actor: 'Barr. Maryam Usman',
      type: 'progress'
    },
    {
      id: 4,
      date: '2025-10-28',
      event: 'Enacted Legislation section completed',
      actor: 'Barr. Maryam Usman',
      type: 'progress'
    },
    {
      id: 5,
      date: '2025-10-30',
      event: 'Review comments incorporated',
      actor: 'Barr. Maryam Usman',
      type: 'update'
    }
  ],
  documents: [
    {
      id: 1,
      name: 'Draft Report - Version 2.0',
      type: 'Draft',
      size: '1.2 MB',
      uploadedBy: 'Barr. Maryam Usman',
      uploadedDate: '2025-10-30',
      version: '2.0'
    },
    {
      id: 2,
      name: 'Q3 2025 Legislation Summary',
      type: 'Supporting Document',
      size: '450 KB',
      uploadedBy: 'Legislative Records',
      uploadedDate: '2025-10-22',
      version: '1.0'
    },
    {
      id: 3,
      name: 'Prosecution Statistics Q3',
      type: 'Data',
      size: '125 KB',
      uploadedBy: 'Public Prosecution',
      uploadedDate: '2025-10-28',
      version: '1.0'
    },
    {
      id: 4,
      name: 'Previous Quarter Report',
      type: 'Reference',
      size: '980 KB',
      uploadedBy: 'Archives',
      uploadedDate: '2025-10-20',
      version: '1.0'
    }
  ],
  checklist: [
    { id: 1, item: 'Gather required data from all departments', completed: true },
    { id: 2, item: 'Draft executive summary', completed: true },
    { id: 3, item: 'Compile enacted legislation details', completed: true },
    { id: 4, item: 'Update pending bills status', completed: true },
    { id: 5, item: 'Prepare statistical analysis', completed: false },
    { id: 6, item: 'Review by Director', completed: false },
    { id: 7, item: 'Attorney General approval', completed: false },
    { id: 8, item: 'Submit to recipient', completed: false }
  ],
  comments: [
    {
      id: 1,
      author: 'Director - Compliance',
      date: '2025-10-29T15:30:00',
      comment: 'Good progress. Please ensure the statistical analysis includes year-over-year comparison as requested by the Commission.'
    },
    {
      id: 2,
      author: 'Barr. Maryam Usman',
      date: '2025-10-30T10:00:00',
      comment: 'Noted. Will include comparative analysis for 2024 Q3 vs 2025 Q3.'
    }
  ]
}

interface SubmissionDetailProps {
  id: string
}

export function SubmissionDetail({ id }: SubmissionDetailProps) {
  const router = useRouter()
  const daysUntilDue = Math.ceil((new Date(mockSubmission.dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
  const overallProgress = Math.round(
    mockSubmission.sections.reduce((sum, s) => sum + s.progress, 0) / mockSubmission.sections.length
  )

  const handleEdit = () => {
    router.push(`/statutory-submissions/new?id=${id}`)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/statutory-submissions">
            <Button variant="outline" size="sm">← Back</Button>
          </Link>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-3xl font-bold text-gray-900">{mockSubmission.submissionNo}</h1>
              <Badge variant={mockSubmission.status === 'in-progress' ? 'default' : 'secondary'}>
                {mockSubmission.status}
              </Badge>
              <Badge variant={mockSubmission.priority === 'high' ? 'destructive' : 'secondary'}>
                {mockSubmission.priority}
              </Badge>
            </div>
            <h2 className="text-xl text-gray-700">{mockSubmission.title}</h2>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handleEdit}>
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </Button>
          <Button variant="outline">
            <Bell className="w-4 h-4 mr-2" />
            Set Reminder
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button>
            <Send className="w-4 h-4 mr-2" />
            Submit Report
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Overall Progress</p>
                <p className="text-2xl font-bold text-gray-900">{overallProgress}%</p>
              </div>
              <CheckCircle className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Days Until Due</p>
                <p className={`text-2xl font-bold ${daysUntilDue <= 7 ? 'text-red-600' : 'text-[#8B1538]'}`}>
                  {daysUntilDue}
                </p>
              </div>
              <Clock className={`w-8 h-8 ${daysUntilDue <= 7 ? 'text-red-400' : 'text-[#8B1538]'}`} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Sections</p>
                <p className="text-2xl font-bold text-blue-600">{mockSubmission.sections.length}</p>
              </div>
              <FileText className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-green-600">
                  {mockSubmission.sections.filter(s => s.status === 'completed').length}
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
                <p className="text-sm text-gray-600">Documents</p>
                <p className="text-2xl font-bold text-orange-600">{mockSubmission.documents.length}</p>
              </div>
              <Upload className="w-8 h-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sections">Sections</TabsTrigger>
          <TabsTrigger value="checklist">Checklist</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="comments">Comments</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Submission Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Submission Number</p>
                  <p className="font-medium text-gray-900">{mockSubmission.submissionNo}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Type</p>
                  <p className="font-medium text-gray-900">{mockSubmission.type}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Recipient</p>
                  <p className="font-medium text-gray-900">{mockSubmission.recipient}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Prepared By</p>
                  <p className="font-medium text-gray-900">{mockSubmission.preparedBy}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Created Date</p>
                  <p className="font-medium text-gray-900">
                    {new Date(mockSubmission.createdDate).toLocaleDateString('en-NG', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Due Date</p>
                  <p className="font-medium text-gray-900">
                    {new Date(mockSubmission.dueDate).toLocaleDateString('en-NG', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600 mb-2">Description</p>
                <p className="text-gray-900">{mockSubmission.description}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Submission Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {mockSubmission.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#8B1538] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-900">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {daysUntilDue <= 7 && (
            <Card className="border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-red-900 mb-1">Deadline Approaching</p>
                    <p className="text-sm text-red-700">
                      This submission is due in {daysUntilDue} days. Please ensure all sections are completed and reviewed before the deadline.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Sections Tab */}
        <TabsContent value="sections" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Report Sections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockSubmission.sections.map((section) => (
                  <div
                    key={section.id}
                    className="p-4 border border-gray-200 rounded-lg hover:border-[#8B1538] transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <p className="font-semibold text-gray-900">{section.title}</p>
                        <Badge
                          variant={
                            section.status === 'completed'
                              ? 'success'
                              : section.status === 'in-progress'
                              ? 'default'
                              : 'secondary'
                          }
                        >
                          {section.status}
                        </Badge>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{section.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div
                        className="bg-[#8B1538] h-2 rounded-full transition-all"
                        style={{ width: `${section.progress}%` }}
                      />
                    </div>
                    {section.lastUpdated && (
                      <p className="text-xs text-gray-500">
                        Last updated: {new Date(section.lastUpdated).toLocaleDateString('en-NG')}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Checklist Tab */}
        <TabsContent value="checklist" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Submission Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockSubmission.checklist.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      item.completed ? 'bg-green-50' : 'bg-gray-50'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      item.completed ? 'bg-green-600' : 'bg-gray-300'
                    }`}>
                      {item.completed && <CheckCircle className="w-4 h-4 text-white" />}
                    </div>
                    <span className={`text-sm ${item.completed ? 'text-gray-900' : 'text-gray-600'}`}>
                      {item.item}
                    </span>
                  </div>
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
                <CardTitle>Supporting Documents</CardTitle>
                <Button size="sm">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Document
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockSubmission.documents.map((doc) => (
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
                          <span>v{doc.version}</span>
                          <span>•</span>
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

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Activity Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockSubmission.timeline.map((item, index) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-[#8B1538]/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-[#8B1538]" />
                      </div>
                      {index < mockSubmission.timeline.length - 1 && (
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
              {mockSubmission.comments.map((comment) => (
                <div key={comment.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 bg-[#8B1538]/10 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-[#8B1538]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{comment.author}</p>
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
      </Tabs>
    </div>
  )
}

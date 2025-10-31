"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  User,
  FileText,
  Calendar,
  Users,
  MessageSquare,
  Activity,
  Settings
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const mockStakeholder = {
  id: 1,
  name: 'Ministry of Education',
  code: 'MOE',
  type: 'Government MDA',
  status: 'active',
  tier: 'Primary',
  relationship: 'Frequent Client',
  contact: {
    primaryName: 'Hon. Commissioner Ahmed Ibrahim',
    primaryEmail: 'commissioner@moe.kano.gov.ng',
    primaryPhone: '+234 803 456 7890',
    alternativeName: 'Permanent Secretary - Dr. Fatima Bello',
    alternativeEmail: 'permsec@moe.kano.gov.ng',
    alternativePhone: '+234 806 789 0123'
  },
  address: 'Ministry of Education Complex, Kofar Mata, Kano',
  description: 'State Ministry responsible for education policy, school administration, and educational development',
  engagement: {
    dateAdded: '2023-01-15',
    lastInteraction: '2025-10-28',
    totalInteractions: 87,
    activeRequests: 5,
    completedRequests: 82
  },
  activeRequests: [
    {
      id: 1,
      requestNo: 'LAR-20251028-001',
      title: 'Contract Review - School Construction Project',
      type: 'Legal Advisory',
      status: 'in-progress',
      dateRequested: '2025-10-28',
      assignedTo: 'Barr. Fatima Ibrahim'
    },
    {
      id: 2,
      requestNo: 'LAR-20251024-005',
      title: 'MOU Review - Teacher Training Partnership',
      type: 'Legal Advisory',
      status: 'pending',
      dateRequested: '2025-10-24',
      assignedTo: 'Barr. Yusuf Ali'
    },
    {
      id: 3,
      requestNo: 'LEGIS-20251020-003',
      title: 'Amendment to Education Policy Bill',
      type: 'Legislative Support',
      status: 'in-review',
      dateRequested: '2025-10-20',
      assignedTo: 'Legislative Team'
    }
  ],
  recentInteractions: [
    {
      id: 1,
      date: '2025-10-28',
      type: 'Advisory Request',
      description: 'Submitted request for contract review',
      reference: 'LAR-20251028-001',
      officer: 'Barr. Fatima Ibrahim'
    },
    {
      id: 2,
      date: '2025-10-25',
      type: 'Meeting',
      description: 'Consultation on education policy amendments',
      reference: 'LEGIS-20251020-003',
      officer: 'Legislative Team'
    },
    {
      id: 3,
      date: '2025-10-20',
      type: 'Advisory Request',
      description: 'Requested legislative drafting support',
      reference: 'LEGIS-20251020-003',
      officer: 'Barr. Ibrahim Bello'
    },
    {
      id: 4,
      date: '2025-10-15',
      type: 'Document Submission',
      description: 'Provided supporting documents for ongoing advisory',
      reference: 'LAR-20251010-008',
      officer: 'Legal Records'
    }
  ],
  documents: [
    {
      id: 1,
      name: 'MOE Service Agreement 2024',
      type: 'Agreement',
      date: '2024-01-10',
      size: '450 KB'
    },
    {
      id: 2,
      name: 'Communication Protocol',
      type: 'Policy',
      date: '2023-06-15',
      size: '125 KB'
    },
    {
      id: 3,
      name: 'Contact Directory',
      type: 'Reference',
      date: '2025-09-01',
      size: '85 KB'
    }
  ],
  statistics: {
    advisoryRequests: 65,
    litigationCases: 8,
    legislativeDrafting: 14,
    avgResponseTime: 5.2, // days
    satisfactionRating: 4.6 // out of 5
  },
  notes: [
    {
      id: 1,
      date: '2025-10-15',
      author: 'Barr. Fatima Ibrahim',
      note: 'Ministry has multiple ongoing construction projects requiring legal review. Consider assigning dedicated liaison officer.'
    },
    {
      id: 2,
      date: '2025-09-20',
      author: 'Director - Legal Advisory',
      note: 'High-priority stakeholder. Ensure response times meet SLA requirements.'
    }
  ]
}

interface StakeholderDetailProps {
  id: string
}

export function StakeholderDetail({ id }: StakeholderDetailProps) {
  const router = useRouter()

  const handleEdit = () => {
    router.push(`/stakeholders/new?id=${id}`)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/stakeholders">
            <Button variant="outline" size="sm">← Back</Button>
          </Link>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-3xl font-bold text-gray-900">{mockStakeholder.name}</h1>
              <Badge variant="outline">{mockStakeholder.code}</Badge>
              <Badge variant="success">{mockStakeholder.status}</Badge>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <span>{mockStakeholder.type}</span>
              <span>•</span>
              <span>{mockStakeholder.tier} Stakeholder</span>
              <span>•</span>
              <span>{mockStakeholder.relationship}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/communications">
            <Button variant="outline">
              <MessageSquare className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </Link>
          <Button variant="outline" onClick={handleEdit}>
            <Settings className="w-4 h-4 mr-2" />
            Edit Details
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Requests</p>
                <p className="text-2xl font-bold text-gray-900">
                  {mockStakeholder.engagement.totalInteractions}
                </p>
              </div>
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Requests</p>
                <p className="text-2xl font-bold text-[#8B1538]">
                  {mockStakeholder.engagement.activeRequests}
                </p>
              </div>
              <Activity className="w-8 h-8 text-[#8B1538]" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-green-600">
                  {mockStakeholder.engagement.completedRequests}
                </p>
              </div>
              <FileText className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Response</p>
                <p className="text-2xl font-bold text-blue-600">
                  {mockStakeholder.statistics.avgResponseTime}
                </p>
                <p className="text-xs text-gray-500">days</p>
              </div>
              <Activity className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Satisfaction</p>
                <p className="text-2xl font-bold text-[#E67E22]">
                  {mockStakeholder.statistics.satisfactionRating}
                </p>
                <p className="text-xs text-gray-500">out of 5</p>
              </div>
              <Activity className="w-8 h-8 text-[#E67E22]" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="requests">Active Requests</TabsTrigger>
          <TabsTrigger value="correspondence">Correspondence</TabsTrigger>
          <TabsTrigger value="history">Interaction History</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="notes">Internal Notes</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-3">Primary Contact</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="w-4 h-4" />
                      <span>Name</span>
                    </div>
                    <p className="font-medium text-gray-900">{mockStakeholder.contact.primaryName}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </div>
                    <p className="font-medium text-gray-900">{mockStakeholder.contact.primaryEmail}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>Phone</span>
                    </div>
                    <p className="font-medium text-gray-900">{mockStakeholder.contact.primaryPhone}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm font-medium text-gray-700 mb-3">Alternative Contact</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="w-4 h-4" />
                      <span>Name</span>
                    </div>
                    <p className="font-medium text-gray-900">{mockStakeholder.contact.alternativeName}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </div>
                    <p className="font-medium text-gray-900">{mockStakeholder.contact.alternativeEmail}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>Phone</span>
                    </div>
                    <p className="font-medium text-gray-900">{mockStakeholder.contact.alternativePhone}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gray-600 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Address</p>
                    <p className="font-medium text-gray-900">{mockStakeholder.address}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stakeholder Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Organization Type</p>
                  <p className="font-medium text-gray-900">{mockStakeholder.type}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Stakeholder Tier</p>
                  <p className="font-medium text-gray-900">{mockStakeholder.tier}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Relationship Status</p>
                  <p className="font-medium text-gray-900">{mockStakeholder.relationship}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Date Added</p>
                  <p className="font-medium text-gray-900">
                    {new Date(mockStakeholder.engagement.dateAdded).toLocaleDateString('en-NG', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600 mb-2">Description</p>
                <p className="text-gray-900">{mockStakeholder.description}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-600 mb-2">Advisory Requests</p>
                  <p className="text-3xl font-bold text-blue-900">{mockStakeholder.statistics.advisoryRequests}</p>
                </div>
                <div className="text-center p-4 bg-[#8B1538]/10 rounded-lg">
                  <p className="text-sm text-[#8B1538] mb-2">Litigation Cases</p>
                  <p className="text-3xl font-bold text-[#8B1538]">{mockStakeholder.statistics.litigationCases}</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-600 mb-2">Legislative Drafting</p>
                  <p className="text-3xl font-bold text-green-900">{mockStakeholder.statistics.legislativeDrafting}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Active Requests Tab */}
        <TabsContent value="requests" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockStakeholder.activeRequests.map((request) => (
                  <div
                    key={request.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#8B1538] transition-all"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <p className="font-semibold text-gray-900">{request.requestNo}</p>
                        <Badge variant="outline">{request.type}</Badge>
                        <Badge
                          variant={
                            request.status === 'in-progress'
                              ? 'default'
                              : request.status === 'completed'
                              ? 'success'
                              : 'secondary'
                          }
                        >
                          {request.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{request.title}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>Requested: {new Date(request.dateRequested).toLocaleDateString('en-NG')}</span>
                        <span>•</span>
                        <span>Assigned to: {request.assignedTo}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Correspondence Tab */}
        <TabsContent value="correspondence" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Message History</CardTitle>
                <Link href="/communications">
                  <Button size="sm">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Send New Message
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    id: 1,
                    subject: 'Contract Review Request - School Construction',
                    date: '2025-10-28',
                    from: 'Ministry of Education',
                    to: 'Barr. Fatima Ibrahim',
                    status: 'replied',
                    lastMessage: 'Thank you for the prompt review. We will proceed with your recommendations.',
                  },
                  {
                    id: 2,
                    subject: 'MOU Review Follow-up',
                    date: '2025-10-24',
                    from: 'Barr. Yusuf Ali',
                    to: 'Ministry of Education',
                    status: 'sent',
                    lastMessage: 'Please find attached the reviewed MOU with our comments.',
                  },
                  {
                    id: 3,
                    subject: 'Education Policy Amendment Consultation',
                    date: '2025-10-20',
                    from: 'Ministry of Education',
                    to: 'Legislative Team',
                    status: 'replied',
                    lastMessage: 'We appreciate the detailed consultation. The amendments are now under review.',
                  },
                ].map((message, index) => {
                  const bgColors = ['bg-blue-50', 'bg-green-50', 'bg-purple-50', 'bg-red-50']
                  const borderColors = ['border-blue-500', 'border-green-500', 'border-purple-500', 'border-red-500']
                  const iconColors = ['text-blue-600', 'text-green-600', 'text-purple-600', 'text-red-600']
                  const colorIndex = index % 4

                  return (
                    <div
                      key={message.id}
                      className={`flex items-start gap-3 p-4 border-l-4 ${borderColors[colorIndex]} ${bgColors[colorIndex]} rounded cursor-pointer hover:shadow-sm transition-all`}
                    >
                      <MessageSquare className={`w-5 h-5 ${iconColors[colorIndex]} mt-0.5`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{message.subject}</h4>
                          <Badge
                            className={message.status === 'replied' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}
                          >
                            {message.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{message.lastMessage}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>From: {message.from}</span>
                          <span>•</span>
                          <span>To: {message.to}</span>
                          <span>•</span>
                          <span>{new Date(message.date).toLocaleDateString('en-NG')}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Interaction History Tab */}
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Interactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockStakeholder.recentInteractions.map((interaction, index) => (
                  <div key={interaction.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-[#8B1538]/10 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-[#8B1538]" />
                      </div>
                      {index < mockStakeholder.recentInteractions.length - 1 && (
                        <div className="w-0.5 h-12 bg-gray-200 my-1" />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-gray-900">{interaction.type}</p>
                        <Badge variant="outline" className="text-xs">{interaction.reference}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{interaction.description}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span>{new Date(interaction.date).toLocaleDateString('en-NG')}</span>
                        <span>•</span>
                        <span>{interaction.officer}</span>
                      </div>
                    </div>
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
              <CardTitle>Shared Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockStakeholder.documents.map((doc) => (
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
                          <span>{new Date(doc.date).toLocaleDateString('en-NG')}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Internal Notes Tab */}
        <TabsContent value="notes" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Internal Notes</CardTitle>
                <Button size="sm">Add Note</Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockStakeholder.notes.map((note) => (
                <div key={note.id} className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-yellow-700" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-gray-900">{note.author}</p>
                        <span className="text-xs text-gray-500">
                          {new Date(note.date).toLocaleDateString('en-NG')}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-900 ml-13">{note.note}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

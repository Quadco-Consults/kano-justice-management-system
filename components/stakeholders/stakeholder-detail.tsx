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
  Settings,
  Plus,
  AlertCircle,
  CheckCircle2,
  Clock
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
    completedRequests: 82,
    totalCorrespondences: 24
  },
  correspondences: [
    {
      id: 'CORR-2025-001',
      title: 'School Construction Contract Review',
      status: 'active',
      priority: 'high',
      createdDate: '2025-10-20',
      lastActivity: '2025-10-30',
      requestsCount: 3,
      documentsCount: 12,
      commentsCount: 8,
      participants: ['Barr. Fatima Ibrahim', 'Hon. Commissioner', 'Legal Advisory Team']
    },
    {
      id: 'CORR-2025-002',
      title: 'Teacher Training Partnership MOU',
      status: 'active',
      priority: 'medium',
      createdDate: '2025-10-15',
      lastActivity: '2025-10-29',
      requestsCount: 2,
      documentsCount: 8,
      commentsCount: 5,
      participants: ['Barr. Yusuf Ali', 'Permanent Secretary']
    },
    {
      id: 'CORR-2025-003',
      title: 'Education Policy Bill Amendment',
      status: 'pending-approval',
      priority: 'high',
      createdDate: '2025-10-10',
      lastActivity: '2025-10-28',
      requestsCount: 5,
      documentsCount: 15,
      commentsCount: 12,
      participants: ['Legislative Team', 'Director Legal', 'Commissioner']
    },
    {
      id: 'CORR-2025-004',
      title: 'School Facilities Legal Compliance',
      status: 'completed',
      priority: 'medium',
      createdDate: '2025-09-25',
      lastActivity: '2025-10-15',
      requestsCount: 2,
      documentsCount: 6,
      commentsCount: 4,
      participants: ['Barr. Ibrahim Bello', 'MOE Legal Officer']
    },
    {
      id: 'CORR-2024-045',
      title: 'Annual Service Agreement Review',
      status: 'completed',
      priority: 'low',
      createdDate: '2024-12-01',
      lastActivity: '2025-01-15',
      requestsCount: 1,
      documentsCount: 3,
      commentsCount: 2,
      participants: ['Director Legal Advisory', 'Permanent Secretary']
    }
  ],
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
                <p className="text-2xl font-bold text-[#006403]">
                  {mockStakeholder.engagement.activeRequests}
                </p>
              </div>
              <Activity className="w-8 h-8 text-[#006403]" />
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
                <div className="text-center p-4 bg-[#006403]/10 rounded-lg">
                  <p className="text-sm text-[#006403] mb-2">Litigation Cases</p>
                  <p className="text-3xl font-bold text-[#006403]">{mockStakeholder.statistics.litigationCases}</p>
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
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#006403] transition-all"
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
                <CardTitle>All Correspondences</CardTitle>
                <Link href={`/correspondences/new?stakeholder=${id}`}>
                  <Button size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    New Correspondence
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockStakeholder.correspondences.map((correspondence) => (
                  <Link key={correspondence.id} href={`/correspondences/${correspondence.id}`}>
                    <div className="p-4 border border-gray-200 rounded-lg hover:border-[#006403] hover:shadow-sm transition-all cursor-pointer">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-gray-900">{correspondence.title}</h4>
                            <Badge variant="outline" className="text-xs">{correspondence.id}</Badge>
                            <Badge
                              variant={
                                correspondence.status === 'active'
                                  ? 'default'
                                  : correspondence.status === 'pending-approval'
                                  ? 'secondary'
                                  : 'success'
                              }
                            >
                              {correspondence.status}
                            </Badge>
                            <Badge
                              className={
                                correspondence.priority === 'high'
                                  ? 'bg-red-100 text-red-800'
                                  : correspondence.priority === 'medium'
                                  ? 'bg-orange-100 text-orange-800'
                                  : 'bg-gray-100 text-gray-800'
                              }
                            >
                              {correspondence.priority}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-3 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          <span>{correspondence.requestsCount} requests</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          <span>{correspondence.documentsCount} documents</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MessageSquare className="w-4 h-4" />
                          <span>{correspondence.commentsCount} comments</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-3">
                          <span>Created: {new Date(correspondence.createdDate).toLocaleDateString('en-NG')}</span>
                          <span>•</span>
                          <span>Last activity: {new Date(correspondence.lastActivity).toLocaleDateString('en-NG')}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-600">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span>{correspondence.participants.join(', ')}</span>
                      </div>
                    </div>
                  </Link>
                ))}
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
                      <div className="w-10 h-10 bg-[#006403]/10 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-[#006403]" />
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
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#006403] transition-all"
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

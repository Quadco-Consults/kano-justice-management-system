"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Download,
  Edit,
  Share2,
  Eye,
  Calendar,
  User,
  Building2,
  Clock,
  Globe,
  Printer,
  Mail,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface NoticeDetailProps {
  id: string
}

export function NoticeDetail({ id }: NoticeDetailProps) {
  const router = useRouter()

  const handleEdit = () => {
    router.push(`/public-notices/new?id=${id}`)
  }

  // Mock data - replace with actual API call
  const notice = {
    id: 1,
    noticeNo: 'PN/2025/001',
    title: 'Public Notice on Proposed Amendment to Kano State Land Use Act',
    category: 'Legislative Notice',
    publishDate: '2025-10-25',
    expiryDate: '2025-11-25',
    status: 'published',
    views: 1247,
    downloads: 89,
    publishedBy: 'Barr. Fatima Ibrahim',
    publishedByEmail: 'fatima.ibrahim@justice.kano.gov.ng',
    approvedBy: 'Attorney General',
    approvalDate: '2025-10-24',
    summary: 'Notice of public hearing on proposed amendments to the Kano State Land Use Act 2024. All stakeholders are invited to submit comments.',
    content: `
      <h2>Background</h2>
      <p>The Kano State Ministry of Justice is pleased to announce a public hearing on proposed amendments to the Kano State Land Use Act 2024. This initiative is part of our ongoing commitment to ensure that land administration in Kano State is transparent, efficient, and serves the best interests of all citizens.</p>

      <h2>Proposed Amendments</h2>
      <p>The key amendments under consideration include:</p>
      <ul>
        <li>Streamlining of land allocation procedures</li>
        <li>Enhanced protection for customary land rights</li>
        <li>Digital transformation of land registration processes</li>
        <li>Clearer dispute resolution mechanisms</li>
        <li>Environmental sustainability requirements</li>
      </ul>

      <h2>Public Hearing Details</h2>
      <p><strong>Date:</strong> November 15, 2025</p>
      <p><strong>Time:</strong> 10:00 AM - 4:00 PM</p>
      <p><strong>Venue:</strong> Kano State Ministry of Justice, Conference Hall A</p>

      <h2>How to Participate</h2>
      <p>Stakeholders and members of the public are invited to:</p>
      <ol>
        <li>Attend the public hearing in person</li>
        <li>Submit written comments via email to landuse@justice.kano.gov.ng</li>
        <li>Complete the online feedback form available on our website</li>
      </ol>

      <h2>Submission Deadline</h2>
      <p>All written submissions must be received by <strong>November 25, 2025</strong></p>

      <h2>Contact Information</h2>
      <p>For inquiries, please contact:</p>
      <p>Land Administration Unit<br/>
      Ministry of Justice, Kano State<br/>
      Email: landuse@justice.kano.gov.ng<br/>
      Phone: +234 64 123 4567</p>
    `,
    attachments: [
      {
        id: 1,
        name: 'Proposed Amendments - Full Text.pdf',
        size: '2.4 MB',
        uploadDate: '2025-10-25',
        downloads: 89,
      },
      {
        id: 2,
        name: 'Public Feedback Form.pdf',
        size: '156 KB',
        uploadDate: '2025-10-25',
        downloads: 67,
      },
      {
        id: 3,
        name: 'Current Land Use Act 2024.pdf',
        size: '1.8 MB',
        uploadDate: '2025-10-25',
        downloads: 45,
      },
    ],
    activityLog: [
      {
        action: 'Published',
        user: 'Barr. Fatima Ibrahim',
        timestamp: '2025-10-25 10:00 AM',
        details: 'Notice published to public portal',
      },
      {
        action: 'Approved',
        user: 'Attorney General',
        timestamp: '2025-10-24 04:30 PM',
        details: 'Notice approved for publication',
      },
      {
        action: 'Reviewed',
        user: 'Director - Legal Services',
        timestamp: '2025-10-23 02:15 PM',
        details: 'Content reviewed and minor edits suggested',
      },
      {
        action: 'Draft Created',
        user: 'Barr. Fatima Ibrahim',
        timestamp: '2025-10-20 09:00 AM',
        details: 'Initial draft created',
      },
    ],
    relatedNotices: [
      {
        id: 2,
        noticeNo: 'PN/2024/087',
        title: 'Previous Land Use Act Amendment - 2024',
        publishDate: '2024-03-15',
      },
      {
        id: 3,
        noticeNo: 'PN/2025/002',
        title: 'Call for Public Comments - Criminal Justice Reform Bill',
        publishDate: '2025-10-28',
      },
    ],
    publicComments: [
      {
        id: 1,
        name: 'Dr. Aminu Hassan',
        organization: 'Kano State Bar Association',
        date: '2025-10-28',
        comment: 'We commend the Ministry for these progressive amendments. Our association will be submitting detailed recommendations by the deadline.',
      },
      {
        id: 2,
        name: 'Hajiya Aisha Yusuf',
        organization: 'Traditional Land Owners Forum',
        date: '2025-10-27',
        comment: 'We appreciate the consideration for customary land rights. We request additional clarification on the dispute resolution mechanism.',
      },
    ],
  }

  const daysUntilExpiry = notice.expiryDate
    ? Math.ceil((new Date(notice.expiryDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    : null

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/public-notices">
            <Button variant="outline" size="sm">← Back</Button>
          </Link>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-3xl font-bold text-gray-900">{notice.noticeNo}</h1>
              <Badge
                className={
                  notice.status === 'published'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }
              >
                {notice.status}
              </Badge>
              <Badge variant="outline">{notice.category}</Badge>
            </div>
            <h2 className="text-xl text-gray-700">{notice.title}</h2>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handleEdit}>
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </Button>
          <Button variant="outline">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button variant="outline">
            <Printer className="w-4 h-4 mr-2" />
            Print
          </Button>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Views</p>
                <p className="text-2xl font-bold text-blue-600">{notice.views}</p>
              </div>
              <Eye className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Downloads</p>
                <p className="text-2xl font-bold text-green-600">{notice.downloads}</p>
              </div>
              <Download className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Public Comments</p>
                <p className="text-2xl font-bold text-[#8B1538]">{notice.publicComments.length}</p>
              </div>
              <Mail className="w-8 h-8 text-[#8B1538]" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">
                  {daysUntilExpiry && daysUntilExpiry > 0 ? 'Days Remaining' : 'Status'}
                </p>
                <p className={`text-2xl font-bold ${daysUntilExpiry && daysUntilExpiry <= 7 ? 'text-red-600' : 'text-gray-900'}`}>
                  {daysUntilExpiry && daysUntilExpiry > 0 ? daysUntilExpiry : 'Active'}
                </p>
              </div>
              <Clock className={`w-8 h-8 ${daysUntilExpiry && daysUntilExpiry <= 7 ? 'text-red-400' : 'text-gray-400'}`} />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Notice Content */}
          <Card>
            <CardHeader>
              <CardTitle>Notice Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-900 mb-4">{notice.summary}</p>
            </CardContent>
          </Card>

          <Tabs defaultValue="content" className="space-y-6">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="content">Full Content</TabsTrigger>
              <TabsTrigger value="attachments">Attachments</TabsTrigger>
              <TabsTrigger value="comments">Public Comments</TabsTrigger>
              <TabsTrigger value="activity">Activity Log</TabsTrigger>
            </TabsList>

            {/* Full Content Tab */}
            <TabsContent value="content">
              <Card>
                <CardHeader>
                  <CardTitle>Full Notice Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className="prose max-w-none text-gray-900"
                    dangerouslySetInnerHTML={{ __html: notice.content }}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* Attachments Tab */}
            <TabsContent value="attachments">
              <Card>
                <CardHeader>
                  <CardTitle>Attachments & Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {notice.attachments.map((attachment) => (
                      <div
                        key={attachment.id}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#8B1538] transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <FileText className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{attachment.name}</p>
                            <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                              <span>{attachment.size}</span>
                              <span>•</span>
                              <span>{attachment.downloads} downloads</span>
                              <span>•</span>
                              <span>{new Date(attachment.uploadDate).toLocaleDateString('en-NG')}</span>
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

            {/* Public Comments Tab */}
            <TabsContent value="comments">
              <Card>
                <CardHeader>
                  <CardTitle>Public Comments & Feedback</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {notice.publicComments.map((comment, index) => {
                    const bgColors = ['bg-blue-50', 'bg-green-50', 'bg-purple-50', 'bg-red-50']
                    const borderColors = ['border-blue-500', 'border-green-500', 'border-purple-500', 'border-red-500']
                    const iconColors = ['text-blue-600', 'text-green-600', 'text-purple-600', 'text-red-600']
                    const colorIndex = index % 4

                    return (
                      <div key={comment.id} className={`p-4 border-l-4 ${borderColors[colorIndex]} ${bgColors[colorIndex]} rounded`}>
                        <div className="flex items-start gap-3 mb-3">
                          <User className={`w-5 h-5 ${iconColors[colorIndex]} mt-0.5`} />
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900">{comment.name}</p>
                            <p className="text-sm text-gray-600">{comment.organization}</p>
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(comment.date).toLocaleDateString('en-NG')}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-900 ml-8">{comment.comment}</p>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Activity Log Tab */}
            <TabsContent value="activity">
              <Card>
                <CardHeader>
                  <CardTitle>Activity Log</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {notice.activityLog.map((activity, index) => {
                      const bgColors = ['bg-blue-50', 'bg-green-50', 'bg-purple-50', 'bg-red-50']
                      const borderColors = ['border-blue-500', 'border-green-500', 'border-purple-500', 'border-red-500']
                      const iconColors = ['text-blue-600', 'text-green-600', 'text-purple-600', 'text-red-600']
                      const colorIndex = index % 4

                      return (
                        <div key={index} className={`flex items-start gap-3 p-3 border-l-4 ${borderColors[colorIndex]} ${bgColors[colorIndex]} rounded`}>
                          <Clock className={`w-5 h-5 ${iconColors[colorIndex]} mt-0.5`} />
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{activity.action}</p>
                            <p className="text-sm text-gray-600 mt-1">{activity.details}</p>
                            <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                              <span>{activity.timestamp}</span>
                              <span>•</span>
                              <span>{activity.user}</span>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Related Notices */}
          {notice.relatedNotices.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Related Notices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {notice.relatedNotices.map((related) => (
                    <Link key={related.id} href={`/public-notices/${related.id}`}>
                      <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-[#8B1538] transition-colors">
                        <div className="flex items-center gap-3">
                          <Globe className="w-5 h-5 text-[#8B1538]" />
                          <div>
                            <p className="font-medium text-gray-900">{related.noticeNo}</p>
                            <p className="text-sm text-gray-600">{related.title}</p>
                          </div>
                        </div>
                        <span className="text-xs text-gray-500">
                          {new Date(related.publishDate).toLocaleDateString('en-NG')}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Notice Metadata */}
          <Card>
            <CardHeader>
              <CardTitle>Publication Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Published Date</p>
                  <p className="font-medium text-gray-900">
                    {new Date(notice.publishDate).toLocaleDateString('en-NG')}
                  </p>
                </div>
              </div>

              {notice.expiryDate && (
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Expiry Date</p>
                    <p className="font-medium text-gray-900">
                      {new Date(notice.expiryDate).toLocaleDateString('en-NG')}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Published By</p>
                  <p className="font-medium text-gray-900">{notice.publishedBy}</p>
                  <p className="text-xs text-gray-500">{notice.publishedByEmail}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Approved By</p>
                  <p className="font-medium text-gray-900">{notice.approvedBy}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(notice.approvalDate).toLocaleDateString('en-NG')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Public Access */}
          <Card>
            <CardHeader>
              <CardTitle>Public Access</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Globe className="w-4 h-4 mr-2" />
                View Public Portal
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Share2 className="w-4 h-4 mr-2" />
                Share Notice
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Mail className="w-4 h-4 mr-2" />
                Email to Stakeholders
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

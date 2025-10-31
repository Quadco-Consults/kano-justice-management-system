"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Download,
  Edit,
  Share2,
  Lock,
  Unlock,
  Eye,
  Clock,
  Search,
  UserCheck,
  Link as LinkIcon,
  Shield,
  History,
  Calendar,
  User,
  Building2,
  Upload,
  Plus,
  X,
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

interface DocumentDetailProps {
  id: string
}

export function DocumentDetail({ id }: DocumentDetailProps) {
  const [isAccessRequestDialogOpen, setIsAccessRequestDialogOpen] = useState(false)
  const [isSecurityDialogOpen, setIsSecurityDialogOpen] = useState(false)
  const [isVersionUploadDialogOpen, setIsVersionUploadDialogOpen] = useState(false)
  const [accessReason, setAccessReason] = useState("")
  const [newSecurityLevel, setNewSecurityLevel] = useState("")
  const [securityChangeReason, setSecurityChangeReason] = useState("")
  const [versionFile, setVersionFile] = useState<File | null>(null)
  const [versionChanges, setVersionChanges] = useState("")
  const router = useRouter()

  const handleEdit = () => {
    router.push(`/legal-records/upload?id=${id}`)
  }

  const handleAccessRequest = () => {
    console.log('Requesting access:', accessReason)
    setIsAccessRequestDialogOpen(false)
    // Add API call
  }

  const handleSecurityChange = () => {
    console.log('Changing security level to:', newSecurityLevel, 'Reason:', securityChangeReason)
    setIsSecurityDialogOpen(false)
    setNewSecurityLevel("")
    setSecurityChangeReason("")
    // Add API call to update security level
  }

  const handleDownload = () => {
    console.log('Downloading document:', document.documentNo)
    // Add actual download logic
  }

  const handleVersionFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVersionFile(e.target.files[0])
    }
  }

  const handleVersionUpload = () => {
    console.log('Uploading new version:', {
      file: versionFile?.name,
      changes: versionChanges,
    })
    setIsVersionUploadDialogOpen(false)
    setVersionFile(null)
    setVersionChanges("")
    // Add API call to upload new version
  }

  // Mock data - replace with actual API call
  const document = {
    id: 1,
    documentNo: 'DOC/2025/0347',
    title: 'Legal Opinion - Land Acquisition Framework Review',
    category: 'Legal Opinions',
    description: 'Comprehensive legal opinion on the proposed amendments to the Kano State Land Acquisition Framework. This document provides detailed analysis of the legal implications, constitutional considerations, and recommendations for implementation.',
    author: 'Barr. Fatima Ibrahim',
    uploadedBy: 'Barr. Fatima Ibrahim',
    uploadDate: '2025-10-25',
    lastModified: '2025-10-26',
    fileSize: '2.4 MB',
    fileType: 'PDF',
    fileUrl: '/documents/legal-opinion-land-acquisition.pdf',
    version: '1.2',
    securityLevel: 'Confidential',
    tags: ['Land Law', 'Property', 'Policy Review', 'Constitutional Law'],
    relatedCases: [
      { caseNo: 'CR/45/2025', title: 'State v. Ahmad Musa', link: '/prosecution/1' },
      { caseNo: 'CR/48/2025', title: 'State v. Hauwa Sani', link: '/prosecution/4' },
    ],
    source: {
      type: 'Internal Opinion',
      court: 'N/A',
      caseNumber: 'N/A',
      date: '2025-10-25',
    },
    activityLog: [
      {
        action: 'Downloaded',
        user: 'Barr. Maryam Usman',
        timestamp: '2025-10-31 09:15 AM',
        details: 'Document downloaded',
      },
      {
        action: 'Viewed',
        user: 'Barr. Ibrahim Sani',
        timestamp: '2025-10-30 03:45 PM',
        details: 'Document opened for review',
      },
      {
        action: 'Edited',
        user: 'Barr. Fatima Ibrahim',
        timestamp: '2025-10-26 11:30 AM',
        details: 'Updated version to 1.2',
      },
      {
        action: 'Uploaded',
        user: 'Barr. Fatima Ibrahim',
        timestamp: '2025-10-25 02:00 PM',
        details: 'Initial document upload',
      },
    ],
    searchHistory: [
      {
        user: 'Barr. Ahmad Bello',
        query: 'land acquisition framework',
        timestamp: '2025-10-30 10:20 AM',
      },
      {
        user: 'Barr. Halima Mohammed',
        query: 'property law kano',
        timestamp: '2025-10-29 02:15 PM',
      },
      {
        user: 'Barr. Maryam Usman',
        query: 'land acquisition',
        timestamp: '2025-10-28 04:30 PM',
      },
    ],
    accessRequests: [
      {
        id: 1,
        user: 'Barr. Amina Hassan',
        reason: 'Required for ongoing case preparation CR/52/2025',
        status: 'pending',
        timestamp: '2025-10-30 11:00 AM',
      },
      {
        id: 2,
        user: 'Barr. Yusuf Ali',
        reason: 'Research for legal advisory request LAR-20251028-003',
        status: 'approved',
        timestamp: '2025-10-28 09:30 AM',
        approvedBy: 'Barr. Fatima Ibrahim',
        approvedDate: '2025-10-28 10:15 AM',
      },
    ],
    versions: [
      {
        version: '1.2',
        date: '2025-10-26',
        uploadedBy: 'Barr. Fatima Ibrahim',
        changes: 'Updated recommendations section',
        size: '2.4 MB',
      },
      {
        version: '1.1',
        date: '2025-10-25',
        uploadedBy: 'Barr. Fatima Ibrahim',
        changes: 'Added constitutional analysis',
        size: '2.3 MB',
      },
      {
        version: '1.0',
        date: '2025-10-25',
        uploadedBy: 'Barr. Fatima Ibrahim',
        changes: 'Initial upload',
        size: '2.1 MB',
      },
    ],
  }

  const getSecurityBadgeColor = (level: string) => {
    switch (level) {
      case 'Public': return 'bg-green-100 text-green-800 border-green-300'
      case 'Confidential': return 'bg-yellow-100 text-yellow-800 border-yellow-300'
      case 'Restricted': return 'bg-orange-100 text-orange-800 border-orange-300'
      case 'Top Secret': return 'bg-red-100 text-red-800 border-red-300'
      default: return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-gray-900">{document.documentNo}</h1>
            <Badge className={`${getSecurityBadgeColor(document.securityLevel)} border`}>
              <Shield className="w-3 h-3 mr-1" />
              {document.securityLevel}
            </Badge>
          </div>
          <p className="text-xl text-gray-700 mb-2">{document.title}</p>
          <div className="flex items-center gap-2 flex-wrap">
            {document.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
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
          <Button onClick={handleDownload}>
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Document File/Preview */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Document File
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{document.fileType}</Badge>
                  <Badge variant="outline">{document.fileSize}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* PDF Preview/Viewer */}
              <div className="border border-gray-300 rounded-lg bg-gray-50 p-8 text-center">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-900 mb-2">{document.title}</p>
                <p className="text-sm text-gray-600 mb-4">
                  {document.fileType} Document • {document.fileSize}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <Button onClick={handleDownload}>
                    <Download className="w-4 h-4 mr-2" />
                    Download Document
                  </Button>
                  <Button variant="outline">
                    <Eye className="w-4 h-4 mr-2" />
                    Open in Viewer
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  File path: {document.fileUrl}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Document Details */}
          <Card>
            <CardHeader>
              <CardTitle>Document Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-2">Description</h3>
                <p className="text-gray-900">{document.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div>
                  <p className="text-sm text-gray-600">Category</p>
                  <p className="font-medium text-gray-900">{document.category}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Version</p>
                  <p className="font-medium text-gray-900">{document.version}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">File Type</p>
                  <p className="font-medium text-gray-900">{document.fileType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">File Size</p>
                  <p className="font-medium text-gray-900">{document.fileSize}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Source Information */}
          <Card>
            <CardHeader>
              <CardTitle>Source Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Source Type</p>
                  <p className="font-medium text-gray-900">{document.source.type}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Date</p>
                  <p className="font-medium text-gray-900">
                    {new Date(document.source.date).toLocaleDateString('en-NG')}
                  </p>
                </div>
                {document.source.court !== 'N/A' && (
                  <>
                    <div>
                      <p className="text-sm text-gray-600">Court</p>
                      <p className="font-medium text-gray-900">{document.source.court}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Case Number</p>
                      <p className="font-medium text-gray-900">{document.source.caseNumber}</p>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Related Cases */}
          {document.relatedCases.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LinkIcon className="w-5 h-5" />
                  Related Cases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {document.relatedCases.map((caseItem, index) => (
                    <a
                      key={index}
                      href={caseItem.link}
                      className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-[#006403] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-[#006403]" />
                        <div>
                          <p className="font-medium text-gray-900">{caseItem.caseNo}</p>
                          <p className="text-sm text-gray-600">{caseItem.title}</p>
                        </div>
                      </div>
                      <LinkIcon className="w-4 h-4 text-gray-400" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Tabbed Content */}
          <Card>
            <CardContent className="pt-6">
              <Tabs defaultValue="activity" className="w-full">
                <TabsList className="w-full grid grid-cols-4">
                  <TabsTrigger value="activity">Activity Log</TabsTrigger>
                  <TabsTrigger value="searches">Search History</TabsTrigger>
                  <TabsTrigger value="requests">Access Requests</TabsTrigger>
                  <TabsTrigger value="versions">Version History</TabsTrigger>
                </TabsList>

                {/* Activity Log Tab */}
                <TabsContent value="activity" className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Activity Log</h3>
                  <div className="space-y-3">
                    {document.activityLog.map((activity, index) => {
                      const bgColors = ['bg-blue-50', 'bg-green-50', 'bg-purple-50', 'bg-red-50']
                      const borderColors = ['border-blue-500', 'border-green-500', 'border-purple-500', 'border-red-500']
                      const iconColors = ['text-blue-600', 'text-green-600', 'text-purple-600', 'text-red-600']
                      const colorIndex = index % 4

                      return (
                        <div key={index} className={`flex items-start gap-3 p-3 border-l-4 ${borderColors[colorIndex]} ${bgColors[colorIndex]} rounded`}>
                          <Clock className={`w-5 h-5 ${iconColors[colorIndex]} mt-0.5`} />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <p className="font-medium text-gray-900">{activity.action}</p>
                              <p className="text-xs text-gray-500">{activity.timestamp}</p>
                            </div>
                            <p className="text-sm text-gray-600 mb-1">{activity.details}</p>
                            <p className="text-xs text-gray-500">By {activity.user}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </TabsContent>

                {/* Search History Tab */}
                <TabsContent value="searches" className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Search History</h3>
                  <p className="text-sm text-gray-600 mb-4">Users who found this document through search</p>
                  <div className="space-y-3">
                    {document.searchHistory.map((search, index) => {
                      const bgColors = ['bg-blue-50', 'bg-green-50', 'bg-purple-50', 'bg-red-50']
                      const borderColors = ['border-blue-500', 'border-green-500', 'border-purple-500', 'border-red-500']
                      const iconColors = ['text-blue-600', 'text-green-600', 'text-purple-600', 'text-red-600']
                      const colorIndex = index % 4

                      return (
                        <div key={index} className={`flex items-start gap-3 p-3 border-l-4 ${borderColors[colorIndex]} ${bgColors[colorIndex]} rounded`}>
                          <Search className={`w-5 h-5 ${iconColors[colorIndex]} mt-0.5`} />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <p className="font-medium text-gray-900">{search.user}</p>
                              <p className="text-xs text-gray-500">{search.timestamp}</p>
                            </div>
                            <p className="text-sm text-gray-600">
                              Searched for: <span className="font-medium text-[#006403]">"{search.query}"</span>
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </TabsContent>

                {/* Access Requests Tab */}
                <TabsContent value="requests" className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Access Requests</h3>
                    <Dialog open={isAccessRequestDialogOpen} onOpenChange={setIsAccessRequestDialogOpen}>
                      <DialogTrigger asChild>
                        <Button size="sm">
                          <UserCheck className="w-4 h-4 mr-2" />
                          Request Access
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Request Document Access</DialogTitle>
                          <DialogDescription>
                            This document requires {document.securityLevel} clearance. Please provide a reason for your access request.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <Label>Reason for Access</Label>
                            <Textarea
                              placeholder="Explain why you need access to this document..."
                              value={accessReason}
                              onChange={(e) => setAccessReason(e.target.value)}
                              rows={5}
                            />
                          </div>
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" onClick={() => setIsAccessRequestDialogOpen(false)}>
                            Cancel
                          </Button>
                          <Button onClick={handleAccessRequest} disabled={!accessReason}>
                            Submit Request
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="space-y-3">
                    {document.accessRequests.map((request, index) => {
                      const bgColors = ['bg-blue-50', 'bg-green-50', 'bg-purple-50', 'bg-red-50']
                      const borderColors = ['border-blue-500', 'border-green-500', 'border-purple-500', 'border-red-500']
                      const iconColors = ['text-blue-600', 'text-green-600', 'text-purple-600', 'text-red-600']
                      const colorIndex = index % 4

                      return (
                        <div key={request.id} className={`p-4 border-l-4 ${borderColors[colorIndex]} ${bgColors[colorIndex]} rounded`}>
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <User className={`w-5 h-5 ${iconColors[colorIndex]}`} />
                              <p className="font-medium text-gray-900">{request.user}</p>
                            </div>
                            <Badge
                              variant={request.status === 'approved' ? 'default' : 'secondary'}
                              className={request.status === 'approved' ? 'bg-green-100 text-green-800' : ''}
                            >
                              {request.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-700 mb-2">{request.reason}</p>
                          <p className="text-xs text-gray-500">{request.timestamp}</p>
                          {request.status === 'approved' && (
                            <p className="text-xs text-gray-500 mt-1">
                              Approved by {request.approvedBy} on {request.approvedDate}
                            </p>
                          )}
                          {request.status === 'pending' && (
                            <div className="flex gap-2 mt-3">
                              <Button size="sm" variant="outline">
                                <UserCheck className="w-4 h-4 mr-2" />
                                Approve
                              </Button>
                              <Button size="sm" variant="outline">
                                Reject
                              </Button>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </TabsContent>

                {/* Version History Tab */}
                <TabsContent value="versions" className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Version History</h3>
                    <Dialog open={isVersionUploadDialogOpen} onOpenChange={setIsVersionUploadDialogOpen}>
                      <DialogTrigger asChild>
                        <Button size="sm">
                          <Upload className="w-4 h-4 mr-2" />
                          Upload New Version
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Upload New Version</DialogTitle>
                          <DialogDescription>
                            Upload a new version of this document with updated changes.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          {/* Current Version Info */}
                          <div className="space-y-2">
                            <Label>Current Version</Label>
                            <div className="p-3 border border-gray-200 rounded-md bg-gray-50">
                              <p className="text-sm font-medium text-gray-900">
                                Version {document.version}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                Last updated on {new Date(document.lastModified).toLocaleDateString('en-NG')}
                              </p>
                            </div>
                          </div>

                          {/* File Upload */}
                          <div className="space-y-2">
                            <Label>Upload New File *</Label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#006403] transition-colors">
                              <input
                                id="version-file"
                                type="file"
                                onChange={handleVersionFileChange}
                                className="hidden"
                                accept=".pdf,.doc,.docx,.txt"
                              />
                              <label htmlFor="version-file" className="cursor-pointer">
                                <Upload className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                                <p className="text-sm text-gray-600 mb-1">
                                  Click to upload document
                                </p>
                                <p className="text-xs text-gray-500">
                                  PDF, DOC, DOCX, TXT (max. 25MB)
                                </p>
                              </label>
                            </div>
                            {versionFile && (
                              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg mt-2">
                                <div className="flex items-center gap-3">
                                  <FileText className="w-5 h-5 text-blue-600" />
                                  <div>
                                    <p className="text-sm font-medium text-gray-900">{versionFile.name}</p>
                                    <p className="text-xs text-gray-500">
                                      {(versionFile.size / (1024 * 1024)).toFixed(2)} MB
                                    </p>
                                  </div>
                                </div>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => setVersionFile(null)}
                                >
                                  <X className="w-4 h-4" />
                                </Button>
                              </div>
                            )}
                          </div>

                          {/* Change Notes */}
                          <div className="space-y-2">
                            <Label>Change Notes *</Label>
                            <Textarea
                              placeholder="Describe what has been changed in this version..."
                              value={versionChanges}
                              onChange={(e) => setVersionChanges(e.target.value)}
                              rows={4}
                            />
                          </div>
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            onClick={() => {
                              setIsVersionUploadDialogOpen(false)
                              setVersionFile(null)
                              setVersionChanges("")
                            }}
                          >
                            Cancel
                          </Button>
                          <Button
                            onClick={handleVersionUpload}
                            disabled={!versionFile || !versionChanges}
                          >
                            <Upload className="w-4 h-4 mr-2" />
                            Upload Version
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="space-y-3">
                    {document.versions.map((version, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <p className="font-medium text-gray-900">Version {version.version}</p>
                              {index === 0 && (
                                <Badge className="bg-[#006403] text-white">Current</Badge>
                              )}
                            </div>
                            <p className="text-sm text-gray-600">{version.changes}</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
                          <span>{new Date(version.date).toLocaleDateString('en-NG')}</span>
                          <span>•</span>
                          <span>{version.uploadedBy}</span>
                          <span>•</span>
                          <span>{version.size}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Document Metadata */}
          <Card>
            <CardHeader>
              <CardTitle>Metadata</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Author</p>
                  <p className="font-medium text-gray-900">{document.author}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Uploaded By</p>
                  <p className="font-medium text-gray-900">{document.uploadedBy}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Upload Date</p>
                  <p className="font-medium text-gray-900">
                    {new Date(document.uploadDate).toLocaleDateString('en-NG')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Last Modified</p>
                  <p className="font-medium text-gray-900">
                    {new Date(document.lastModified).toLocaleDateString('en-NG')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Access Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>Access Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Views:</span>
                <span className="font-medium text-gray-900">47</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Downloads:</span>
                <span className="font-medium text-gray-900">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Unique Viewers:</span>
                <span className="font-medium text-gray-900">23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Search Appearances:</span>
                <span className="font-medium text-gray-900">{document.searchHistory.length}</span>
              </div>
            </CardContent>
          </Card>

          {/* Security Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Security Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Dialog open={isSecurityDialogOpen} onOpenChange={setIsSecurityDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full justify-start">
                    <Shield className="w-4 h-4 mr-2" />
                    Change Security Level
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Change Security Level</DialogTitle>
                    <DialogDescription>
                      Update the security clearance level required to access this document.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label>Current Security Level</Label>
                      <div className="p-3 border border-gray-200 rounded-md bg-gray-50">
                        <Badge className={`${getSecurityBadgeColor(document.securityLevel)} border`}>
                          <Shield className="w-3 h-3 mr-1" />
                          {document.securityLevel}
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>New Security Level</Label>
                      <Select value={newSecurityLevel} onValueChange={setNewSecurityLevel}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select new security level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Public">Public</SelectItem>
                          <SelectItem value="Confidential">Confidential</SelectItem>
                          <SelectItem value="Restricted">Restricted</SelectItem>
                          <SelectItem value="Top Secret">Top Secret</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Reason for Change</Label>
                      <Textarea
                        placeholder="Explain why the security level is being changed..."
                        value={securityChangeReason}
                        onChange={(e) => setSecurityChangeReason(e.target.value)}
                        rows={4}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsSecurityDialogOpen(false)
                        setNewSecurityLevel("")
                        setSecurityChangeReason("")
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleSecurityChange}
                      disabled={!newSecurityLevel || !securityChangeReason}
                    >
                      Update Security Level
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button variant="outline" className="w-full justify-start">
                <Eye className="w-4 h-4 mr-2" />
                View Access Log
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <History className="w-4 h-4 mr-2" />
                Audit Trail
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

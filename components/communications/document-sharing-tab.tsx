"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Download,
  Share2,
  Upload,
  Eye,
  Clock,
  User,
  Building2,
  CheckCircle,
  AlertCircle,
  Search,
} from "lucide-react"
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

const mockSharedDocuments = [
  {
    id: 1,
    documentNo: 'SH-DOC/2025/001',
    title: 'Summons - Case CR/45/2025',
    type: 'Summons',
    sharedWith: 'Kano State Police Command',
    sharedBy: 'Barr. Fatima Ibrahim',
    sharedDate: '2025-10-30',
    status: 'viewed',
    viewedDate: '2025-10-31',
    fileSize: '245 KB',
    downloads: 3,
  },
  {
    id: 2,
    documentNo: 'SH-DOC/2025/002',
    title: 'Legal Opinion - Education Policy',
    type: 'Legal Opinion',
    sharedWith: 'Ministry of Education',
    sharedBy: 'Barr. Ibrahim Sani',
    sharedDate: '2025-10-29',
    status: 'viewed',
    viewedDate: '2025-10-30',
    fileSize: '1.2 MB',
    downloads: 2,
  },
  {
    id: 3,
    documentNo: 'SH-DOC/2025/003',
    title: 'Approval Request - Land Acquisition',
    type: 'Approval Request',
    sharedWith: 'Office of the Governor',
    sharedBy: 'Barr. Maryam Usman',
    sharedDate: '2025-10-28',
    status: 'pending',
    viewedDate: null,
    fileSize: '890 KB',
    downloads: 0,
  },
  {
    id: 4,
    documentNo: 'SH-DOC/2025/004',
    title: 'Court Decision - CR/48/2025',
    type: 'Court Decision',
    sharedWith: 'Federal High Court Kano',
    sharedBy: 'Barr. Ahmad Bello',
    sharedDate: '2025-10-27',
    status: 'acknowledged',
    viewedDate: '2025-10-28',
    fileSize: '567 KB',
    downloads: 5,
  },
]

export function DocumentSharingTab() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search shared documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Dialog open={isShareDialogOpen} onOpenChange={setIsShareDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Document
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Share Document with Stakeholder</DialogTitle>
                  <DialogDescription>
                    Securely share documents with external stakeholders. All sharing activities are tracked and audited.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Stakeholder *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select stakeholder" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="police">Kano State Police Command</SelectItem>
                          <SelectItem value="governor">Office of the Governor</SelectItem>
                          <SelectItem value="court">Federal High Court Kano</SelectItem>
                          <SelectItem value="education">Ministry of Education</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Document Type *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="summons">Summons</SelectItem>
                          <SelectItem value="decision">Court Decision</SelectItem>
                          <SelectItem value="opinion">Legal Opinion</SelectItem>
                          <SelectItem value="approval">Approval Request</SelectItem>
                          <SelectItem value="notice">Official Notice</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Related Case/Reference Number (Optional)</Label>
                    <Input placeholder="e.g., CR/45/2025" />
                  </div>

                  <div className="space-y-2">
                    <Label>Document File *</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#8B1538] transition-colors">
                      <input
                        id="document-file"
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                      />
                      <label htmlFor="document-file" className="cursor-pointer">
                        <Upload className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-1">
                          Click to upload document
                        </p>
                        <p className="text-xs text-gray-500">
                          PDF, DOC, DOCX (max. 25MB)
                        </p>
                      </label>
                    </div>
                    {selectedFile && (
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg mt-2">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{selectedFile.name}</p>
                          <p className="text-xs text-gray-500">
                            {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>Access Permissions</Label>
                    <div className="space-y-2 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="allow-download" defaultChecked className="w-4 h-4" />
                        <label htmlFor="allow-download" className="text-sm text-gray-900">
                          Allow download
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="track-views" defaultChecked className="w-4 h-4" />
                        <label htmlFor="track-views" className="text-sm text-gray-900">
                          Track views and downloads
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="require-ack" className="w-4 h-4" />
                        <label htmlFor="require-ack" className="text-sm text-gray-900">
                          Require acknowledgment
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Notes/Instructions (Optional)</Label>
                    <Input placeholder="Add any special instructions or notes" />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsShareDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setIsShareDialogOpen(false)}>
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Document
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      {/* Shared Documents List */}
      <Card>
        <CardHeader>
          <CardTitle>Shared Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockSharedDocuments.map((doc, index) => {
              const bgColors = ['bg-blue-50', 'bg-green-50', 'bg-purple-50', 'bg-red-50']
              const borderColors = ['border-blue-500', 'border-green-500', 'border-purple-500', 'border-red-500']
              const iconColors = ['text-blue-600', 'text-green-600', 'text-purple-600', 'text-red-600']
              const colorIndex = index % 4

              return (
                <div
                  key={doc.id}
                  className={`p-4 border-l-4 ${borderColors[colorIndex]} ${bgColors[colorIndex]} rounded`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-3 flex-1">
                      <FileText className={`w-6 h-6 ${iconColors[colorIndex]} mt-0.5`} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900">{doc.title}</h3>
                          <Badge variant="outline" className="text-xs">{doc.type}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Document No: {doc.documentNo}</p>

                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-gray-400" />
                            <span>{doc.sharedWith}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-gray-400" />
                            <span>Shared by: {doc.sharedBy}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span>{new Date(doc.sharedDate).toLocaleDateString('en-NG')}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Download className="w-4 h-4 text-gray-400" />
                            <span>{doc.downloads} downloads</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge
                        className={
                          doc.status === 'viewed'
                            ? 'bg-blue-100 text-blue-800'
                            : doc.status === 'acknowledged'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-orange-100 text-orange-800'
                        }
                      >
                        {doc.status === 'viewed' && <Eye className="w-3 h-3 mr-1" />}
                        {doc.status === 'acknowledged' && <CheckCircle className="w-3 h-3 mr-1" />}
                        {doc.status === 'pending' && <AlertCircle className="w-3 h-3 mr-1" />}
                        {doc.status}
                      </Badge>
                      <span className="text-xs text-gray-500">{doc.fileSize}</span>
                    </div>
                  </div>

                  {doc.viewedDate && (
                    <p className="text-xs text-gray-500 ml-9">
                      Viewed on {new Date(doc.viewedDate).toLocaleDateString('en-NG')}
                    </p>
                  )}

                  <div className="flex gap-2 mt-3 ml-9">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

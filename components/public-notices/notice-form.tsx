"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FileText, Upload, X, Save, Send, Globe } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"

export function NoticeForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const editId = searchParams.get('id')
  const isEditMode = !!editId

  const [files, setFiles] = useState<File[]>([])
  const [formData, setFormData] = useState({
    noticeNo: '',
    title: '',
    category: '',
    publishDate: '',
    expiryDate: '',
    summary: '',
    content: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
  })

  useEffect(() => {
    if (isEditMode) {
      // Fetch and populate form data
      const mockData = {
        noticeNo: 'PN/2025/001',
        title: 'Public Notice on Proposed Amendment to Kano State Land Use Act',
        category: 'legislative',
        publishDate: '2025-10-25',
        expiryDate: '2025-11-25',
        summary: 'Notice of public hearing on proposed amendments to the Kano State Land Use Act 2024.',
        content: 'The Kano State Ministry of Justice is pleased to announce a public hearing...',
        contactPerson: 'Barr. Fatima Ibrahim',
        contactEmail: 'fatima.ibrahim@justice.kano.gov.ng',
        contactPhone: '+234 803 123 4567',
      }
      setFormData(mockData)
    }
  }, [isEditMode, editId])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles([...files, ...Array.from(e.target.files)])
    }
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent, draft: boolean = false) => {
    e.preventDefault()
    if (isEditMode) {
      console.log('Updating notice', editId, { ...formData, draft })
    } else {
      console.log('Creating new notice', { ...formData, files, draft })
    }
    router.push('/public-notices')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/public-notices">
            <Button variant="outline" size="sm">← Back</Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {isEditMode ? 'Edit Public Notice' : 'Publish New Notice'}
            </h1>
            <p className="text-gray-600">
              {isEditMode
                ? 'Update the public notice details'
                : 'Create and publish a new statutory notice for public transparency'}
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Notice Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="noticeNo">Notice Number *</Label>
                <Input
                  id="noticeNo"
                  placeholder="PN/2025/XXXX"
                  required
                  value={formData.noticeNo}
                  onChange={(e) => setFormData({ ...formData, noticeNo: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Notice Category *</Label>
                <Select
                  required
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="legislative">Legislative Notice</SelectItem>
                    <SelectItem value="consultation">Public Consultation</SelectItem>
                    <SelectItem value="tender">Tender Notice</SelectItem>
                    <SelectItem value="announcement">Official Announcement</SelectItem>
                    <SelectItem value="regulation">Draft Regulation</SelectItem>
                    <SelectItem value="directive">AG Directive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Notice Title *</Label>
              <Input
                id="title"
                placeholder="Enter clear and descriptive title"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="summary">Summary *</Label>
              <Textarea
                id="summary"
                placeholder="Brief summary of the notice (will be shown in list view)"
                rows={3}
                required
                value={formData.summary}
                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="publishDate">Publication Date *</Label>
                <Input
                  id="publishDate"
                  type="date"
                  required
                  value={formData.publishDate}
                  onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="expiryDate">Expiry Date (Optional)</Label>
                <Input
                  id="expiryDate"
                  type="date"
                  value={formData.expiryDate}
                  onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                />
                <p className="text-xs text-gray-500">Leave blank if notice has no expiry</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Full Content */}
        <Card>
          <CardHeader>
            <CardTitle>Full Notice Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="content">Detailed Content *</Label>
              <Textarea
                id="content"
                placeholder="Enter the full content of the notice. You can use basic HTML formatting if needed."
                rows={15}
                required
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              />
              <p className="text-xs text-gray-500">
                Use clear headings and bullet points. Include all relevant information such as background, details, deadlines, and contact information.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="contactPerson">Contact Person *</Label>
              <Input
                id="contactPerson"
                placeholder="Name of person to contact for inquiries"
                required
                value={formData.contactPerson}
                onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Contact Email *</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  placeholder="email@justice.kano.gov.ng"
                  required
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactPhone">Contact Phone *</Label>
                <Input
                  id="contactPhone"
                  type="tel"
                  placeholder="+234 803 123 4567"
                  required
                  value={formData.contactPhone}
                  onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Attachments */}
        <Card>
          <CardHeader>
            <CardTitle>Attachments & Supporting Documents</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#006403] transition-colors">
                <input
                  id="documents"
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label htmlFor="documents" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-600 mb-1">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    PDF, DOC, DOCX, images (max. 10MB each)
                  </p>
                </label>
              </div>
            </div>

            {files.length > 0 && (
              <div className="space-y-2">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{file.name}</p>
                        <p className="text-xs text-gray-500">
                          {(file.size / 1024).toFixed(2)} KB
                        </p>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(index)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Publishing Options */}
        <Card className="border-[#006403]/20 bg-[#006403]/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Publication Options
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm text-gray-700">
                This notice will be published to the public portal and will be accessible to all citizens. Ensure all information is accurate and approved before publishing.
              </p>
              <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-[#006403]/20">
                <input type="checkbox" id="approvalConfirm" required className="w-4 h-4" />
                <label htmlFor="approvalConfirm" className="text-sm text-gray-900">
                  I confirm that this notice has been reviewed and approved for public publication
                </label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3">
          <Link href="/public-notices">
            <Button type="button" variant="outline">Cancel</Button>
          </Link>
          <Button
            type="button"
            variant="outline"
            onClick={(e) => handleSubmit(e, true)}
          >
            <Save className="w-4 h-4 mr-2" />
            Save as Draft
          </Button>
          <Button type="submit">
            <Send className="w-4 h-4 mr-2" />
            {isEditMode ? 'Update & Publish' : 'Publish Notice'}
          </Button>
        </div>
      </form>
    </div>
  )
}

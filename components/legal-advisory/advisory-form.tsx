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
import { FileText, Upload, X, Save, Send } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"

export function AdvisoryForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const editId = searchParams.get('id')
  const isEditMode = !!editId

  const [files, setFiles] = useState<File[]>([])
  const [formData, setFormData] = useState({
    agency: '',
    priority: '',
    subject: '',
    description: '',
    category: '',
    deadline: '',
    contact: '',
    email: '',
    phone: '',
    background: '',
    questions: '',
    references: '',
  })

  useEffect(() => {
    if (isEditMode) {
      // Fetch the advisory data and populate the form
      // Replace with actual API call
      const mockData = {
        agency: 'education',
        priority: 'high',
        subject: 'Contract Review - School Construction Project',
        description: 'The Ministry of Education is seeking legal review...',
        category: 'contract',
        deadline: '2025-11-11',
        contact: 'Dr. Amina Hassan',
        email: 'amina.hassan@education.kano.gov.ng',
        phone: '+234 803 456 7890',
        background: '',
        questions: '',
        references: '',
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
    // Handle form submission
    if (isEditMode) {
      console.log('Updating advisory', editId, { ...formData, draft })
      // Add API call to update advisory
    } else {
      console.log('Creating new advisory', { ...formData, draft })
      // Add API call to create advisory
    }
    router.push('/legal-advisory')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/legal-advisory">
            <Button variant="outline" size="sm">← Back</Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {isEditMode ? 'Edit Legal Advisory Request' : 'New Legal Advisory Request'}
            </h1>
            <p className="text-gray-600">
              {isEditMode
                ? 'Update the legal advisory request details'
                : 'Submit a new request for legal opinion or advisory'}
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-6">
        {/* Request Details */}
        <Card>
          <CardHeader>
            <CardTitle>Request Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="agency">Requesting Agency/MDA *</Label>
                <Select
                  required
                  value={formData.agency}
                  onValueChange={(value) => setFormData({ ...formData, agency: value })}
                >
                  <SelectTrigger id="agency">
                    <SelectValue placeholder="Select agency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="education">Ministry of Education</SelectItem>
                    <SelectItem value="health">Ministry of Health</SelectItem>
                    <SelectItem value="works">Ministry of Works</SelectItem>
                    <SelectItem value="finance">Ministry of Finance</SelectItem>
                    <SelectItem value="agriculture">Ministry of Agriculture</SelectItem>
                    <SelectItem value="water">Ministry of Water Resources</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="priority">Priority Level *</Label>
                <Select
                  required
                  value={formData.priority}
                  onValueChange={(value) => setFormData({ ...formData, priority: value })}
                >
                  <SelectTrigger id="priority">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">Urgent</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject/Title *</Label>
              <Input
                id="subject"
                placeholder="Brief title of the legal matter"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Detailed Description *</Label>
              <Textarea
                id="description"
                placeholder="Provide comprehensive details about the legal issue requiring advisory"
                rows={6}
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Request Category *</Label>
              <Select
                required
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="contract">Contract Review</SelectItem>
                  <SelectItem value="mou">MOU/Agreement Review</SelectItem>
                  <SelectItem value="policy">Policy Advisory</SelectItem>
                  <SelectItem value="procurement">Procurement Advisory</SelectItem>
                  <SelectItem value="employment">Employment Matters</SelectItem>
                  <SelectItem value="property">Property/Land Matters</SelectItem>
                  <SelectItem value="compliance">Compliance Issues</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="deadline">Required Completion Date</Label>
                <Input
                  id="deadline"
                  type="date"
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Contact Person *</Label>
                <Input
                  id="contact"
                  placeholder="Name of contact person"
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Contact Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@agency.kano.gov.ng"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Contact Phone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+234 803 123 4567"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Supporting Documents */}
        <Card>
          <CardHeader>
            <CardTitle>Supporting Documents</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="documents">Upload Documents</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#8B1538] transition-colors">
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
                    PDF, DOC, DOCX, JPG, PNG (max. 10MB each)
                  </p>
                </label>
              </div>
            </div>

            {files.length > 0 && (
              <div className="space-y-2">
                <Label>Attached Files</Label>
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
              </div>
            )}
          </CardContent>
        </Card>

        {/* Additional Information */}
        <Card>
          <CardHeader>
            <CardTitle>Additional Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="background">Background/Context</Label>
              <Textarea
                id="background"
                placeholder="Provide any relevant background information or context"
                rows={4}
                value={formData.background}
                onChange={(e) => setFormData({ ...formData, background: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="questions">Specific Legal Questions</Label>
              <Textarea
                id="questions"
                placeholder="List specific legal questions requiring answers"
                rows={4}
                value={formData.questions}
                onChange={(e) => setFormData({ ...formData, questions: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="references">Related Files/References</Label>
              <Input
                id="references"
                placeholder="Reference numbers of related cases or files"
                value={formData.references}
                onChange={(e) => setFormData({ ...formData, references: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3">
          <Link href="/legal-advisory">
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
            {isEditMode ? 'Update Request' : 'Submit Request'}
          </Button>
        </div>
      </form>
    </div>
  )
}

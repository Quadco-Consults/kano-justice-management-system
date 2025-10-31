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
import { FileText, Upload, X, Save, Send, Plus, Trash2, Calendar as CalendarIcon } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"

export function SubmissionForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const editId = searchParams.get('id')
  const isEditMode = !!editId

  const [files, setFiles] = useState<File[]>([])
  const [requirements, setRequirements] = useState<string[]>([])
  const [requirementInput, setRequirementInput] = useState("")
  const [reminders, setReminders] = useState<Array<{ days: string; enabled: boolean }>>([
    { days: "7", enabled: true },
    { days: "3", enabled: true },
    { days: "1", enabled: true },
  ])

  const [formData, setFormData] = useState({
    submissionNo: '',
    title: '',
    type: '',
    regulatoryBody: '',
    frequency: '',
    dueDate: '',
    assignedTo: '',
    priority: '',
    description: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
  })

  useEffect(() => {
    if (isEditMode) {
      // Fetch and populate form data
      const mockData = {
        submissionNo: 'SUB/2025/Q4/001',
        title: 'Quarterly Compliance Report',
        type: 'Compliance Report',
        regulatoryBody: 'fmoj',
        frequency: 'Quarterly',
        dueDate: '2025-11-30',
        assignedTo: 'fatima',
        priority: 'high',
        description: 'Quarterly compliance report detailing state legal reforms and implementation status.',
        contactPerson: 'Mr. John Doe',
        contactEmail: 'john.doe@fmoj.gov.ng',
        contactPhone: '+234 803 123 4567',
      }
      setFormData(mockData)
      setRequirements([
        'Summary of enacted state laws in Q4 2025',
        'Status of pending bills',
        'Implementation report of directives',
      ])
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

  const addRequirement = () => {
    if (requirementInput.trim()) {
      setRequirements([...requirements, requirementInput.trim()])
      setRequirementInput("")
    }
  }

  const removeRequirement = (index: number) => {
    setRequirements(requirements.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent, draft: boolean = false) => {
    e.preventDefault()
    if (isEditMode) {
      console.log('Updating submission', editId, { ...formData, requirements, reminders, draft })
    } else {
      console.log('Creating new submission', { ...formData, files, requirements, reminders, draft })
    }
    router.push('/statutory-submissions')
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
            <h1 className="text-3xl font-bold text-gray-900">
              {isEditMode ? 'Edit Statutory Submission' : 'New Statutory Submission'}
            </h1>
            <p className="text-gray-600">
              {isEditMode
                ? 'Update the submission details and requirements'
                : 'Create a new regulatory submission or compliance report'}
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="submissionNo">Submission Number *</Label>
                <Input
                  id="submissionNo"
                  placeholder="SUB/2025/XXXX"
                  required
                  value={formData.submissionNo}
                  onChange={(e) => setFormData({ ...formData, submissionNo: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Submission Type *</Label>
                <Select
                  required
                  value={formData.type}
                  onValueChange={(value) => setFormData({ ...formData, type: value })}
                >
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Compliance Report">Compliance Report</SelectItem>
                    <SelectItem value="Statutory Filing">Statutory Filing</SelectItem>
                    <SelectItem value="Regulatory Return">Regulatory Return</SelectItem>
                    <SelectItem value="Public Notice">Public Notice</SelectItem>
                    <SelectItem value="Performance Report">Performance Report</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Submission Title *</Label>
              <Input
                id="title"
                placeholder="Enter submission title"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                placeholder="Provide detailed description of the submission requirements"
                rows={4}
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="regulatoryBody">Regulatory Body *</Label>
                <Select
                  required
                  value={formData.regulatoryBody}
                  onValueChange={(value) => setFormData({ ...formData, regulatoryBody: value })}
                >
                  <SelectTrigger id="regulatoryBody">
                    <SelectValue placeholder="Select regulatory body" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fmoj">Federal Ministry of Justice</SelectItem>
                    <SelectItem value="njc">National Judicial Council</SelectItem>
                    <SelectItem value="oagf">Office of the Attorney General Federation</SelectItem>
                    <SelectItem value="oag">Office of the Auditor General</SelectItem>
                    <SelectItem value="npf">Nigerian Police Force</SelectItem>
                    <SelectItem value="nlrc">Nigerian Law Reform Commission</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="frequency">Frequency *</Label>
                <Select
                  required
                  value={formData.frequency}
                  onValueChange={(value) => setFormData({ ...formData, frequency: value })}
                >
                  <SelectTrigger id="frequency">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Monthly">Monthly</SelectItem>
                    <SelectItem value="Quarterly">Quarterly</SelectItem>
                    <SelectItem value="Bi-Annual">Bi-Annual</SelectItem>
                    <SelectItem value="Annual">Annual</SelectItem>
                    <SelectItem value="Ad-hoc">Ad-hoc</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submission Details */}
        <Card>
          <CardHeader>
            <CardTitle>Submission Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dueDate">Due Date *</Label>
                <Input
                  id="dueDate"
                  type="date"
                  required
                  value={formData.dueDate}
                  onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="priority">Priority *</Label>
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
              <Label htmlFor="assignedTo">Assigned To *</Label>
              <Select
                required
                value={formData.assignedTo}
                onValueChange={(value) => setFormData({ ...formData, assignedTo: value })}
              >
                <SelectTrigger id="assignedTo">
                  <SelectValue placeholder="Select assignee" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fatima">Barr. Fatima Ibrahim</SelectItem>
                  <SelectItem value="ahmad">Barr. Ahmad Sani</SelectItem>
                  <SelectItem value="halima">Barr. Halima Mohammed</SelectItem>
                  <SelectItem value="ibrahim">Barr. Ibrahim Bello</SelectItem>
                  <SelectItem value="maryam">Barr. Maryam Usman</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Regulatory Body Contact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="contactPerson">Contact Person</Label>
              <Input
                id="contactPerson"
                placeholder="Name of contact at regulatory body"
                value={formData.contactPerson}
                onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Contact Email</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  placeholder="contact@regbody.gov.ng"
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactPhone">Contact Phone</Label>
                <Input
                  id="contactPhone"
                  type="tel"
                  placeholder="+234 803 123 4567"
                  value={formData.contactPhone}
                  onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Requirements */}
        <Card>
          <CardHeader>
            <CardTitle>Submission Requirements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="Add a requirement item..."
                value={requirementInput}
                onChange={(e) => setRequirementInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    addRequirement()
                  }
                }}
              />
              <Button type="button" variant="outline" onClick={addRequirement}>
                <Plus className="w-4 h-4 mr-2" />
                Add
              </Button>
            </div>

            {requirements.length > 0 && (
              <div className="space-y-2">
                {requirements.map((req, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                  >
                    <span className="text-sm text-gray-900">{req}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeRequirement(index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Reminders/Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Automated Reminders</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-gray-600">
              Set up automated email reminders before the submission deadline
            </p>
            {reminders.map((reminder, index) => (
              <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                <input
                  type="checkbox"
                  checked={reminder.enabled}
                  onChange={(e) => {
                    const newReminders = [...reminders]
                    newReminders[index].enabled = e.target.checked
                    setReminders(newReminders)
                  }}
                  className="w-4 h-4"
                />
                <CalendarIcon className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-900">
                  Send reminder {reminder.days} {reminder.days === "1" ? "day" : "days"} before deadline
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Supporting Documents */}
        {!isEditMode && (
          <Card>
            <CardHeader>
              <CardTitle>Supporting Documents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
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
                      PDF, DOC, DOCX, XLS, XLSX (max. 10MB each)
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
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3">
          <Link href="/statutory-submissions">
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
            {isEditMode ? 'Update Submission' : 'Create Submission'}
          </Button>
        </div>
      </form>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowLeft, Save, Upload } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  { id: 1, name: 'Barr. Fatima Ibrahim', role: 'Lead Counsel' },
  { id: 2, name: 'Barr. Yusuf Ali', role: 'Senior Counsel' },
  { id: 3, name: 'Barr. Ibrahim Bello', role: 'Legal Officer' },
  { id: 4, name: 'Legal Advisory Team', role: 'Team' },
  { id: 5, name: 'Legislative Team', role: 'Team' },
  { id: 6, name: 'Litigation Team', role: 'Team' }
]

export function RequestForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const correspondenceId = searchParams.get('correspondence')
  const editId = searchParams.get('id')
  const isEditMode = !!editId

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    priority: "medium",
    assignedTo: "",
    dueDate: "",
  })

  useEffect(() => {
    if (isEditMode) {
      // In real app, fetch request data based on editId
      setFormData({
        title: "Initial Contract Review",
        description: "Review the contract terms and identify any legal risks or non-compliance issues.",
        type: "Legal Advisory",
        priority: "high",
        assignedTo: "1",
        dueDate: "2025-10-27",
      })
    }
  }, [isEditMode, editId])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // In real app, send to API
    if (correspondenceId) {
      router.push(`/correspondences/${correspondenceId}`)
    } else {
      router.push('/communications')
    }
  }

  const backUrl = correspondenceId ? `/correspondences/${correspondenceId}` : '/communications'

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href={backUrl}>
          <Button variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {isEditMode ? 'Edit Request' : 'New Request'}
          </h1>
          <p className="text-gray-600">
            {isEditMode
              ? 'Update request details'
              : 'Create a new request for legal services'}
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Request Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">
                Request Title <span className="text-red-500">*</span>
              </Label>
              <Input
                id="title"
                placeholder="Enter request title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">
                Description <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="description"
                placeholder="Provide a detailed description of what you need"
                rows={5}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Type */}
              <div className="space-y-2">
                <Label htmlFor="type">
                  Request Type <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.type}
                  onValueChange={(value) => setFormData({ ...formData, type: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select request type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Legal Advisory">Legal Advisory</SelectItem>
                    <SelectItem value="Litigation Support">Litigation Support</SelectItem>
                    <SelectItem value="Legislative Drafting">Legislative Drafting</SelectItem>
                    <SelectItem value="Contract Review">Contract Review</SelectItem>
                    <SelectItem value="Compliance Verification">Compliance Verification</SelectItem>
                    <SelectItem value="Legal Research">Legal Research</SelectItem>
                    <SelectItem value="Document Review">Document Review</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Priority */}
              <div className="space-y-2">
                <Label htmlFor="priority">
                  Priority <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.priority}
                  onValueChange={(value) => setFormData({ ...formData, priority: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High Priority</SelectItem>
                    <SelectItem value="medium">Medium Priority</SelectItem>
                    <SelectItem value="low">Low Priority</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Assigned To */}
              <div className="space-y-2">
                <Label htmlFor="assignedTo">
                  Assign To <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.assignedTo}
                  onValueChange={(value) => setFormData({ ...formData, assignedTo: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select team member" />
                  </SelectTrigger>
                  <SelectContent>
                    {teamMembers.map((member) => (
                      <SelectItem key={member.id} value={member.id.toString()}>
                        {member.name} - {member.role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Due Date */}
              <div className="space-y-2">
                <Label htmlFor="dueDate">
                  Due Date <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="dueDate"
                  type="date"
                  value={formData.dueDate}
                  onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Attachments */}
            <div className="space-y-2">
              <Label htmlFor="attachments">Attachments</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#8B1538] transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-1">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500">
                  PDF, DOC, DOCX, XLS, XLSX up to 10MB
                </p>
                <input
                  id="attachments"
                  type="file"
                  multiple
                  className="hidden"
                  accept=".pdf,.doc,.docx,.xls,.xlsx"
                />
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex items-center justify-end gap-3 pt-6 border-t">
              <Link href={backUrl}>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </Link>
              <Button type="submit">
                <Save className="w-4 h-4 mr-2" />
                {isEditMode ? 'Update Request' : 'Submit Request'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  )
}

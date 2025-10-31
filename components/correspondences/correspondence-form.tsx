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
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"

const stakeholdersList = [
  { id: 1, name: 'Ministry of Education', code: 'MOE' },
  { id: 2, name: 'Kano State Police Command', code: 'KSPC' },
  { id: 3, name: 'Federal High Court Kano', code: 'FHCK' },
  { id: 4, name: 'Ministry of Finance', code: 'MOF' },
  { id: 5, name: 'Kano State House of Assembly', code: 'KSHA' },
  { id: 6, name: 'Bureau of Public Procurement', code: 'BPP' },
  { id: 7, name: 'Office of the Attorney General Federation', code: 'AGF' }
]

export function CorrespondenceForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const stakeholderId = searchParams.get('stakeholder')
  const editId = searchParams.get('id')
  const isEditMode = !!editId

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    stakeholderId: stakeholderId || "",
    priority: "medium",
    category: "",
  })

  useEffect(() => {
    if (isEditMode) {
      // In real app, fetch correspondence data based on editId
      setFormData({
        title: "School Construction Contract Review",
        description: "Legal review and advisory for the new school construction project contract including compliance verification and risk assessment.",
        stakeholderId: "1",
        priority: "high",
        category: "Legal Advisory",
      })
    }
  }, [isEditMode, editId])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // In real app, send to API
    router.push('/communications')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/communications">
          <Button variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {isEditMode ? 'Edit Correspondence' : 'New Correspondence'}
          </h1>
          <p className="text-gray-600">
            {isEditMode
              ? 'Update correspondence details'
              : 'Create a new correspondence with a stakeholder'}
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Correspondence Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">
                Title <span className="text-red-500">*</span>
              </Label>
              <Input
                id="title"
                placeholder="Enter correspondence title"
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
                placeholder="Provide a detailed description of the correspondence"
                rows={5}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Stakeholder */}
              <div className="space-y-2">
                <Label htmlFor="stakeholder">
                  Stakeholder <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.stakeholderId}
                  onValueChange={(value) => setFormData({ ...formData, stakeholderId: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select stakeholder" />
                  </SelectTrigger>
                  <SelectContent>
                    {stakeholdersList.map((stakeholder) => (
                      <SelectItem key={stakeholder.id} value={stakeholder.id.toString()}>
                        {stakeholder.name} ({stakeholder.code})
                      </SelectItem>
                    ))}
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

              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="category">
                  Category <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Legal Advisory">Legal Advisory</SelectItem>
                    <SelectItem value="Litigation Support">Litigation Support</SelectItem>
                    <SelectItem value="Legislative Drafting">Legislative Drafting</SelectItem>
                    <SelectItem value="Contract Review">Contract Review</SelectItem>
                    <SelectItem value="Compliance Verification">Compliance Verification</SelectItem>
                    <SelectItem value="General Consultation">General Consultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex items-center justify-end gap-3 pt-6 border-t">
              <Link href="/communications">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </Link>
              <Button type="submit">
                <Save className="w-4 h-4 mr-2" />
                {isEditMode ? 'Update Correspondence' : 'Create Correspondence'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  )
}

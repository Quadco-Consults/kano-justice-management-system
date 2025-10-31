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
import { FileText, Upload, X, Save, Send, Plus, Trash2 } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"

export function CaseForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const editId = searchParams.get('id')
  const isEditMode = !!editId

  const [files, setFiles] = useState<File[]>([])
  const [suspects, setSuspects] = useState([{ name: "", age: "", address: "" }])
  const [charges, setCharges] = useState([{ offense: "", section: "" }])
  const [formData, setFormData] = useState({
    caseType: "",
    priority: "",
    caseTitle: "",
    crNo: "",
    dateReported: "",
    dateIncident: "",
    location: "",
    facts: "",
    policeStation: "",
    ipo: "",
    ipoPhone: "",
    ipoEmail: "",
    notes: "",
  })

  useEffect(() => {
    if (isEditMode) {
      // Fetch case data and populate form
      // Replace with actual API call
      const mockData = {
        caseType: "felony",
        priority: "high",
        caseTitle: "State v. Ahmad Musa",
        crNo: "CR/2025/1234",
        dateReported: "2025-09-16",
        dateIncident: "2025-09-15",
        location: "Sabon Gari Market, Kano",
        facts: "Armed robbery incident...",
        policeStation: "Sabon Gari Police Division",
        ipo: "Inspector Ibrahim Sani",
        ipoPhone: "+234 803 456 7890",
        ipoEmail: "ibrahim.sani@police.gov.ng",
        notes: "",
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

  const addSuspect = () => {
    setSuspects([...suspects, { name: "", age: "", address: "" }])
  }

  const removeSuspect = (index: number) => {
    setSuspects(suspects.filter((_, i) => i !== index))
  }

  const addCharge = () => {
    setCharges([...charges, { offense: "", section: "" }])
  }

  const removeCharge = (index: number) => {
    setCharges(charges.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent, draft: boolean = false) => {
    e.preventDefault()
    if (isEditMode) {
      console.log('Updating case', editId, { ...formData, draft })
      // Add API call to update case
    } else {
      console.log('Creating new case', { ...formData, draft })
      // Add API call to create case
    }
    router.push('/prosecution')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/prosecution">
            <Button variant="outline" size="sm">← Back</Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {isEditMode ? 'Edit Prosecution Case' : 'New Prosecution Case'}
            </h1>
            <p className="text-gray-600">
              {isEditMode ? 'Update the case details' : 'Register a new criminal prosecution case'}
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-6">
        {/* Case Information */}
        <Card>
          <CardHeader>
            <CardTitle>Case Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="caseType">Case Type *</Label>
                <Select
                  required
                  value={formData.caseType}
                  onValueChange={(value) => setFormData({ ...formData, caseType: value })}
                >
                  <SelectTrigger id="caseType">
                    <SelectValue placeholder="Select case type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="felony">Felony</SelectItem>
                    <SelectItem value="misdemeanor">Misdemeanor</SelectItem>
                    <SelectItem value="simple-offense">Simple Offense</SelectItem>
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
              <Label htmlFor="caseTitle">Case Title *</Label>
              <Input
                id="caseTitle"
                placeholder="e.g., State v. John Doe"
                required
                value={formData.caseTitle}
                onChange={(e) => setFormData({ ...formData, caseTitle: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="crNo">CR Number</Label>
              <Input
                id="crNo"
                placeholder="Police CR Number"
                value={formData.crNo}
                onChange={(e) => setFormData({ ...formData, crNo: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dateReported">Date Reported *</Label>
                <Input
                  id="dateReported"
                  type="date"
                  required
                  value={formData.dateReported}
                  onChange={(e) => setFormData({ ...formData, dateReported: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateIncident">Date of Incident *</Label>
                <Input
                  id="dateIncident"
                  type="date"
                  required
                  value={formData.dateIncident}
                  onChange={(e) => setFormData({ ...formData, dateIncident: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location of Incident *</Label>
              <Input
                id="location"
                placeholder="Where the incident occurred"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="facts">Case Facts/Summary *</Label>
              <Textarea
                id="facts"
                placeholder="Brief summary of the case facts"
                rows={6}
                required
                value={formData.facts}
                onChange={(e) => setFormData({ ...formData, facts: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>

        {/* Suspects */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Suspect(s) Information</CardTitle>
              <Button type="button" size="sm" onClick={addSuspect}>
                <Plus className="w-4 h-4 mr-2" />
                Add Suspect
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {suspects.map((suspect, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">Suspect {index + 1}</h4>
                  {suspects.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeSuspect(index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`suspect-name-${index}`}>Full Name *</Label>
                    <Input
                      id={`suspect-name-${index}`}
                      placeholder="Suspect's full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`suspect-age-${index}`}>Age</Label>
                    <Input
                      id={`suspect-age-${index}`}
                      type="number"
                      placeholder="Age"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`suspect-gender-${index}`}>Gender *</Label>
                    <Select required>
                      <SelectTrigger id={`suspect-gender-${index}`}>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`suspect-address-${index}`}>Address</Label>
                  <Input
                    id={`suspect-address-${index}`}
                    placeholder="Suspect's address"
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Charges */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Charge(s)</CardTitle>
              <Button type="button" size="sm" onClick={addCharge}>
                <Plus className="w-4 h-4 mr-2" />
                Add Charge
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {charges.map((charge, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">Charge {index + 1}</h4>
                  {charges.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeCharge(index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`charge-offense-${index}`}>Offense *</Label>
                    <Input
                      id={`charge-offense-${index}`}
                      placeholder="e.g., Armed Robbery"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`charge-section-${index}`}>Law/Section *</Label>
                    <Input
                      id={`charge-section-${index}`}
                      placeholder="e.g., Section 298 Penal Code"
                      required
                    />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Police Information */}
        <Card>
          <CardHeader>
            <CardTitle>Police/Investigating Officer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="policeStation">Police Station *</Label>
                <Input
                  id="policeStation"
                  placeholder="Name of police station"
                  required
                  value={formData.policeStation}
                  onChange={(e) => setFormData({ ...formData, policeStation: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ipo">Investigating Officer *</Label>
                <Input
                  id="ipo"
                  placeholder="IPO name and rank"
                  required
                  value={formData.ipo}
                  onChange={(e) => setFormData({ ...formData, ipo: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ipoPhone">IPO Phone *</Label>
                <Input
                  id="ipoPhone"
                  type="tel"
                  placeholder="+234 803 123 4567"
                  required
                  value={formData.ipoPhone}
                  onChange={(e) => setFormData({ ...formData, ipoPhone: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ipoEmail">IPO Email</Label>
                <Input
                  id="ipoEmail"
                  type="email"
                  placeholder="ipo@police.gov.ng"
                  value={formData.ipoEmail}
                  onChange={(e) => setFormData({ ...formData, ipoEmail: e.target.value })}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Case Documents */}
        <Card>
          <CardHeader>
            <CardTitle>Case Documents</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="documents">Upload Documents</Label>
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
                    First Information Report, Case Diary, Evidence Photos, etc.
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

        {/* Additional Notes */}
        <Card>
          <CardHeader>
            <CardTitle>Additional Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="notes">Case Notes</Label>
              <Textarea
                id="notes"
                placeholder="Any additional notes or special circumstances"
                rows={4}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3">
          <Link href="/prosecution">
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
            {isEditMode ? 'Update Case' : 'Register Case'}
          </Button>
        </div>
      </form>
    </div>
  )
}

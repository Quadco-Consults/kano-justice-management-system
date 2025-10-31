"use client"

import { useState } from "react"
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
import { useRouter } from "next/navigation"

export function BillForm() {
  const router = useRouter()
  const [files, setFiles] = useState<File[]>([])
  const [objectives, setObjectives] = useState([""])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles([...files, ...Array.from(e.target.files)])
    }
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const addObjective = () => {
    setObjectives([...objectives, ""])
  }

  const removeObjective = (index: number) => {
    setObjectives(objectives.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent, draft: boolean = false) => {
    e.preventDefault()
    console.log('Form submitted', { draft })
    router.push('/legislative-drafting')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/legislative-drafting">
            <Button variant="outline" size="sm">← Back</Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">New Legislative Bill</h1>
            <p className="text-gray-600">Initiate a new bill or amendment</p>
          </div>
        </div>
      </div>

      <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-6">
        {/* Bill Information */}
        <Card>
          <CardHeader>
            <CardTitle>Bill Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="billType">Bill Type *</Label>
                <Select required>
                  <SelectTrigger id="billType">
                    <SelectValue placeholder="Select bill type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New Bill</SelectItem>
                    <SelectItem value="amendment">Amendment</SelectItem>
                    <SelectItem value="repeal">Repeal</SelectItem>
                    <SelectItem value="consolidation">Consolidation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="priority">Priority Level *</Label>
                <Select required>
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
              <Label htmlFor="title">Bill Title *</Label>
              <Input
                id="title"
                placeholder="e.g., Kano State Anti-Corruption Amendment Bill 2025"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="shortTitle">Short Title</Label>
              <Input
                id="shortTitle"
                placeholder="Short title for reference"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="sponsor">Sponsor *</Label>
                <Select required>
                  <SelectTrigger id="sponsor">
                    <SelectValue placeholder="Select sponsor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="attorney-general">Attorney General</SelectItem>
                    <SelectItem value="executive">Executive Council</SelectItem>
                    <SelectItem value="ministry">Ministry/Agency</SelectItem>
                    <SelectItem value="house">House of Assembly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="targetDate">Target Completion Date</Label>
                <Input
                  id="targetDate"
                  type="date"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description/Summary *</Label>
              <Textarea
                id="description"
                placeholder="Provide a comprehensive summary of the bill's purpose and scope"
                rows={6}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="background">Background/Context</Label>
              <Textarea
                id="background"
                placeholder="Background information and reasons necessitating this legislation"
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        {/* Bill Objectives */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Bill Objectives</CardTitle>
              <Button type="button" size="sm" onClick={addObjective}>
                <Plus className="w-4 h-4 mr-2" />
                Add Objective
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {objectives.map((objective, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-1">
                  <Input
                    placeholder={`Objective ${index + 1}`}
                    required
                  />
                </div>
                {objectives.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeObjective(index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Principal Law (for Amendments) */}
        <Card>
          <CardHeader>
            <CardTitle>Principal Law (If Amendment)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="principalLaw">Principal Law Title</Label>
              <Input
                id="principalLaw"
                placeholder="Title of the law being amended"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="lawYear">Year Enacted</Label>
                <Input
                  id="lawYear"
                  type="number"
                  placeholder="e.g., 2015"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lawNumber">Law Number</Label>
                <Input
                  id="lawNumber"
                  placeholder="e.g., Law No. 5"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="sections">Sections to be Amended</Label>
              <Textarea
                id="sections"
                placeholder="List the specific sections, subsections, or provisions to be amended"
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Stakeholder Consultation */}
        <Card>
          <CardHeader>
            <CardTitle>Stakeholder Consultation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="stakeholders">Key Stakeholders</Label>
              <Textarea
                id="stakeholders"
                placeholder="List MDAs, agencies, or organizations to be consulted"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="publicHearing">Public Hearing Required?</Label>
              <Select>
                <SelectTrigger id="publicHearing">
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="tbd">To Be Determined</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Legal Framework */}
        <Card>
          <CardHeader>
            <CardTitle>Legal Framework</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="constitutional">Constitutional Basis</Label>
              <Textarea
                id="constitutional"
                placeholder="Relevant constitutional provisions supporting this bill"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="references">Related Laws/References</Label>
              <Textarea
                id="references"
                placeholder="Other laws, precedents, or legal instruments referenced"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="compliance">Compliance Considerations</Label>
              <Textarea
                id="compliance"
                placeholder="Alignment with federal laws, international conventions, etc."
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Financial Implications */}
        <Card>
          <CardHeader>
            <CardTitle>Financial Implications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="budgetImpact">Budget Impact</Label>
              <Select>
                <SelectTrigger id="budgetImpact">
                  <SelectValue placeholder="Select impact" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No Financial Impact</SelectItem>
                  <SelectItem value="minimal">Minimal Impact</SelectItem>
                  <SelectItem value="moderate">Moderate Impact</SelectItem>
                  <SelectItem value="significant">Significant Impact</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="estimatedCost">Estimated Implementation Cost (₦)</Label>
              <Input
                id="estimatedCost"
                type="number"
                placeholder="0.00"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fundingSource">Funding Source</Label>
              <Input
                id="fundingSource"
                placeholder="Proposed funding source"
              />
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
                    Principal Law, Research Papers, Comparative Studies, etc.
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
              <Label htmlFor="specialConsiderations">Special Considerations</Label>
              <Textarea
                id="specialConsiderations"
                placeholder="Any special circumstances or urgent considerations"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Internal Notes</Label>
              <Textarea
                id="notes"
                placeholder="Additional notes for the drafting team"
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3">
          <Link href="/legislative-drafting">
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
            Initiate Bill
          </Button>
        </div>
      </form>
    </div>
  )
}

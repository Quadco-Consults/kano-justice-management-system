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

export function LitigationForm() {
  const router = useRouter()
  const [files, setFiles] = useState<File[]>([])
  const [parties, setParties] = useState([{ name: "", role: "plaintiff", address: "" }])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles([...files, ...Array.from(e.target.files)])
    }
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const addParty = () => {
    setParties([...parties, { name: "", role: "defendant", address: "" }])
  }

  const removeParty = (index: number) => {
    setParties(parties.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent, draft: boolean = false) => {
    e.preventDefault()
    console.log('Form submitted', { draft })
    router.push('/civil-litigation')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/civil-litigation">
            <Button variant="outline" size="sm">← Back</Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">New Civil Litigation Case</h1>
            <p className="text-gray-600">Register a new civil litigation matter</p>
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
                <Select required>
                  <SelectTrigger id="caseType">
                    <SelectValue placeholder="Select case type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="land-dispute">Land Dispute</SelectItem>
                    <SelectItem value="contract">Contract Dispute</SelectItem>
                    <SelectItem value="debt-recovery">Debt Recovery</SelectItem>
                    <SelectItem value="employment">Employment Dispute</SelectItem>
                    <SelectItem value="property">Property Matters</SelectItem>
                    <SelectItem value="judicial-review">Judicial Review</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
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
              <Label htmlFor="caseTitle">Case Title/Caption *</Label>
              <Input
                id="caseTitle"
                placeholder="e.g., Kano State Government v. XYZ Company Ltd"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="suitNo">Suit Number</Label>
                <Input
                  id="suitNo"
                  placeholder="Court suit number (if filed)"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="court">Court *</Label>
                <Select required>
                  <SelectTrigger id="court">
                    <SelectValue placeholder="Select court" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high-court">Kano State High Court</SelectItem>
                    <SelectItem value="federal-high">Federal High Court</SelectItem>
                    <SelectItem value="appeal">Court of Appeal</SelectItem>
                    <SelectItem value="supreme">Supreme Court</SelectItem>
                    <SelectItem value="magistrate">Magistrate Court</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dateInitiated">Date Initiated *</Label>
                <Input
                  id="dateInitiated"
                  type="date"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateFiled">Date Filed (if applicable)</Label>
                <Input
                  id="dateFiled"
                  type="date"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="summary">Case Summary *</Label>
              <Textarea
                id="summary"
                placeholder="Brief summary of the case and legal issues"
                rows={6}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="claimAmount">Claim Amount (₦)</Label>
                <Input
                  id="claimAmount"
                  type="number"
                  placeholder="0.00"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reliefSought">Relief Sought *</Label>
                <Input
                  id="reliefSought"
                  placeholder="e.g., Damages, Injunction, Declaration"
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Parties */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Parties to the Suit</CardTitle>
              <Button type="button" size="sm" onClick={addParty}>
                <Plus className="w-4 h-4 mr-2" />
                Add Party
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {parties.map((party, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">Party {index + 1}</h4>
                  {parties.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeParty(index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`party-name-${index}`}>Party Name *</Label>
                    <Input
                      id={`party-name-${index}`}
                      placeholder="Full name/company name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`party-role-${index}`}>Role *</Label>
                    <Select required>
                      <SelectTrigger id={`party-role-${index}`}>
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="plaintiff">Plaintiff</SelectItem>
                        <SelectItem value="defendant">Defendant</SelectItem>
                        <SelectItem value="respondent">Respondent</SelectItem>
                        <SelectItem value="applicant">Applicant</SelectItem>
                        <SelectItem value="third-party">Third Party</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`party-address-${index}`}>Address *</Label>
                  <Input
                    id={`party-address-${index}`}
                    placeholder="Full address"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`party-phone-${index}`}>Phone</Label>
                    <Input
                      id={`party-phone-${index}`}
                      type="tel"
                      placeholder="+234 803 123 4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`party-email-${index}`}>Email</Label>
                    <Input
                      id={`party-email-${index}`}
                      type="email"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`party-counsel-${index}`}>Legal Counsel (if any)</Label>
                  <Input
                    id={`party-counsel-${index}`}
                    placeholder="Name of counsel/law firm"
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* State's Position */}
        <Card>
          <CardHeader>
            <CardTitle>State's Position & Interest</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="stateInterest">State Interest/Position *</Label>
              <Select required>
                <SelectTrigger id="stateInterest">
                  <SelectValue placeholder="Select state's position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="plaintiff">State as Plaintiff</SelectItem>
                  <SelectItem value="defendant">State as Defendant</SelectItem>
                  <SelectItem value="interested">State as Interested Party</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ministry">Relevant Ministry/Agency</Label>
              <Input
                id="ministry"
                placeholder="Ministry or agency involved"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="legalBasis">Legal Basis/Grounds *</Label>
              <Textarea
                id="legalBasis"
                placeholder="Legal grounds and arguments"
                rows={4}
                required
              />
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
                    Pleadings, Affidavits, Exhibits, Correspondences, etc.
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
              <Label htmlFor="strategy">Litigation Strategy</Label>
              <Textarea
                id="strategy"
                placeholder="Proposed litigation strategy and approach"
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                placeholder="Any other relevant information"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="references">Related Cases/References</Label>
              <Input
                id="references"
                placeholder="Reference numbers of related matters"
              />
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3">
          <Link href="/civil-litigation">
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
            Register Case
          </Button>
        </div>
      </form>
    </div>
  )
}

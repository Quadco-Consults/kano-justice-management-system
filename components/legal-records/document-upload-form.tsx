"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FileText, Upload, X, Save, Send, Shield, Tag, LinkIcon } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"

export function DocumentUploadForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const editId = searchParams.get('id')
  const isEditMode = !!editId

  const [file, setFile] = useState<File | null>(null)
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState("")
  const [linkedCases, setLinkedCases] = useState<string[]>([])
  const [caseInput, setCaseInput] = useState("")
  const [formData, setFormData] = useState({
    title: '',
    documentNo: '',
    category: '',
    description: '',
    securityLevel: '',
    author: '',
    sourceType: '',
    court: '',
    caseNumber: '',
    sourceDate: '',
  })

  useEffect(() => {
    if (isEditMode) {
      // Fetch the document data and populate the form
      // Replace with actual API call
      const mockData = {
        title: 'Legal Opinion - Land Acquisition Framework Review',
        documentNo: 'DOC/2025/0347',
        category: 'Legal Opinions',
        description: 'Comprehensive legal opinion on the proposed amendments to the Kano State Land Acquisition Framework.',
        securityLevel: 'Confidential',
        author: 'Barr. Fatima Ibrahim',
        sourceType: 'Internal Opinion',
        court: '',
        caseNumber: '',
        sourceDate: '2025-10-25',
      }
      setFormData(mockData)
      setTags(['Land Law', 'Property', 'Policy Review'])
      setLinkedCases(['CR/45/2025', 'CR/48/2025'])
    }
  }, [isEditMode, editId])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const removeFile = () => {
    setFile(null)
  }

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()])
      setTagInput("")
    }
  }

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag))
  }

  const addLinkedCase = () => {
    if (caseInput.trim() && !linkedCases.includes(caseInput.trim())) {
      setLinkedCases([...linkedCases, caseInput.trim()])
      setCaseInput("")
    }
  }

  const removeLinkedCase = (caseNo: string) => {
    setLinkedCases(linkedCases.filter((c) => c !== caseNo))
  }

  const handleSubmit = (e: React.FormEvent, draft: boolean = false) => {
    e.preventDefault()
    // Handle form submission
    if (isEditMode) {
      console.log('Updating document', editId, { ...formData, tags, linkedCases, draft })
      // Add API call to update document
    } else {
      console.log('Uploading new document', { ...formData, file, tags, linkedCases, draft })
      // Add API call to upload document
    }
    router.push('/legal-records')
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
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/legal-records">
            <Button variant="outline" size="sm">← Back</Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {isEditMode ? 'Edit Document' : 'Upload New Document'}
            </h1>
            <p className="text-gray-600">
              {isEditMode
                ? 'Update the document details and metadata'
                : 'Add a new document to the legal records repository'}
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-6">
        {/* Document File */}
        {!isEditMode && (
          <Card>
            <CardHeader>
              <CardTitle>Document File *</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#8B1538] transition-colors">
                  <input
                    id="document"
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.txt"
                  />
                  <label htmlFor="document" className="cursor-pointer">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-sm text-gray-600 mb-1">
                      Click to upload document
                    </p>
                    <p className="text-xs text-gray-500">
                      PDF, DOC, DOCX, TXT (max. 25MB)
                    </p>
                  </label>
                </div>
              </div>

              {file && (
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{file.name}</p>
                      <p className="text-xs text-gray-500">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={removeFile}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Document Information */}
        <Card>
          <CardHeader>
            <CardTitle>Document Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="documentNo">Document Number *</Label>
                <Input
                  id="documentNo"
                  placeholder="DOC/2025/XXXX"
                  required
                  value={formData.documentNo}
                  onChange={(e) => setFormData({ ...formData, documentNo: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select
                  required
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Legal Opinions">Legal Opinions</SelectItem>
                    <SelectItem value="Court Judgments">Court Judgments</SelectItem>
                    <SelectItem value="Legal Precedents">Legal Precedents</SelectItem>
                    <SelectItem value="Ministry Policies">Ministry Policies</SelectItem>
                    <SelectItem value="Legal Templates">Legal Templates</SelectItem>
                    <SelectItem value="Legislation & Statutes">Legislation & Statutes</SelectItem>
                    <SelectItem value="Research Materials">Research Materials</SelectItem>
                    <SelectItem value="AG Directives">AG Directives</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Document Title *</Label>
              <Input
                id="title"
                placeholder="Enter document title"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                placeholder="Provide a detailed description of the document content"
                rows={4}
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="author">Author *</Label>
                <Input
                  id="author"
                  placeholder="Document author name"
                  required
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="securityLevel">Security Level *</Label>
                <Select
                  required
                  value={formData.securityLevel}
                  onValueChange={(value) => setFormData({ ...formData, securityLevel: value })}
                >
                  <SelectTrigger id="securityLevel">
                    <SelectValue placeholder="Select security level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Public">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-600" />
                        Public
                      </div>
                    </SelectItem>
                    <SelectItem value="Confidential">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-yellow-600" />
                        Confidential
                      </div>
                    </SelectItem>
                    <SelectItem value="Restricted">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-orange-600" />
                        Restricted
                      </div>
                    </SelectItem>
                    <SelectItem value="Top Secret">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-red-600" />
                        Top Secret
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
                {formData.securityLevel && (
                  <Badge className={`${getSecurityBadgeColor(formData.securityLevel)} border mt-2`}>
                    <Shield className="w-3 h-3 mr-1" />
                    {formData.securityLevel}
                  </Badge>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Source Information */}
        <Card>
          <CardHeader>
            <CardTitle>Source Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="sourceType">Source Type *</Label>
                <Select
                  required
                  value={formData.sourceType}
                  onValueChange={(value) => setFormData({ ...formData, sourceType: value })}
                >
                  <SelectTrigger id="sourceType">
                    <SelectValue placeholder="Select source type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Internal Opinion">Internal Opinion</SelectItem>
                    <SelectItem value="Court Judgment">Court Judgment</SelectItem>
                    <SelectItem value="External Source">External Source</SelectItem>
                    <SelectItem value="Government Gazette">Government Gazette</SelectItem>
                    <SelectItem value="Legal Research">Legal Research</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sourceDate">Source Date *</Label>
                <Input
                  id="sourceDate"
                  type="date"
                  required
                  value={formData.sourceDate}
                  onChange={(e) => setFormData({ ...formData, sourceDate: e.target.value })}
                />
              </div>
            </div>

            {formData.sourceType === 'Court Judgment' && (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="court">Court</Label>
                  <Input
                    id="court"
                    placeholder="e.g., High Court Kano"
                    value={formData.court}
                    onChange={(e) => setFormData({ ...formData, court: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="caseNumber">Case Number</Label>
                  <Input
                    id="caseNumber"
                    placeholder="e.g., CR/45/2025"
                    value={formData.caseNumber}
                    onChange={(e) => setFormData({ ...formData, caseNumber: e.target.value })}
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Tags and Linking */}
        <Card>
          <CardHeader>
            <CardTitle>Tags & Case Linking</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Tags */}
            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <div className="flex gap-2">
                <Input
                  id="tags"
                  placeholder="Add tag (e.g., Land Law, Contract)"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      addTag()
                    }
                  }}
                />
                <Button type="button" variant="outline" onClick={addTag}>
                  <Tag className="w-4 h-4 mr-2" />
                  Add
                </Button>
              </div>
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-1 hover:text-red-600"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Linked Cases */}
            <div className="space-y-2">
              <Label htmlFor="linkedCases">Linked Cases</Label>
              <div className="flex gap-2">
                <Input
                  id="linkedCases"
                  placeholder="Add case number (e.g., CR/45/2025)"
                  value={caseInput}
                  onChange={(e) => setCaseInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      addLinkedCase()
                    }
                  }}
                />
                <Button type="button" variant="outline" onClick={addLinkedCase}>
                  <LinkIcon className="w-4 h-4 mr-2" />
                  Link
                </Button>
              </div>
              {linkedCases.length > 0 && (
                <div className="space-y-2 mt-2">
                  {linkedCases.map((caseNo) => (
                    <div
                      key={caseNo}
                      className="flex items-center justify-between p-2 border border-gray-200 rounded"
                    >
                      <span className="text-sm text-gray-900">{caseNo}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeLinkedCase(caseNo)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3">
          <Link href="/legal-records">
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
            {isEditMode ? 'Update Document' : 'Upload Document'}
          </Button>
        </div>
      </form>
    </div>
  )
}

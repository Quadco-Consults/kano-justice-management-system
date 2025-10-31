"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Building2, User, Mail, Phone, FileText, Upload, AlertCircle, Loader2, CheckCircle } from "lucide-react"

export function AdvisoryRequestForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [trackingNumber, setTrackingNumber] = useState("")

  const [formData, setFormData] = useState({
    agency: "",
    contactPerson: "",
    email: "",
    phone: "",
    category: "",
    priority: "",
    subject: "",
    description: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Mock API call
    setTimeout(() => {
      if (formData.agency && formData.contactPerson && formData.email && formData.description) {
        const tracking = `LAR-${Date.now().toString().slice(-8)}`
        setTrackingNumber(tracking)
        setSuccess(true)
        setIsLoading(false)
      } else {
        setError("Please fill in all required fields")
        setIsLoading(false)
      }
    }, 1500)
  }

  if (success) {
    return (
      <div className="space-y-6">
        <Alert variant="success" className="border-green-200 bg-green-50">
          <CheckCircle className="h-5 w-5 text-green-600" />
          <AlertDescription className="text-green-800">
            Your legal advisory request has been submitted successfully!
          </AlertDescription>
        </Alert>

        <div className="space-y-6 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Request Submitted</h3>
            <p className="text-gray-600 mb-6">
              Your request has been received and assigned a tracking number
            </p>

            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-sm text-gray-600 mb-2">Your Tracking Number</p>
              <p className="text-3xl font-bold text-[#8B1538]">{trackingNumber}</p>
              <p className="text-xs text-gray-500 mt-2">Please save this number for future reference</p>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <h4 className="font-semibold text-gray-900 mb-3">What happens next?</h4>
            <ul className="space-y-3 text-sm text-gray-600 text-left">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#8B1538] text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <span>Your request will be reviewed and assigned to a legal officer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#8B1538] text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <span>You'll receive an email confirmation with your tracking number</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#8B1538] text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <span>We'll notify you of any status updates or if additional information is needed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#8B1538] text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                <span>You'll receive the legal opinion once completed</span>
              </li>
            </ul>
          </div>

          <div className="pt-6">
            <Button onClick={() => window.location.href = "/"} className="w-full sm:w-auto">
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Alert className="border-blue-200 bg-blue-50">
        <AlertCircle className="h-4 w-4 text-blue-600" />
        <AlertDescription className="text-blue-800 text-sm">
          Submit your legal advisory request and receive expert opinions from the Ministry of Justice
        </AlertDescription>
      </Alert>

      <div className="space-y-6">
        {/* Agency/Ministry */}
        <div className="space-y-2">
          <Label htmlFor="agency">
            Agency/Ministry <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Building2 className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              id="agency"
              type="text"
              placeholder="e.g., Ministry of Education"
              value={formData.agency}
              onChange={(e) => handleChange("agency", e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>

        {/* Contact Person */}
        <div className="space-y-2">
          <Label htmlFor="contactPerson">
            Contact Person <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              id="contactPerson"
              type="text"
              placeholder="Full name"
              value={formData.contactPerson}
              onChange={(e) => handleChange("contactPerson", e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>

        {/* Email and Phone */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                id="email"
                type="email"
                placeholder="contact@agency.gov.ng"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                id="phone"
                type="tel"
                placeholder="+234 XXX XXX XXXX"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>
        </div>

        {/* Category and Priority */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="category">
              Request Category <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.category}
              onValueChange={(value) => handleChange("category", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="contract-review">Contract Review</SelectItem>
                <SelectItem value="legal-opinion">Legal Opinion</SelectItem>
                <SelectItem value="compliance-advisory">Compliance Advisory</SelectItem>
                <SelectItem value="policy-review">Policy Review</SelectItem>
                <SelectItem value="litigation-advice">Litigation Advice</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="priority">
              Priority Level <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.priority}
              onValueChange={(value) => handleChange("priority", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="urgent">Urgent (Within 3 days)</SelectItem>
                <SelectItem value="high">High (Within 1 week)</SelectItem>
                <SelectItem value="medium">Medium (Within 2 weeks)</SelectItem>
                <SelectItem value="low">Low (Within 1 month)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <Label htmlFor="subject">
            Subject <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FileText className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              id="subject"
              type="text"
              placeholder="Brief subject of your request"
              value={formData.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="description">
            Detailed Description <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="description"
            placeholder="Provide detailed information about your legal advisory request..."
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
            rows={6}
            required
          />
          <p className="text-xs text-gray-500">
            Include all relevant details, background information, and specific questions
          </p>
        </div>

        {/* File Upload */}
        <div className="space-y-2">
          <Label htmlFor="documents">Supporting Documents</Label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#8B1538] transition-colors">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-gray-500">
              PDF, DOC, DOCX up to 10MB each
            </p>
            <input
              type="file"
              id="documents"
              className="hidden"
              multiple
              accept=".pdf,.doc,.docx"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full h-12 text-base"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Submitting Request...
          </>
        ) : (
          "Submit Request"
        )}
      </Button>
    </form>
  )
}

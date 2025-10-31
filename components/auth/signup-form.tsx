"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { User, Mail, Phone, Building2, Briefcase, AlertCircle, Loader2, CheckCircle } from "lucide-react"

export function SignupForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    position: "",
    reason: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Mock API call - replace with actual registration
    setTimeout(() => {
      if (formData.firstName && formData.lastName && formData.email) {
        setSuccess(true)
        setIsLoading(false)

        // Redirect to login after success
        setTimeout(() => {
          router.push("/auth/login")
        }, 3000)
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
            Your access request has been submitted successfully. An administrator will review your request and contact you via email.
          </AlertDescription>
        </Alert>

        <div className="space-y-4 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">What happens next?</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 text-left max-w-sm mx-auto">
              <li className="flex items-start gap-2">
                <span className="text-[#8B1538]">1.</span>
                <span>Your request will be reviewed by the system administrator</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B1538]">2.</span>
                <span>You'll receive an email with your login credentials</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B1538]">3.</span>
                <span>Use the credentials to access the system</span>
              </li>
            </ul>
          </div>

          <div className="pt-4">
            <Link href="/auth/login">
              <Button className="w-full">Return to Login</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Error Alert */}
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Info Alert */}
      <Alert className="border-blue-200 bg-blue-50">
        <AlertCircle className="h-4 w-4 text-blue-600" />
        <AlertDescription className="text-blue-800 text-sm">
          Access is restricted to authorized Ministry of Justice staff only. Your request will be reviewed by an administrator.
        </AlertDescription>
      </Alert>

      {/* Form Fields */}
      <div className="space-y-4">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">
              First Name <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                id="firstName"
                type="text"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">
              Last Name <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                id="lastName"
                type="text"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">
            Official Email Address <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              id="email"
              type="email"
              placeholder="your.name@kano.gov.ng"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="pl-10"
              required
            />
          </div>
          <p className="text-xs text-gray-500">Use your official ministry email</p>
        </div>

        {/* Phone */}
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
              placeholder="+234 803 456 7890"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>

        {/* Department */}
        <div className="space-y-2">
          <Label htmlFor="department">
            Department <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
              <Building2 className="h-4 w-4 text-gray-400" />
            </div>
            <Select
              value={formData.department}
              onValueChange={(value) => handleChange("department", value)}
            >
              <SelectTrigger className="pl-10">
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public-prosecution">Public Prosecution</SelectItem>
                <SelectItem value="civil-litigation">Civil Litigation</SelectItem>
                <SelectItem value="legal-advisory">Legal Advisory</SelectItem>
                <SelectItem value="legislative-drafting">Legislative Drafting</SelectItem>
                <SelectItem value="compliance">Compliance</SelectItem>
                <SelectItem value="registry">Registry</SelectItem>
                <SelectItem value="administration">Administration</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Position */}
        <div className="space-y-2">
          <Label htmlFor="position">
            Position/Title <span className="text-red-500">*</span>
          </Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Briefcase className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              id="position"
              type="text"
              placeholder="e.g. Senior State Counsel"
              value={formData.position}
              onChange={(e) => handleChange("position", e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>

        {/* Reason */}
        <div className="space-y-2">
          <Label htmlFor="reason">
            Reason for Access Request
          </Label>
          <Textarea
            id="reason"
            placeholder="Briefly explain why you need access to this system..."
            value={formData.reason}
            onChange={(e) => handleChange("reason", e.target.value)}
            rows={3}
          />
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full h-11 text-base"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Submitting Request...
          </>
        ) : (
          "Submit Access Request"
        )}
      </Button>

      {/* Login Link */}
      <div className="text-center pt-4 border-t">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-medium text-[#8B1538] hover:text-[#6B0F2A]"
          >
            Sign In
          </Link>
        </p>
      </div>
    </form>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, AlertCircle, Loader2, CheckCircle, ArrowLeft } from "lucide-react"

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Mock API call - replace with actual password reset
    setTimeout(() => {
      if (email) {
        setSuccess(true)
        setIsLoading(false)
      } else {
        setError("Please enter your email address")
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
            Password reset instructions have been sent to your email.
          </AlertDescription>
        </Alert>

        <div className="space-y-4 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <Mail className="w-8 h-8 text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Check your email</h3>
            <p className="mt-2 text-sm text-gray-600">
              We've sent password reset instructions to <strong>{email}</strong>
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 text-left max-w-sm mx-auto">
              <li className="flex items-start gap-2">
                <span className="text-[#006403]">1.</span>
                <span>Check your email inbox (and spam folder)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#006403]">2.</span>
                <span>Click the password reset link in the email</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#006403]">3.</span>
                <span>Create a new password</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 space-y-2">
            <Link href="/auth/login">
              <Button className="w-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Login
              </Button>
            </Link>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setSuccess(false)}
            >
              Try another email
            </Button>
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
          Enter your email address and we'll send you instructions to reset your password.
        </AlertDescription>
      </Alert>

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            id="email"
            type="email"
            placeholder="your.email@kano.gov.ng"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10"
            required
          />
        </div>
        <p className="text-xs text-gray-500">
          Use the email address associated with your account
        </p>
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
            Sending Instructions...
          </>
        ) : (
          "Send Reset Instructions"
        )}
      </Button>

      {/* Back to Login Link */}
      <div className="text-center pt-4 border-t">
        <Link
          href="/auth/login"
          className="text-sm font-medium text-[#006403] hover:text-[#004d02] inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Login
        </Link>
      </div>
    </form>
  )
}

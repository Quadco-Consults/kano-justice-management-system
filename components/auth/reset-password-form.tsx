"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Lock, AlertCircle, Loader2, CheckCircle, Eye, EyeOff } from "lucide-react"

interface ResetPasswordFormProps {
  token?: string
}

export function ResetPasswordForm({ token }: ResetPasswordFormProps) {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const validatePassword = (password: string): string[] => {
    const errors: string[] = []
    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long")
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter")
    }
    if (!/[a-z]/.test(password)) {
      errors.push("Password must contain at least one lowercase letter")
    }
    if (!/[0-9]/.test(password)) {
      errors.push("Password must contain at least one number")
    }
    if (!/[!@#$%^&*]/.test(password)) {
      errors.push("Password must contain at least one special character (!@#$%^&*)")
    }
    return errors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Validate passwords
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    const validationErrors = validatePassword(password)
    if (validationErrors.length > 0) {
      setError(validationErrors[0])
      setIsLoading(false)
      return
    }

    // Mock API call - replace with actual password reset
    setTimeout(() => {
      if (password && token) {
        setSuccess(true)
        setIsLoading(false)

        // Redirect to login after 3 seconds
        setTimeout(() => {
          router.push("/auth/login")
        }, 3000)
      } else {
        setError("Invalid reset token. Please request a new password reset.")
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
            Your password has been reset successfully!
          </AlertDescription>
        </Alert>

        <div className="space-y-4 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Password Reset Complete</h3>
            <p className="mt-2 text-sm text-gray-600">
              You can now sign in with your new password.
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Redirecting to login page...
            </p>
          </div>

          <div className="pt-4">
            <Link href="/auth/login">
              <Button className="w-full">Continue to Login</Button>
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
          Create a strong password with at least 8 characters, including uppercase, lowercase, numbers, and special characters.
        </AlertDescription>
      </Alert>

      {/* Password Fields */}
      <div className="space-y-4">
        {/* New Password */}
        <div className="space-y-2">
          <Label htmlFor="password">New Password</Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm New Password</Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="pl-10 pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Password Requirements */}
        <div className="text-xs text-gray-600 space-y-1">
          <p className="font-medium">Password must contain:</p>
          <ul className="space-y-1 ml-4">
            <li className={password.length >= 8 ? "text-green-600" : ""}>
              • At least 8 characters
            </li>
            <li className={/[A-Z]/.test(password) ? "text-green-600" : ""}>
              • One uppercase letter
            </li>
            <li className={/[a-z]/.test(password) ? "text-green-600" : ""}>
              • One lowercase letter
            </li>
            <li className={/[0-9]/.test(password) ? "text-green-600" : ""}>
              • One number
            </li>
            <li className={/[!@#$%^&*]/.test(password) ? "text-green-600" : ""}>
              • One special character (!@#$%^&*)
            </li>
          </ul>
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
            Resetting Password...
          </>
        ) : (
          "Reset Password"
        )}
      </Button>

      {/* Back to Login Link */}
      <div className="text-center pt-4 border-t">
        <p className="text-sm text-gray-600">
          Remember your password?{" "}
          <Link
            href="/auth/login"
            className="font-medium text-[#006403] hover:text-[#004d02]"
          >
            Sign In
          </Link>
        </p>
      </div>
    </form>
  )
}

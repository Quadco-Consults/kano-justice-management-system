"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuthStore } from "@/lib/stores/authStore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, Lock, AlertCircle, Loader2 } from "lucide-react"

export function LoginForm() {
  const router = useRouter()
  const { login } = useAuthStore()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Mock authentication - replace with actual API call
    setTimeout(() => {
      // Simple validation
      if (email && password) {
        const mockUser = {
          id: "1",
          email: email,
          firstName: "Musa",
          lastName: "Ibrahim",
          phoneNumber: "+234 803 456 7890",
          roleId: "1",
          role: {
            id: "1",
            name: "Attorney General",
            description: "Attorney General of Kano State",
            permissions: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
          departmentId: "1",
          department: {
            id: "1",
            name: "Office of the Attorney General",
            description: "Executive Office",
            employeeCount: 15,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
          status: "active" as const,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }

        const mockToken = "mock-jwt-token-" + Date.now()
        login(mockUser, mockToken)
        router.push("/dashboard")
      } else {
        setError("Please enter valid credentials")
        setIsLoading(false)
      }
    }, 1500)
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

      {/* Form Fields */}
      <div className="space-y-4">
        {/* Email */}
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
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="remember"
            checked={rememberMe}
            onCheckedChange={(checked) => setRememberMe(checked as boolean)}
          />
          <Label
            htmlFor="remember"
            className="text-sm font-normal cursor-pointer"
          >
            Remember me
          </Label>
        </div>

        <Link
          href="/auth/forgot-password"
          className="text-sm font-medium text-[#006403] hover:text-[#004d02]"
        >
          Forgot password?
        </Link>
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
            Signing in...
          </>
        ) : (
          "Sign In"
        )}
      </Button>

      {/* Demo Info */}
      <div className="text-center">
        <p className="text-sm text-gray-500">
          Demo: Use any email and password to login
        </p>
      </div>

      {/* Sign Up Link */}
      <div className="text-center pt-4 border-t">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/auth/signup"
            className="font-medium text-[#006403] hover:text-[#004d02]"
          >
            Request Access
          </Link>
        </p>
      </div>
    </form>
  )
}

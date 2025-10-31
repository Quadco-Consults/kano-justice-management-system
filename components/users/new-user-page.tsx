"use client"

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
import { Send } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function NewUserPage() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted')
    router.push('/users')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/users">
            <Button variant="outline" size="sm">← Back</Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Add New User</h1>
            <p className="text-gray-600">Create a new user account</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  placeholder="Enter first name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  placeholder="Enter last name"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="user@justice.kano.gov.ng"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+234 803 123 4567"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="employeeId">Employee ID *</Label>
              <Input
                id="employeeId"
                placeholder="e.g., KSMOJ-2025-001"
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Employment Details */}
        <Card>
          <CardHeader>
            <CardTitle>Employment Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="department">Department *</Label>
                <Select required>
                  <SelectTrigger id="department">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="prosecution">Public Prosecution</SelectItem>
                    <SelectItem value="civil">Civil Litigation</SelectItem>
                    <SelectItem value="advisory">Legal Advisory</SelectItem>
                    <SelectItem value="legislative">Legislative Drafting</SelectItem>
                    <SelectItem value="compliance">Compliance & Statutory</SelectItem>
                    <SelectItem value="records">Legal Records</SelectItem>
                    <SelectItem value="admin">Administration</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role *</Label>
                <Select required>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="super-admin">Super Administrator</SelectItem>
                    <SelectItem value="attorney-general">Attorney General</SelectItem>
                    <SelectItem value="director-prosecution">Director of Public Prosecutions</SelectItem>
                    <SelectItem value="director-civil">Director of Civil Litigation</SelectItem>
                    <SelectItem value="senior-counsel">Senior State Counsel</SelectItem>
                    <SelectItem value="state-counsel">State Counsel</SelectItem>
                    <SelectItem value="legal-officer">Legal Officer</SelectItem>
                    <SelectItem value="legislative-officer">Legislative Officer</SelectItem>
                    <SelectItem value="compliance-officer">Compliance Officer</SelectItem>
                    <SelectItem value="registry-staff">Registry Staff</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="supervisor">Supervisor</Label>
                <Select>
                  <SelectTrigger id="supervisor">
                    <SelectValue placeholder="Select supervisor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Barr. Ahmad Sani</SelectItem>
                    <SelectItem value="2">Barr. Halima Mohammed</SelectItem>
                    <SelectItem value="3">Barr. Fatima Ibrahim</SelectItem>
                    <SelectItem value="4">Barr. Ibrahim Bello</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="officeLocation">Office Location</Label>
                <Input
                  id="officeLocation"
                  placeholder="e.g., Block A, 3rd Floor"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateJoined">Date Joined *</Label>
              <Input
                id="dateJoined"
                type="date"
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Account Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="status">Account Status *</Label>
              <Select required defaultValue="active">
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tempPassword">Temporary Password *</Label>
              <Input
                id="tempPassword"
                type="password"
                placeholder="Auto-generated password"
                required
              />
              <p className="text-xs text-gray-500">
                User will be required to change password on first login
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <Card>
          <CardHeader>
            <CardTitle>Additional Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                placeholder="Any additional notes about this user"
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3">
          <Link href="/users">
            <Button type="button" variant="outline">Cancel</Button>
          </Link>
          <Button type="submit">
            <Send className="w-4 h-4 mr-2" />
            Create User
          </Button>
        </div>
      </form>
    </div>
  )
}

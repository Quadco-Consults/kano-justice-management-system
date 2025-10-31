"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Shield,
  Users,
  Check,
  Settings,
  Save,
  User,
  Mail
} from "lucide-react"
import Link from "next/link"

const mockRole = {
  id: 5,
  name: 'Legal Officer',
  description: 'Handle assigned cases and advisory requests',
  userCount: 28,
  permissions: {
    'Legal Advisory': [
      { id: 'view_advisory', label: 'View Legal Advisory Requests', enabled: true },
      { id: 'create_advisory', label: 'Create Advisory Requests', enabled: true },
      { id: 'draft_opinions', label: 'Draft Legal Opinions', enabled: true },
      { id: 'approve_opinions', label: 'Approve Legal Opinions', enabled: false }
    ],
    'Prosecution': [
      { id: 'view_prosecution', label: 'View Prosecution Cases', enabled: true },
      { id: 'manage_assigned_cases', label: 'Manage Assigned Cases', enabled: true },
      { id: 'file_charges', label: 'File Charges', enabled: true },
      { id: 'approve_prosecution', label: 'Approve Case Actions', enabled: false }
    ],
    'Civil Litigation': [
      { id: 'view_civil', label: 'View Civil Cases', enabled: true },
      { id: 'manage_civil_cases', label: 'Manage Assigned Civil Cases', enabled: true },
      { id: 'approve_settlements', label: 'Approve Settlements', enabled: false }
    ],
    'Documents': [
      { id: 'view_documents', label: 'View Documents', enabled: true },
      { id: 'upload_documents', label: 'Upload Documents', enabled: true },
      { id: 'delete_documents', label: 'Delete Documents', enabled: false },
      { id: 'approve_documents', label: 'Approve Documents', enabled: false }
    ],
    'Reports': [
      { id: 'view_reports', label: 'View Reports', enabled: true },
      { id: 'generate_reports', label: 'Generate Reports', enabled: true },
      { id: 'export_reports', label: 'Export Reports', enabled: true }
    ],
    'Administration': [
      { id: 'view_users', label: 'View Users', enabled: false },
      { id: 'manage_users', label: 'Manage Users', enabled: false },
      { id: 'view_roles', label: 'View Roles', enabled: false },
      { id: 'manage_roles', label: 'Manage Roles', enabled: false },
      { id: 'system_settings', label: 'System Settings', enabled: false }
    ]
  },
  users: [
    {
      id: 1,
      name: 'Fatima Ibrahim',
      email: 'fatima.ibrahim@justice.kano.gov.ng',
      department: 'Legal Advisory',
      status: 'active'
    },
    {
      id: 2,
      name: 'Hassan Mohammed',
      email: 'hassan.mohammed@justice.kano.gov.ng',
      department: 'Public Prosecution',
      status: 'active'
    },
    {
      id: 3,
      name: 'Aisha Bello',
      email: 'aisha.bello@justice.kano.gov.ng',
      department: 'Civil Litigation',
      status: 'active'
    },
    {
      id: 4,
      name: 'Yusuf Ali',
      email: 'yusuf.ali@justice.kano.gov.ng',
      department: 'Legal Advisory',
      status: 'active'
    },
    {
      id: 5,
      name: 'Khadija Sani',
      email: 'khadija.sani@justice.kano.gov.ng',
      department: 'Public Prosecution',
      status: 'active'
    }
  ]
}

export function RoleDetail() {
  const [roleName, setRoleName] = useState(mockRole.name)
  const [description, setDescription] = useState(mockRole.description)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/roles">
            <Button variant="outline" size="sm">← Back</Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{mockRole.name}</h1>
            <p className="text-gray-600">{mockRole.userCount} users assigned to this role</p>
          </div>
        </div>
        <Button>
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{mockRole.userCount}</p>
              </div>
              <Users className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Permissions</p>
                <p className="text-2xl font-bold text-[#006403]">
                  {Object.values(mockRole.permissions).flat().filter(p => p.enabled).length}
                </p>
              </div>
              <Shield className="w-8 h-8 text-[#006403]" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Permission Categories</p>
                <p className="text-2xl font-bold text-blue-600">
                  {Object.keys(mockRole.permissions).length}
                </p>
              </div>
              <Settings className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="details" className="space-y-6">
        <TabsList>
          <TabsTrigger value="details">Role Details</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
          <TabsTrigger value="users">Assigned Users</TabsTrigger>
        </TabsList>

        {/* Role Details Tab */}
        <TabsContent value="details" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="role-name">Role Name</Label>
                <Input
                  id="role-name"
                  value={roleName}
                  onChange={(e) => setRoleName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role-description">Description</Label>
                <Textarea
                  id="role-description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Permissions Tab */}
        <TabsContent value="permissions" className="space-y-6">
          {Object.entries(mockRole.permissions).map(([category, permissions]) => (
            <Card key={category}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{category}</CardTitle>
                  <Badge variant="outline">
                    {permissions.filter(p => p.enabled).length} / {permissions.length} enabled
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {permissions.map((permission) => (
                    <div
                      key={permission.id}
                      className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-[#006403] transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <Checkbox
                          id={permission.id}
                          checked={permission.enabled}
                        />
                        <Label
                          htmlFor={permission.id}
                          className="text-sm font-normal cursor-pointer"
                        >
                          {permission.label}
                        </Label>
                      </div>
                      {permission.enabled && (
                        <Check className="w-5 h-5 text-green-600" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Assigned Users Tab */}
        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Users with this Role</CardTitle>
                <Button size="sm">
                  <Users className="w-4 h-4 mr-2" />
                  Assign Users
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockRole.users.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#006403] transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#006403]/10 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-[#006403]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <p className="font-semibold text-gray-900">{user.name}</p>
                          <Badge variant="success">{user.status}</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Mail className="w-4 h-4" />
                            <span>{user.email}</span>
                          </div>
                          <span>{user.department}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">View User</Button>
                      <Button variant="ghost" size="sm">Remove</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

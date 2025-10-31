"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Plus, MoreVertical, Check } from "lucide-react"
import Link from "next/link"

const mockRoles = [
  {
    id: 1,
    name: 'Super Administrator',
    description: 'Full system access and control',
    userCount: 2,
    permissions: ['all'],
  },
  {
    id: 2,
    name: 'Attorney General',
    description: 'Executive oversight and final approvals',
    userCount: 1,
    permissions: ['view_all', 'approve_legal_opinions', 'view_reports', 'strategic_oversight'],
  },
  {
    id: 3,
    name: 'Director of Public Prosecutions',
    description: 'Manage prosecution operations',
    userCount: 1,
    permissions: ['manage_prosecution', 'assign_cases', 'view_prosecution_reports', 'approve_case_actions'],
  },
  {
    id: 4,
    name: 'Director of Civil Litigation',
    description: 'Manage civil litigation matters',
    userCount: 1,
    permissions: ['manage_civil_cases', 'approve_settlements', 'assign_counsel', 'view_litigation_reports'],
  },
  {
    id: 5,
    name: 'Legal Officer',
    description: 'Handle assigned cases and advisory requests',
    userCount: 28,
    permissions: ['manage_assigned_cases', 'draft_opinions', 'upload_documents', 'view_case_files'],
  },
  {
    id: 6,
    name: 'State Counsel',
    description: 'Senior legal officer with enhanced permissions',
    userCount: 8,
    permissions: ['manage_cases', 'review_opinions', 'mentor_officers', 'court_representation'],
  },
  {
    id: 7,
    name: 'Legislative Officer',
    description: 'Draft bills and legislative documents',
    userCount: 4,
    permissions: ['draft_legislation', 'manage_bills', 'stakeholder_consultation', 'view_legislative_reports'],
  },
  {
    id: 8,
    name: 'Compliance Officer',
    description: 'Manage statutory submissions',
    userCount: 3,
    permissions: ['manage_submissions', 'track_deadlines', 'prepare_compliance_reports'],
  },
  {
    id: 9,
    name: 'Registry Staff',
    description: 'Administrative and clerical support',
    userCount: 6,
    permissions: ['file_cases', 'manage_documents', 'data_entry', 'basic_scheduling'],
  },
]

export function RolesList() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Roles & Permissions</h1>
          <p className="text-gray-600">Manage user roles and access control</p>
        </div>
        <Link href="/roles/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Create Role
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Roles</p>
                <p className="text-2xl font-bold text-gray-900">{mockRoles.length}</p>
              </div>
              <Shield className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">System Roles</p>
                <p className="text-2xl font-bold text-blue-600">5</p>
              </div>
              <Shield className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Custom Roles</p>
                <p className="text-2xl font-bold text-[#006403]">4</p>
              </div>
              <Shield className="w-8 h-8 text-[#006403]" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-green-600">
                  {mockRoles.reduce((sum, role) => sum + role.userCount, 0)}
                </p>
              </div>
              <Users className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Roles List */}
      <div className="grid grid-cols-1 gap-4">
        {mockRoles.map((role) => (
          <Card key={role.id} className="hover:border-[#006403] hover:shadow-md transition-all">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-[#006403]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-[#006403]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{role.name}</h3>
                      <Badge variant="outline">
                        <Users className="w-3 h-3 mr-1" />
                        {role.userCount} users
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{role.description}</p>

                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Key Permissions:</p>
                      <div className="flex flex-wrap gap-2">
                        {role.permissions.slice(0, 4).map((permission, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            <Check className="w-3 h-3 mr-1" />
                            {permission.replace(/_/g, ' ')}
                          </Badge>
                        ))}
                        {role.permissions.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{role.permissions.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link href={`/roles/${role.id}`}>
                    <Button variant="outline" size="sm">Edit</Button>
                  </Link>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

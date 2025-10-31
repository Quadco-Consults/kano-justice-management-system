"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Filter, Users, Mail, Shield, MoreVertical } from "lucide-react"
import Link from "next/link"

const mockUsers = [
  {
    id: 1,
    firstName: 'Fatima',
    lastName: 'Ibrahim',
    email: 'fatima.ibrahim@justice.kano.gov.ng',
    role: 'Legal Officer',
    department: 'Legal Advisory',
    status: 'active',
    lastLogin: '2025-10-31T10:30:00',
  },
  {
    id: 2,
    firstName: 'Ahmad',
    lastName: 'Sani',
    email: 'ahmad.sani@justice.kano.gov.ng',
    role: 'Senior State Counsel',
    department: 'Public Prosecution',
    status: 'active',
    lastLogin: '2025-10-31T09:15:00',
  },
  {
    id: 3,
    firstName: 'Halima',
    lastName: 'Mohammed',
    email: 'halima.mohammed@justice.kano.gov.ng',
    role: 'Legal Officer',
    department: 'Civil Litigation',
    status: 'active',
    lastLogin: '2025-10-30T16:45:00',
  },
  {
    id: 4,
    firstName: 'Ibrahim',
    lastName: 'Bello',
    email: 'ibrahim.bello@justice.kano.gov.ng',
    role: 'Director',
    department: 'Legislative Drafting',
    status: 'active',
    lastLogin: '2025-10-30T14:20:00',
  },
  {
    id: 5,
    firstName: 'Maryam',
    lastName: 'Usman',
    email: 'maryam.usman@justice.kano.gov.ng',
    role: 'State Counsel',
    department: 'Public Prosecution',
    status: 'inactive',
    lastLogin: '2025-10-25T11:30:00',
  },
]

export function UsersList() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600">Manage system users and access control</p>
        </div>
        <Link href="/users/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add User
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">47</p>
              </div>
              <Users className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Users</p>
                <p className="text-2xl font-bold text-green-600">42</p>
              </div>
              <Users className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Inactive Users</p>
                <p className="text-2xl font-bold text-orange-600">5</p>
              </div>
              <Users className="w-8 h-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Requests</p>
                <p className="text-2xl font-bold text-[#006403]">3</p>
              </div>
              <Mail className="w-8 h-8 text-[#006403]" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by name, email, or department..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Users List */}
      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockUsers.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#006403] hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 bg-[#006403]/10 rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold text-[#006403]">
                      {user.firstName[0]}{user.lastName[0]}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-gray-900">
                        {user.firstName} {user.lastName}
                      </h3>
                      <Badge variant={user.status === 'active' ? 'success' : 'secondary'}>
                        {user.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        <span>{user.email}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Shield className="w-4 h-4" />
                        <span>{user.role}</span>
                      </div>
                      <div>
                        <span>{user.department}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Last login: {new Date(user.lastLogin).toLocaleString('en-NG')}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link href={`/users/${user.id}`}>
                    <Button variant="outline" size="sm">View</Button>
                  </Link>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

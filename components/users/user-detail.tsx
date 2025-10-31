"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  User,
  Mail,
  Phone,
  Building2,
  Shield,
  Calendar,
  Clock,
  Activity,
  FileText,
  Settings,
  Key,
  AlertCircle
} from "lucide-react"
import Link from "next/link"

const mockUser = {
  id: 1,
  firstName: 'Fatima',
  lastName: 'Ibrahim',
  email: 'fatima.ibrahim@justice.kano.gov.ng',
  phone: '+234 803 123 4567',
  role: 'Legal Officer',
  department: 'Legal Advisory',
  status: 'active',
  dateJoined: '2023-06-15',
  lastLogin: '2025-10-31T10:30:00',
  employeeId: 'KSMOJ-2023-045',
  officeLocation: 'Block A, 3rd Floor',
  supervisor: 'Barr. Ahmad Sani',
  permissions: [
    'View Legal Advisory Requests',
    'Draft Legal Opinions',
    'Upload Documents',
    'View Case Files',
    'Comment on Cases',
    'Manage Assigned Cases'
  ],
  recentActivity: [
    {
      id: 1,
      action: 'Submitted legal opinion',
      case: 'LAR-20251028-001',
      timestamp: '2025-10-31T10:15:00'
    },
    {
      id: 2,
      action: 'Uploaded document',
      case: 'CIV-20251024-002',
      timestamp: '2025-10-31T09:30:00'
    },
    {
      id: 3,
      action: 'Commented on case',
      case: 'PROS-20251022-004',
      timestamp: '2025-10-30T16:45:00'
    },
    {
      id: 4,
      action: 'Marked case as in-progress',
      case: 'LAR-20251025-003',
      timestamp: '2025-10-30T14:20:00'
    }
  ],
  assignments: [
    {
      id: 1,
      caseNo: 'LAR-20251028-001',
      title: 'Contract Review - School Construction',
      type: 'Legal Advisory',
      status: 'in-progress',
      assignedDate: '2025-10-28'
    },
    {
      id: 2,
      caseNo: 'LAR-20251025-003',
      title: 'MOU Review - Health Partnership',
      type: 'Legal Advisory',
      status: 'pending',
      assignedDate: '2025-10-25'
    },
    {
      id: 3,
      caseNo: 'CIV-20251024-002',
      title: 'Land Dispute - Industrial Area',
      type: 'Civil Litigation',
      status: 'in-progress',
      assignedDate: '2025-10-24'
    }
  ]
}

export function UserDetail() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/users">
            <Button variant="outline" size="sm">← Back</Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {mockUser.firstName} {mockUser.lastName}
            </h1>
            <p className="text-gray-600">{mockUser.employeeId}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Edit User
          </Button>
          <Button variant="outline">
            <Key className="w-4 h-4 mr-2" />
            Reset Password
          </Button>
          <Button variant="destructive">
            <AlertCircle className="w-4 h-4 mr-2" />
            Deactivate
          </Button>
        </div>
      </div>

      {/* User Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#8B1538]/10 rounded-full flex items-center justify-center">
                <span className="text-xl font-semibold text-[#8B1538]">
                  {mockUser.firstName[0]}{mockUser.lastName[0]}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <Badge variant="success">{mockUser.status}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Department</p>
                <p className="font-semibold text-gray-900">{mockUser.department}</p>
              </div>
              <Building2 className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Role</p>
                <p className="font-semibold text-gray-900">{mockUser.role}</p>
              </div>
              <Shield className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Cases</p>
                <p className="text-2xl font-bold text-[#8B1538]">
                  {mockUser.assignments.length}
                </p>
              </div>
              <FileText className="w-8 h-8 text-[#8B1538]" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="details" className="space-y-6">
        <TabsList>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="activity">Activity Log</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
        </TabsList>

        {/* Details Tab */}
        <TabsContent value="details" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <User className="w-4 h-4" />
                    <span>Full Name</span>
                  </div>
                  <p className="font-medium text-gray-900">
                    {mockUser.firstName} {mockUser.lastName}
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </div>
                  <p className="font-medium text-gray-900">{mockUser.email}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>Phone</span>
                  </div>
                  <p className="font-medium text-gray-900">{mockUser.phone}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Building2 className="w-4 h-4" />
                    <span>Office Location</span>
                  </div>
                  <p className="font-medium text-gray-900">{mockUser.officeLocation}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Employment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Shield className="w-4 h-4" />
                    <span>Role</span>
                  </div>
                  <p className="font-medium text-gray-900">{mockUser.role}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Building2 className="w-4 h-4" />
                    <span>Department</span>
                  </div>
                  <p className="font-medium text-gray-900">{mockUser.department}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <User className="w-4 h-4" />
                    <span>Supervisor</span>
                  </div>
                  <p className="font-medium text-gray-900">{mockUser.supervisor}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>Date Joined</span>
                  </div>
                  <p className="font-medium text-gray-900">
                    {new Date(mockUser.dateJoined).toLocaleDateString('en-NG', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Last Login</span>
                  </div>
                  <p className="font-medium text-gray-900">
                    {new Date(mockUser.lastLogin).toLocaleString('en-NG')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Assignments Tab */}
        <TabsContent value="assignments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockUser.assignments.map((assignment) => (
                  <div
                    key={assignment.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#8B1538] transition-all"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <p className="font-semibold text-gray-900">{assignment.caseNo}</p>
                        <Badge variant="outline">{assignment.type}</Badge>
                        <Badge
                          variant={
                            assignment.status === 'in-progress'
                              ? 'default'
                              : assignment.status === 'completed'
                              ? 'success'
                              : 'secondary'
                          }
                        >
                          {assignment.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{assignment.title}</p>
                      <p className="text-xs text-gray-500">
                        Assigned: {new Date(assignment.assignedDate).toLocaleDateString('en-NG')}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">View Case</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Activity Log Tab */}
        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockUser.recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-4 pb-4 border-b border-gray-200 last:border-0"
                  >
                    <div className="w-10 h-10 bg-[#8B1538]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Activity className="w-5 h-5 text-[#8B1538]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-600">Case: {activity.case}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(activity.timestamp).toLocaleString('en-NG')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Permissions Tab */}
        <TabsContent value="permissions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Permissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {mockUser.permissions.map((permission, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <Shield className="w-4 h-4 text-[#8B1538]" />
                    <span className="text-sm text-gray-900">{permission}</span>
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

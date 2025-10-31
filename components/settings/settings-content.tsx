"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Settings,
  Building2,
  Bell,
  Shield,
  Database,
  Mail,
  Clock,
  FileText,
  Save
} from "lucide-react"

export function SettingsContent() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [autoAssignment, setAutoAssignment] = useState(false)
  const [twoFactorAuth, setTwoFactorAuth] = useState(false)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">System Settings</h1>
        <p className="text-gray-600">Configure system preferences and defaults</p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid grid-cols-5 w-full max-w-3xl">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="workflow">Workflow</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#006403]/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#006403]" />
                </div>
                <div>
                  <CardTitle>Organization Information</CardTitle>
                  <CardDescription>Basic details about the ministry</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="org-name">Organization Name</Label>
                  <Input id="org-name" defaultValue="Kano State Ministry of Justice" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org-code">Organization Code</Label>
                  <Input id="org-code" defaultValue="KSMOJ" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="org-address">Address</Label>
                <Input id="org-address" defaultValue="State Secretariat Complex, Kano" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="org-phone">Phone</Label>
                  <Input id="org-phone" defaultValue="+234 64 123 4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org-email">Email</Label>
                  <Input id="org-email" defaultValue="info@justice.kano.gov.ng" />
                </div>
              </div>
              <div className="flex justify-end pt-4">
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <CardTitle>Business Hours</CardTitle>
                  <CardDescription>Define working hours and holidays</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="work-start">Work Start Time</Label>
                  <Input id="work-start" type="time" defaultValue="08:00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="work-end">Work End Time</Label>
                  <Input id="work-end" type="time" defaultValue="17:00" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Working Days</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Monday</Badge>
                  <Badge variant="secondary">Tuesday</Badge>
                  <Badge variant="secondary">Wednesday</Badge>
                  <Badge variant="secondary">Thursday</Badge>
                  <Badge variant="secondary">Friday</Badge>
                  <Badge variant="outline">Saturday</Badge>
                  <Badge variant="outline">Sunday</Badge>
                </div>
              </div>
              <div className="flex justify-end pt-4">
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Bell className="w-5 h-5 text-[#E67E22]" />
                </div>
                <div>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Manage how you receive notifications</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Email Notifications</p>
                  <p className="text-sm text-gray-600">Receive notifications via email</p>
                </div>
                <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Push Notifications</p>
                  <p className="text-sm text-gray-600">Receive browser push notifications</p>
                </div>
                <Switch checked={pushNotifications} onCheckedChange={setPushNotifications} />
              </div>
              <div className="space-y-3 pt-4 border-t">
                <Label>Email Notification Events</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">New case assignments</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Case status updates</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Upcoming hearings</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Overdue tasks</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Document approvals</span>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              <div className="flex justify-end pt-4">
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Configure security and access control</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                  <p className="text-sm text-gray-600">Require 2FA for all users</p>
                </div>
                <Switch checked={twoFactorAuth} onCheckedChange={setTwoFactorAuth} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                <Input id="session-timeout" type="number" defaultValue="30" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-expiry">Password Expiry (days)</Label>
                <Input id="password-expiry" type="number" defaultValue="90" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="min-password">Minimum Password Length</Label>
                <Input id="min-password" type="number" defaultValue="8" />
              </div>
              <div className="space-y-3 pt-4 border-t">
                <Label>Password Requirements</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Require uppercase letters</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Require lowercase letters</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Require numbers</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Require special characters</span>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              <div className="flex justify-end pt-4">
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Workflow Settings */}
        <TabsContent value="workflow" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <CardTitle>Workflow Automation</CardTitle>
                  <CardDescription>Configure automated workflow rules</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Auto-assign Cases</p>
                  <p className="text-sm text-gray-600">Automatically assign cases based on workload</p>
                </div>
                <Switch checked={autoAssignment} onCheckedChange={setAutoAssignment} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="advisory-sla">Legal Advisory SLA (days)</Label>
                <Input id="advisory-sla" type="number" defaultValue="7" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="prosecution-sla">Prosecution Response SLA (days)</Label>
                <Input id="prosecution-sla" type="number" defaultValue="14" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="litigation-sla">Civil Litigation SLA (days)</Label>
                <Input id="litigation-sla" type="number" defaultValue="21" />
              </div>
              <div className="space-y-3 pt-4 border-t">
                <Label>Approval Requirements</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Require supervisor approval for case closure</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Require Attorney General approval for settlements</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Require dual approval for bill drafting</span>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              <div className="flex justify-end pt-4">
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* System Settings */}
        <TabsContent value="system" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <CardTitle>System Configuration</CardTitle>
                  <CardDescription>Advanced system settings</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="backup-frequency">Backup Frequency</Label>
                <Input id="backup-frequency" defaultValue="Daily at 2:00 AM" readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="data-retention">Data Retention Period (years)</Label>
                <Input id="data-retention" type="number" defaultValue="7" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="max-upload">Maximum File Upload Size (MB)</Label>
                <Input id="max-upload" type="number" defaultValue="50" />
              </div>
              <div className="space-y-3 pt-4 border-t">
                <Label>System Information</Label>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">System Version</span>
                    <span className="font-medium text-gray-900">1.0.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Database Status</span>
                    <Badge variant="success">Healthy</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Backup</span>
                    <span className="font-medium text-gray-900">2025-10-31 02:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Storage Used</span>
                    <span className="font-medium text-gray-900">24.3 GB / 100 GB</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end pt-4">
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <CardTitle>Email Configuration</CardTitle>
                  <CardDescription>SMTP settings for outgoing emails</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="smtp-host">SMTP Host</Label>
                <Input id="smtp-host" defaultValue="smtp.gmail.com" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="smtp-port">SMTP Port</Label>
                  <Input id="smtp-port" type="number" defaultValue="587" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtp-encryption">Encryption</Label>
                  <Input id="smtp-encryption" defaultValue="TLS" readOnly />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="smtp-user">SMTP Username</Label>
                <Input id="smtp-user" defaultValue="noreply@justice.kano.gov.ng" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="smtp-from">From Email</Label>
                <Input id="smtp-from" defaultValue="Kano Ministry of Justice <noreply@justice.kano.gov.ng>" />
              </div>
              <div className="flex gap-2 pt-4">
                <Button variant="outline">Test Connection</Button>
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

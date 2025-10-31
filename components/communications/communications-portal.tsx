"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MessageSquare,
  FileText,
  CheckCircle,
  Users,
  Bell,
  Clock,
  TrendingUp,
} from "lucide-react"
import { CorrespondencesTab } from "./correspondences-tab"
import { DocumentSharingTab } from "./document-sharing-tab"
import { ApprovalWorkflowTab } from "./approval-workflow-tab"
import { StakeholderActivityTab } from "./stakeholder-activity-tab"

export function CommunicationsPortal() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Communication Portal</h1>
        <p className="text-gray-600">
          Centralized platform for stakeholder communication, document sharing, and approval workflows
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Unread Messages</p>
                <p className="text-2xl font-bold text-blue-600">24</p>
              </div>
              <MessageSquare className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Approvals</p>
                <p className="text-2xl font-bold text-orange-600">12</p>
              </div>
              <Clock className="w-8 h-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Shared Documents</p>
                <p className="text-2xl font-bold text-[#8B1538]">156</p>
              </div>
              <FileText className="w-8 h-8 text-[#8B1538]" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Stakeholders</p>
                <p className="text-2xl font-bold text-green-600">47</p>
              </div>
              <Users className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Portal Tabs */}
      <Tabs defaultValue="correspondences" className="space-y-6">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="correspondences" className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            All Correspondences
          </TabsTrigger>
          <TabsTrigger value="documents" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Document Sharing
          </TabsTrigger>
          <TabsTrigger value="approvals" className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            Approval Workflows
          </TabsTrigger>
          <TabsTrigger value="activity" className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Stakeholder Activity
          </TabsTrigger>
        </TabsList>

        <TabsContent value="correspondences">
          <CorrespondencesTab />
        </TabsContent>

        <TabsContent value="documents">
          <DocumentSharingTab />
        </TabsContent>

        <TabsContent value="approvals">
          <ApprovalWorkflowTab />
        </TabsContent>

        <TabsContent value="activity">
          <StakeholderActivityTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}

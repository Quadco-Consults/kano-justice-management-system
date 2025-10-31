"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  CheckCircle,
  Clock,
  XCircle,
  AlertTriangle,
  User,
  Building2,
  FileText,
  ArrowRight,
  Plus,
  Search,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const mockApprovalWorkflows = [
  {
    id: 1,
    workflowNo: 'APV-2025-0012',
    title: 'Land Acquisition Framework Amendment',
    type: 'Legal Opinion',
    requestedBy: 'Barr. Fatima Ibrahim',
    requestDate: '2025-10-28',
    currentStage: 2,
    totalStages: 4,
    status: 'pending',
    priority: 'high',
    dueDate: '2025-11-05',
    stages: [
      {
        id: 1,
        name: 'Director Review',
        approver: 'Director - Legal Services',
        status: 'approved',
        date: '2025-10-29',
        comments: 'Approved. Forwarding to Attorney General.',
      },
      {
        id: 2,
        name: 'Attorney General Approval',
        approver: 'Attorney General',
        status: 'pending',
        date: null,
        comments: null,
      },
      {
        id: 3,
        name: 'Governor\'s Office Review',
        approver: 'Chief of Staff - Governor\'s Office',
        status: 'waiting',
        date: null,
        comments: null,
      },
      {
        id: 4,
        name: 'Final Approval',
        approver: 'His Excellency, The Governor',
        status: 'waiting',
        date: null,
        comments: null,
      },
    ],
  },
  {
    id: 2,
    workflowNo: 'APV-2025-0013',
    title: 'Criminal Justice Reform Bill - Public Consultation',
    type: 'Legislative Approval',
    requestedBy: 'Barr. Ibrahim Sani',
    requestDate: '2025-10-25',
    currentStage: 4,
    totalStages: 4,
    status: 'approved',
    priority: 'normal',
    dueDate: '2025-11-01',
    stages: [
      {
        id: 1,
        name: 'Legal Review',
        approver: 'Director - Legal Services',
        status: 'approved',
        date: '2025-10-26',
        comments: 'Legally compliant. Approved.',
      },
      {
        id: 2,
        name: 'Attorney General Approval',
        approver: 'Attorney General',
        status: 'approved',
        date: '2025-10-27',
        comments: 'Approved for public consultation.',
      },
      {
        id: 3,
        name: 'Governor\'s Office Review',
        approver: 'Chief of Staff - Governor\'s Office',
        status: 'approved',
        date: '2025-10-29',
        comments: 'Governor's office approves public consultation.',
      },
      {
        id: 4,
        name: 'Final Approval',
        approver: 'His Excellency, The Governor',
        status: 'approved',
        date: '2025-10-30',
        comments: 'Approved. Proceed with public consultation.',
      },
    ],
  },
  {
    id: 3,
    workflowNo: 'APV-2025-0014',
    title: 'Civil Service Employment Contract Review',
    type: 'Contract Approval',
    requestedBy: 'Barr. Maryam Usman',
    requestDate: '2025-10-30',
    currentStage: 1,
    totalStages: 3,
    status: 'pending',
    priority: 'urgent',
    dueDate: '2025-11-03',
    stages: [
      {
        id: 1,
        name: 'Legal Review',
        approver: 'Director - Legal Services',
        status: 'pending',
        date: null,
        comments: null,
      },
      {
        id: 2,
        name: 'Attorney General Approval',
        approver: 'Attorney General',
        status: 'waiting',
        date: null,
        comments: null,
      },
      {
        id: 3,
        name: 'Head of Service Approval',
        approver: 'Head of Civil Service',
        status: 'waiting',
        date: null,
        comments: null,
      },
    ],
  },
]

export function ApprovalWorkflowTab() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isNewWorkflowDialogOpen, setIsNewWorkflowDialogOpen] = useState(false)
  const [selectedWorkflow, setSelectedWorkflow] = useState<typeof mockApprovalWorkflows[0] | null>(null)

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search approval workflows..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Dialog open={isNewWorkflowDialogOpen} onOpenChange={setIsNewWorkflowDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  New Workflow
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Create Approval Workflow</DialogTitle>
                  <DialogDescription>
                    Set up a new approval workflow for document or decision requiring multi-level approvals
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Workflow Type *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="legal-opinion">Legal Opinion</SelectItem>
                          <SelectItem value="legislative">Legislative Approval</SelectItem>
                          <SelectItem value="contract">Contract Approval</SelectItem>
                          <SelectItem value="policy">Policy Review</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Priority *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgent">Urgent</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="normal">Normal</SelectItem>
                          <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Title/Description *</Label>
                    <Input placeholder="Enter workflow title" />
                  </div>

                  <div className="space-y-2">
                    <Label>Related Document/Reference</Label>
                    <Input placeholder="e.g., DOC/2025/0347 or CR/45/2025" />
                  </div>

                  <div className="space-y-2">
                    <Label>Due Date *</Label>
                    <Input type="date" />
                  </div>

                  <div className="space-y-2">
                    <Label>Approval Chain *</Label>
                    <div className="space-y-3 p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">Define the approval stages in order:</p>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900 w-8">1.</span>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select approver" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="director">Director - Legal Services</SelectItem>
                            <SelectItem value="ag">Attorney General</SelectItem>
                            <SelectItem value="chief-of-staff">Chief of Staff</SelectItem>
                            <SelectItem value="governor">Governor</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900 w-8">2.</span>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select approver" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="director">Director - Legal Services</SelectItem>
                            <SelectItem value="ag">Attorney General</SelectItem>
                            <SelectItem value="chief-of-staff">Chief of Staff</SelectItem>
                            <SelectItem value="governor">Governor</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button variant="outline" size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Stage
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Additional Notes</Label>
                    <Textarea placeholder="Add any special instructions or context" rows={3} />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsNewWorkflowDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setIsNewWorkflowDialogOpen(false)}>
                    Create Workflow
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      {/* Workflow Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Workflows</p>
                <p className="text-2xl font-bold text-blue-600">24</p>
              </div>
              <Clock className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Awaiting Governor</p>
                <p className="text-2xl font-bold text-orange-600">8</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Approved This Month</p>
                <p className="text-2xl font-bold text-green-600">156</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg. Processing Time</p>
                <p className="text-2xl font-bold text-gray-900">3.5d</p>
              </div>
              <Clock className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Workflows List */}
      <Card>
        <CardHeader>
          <CardTitle>Approval Workflows</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockApprovalWorkflows.map((workflow) => (
              <div
                key={workflow.id}
                className="p-4 border border-gray-200 rounded-lg hover:border-[#8B1538] hover:shadow-sm transition-all cursor-pointer"
                onClick={() => setSelectedWorkflow(workflow)}
              >
                {/* Workflow Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900">{workflow.title}</h3>
                      <Badge variant="outline">{workflow.type}</Badge>
                      <Badge
                        variant={
                          workflow.status === 'approved'
                            ? 'default'
                            : workflow.status === 'rejected'
                            ? 'destructive'
                            : 'secondary'
                        }
                        className={
                          workflow.status === 'approved'
                            ? 'bg-green-100 text-green-800'
                            : ''
                        }
                      >
                        {workflow.status}
                      </Badge>
                      {workflow.priority === 'urgent' && (
                        <Badge variant="destructive">Urgent</Badge>
                      )}
                      {workflow.priority === 'high' && (
                        <Badge className="bg-orange-100 text-orange-800">High Priority</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">
                      Workflow No: {workflow.workflowNo} • Requested by {workflow.requestedBy}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      Stage {workflow.currentStage} of {workflow.totalStages}
                    </p>
                    <p className="text-xs text-gray-500">
                      Due: {new Date(workflow.dueDate).toLocaleDateString('en-NG')}
                    </p>
                  </div>
                </div>

                {/* Approval Chain */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  {workflow.stages.map((stage, index) => (
                    <div key={stage.id} className="flex items-center gap-2">
                      <div
                        className={`flex-shrink-0 w-40 p-3 rounded-lg border-2 ${
                          stage.status === 'approved'
                            ? 'bg-green-50 border-green-500'
                            : stage.status === 'pending'
                            ? 'bg-blue-50 border-blue-500'
                            : stage.status === 'rejected'
                            ? 'bg-red-50 border-red-500'
                            : 'bg-gray-50 border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          {stage.status === 'approved' && (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          )}
                          {stage.status === 'pending' && (
                            <Clock className="w-4 h-4 text-blue-600" />
                          )}
                          {stage.status === 'rejected' && (
                            <XCircle className="w-4 h-4 text-red-600" />
                          )}
                          {stage.status === 'waiting' && (
                            <Clock className="w-4 h-4 text-gray-400" />
                          )}
                          <p className="text-xs font-medium text-gray-900">{stage.name}</p>
                        </div>
                        <p className="text-xs text-gray-600 mb-1">{stage.approver}</p>
                        {stage.date && (
                          <p className="text-xs text-gray-500">
                            {new Date(stage.date).toLocaleDateString('en-NG')}
                          </p>
                        )}
                      </div>
                      {index < workflow.stages.length - 1 && (
                        <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-3">
                  <Button size="sm" variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  {workflow.status === 'pending' && (
                    <>
                      <Button size="sm" variant="outline">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        Send Reminder
                      </Button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

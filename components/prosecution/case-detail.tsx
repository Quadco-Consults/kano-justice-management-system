"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CaseStatusIndicator } from "@/components/shared/case-status-indicator"
import { Timeline } from "@/components/shared/timeline"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  User,
  Calendar,
  FileText,
  Download,
  Upload,
  Gavel,
  MapPin,
  Clock,
  MessageSquare,
  UserCircle,
  AlertCircle,
  Edit,
  RefreshCw,
  XCircle,
} from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface CaseDetailProps {
  id: string
}

export function CaseDetail({ id }: CaseDetailProps) {
  const [note, setNote] = useState("")
  const [isStatusDialogOpen, setIsStatusDialogOpen] = useState(false)
  const [isHearingDialogOpen, setIsHearingDialogOpen] = useState(false)
  const [isNolleDialogOpen, setIsNolleDialogOpen] = useState(false)
  const [newStatus, setNewStatus] = useState("")
  const [hearingData, setHearingData] = useState({
    date: "",
    time: "",
    purpose: "",
    courtRoom: "",
  })
  const [nolleReason, setNolleReason] = useState("")
  const router = useRouter()

  const handleEdit = () => {
    router.push(`/prosecution/new?id=${id}`)
  }

  const handleStatusChange = () => {
    console.log('Changing status to:', newStatus)
    setIsStatusDialogOpen(false)
    // Add API call to update status
  }

  const handleScheduleHearing = () => {
    console.log('Scheduling hearing:', hearingData)
    setIsHearingDialogOpen(false)
    // Add API call to schedule hearing
  }

  const handleNolle = () => {
    console.log('Withdrawing case:', nolleReason)
    setIsNolleDialogOpen(false)
    // Add API call to withdraw case
  }

  // Mock data - replace with actual API call
  const caseData = {
    id: 1,
    caseNo: 'CR/45/2025',
    accused: 'Ahmad Musa',
    offense: 'Armed Robbery',
    incidentDate: '2025-09-15',
    incidentLocation: 'Sabon Gari Market, Kano',
    arrestDate: '2025-09-16',
    court: 'High Court 1, Kano',
    prosecutor: 'Barr. Maryam Usman',
    investigatingOfficer: 'Inspector Ibrahim Sani',
    policeStation: 'Sabon Gari Police Division',
    status: 'in-trial',
    filingDate: '2025-09-20',
    firstHearing: '2025-10-05',
    nextHearing: '2025-11-05',
    chargeSheet: 'Armed robbery contrary to Section 298(1) of the Penal Code',
    facts: `On September 15, 2025, at approximately 9:30 PM, the accused Ahmad Musa, along with two other suspects (currently at large), allegedly attacked a commercial vehicle carrying goods worth approximately ₦2.5 million at Sabon Gari Market.

The accused and accomplices allegedly used firearms and machetes to threaten the driver and passengers, making away with goods and cash totaling ₦2.8 million. One passenger sustained injuries during the attack.

Following a tip-off, the accused was arrested on September 16, 2025, in possession of stolen items. A locally-made pistol was recovered from his residence.`,
    victims: [
      { name: 'Alhaji Yusuf Ibrahim', type: 'Primary Victim', injuries: 'None' },
      { name: 'Fatima Hassan', type: 'Witness', injuries: 'Minor cuts' },
    ],
    evidence: [
      { name: 'Police Investigation Report.pdf', type: 'Document', date: '2025-09-18' },
      { name: 'Medical Report - Fatima Hassan.pdf', type: 'Document', date: '2025-09-17' },
      { name: 'Recovered Items Inventory.pdf', type: 'Document', date: '2025-09-16' },
      { name: 'Witness Statement - Alhaji Yusuf.pdf', type: 'Document', date: '2025-09-17' },
      { name: 'Crime Scene Photos.zip', type: 'Evidence', date: '2025-09-15' },
    ],
    timeline: [
      {
        title: 'Case Received',
        description: 'Case brief received from Sabon Gari Police Division',
        timestamp: '2025-09-18T10:00:00',
        status: 'completed' as const,
      },
      {
        title: 'Charge Sheet Drafted',
        description: 'Charge sheet prepared and reviewed',
        timestamp: '2025-09-19T14:30:00',
        status: 'completed' as const,
      },
      {
        title: 'Filed in Court',
        description: 'Case filed at High Court 1, Kano',
        timestamp: '2025-09-20T09:00:00',
        status: 'completed' as const,
      },
      {
        title: 'First Hearing',
        description: 'Plea taken, case adjourned for trial',
        timestamp: '2025-10-05T10:00:00',
        status: 'completed' as const,
      },
      {
        title: 'Trial in Progress',
        description: 'Prosecution presenting evidence',
        timestamp: '2025-10-20T10:00:00',
        status: 'in-progress' as const,
      },
      {
        title: 'Next Hearing',
        description: 'Scheduled for November 5, 2025',
        timestamp: null,
        status: 'pending' as const,
      },
    ],
    hearings: [
      {
        date: '2025-10-05',
        purpose: 'Arraignment',
        outcome: 'Plea taken - Not Guilty. Case adjourned for trial',
        nextDate: '2025-10-20',
      },
      {
        date: '2025-10-20',
        purpose: 'Trial - Prosecution witnesses',
        outcome: 'Two prosecution witnesses testified. Case adjourned',
        nextDate: '2025-11-05',
      },
    ],
    notes: [
      {
        id: 1,
        user: 'Barr. Maryam Usman',
        message: 'Strong case. All evidence properly documented. Key witness testimony very credible.',
        timestamp: '2025-09-25T11:00:00',
      },
      {
        id: 2,
        user: 'Inspector Ibrahim Sani',
        message: 'Ballistics report on recovered firearm pending from forensics lab.',
        timestamp: '2025-10-10T09:30:00',
      },
    ],
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-gray-900">{caseData.caseNo}</h1>
            <CaseStatusIndicator status={caseData.status as any} />
          </div>
          <p className="text-xl text-gray-700">State v. {caseData.accused}</p>
          <p className="text-gray-600">{caseData.offense}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handleEdit}>
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </Button>
          <Dialog open={isStatusDialogOpen} onOpenChange={setIsStatusDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <RefreshCw className="w-4 h-4 mr-2" />
                Change Status
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Change Case Status</DialogTitle>
                <DialogDescription>
                  Update the current status of this case
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>Current Status</Label>
                  <div className="flex items-center gap-2">
                    <CaseStatusIndicator status={caseData.status as any} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>New Status</Label>
                  <Select value={newStatus} onValueChange={setNewStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select new status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="under-investigation">Under Investigation</SelectItem>
                      <SelectItem value="filed">Filed</SelectItem>
                      <SelectItem value="in-trial">In Trial</SelectItem>
                      <SelectItem value="verdict-delivered">Verdict Delivered</SelectItem>
                      <SelectItem value="convicted">Convicted</SelectItem>
                      <SelectItem value="acquitted">Acquitted</SelectItem>
                      <SelectItem value="withdrawn">Withdrawn (Nolle Prosequi)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsStatusDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleStatusChange} disabled={!newStatus}>
                  Update Status
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Button variant="outline">
            <Upload className="w-4 h-4 mr-2" />
            Upload Document
          </Button>

          <Dialog open={isHearingDialogOpen} onOpenChange={setIsHearingDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Hearing
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Schedule Hearing</DialogTitle>
                <DialogDescription>
                  Schedule a new court hearing for this case
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Input
                      type="date"
                      value={hearingData.date}
                      onChange={(e) => setHearingData({ ...hearingData, date: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Time</Label>
                    <Input
                      type="time"
                      value={hearingData.time}
                      onChange={(e) => setHearingData({ ...hearingData, time: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Purpose</Label>
                  <Select
                    value={hearingData.purpose}
                    onValueChange={(value) => setHearingData({ ...hearingData, purpose: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select hearing purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="arraignment">Arraignment</SelectItem>
                      <SelectItem value="mention">Mention</SelectItem>
                      <SelectItem value="trial">Trial</SelectItem>
                      <SelectItem value="continuation">Continuation of Trial</SelectItem>
                      <SelectItem value="judgment">Judgment</SelectItem>
                      <SelectItem value="sentencing">Sentencing</SelectItem>
                      <SelectItem value="bail-application">Bail Application</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Court Room</Label>
                  <Input
                    placeholder="e.g., Court Room 3"
                    value={hearingData.courtRoom}
                    onChange={(e) => setHearingData({ ...hearingData, courtRoom: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsHearingDialogOpen(false)}>
                  Cancel
                </Button>
                <Button
                  onClick={handleScheduleHearing}
                  disabled={!hearingData.date || !hearingData.purpose}
                >
                  Schedule Hearing
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Case Facts */}
          <Card>
            <CardHeader>
              <CardTitle>Case Facts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-2">Charge</h3>
                <p className="text-gray-900">{caseData.chargeSheet}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-2">Facts of the Case</h3>
                <p className="text-gray-900 whitespace-pre-line">{caseData.facts}</p>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Incident Location</p>
                  <p className="font-medium text-gray-900">{caseData.incidentLocation}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Victims & Witnesses */}
          <Card>
            <CardHeader>
              <CardTitle>Victims & Witnesses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {caseData.victims.map((victim, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <UserCircle className="w-5 h-5 text-[#006403]" />
                      <div>
                        <p className="font-medium text-gray-900">{victim.name}</p>
                        <p className="text-sm text-gray-600">{victim.type}</p>
                      </div>
                    </div>
                    {victim.injuries !== 'None' && (
                      <div className="flex items-center gap-2 mt-2 text-sm">
                        <AlertCircle className="w-4 h-4 text-orange-600" />
                        <span className="text-gray-700">Injuries: {victim.injuries}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tabbed Content */}
          <Card>
            <CardContent className="pt-6">
              <Tabs defaultValue="evidence" className="w-full">
                <TabsList className="w-full grid grid-cols-4">
                  <TabsTrigger value="evidence">Evidence & Documents</TabsTrigger>
                  <TabsTrigger value="hearings">Hearing History</TabsTrigger>
                  <TabsTrigger value="notes">Case Notes</TabsTrigger>
                  <TabsTrigger value="activity">Activity Log</TabsTrigger>
                </TabsList>

                {/* Evidence Tab */}
                <TabsContent value="evidence" className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Evidence & Documents</h3>
                    <Button size="sm">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {caseData.evidence.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-[#006403] transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-[#006403]" />
                          <div>
                            <p className="font-medium text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-600">
                              {item.type} • {new Date(item.date).toLocaleDateString('en-NG')}
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* Hearing History Tab */}
                <TabsContent value="hearings" className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Hearing History</h3>
                    <Button size="sm" onClick={() => setIsHearingDialogOpen(true)}>
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule New
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {caseData.hearings.map((hearing, index) => (
                      <div key={index} className="border-l-4 border-[#006403] pl-4 py-2">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <p className="font-medium text-gray-900">
                            {new Date(hearing.date).toLocaleDateString('en-NG')}
                          </p>
                          <Badge variant="outline">{hearing.purpose}</Badge>
                        </div>
                        <p className="text-gray-700 mb-2">{hearing.outcome}</p>
                        <p className="text-sm text-gray-600">
                          Next hearing: {new Date(hearing.nextDate).toLocaleDateString('en-NG')}
                        </p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* Case Notes Tab */}
                <TabsContent value="notes" className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Case Notes</h3>
                  <div className="space-y-4">
                    {caseData.notes.map((noteItem) => (
                      <div key={noteItem.id} className="border-l-4 border-[#006403] pl-4 py-2">
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-medium text-gray-900">{noteItem.user}</p>
                          <span className="text-sm text-gray-500">
                            {new Date(noteItem.timestamp).toLocaleString('en-NG')}
                          </span>
                        </div>
                        <p className="text-gray-700">{noteItem.message}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    <Textarea
                      placeholder="Add a case note..."
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      rows={3}
                    />
                    <Button>
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Add Note
                    </Button>
                  </div>
                </TabsContent>

                {/* Activity Log Tab */}
                <TabsContent value="activity" className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Activity Log</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 border-l-4 border-blue-500 bg-blue-50 rounded">
                      <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Case Status Changed</p>
                        <p className="text-sm text-gray-600">Status updated to "In Trial" by Barr. Maryam Usman</p>
                        <p className="text-xs text-gray-500 mt-1">2025-10-20 10:30 AM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 border-l-4 border-green-500 bg-green-50 rounded">
                      <Upload className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Document Uploaded</p>
                        <p className="text-sm text-gray-600">Police Investigation Report.pdf added to evidence</p>
                        <p className="text-xs text-gray-500 mt-1">2025-09-18 02:15 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 border-l-4 border-purple-500 bg-purple-50 rounded">
                      <Calendar className="w-5 h-5 text-purple-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Hearing Scheduled</p>
                        <p className="text-sm text-gray-600">Next hearing scheduled for November 5, 2025</p>
                        <p className="text-xs text-gray-500 mt-1">2025-10-05 03:45 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 border-l-4 border-[#006403] bg-red-50 rounded">
                      <FileText className="w-5 h-5 text-[#006403] mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Case Filed</p>
                        <p className="text-sm text-gray-600">Case filed at High Court 1, Kano</p>
                        <p className="text-xs text-gray-500 mt-1">2025-09-20 09:00 AM</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Case Information */}
          <Card>
            <CardHeader>
              <CardTitle>Case Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Gavel className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Court</p>
                  <p className="font-medium text-gray-900">{caseData.court}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Prosecutor</p>
                  <p className="font-medium text-gray-900">{caseData.prosecutor}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Investigating Officer</p>
                  <p className="font-medium text-gray-900">{caseData.investigatingOfficer}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Police Station</p>
                  <p className="font-medium text-gray-900">{caseData.policeStation}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Incident Date</p>
                  <p className="font-medium text-gray-900">
                    {new Date(caseData.incidentDate).toLocaleDateString('en-NG')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Filing Date</p>
                  <p className="font-medium text-gray-900">
                    {new Date(caseData.filingDate).toLocaleDateString('en-NG')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Next Hearing</p>
                  <p className="font-medium text-gray-900">
                    {new Date(caseData.nextHearing).toLocaleDateString('en-NG')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Case Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <Timeline items={caseData.timeline} />
            </CardContent>
          </Card>

          {/* Case Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>Case Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Hearings:</span>
                <span className="font-medium text-gray-900">{caseData.hearings.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Days Since Filing:</span>
                <span className="font-medium text-gray-900">
                  {Math.floor((new Date().getTime() - new Date(caseData.filingDate).getTime()) / (1000 * 60 * 60 * 24))} days
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Next Hearing In:</span>
                <span className="font-medium text-gray-900">
                  {Math.floor((new Date(caseData.nextHearing).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Evidence Items:</span>
                <span className="font-medium text-gray-900">{caseData.evidence.length}</span>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Case Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Dialog open={isNolleDialogOpen} onOpenChange={setIsNolleDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-white">
                    <XCircle className="w-4 h-4 mr-2" />
                    Withdraw Case (Nolle Prosequi)
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Withdraw Case (Nolle Prosequi)</DialogTitle>
                    <DialogDescription>
                      Enter the reason for withdrawing this case. This action should be taken after careful consideration.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label>Reason for Withdrawal</Label>
                      <Textarea
                        placeholder="Provide detailed reasons for withdrawing the case..."
                        value={nolleReason}
                        onChange={(e) => setNolleReason(e.target.value)}
                        rows={5}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsNolleDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button
                      onClick={handleNolle}
                      disabled={!nolleReason}
                      variant="destructive"
                    >
                      Withdraw Case
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              <Button variant="outline" className="w-full justify-start text-white">
                <FileText className="w-4 h-4 mr-2" />
                Generate Report
              </Button>

              <Button variant="outline" className="w-full justify-start text-white">
                <Download className="w-4 h-4 mr-2" />
                Export Case File
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

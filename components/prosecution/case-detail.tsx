"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { CaseStatusIndicator } from "@/components/shared/case-status-indicator"
import { Timeline } from "@/components/shared/timeline"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"
import { useState } from "react"

interface CaseDetailProps {
  id: string
}

export function CaseDetail({ id }: CaseDetailProps) {
  const [note, setNote] = useState("")

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
          <Button variant="outline">
            <Upload className="w-4 h-4 mr-2" />
            Upload Document
          </Button>
          <Button>
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Hearing
          </Button>
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
                      <UserCircle className="w-5 h-5 text-[#8B1538]" />
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

          {/* Evidence */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Evidence & Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {caseData.evidence.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-[#8B1538] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-[#8B1538]" />
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
            </CardContent>
          </Card>

          {/* Hearing History */}
          <Card>
            <CardHeader>
              <CardTitle>Hearing History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {caseData.hearings.map((hearing, index) => (
                  <div key={index} className="border-l-4 border-[#8B1538] pl-4 py-2">
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
            </CardContent>
          </Card>

          {/* Case Notes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Case Notes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {caseData.notes.map((note) => (
                  <div key={note.id} className="border-l-4 border-[#8B1538] pl-4 py-2">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-medium text-gray-900">{note.user}</p>
                      <span className="text-sm text-gray-500">
                        {new Date(note.timestamp).toLocaleString('en-NG')}
                      </span>
                    </div>
                    <p className="text-gray-700">{note.message}</p>
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
        </div>
      </div>
    </div>
  )
}

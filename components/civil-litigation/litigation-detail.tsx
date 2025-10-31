"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { StatusBadge } from "@/components/shared/status-badge"
import { Timeline } from "@/components/shared/timeline"
import { Badge } from "@/components/ui/badge"
import {
  Scale,
  User,
  Calendar,
  FileText,
  Download,
  Upload,
  Briefcase,
  DollarSign,
  MessageSquare,
  Gavel,
  CheckCircle,
  AlertCircle,
  Handshake
} from "lucide-react"
import { useState } from "react"

interface LitigationDetailProps {
  id: string
}

export function LitigationDetail({ id }: LitigationDetailProps) {
  const [note, setNote] = useState("")

  // Mock data
  const litigation = {
    id: 1,
    suitNo: 'SUIT/HC/25/2025',
    title: 'Kano State Government v. ABC Construction Ltd',
    nature: 'Contract Dispute',
    claimAmount: '₦25,000,000',
    court: 'Federal High Court, Kano',
    counsel: 'Barr. Fatima Ibrahim',
    status: 'in-progress',
    filingDate: '2025-08-15',
    nextHearing: '2025-11-15',
    role: 'Plaintiff',
    summary: `The Kano State Government through the Ministry of Works entered into a contract with ABC Construction Ltd for the construction of a 5km township road valued at ₦50,000,000.

The contract was awarded on January 15, 2024, with a completion period of 12 months. However, the contractor abandoned the project after receiving 60% advance payment (₦30,000,000) and completing only 20% of the work.

Despite several demands and notices, the contractor failed to return to site or refund the excess payment. The State is seeking:
1. Refund of ₦25,000,000 (excess payment)
2. Damages for breach of contract
3. Cost of re-awarding the contract`,
    parties: [
      { name: 'Kano State Government', role: 'Plaintiff', represented: 'Ministry of Justice' },
      { name: 'ABC Construction Ltd', role: 'Defendant', represented: 'Musa & Co Legal Practitioners' },
    ],
    documents: [
      { name: 'Statement of Claim.pdf', type: 'Pleading', date: '2025-08-15' },
      { name: 'Contract Agreement.pdf', type: 'Exhibit', date: '2025-08-15' },
      { name: 'Payment Receipts.pdf', type: 'Exhibit', date: '2025-08-15' },
      { name: 'Statement of Defense.pdf', type: 'Pleading', date: '2025-09-10' },
      { name: 'Motion for Interim Order.pdf', type: 'Motion', date: '2025-09-20' },
    ],
    timeline: [
      {
        title: 'Case Filed',
        description: 'Statement of claim filed at Federal High Court',
        timestamp: '2025-08-15T09:00:00',
        status: 'completed' as const,
      },
      {
        title: 'Service Completed',
        description: 'Defendant served with court processes',
        timestamp: '2025-08-25T14:00:00',
        status: 'completed' as const,
      },
      {
        title: 'Defense Filed',
        description: 'Statement of defense filed by defendant',
        timestamp: '2025-09-10T11:00:00',
        status: 'completed' as const,
      },
      {
        title: 'Pre-Trial Conference',
        description: 'Issues joined, case set for trial',
        timestamp: '2025-10-05T10:00:00',
        status: 'completed' as const,
      },
      {
        title: 'Trial in Progress',
        description: 'Plaintiff presenting evidence',
        timestamp: '2025-10-25T10:00:00',
        status: 'in-progress' as const,
      },
      {
        title: 'Next Hearing',
        description: 'Continuation of trial',
        timestamp: null,
        status: 'pending' as const,
      },
    ],
    hearings: [
      {
        date: '2025-09-05',
        purpose: 'Mention',
        outcome: 'Adjourned for service',
        nextDate: '2025-09-20',
      },
      {
        date: '2025-09-20',
        purpose: 'Motion Hearing',
        outcome: 'Motion for interim order refused',
        nextDate: '2025-10-05',
      },
      {
        date: '2025-10-05',
        purpose: 'Pre-Trial',
        outcome: 'Issues joined. Set down for trial',
        nextDate: '2025-10-25',
      },
      {
        date: '2025-10-25',
        purpose: 'Trial',
        outcome: 'PW1 testified and cross-examined',
        nextDate: '2025-11-15',
      },
    ],
    financials: [
      { description: 'Court filing fees', amount: '₦15,000', date: '2025-08-15', type: 'Expense' },
      { description: 'Service of processes', amount: '₦5,000', date: '2025-08-20', type: 'Expense' },
      { description: 'Motion filing', amount: '₦10,000', date: '2025-09-20', type: 'Expense' },
    ],
    notes: [
      {
        id: 1,
        user: 'Barr. Fatima Ibrahim',
        message: 'Strong case based on documentary evidence. Contract clearly breached. Need to ensure all payment records are properly tendered.',
        timestamp: '2025-08-20T10:00:00',
      },
      {
        id: 2,
        user: 'Barr. Fatima Ibrahim',
        message: 'Defendant defense is weak. Claiming force majeure but no supporting evidence provided.',
        timestamp: '2025-09-15T14:30:00',
      },
    ],
    judgment: null, // Can be: { date, ruling, amount, judge, summary, enforcement }
    settlement: null, // Can be: { proposedDate, proposedAmount, status, terms, finalizedDate }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-gray-900">{litigation.suitNo}</h1>
            <StatusBadge status={litigation.status as any} />
            <Badge className={
              litigation.role === 'Plaintiff'
                ? 'bg-blue-100 text-blue-800'
                : 'bg-purple-100 text-purple-800'
            }>
              {litigation.role}
            </Badge>
          </div>
          <p className="text-xl text-gray-700">{litigation.title}</p>
          <div className="flex items-center gap-4 mt-2">
            <p className="text-gray-600">{litigation.nature}</p>
            <span className="text-gray-400">•</span>
            <p className="text-lg font-semibold text-[#8B1538]">{litigation.claimAmount}</p>
          </div>
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
          {/* Case Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Case Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-900 whitespace-pre-line">{litigation.summary}</p>
            </CardContent>
          </Card>

          {/* Parties */}
          <Card>
            <CardHeader>
              <CardTitle>Parties to the Suit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {litigation.parties.map((party, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <User className="w-5 h-5 text-[#8B1538]" />
                        <div>
                          <p className="font-medium text-gray-900">{party.name}</p>
                          <p className="text-sm text-gray-600">{party.role}</p>
                        </div>
                      </div>
                      <Badge variant="outline">{party.role}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">Represented by: {party.represented}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Documents */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Case Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {litigation.documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-[#8B1538] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-[#8B1538]" />
                      <div>
                        <p className="font-medium text-gray-900">{doc.name}</p>
                        <p className="text-sm text-gray-600">
                          {doc.type} • {new Date(doc.date).toLocaleDateString('en-NG')}
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
                {litigation.hearings.map((hearing, index) => (
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

          {/* Financial Tracking */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Financial Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {litigation.financials.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{item.description}</p>
                      <p className="text-sm text-gray-600">
                        {new Date(item.date).toLocaleDateString('en-NG')} • {item.type}
                      </p>
                    </div>
                    <p className="font-semibold text-gray-900">{item.amount}</p>
                  </div>
                ))}
                <div className="pt-3 border-t">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-gray-900">Total Costs</p>
                    <p className="text-lg font-bold text-[#8B1538]">₦30,000</p>
                  </div>
                </div>
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
                {litigation.notes.map((note) => (
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

          {/* Judgment Tracking */}
          {litigation.judgment ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gavel className="w-5 h-5" />
                  Judgment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <p className="font-semibold text-green-900">Judgment Delivered</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">{litigation.judgment.ruling}</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-sm text-green-700">Date</p>
                      <p className="font-medium text-green-900">
                        {new Date(litigation.judgment.date).toLocaleDateString('en-NG')}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-green-700">Judge</p>
                      <p className="font-medium text-green-900">{litigation.judgment.judge}</p>
                    </div>
                    <div>
                      <p className="text-sm text-green-700">Award Amount</p>
                      <p className="font-semibold text-green-900">{litigation.judgment.amount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-green-700">Enforcement Status</p>
                      <Badge variant="outline">{litigation.judgment.enforcement}</Badge>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-green-200">
                    <p className="text-sm font-medium text-green-900 mb-2">Summary</p>
                    <p className="text-sm text-green-800">{litigation.judgment.summary}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Judgment
                  </Button>
                  <Button className="flex-1">
                    <Gavel className="w-4 h-4 mr-2" />
                    Track Enforcement
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gavel className="w-5 h-5" />
                  Judgment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-center">
                  <AlertCircle className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 mb-3">No judgment delivered yet</p>
                  <Button variant="outline" size="sm">
                    <Upload className="w-4 h-4 mr-2" />
                    Record Judgment
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Settlement Tracking */}
          {litigation.settlement ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Handshake className="w-5 h-5" />
                  Settlement Negotiation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className={`p-4 border rounded-lg ${
                  litigation.settlement.status === 'finalized'
                    ? 'bg-green-50 border-green-200'
                    : litigation.settlement.status === 'negotiating'
                    ? 'bg-blue-50 border-blue-200'
                    : 'bg-orange-50 border-orange-200'
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-semibold text-gray-900">Settlement Status</p>
                    <Badge className={
                      litigation.settlement.status === 'finalized'
                        ? 'bg-green-100 text-green-800'
                        : litigation.settlement.status === 'negotiating'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-orange-100 text-orange-800'
                    }>
                      {litigation.settlement.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-sm text-gray-700">Proposed Amount</p>
                      <p className="font-semibold text-gray-900">{litigation.settlement.proposedAmount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700">Proposed Date</p>
                      <p className="font-medium text-gray-900">
                        {new Date(litigation.settlement.proposedDate).toLocaleDateString('en-NG')}
                      </p>
                    </div>
                  </div>
                  {litigation.settlement.terms && (
                    <div className="pt-3 border-t">
                      <p className="text-sm font-medium text-gray-900 mb-2">Terms</p>
                      <p className="text-sm text-gray-700">{litigation.settlement.terms}</p>
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Agreement
                  </Button>
                  <Button className="flex-1">
                    <Handshake className="w-4 h-4 mr-2" />
                    Update Status
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Handshake className="w-5 h-5" />
                  Settlement Negotiation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-center">
                  <AlertCircle className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 mb-3">No settlement discussions yet</p>
                  <Button variant="outline" size="sm">
                    <Handshake className="w-4 h-4 mr-2" />
                    Initiate Settlement
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
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
                <Scale className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Court</p>
                  <p className="font-medium text-gray-900">{litigation.court}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Lead Counsel</p>
                  <p className="font-medium text-gray-900">{litigation.counsel}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Filing Date</p>
                  <p className="font-medium text-gray-900">
                    {new Date(litigation.filingDate).toLocaleDateString('en-NG')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Next Hearing</p>
                  <p className="font-medium text-gray-900">
                    {new Date(litigation.nextHearing).toLocaleDateString('en-NG')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Claim Amount</p>
                  <p className="font-medium text-gray-900">{litigation.claimAmount}</p>
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
              <Timeline items={litigation.timeline} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

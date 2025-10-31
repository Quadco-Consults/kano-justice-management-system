"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ArrowLeft, FileText } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

// Mock data - in real implementation, this would come from API based on ID
const mockBill = {
  id: 1,
  billNo: 'BILL-2025-001',
  title: 'Kano State Anti-Corruption Amendment Bill 2025',
  type: 'Amendment',
  status: 'in-review',
  priority: 'high',
  sponsor: 'Ministry of Justice',
  draftedBy: 'Barr. Ibrahim Bello',
  assignedTo: 'Legislative Drafting Team',
  dateInitiated: '2025-10-15',
  targetCompletion: '2025-11-30',
  lastUpdated: '2025-10-31T10:00:00',
  description: 'Amendment to strengthen anti-corruption provisions and update penalties in line with current economic realities',
  objectives: [
    'Update penalty provisions for corruption offenses',
    'Introduce asset recovery mechanisms',
    'Strengthen whistleblower protection',
    'Align with federal anti-corruption framework'
  ],
  sections: [
    {
      id: 1,
      number: 1,
      title: 'Short Title and Commencement',
      status: 'completed',
      lastReviewed: '2025-10-20',
      content: `
        <h4>1.1 Short Title</h4>
        <p>This Bill may be cited as the Kano State Anti-Corruption (Amendment) Bill, 2025.</p>

        <h4>1.2 Commencement</h4>
        <p>This Bill shall come into force on the date of its publication in the State Gazette following the Governor's assent.</p>

        <h4>1.3 Application</h4>
        <p>This Amendment shall apply to all public officers and institutions within Kano State as defined in the Principal Law.</p>
      `
    },
    {
      id: 2,
      number: 2,
      title: 'Amendment to Principal Law',
      status: 'completed',
      lastReviewed: '2025-10-22',
      content: `
        <h4>2.1 Amendment of Section 5</h4>
        <p>Section 5 of the Principal Law is hereby amended by substituting the existing provisions with the following:</p>
        <blockquote>"Any public officer who directly or indirectly accepts, obtains, or attempts to obtain any property or benefit for themselves or any other person from any person having dealings with the government shall be guilty of an offense under this Law."</blockquote>

        <h4>2.2 Amendment of Section 12</h4>
        <p>Section 12 of the Principal Law is hereby amended by inserting immediately after subsection (3) the following new subsection:</p>
        <blockquote>"(4) Any person who aids, abets, or conspires with a public officer in the commission of an offense under this Law shall be liable to the same penalty as the principal offender."</blockquote>
      `
    },
    {
      id: 3,
      number: 3,
      title: 'Penalty Provisions',
      status: 'in-review',
      lastReviewed: '2025-10-28',
      content: `
        <h4>3.1 General Penalty Framework</h4>
        <p>Any person who commits an offense under this Law shall be liable on conviction to:</p>
        <ul>
          <li>Imprisonment for a term not exceeding 10 years, or</li>
          <li>A fine not exceeding ₦10,000,000 (Ten Million Naira), or</li>
          <li>Both imprisonment and fine</li>
        </ul>

        <h4>3.2 Enhanced Penalties for Serious Offenses</h4>
        <p>Where the offense involves property or benefit exceeding ₦5,000,000, the offender shall be liable to:</p>
        <ul>
          <li>Imprisonment for a term not less than 7 years and not exceeding 15 years, without option of fine</li>
          <li>Forfeiture of the proceeds of the offense to the State Government</li>
        </ul>

        <h4>3.3 Corporate Offenders</h4>
        <p>Where an offense under this Law is committed by a body corporate, every director, manager, secretary or similar officer shall be deemed to have committed the offense unless they prove that the offense was committed without their knowledge or that they exercised due diligence to prevent the commission of the offense.</p>
      `
    },
    {
      id: 4,
      number: 4,
      title: 'Asset Recovery Mechanism',
      status: 'draft',
      lastReviewed: null,
      content: `
        <h4>4.1 Power to Freeze Assets</h4>
        <p>Where the Commission has reasonable grounds to believe that any property is the proceeds of corruption, the Commission may apply to the High Court for an order to freeze such assets pending investigation and trial.</p>

        <h4>4.2 Interim Preservation Orders</h4>
        <p>The Court may grant an interim preservation order where satisfied that:</p>
        <ul>
          <li>There are reasonable grounds to believe the property is proceeds of corruption</li>
          <li>There is risk of dissipation of the property</li>
          <li>The interests of justice require the preservation of the property</li>
        </ul>

        <h4>4.3 Final Forfeiture</h4>
        <p>Upon conviction of an offense under this Law, the Court shall order the forfeiture of any property proven to be proceeds of the offense to the State Government.</p>

        <h4>4.4 Recovery Fund</h4>
        <p>All assets recovered under this section shall be paid into a special fund to be known as the "Anti-Corruption Recovery Fund" to be managed in accordance with regulations made by the State Executive Council.</p>
      `
    },
    {
      id: 5,
      number: 5,
      title: 'Whistleblower Protection',
      status: 'pending',
      lastReviewed: null,
      content: `
        <h4>5.1 Protection from Reprisals</h4>
        <p>No person who makes a disclosure in good faith of information relating to corruption shall be subjected to any civil or criminal liability, disciplinary action, or victimization.</p>

        <h4>5.2 Confidentiality</h4>
        <p>The identity of a whistleblower shall be kept confidential unless:</p>
        <ul>
          <li>The whistleblower consents in writing to disclosure, or</li>
          <li>A court orders disclosure in the interests of justice</li>
        </ul>

        <h4>5.3 Remedies for Victimization</h4>
        <p>Where a whistleblower suffers victimization in contravention of this section, they shall be entitled to:</p>
        <ul>
          <li>Reinstatement to their position</li>
          <li>Compensation for any loss suffered</li>
          <li>Any other relief the court deems appropriate</li>
        </ul>

        <h4>5.4 Rewards</h4>
        <p>The Commission may, with the approval of the State Executive Council, pay rewards to whistleblowers whose information leads to successful prosecution and recovery of assets.</p>
      `
    }
  ],
  stakeholders: [
    {
      id: 1,
      name: 'Kano State House of Assembly',
      type: 'Primary',
      status: 'engaged',
      feedback: 'Awaiting review'
    },
    {
      id: 2,
      name: 'Anti-Corruption Commission',
      type: 'Collaborating Agency',
      status: 'consulted',
      feedback: 'Provided technical input'
    },
    {
      id: 3,
      name: 'Civil Society Organizations',
      type: 'External',
      status: 'pending',
      feedback: 'Consultation scheduled'
    }
  ],
}

export default function BillPreviewPage() {
  const params = useParams()
  const billId = params.id

  const handleExportPDF = () => {
    alert(`Exporting ${mockBill.billNo} as PDF...`)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-900'
      case 'in-review': return 'bg-orange-100 text-orange-900'
      case 'draft': return 'bg-blue-100 text-blue-900'
      case 'pending': return 'bg-gray-100 text-gray-900'
      default: return 'bg-gray-100 text-gray-900'
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href={`/legislative-drafting/${billId}`}>
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Bill
                </Button>
              </Link>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="text-2xl font-bold text-gray-900">{mockBill.billNo}</h1>
                  <Badge className="bg-[#8B1538] text-white">
                    <FileText className="w-3 h-3 mr-1" />
                    Full Preview
                  </Badge>
                </div>
              </div>
            </div>
            <Button onClick={handleExportPDF}>
              <Download className="w-4 h-4 mr-2" />
              Export as PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Bill Header */}
          <Card>
            <CardHeader className="border-b border-gray-200 bg-gray-50">
              <div className="text-center space-y-2">
                <p className="text-sm font-medium text-gray-900">KANO STATE OF NIGERIA</p>
                <CardTitle className="text-2xl text-gray-900">{mockBill.title}</CardTitle>
                <p className="text-sm text-gray-900">Bill No: {mockBill.billNo}</p>
                <div className="flex items-center justify-center gap-4 pt-2">
                  <Badge className={getStatusColor(mockBill.status)}>
                    {mockBill.status.toUpperCase()}
                  </Badge>
                  <Badge variant="outline" className="border-[#8B1538] text-[#8B1538]">
                    {mockBill.type}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Sponsor</p>
                  <p className="text-gray-900">{mockBill.sponsor}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Chief Drafter</p>
                  <p className="text-gray-900">{mockBill.draftedBy}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Date Initiated</p>
                  <p className="text-gray-900">
                    {new Date(mockBill.dateInitiated).toLocaleDateString('en-NG', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Target Completion</p>
                  <p className="text-gray-900">
                    {new Date(mockBill.targetCompletion).toLocaleDateString('en-NG', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bill Description */}
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900">Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-900 leading-relaxed">{mockBill.description}</p>
            </CardContent>
          </Card>

          {/* Bill Objectives */}
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900">Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {mockBill.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#8B1538]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-[#8B1538]">{index + 1}</span>
                    </div>
                    <span className="text-gray-900 leading-relaxed">{objective}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Bill Sections - Full Content */}
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900">Bill Sections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {mockBill.sections.map((section, index) => (
                  <div key={section.id} className={index > 0 ? 'pt-8 border-t border-gray-200' : ''}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#8B1538]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-[#8B1538]">{section.number}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">
                            Section {section.number}: {section.title}
                          </h3>
                          <Badge className={getStatusColor(section.status)}>
                            {section.status}
                          </Badge>
                        </div>
                        {section.lastReviewed && (
                          <p className="text-sm text-gray-900">
                            Last reviewed: {new Date(section.lastReviewed).toLocaleDateString('en-NG')}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Section Content */}
                    <div
                      className="prose max-w-none pl-16 text-gray-900"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                      style={{
                        color: '#111827',
                      }}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Stakeholder Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900">Stakeholder Consultation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockBill.stakeholders.map((stakeholder) => (
                  <div key={stakeholder.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">{stakeholder.name}</p>
                      <p className="text-sm text-gray-900">{stakeholder.type}</p>
                    </div>
                    <div className="text-right">
                      <Badge className={
                        stakeholder.status === 'consulted'
                          ? 'bg-green-100 text-green-900'
                          : stakeholder.status === 'engaged'
                          ? 'bg-blue-100 text-blue-900'
                          : 'bg-orange-100 text-orange-900'
                      }>
                        {stakeholder.status}
                      </Badge>
                      <p className="text-sm text-gray-900 mt-1">{stakeholder.feedback}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <p className="text-sm text-gray-900">
                  This preview was generated on {new Date().toLocaleDateString('en-NG', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
                <p className="text-xs text-gray-900">
                  © {new Date().getFullYear()} Kano State Ministry of Justice - Legislative Drafting Division
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

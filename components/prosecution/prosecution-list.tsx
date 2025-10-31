"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CaseStatusIndicator } from "@/components/shared/case-status-indicator"
import { Search, Plus, Filter, Gavel, Calendar, User } from "lucide-react"
import Link from "next/link"

const mockCases = [
  {
    id: 1,
    caseNo: 'CR/45/2025',
    accused: 'Ahmad Musa',
    offense: 'Armed Robbery',
    incidentDate: '2025-09-15',
    court: 'High Court 1, Kano',
    prosecutor: 'Barr. Maryam Usman',
    status: 'in-trial',
    filingDate: '2025-09-20',
    nextHearing: '2025-11-05',
  },
  {
    id: 2,
    caseNo: 'CR/46/2025',
    accused: 'Fatima Ibrahim',
    offense: 'Fraud',
    incidentDate: '2025-08-22',
    court: 'High Court 2, Kano',
    prosecutor: 'Barr. Ibrahim Sani',
    status: 'under-investigation',
    filingDate: null,
    nextHearing: null,
  },
  {
    id: 3,
    caseNo: 'CR/47/2025',
    accused: 'Yusuf Ali',
    offense: 'Assault',
    incidentDate: '2025-10-01',
    court: 'Magistrate Court 3, Kano',
    prosecutor: 'Barr. Halima Mohammed',
    status: 'filed',
    filingDate: '2025-10-10',
    nextHearing: '2025-11-12',
  },
  {
    id: 4,
    caseNo: 'CR/48/2025',
    accused: 'Hauwa Sani',
    offense: 'Embezzlement',
    incidentDate: '2025-07-30',
    court: 'High Court 1, Kano',
    prosecutor: 'Barr. Ahmad Bello',
    status: 'verdict-delivered',
    filingDate: '2025-08-05',
    nextHearing: null,
  },
  {
    id: 5,
    caseNo: 'CR/49/2025',
    accused: 'Ibrahim Garba',
    offense: 'Theft',
    incidentDate: '2025-10-15',
    court: 'Magistrate Court 1, Kano',
    prosecutor: 'Barr. Amina Hassan',
    status: 'pending',
    filingDate: null,
    nextHearing: null,
  },
]

export function ProsecutionList() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Public Prosecution</h1>
          <p className="text-gray-600">Manage criminal cases and prosecution workflow</p>
        </div>
        <Link href="/prosecution/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Case
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by case number, accused, or offense..."
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

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Cases</p>
                <p className="text-2xl font-bold text-gray-900">432</p>
              </div>
              <Gavel className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">In Trial</p>
                <p className="text-2xl font-bold text-blue-600">78</p>
              </div>
              <Gavel className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Convicted</p>
                <p className="text-2xl font-bold text-green-600">234</p>
              </div>
              <Gavel className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Acquitted</p>
                <p className="text-2xl font-bold text-orange-600">45</p>
              </div>
              <Gavel className="w-8 h-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Conviction Rate</p>
                <p className="text-2xl font-bold text-[#8B1538]">84%</p>
              </div>
              <Gavel className="w-8 h-8 text-[#8B1538]" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cases List */}
      <Card>
        <CardHeader>
          <CardTitle>Active Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockCases.map((caseItem) => (
              <Link key={caseItem.id} href={`/prosecution/${caseItem.id}`}>
                <div className="p-4 border border-gray-200 rounded-lg hover:border-[#8B1538] hover:shadow-sm transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-900">{caseItem.caseNo}</h3>
                        <CaseStatusIndicator status={caseItem.status as any} />
                      </div>
                      <p className="text-sm font-medium text-gray-700">State v. {caseItem.accused}</p>
                      <p className="text-sm text-gray-600">{caseItem.offense}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Gavel className="w-4 h-4 text-gray-400" />
                      <span>{caseItem.court}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span>{caseItem.prosecutor}</span>
                    </div>
                    {caseItem.nextHearing && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span>Next hearing: {new Date(caseItem.nextHearing).toLocaleDateString('en-NG')}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

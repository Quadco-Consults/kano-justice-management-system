"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/shared/status-badge"
import { Search, Plus, Filter, Scale, Calendar, Briefcase } from "lucide-react"
import Link from "next/link"

const mockCases = [
  {
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
  },
  {
    id: 2,
    suitNo: 'SUIT/HC/38/2025',
    title: 'XYZ Limited v. Kano State Government',
    nature: 'Land Dispute',
    claimAmount: '₦50,000,000',
    court: 'High Court of Kano State',
    counsel: 'Barr. Ahmad Sani',
    status: 'under-review',
    filingDate: '2025-09-01',
    nextHearing: '2025-11-20',
    role: 'Defendant',
  },
  {
    id: 3,
    suitNo: 'SUIT/HC/42/2025',
    title: 'Kano State v. Federal Republic of Nigeria',
    nature: 'Constitutional Matter',
    claimAmount: null,
    court: 'Supreme Court of Nigeria',
    counsel: 'Barr. Halima Mohammed',
    status: 'active',
    filingDate: '2025-07-20',
    nextHearing: '2025-12-01',
    role: 'Plaintiff',
  },
  {
    id: 4,
    suitNo: 'SUIT/HC/15/2025',
    title: 'John Doe v. Ministry of Health, Kano State',
    nature: 'Employment Dispute',
    claimAmount: '₦5,000,000',
    court: 'National Industrial Court',
    counsel: 'Barr. Maryam Usman',
    status: 'settled',
    filingDate: '2025-03-10',
    nextHearing: null,
    role: 'Defendant',
  },
  {
    id: 5,
    suitNo: 'SUIT/HC/52/2025',
    title: 'Kano State Government v. DEF Oil & Gas',
    nature: 'Contract Dispute',
    claimAmount: '₦100,000,000',
    court: 'Federal High Court, Kano',
    counsel: 'Barr. Ibrahim Bello',
    status: 'in-progress',
    filingDate: '2025-10-05',
    nextHearing: '2025-11-25',
    role: 'Plaintiff',
  },
]

export function LitigationList() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Civil Litigation</h1>
          <p className="text-gray-600">Track and manage civil litigation cases</p>
        </div>
        <Link href="/civil-litigation/new">
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
                placeholder="Search by suit number, title, or nature..."
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
                <p className="text-2xl font-bold text-gray-900">189</p>
              </div>
              <Scale className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active</p>
                <p className="text-2xl font-bold text-blue-600">67</p>
              </div>
              <Scale className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Won</p>
                <p className="text-2xl font-bold text-green-600">78</p>
              </div>
              <Scale className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Settled</p>
                <p className="text-2xl font-bold text-orange-600">32</p>
              </div>
              <Scale className="w-8 h-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Success Rate</p>
                <p className="text-2xl font-bold text-[#8B1538]">71%</p>
              </div>
              <Scale className="w-8 h-8 text-[#8B1538]" />
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
              <Link key={caseItem.id} href={`/civil-litigation/${caseItem.id}`}>
                <div className="p-4 border border-gray-200 rounded-lg hover:border-[#8B1538] hover:shadow-sm transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-900">{caseItem.suitNo}</h3>
                        <StatusBadge status={caseItem.status as any} />
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          caseItem.role === 'Plaintiff'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-purple-100 text-purple-800'
                        }`}>
                          {caseItem.role}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-gray-700">{caseItem.title}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <p className="text-sm text-gray-600">{caseItem.nature}</p>
                        {caseItem.claimAmount && (
                          <>
                            <span className="text-gray-400">•</span>
                            <p className="text-sm font-medium text-gray-700">{caseItem.claimAmount}</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Scale className="w-4 h-4 text-gray-400" />
                      <span>{caseItem.court}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-gray-400" />
                      <span>{caseItem.counsel}</span>
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

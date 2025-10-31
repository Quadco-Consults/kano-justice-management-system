"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Filter, MessageSquare, Users, Mail, FileText, X } from "lucide-react"
import Link from "next/link"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const mockStakeholders = [
  {
    id: 1,
    name: 'Kano State Police Command',
    type: 'Law Enforcement',
    contactPerson: 'ACP Ibrahim Musa',
    email: 'contact@kanopolice.gov.ng',
    phone: '+234 803 456 7890',
    status: 'active',
    pendingRequests: 12,
    sharedDocuments: 45,
    lastActivity: '2025-10-30',
  },
  {
    id: 2,
    name: 'Federal High Court Kano',
    type: 'Judiciary',
    contactPerson: 'Chief Registrar Ahmad Bello',
    email: 'registrar@fhckano.gov.ng',
    phone: '+234 805 123 4567',
    status: 'active',
    pendingRequests: 8,
    sharedDocuments: 234,
    lastActivity: '2025-10-29',
  },
  {
    id: 3,
    name: 'Ministry of Education',
    type: 'MDA',
    contactPerson: 'Permanent Secretary Fatima Hassan',
    email: 'ps@education.kano.gov.ng',
    phone: '+234 807 234 5678',
    status: 'active',
    pendingRequests: 5,
    sharedDocuments: 67,
    lastActivity: '2025-10-28',
  },
  {
    id: 4,
    name: 'Office of the Attorney General Federation',
    type: 'Federal Agency',
    contactPerson: 'Director Amina Yusuf',
    email: 'director@agf.gov.ng',
    phone: '+234 809 345 6789',
    status: 'active',
    pendingRequests: 3,
    sharedDocuments: 89,
    lastActivity: '2025-10-27',
  },
  {
    id: 5,
    name: 'Kano State House of Assembly',
    type: 'Legislature',
    contactPerson: 'Clerk of the House Musa Ali',
    email: 'clerk@kanoassembly.gov.ng',
    phone: '+234 802 456 7891',
    status: 'active',
    pendingRequests: 7,
    sharedDocuments: 123,
    lastActivity: '2025-10-26',
  },
]

export function StakeholdersList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    type: "",
    status: "",
    tier: "",
  })

  const clearFilters = () => {
    setFilters({
      type: "",
      status: "",
      tier: "",
    })
  }

  const hasActiveFilters = Object.values(filters).some(value => value !== "")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Stakeholder Portal</h1>
          <p className="text-gray-600">Collaborate and communicate with external stakeholders</p>
        </div>
        <Link href="/stakeholders/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Stakeholder
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search stakeholders by name, type, or contact person..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className={hasActiveFilters ? "border-[#8B1538] text-[#8B1538]" : ""}
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
                {hasActiveFilters && (
                  <Badge className="ml-2 bg-[#8B1538] text-white">
                    {Object.values(filters).filter(v => v !== "").length}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Filter Options */}
            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Organization Type</label>
                  <Select
                    value={filters.type}
                    onValueChange={(value) => setFilters({ ...filters, type: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="Law Enforcement">Law Enforcement</SelectItem>
                      <SelectItem value="Judiciary">Judiciary</SelectItem>
                      <SelectItem value="MDA">Government MDA</SelectItem>
                      <SelectItem value="Federal Agency">Federal Agency</SelectItem>
                      <SelectItem value="Legislature">Legislature</SelectItem>
                      <SelectItem value="External Counsel">External Counsel</SelectItem>
                      <SelectItem value="Private Organization">Private Organization</SelectItem>
                      <SelectItem value="NGO/Civil Society">NGO/Civil Society</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Status</label>
                  <Select
                    value={filters.status}
                    onValueChange={(value) => setFilters({ ...filters, status: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All Statuses" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Stakeholder Tier</label>
                  <Select
                    value={filters.tier}
                    onValueChange={(value) => setFilters({ ...filters, tier: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All Tiers" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Tiers</SelectItem>
                      <SelectItem value="Primary">Primary (High Priority)</SelectItem>
                      <SelectItem value="Secondary">Secondary (Regular)</SelectItem>
                      <SelectItem value="Tertiary">Tertiary (Occasional)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {hasActiveFilters && (
                  <div className="md:col-span-3 flex justify-end">
                    <Button variant="ghost" onClick={clearFilters} size="sm">
                      <X className="w-4 h-4 mr-2" />
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Stakeholders</p>
                <p className="text-2xl font-bold text-gray-900">47</p>
              </div>
              <Users className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Collaborations</p>
                <p className="text-2xl font-bold text-blue-600">35</p>
              </div>
              <MessageSquare className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Requests</p>
                <p className="text-2xl font-bold text-orange-600">35</p>
              </div>
              <Mail className="w-8 h-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Shared Documents</p>
                <p className="text-2xl font-bold text-[#8B1538]">558</p>
              </div>
              <FileText className="w-8 h-8 text-[#8B1538]" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stakeholders List */}
      <Card>
        <CardHeader>
          <CardTitle>Active Stakeholders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockStakeholders.map((stakeholder) => (
              <Link key={stakeholder.id} href={`/stakeholders/${stakeholder.id}`}>
                <div className="p-4 border border-gray-200 rounded-lg hover:border-[#8B1538] hover:shadow-sm transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-900">{stakeholder.name}</h3>
                        <Badge variant="outline">{stakeholder.type}</Badge>
                        <Badge variant={stakeholder.status === 'active' ? 'success' : 'secondary'}>
                          {stakeholder.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        Contact: {stakeholder.contactPerson}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span>{stakeholder.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-gray-400" />
                      <span>{stakeholder.pendingRequests} pending requests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gray-400" />
                      <span>{stakeholder.sharedDocuments} documents</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">Last active:</span>
                      <span className="font-medium text-gray-700">
                        {new Date(stakeholder.lastActivity).toLocaleDateString('en-NG')}
                      </span>
                    </div>
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

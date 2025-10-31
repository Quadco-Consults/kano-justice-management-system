"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Save, X } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"

export function StakeholderForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const editId = searchParams.get('id')
  const isEditMode = !!editId

  const [formData, setFormData] = useState({
    name: '',
    code: '',
    type: '',
    tier: '',
    relationship: '',
    description: '',
    address: '',
    primaryContactName: '',
    primaryContactEmail: '',
    primaryContactPhone: '',
    alternativeContactName: '',
    alternativeContactEmail: '',
    alternativeContactPhone: '',
  })

  useEffect(() => {
    if (isEditMode) {
      // Fetch and populate form data
      const mockData = {
        name: 'Ministry of Education',
        code: 'MOE',
        type: 'Government MDA',
        tier: 'Primary',
        relationship: 'Frequent Client',
        description: 'State Ministry responsible for education policy, school administration, and educational development',
        address: 'Ministry of Education Complex, Kofar Mata, Kano',
        primaryContactName: 'Hon. Commissioner Ahmed Ibrahim',
        primaryContactEmail: 'commissioner@moe.kano.gov.ng',
        primaryContactPhone: '+234 803 456 7890',
        alternativeContactName: 'Permanent Secretary - Dr. Fatima Bello',
        alternativeContactEmail: 'permsec@moe.kano.gov.ng',
        alternativeContactPhone: '+234 806 789 0123',
      }
      setFormData(mockData)
    }
  }, [isEditMode, editId])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isEditMode) {
      console.log('Updating stakeholder', editId, formData)
    } else {
      console.log('Creating new stakeholder', formData)
    }
    router.push('/stakeholders')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/stakeholders">
            <Button variant="outline" size="sm">← Back</Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {isEditMode ? 'Edit Stakeholder' : 'Add New Stakeholder'}
            </h1>
            <p className="text-gray-600">
              {isEditMode
                ? 'Update stakeholder information and contact details'
                : 'Register a new stakeholder organization for collaboration'}
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Organization Name *</Label>
                <Input
                  id="name"
                  placeholder="e.g., Ministry of Education"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="code">Stakeholder Code *</Label>
                <Input
                  id="code"
                  placeholder="e.g., MOE"
                  required
                  value={formData.code}
                  onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="type">Organization Type *</Label>
                <Select
                  required
                  value={formData.type}
                  onValueChange={(value) => setFormData({ ...formData, type: value })}
                >
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Government MDA">Government MDA</SelectItem>
                    <SelectItem value="Law Enforcement">Law Enforcement</SelectItem>
                    <SelectItem value="Judiciary">Judiciary</SelectItem>
                    <SelectItem value="Legislature">Legislature</SelectItem>
                    <SelectItem value="Federal Agency">Federal Agency</SelectItem>
                    <SelectItem value="External Counsel">External Counsel</SelectItem>
                    <SelectItem value="Private Organization">Private Organization</SelectItem>
                    <SelectItem value="NGO/Civil Society">NGO/Civil Society</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tier">Stakeholder Tier *</Label>
                <Select
                  required
                  value={formData.tier}
                  onValueChange={(value) => setFormData({ ...formData, tier: value })}
                >
                  <SelectTrigger id="tier">
                    <SelectValue placeholder="Select tier" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Primary">Primary (High Priority)</SelectItem>
                    <SelectItem value="Secondary">Secondary (Regular)</SelectItem>
                    <SelectItem value="Tertiary">Tertiary (Occasional)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="relationship">Relationship Status *</Label>
                <Select
                  required
                  value={formData.relationship}
                  onValueChange={(value) => setFormData({ ...formData, relationship: value })}
                >
                  <SelectTrigger id="relationship">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Frequent Client">Frequent Client</SelectItem>
                    <SelectItem value="Regular Partner">Regular Partner</SelectItem>
                    <SelectItem value="Occasional Contact">Occasional Contact</SelectItem>
                    <SelectItem value="New Stakeholder">New Stakeholder</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                placeholder="Brief description of the stakeholder organization and its relationship with the Ministry"
                rows={3}
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Physical Address *</Label>
              <Input
                id="address"
                placeholder="Enter complete address"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>

        {/* Primary Contact */}
        <Card>
          <CardHeader>
            <CardTitle>Primary Contact Person</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="primaryContactName">Full Name *</Label>
              <Input
                id="primaryContactName"
                placeholder="e.g., Hon. Commissioner Ahmed Ibrahim"
                required
                value={formData.primaryContactName}
                onChange={(e) => setFormData({ ...formData, primaryContactName: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="primaryContactEmail">Email Address *</Label>
                <Input
                  id="primaryContactEmail"
                  type="email"
                  placeholder="contact@organization.gov.ng"
                  required
                  value={formData.primaryContactEmail}
                  onChange={(e) => setFormData({ ...formData, primaryContactEmail: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="primaryContactPhone">Phone Number *</Label>
                <Input
                  id="primaryContactPhone"
                  type="tel"
                  placeholder="+234 803 456 7890"
                  required
                  value={formData.primaryContactPhone}
                  onChange={(e) => setFormData({ ...formData, primaryContactPhone: e.target.value })}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alternative Contact */}
        <Card>
          <CardHeader>
            <CardTitle>Alternative Contact Person (Optional)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="alternativeContactName">Full Name</Label>
              <Input
                id="alternativeContactName"
                placeholder="e.g., Permanent Secretary - Dr. Fatima Bello"
                value={formData.alternativeContactName}
                onChange={(e) => setFormData({ ...formData, alternativeContactName: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="alternativeContactEmail">Email Address</Label>
                <Input
                  id="alternativeContactEmail"
                  type="email"
                  placeholder="alternate@organization.gov.ng"
                  value={formData.alternativeContactEmail}
                  onChange={(e) => setFormData({ ...formData, alternativeContactEmail: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="alternativeContactPhone">Phone Number</Label>
                <Input
                  id="alternativeContactPhone"
                  type="tel"
                  placeholder="+234 806 789 0123"
                  value={formData.alternativeContactPhone}
                  onChange={(e) => setFormData({ ...formData, alternativeContactPhone: e.target.value })}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3">
          <Link href="/stakeholders">
            <Button type="button" variant="outline">
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
          </Link>
          <Button type="submit">
            <Save className="w-4 h-4 mr-2" />
            {isEditMode ? 'Update Stakeholder' : 'Add Stakeholder'}
          </Button>
        </div>
      </form>
    </div>
  )
}

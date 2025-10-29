export interface LegalAdvisoryRequest {
  id: string
  title: string
  description: string
  requestingMinistry: string
  contactPerson: string
  contactEmail: string
  contactPhone: string
  priority: 'low' | 'medium' | 'high' | 'urgent'
  status: 'pending' | 'under_review' | 'requires_clarification' | 'completed' | 'rejected'
  category: string
  documents: Document[]
  assignedTo?: string
  estimatedCompletion?: Date
  actualCompletion?: Date
  createdAt: Date
  updatedAt: Date
  createdBy: string
  reviewNotes?: string
  legalOpinion?: string
}

export interface Document {
  id: string
  name: string
  type: string
  size: number
  url: string
  uploadedAt: Date
  uploadedBy: string
}

export interface LegalOpinion {
  id: string
  requestId: string
  opinion: string
  legalBasis: string
  recommendations: string[]
  limitations?: string
  author: string
  reviewedBy?: string
  approvedBy?: string
  createdAt: Date
  approvedAt?: Date
}

export interface AdvisoryCategory {
  id: string
  name: string
  description: string
  department: string
  estimatedDuration: number // in days
  requiredDocuments: string[]
}

// Common advisory categories
export const ADVISORY_CATEGORIES = [
  'Constitutional Law',
  'Administrative Law',
  'Contract Law',
  'Employment Law',
  'Tax Law',
  'Environmental Law',
  'Public Procurement',
  'Land Law',
  'Corporate Law',
  'Human Rights',
  'Criminal Law',
  'International Law'
] as const

export type AdvisoryCategoryType = typeof ADVISORY_CATEGORIES[number]

// Ministries and Agencies that can request legal advice
export const REQUESTING_ENTITIES = [
  'Ministry of Health',
  'Ministry of Education',
  'Ministry of Agriculture',
  'Ministry of Finance',
  'Ministry of Works',
  'Ministry of Environment',
  'Ministry of Water Resources',
  'Ministry of Commerce',
  'Ministry of Youth and Sports',
  'Ministry of Women Affairs',
  'Local Government Service Commission',
  'Kano State Internal Revenue Service',
  'Kano State Planning Commission',
  'Other Government Agency'
] as const

export type RequestingEntityType = typeof REQUESTING_ENTITIES[number]
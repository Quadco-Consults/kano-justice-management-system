import { LegalAdvisoryRequest, LegalOpinion, AdvisoryCategory } from '@/types/legal-advisory'

// Mock legal advisory requests
export const legalAdvisoryRequests: LegalAdvisoryRequest[] = [
  {
    id: 'LAR-2024-001',
    title: 'Legal Opinion on New Health Policy Implementation',
    description: 'The Ministry of Health requires legal guidance on the implementation of a new public health policy regarding vaccination requirements for school children.',
    requestingMinistry: 'Ministry of Health',
    contactPerson: 'Dr. Amina Mohammed',
    contactEmail: 'amina.mohammed@health.kano.gov.ng',
    contactPhone: '+234 803 123 4567',
    priority: 'high',
    status: 'under_review',
    category: 'Constitutional Law',
    documents: [
      {
        id: 'doc-1',
        name: 'Draft Health Policy.pdf',
        type: 'application/pdf',
        size: 2048576,
        url: '/documents/draft-health-policy.pdf',
        uploadedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        uploadedBy: 'Dr. Amina Mohammed'
      }
    ],
    assignedTo: 'Fatima Abdullahi',
    estimatedCompletion: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    createdBy: 'Dr. Amina Mohammed',
    reviewNotes: 'Initial review completed. Requires constitutional analysis.'
  },
  {
    id: 'LAR-2024-002',
    title: 'Contract Review for Infrastructure Project',
    description: 'Review of contract terms for the Kano-Kaduna highway expansion project to ensure compliance with procurement laws.',
    requestingMinistry: 'Ministry of Works',
    contactPerson: 'Eng. Ibrahim Sani',
    contactEmail: 'ibrahim.sani@works.kano.gov.ng',
    contactPhone: '+234 805 987 6543',
    priority: 'medium',
    status: 'pending',
    category: 'Public Procurement',
    documents: [
      {
        id: 'doc-2',
        name: 'Infrastructure Contract Draft.pdf',
        type: 'application/pdf',
        size: 5242880,
        url: '/documents/infrastructure-contract.pdf',
        uploadedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        uploadedBy: 'Eng. Ibrahim Sani'
      }
    ],
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    createdBy: 'Eng. Ibrahim Sani'
  },
  {
    id: 'LAR-2024-003',
    title: 'Employment Law Guidance',
    description: 'Clarification needed on new employment regulations for state civil servants, particularly regarding overtime compensation.',
    requestingMinistry: 'Local Government Service Commission',
    contactPerson: 'Hajiya Zainab Umar',
    contactEmail: 'zainab.umar@lgsc.kano.gov.ng',
    contactPhone: '+234 807 456 7890',
    priority: 'low',
    status: 'completed',
    category: 'Employment Law',
    documents: [],
    assignedTo: 'Aisha Garba',
    estimatedCompletion: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    actualCompletion: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    createdBy: 'Hajiya Zainab Umar',
    legalOpinion: 'The proposed overtime compensation structure is in compliance with existing labor laws...'
  },
  {
    id: 'LAR-2024-004',
    title: 'Environmental Compliance Assessment',
    description: 'Legal review of environmental impact assessment procedures for industrial development in Kano State.',
    requestingMinistry: 'Ministry of Environment',
    contactPerson: 'Malam Garba Datti',
    contactEmail: 'garba.datti@environment.kano.gov.ng',
    contactPhone: '+234 809 234 5678',
    priority: 'urgent',
    status: 'requires_clarification',
    category: 'Environmental Law',
    documents: [
      {
        id: 'doc-3',
        name: 'EIA Guidelines.pdf',
        type: 'application/pdf',
        size: 3145728,
        url: '/documents/eia-guidelines.pdf',
        uploadedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
        uploadedBy: 'Malam Garba Datti'
      }
    ],
    assignedTo: 'Fatima Abdullahi',
    estimatedCompletion: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    createdBy: 'Malam Garba Datti',
    reviewNotes: 'Need additional information on specific industrial activities covered.'
  }
]

// Mock legal opinions
export const legalOpinions: LegalOpinion[] = [
  {
    id: 'LO-2024-001',
    requestId: 'LAR-2024-003',
    opinion: 'After careful review of the proposed overtime compensation structure for state civil servants, it is our legal opinion that the structure is in compliance with existing labor laws and constitutional provisions regarding fair compensation.',
    legalBasis: 'The proposal is grounded in Section 17(3)(a) of the Constitution of the Federal Republic of Nigeria, 1999 (as amended), the Labour Act (Cap L1 LFN 2004), and the Kano State Civil Service Rules.',
    recommendations: [
      'Implement the proposed overtime compensation structure',
      'Establish clear guidelines for overtime authorization',
      'Create a monitoring mechanism to ensure compliance',
      'Provide training for HR personnel on the new structure'
    ],
    limitations: 'This opinion is specific to the overtime compensation structure and does not cover other employment benefits.',
    author: 'Aisha Garba',
    reviewedBy: 'Fatima Abdullahi',
    approvedBy: 'Haruna Ibrahim Kano',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    approvedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
  }
]

// Mock advisory categories
export const advisoryCategories: AdvisoryCategory[] = [
  {
    id: 'cat-1',
    name: 'Constitutional Law',
    description: 'Legal matters relating to constitutional interpretation and compliance',
    department: 'Legal Advisory',
    estimatedDuration: 14,
    requiredDocuments: ['Relevant legislation', 'Constitutional provisions', 'Case precedents']
  },
  {
    id: 'cat-2',
    name: 'Public Procurement',
    description: 'Contract reviews, procurement procedures, and compliance matters',
    department: 'Legal Advisory',
    estimatedDuration: 10,
    requiredDocuments: ['Contract drafts', 'Procurement documents', 'Vendor information']
  },
  {
    id: 'cat-3',
    name: 'Employment Law',
    description: 'Civil service matters, employment disputes, and HR policy guidance',
    department: 'Legal Advisory',
    estimatedDuration: 7,
    requiredDocuments: ['Employment contracts', 'Policy documents', 'Relevant regulations']
  },
  {
    id: 'cat-4',
    name: 'Environmental Law',
    description: 'Environmental compliance, impact assessments, and regulatory matters',
    department: 'Legal Advisory',
    estimatedDuration: 21,
    requiredDocuments: ['Environmental impact assessments', 'Regulatory frameworks', 'Scientific reports']
  }
]
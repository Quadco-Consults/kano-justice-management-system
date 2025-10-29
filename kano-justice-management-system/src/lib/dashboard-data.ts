import {
  DashboardMetrics,
  CaseMetrics,
  MonthlyData,
  DepartmentPerformance,
  StatutorySubmission,
  RecentActivity,
  CourtSchedule
} from '@/types/dashboard'

// Mock dashboard metrics
export const dashboardMetrics: DashboardMetrics = {
  totalCases: 1247,
  activeCases: 189,
  completedCases: 1058,
  pendingCases: 189,
  successRate: 84.7,
  avgResolutionTime: 45, // days
  monthlyGrowth: 12.5
}

// Mock case metrics
export const caseMetrics: CaseMetrics = {
  publicProsecution: {
    total: 847,
    active: 123,
    won: 678,
    lost: 46,
    pending: 123
  },
  civilLitigation: {
    total: 234,
    active: 45,
    settled: 167,
    ongoing: 45,
    appeals: 22
  },
  legalAdvisory: {
    total: 166,
    processed: 144,
    pending: 22,
    avgResponseTime: 3.2 // days
  }
}

// Mock monthly data for charts
export const monthlyData: MonthlyData[] = [
  { month: 'Jan', casesOpened: 85, casesClosed: 78, revenue: 245000 },
  { month: 'Feb', casesOpened: 92, casesClosed: 85, revenue: 267000 },
  { month: 'Mar', casesOpened: 78, casesClosed: 89, revenue: 289000 },
  { month: 'Apr', casesOpened: 103, casesClosed: 95, revenue: 312000 },
  { month: 'May', casesOpened: 117, casesClosed: 108, revenue: 334000 },
  { month: 'Jun', casesOpened: 134, casesClosed: 125, revenue: 356000 },
  { month: 'Jul', casesOpened: 128, casesClosed: 119, revenue: 378000 },
  { month: 'Aug', casesOpened: 142, casesClosed: 135, revenue: 401000 },
  { month: 'Sep', casesOpened: 156, casesClosed: 148, revenue: 423000 },
  { month: 'Oct', casesOpened: 139, casesClosed: 142, revenue: 445000 }
]

// Mock department performance
export const departmentPerformance: DepartmentPerformance[] = [
  {
    department: 'Public Prosecution',
    totalCases: 847,
    completedCases: 724,
    pendingCases: 123,
    efficiency: 85.5
  },
  {
    department: 'Civil Litigation',
    totalCases: 234,
    completedCases: 189,
    pendingCases: 45,
    efficiency: 80.8
  },
  {
    department: 'Legal Advisory',
    totalCases: 166,
    completedCases: 144,
    pendingCases: 22,
    efficiency: 86.7
  },
  {
    department: 'Legislative Drafting',
    totalCases: 45,
    completedCases: 42,
    pendingCases: 3,
    efficiency: 93.3
  }
]

// Mock statutory submissions
export const statutorySubmissions: StatutorySubmission[] = [
  {
    id: '1',
    title: 'Quarterly Case Report',
    department: 'Public Prosecution',
    dueDate: new Date('2024-11-15'),
    status: 'pending',
    priority: 'high'
  },
  {
    id: '2',
    title: 'Legislative Review Summary',
    department: 'Legislative Drafting',
    dueDate: new Date('2024-11-20'),
    status: 'submitted',
    priority: 'medium'
  },
  {
    id: '3',
    title: 'Court Performance Report',
    department: 'Civil Litigation',
    dueDate: new Date('2024-11-10'),
    status: 'overdue',
    priority: 'high'
  },
  {
    id: '4',
    title: 'Advisory Services Annual Report',
    department: 'Legal Advisory',
    dueDate: new Date('2024-12-01'),
    status: 'pending',
    priority: 'low'
  }
]

// Mock recent activities
export const recentActivities: RecentActivity[] = [
  {
    id: '1',
    type: 'case_opened',
    title: 'New Criminal Case Filed',
    description: 'Case No. CR/2024/1247 - Armed Robbery',
    user: 'Mohammed Usman',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    status: 'info'
  },
  {
    id: '2',
    type: 'case_closed',
    title: 'Civil Case Resolved',
    description: 'Case No. CV/2024/0234 - Contract Dispute settled',
    user: 'Aisha Garba',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    status: 'success'
  },
  {
    id: '3',
    type: 'advisory_request',
    title: 'Legal Opinion Requested',
    description: 'Ministry of Health seeks legal guidance on new policy',
    user: 'Fatima Abdullahi',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    status: 'warning'
  },
  {
    id: '4',
    type: 'document_filed',
    title: 'Court Filing Submitted',
    description: 'Appeal documents filed for Case No. AP/2024/0089',
    user: 'Ibrahim Kano',
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
    status: 'info'
  }
]

// Mock court schedule
export const courtSchedule: CourtSchedule[] = [
  {
    id: '1',
    caseNumber: 'CR/2024/1200',
    caseTitle: 'State vs. Ahmed Musa',
    court: 'High Court 1',
    date: new Date('2024-10-28'),
    time: '09:00 AM',
    prosecutor: 'Mohammed Usman',
    status: 'scheduled'
  },
  {
    id: '2',
    caseNumber: 'CV/2024/0890',
    caseTitle: 'Kano State vs. Construction Co.',
    court: 'High Court 2',
    date: new Date('2024-10-28'),
    time: '11:00 AM',
    prosecutor: 'Aisha Garba',
    status: 'scheduled'
  },
  {
    id: '3',
    caseNumber: 'CR/2024/1156',
    caseTitle: 'State vs. Business Ltd.',
    court: 'Magistrate Court A',
    date: new Date('2024-10-29'),
    time: '02:00 PM',
    prosecutor: 'Ibrahim Kano',
    status: 'postponed'
  },
  {
    id: '4',
    caseNumber: 'CV/2024/0567',
    caseTitle: 'Land Dispute Case',
    court: 'High Court 3',
    date: new Date('2024-10-30'),
    time: '10:30 AM',
    prosecutor: 'Fatima Abdullahi',
    status: 'scheduled'
  }
]
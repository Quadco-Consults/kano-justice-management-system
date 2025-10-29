export interface DashboardMetrics {
  totalCases: number
  activeCases: number
  completedCases: number
  pendingCases: number
  successRate: number
  avgResolutionTime: number
  monthlyGrowth: number
}

export interface CaseMetrics {
  publicProsecution: {
    total: number
    active: number
    won: number
    lost: number
    pending: number
  }
  civilLitigation: {
    total: number
    active: number
    settled: number
    ongoing: number
    appeals: number
  }
  legalAdvisory: {
    total: number
    processed: number
    pending: number
    avgResponseTime: number
  }
}

export interface MonthlyData {
  month: string
  casesOpened: number
  casesClosed: number
  revenue: number
}

export interface DepartmentPerformance {
  department: string
  totalCases: number
  completedCases: number
  pendingCases: number
  efficiency: number
}

export interface StatutorySubmission {
  id: string
  title: string
  department: string
  dueDate: Date
  status: 'pending' | 'submitted' | 'overdue'
  priority: 'low' | 'medium' | 'high'
}

export interface RecentActivity {
  id: string
  type: 'case_opened' | 'case_closed' | 'advisory_request' | 'document_filed'
  title: string
  description: string
  user: string
  timestamp: Date
  status: 'success' | 'warning' | 'info'
}

export interface CourtSchedule {
  id: string
  caseNumber: string
  caseTitle: string
  court: string
  date: Date
  time: string
  prosecutor: string
  status: 'scheduled' | 'postponed' | 'completed'
}
'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts'
import {
  Scale,
  FileText,
  Clock,
  TrendingUp,
  Users,
  Calendar,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'

import Navbar from '@/components/dashboard/navbar'
import Sidebar from '@/components/dashboard/sidebar'
import MetricCard from '@/components/ui/metric-card'
import {
  dashboardMetrics,
  caseMetrics,
  monthlyData,
  departmentPerformance,
  statutorySubmissions,
  recentActivities,
  courtSchedule
} from '@/lib/dashboard-data'

const COLORS = ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444']

export default function DashboardPage() {
  const { data: session } = useSession()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-NG', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-600 bg-green-100'
      case 'warning':
        return 'text-yellow-600 bg-yellow-100'
      case 'info':
        return 'text-blue-600 bg-blue-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-100'
      case 'medium':
        return 'text-yellow-600 bg-yellow-100'
      case 'low':
        return 'text-green-600 bg-green-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const pieData = [
    { name: 'Public Prosecution', value: caseMetrics.publicProsecution.total },
    { name: 'Civil Litigation', value: caseMetrics.civilLitigation.total },
    { name: 'Legal Advisory', value: caseMetrics.legalAdvisory.total },
    { name: 'Other', value: 50 }
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={isMobileMenuOpen} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar
          onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          isMobileMenuOpen={isMobileMenuOpen}
        />

        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="p-6">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-secondary-900">
                Welcome back, {session?.user?.name}
              </h1>
              <p className="text-secondary-600 mt-1">
                Here's what's happening at the Ministry of Justice today.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MetricCard
                title="Total Cases"
                value={dashboardMetrics.totalCases.toLocaleString()}
                change={{ value: dashboardMetrics.monthlyGrowth, type: 'increase' }}
                icon={Scale}
                description="All time"
              />
              <MetricCard
                title="Active Cases"
                value={dashboardMetrics.activeCases}
                icon={FileText}
                iconColor="text-blue-600"
                description="Currently being processed"
              />
              <MetricCard
                title="Success Rate"
                value={`${dashboardMetrics.successRate}%`}
                change={{ value: 2.1, type: 'increase' }}
                icon={TrendingUp}
                iconColor="text-green-600"
                description="Case resolution success"
              />
              <MetricCard
                title="Avg. Resolution Time"
                value={`${dashboardMetrics.avgResolutionTime} days`}
                change={{ value: 5.2, type: 'decrease' }}
                icon={Clock}
                iconColor="text-purple-600"
                description="Average case duration"
              />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Monthly Cases Chart */}
              <div className="card">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  Monthly Case Activity
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="casesOpened" fill="#22c55e" name="Cases Opened" />
                    <Bar dataKey="casesClosed" fill="#3b82f6" name="Cases Closed" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Case Distribution Pie Chart */}
              <div className="card">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  Case Distribution by Department
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }: any) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Activities */}
              <div className="lg:col-span-2 card">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  Recent Activities
                </h3>
                <div className="space-y-4">
                  {recentActivities.slice(0, 5).map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className={`p-2 rounded-full ${getStatusColor(activity.status)}`}>
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-secondary-900">
                          {activity.title}
                        </p>
                        <p className="text-sm text-secondary-600">{activity.description}</p>
                        <p className="text-xs text-secondary-500 mt-1">
                          {activity.user} • {formatDate(activity.timestamp)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Deadlines */}
              <div className="card">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  Upcoming Deadlines
                </h3>
                <div className="space-y-3">
                  {statutorySubmissions.slice(0, 4).map((submission) => (
                    <div key={submission.id} className="border-l-4 border-primary-500 pl-3">
                      <p className="text-sm font-medium text-secondary-900">
                        {submission.title}
                      </p>
                      <p className="text-xs text-secondary-600">{submission.department}</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-xs text-secondary-500">
                          {formatDate(submission.dueDate)}
                        </p>
                        <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(submission.priority)}`}>
                          {submission.priority}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
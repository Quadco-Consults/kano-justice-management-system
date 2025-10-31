"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, FileText, Download, Calendar, TrendingUp } from "lucide-react"

const reportCategories = [
  {
    name: 'Prosecution Reports',
    icon: BarChart3,
    reports: [
      { name: 'Monthly Prosecution Summary', frequency: 'Monthly' },
      { name: 'Case Win/Loss Analysis', frequency: 'Quarterly' },
      { name: 'Prosecutor Performance Report', frequency: 'Monthly' },
      { name: 'Court Appearance Report', frequency: 'Weekly' },
      { name: 'Conviction Rate Report', frequency: 'Monthly' },
    ]
  },
  {
    name: 'Civil Litigation Reports',
    icon: BarChart3,
    reports: [
      { name: 'Active Litigation Summary', frequency: 'Monthly' },
      { name: 'Settlement Analysis', frequency: 'Quarterly' },
      { name: 'Financial Impact Report', frequency: 'Quarterly' },
      { name: 'Case Outcome Report', frequency: 'Monthly' },
    ]
  },
  {
    name: 'Advisory Reports',
    icon: FileText,
    reports: [
      { name: 'Legal Advisory Request Summary', frequency: 'Monthly' },
      { name: 'Response Time Analysis', frequency: 'Monthly' },
      { name: 'Agency Request Breakdown', frequency: 'Quarterly' },
    ]
  },
  {
    name: 'Compliance Reports',
    icon: FileText,
    reports: [
      { name: 'Statutory Submission Status', frequency: 'Monthly' },
      { name: 'Compliance Dashboard', frequency: 'Weekly' },
      { name: 'Overdue Submissions Report', frequency: 'Weekly' },
    ]
  },
  {
    name: 'Performance Reports',
    icon: TrendingUp,
    reports: [
      { name: 'Department Performance', frequency: 'Monthly' },
      { name: 'Individual Staff Performance', frequency: 'Quarterly' },
      { name: 'Workload Distribution', frequency: 'Monthly' },
      { name: 'SLA Compliance', frequency: 'Monthly' },
    ]
  },
  {
    name: 'Executive Reports',
    icon: BarChart3,
    reports: [
      { name: 'Monthly Executive Summary', frequency: 'Monthly' },
      { name: 'Quarterly Performance Review', frequency: 'Quarterly' },
      { name: 'Annual Statistical Report', frequency: 'Annual' },
    ]
  },
]

export function ReportsList() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600">Generate and export comprehensive reports</p>
        </div>
        <Button>
          <Calendar className="w-4 h-4 mr-2" />
          Schedule Report
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Report Templates</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Generated This Month</p>
                <p className="text-2xl font-bold text-blue-600">147</p>
              </div>
              <BarChart3 className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Scheduled Reports</p>
                <p className="text-2xl font-bold text-[#8B1538]">12</p>
              </div>
              <Calendar className="w-8 h-8 text-[#8B1538]" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Custom Reports</p>
                <p className="text-2xl font-bold text-green-600">8</p>
              </div>
              <FileText className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Report Categories */}
      <div className="space-y-6">
        {reportCategories.map((category) => (
          <Card key={category.name}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <category.icon className="w-5 h-5 text-[#8B1538]" />
                {category.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.reports.map((report) => (
                  <div
                    key={report.name}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#8B1538] hover:shadow-sm transition-all"
                  >
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-1">{report.name}</h3>
                      <p className="text-sm text-gray-600">Frequency: {report.frequency}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Preview
                      </Button>
                      <Button size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Generate
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Custom Report Builder */}
      <Card className="border-2 border-dashed border-gray-300 hover:border-[#8B1538] transition-colors">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Report Builder</h3>
            <p className="text-gray-600 mb-4">Create custom reports with your own data filters and visualizations</p>
            <Button>
              <FileText className="w-4 h-4 mr-2" />
              Create Custom Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

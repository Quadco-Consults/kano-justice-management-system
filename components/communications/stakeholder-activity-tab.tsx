"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MessageSquare,
  FileText,
  Download,
  Eye,
  CheckCircle,
  Clock,
  User,
  Building2,
  TrendingUp,
} from "lucide-react"

const mockActivities = [
  {
    id: 1,
    stakeholder: 'Kano State Police Command',
    contactPerson: 'ACP Ibrahim Musa',
    action: 'Downloaded Document',
    description: 'Downloaded Summons - Case CR/45/2025',
    timestamp: '2025-10-31 11:15 AM',
    type: 'download',
  },
  {
    id: 2,
    stakeholder: 'Office of the Governor',
    contactPerson: 'Chief of Staff Amina Hassan',
    action: 'Approved Workflow',
    description: 'Approved Land Acquisition Framework Amendment (APV-2025-0012)',
    timestamp: '2025-10-31 10:00 AM',
    type: 'approval',
  },
  {
    id: 3,
    stakeholder: 'Federal High Court Kano',
    contactPerson: 'Chief Registrar Ahmad Bello',
    action: 'Sent Message',
    description: 'Requested confirmation for case CR/48/2025 judgment',
    timestamp: '2025-10-30 04:45 PM',
    type: 'message',
  },
  {
    id: 4,
    stakeholder: 'Ministry of Education',
    contactPerson: 'Permanent Secretary Fatima Hassan',
    action: 'Viewed Document',
    description: 'Viewed Legal Opinion - Education Policy (SH-DOC/2025/002)',
    timestamp: '2025-10-30 02:30 PM',
    type: 'view',
  },
  {
    id: 5,
    stakeholder: 'Kano State Police Command',
    contactPerson: 'ACP Ibrahim Musa',
    action: 'Sent Message',
    description: 'Inquired about hearing schedule for CR/45/2025',
    timestamp: '2025-10-30 10:30 AM',
    type: 'message',
  },
  {
    id: 6,
    stakeholder: 'Office of the Attorney General Federation',
    contactPerson: 'Director Amina Yusuf',
    action: 'Acknowledged Document',
    description: 'Acknowledged receipt of quarterly compliance report',
    timestamp: '2025-10-29 03:20 PM',
    type: 'acknowledgment',
  },
  {
    id: 7,
    stakeholder: 'Kano State House of Assembly',
    contactPerson: 'Clerk of the House Musa Ali',
    action: 'Downloaded Document',
    description: 'Downloaded Criminal Justice Reform Bill draft',
    timestamp: '2025-10-29 11:45 AM',
    type: 'download',
  },
  {
    id: 8,
    stakeholder: 'Ministry of Education',
    contactPerson: 'Permanent Secretary Fatima Hassan',
    action: 'Downloaded Document',
    description: 'Downloaded Legal Opinion - Education Policy',
    timestamp: '2025-10-29 10:15 AM',
    type: 'download',
  },
]

const mockStakeholderStats = [
  {
    stakeholder: 'Kano State Police Command',
    interactions: 47,
    documentsShared: 23,
    lastActive: '2025-10-31',
    responseTime: '2.4 hours',
  },
  {
    stakeholder: 'Office of the Governor',
    interactions: 89,
    documentsShared: 56,
    lastActive: '2025-10-31',
    responseTime: '4.1 hours',
  },
  {
    stakeholder: 'Federal High Court Kano',
    interactions: 134,
    documentsShared: 78,
    lastActive: '2025-10-30',
    responseTime: '1.8 hours',
  },
  {
    stakeholder: 'Ministry of Education',
    interactions: 52,
    documentsShared: 34,
    lastActive: '2025-10-30',
    responseTime: '3.2 hours',
  },
]

export function StakeholderActivityTab() {
  return (
    <div className="space-y-6">
      {/* Top Stakeholders by Engagement */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#006403]" />
            Top Stakeholders by Engagement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockStakeholderStats.map((stat, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg hover:border-[#006403] hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-[#006403]" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{stat.stakeholder}</h3>
                      <p className="text-sm text-gray-600">
                        Last active: {new Date(stat.lastActive).toLocaleDateString('en-NG')}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline">{stat.responseTime} avg response</Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-600">{stat.interactions} interactions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#006403]" />
                    <span className="text-gray-600">{stat.documentsShared} documents</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockActivities.map((activity, index) => {
              const bgColors = ['bg-blue-50', 'bg-green-50', 'bg-purple-50', 'bg-red-50']
              const borderColors = ['border-blue-500', 'border-green-500', 'border-purple-500', 'border-red-500']
              const iconColors = ['text-blue-600', 'text-green-600', 'text-purple-600', 'text-red-600']
              const colorIndex = index % 4

              const getActivityIcon = (type: string) => {
                switch (type) {
                  case 'download':
                    return <Download className={`w-5 h-5 ${iconColors[colorIndex]} mt-0.5`} />
                  case 'view':
                    return <Eye className={`w-5 h-5 ${iconColors[colorIndex]} mt-0.5`} />
                  case 'message':
                    return <MessageSquare className={`w-5 h-5 ${iconColors[colorIndex]} mt-0.5`} />
                  case 'approval':
                    return <CheckCircle className={`w-5 h-5 ${iconColors[colorIndex]} mt-0.5`} />
                  case 'acknowledgment':
                    return <CheckCircle className={`w-5 h-5 ${iconColors[colorIndex]} mt-0.5`} />
                  default:
                    return <FileText className={`w-5 h-5 ${iconColors[colorIndex]} mt-0.5`} />
                }
              }

              return (
                <div
                  key={activity.id}
                  className={`flex items-start gap-3 p-4 border-l-4 ${borderColors[colorIndex]} ${bgColors[colorIndex]} rounded`}
                >
                  {getActivityIcon(activity.type)}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold text-gray-900">{activity.action}</p>
                          <Badge
                            variant="outline"
                            className={
                              activity.type === 'approval'
                                ? 'bg-green-100 text-green-800'
                                : activity.type === 'message'
                                ? 'bg-blue-100 text-blue-800'
                                : ''
                            }
                          >
                            {activity.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-gray-400" />
                            <span>{activity.stakeholder}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-gray-400" />
                            <span>{activity.contactPerson}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 ml-4">
                        <Clock className="w-3 h-3" />
                        <span>{activity.timestamp}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

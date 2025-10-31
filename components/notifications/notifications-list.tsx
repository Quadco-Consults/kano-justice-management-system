"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Bell, Calendar, Check, Trash2 } from "lucide-react"

const mockNotifications = [
  {
    id: 1,
    title: 'New Legal Advisory Request',
    message: 'Ministry of Education submitted a new request for contract review',
    category: 'Advisory',
    priority: 'high',
    read: false,
    timestamp: '2025-10-31T10:30:00',
  },
  {
    id: 2,
    title: 'Court Hearing Reminder',
    message: 'Case CR/45/2025 hearing scheduled for tomorrow at High Court 1',
    category: 'Hearing',
    priority: 'urgent',
    read: false,
    timestamp: '2025-10-31T09:15:00',
  },
  {
    id: 3,
    title: 'Statutory Submission Due',
    message: 'Quarterly Compliance Report due in 5 days',
    category: 'Deadline',
    priority: 'medium',
    read: false,
    timestamp: '2025-10-31T08:00:00',
  },
  {
    id: 4,
    title: 'Case Assignment',
    message: 'You have been assigned to Case CR/52/2025',
    category: 'Assignment',
    priority: 'medium',
    read: true,
    timestamp: '2025-10-30T16:45:00',
  },
  {
    id: 5,
    title: 'Document Shared',
    message: 'Kano State Police shared evidence documents for Case CR/46/2025',
    category: 'Document',
    priority: 'low',
    read: true,
    timestamp: '2025-10-30T14:20:00',
  },
  {
    id: 6,
    title: 'Bill Progress Update',
    message: 'Environmental Protection Bill 2025 moved to stakeholder consultation stage',
    category: 'Legislative',
    priority: 'low',
    read: true,
    timestamp: '2025-10-30T11:30:00',
  },
  {
    id: 7,
    title: 'Approval Required',
    message: 'Legal opinion draft requires your review and approval',
    category: 'Approval',
    priority: 'high',
    read: false,
    timestamp: '2025-10-29T15:00:00',
  },
  {
    id: 8,
    title: 'System Update',
    message: 'New features have been added to the case management system',
    category: 'System',
    priority: 'low',
    read: true,
    timestamp: '2025-10-29T09:00:00',
  },
]

const priorityColors = {
  urgent: 'bg-red-100 text-red-800 border-red-200',
  high: 'bg-orange-100 text-orange-800 border-orange-200',
  medium: 'bg-blue-100 text-blue-800 border-blue-200',
  low: 'bg-gray-100 text-gray-800 border-gray-200',
}

export function NotificationsList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [notifications, setNotifications] = useState(mockNotifications)

  const unreadCount = notifications.filter(n => !n.read).length

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    ))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })))
  }

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id))
  }

  const getTimeAgo = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (minutes < 60) return `${minutes}m ago`
    if (hours < 24) return `${hours}h ago`
    return `${days}d ago`
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-600">Stay updated on important events and deadlines</p>
        </div>
        <Button onClick={markAllAsRead} variant="outline">
          <Check className="w-4 h-4 mr-2" />
          Mark All as Read
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total</p>
                <p className="text-2xl font-bold text-gray-900">{notifications.length}</p>
              </div>
              <Bell className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Unread</p>
                <p className="text-2xl font-bold text-orange-600">{unreadCount}</p>
              </div>
              <Bell className="w-8 h-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Urgent</p>
                <p className="text-2xl font-bold text-red-600">
                  {notifications.filter(n => n.priority === 'urgent').length}
                </p>
              </div>
              <Bell className="w-8 h-8 text-red-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Today</p>
                <p className="text-2xl font-bold text-[#006403]">
                  {notifications.filter(n =>
                    new Date(n.timestamp).toDateString() === new Date().toDateString()
                  ).length}
                </p>
              </div>
              <Calendar className="w-8 h-8 text-[#006403]" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search notifications..."
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

      {/* Notifications List */}
      <Card>
        <CardHeader>
          <CardTitle>All Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 border rounded-lg transition-all ${
                  notification.read
                    ? 'border-gray-200 bg-white'
                    : 'border-[#006403] bg-red-50'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className={`font-semibold ${notification.read ? 'text-gray-900' : 'text-gray-900'}`}>
                        {notification.title}
                      </h3>
                      <Badge className={priorityColors[notification.priority as keyof typeof priorityColors]}>
                        {notification.priority}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {notification.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                    <p className="text-xs text-gray-500">{getTimeAgo(notification.timestamp)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {!notification.read && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => markAsRead(notification.id)}
                      >
                        <Check className="w-4 h-4" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteNotification(notification.id)}
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

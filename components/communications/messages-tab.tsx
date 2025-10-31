"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  MessageSquare,
  Send,
  Search,
  Plus,
  Paperclip,
  User,
  Building2,
  Clock,
  CheckCheck,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const mockConversations = [
  {
    id: 1,
    stakeholder: 'Kano State Police Command',
    contactPerson: 'ACP Ibrahim Musa',
    lastMessage: 'We have received the summons for case CR/45/2025. When should we expect the defendant?',
    timestamp: '2025-10-31 10:30 AM',
    unread: 2,
    status: 'urgent',
  },
  {
    id: 2,
    stakeholder: 'Office of the Governor',
    contactPerson: 'Chief of Staff Amina Hassan',
    lastMessage: 'Approval for legal advisory request LAR-20251028-001 has been processed.',
    timestamp: '2025-10-31 09:15 AM',
    unread: 0,
    status: 'normal',
  },
  {
    id: 3,
    stakeholder: 'Federal High Court Kano',
    contactPerson: 'Chief Registrar Ahmad Bello',
    lastMessage: 'Please confirm receipt of the judgment for case CR/48/2025.',
    timestamp: '2025-10-30 04:45 PM',
    unread: 1,
    status: 'normal',
  },
  {
    id: 4,
    stakeholder: 'Ministry of Education',
    contactPerson: 'Permanent Secretary Fatima Hassan',
    lastMessage: 'Thank you for the legal opinion on the scholarship program policy.',
    timestamp: '2025-10-30 02:20 PM',
    unread: 0,
    status: 'normal',
  },
]

const mockMessages = [
  {
    id: 1,
    sender: 'ACP Ibrahim Musa',
    senderType: 'external',
    message: 'Good morning. We have received the summons for case CR/45/2025. When should we expect the defendant to be presented?',
    timestamp: '2025-10-31 10:30 AM',
    read: true,
  },
  {
    id: 2,
    sender: 'You',
    senderType: 'internal',
    message: 'Good morning ACP. The hearing is scheduled for November 5, 2025 at 10:00 AM. Please ensure the defendant is presented by 9:30 AM for processing.',
    timestamp: '2025-10-31 10:45 AM',
    read: true,
  },
  {
    id: 3,
    sender: 'ACP Ibrahim Musa',
    senderType: 'external',
    message: 'Noted. We will ensure compliance. Should we bring any additional documentation?',
    timestamp: '2025-10-31 11:00 AM',
    read: false,
  },
]

export function MessagesTab() {
  const [selectedConversation, setSelectedConversation] = useState(mockConversations[0])
  const [newMessage, setNewMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [isNewMessageDialogOpen, setIsNewMessageDialogOpen] = useState(false)

  const handleSendMessage = () => {
    console.log('Sending message:', newMessage)
    setNewMessage("")
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Conversations List */}
      <Card className="lg:col-span-1">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <CardTitle>Conversations</CardTitle>
            <Dialog open={isNewMessageDialogOpen} onOpenChange={setIsNewMessageDialogOpen}>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  New
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>New Message</DialogTitle>
                  <DialogDescription>
                    Start a new conversation with a stakeholder
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label>Stakeholder</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select stakeholder" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="police">Kano State Police Command</SelectItem>
                        <SelectItem value="governor">Office of the Governor</SelectItem>
                        <SelectItem value="court">Federal High Court Kano</SelectItem>
                        <SelectItem value="education">Ministry of Education</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Subject</Label>
                    <Input placeholder="Enter message subject" />
                  </div>
                  <div className="space-y-2">
                    <Label>Message</Label>
                    <Textarea
                      placeholder="Type your message..."
                      rows={6}
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsNewMessageDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setIsNewMessageDialogOpen(false)}>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {mockConversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation)}
                className={`p-3 rounded-lg cursor-pointer transition-all ${
                  selectedConversation.id === conversation.id
                    ? 'bg-[#8B1538]/10 border-l-4 border-[#8B1538]'
                    : 'hover:bg-gray-50 border-l-4 border-transparent'
                }`}
              >
                <div className="flex items-start justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-gray-400" />
                    <p className="font-medium text-sm text-gray-900">
                      {conversation.stakeholder}
                    </p>
                  </div>
                  {conversation.unread > 0 && (
                    <Badge className="bg-[#8B1538] text-white text-xs">
                      {conversation.unread}
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-gray-600 mb-1 line-clamp-2">
                  {conversation.lastMessage}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">{conversation.timestamp}</p>
                  {conversation.status === 'urgent' && (
                    <Badge variant="destructive" className="text-xs">Urgent</Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Message Thread */}
      <Card className="lg:col-span-2">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#8B1538]" />
                {selectedConversation.stakeholder}
              </CardTitle>
              <p className="text-sm text-gray-600 mt-1">
                Contact: {selectedConversation.contactPerson}
              </p>
            </div>
            <Badge variant="outline">Active</Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          {/* Messages */}
          <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto">
            {mockMessages.map((message, index) => {
              const bgColors = ['bg-blue-50', 'bg-green-50', 'bg-purple-50', 'bg-red-50']
              const borderColors = ['border-blue-500', 'border-green-500', 'border-purple-500', 'border-red-500']
              const iconColors = ['text-blue-600', 'text-green-600', 'text-purple-600', 'text-red-600']
              const colorIndex = index % 4

              return (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 p-4 border-l-4 ${borderColors[colorIndex]} ${bgColors[colorIndex]} rounded`}
                >
                  <User className={`w-5 h-5 ${iconColors[colorIndex]} mt-0.5`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-900">{message.sender}</p>
                        <Badge variant={message.senderType === 'internal' ? 'default' : 'secondary'} className="text-xs">
                          {message.senderType === 'internal' ? 'Internal' : 'External'}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        <span>{message.timestamp}</span>
                        {message.read && <CheckCheck className="w-4 h-4 text-blue-600" />}
                      </div>
                    </div>
                    <p className="text-gray-900">{message.message}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Message Input */}
          <div className="border-t pt-4">
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Paperclip className="w-4 h-4" />
              </Button>
              <Textarea
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                rows={3}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                <Send className="w-4 h-4 mr-2" />
                Send
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

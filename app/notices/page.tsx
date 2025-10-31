import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Bell, Search, Calendar, FileText, AlertCircle } from "lucide-react"

// Mock data
const notices = [
  {
    id: 1,
    title: "Public Consultation on Land Use Act Amendment Bill",
    category: "Public Consultation",
    date: "2025-10-28",
    excerpt: "The Ministry of Justice invites stakeholders to submit comments on the proposed amendments to the Land Use Act...",
    deadline: "2025-11-15"
  },
  {
    id: 2,
    title: "Legal Notice: Appointment of New Director of Public Prosecutions",
    category: "Appointment",
    date: "2025-10-25",
    excerpt: "His Excellency, the Governor of Kano State, has approved the appointment of Barr. Amina Hassan as the new Director of Public Prosecutions..."
  },
  {
    id: 3,
    title: "Notice of Statutory Compliance Deadline for MDAs",
    category: "Regulatory",
    date: "2025-10-20",
    excerpt: "All Ministries, Departments and Agencies are hereby reminded of the statutory compliance deadline for Q4 2025 submissions...",
    deadline: "2025-11-30"
  },
  {
    id: 4,
    title: "Public Notice: Amendment to Criminal Procedure Code",
    category: "Legal Notice",
    date: "2025-10-18",
    excerpt: "Notice is hereby given that the Kano State House of Assembly has passed the Criminal Procedure Code (Amendment) Bill 2025..."
  },
  {
    id: 5,
    title: "Tender Notice: Legal Document Management System",
    category: "Tender",
    date: "2025-10-15",
    excerpt: "The Ministry of Justice invites qualified vendors to submit proposals for the supply and installation of a Legal Document Management System...",
    deadline: "2025-11-10"
  },
  {
    id: 6,
    title: "Public Notice: New Anti-Corruption Guidelines",
    category: "Regulatory",
    date: "2025-10-10",
    excerpt: "The Ministry has issued new guidelines for anti-corruption compliance applicable to all public servants and contractors..."
  }
]

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    "Public Consultation": "bg-blue-100 text-blue-800 border-blue-200",
    "Appointment": "bg-green-100 text-green-800 border-green-200",
    "Regulatory": "bg-orange-100 text-orange-800 border-orange-200",
    "Legal Notice": "bg-purple-100 text-purple-800 border-purple-200",
    "Tender": "bg-yellow-100 text-yellow-800 border-yellow-200"
  }
  return colors[category] || "bg-gray-100 text-gray-800 border-gray-200"
}

export default function NoticesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8B1538]/10 rounded-full mb-4">
              <Bell className="w-8 h-8 text-[#8B1538]" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Public Notices
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Stay informed about legal notices, public consultations, appointments, and regulatory updates from the Ministry of Justice
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search notices..."
                    className="pl-10"
                  />
                </div>
              </div>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="public-consultation">Public Consultation</SelectItem>
                  <SelectItem value="appointment">Appointment</SelectItem>
                  <SelectItem value="regulatory">Regulatory</SelectItem>
                  <SelectItem value="legal-notice">Legal Notice</SelectItem>
                  <SelectItem value="tender">Tender</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Notices List */}
          <div className="space-y-6">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className={getCategoryColor(notice.category)}>
                        {notice.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(notice.date).toLocaleDateString("en-NG", {
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        })}
                      </div>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {notice.title}
                    </h2>
                    <p className="text-gray-600">
                      {notice.excerpt}
                    </p>
                  </div>
                  <FileText className="w-6 h-6 text-gray-400 flex-shrink-0" />
                </div>

                {notice.deadline && (
                  <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                    <AlertCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-medium text-orange-600">
                      Deadline: {new Date(notice.deadline).toLocaleDateString("en-NG", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })}
                    </span>
                  </div>
                )}

                <div className="mt-4">
                  <button className="text-sm font-medium text-[#8B1538] hover:text-[#6B0F2A] hover:underline">
                    Read full notice →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                Previous
              </button>
              <button className="px-4 py-2 bg-[#8B1538] text-white rounded-lg text-sm font-medium">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                3
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

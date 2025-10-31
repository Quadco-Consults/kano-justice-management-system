import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Scale, Menu } from "lucide-react"

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#8B1538]/10 rounded-lg flex items-center justify-center">
              <Scale className="h-6 w-6 text-[#8B1538]" />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-gray-900">Kano State</div>
              <div className="text-xs text-gray-600">Ministry of Justice</div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-[#8B1538] font-medium">
              Home
            </Link>
            <Link href="/request-advisory" className="text-gray-700 hover:text-[#8B1538] font-medium">
              Request Advisory
            </Link>
            <Link href="/notices" className="text-gray-700 hover:text-[#8B1538] font-medium">
              Public Notices
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Link href="/auth/login" className="hidden sm:block">
              <Button variant="outline">Login</Button>
            </Link>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

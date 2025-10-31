import Link from "next/link"
import { Scale } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#006403]/20 rounded-lg flex items-center justify-center">
                <Scale className="h-6 w-6 text-[#E67E22]" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Kano State</div>
                <div className="text-xs text-gray-400">Ministry of Justice</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              Empowering legal excellence through technology. Streamlining justice administration for the people of Kano State.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#E67E22]">Home</Link>
              </li>
              <li>
                <Link href="/request-advisory" className="hover:text-[#E67E22]">Request Advisory</Link>
              </li>
              <li>
                <Link href="/notices" className="hover:text-[#E67E22]">Public Notices</Link>
              </li>
              <li>
                <Link href="/auth/login" className="hover:text-[#E67E22]">Staff Login</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#E67E22]">Help Center</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E67E22]">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E67E22]">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E67E22]">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ministry of Justice, Kano State. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

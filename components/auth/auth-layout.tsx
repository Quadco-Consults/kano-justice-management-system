import Image from "next/image"
import { Scale } from "lucide-react"

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle?: string
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-[#8B1538] to-[#6B0F2A]">
        {/* Background Image - Using unsplash justice/courthouse image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop')"
          }}
        />

        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Justice-themed decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -left-20 w-96 h-96 bg-[#E67E22]/10 rounded-full blur-3xl" />
        </div>

        <div className="absolute inset-0 bg-black/20 z-10" />

        <div className="relative z-20 flex flex-col justify-between p-12 text-white">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <Scale className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Kano State</h1>
              <p className="text-sm text-gray-200">Ministry of Justice</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold leading-tight">
                Justice
                <br />
                <span className="text-[#E67E22]">Management</span>
                <br />
                System
              </h2>
              <p className="text-xl text-gray-200">
                Empowering Legal Excellence Through Technology
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#E67E22] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <p className="font-medium">Automated Case Management</p>
                  <p className="text-sm text-gray-300">Track prosecutions, civil litigation, and legal opinions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#E67E22] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <p className="font-medium">Real-Time Analytics</p>
                  <p className="text-sm text-gray-300">Monitor performance with comprehensive dashboards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#E67E22] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <p className="font-medium">Secure & Compliant</p>
                  <p className="text-sm text-gray-300">Built with security and data protection at its core</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-sm text-gray-300">
            <p>&copy; 2025 Kano State Ministry of Justice</p>
            <p className="mt-1">All rights reserved</p>
          </div>
        </div>
      </div>

      {/* Right Side - Form Content */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#8B1538]/10 rounded-lg flex items-center justify-center">
                <Scale className="h-8 w-8 text-[#8B1538]" />
              </div>
              <div className="text-left">
                <h1 className="text-xl font-bold text-gray-900">Kano State</h1>
                <p className="text-sm text-gray-600">Ministry of Justice</p>
              </div>
            </div>
          </div>

          {/* Page Title */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
          </div>

          {/* Form Content */}
          {children}
        </div>
      </div>
    </div>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Scale, ArrowRight, FileText, Gavel, Users, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#8B1538] to-[#6B0F2A] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-[#E67E22]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Ministry of Justice, Kano State</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Justice
                <br />
                <span className="text-[#E67E22]">Management</span>
                <br />
                System
              </h1>
              <p className="text-xl text-gray-200 max-w-xl">
                Empowering Legal Excellence Through Technology. Streamlining prosecution, civil litigation, and legal advisory services.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/auth/login">
                <Button size="lg" className="w-full sm:w-auto bg-white text-[#8B1538] hover:bg-gray-100">
                  Staff Login
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/request-advisory">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                  Request Legal Advisory
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-[#E67E22]">1000+</div>
                <div className="text-sm text-gray-300">Cases Managed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#E67E22]">500+</div>
                <div className="text-sm text-gray-300">Legal Opinions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#E67E22]">99%</div>
                <div className="text-sm text-gray-300">Compliance Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-[#E67E22] rounded-lg flex items-center justify-center mb-4">
                <Gavel className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Public Prosecution</h3>
              <p className="text-sm text-gray-300">Track and manage criminal cases efficiently</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors mt-8">
              <div className="w-12 h-12 bg-[#E67E22] rounded-lg flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Civil Litigation</h3>
              <p className="text-sm text-gray-300">Manage state litigation matters</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-[#E67E22] rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Legal Advisory</h3>
              <p className="text-sm text-gray-300">Request expert legal opinions</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors mt-8">
              <div className="w-12 h-12 bg-[#E67E22] rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Stakeholder Portal</h3>
              <p className="text-sm text-gray-300">Seamless agency collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

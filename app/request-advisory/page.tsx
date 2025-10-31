import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { AdvisoryRequestForm } from "@/components/request-advisory/advisory-request-form"
import { Scale } from "lucide-react"

export default function RequestAdvisoryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#006403]/10 rounded-full mb-4">
              <Scale className="w-8 h-8 text-[#006403]" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Request Legal Advisory
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Submit your request for legal opinions, contract reviews, and compliance advisory from the Ministry of Justice
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <AdvisoryRequestForm />
          </div>

          {/* Help Text */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Need help? Contact us at{" "}
              <a href="mailto:advisory@justice.kano.gov.ng" className="text-[#006403] hover:underline">
                advisory@justice.kano.gov.ng
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

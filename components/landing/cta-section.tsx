import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* CTA Card */}
          <div className="bg-gradient-to-br from-[#006403] to-[#004d02] rounded-2xl p-8 lg:p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              Submit a legal advisory request or access the system if you're authorized staff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/request-advisory">
                <Button size="lg" className="w-full sm:w-auto bg-white text-[#006403] hover:bg-gray-100">
                  Request Advisory
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                  Staff Login
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#006403]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#006403]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Address</div>
                  <div className="text-gray-600">
                    Ministry of Justice<br />
                    Government House<br />
                    Kano State, Nigeria
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#006403]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#006403]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Phone</div>
                  <div className="text-gray-600">
                    +234 (0) 64 XXX XXXX
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#006403]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#006403]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Email</div>
                  <div className="text-gray-600">
                    info@justice.kano.gov.ng
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Office Hours: Monday - Friday, 8:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

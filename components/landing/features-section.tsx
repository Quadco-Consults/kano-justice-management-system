import { BarChart3, Clock, FileCheck, Lock, Bell, TrendingUp } from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Monitor performance with comprehensive dashboards and data-driven insights"
  },
  {
    icon: Clock,
    title: "Automated Workflows",
    description: "Streamline case management from intake to resolution with smart automation"
  },
  {
    icon: FileCheck,
    title: "Document Management",
    description: "Secure cloud-based storage with version control and full-text search"
  },
  {
    icon: Lock,
    title: "Secure & Compliant",
    description: "Built with security and data protection at its core, NDPR compliant"
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Never miss deadlines with automated reminders and alerts"
  },
  {
    icon: TrendingUp,
    title: "Performance Tracking",
    description: "Track KPIs, conviction rates, and team performance metrics"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Justice Administration
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive tools designed to enhance efficiency, transparency, and collaboration across all legal operations
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-gray-200 hover:border-[#8B1538] hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-[#8B1538]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#8B1538] transition-colors">
                <feature.icon className="w-6 h-6 text-[#8B1538] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

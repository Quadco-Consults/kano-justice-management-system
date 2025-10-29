import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-primary-600 rounded-lg flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
              </svg>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-secondary-900 mb-6">
            Kano Justice Management System
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
            A comprehensive web-based platform for automating the Ministry of Justice's core functions,
            enhancing transparency, and improving operational efficiency.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/dashboard" className="btn-primary text-lg px-8 py-3">
              Go to Dashboard
            </Link>
            <Link href="/auth/login" className="btn-secondary text-lg px-8 py-3">
              Login
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-secondary-800 mb-3">Real-Time Monitoring</h3>
            <p className="text-secondary-600">
              Track cases, submissions, and KPIs instantly with comprehensive dashboards
            </p>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-secondary-800 mb-3">Case Management</h3>
            <p className="text-secondary-600">
              Streamlined workflow for public prosecutions, civil litigation, and legal opinions
            </p>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-secondary-800 mb-3">Stakeholder Collaboration</h3>
            <p className="text-secondary-600">
              Seamless coordination between MoJ, law enforcement, courts, and government offices
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-secondary-900 text-center mb-8">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-secondary-800 mb-2">Legal Advisory</h4>
              <p className="text-sm text-secondary-600">Automated request portal and tracking system</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-secondary-800 mb-2">Public Prosecution</h4>
              <p className="text-sm text-secondary-600">Case intake, court integration, and progress tracking</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-secondary-800 mb-2">Legislative Drafting</h4>
              <p className="text-sm text-secondary-600">Version control and stakeholder collaboration</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-secondary-800 mb-2">Analytics Dashboard</h4>
              <p className="text-sm text-secondary-600">Real-time insights and performance metrics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
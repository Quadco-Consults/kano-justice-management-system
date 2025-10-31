import { Suspense } from "react"
import { AdvisoryForm } from "@/components/legal-advisory/advisory-form"

export default function NewAdvisoryPage() {
  return (
    <Suspense fallback={<div className="p-6 text-gray-900">Loading...</div>}>
      <AdvisoryForm />
    </Suspense>
  )
}

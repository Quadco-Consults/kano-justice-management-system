import { Suspense } from "react"
import { AdvisoryForm } from "@/components/legal-advisory/advisory-form"

function AdvisoryFormContent() {
  return <AdvisoryForm />
}

export default function NewAdvisoryPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdvisoryFormContent />
    </Suspense>
  )
}

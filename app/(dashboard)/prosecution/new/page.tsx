import { Suspense } from "react"
import { CaseForm } from "@/components/prosecution/case-form"

export default function NewProsecutionCasePage() {
  return (
    <Suspense fallback={<div className="p-6 text-gray-900">Loading...</div>}>
      <CaseForm />
    </Suspense>
  )
}

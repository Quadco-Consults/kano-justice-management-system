import { Suspense } from "react"
import { CaseForm } from "@/components/prosecution/case-form"

function CaseFormContent() {
  return <CaseForm />
}

export default function NewProsecutionCasePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CaseFormContent />
    </Suspense>
  )
}

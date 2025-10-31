import { Suspense } from "react"
import { LitigationForm } from "@/components/civil-litigation/litigation-form"

function LitigationFormContent() {
  return <LitigationForm />
}

export default function NewCivilLitigationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LitigationFormContent />
    </Suspense>
  )
}

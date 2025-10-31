import { Suspense } from "react"
import { CorrespondenceForm } from "@/components/correspondences/correspondence-form"

function CorrespondenceFormContent() {
  return <CorrespondenceForm />
}

export default function NewCorrespondencePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CorrespondenceFormContent />
    </Suspense>
  )
}

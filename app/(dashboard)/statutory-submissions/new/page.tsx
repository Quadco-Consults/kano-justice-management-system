import { Suspense } from "react"
import { SubmissionForm } from "@/components/statutory-submissions/submission-form"

function SubmissionFormContent() {
  return <SubmissionForm />
}

export default function NewSubmissionPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SubmissionFormContent />
    </Suspense>
  )
}

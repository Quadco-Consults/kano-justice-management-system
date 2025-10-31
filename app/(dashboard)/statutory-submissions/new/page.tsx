import { Suspense } from "react"
import { SubmissionForm } from "@/components/statutory-submissions/submission-form"

export default function NewSubmissionPage() {
  return (
    <Suspense fallback={<div className="p-6 text-gray-900">Loading...</div>}>
      <SubmissionForm />
    </Suspense>
  )
}

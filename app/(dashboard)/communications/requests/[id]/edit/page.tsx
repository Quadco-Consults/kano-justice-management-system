import { Suspense } from "react"
import { RequestForm } from "@/components/communications/request-form"

function RequestFormContent() {
  return <RequestForm />
}

export default function EditRequestPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RequestFormContent />
    </Suspense>
  )
}

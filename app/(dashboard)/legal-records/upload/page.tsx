import { Suspense } from "react"
import { DocumentUploadForm } from "@/components/legal-records/document-upload-form"

function DocumentUploadContent() {
  return <DocumentUploadForm />
}

export default function DocumentUploadPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DocumentUploadContent />
    </Suspense>
  )
}

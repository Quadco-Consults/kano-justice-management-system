import { Suspense } from "react"
import { NoticeForm } from "@/components/public-notices/notice-form"

function NoticeFormContent() {
  return <NoticeForm />
}

export default function NewNoticePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NoticeFormContent />
    </Suspense>
  )
}

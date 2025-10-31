import { Suspense } from "react"
import { NoticeForm } from "@/components/public-notices/notice-form"

export default function NewNoticePage() {
  return (
    <Suspense fallback={<div className="p-6 text-gray-900">Loading...</div>}>
      <NoticeForm />
    </Suspense>
  )
}

import { Suspense } from "react"
import { BillForm } from "@/components/legislative-drafting/bill-form"

function BillFormContent() {
  return <BillForm />
}

export default function NewBillPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BillFormContent />
    </Suspense>
  )
}

import { Suspense } from "react"
import { StakeholderForm } from "@/components/stakeholders/stakeholder-form"

function StakeholderFormContent() {
  return <StakeholderForm />
}

export default function NewStakeholderPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StakeholderFormContent />
    </Suspense>
  )
}

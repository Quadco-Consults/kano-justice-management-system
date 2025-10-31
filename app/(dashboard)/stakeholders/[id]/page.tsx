import { StakeholderDetail } from "@/components/stakeholders/stakeholder-detail"

export default function StakeholderDetailPage({ params }: { params: { id: string } }) {
  return <StakeholderDetail id={params.id} />
}

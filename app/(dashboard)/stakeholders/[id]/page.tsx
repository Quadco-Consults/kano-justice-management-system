import { StakeholderDetail } from "@/components/stakeholders/stakeholder-detail"

export default async function StakeholderDetailPage({ params }: { params: Promise<{ id: string } }) {
  const { id } = await params
  return <StakeholderDetail id={id} />
}

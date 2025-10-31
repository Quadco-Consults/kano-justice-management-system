import { AdvisoryDetail } from "@/components/legal-advisory/advisory-detail"

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function AdvisoryDetailPage({ params }: PageProps) {
  const { id } = await params
  return <AdvisoryDetail id={id} />
}

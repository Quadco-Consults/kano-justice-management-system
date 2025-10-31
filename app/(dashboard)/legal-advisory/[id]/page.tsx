import { AdvisoryDetail } from "@/components/legal-advisory/advisory-detail"

interface PageProps {
  params: {
    id: string
  }
}

export default function AdvisoryDetailPage({ params }: PageProps) {
  return <AdvisoryDetail id={params.id} />
}

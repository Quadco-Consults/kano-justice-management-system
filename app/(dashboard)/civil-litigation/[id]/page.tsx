import { LitigationDetail } from "@/components/civil-litigation/litigation-detail"

interface PageProps {
  params: {
    id: string
  }
}

export default function CivilLitigationDetailPage({ params }: PageProps) {
  return <LitigationDetail id={params.id} />
}

import { CorrespondenceDetail } from "@/components/correspondences/correspondence-detail"

export default function CorrespondenceDetailPage({ params }: { params: { id: string } }) {
  return <CorrespondenceDetail id={params.id} />
}

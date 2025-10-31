import { CorrespondenceDetail } from "@/components/correspondences/correspondence-detail"

export default async function CorrespondenceDetailPage({ params }: { params: Promise<{ id: string } }) {
  const { id } = await params
  return <CorrespondenceDetail id={id} />
}

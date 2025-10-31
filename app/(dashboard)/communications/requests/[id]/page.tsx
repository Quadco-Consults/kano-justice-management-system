import { RequestDetail } from "@/components/communications/request-detail"

export default function RequestDetailPage({ params }: { params: { id: string } }) {
  return <RequestDetail id={params.id} />
}

import { RequestDetail } from "@/components/communications/request-detail"

export default async function RequestDetailPage({ params }: { params: Promise<{ id: string } }) {
  const { id } = await params
  return <RequestDetail id={id} />
}

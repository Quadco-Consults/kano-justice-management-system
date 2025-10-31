import { NoticeDetail } from "@/components/public-notices/notice-detail"

export default function NoticeDetailPage({ params }: { params: { id: string } }) {
  return <NoticeDetail id={params.id} />
}

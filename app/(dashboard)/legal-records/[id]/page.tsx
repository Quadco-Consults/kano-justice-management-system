import { DocumentDetail } from "@/components/legal-records/document-detail"

export default async function DocumentDetailPage({ params }: { params: Promise<{ id: string } }) {
  const { id } = await params
  return <DocumentDetail id={id} />
}

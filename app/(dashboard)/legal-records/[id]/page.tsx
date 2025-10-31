import { DocumentDetail } from "@/components/legal-records/document-detail"

export default function DocumentDetailPage({ params }: { params: { id: string } }) {
  return <DocumentDetail id={params.id} />
}

import { CaseDetail } from "@/components/prosecution/case-detail"

interface PageProps {
  params: {
    id: string
  }
}

export default function ProsecutionCaseDetailPage({ params }: PageProps) {
  return <CaseDetail id={params.id} />
}

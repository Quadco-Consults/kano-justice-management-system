import { CaseDetail } from "@/components/prosecution/case-detail"

interface PageProps {
  params: Promise<{
    id: string
  }
}

export default async function CivilLitigationCasePage({ params }: PageProps) {
  const { id } = await params
  return <CaseDetail id={id} />
}

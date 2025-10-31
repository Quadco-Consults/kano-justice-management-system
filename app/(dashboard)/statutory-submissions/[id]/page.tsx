import { SubmissionDetail } from "@/components/statutory-submissions/submission-detail"

export default function SubmissionDetailPage({ params }: { params: { id: string } }) {
  return <SubmissionDetail id={params.id} />
}

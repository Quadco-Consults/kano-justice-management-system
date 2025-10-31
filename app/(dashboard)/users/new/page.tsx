import { Suspense } from "react"
import { NewUserPage } from "@/components/users/new-user-page"

function NewUserPageContent() {
  return <NewUserPage />
}

export default function AddUserPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewUserPageContent />
    </Suspense>
  )
}

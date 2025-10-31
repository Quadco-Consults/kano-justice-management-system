import { AuthLayout } from "@/components/auth/auth-layout"
import { SignupForm } from "@/components/auth/signup-form"

export default function SignupPage() {
  return (
    <AuthLayout
      title="Request Access"
      subtitle="Submit your details to request system access"
    >
      <SignupForm />
    </AuthLayout>
  )
}

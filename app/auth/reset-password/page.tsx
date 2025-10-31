import { AuthLayout } from "@/components/auth/auth-layout"
import { ResetPasswordForm } from "@/components/auth/reset-password-form"

interface ResetPasswordPageProps {
  searchParams: { token?: string }
}

export default function ResetPasswordPage({ searchParams }: ResetPasswordPageProps) {
  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Create a new password for your account"
    >
      <ResetPasswordForm token={searchParams.token} />
    </AuthLayout>
  )
}

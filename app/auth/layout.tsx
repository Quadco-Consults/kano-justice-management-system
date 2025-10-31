import { AuthLayout } from "@/components/auth/auth-layout"

interface AuthPagesLayoutProps {
  children: React.ReactNode
}

export default function AuthPagesLayout({ children }: AuthPagesLayoutProps) {
  return <>{children}</>
}

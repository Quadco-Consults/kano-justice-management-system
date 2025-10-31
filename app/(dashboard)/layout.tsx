import { DashboardLayout } from "@/components/layout/dashboard-layout"

interface DashboardPagesLayoutProps {
  children: React.ReactNode
}

export default function DashboardPagesLayout({ children }: DashboardPagesLayoutProps) {
  return <DashboardLayout>{children}</DashboardLayout>
}

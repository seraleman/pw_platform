import { Footer, TopMenu } from '@/components'
import { Sidebar } from '@/components/admin/sidebar/Sidebar'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <TopMenu />
      {/* Sidebar */}
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 bg-gray-100">{children}</main>
      </div>
      <Footer />
    </div>
  )
}

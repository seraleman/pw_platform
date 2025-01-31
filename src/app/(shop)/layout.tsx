import { Footer, TopMenu, WhatsappButton } from '@/components'

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <TopMenu />
      {/* Sidebar */}
      <div>{children}</div>
      <WhatsappButton />
      <Footer />
    </div>
  )
}

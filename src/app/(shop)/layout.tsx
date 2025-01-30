import { Footer, TopMenu, WhatsappButton } from '@/components'

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <TopMenu />
      {/* Sidebar */}
      <div>{children}</div>
      <WhatsappButton />
      <Footer />
    </div>
  )
}

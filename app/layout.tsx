'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // ❌ Hide footer on shop page
  const hideFooter = pathname === '/shop'

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-20 pb-12">
          {children}
        </main>
        {!hideFooter && <Footer />}
      </body>
    </html>
  )
}

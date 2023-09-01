import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import Container from '@/components/container'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Windbnb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col
      `}>
        <Container><Header />
          <main className='mt-14'>{children}</main>
          <Footer /></Container>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Film Judge',
  description: 'Movie rating and discovery app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}

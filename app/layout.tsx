import type { Metadata } from 'next';

import './globals.css'

export const metadata: Metadata = {
  title: 'Travel Guide',
  description: 'Travel UI/UX App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

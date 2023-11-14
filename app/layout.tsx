import type { Metadata } from 'next';
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

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
      <body>
        <Navbar />
        <Hero/>
        <main className='relative overflow-hidden'>
          {children}
        </main>

        <Footer />
      </body>

    </html>
  )
}

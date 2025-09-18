import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Reliable Roofing Solutions | Professional Roof Installation & Repair in Auckland',
  description: 'Expert roofing services in Auckland, New Zealand. Quality roof installation, repairs, and maintenance with unmatched workmanship. Free quotes and 24/7 emergency service.',
  keywords: 'roofing, roof repair, roof installation, Auckland, New Zealand, roofing contractor, gutter repair, roof replacement, Colorsteel, NZ roofing',
  authors: [{ name: 'Reliable Roofing Solutions' }],
  openGraph: {
    title: 'Reliable Roofing Solutions | Professional Roofing in Auckland',
    description: 'Expert roofing services in Auckland, New Zealand. Quality roof installation, repairs, and maintenance with unmatched workmanship.',
    type: 'website',
    locale: 'en_NZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reliable Roofing Solutions | Professional Roofing in Auckland',
    description: 'Expert roofing services in Auckland, New Zealand. Quality roof installation, repairs, and maintenance with unmatched workmanship.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}

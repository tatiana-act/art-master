import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import NewsBanner from '@/components/NewsBanner'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Art Master - Creative Arts & Crafts',
    description: 'Discover the joy of creating with wool painting, macrame, and art projects for all ages',
    verification: {
        google: 'B7Ct-qStJLf0MwYWx5zZwurbBgaNG14Zr_uRJkOJaiQ'
    }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <NewsBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        </body>
        </html>
    )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar2 from '@/components/Navbar2'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Art Master - Creative Arts & Crafts',
    description: 'Discover the joy of creating with wool painting, macrame, and art projects for all ages',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navbar2 />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    )
}

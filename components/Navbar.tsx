'use client'
import Link from 'next/link'
import { useState } from 'react'
import { NAV_LINKS } from '@/config/navigation'

// The min-[800px] breakpoint below is where the links would need a third row,
// so the menu button takes over instead. Measured against the labels in
// config/navigation.ts: they fit on one line down to 1230px and on two down to
// 790px. Worth re-checking when links are added or renamed. It is spelled out
// in full at each usage because Tailwind only generates classes it can find as
// literal strings in the source.
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="bg-cream shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center gap-4 min-h-16 py-2">
                    <Link href="/" className="text-2xl font-bold text-primary whitespace-nowrap">
                        Art Master Tatiana
                    </Link>

                    {/* Wraps to a second line rather than shrinking; never a third. */}
                    <div className="hidden min-[800px]:flex flex-wrap justify-end items-center gap-x-8 gap-y-1">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-medium hover:text-primary font-medium transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="min-[800px]:hidden flex-shrink-0 text-medium hover:text-primary"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="min-[800px]:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-warm-100 shadow-md">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    // Collapse the menu once a destination is chosen.
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block px-3 py-2 text-medium hover:text-primary font-medium"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar

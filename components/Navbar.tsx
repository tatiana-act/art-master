'use client'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="bg-cream shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-primary">
                            Art Master Tatiana
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/wool-painting-adults" className="text-medium hover:text-primary font-medium transition-colors">
                            Wool Painting
                        </Link>
                        <Link href="/wool-painting-kids" className="text-medium hover:text-primary font-medium transition-colors">
                            Wool Painting Kids
                        </Link>
                        <Link href="/macrame-adults" className="text-medium hover:text-primary font-medium transition-colors">
                            Macrame
                        </Link>
                        <Link href="/macrame-kids" className="text-medium hover:text-primary font-medium transition-colors">
                            Macrame Kids
                        </Link>
                        <Link href="/workshop-kids" className="text-medium hover:text-primary font-medium transition-colors">
                            Workshops for Kids
                        </Link>
                        <Link href="/faq" className="text-medium hover:text-primary font-medium transition-colors self-center">
                            FAQ
                        </Link>
                        <Link href="/about" className="text-medium hover:text-primary font-medium transition-colors">
                            About
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-medium hover:text-primary"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-light-warm shadow-md">
                            <Link href="/wool-painting-adults" className="block px-3 py-2 text-medium hover:text-primary font-medium">
                                Wool Painting
                            </Link>
                            <Link href="/wool-painting-kids" className="block px-3 py-2 text-medium hover:text-primary font-medium">
                                Wool Painting Kids
                            </Link>
                            <Link href="/macrame-adults" className="block px-3 py-2 text-medium hover:text-primary font-medium">
                                Macrame
                            </Link>
                            <Link href="/macrame-kids" className="block px-3 py-2 text-medium hover:text-primary font-medium">
                                Macrame Kids
                            </Link>
                            <Link href="/workshop-kids" className="block px-3 py-2 text-medium hover:text-primary font-medium">
                                Workshops for Kids
                            </Link>
                            <Link href="/faq" className="block px-3 py-2 text-medium hover:text-primary font-medium">
                                FAQ
                            </Link>
                            <Link href="/about" className="block px-3 py-2 text-medium hover:text-primary font-medium">
                                About
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar

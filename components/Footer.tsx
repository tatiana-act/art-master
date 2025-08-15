import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-primary text-white mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Art Master</h3>
                        <p className="text-gray-300">
                            Unleashing creativity through beautiful arts and crafts for all ages.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
                            <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Art Categories</h4>
                        <ul className="space-y-2">
                            <li><Link href="/wool-painting-adults" className="text-gray-300 hover:text-white transition-colors">Wool Painting</Link></li>
                            <li><Link href="/wool-painting-kids" className="text-gray-300 hover:text-white transition-colors">Wool Painting Kids</Link></li>
                            <li><Link href="/macrame-adults" className="text-gray-300 hover:text-white transition-colors">Macrame</Link></li>
                            <li><Link href="/macrame-kids" className="text-gray-300 hover:text-white transition-colors">Macrame Kids</Link></li>
                            <li><Link href="/workshop-kids" className="text-gray-300 hover:text-white transition-colors">Workshops for Kids</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <p className="text-gray-300 mb-2">Email: info@artmaster.com</p>
                        <p className="text-gray-300">Phone: (737) 309-7849</p>
                    </div>
                </div>

                <div className="border-t border-gray-600 mt-8 pt-8 text-center">
                    <p className="text-gray-300">&copy; 2024 Art Master. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

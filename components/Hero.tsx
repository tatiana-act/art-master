import Link from 'next/link'

const Hero = () => {
    return (
        <section className="hero-gradient text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Welcome to Art Master
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        Discover the joy of creating beautiful art with wool painting, macrame, and exciting craft projects for all ages
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/wool-painting-adults"
                            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Explore Adult Classes
                        </Link>
                        <Link
                            href="/wool-painting-kids"
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                        >
                            Kids Activities
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero

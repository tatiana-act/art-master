import Link from 'next/link'
import Image from 'next/image'

const FeaturedSections = () => {
    const sections = [
        {
            title: 'Wool Painting for Adults',
            description: 'Therapeutic and beautiful art form using natural wool fibers',
            href: '/wool-painting-adults',
            image: '/images/wool-adult-1.jpg'
        },
        {
            title: 'Wool Painting for Kids',
            description: 'Fun and engaging wool art projects designed for children',
            href: '/wool-painting-kids',
            image: '/images/wool-kids-1.jpg'
        },
        {
            title: 'Macrame',
            description: 'Learn the ancient art of knotting to create stunning decorative pieces',
            href: '/macrame',
            image: '/images/macrame-1.jpg'
        },
        {
            title: 'Kids Art Projects',
            description: 'Creative and educational craft projects to spark imagination',
            href: '/kids-projects',
            image: '/images/kids-craft-1.jpg'
        }
    ]

    return (
        <section className="py-16 bg-light-warm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                        Explore Our Art Categories
                    </h2>
                    <p className="text-xl text-medium max-w-3xl mx-auto">
                        From therapeutic wool painting to creative macrame, we offer a variety of artistic experiences for everyone
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {sections.map((section, index) => (
                        <Link key={index} href={section.href} className="group">
                            <div className="bg-cream rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-warm-200">
                                <div className="h-48 bg-warm-200 relative overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                                        <span className="text-white text-sm font-medium">Image Placeholder</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
                                        {section.title}
                                    </h3>
                                    <p className="text-medium">
                                        {section.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedSections
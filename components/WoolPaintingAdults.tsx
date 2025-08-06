import Image from 'next/image'

const WoolPaintingAdults = () => {
    const projects = [
        { title: 'Mountain Landscape', image: '/images/wool-adult-1.jpg' },
        { title: 'Abstract Sunset', image: '/images/wool-adult-2.jpg' },
        { title: 'Forest Scene', image: '/images/wool-adult-3.jpg' },
        { title: 'Ocean Waves', image: '/images/wool-adult-4.jpg' },
        { title: 'Desert Dawn', image: '/images/wool-adult-5.jpg' },
        { title: 'City Lights', image: '/images/wool-adult-6.jpg' }
    ]

    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-dark mb-6">Wool Painting for Adults</h1>
                    <p className="text-xl text-medium max-w-3xl mx-auto mb-8">
                        Discover the therapeutic art of wool painting. Using natural wool fibers, create stunning landscapes
                        and abstract pieces that bring warmth and texture to your home. Perfect for relaxation and mindfulness.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-dark mb-6">What You'll Learn</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-primary mb-3">Techniques</h3>
                            <p className="text-medium mb-4">
                                Master the art of layering wool fibers to create depth, texture, and beautiful color blends.
                                Learn wet felting techniques and how to work with different wool types.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-primary mb-3">Benefits</h3>
                            <p className="text-medium mb-4">
                                Wool painting is incredibly therapeutic and meditative. It helps reduce stress while creating
                                beautiful artwork you can proudly display in your home.
                            </p>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-dark mb-8 text-center">Sample Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-cream rounded-lg shadow-lg overflow-hidden border border-warm-200">
                            <div className="h-64 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                <span className="text-white font-medium">Wool Art Placeholder</span>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-dark">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="bg-warm-100 rounded-lg p-8 border border-warm-200">
                        <h2 className="text-2xl font-semibold text-dark mb-4">Ready to Get Started?</h2>
                        <p className="text-medium mb-6">
                            Join our adult wool painting classes and discover this amazing art form. All materials provided.
                        </p>
                        <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
                            Contact Us for Classes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WoolPaintingAdults
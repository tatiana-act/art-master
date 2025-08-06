import Image from 'next/image'

const WoolPaintingKids = () => {
    const projects = [
        { title: 'Rainbow Fields', image: '/images/wool-kids-1.jpg' },
        { title: 'Cute Animals', image: '/images/wool-kids-2.jpg' },
        { title: 'Underwater World', image: '/images/wool-kids-3.jpg' },
        { title: 'Fairy Tale Castle', image: '/images/wool-kids-4.jpg' },
        { title: 'Space Adventure', image: '/images/wool-kids-5.jpg' },
        { title: 'Garden Friends', image: '/images/wool-kids-6.jpg' }
    ]

    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Wool Painting for Kids</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Let your child's creativity soar with colorful wool painting projects! Safe, fun, and designed
                        specifically for young artists to develop fine motor skills and artistic expression.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Perfect for Young Artists</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Age-Appropriate</h3>
                            <p className="text-gray-600 mb-4">
                                Our kids' wool painting projects are designed for ages 5-12, with simple techniques
                                that are safe and easy to learn. No sharp tools required!
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Educational Benefits</h3>
                            <p className="text-gray-600 mb-4">
                                Develops fine motor skills, color recognition, creativity, and patience. Kids learn
                                about textures and how to express their imagination through art.
                            </p>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Fun Projects for Kids</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="h-64 bg-gradient-to-br from-yellow-300 to-pink-400 flex items-center justify-center">
                                <span className="text-white font-medium">Kids' Wool Art</span>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="bg-yellow-50 rounded-lg p-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kids Classes Available!</h2>
                        <p className="text-gray-600 mb-6">
                            Book a fun and educational wool painting session for your child. Perfect for birthday parties too!
                        </p>
                        <button className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary transition-colors">
                            Schedule Kids Class
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WoolPaintingKids

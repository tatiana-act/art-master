'use client'
import ProjectGallery from '@/components/ProjectGallery' // Adjust path if needed

const MacrameKids = () => {
    const projects = [
        { title: 'Mountain Landscape', image: '/images/macrame-kids-1.jpg' },
        { title: 'Abstract Sunset', image: '/images/macrame-kids-2.jpg' },
        { title: 'Forest Scene', image: '/images/macrame-kids-3.jpg' },
        { title: 'Ocean Waves', image: '/images/macrame-kids-4.jpg' },
        { title: 'Desert Dawn 1', image: '/images/macrame-kids-5.jpg' },
        { title: 'Desert Dawn 2', image: '/images/macrame-kids-6.jpg' },
        { title: 'Desert Dawn 3', image: '/images/macrame-kids-7.jpg' },
        { title: 'Desert Dawn 3', image: '/images/macrame-kids-8.jpg' },
        { title: 'Desert Dawn 3', image: '/images/macrame-kids-9.jpg' },
        { title: 'Desert Dawn 3', image: '/images/macrame-kids-10.jpg' }
    ]

    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-dark mb-6">Macrame for Kids</h1>
                    <p className="text-xl text-medium max-w-3xl mx-auto mb-8">
                        Let your child's creativity soar with colorful wool painting projects! Safe, fun, and designed
                        specifically for young artists to develop fine motor skills and artistic expression.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-dark mb-6">Perfect for Young Artists</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-primary mb-3">Techniques</h3>
                            <p className="text-medium mb-4">
                                Our kids' wool painting projects are designed for ages 5-12, with simple techniques
                                that are safe and easy to learn. No sharp tools required!                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-primary mb-3">Benefits</h3>
                            <p className="text-medium mb-4">
                                Develops fine motor skills, color recognition, creativity, and patience. Kids learn
                                about textures and how to express their imagination through art.
                            </p>
                        </div>
                    </div>
                </div>

                <ProjectGallery projects={projects} />

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

export default MacrameKids;

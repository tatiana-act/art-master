'use client'
import ProjectGallery from '@/components/ProjectGallery' // Adjust path if needed

const WoolPaintingAdults2 = () => {
    const projects = [
        { title: 'Mountain Landscape', image: '/images/watercolor-woolpainting-1.jpg' },
        { title: 'Abstract Sunset', image: '/images/watercolor-woolpainting-2.jpg' },
        { title: 'Forest Scene', image: '/images/watercolor-woolpainting-3.jpg' },
        { title: 'Ocean Waves', image: '/images/watercolor-woolpainting-4.jpg' },
        { title: 'Desert Dawn 1', image: '/images/watercolor-woolpainting-5.jpg' },
        { title: 'Desert Dawn 2', image: '/images/watercolor-woolpainting-6.jpg' },
        { title: 'Desert Dawn 3', image: '/images/watercolor-woolpainting-7.jpg' },
        { title: 'Desert Dawn 4', image: '/images/watercolor-woolpainting-8.jpg' },
        { title: 'Desert Dawn 5', image: '/images/watercolor-woolpainting-9.jpg' },
        { title: 'Desert Dawn 7', image: '/images/watercolor-woolpainting-11.jpg' },
        { title: 'Desert Dawn 8', image: '/images/watercolor-woolpainting-12.jpg' },
        { title: 'Desert Dawn 9', image: '/images/watercolor-woolpainting-13.jpg' },
        { title: 'Desert Dawn 11', image: '/images/watercolor-woolpainting-15.jpg' },
        { title: 'City Lights', image: '/images/watercolor-woolpainting-16.jpg' }
    ]

    const projectsInAction = [
        { title: 'Desert Dawn 6', image: '/images/watercolor-woolpainting-10.jpg' },
        { title: 'Desert Dawn 10', image: '/images/watercolor-woolpainting-14.jpg' },
        { title: 'Desert Dawn 3', image: '/images/watercolor-woolpainting-17.jpg' },
        { title: 'Desert Dawn 4', image: '/images/watercolor-woolpainting-18.jpg' },
        { title: 'Desert Dawn 5', image: '/images/watercolor-woolpainting-19.jpg' },
        { title: 'Desert Dawn 6', image: '/images/watercolor-woolpainting-20.jpg' },
        { title: 'Desert Dawn 6', image: '/images/watercolor-woolpainting-21.jpg' },
        { title: 'Desert Dawn 6', image: '/images/watercolor-woolpainting-22.jpg' },
        { title: 'Desert Dawn 6', image: '/images/watercolor-woolpainting-23.jpg' },
        { title: 'City Lights', image: '/images/watercolor-woolpainting-24.jpg' }
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

                <ProjectGallery projects={projects} caption="Art Samples" />
                <br />
                <ProjectGallery projects={projectsInAction} caption="Crafting Journey" />

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

export default WoolPaintingAdults2;

'use client'
import ProjectGallery from '@/components/ProjectGallery' // Adjust path if needed

const WorkshopKids = () => {
    const projects = [
        { title: 'Mountain Landscape', image: '/images/kids-workshop-1.jpg' },
        { title: 'Abstract Sunset', image: '/images/kids-workshop-2.jpg' },
        { title: 'Forest Scene', image: '/images/kids-workshop-3.jpg' },
        { title: 'Desert Dawn 1', image: '/images/kids-workshop-5.jpg' },
        { title: 'Desert Dawn 2', image: '/images/kids-workshop-6.jpg' },
        { title: 'Desert Dawn 3', image: '/images/kids-workshop-7.jpg' },
        { title: 'Forest Scene', image: '/images/kids-workshop-13.jpg' },
        { title: 'Ocean Waves', image: '/images/kids-workshop-14.jpg' },
        { title: 'Desert Dawn 1', image: '/images/kids-workshop-15.jpg' },
        { title: 'Abstract Sunset', image: '/images/kids-workshop-17.jpg' },
    ]

    const inMotion = [
        { title: 'Ocean Waves', image: '/images/kids-workshop-4.jpg' },
        { title: 'Desert Dawn 3', image: '/images/kids-workshop-8.jpg' },
        { title: 'Desert Dawn 3', image: '/images/kids-workshop-9.jpg' },
        { title: 'Desert Dawn 3', image: '/images/kids-workshop-10.jpg' },
        { title: 'Mountain Landscape', image: '/images/kids-workshop-11.jpg' },
        { title: 'Abstract Sunset', image: '/images/kids-workshop-12.jpg' },
        { title: 'Abstract Sunset', image: '/images/kids-workshop-16.jpg' }
    ]

    const benefits = [
        'Develops creativity and imagination',
        'Improves fine motor skills',
        'Builds confidence and self-esteem',
        'Encourages problem-solving',
        'Provides sensory experiences',
        'Enhances focus and concentration'
    ]

    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-dark mb-6">Kids Workshops</h1>
                    <p className="text-xl text-medium max-w-3xl mx-auto mb-8">
                        Spark your child's creativity with our exciting collection of age-appropriate art and craft projects.
                        From simple crafts for toddlers to complex creations for older kids!
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-dark mb-6">Perfect for Young Artists</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-primary mb-3">Techniques</h3>
                            <p className="text-medium mb-4">
                                All our projects use child-safe materials and are supervised by experienced instructors.
                                We create a supportive environment where children can express themselves freely and learn new skills.
                            </p>
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

                <ProjectGallery projects={projects} caption="Project Gems" />
                <ProjectGallery projects={projects} caption="Craft Process" />

                <div className="mt-12 text-center">
                    <div className="bg-warm-100 rounded-lg p-8 border border-warm-200">
                        <h2 className="text-2xl font-semibold text-dark mb-4">Ready to Get Started?</h2>
                        <p className="text-medium mb-6">
                            Make your child's special day unforgettable with our craft party packages! We bring all supplies and lead fun activities.
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

export default WorkshopKids;

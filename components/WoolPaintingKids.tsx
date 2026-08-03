'use client'
import ProjectGallery from '@/components/ProjectGallery' // Adjust path if needed

const WoolPaintingKids = () => {
    const projects = [
        /*{ title: 'Holiday Tree', image: '/images/watercolor-woolpainting-kids-1.jpg' },*/
        { title: 'Snowman', image: '/images/watercolor-woolpainting-kids-15.jpg' },
        { title: 'Christmas Tree', image: '/images/watercolor-woolpainting-kids-10.jpg' },
        /*{ title: 'Peony Joy', image: '/images/watercolor-woolpainting-kids-4.jpg' },*/
        /*{ title: 'Sea Dusk', image: '/images/watercolor-woolpainting-kids-7.jpg' },*/
        /*{ title: 'Fall in Zilker Park', image: '/images/watercolor-woolpainting-kids-11.jpg' },*/
        { title: 'Baby animals', image: '/images/watercolor-woolpainting-kids-12.jpg' },
        { title: 'Red Peony', image: '/images/watercolor-woolpainting-kids-3.jpg' }
    ]

    const projectsInAction = [
        { title: 'Creating Red Peony', image: '/images/watercolor-woolpainting-kids-2.jpg' },
        { title: 'Creating Baby Animals', image: '/images/watercolor-woolpainting-kids-5.jpg' },
        { title: 'Creating Cupcake', image: '/images/watercolor-woolpainting-kids-6.jpg' },
        { title: 'Creating Holiday Tree', image: '/images/watercolor-woolpainting-kids-8.jpg' },
        { title: 'Cactuses and Holiday Tree', image: '/images/watercolor-woolpainting-kids-9.jpg' }
    ]

    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-dark mb-6">Join My Wool Painting Workshops for Kids!</h1>
                    <p className="text-xl text-medium text-left mx-auto mb-8">
                        Dear Parents,<br />
                        I invite your children to explore wool painting—a fun, hands-on art form using soft, colorful sheep’s wool instead of paint or brushes. Kids layer fibers to create bright, textured artwork, all without needles, making it completely safe for young artists.
                    </p>
                    <p className="text-xl text-medium text-left mx-auto mb-8">
                        This activity supports fine motor skills, hand-eye coordination, and creativity. The soft wool is calming and engaging, and because it’s easy to adjust, kids can experiment freely and even update their artwork later.
                    </p>
                    <p  className="text-xl text-medium text-left mx-auto mb-8">
                        Eco-friendly and rewarding, each workshop lets kids create their own unique piece while building confidence and skills. Contact me to get started!
                    </p>
                </div>
                <br />
                <ProjectGallery projects={projectsInAction} caption="Making Magic" />
                <br />
                <ProjectGallery projects={projects} caption="Art Samples" />

                <div className="mt-12 text-center">
                    <div className="bg-warm-100 rounded-lg p-8 border border-warm-200">
                        <h2 className="text-2xl font-semibold text-dark mb-4">Ready to Get Started?</h2>
                        <p className="text-medium mb-6">
                            Come have fun at my wool painting classes for kids. All materials provided.
                        </p>
                        <a
                            href="mailto:orlowa.tatiana.lynx@gmail.com"
                            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors inline-block"
                            aria-label="Email to contact for art classes"
                        >
                            Contact me for Wool Painting Classes
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WoolPaintingKids;

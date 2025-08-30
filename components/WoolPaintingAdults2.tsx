'use client'
import ProjectGallery from '@/components/ProjectGallery' // Adjust path if needed

const WoolPaintingAdults2 = () => {
    const projects = [
        { title: 'Spring Irises', image: '/images/watercolor-woolpainting-1.jpg' },
        { title: 'Waterfall', image: '/images/watercolor-woolpainting-2.jpg' },
        { title: 'Sunrise In The Mountains', image: '/images/watercolor-woolpainting-3.jpg' },
        { title: 'Fall Stroll', image: '/images/watercolor-woolpainting-4.jpg' },
        { title: 'Dandelion Wine', image: '/images/watercolor-woolpainting-5.jpg' },
        { title: 'Springtime Highlands', image: '/images/watercolor-woolpainting-6.jpg' },
        { title: 'Mother\'s day', image: '/images/watercolor-woolpainting-7.jpg' },
        { title: 'Peony Bliss', image: '/images/watercolor-woolpainting-9.jpg' },
        { title: 'Fiery beauty in the fall forest', image: '/images/watercolor-woolpainting-16.jpg' },
        { title: 'Seaside Dusk', image: '/images/watercolor-woolpainting-13.jpg' },
        { title: 'Fall in the Zilker park', image: '/images/watercolor-woolpainting-15.jpg' },
        { title: 'Ocean Waves', image: '/images/watercolor-woolpainting-25.jpg' },
        { title: 'Fall in the Texas Hills', image: '/images/watercolor-woolpainting-26.jpg' }
    ]

    const projectsInAction = [
        { title: 'Creating \"Peony Bliss\"', image: '/images/watercolor-woolpainting-11.jpg' },
        { title: 'Creating \"Peony Bliss\"', image: '/images/watercolor-woolpainting-10.jpg' },
        { title: 'Creating \"Peony Bliss\"', image: '/images/watercolor-woolpainting-12.jpg' },
        { title: 'Art fair', image: '/images/watercolor-woolpainting-14.jpg' },
        { title: 'Bluebonnets workshop', image: '/images/watercolor-woolpainting-17.jpg' },

        { title: 'Creating wool bluebonnets', image: '/images/watercolor-woolpainting-18.jpg' },
        { title: 'Go ski', image: '/images/watercolor-woolpainting-8.jpg' },
        { title: 'Creating \"The Bluebonnets\"', image: '/images/watercolor-woolpainting-19.jpg' },
        { title: 'Creating \"The Bluebonnets\"', image: '/images/watercolor-woolpainting-20.jpg' },
        { title: 'Creating wool picture', image: '/images/watercolor-woolpainting-21.jpg' },
        { title: 'Woolpainting workshop', image: '/images/watercolor-woolpainting-22.jpg' },
        { title: 'Woolpainting workshop', image: '/images/watercolor-woolpainting-23.jpg' },
        { title: 'Making \"Fall in the Zilker park\"', image: '/images/watercolor-woolpainting-27.jpg' },
        { title: 'My artwork at the exibition', image: '/images/watercolor-woolpainting-24.jpg' }
    ]

    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-dark mb-6">Discover Wool Painting: Create with Ease!</h1>
                    <p className="text-xl text-medium text-left mx-auto mb-8">
                        As a wool painting art teacher, I’m excited to share this fun and unique way to make colorful artwork—no brushes or paints needed! In my classes, you’ll use soft, vibrant sheep’s wool, layering the fibers to create pictures bursting with color and texture.
                        What makes wool painting so wonderful is how easy and forgiving it is. Made a mistake? No worries! You can adjust your artwork with confidence, as changes are simple to make. Even after your piece is framed, you can open it up, lift the glass, and add or remove wool to tweak your design whenever inspiration strikes. This freedom makes wool painting a joyful and creative experience for everyone, from beginners to seasoned artists!
                    </p>
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

export default WoolPaintingAdults2;

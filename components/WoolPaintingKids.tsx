'use client'
import ProjectGallery from '@/components/ProjectGallery' // Adjust path if needed

const WoolPaintingKids = () => {
    const projects = [
        { title: 'Holiday Tree', image: '/images/watercolor-woolpainting-kids-1.jpg' },
        { title: 'Red peony', image: '/images/watercolor-woolpainting-kids-3.jpg' },
        { title: 'Flower joy', image: '/images/watercolor-woolpainting-kids-4.jpg' },
        { title: 'Mountains', image: '/images/watercolor-woolpainting-kids-7.jpg' },
        { title: 'Holiday Tree #2', image: '/images/watercolor-woolpainting-kids-10.jpg' },
        { title: 'Autumn in Zilker', image: '/images/watercolor-woolpainting-kids-11.jpg' },
        { title: 'Baby animals', image: '/images/watercolor-woolpainting-kids-12.jpg' },
        { title: 'Snowman', image: '/images/watercolor-woolpainting-kids-15.jpg' }
    ]

    const projectsInAction = [
        { title: 'Creating the Red Peony', image: '/images/watercolor-woolpainting-kids-2.jpg' },
        { title: 'Creating the Baby Animals', image: '/images/watercolor-woolpainting-kids-5.jpg' },
        { title: 'Creating the Gingerbread House', image: '/images/watercolor-woolpainting-kids-6.jpg' },
        { title: 'Creating the Holiday Tree', image: '/images/watercolor-woolpainting-kids-8.jpg' },
        { title: 'Creating the Cactuses', image: '/images/watercolor-woolpainting-kids-9.jpg' }
    ]

    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-dark mb-6">Join My Wool Painting Workshops for Kids!</h1>
        <p className="text-xl text-medium text-left mx-auto mb-8">
            Dear Parents,<br />
            I’m excited to invite your kids to my wool painting classes, where they’ll have a blast creating colorful artwork without any brushes or paints! Using soft, bright sheep’s wool, your children will layer fibers to make fun, textured pictures that pop with color. It’s a hands-on activity that kids love, perfect for sparking their creativity. Plus, this technique is completely safe—unlike needle felting, wool painting uses no needles, making it worry-free for young artists.
        </p>
        <p className="text-xl text-medium text-left mx-auto mb-8">
            Wool painting is not only super fun but also great for your child’s growth. It helps them practice fine motor skills, like coordinating their hands and eyes, as they shape the wool. The soft, touchable wool is calming and keeps kids engaged, boosting their focus and imagination. Best of all, it’s easy to fix mistakes, so kids can try new ideas without worry. They can even change their artwork later, even after it’s framed!
        </p>
        <p className="text-xl text-medium text-left mx-auto mb-8">
            My workshops are eco-friendly, creative, and rewarding. Your kids will leave with their own beautiful artwork and a big smile, having learned new skills. Sign up now to let them dive into the fun of wool painting!
        </p>
                </div>

                <ProjectGallery projects={projects} caption="Art Samples" />

                <ProjectGallery projects={projectsInAction} caption="Making Magic" />

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

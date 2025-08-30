'use client'

import ProjectGallery from "@/components/ProjectGallery";

const Macrame = () => {
    const projects = [
        { title: 'Flowerpot Cover', image: '/images/macrame-adult-5.jpg' },
        { title: 'Tealight Cover', image: '/images/macrame-adult-1.jpg' },
        { title: 'Earphone Case', image: '/images/macrame-adult-3.jpg' },
        { title: 'Handmade Hairpins', image: '/images/macrame-adult-4.jpg' },
        { title: 'Bottle Holder', image: '/images/macrame-adult-6.jpg' },
        { title: 'Dreamcatcher', image: '/images/macrame-adult-14.jpg' },
        { title: 'Belt', image: '/images/macrame-adult-9.jpg' },
        { title: 'Angel', image: '/images/macrame-adult-10.jpg' },
        { title: 'Holiday tree', image: '/images/macrame-adult-11.jpg' },
        { title: 'Lucky Horseshoe', image: '/images/macrame-adult-15.jpg' },
        { title: 'Boho Wall Hanging', image: '/images/macrame-adult-20.jpg' },
        { title: 'Shopper Bag Decoration', image: '/images/macrame-adult-17.jpg' },
        { title: 'Handmade Pet Collar', image: '/images/macrame-adult-16.jpg' },
        { title: 'Semi-Oval Wall Hanging', image: '/images/macrame-adult-18.jpg' }
    ]

    const knots = [
        'Square Knot',
        'Half Hitch',
        'Double Half Hitch',
        'Spiral Knot',
        'Gathering Knot',
        'Crown Knot'
    ]

    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Macrame Art</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Learn the ancient art of macrame and create stunning decorative pieces for your home.
                        From wall hangings to plant holders, discover the meditative beauty of knotting.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Master Essential Knots</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Basic Techniques</h3>
                            <p className="text-gray-600 mb-4">
                                Start with fundamental knots and gradually build your skills to create complex patterns.
                                I'll teach you proper cord selection and tension techniques.
                            </p>
                            <ul className="grid grid-cols-2 gap-2">
                                {knots.map((knot, index) => (
                                    <li key={index} className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded">
                                        {knot}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Creative Applications</h3>
                            <p className="text-gray-600 mb-4">
                                Macrame isn't just decorative - it's functional too! Create plant hangers, bags,
                                curtains, and unique home decor pieces that combine beauty with utility.
                            </p>
                        </div>
                    </div>
                </div>

                <ProjectGallery projects={projects} caption="Featured Works" />

                <div className="mt-12 text-center">
                    <div className="bg-amber-50 rounded-lg p-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Macrame Workshops</h2>
                        <p className="text-gray-600 mb-6">
                            Learn from experienced instructors in a relaxing environment. All skill levels welcome!
                        </p>
                        <a
                            href="mailto:orlowa.tatiana.lynx@gmail.com"
                            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors inline-block"
                            aria-label="Email to contact for art classes"
                        >
                            Contact me for Macrame Classes
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Macrame

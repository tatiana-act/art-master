'use client'

import ProjectGallery from "@/components/ProjectGallery";

const Macrame = () => {
    const projects = [
        { title: 'Wall Hanging', image: '/images/macrame-adult-1.jpg' },
        { title: 'Plant Hanger', image: '/images/macrame-adult-2.jpg' },
        { title: 'Dream Catcher', image: '/images/macrame-adult-3.jpg' },
        { title: 'Table Runner', image: '/images/macrame-adult-4.jpg' },
        { title: 'Jewelry Holder', image: '/images/macrame-adult-5.jpg' },
        { title: 'Room Divider', image: '/images/macrame-adult-6.jpg' },
        { title: 'Room Divider', image: '/images/macrame-adult-7.jpg' },
        { title: 'Room Divider', image: '/images/macrame-adult-8.jpg' },
        { title: 'Room Divider', image: '/images/macrame-adult-9.jpg' },
        { title: 'Room Divider', image: '/images/macrame-adult-10.jpg' }
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
                                We'll teach you proper cord selection and tension techniques.
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

                <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Popular Macrame Projects</h2>
                <ProjectGallery projects={projects} />

                <div className="mt-12 text-center">
                    <div className="bg-amber-50 rounded-lg p-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Macrame Workshops</h2>
                        <p className="text-gray-600 mb-6">
                            Learn from experienced instructors in a relaxing environment. All skill levels welcome!
                        </p>
                        <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
                            Book Workshop
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Macrame

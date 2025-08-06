import Image from 'next/image'

const KidsProjects = () => {
    const projects = [
        { title: 'Paper Plate Animals', age: '3-6 years', image: '/images/kids-craft-1.jpg' },
        { title: 'Nature Collages', age: '4-8 years', image: '/images/kids-craft-2.jpg' },
        { title: 'Finger Painting Fun', age: '2-5 years', image: '/images/kids-craft-3.jpg' },
        { title: 'Clay Sculptures', age: '5-10 years', image: '/images/kids-craft-4.jpg' },
        { title: 'Friendship Bracelets', age: '6-12 years', image: '/images/kids-craft-5.jpg' },
        { title: 'Painted Rocks', age: '4-10 years', image: '/images/kids-craft-6.jpg' },
        { title: 'Cardboard Castles', age: '5-12 years', image: '/images/kids-craft-7.jpg' },
        { title: 'Tissue Paper Flowers', age: '4-9 years', image: '/images/kids-craft-8.jpg' }
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
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Art & Craft Projects for Kids</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Spark your child's creativity with our exciting collection of age-appropriate art and craft projects.
                        From simple crafts for toddlers to complex creations for older kids!
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Benefits of Arts & Crafts for Children</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Developmental Benefits</h3>
                            <ul className="space-y-2">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        <span className="text-gray-600">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Safe & Fun Environment</h3>
                            <p className="text-gray-600 mb-4">
                                All our projects use child-safe materials and are supervised by experienced instructors.
                                We create a supportive environment where children can express themselves freely and learn new skills.
                            </p>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Popular Kids Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="h-48 bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center">
                                <span className="text-white font-medium text-center px-2">{project.title}</span>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.title}</h3>
                                <p className="text-sm text-gray-500">{project.age}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="bg-pink-50 rounded-lg p-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Birthday Parties & Group Events</h2>
                        <p className="text-gray-600 mb-6">
                            Make your child's special day unforgettable with our craft party packages! We bring all supplies and lead fun activities.
                        </p>
                        <button className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors">
                            Plan a Craft Party
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KidsProjects

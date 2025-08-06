const About = () => {
    const team = [
        {
            name: "Sarah Johnson",
            role: "Founder & Lead Instructor",
            bio: "With over 15 years of experience in fiber arts and education, Sarah founded Art Master to share her passion for creative expression."
        },
        {
            name: "Michael Chen",
            role: "Macrame Specialist",
            bio: "Michael brings ancient knotting techniques to modern design, creating stunning pieces that blend tradition with contemporary style."
        },
        {
            name: "Emma Rodriguez",
            role: "Children's Program Director",
            bio: "A former elementary teacher, Emma specializes in age-appropriate art activities that develop creativity and confidence in young artists."
        }
    ]

    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">About Art Master</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Founded in 2018, Art Master has been inspiring creativity and bringing people together through the joy of hands-on artmaking.
                    </p>
                </div>

                <div className="mb-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Story</h2>
                            <p className="text-gray-600 mb-4">
                                Art Master began with a simple belief: everyone has an inner artist waiting to be discovered.
                                What started as small wool painting workshops in a community center has grown into a thriving
                                creative hub offering diverse art experiences for all ages.
                            </p>
                            <p className="text-gray-600 mb-4">
                                We specialize in tactile, meditative art forms that not only produce beautiful results but also
                                provide therapeutic benefits. Our wool painting technique, inspired by Waldorf education principles,
                                offers a unique way to create art while finding inner peace.
                            </p>
                            <p className="text-gray-600">
                                Today, we're proud to serve our community with classes, workshops, and special events that
                                celebrate creativity, connection, and the joy of making something beautiful with your own hands.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-primary to-accent h-96 rounded-lg flex items-center justify-center">
                            <span className="text-white text-lg font-medium">Art Master Studio Photo</span>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Our Mission</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Inspire Creativity</h3>
                            <p className="text-gray-600">
                                We believe everyone has creative potential waiting to be unlocked through the right guidance and encouragement.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Build Community</h3>
                            <p className="text-gray-600">
                                Art brings people together. We create spaces where friendships form and creativity flourishes.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Promote Wellness</h3>
                            <p className="text-gray-600">
                                Our art practices offer therapeutic benefits, reducing stress and promoting mindfulness and well-being.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Meet Our Team</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-gradient-to-br from-accent to-secondary w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-white font-medium">Photo</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                                <p className="text-primary font-medium mb-3">{member.role}</p>
                                <p className="text-gray-600 text-sm">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-primary text-white rounded-lg p-8">
                        <h2 className="text-2xl font-semibold mb-4">Join Our Creative Community</h2>
                        <p className="mb-6">
                            Ready to discover your artistic potential? Contact us to learn more about our classes and workshops.
                        </p>
                        <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Get Started Today
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

import Image from "next/image";

const About = () => {

    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative aspect-square">
                            <Image
                                src="/images/bio-me.jpg"
                                alt="Tatiana Art Master"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="relative aspect-square">
                            <p className="text-xl text-medium max-w-3xl mx-auto mb-8">
                            Hi, my name is Tatiana Orlova, I am a sensorial art teacher. Three years ago I moved to Austin, bringing with me a strong background in education and creativity. I hold a Master’s degree in Education and currently work in a Montessori preschool, which gives me valuable Montessori experience in guiding children’s natural curiosity and independence.
                            </p>
                            <p className="text-xl text-medium max-w-3xl mx-auto mb-8">
                            I specialize in mixed sensorial art  &mdash;  a creative approach that combines drawing, hands-on modeling, and tactile exploration. My projects are designed to support the development of fine motor skills and speech development, while engaging children in imaginative, playful experiences. I love guiding students through the process of creating art projects where we not only make visual pieces but also invent and tell stories and fairy tales during the creative journey.
                            </p>
                            <p className="text-xl text-medium max-w-3xl mx-auto mb-8">
                            I offer classes not only for children but also for adults, where tactile art becomes a way to ground yourself, relax, and release stress. It is pure creativity without barriers, a form of art that feels like therapy for the soul.
                            </p>
                            <p className="text-xl text-medium max-w-3xl mx-auto mb-8">
                            🌿 Join my classes and experience the joy of creating with your hands—whether for growth, relaxation, or simple artistic pleasure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

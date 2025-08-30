import Image from "next/image";

const About = () => {
    return (
        //{<section className="py-16 bg-gradient-to-b from-gray-50 to-white">}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif text-center text-gray-800 mb-12 tracking-tight">
                        Meet Tatiana
                    </h1>
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Image Section */}
                        <div className="relative aspect-square max-w-md mx-auto md:mx-0">
                            <Image
                                src="/images/bio-me.jpg"
                                alt="Tatiana Orlova, Sensorial Art Teacher"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        {/* Text Section */}
                        <div className="space-y-6 text-gray-700">
                            <p className="text-lg md:text-xl leading-relaxed">
                                <span className="font-semibold text-amber-600">Hello!</span> I’m Tatiana Orlova, a passionate sensorial art teacher based in Austin, where I’ve been inspiring creativity since moving here three years ago. With a Master’s degree in Education and hands-on experience in a Montessori preschool, I blend structured learning with boundless imagination, fostering curiosity and independence in every student.
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed">
                                My specialty is <span className="italic font-medium">mixed sensorial art</span> — a vibrant fusion of drawing, hands-on modeling, and tactile exploration. My classes spark joy and growth, helping children develop fine motor skills and speech through playful, story-driven projects. Together, we create not just art, but magical narratives that bring every piece to life.
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed">
                                I also offer classes for adults, where tactile art becomes a soulful escape — a way to unwind, reconnect, and explore creativity without boundaries. Whether you’re a child or an adult, my sessions are a sanctuary for self-expression and relaxation.
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed">
                                <span className="text-amber-600">🌿 Ready to create with your hands and heart?</span> Join my classes to discover the joy of art as therapy, growth, and pure delight.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <a
                            href="mailto:orlowa.tatiana.lynx@gmail.com"
                            className="inline-block bg-amber-500 text-white px-6 py-3 rounded-full font-medium hover:bg-amber-600 transition-colors duration-300 shadow-md"
                            aria-label="Email Tatiana to join art classes"
                        >
                            Contact Me
                        </a>
                    </div>

                </div>
            </div>
        //{</section>}
    );
};

export default About;

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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

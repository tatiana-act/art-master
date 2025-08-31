'use client'
import Image from "next/image";
import { useState } from "react";

const About = () => {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Meet Tatiana</h1>
                </div>
                <div className="mb-16">
                    <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-center">
                        {/* Image Section */}
                        <div className="md:col-span-2 relative aspect-square max-w-md mx-auto md:mx-0">
                            <Image
                                src="/images/bio-me.jpg"
                                alt="Tatiana Orlova, Sensorial Art Teacher"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        {/* Text Section */}
                        <div className="md:col-span-3 space-y-6 text-gray-700">
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
                    {/* Video Section */}
                    <div className="mt-12 max-w-4xl mx-auto text-center">
                        {!showVideo ? (
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowVideo(true);
                                }}
                                className="text-amber-600 text-lg font-medium hover:underline transition-colors duration-300"
                                aria-label="Show video about wool painting on KXAN"
                            >
                                Wool painting on KXAN
                            </a>
                        ) : (
                            <div className="transition-opacity duration-500">
                                <iframe id="nxs-video-iframe" data-frame-src="9969030" width="640" height="360"
                                        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                                        src="https://redir1.kxan.com/nxs-video-player/eyJ2aWRlb19pZCI6Ijk5NjkwMzAiLCJwb3N0X2lkIjoyMzc5Mjk0LCJhZHRhZ191cmwiOiJhdHVfcDE/c3o9MXgxMDAwJml1PVwvNTY3OFwvbGluLmt4YW5cL3N0dWRpb181MTImaW1wbD1zJmdkZnBfcmVxPTEmZW52PXZwJm91dHB1dD12bWFwJnVudmlld2VkX3Bvc2l0aW9uX3N0YXJ0PTEmYWRfcnVsZT0xJmRlc2NyaXB0aW9uX3VybD1hdHVfcDImdmNvbnA9MiZjdXN0X3BhcmFtcz12aWQ9OTk2OTAzMCZzdGF0aW9uPUtYQU4mY21zaWQ9MjM3OTI5NCZwaWQ9MjM3OTI5NCZwZXJzX2NpZD1ueHMtNDAtYXJ0aWNsZS0yMzc5Mjk0JnZpZGNhdD1cL3N0dWRpb181MTImYm9iX2NrPVtib2JfY2tfdmFsXSZkX2NvZGU9MSZwYWdldHlwZT1zdG9yeSZobG1ldGE9d29vbCBwYWludGluZyB3b3Jrc2hvcCBhdCB0aGUgbmVpbGwgY29jaHJhbiBob3VzZSBtdXNldW0mYWE9ZiIsInBvc3RfdHlwZSI6InBvc3QiLCJpbmplY3RlZF92aWEiOiJhbXAiLCJhZF9wcm92aWRlciI6ImdhbSIsImluX3dwX2VkaXRvciI6ZmFsc2UsImFsbG93X2F1dG9wbGF5Ijp0cnVlLCJpc19saXZlYmxvZyI6ZmFsc2V9"
                                        frameBorder="0" allowFullScreen></iframe>
                            </div>
                        )}
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
        </div>
    );
};

export default About;

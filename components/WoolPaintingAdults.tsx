'use client'
import Image from 'next/image'
import {useState} from 'react'


const WoolPaintingAdults = () => {

    const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null)
    const [longPressTimer, setLongPressTimer] = useState<NodeJS.Timeout | null>(null)

    const projects = [
        { title: 'Mountain Landscape', image: '/images/watercolor-woolpainting-1.jpg' },
        { title: 'Abstract Sunset', image: '/images/watercolor-woolpainting-2.jpg' },
        { title: 'Forest Scene', image: '/images/watercolor-woolpainting-3.jpg' },
        { title: 'Ocean Waves', image: '/images/watercolor-woolpainting-4.jpg' },
        { title: 'Desert Dawn', image: '/images/watercolor-woolpainting-5.jpg' },
        { title: 'Desert Dawn', image: '/images/watercolor-woolpainting-6.jpg' },
        { title: 'Desert Dawn', image: '/images/watercolor-woolpainting-7.jpg' },
        { title: 'Desert Dawn', image: '/images/watercolor-woolpainting-8.jpg' },
        { title: 'Desert Dawn', image: '/images/watercolor-woolpainting-9.jpg' },
        { title: 'Desert Dawn', image: '/images/watercolor-woolpainting-10.jpg' },
        { title: 'Desert Dawn', image: '/images/watercolor-woolpainting-11.jpg' },
        { title: 'Desert Dawn', image: '/images/watercolor-woolpainting-12.jpg' },
        { title: 'Desert Dawn', image: '/images/watercolor-woolpainting-13.jpg' },
        { title: 'Desert Dawn', image: '/images/watercolor-woolpainting-14.jpg' },
        { title: 'Desert Dawn', image: '/images/watercolor-woolpainting-15.jpg' },
        { title: 'City Lights', image: '/images/watercolor-woolpainting-16.jpg' }
    ]

    const handleImageClick = (project: { title: string; image: string }) => {
        setSelectedImage({ src: project.image, title: project.title })
        console.log('Image clicked:', project);
    }

    const handleImageTouchStart = (project: { title: string; image: string }) => {
        const timer = setTimeout(() => {
            setSelectedImage({ src: project.image, title: project.title })
        }, 500) // 500ms long press
        setLongPressTimer(timer)
    }

    const handleImageTouchEnd = () => {
        if (longPressTimer) {
            clearTimeout(longPressTimer)
            setLongPressTimer(null)
        }
    }

    const closeModal = () => {
        setSelectedImage(null)
    }

    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-dark mb-6">Wool Painting for Adults</h1>
                    <p className="text-xl text-medium max-w-3xl mx-auto mb-8">
                        Discover the therapeutic art of wool painting. Using natural wool fibers, create stunning landscapes
                        and abstract pieces that bring warmth and texture to your home. Perfect for relaxation and mindfulness.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-dark mb-6">What You'll Learn</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-primary mb-3">Techniques</h3>
                            <p className="text-medium mb-4">
                                Master the art of layering wool fibers to create depth, texture, and beautiful color blends.
                                Learn wet felting techniques and how to work with different wool types.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-primary mb-3">Benefits</h3>
                            <p className="text-medium mb-4">
                                Wool painting is incredibly therapeutic and meditative. It helps reduce stress while creating
                                beautiful artwork you can proudly display in your home.
                            </p>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-dark mb-8 text-center">Sample Projects</h2>
                <p className="text-center text-medium mb-8 text-sm">Click images to view full size • Long press on mobile</p>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-cream rounded-lg shadow-lg overflow-hidden border border-warm-200 break-inside-avoid mb-6">
                            <div className="relative cursor-pointer group" onClick={() => handleImageClick(project)}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                                    style={{ aspectRatio: 'auto' }}
                                    onClick={() => handleImageClick(project)}
                                    onTouchStart={() => handleImageTouchStart(project)}
                                    onTouchEnd={handleImageTouchEnd}
                                    onError={(e) => {
                                        const target = e.target as HTMLElement;
                                        target.style.display = 'none';
                                        if (target.parentElement) {
                                            target.parentElement.innerHTML = `
                        <div class="w-full aspect-[4/3] bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center pointer-events-none">
                          <span class="text-white font-medium">${project.title}</span>
                        </div>
                      `;
                                        }
                                    }}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-2">
                                        <svg className="w-6 h-6 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-dark">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="bg-warm-100 rounded-lg p-8 border border-warm-200">
                        <h2 className="text-2xl font-semibold text-dark mb-4">Ready to Get Started?</h2>
                        <p className="text-medium mb-6">
                            Join our adult wool painting classes and discover this amazing art form. All materials provided.
                        </p>
                        <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
                            Contact Us for Classes
                        </button>
                    </div>
                </div>
            </div>

            {/* Image Modal Popup */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div className="relative max-w-full max-h-full">
                        <button
                            onClick={closeModal}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            width={800}
                            height={600}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <p className="text-white text-center mt-4 text-lg font-medium">{selectedImage.title}</p>
                    </div>
                </div>
            )}
        </div>
    )
}


export default WoolPaintingAdults
'use client'
import Image from 'next/image'
import { useState } from 'react'

type Project = { title: string; image: string }

interface ProjectGalleryProps {
    projects: Project[]
    caption: string
}

const ProjectGallery = ({ projects, caption }: ProjectGalleryProps) => {
    const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null)
    const [longPressTimer, setLongPressTimer] = useState<NodeJS.Timeout | null>(null)

    const handleImageClick = (project: Project) => {
        setSelectedImage({ src: project.image, title: project.title })
    }

    const handleImageTouchStart = (project: Project) => {
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

    const handleModalTouchStart = (e: React.TouchEvent) => {
        e.stopPropagation() // Prevent touch event from reaching background
        const timer = setTimeout(() => {
            setSelectedImage(null)
        }, 300) // 500ms long press to close
        setLongPressTimer(timer)
    }

    const handleModalTouchEnd = (e: React.TouchEvent) => {
        e.stopPropagation() // Prevent touch event from reaching background
        if (longPressTimer) {
            clearTimeout(longPressTimer)
            setLongPressTimer(null)
        }
    }


    const closeModal = (e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation()
        }
        setSelectedImage(null)
    }

    return (
        <>
            <h2 className="text-2xl font-semibold text-dark mb-8 text-center">{caption}</h2>
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
                                onTouchStart={() => handleImageTouchStart(project)}
                                onTouchEnd={handleImageTouchEnd}
                                onError={(e) => {
                                    const target = e.target as HTMLElement
                                    target.style.display = 'none'
                                    if (target.parentElement) {
                                        target.parentElement.innerHTML = `
                      <div class="w-full aspect-[4/3] bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center pointer-events-none">
                        <span class="text-white font-medium">${project.title}</span>
                      </div>
                    `
                                    }
                                }}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center pointer-events-none">
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

            {/* Image Modal Popup */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div className="relative cursor-pointer group max-w-full max-h-full">
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
                            onTouchStart={handleModalTouchStart}
                            onTouchEnd={handleModalTouchEnd}
                        />
                        <p className="text-white text-center mt-4 text-lg font-medium">{selectedImage.title}</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProjectGallery;

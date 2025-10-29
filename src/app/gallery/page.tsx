'use client';

import { useState, useMemo } from 'react';
import { Project, projectsData } from "@/lib/info";

export default function Gallery() {
    // Initialize projects with size property using useMemo to avoid recalculation
    const projects = useMemo(() =>
            projectsData.map((p, i) => ({
                ...p,
                size: i % 3 === 0 ? 'large' : 'small',
            })),
        []
    );

    const [selectedImage, setSelectedImage] = useState<string>('');

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                    Gallery
                </h1>
                <p className="text-lg text-gray-600">
                    A collection of stunning moments
                </p>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`
                                relative overflow-hidden rounded-2xl cursor-pointer group
                                ${project.size === 'large'
                                ? 'col-span-2 row-span-2'
                                : 'col-span-1 row-span-1'
                            }
                            `}
                            onClick={() => setSelectedImage(project.images[0].src)}
                        >
                            <img
                                src={project.images[0].src}
                                alt={project.images[0].alt || project.heading}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white bg-opacity-90 rounded-full p-3">
                                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage('')}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                        onClick={() => setSelectedImage('')}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <img
                        src={selectedImage}
                        alt="Selected project"
                        className="max-w-full max-h-full object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
}
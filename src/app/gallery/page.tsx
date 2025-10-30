'use client';

import React, { useState, useMemo } from 'react';
import { Project, projectsData } from "@/lib/info";
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function Gallery() {
    // Initialize projects with size property using useMemo to avoid recalculation
    const projects = useMemo(() =>
            projectsData.map((p, i) => ({
                ...p,
                size: i % 3 === 0 ? 'large' : 'small',
            })),
        []
    );

    const [selectedImage, setSelectedImage] = useState<Project | null>(null);

    return (
        <>
            <Navbar className={"text-black"} />
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                    Gallery
                </h1>
                <div className="flex justify-between">
                    <p className="text-lg text-gray-600">
                        A collection of our best projects. Click on any image to view more details.
                    </p>
                </div>
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
                            onClick={() => setSelectedImage(project)}
                        >
                            <motion.div
                                initial={{opacity:0}}
                                whileHover={{opacity: 1}}
                                className="inset-0 p-2 absolute flex justify-end items-end w-full h-full z-20 bottom-0 bg-black/30"
                            >
                                <div className="flex flex-col w-full">
                                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold line-clamp-2">
                                        {project.heading}
                                    </h2>
                                    <motion.hr
                                        className="my-1 border-white"
                                        initial={{width:'0%'}}
                                        whileHover={{width: '100%'}}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    />
                                    <p className="text-xs sm:text-sm md:text-base lg:text-lg line-clamp-2 md:line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>
                            </motion.div>
                            <img
                                src={project.images[0].src}
                                alt={project.images[0].alt || project.heading}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 -z-20"  />
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
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0  bg-opacity-50 z-50 flex items-center justify-end"
                        onClick={() => setSelectedImage(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="bg-white h-full w-full md:w-[500px] lg:w-[600px] overflow-y-auto shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-6 right-6 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                                onClick={() => setSelectedImage(null)}
                            >
                                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Content Container */}
                            <div className="p-8">
                                {/* Main Image */}
                                <div className="mb-8">
                                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                                        <Image
                                            src={selectedImage.images[0].src}
                                            alt={selectedImage.images[0].alt || selectedImage.heading}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                {/* Heading and Description */}
                                <div className="mb-6">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                                        {selectedImage.heading}
                                    </h2>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {selectedImage.description}
                                    </p>
                                </div>

                                {/* Additional Images */}
                                {selectedImage.images.length > 1 && (
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                            More Images
                                        </h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            {selectedImage.images.slice(1).map((image, index) => (
                                                <div
                                                    key={index}
                                                    className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                                                >
                                                    <Image
                                                        src={image.src}
                                                        alt={image.alt || `${selectedImage.heading} - Image ${index + 2}`}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
            </>
    );
}
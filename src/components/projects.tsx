'use client'
import React from 'react';
import Image from 'next/image';
import {motion} from "framer-motion";

interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
}

const ProjectsSection: React.FC = () => {
    const projects: Project[] = [
        {
            id: 1,
            title: "Commercial Plumbing Installation",
            description:
                "Full plumbing system installation for a 50,000 sq ft office complex, including water supply, drainage, and high-efficiency fixtures.",
            category: "Commercial",
            image: "/projects/1.jpg", // Replace with your actual image paths
        },
        {
            id: 2,
            title: "Residential Bathroom Remodel",
            description:
                "Complete bathroom plumbing upgrade for a luxury home, featuring new piping, fixtures, and water-efficient systems.",
            category: "Residential",
            image: "/projects/2.jpg",
        },
        {
            id: 3,
            title: "Industrial Pipe Replacement",
            description:
                "Large-scale pipe replacement for a manufacturing facility to ensure consistent water flow and minimize downtime.",
            category: "Industrial",
            image: "/projects/3.jpg",
        },
    ];


    return (
        <section className="py-16 px-4 bg-orange-100" id={"projects"}>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div
                        className="inline-flex items-center gap-2 text-accent font-semibold mb-4"
                    >
                        <div className="w-8 h-0.5 bg-accent"></div>
                        <span className="text-sm uppercase tracking-wider">OUR WORK</span>
                        <div className="w-8 h-0.5 bg-accent"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Recent Projects
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Explore our portfolio of successful HVAC installations and repairs.
                        Each project showcases our commitment to quality and customer satisfaction.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Project Image */}
                            <div className="relative h-64 bg-slate-200 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                                    {/* Placeholder - replace with actual Image component */}
                                    <Image src={project.image} alt={project.title} fill/>
                                </div>
                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                                </div>
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                            </div>

                            {/* Project Details */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-500 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <button className="group bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2" onClick={() => {window.location.assign( '/gallery')}}>
                        <span>View All Projects</span>
                        <svg
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
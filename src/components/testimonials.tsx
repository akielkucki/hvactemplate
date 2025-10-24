'use client';

import {motion, useInView} from 'framer-motion';
import {useRef, useState} from 'react';
import {brand} from "@/lib/info";
import CountUp from 'react-countup';

export default function TestimonialsSection() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const {testimonials, reviews, stats} = brand
    const nextTestimonials = () => {
        setCurrentIndex((prev) => (prev + 3) % testimonials.length);
    };

    const prevTestimonials = () => {
        setCurrentIndex((prev) => (prev - 3 + testimonials.length) % testimonials.length);
    };

    const visibleTestimonials = [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length]
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="bg-gradient-to-br from-primary to-orange-100 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 text-accent font-semibold mb-4"
                        whileHover={{ x: 5 }}
                    >
                        <div className="w-8 h-0.5 bg-accent"></div>
                        <span className="text-sm uppercase tracking-wider">Testimonials</span>
                        <div className="w-8 h-0.5 bg-accent"></div>
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Let {reviews}+ Happy Clients<br />Speak for Themselves
                    </h2>

                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our satisfied customers have to say about their experience with our HVAC services.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                >
                    {visibleTestimonials.map((testimonial, index) => (
                        <motion.div
                            key={`${index}`}
                            // @ts-ignore
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <motion.svg
                                        key={i}
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ delay: index * 0.1 + i * 0.05, type: "spring" }}
                                        className="w-5 h-5 text-accent"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </motion.svg>
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                "{testimonial.comment}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/70 to-accent flex items-center justify-center text-white font-bold text-lg shadow-md">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-center gap-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prevTestimonials}
                        className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300 group"
                        aria-label="Previous testimonials"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </motion.button>

                    <div className="flex gap-2">
                        {[0, 1, 2, 3, 4, 5].map((_, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.2 }}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    Math.floor(currentIndex / 3) === Math.floor(index / 3)
                                        ? 'w-8 bg-accent'
                                        : 'w-2 bg-gray-300'
                                }`}
                                aria-label={`Go to testimonial set ${index + 1}`}
                            />
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={nextTestimonials}
                        className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300 group"
                        aria-label="Next testimonials"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.button>
                </motion.div>

            </div>
        </section>
    );
}
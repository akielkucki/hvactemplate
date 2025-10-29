'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { brand } from '@/lib/info';

export default function LegacySection() {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
            ),
            title: 'Expert Technicians',
            bgColor: 'bg-orange-50'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: '24/7 Emergency Service',
            bgColor: 'bg-gray-50'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
            ),
            title: 'Tailored Solutions',
            bgColor: 'bg-gray-50'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Efficient Systems',
            bgColor: 'bg-gray-50'
        }
    ];
    const {phone} = brand;
    return (
        <section className="bg-gradient-to-br from-gradient to-primary py-20 px-4 sm:px-6 lg:px-8 flex items-center" id={"why"}>
            <div className="max-w-[90rem] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="space-y-8"
                    >
                        {/* Tag */}
                        <motion.div
                            variants={fadeInUp}
                            className="inline-flex items-center gap-2 text-orange-600 font-semibold"
                        >
                            <div className="w-8 h-0.5 bg-orange-600"></div>
                            <span className="text-sm uppercase tracking-wider">WHY CHOOSE US</span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            variants={fadeInUp}
                            className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
                        >
                            A Legacy of Excellence in Plumbing
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            variants={fadeInUp}
                            className="text-gray-600 text-lg leading-relaxed"
                        >
                            At {brand.name}, we believe in delivering more than plumbing solutions — we provide peace of mind. With years of hands-on experience, a team of skilled plumbers, and an unwavering commitment to customer satisfaction, we ensure every job is done right — the first time.
                        </motion.p>

                        {/* Features Grid */}
                        <motion.div
                            variants={staggerContainer}
                            className="grid grid-cols-2 gap-4"
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                    className={`${feature.bgColor} rounded-xl p-6 flex flex-col items-center text-center space-y-3 shadow-sm hover:shadow-md transition-shadow`}
                                >
                                    <div className={`${index === 0 ? 'text-orange-600' : 'text-gray-600'}`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="font-semibold text-gray-900 text-sm">
                                        {feature.title}
                                    </h3>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            variants={fadeInUp}
                        >
                            <motion.a
                                href={`tel:${phone.url}`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl group"
                            >
                                <span>CALL US: {phone.display}</span>
                                <svg
                                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-full w-full"
                    >
                        {/* Image Grid Container */}
                        <div className="relative w-full max-w-2xl mx-auto">
                            {/* Two Column Grid with Gap */}
                            <div className="grid grid-cols-2 gap-6 md:gap-8">

                                {/* Left Image - Taller and Lower */}
                                <div className="relative mt-16 md:mt-20 lg:mt-24">
                                    <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                                        <Image
                                            src="/hvacworkers.jpeg"
                                            alt="HVAC Technician Working"
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>

                                {/* Right Image - Higher Position (1/3 offset) */}
                                <div className="relative">
                                    <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                                        <Image
                                            src="/hvac.jpeg"
                                            alt="HVAC Professional"
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Stats Badge - Positioned Over Images */}
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, type: "spring" }}
                                className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:bottom-8 md:left-auto md:right-1/3 md:translate-x-1/4 z-20 bg-white rounded-2xl shadow-xl p-6 text-center"
                            >
                                <div className="text-4xl font-bold text-gray-900">1700k+</div>
                                <div className="text-sm text-gray-600 font-medium">
                                    Happy Customers
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
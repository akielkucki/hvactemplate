'use client';

import { motion } from 'framer-motion';
import { brand } from "@/lib/info";

export default function ProcessSection() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const steps = [
        {
            number: "01",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            title: "Schedule a Consultation",
            description: "Reach out to our friendly team to discuss your needs and book an appointment."
        },
        {
            number: "02",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            ),
            title: "Get a Customized Plan",
            description: "We'll assess your space and provide tailored solutions that fit your budget and timeline."
        },
        {
            number: "03",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Customer Satisfaction",
            description: "Our commitment to quality means we ensure everything is running perfectly."
        },
        {
            number: "04",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
            ),
            title: "Professional Installation",
            description: "Our certified technicians work efficiently to complete your project on schedule."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
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
        <section className="bg-gradient-to-br from-primary to-gradient py-20 px-4 sm:px-6 lg:px-8 " id={"process"}>
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
                        className="inline-flex items-center gap-2 text-black/90 font-semibold mb-4"
                        whileHover={{ x: 5 }}
                    >
                        <div className="w-8 h-0.5 bg-white/90"></div>
                        <span className="text-sm uppercase tracking-wider">Our Process</span>
                        <div className="w-8 h-0.5 bg-white/90"></div>
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
                        A Simple & Hassle-Free Process
                    </h2>

                    <p className="text-black/80 text-lg max-w-3xl mx-auto">
                        At {brand.name}, we make plumbing services easy, efficient, and stress-free.
                        Whether you need a repair, installation, or routine maintenance, our process is streamlined to get your water flowing smoothly with minimal disruption.
                    </p>
                </motion.div>

                {/* Process Steps */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            //@ts-ignore
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className={`relative ${(index+1) % 2 === 0 ? 'md:translate-y-1/12' : 'md:-translate-y-1/12'}`}
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-xl h-full flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300">
                                {/* Number Badge */}
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-white font-bold text-lg">{step.number}</span>
                                </div>

                                {/* Icon */}
                                <div className="mt-8 mb-6 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-center mt-12"
                >
                    <motion.a
                        href="tel:619-902-6974"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl group"
                    >
                        <span>Get Started Today</span>
                        <svg
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
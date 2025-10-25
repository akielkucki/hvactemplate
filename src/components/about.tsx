'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {brand} from "@/lib/info";

export default function AboutSection() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const fadeInLeft = {
        initial: { opacity: 0, x: -30 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6, delay: 0.2 }
    };

    const fadeInRight = {
        initial: { opacity: 0, x: 30 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6, delay: 0.3 }
    };
    const sides = 6;
    const radius = 300;

    const points = Array.from({ length: sides }, (_, i) => {
        const angle = (Math.PI / 3) * i; // 60° increments
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return { x, y };
    });
    const {years,phone} = brand;
    return (
        <section className="bg-gradient-to-br from-gradient to-primary py-16 px-4 sm:px-6 lg:px-8" id={"about"}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Images */}
                    <motion.div
                        className="relative"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInLeft}
                    >
                        <div className="relative">
                            {/* Main Image Card */}
                            <motion.div
                                className="relative rounded-2xl overflow-hidden shadow-2xl"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative antialiased aspect-[15/15] bg-gradient-to-br from-accent/20 to-accent/40 overflow-hidden">
                                    <Image
                                        src="/hvactech.jpeg"
                                        alt="HVAC workers"
                                        fill
                                        className="object-cover antialiased"
                                    />
                                </div>


                                {/* Experience Badge */}
                                <motion.div
                                    className="absolute top-4 left-4 bg-white rounded-xl shadow-lg p-4"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.5, type: "spring" }}
                                >
                                    <div className="text-4xl font-bold text-accent">{years}+</div>
                                    <div className="text-sm text-gray-600 font-medium">Years Of Experience</div>
                                </motion.div>
                            </motion.div>


                        </div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInRight}
                        className="space-y-6"
                    >
                        {/* About Tag */}
                        <motion.div
                            className="inline-flex items-center gap-2 text-accent font-semibold"
                            whileHover={{ x: 5 }}
                        >
                            <div className="w-8 h-0.5 bg-accent"></div>
                            <span className="text-sm uppercase tracking-wider">About Us</span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h2
                            className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
                            variants={fadeInUp}
                        >
                            The Experts You Can Trust for All Your HVAC Needs
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            className="text-gray-600 text-lg leading-relaxed"
                            variants={fadeInUp}
                        >
                            From installation and maintenance to repairs, we provide exceptional comfort,
                            reliability, and quality in every home and business we serve. With years of
                            experience in the industry, our team is driven to excellence.
                        </motion.p>

                        {/* Features */}
                        <motion.div
                            className="flex items-center gap-3 text-accent "
                            variants={fadeInUp}
                        >
                            <motion.div
                                className="flex items-center gap-1"
                                whileHover={{ x: 5 }}
                            >
                                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Your Trusted HVAC Partner</h3>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-center gap-1"
                                whileHover={{ x: 5 }}
                            >
                                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Delivering Unmatched Comfort</h3>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Additional Description l*/}
                        {/* Bottom Right Circular Image */}
                        <div className={"flex items-center md:flex-row flex-col gap-2"}>
                            <HexImage src={"/hvacguy.jpeg"} size={240} radius={600} />
                            <motion.p
                                className="text-gray-600 leading-relaxed"
                                variants={fadeInUp}
                            >
                                Our commitment to excellence means we're always striving to offer you the best
                                in heating, cooling, & air quality. Trust us to create comfortable spaces that
                                enhance your daily life.
                            </motion.p>
                        </div>



                        {/* CTA Button */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <button className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl group">
                                <span>CALL US: {phone.display}</span>
                                <svg
                                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
const HexImage = ({ src, size = 300, radius = 100 }: { src: string; size?: number; radius?: number }) => {
    const points = Array.from({ length: 6 }, (_, i) => {
        const angle = (Math.PI / 3) * i;
        return {
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius,
        };
    });

    // Calculate viewBox size with padding for stroke
    const strokeWidth = 5;
    const padding = strokeWidth + 2;
    const viewBoxSize = (radius * 2) + (padding * 2);
    const center = viewBoxSize / 2;

    // Create path with rounded corners
    const createRoundedPath = () => {
        const cornerRadius = 50; // Adjust this value for more/less rounding
        let path = '';

        for (let i = 0; i < points.length; i++) {
            const current = points[i];
            const next = points[(i + 1) % points.length];
            const prev = points[(i - 1 + points.length) % points.length];

            // Calculate direction vectors
            const dx1 = current.x - prev.x;
            const dy1 = current.y - prev.y;
            const len1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);

            const dx2 = next.x - current.x;
            const dy2 = next.y - current.y;
            const len2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

            // Calculate points before and after corner
            const beforeX = current.x - (dx1 / len1) * cornerRadius;
            const beforeY = current.y - (dy1 / len1) * cornerRadius;
            const afterX = current.x + (dx2 / len2) * cornerRadius;
            const afterY = current.y + (dy2 / len2) * cornerRadius;

            if (i === 0) {
                path += `M ${center + beforeX} ${center + beforeY} `;
            } else {
                path += `L ${center + beforeX} ${center + beforeY} `;
            }

            // Add quadratic curve for rounded corner
            path += `Q ${center + current.x} ${center + current.y} ${center + afterX} ${center + afterY} `;
        }

        path += 'Z';
        return path;
    };

    const roundedPath = createRoundedPath();

    return (
        <svg
            viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
            width={size}
            height={size}
            className="flex-shrink-0"
        >
            <defs>
                <clipPath id="hexClip" clipPathUnits="userSpaceOnUse">
                    <path d={roundedPath} />
                </clipPath>
            </defs>
            <image
                href={src}
                x={center - radius * 1.5}
                y={center - radius * 1.5}
                width={radius * 3}
                height={radius * 3}
                clipPath="url(#hexClip)"
                preserveAspectRatio="slice"
                className="object-contain object-right"
            />
            <path
                d={roundedPath}
                fill="none"
                stroke="#FFFFFFF00"
                strokeWidth="5"
                strokeLinejoin="round"
            />
        </svg>
    );
};
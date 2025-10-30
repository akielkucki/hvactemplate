import React from 'react';
import ContactForm from "@/components/form";
import {brand} from "@/lib/info";
import Image from "next/image";
import Navbar from "@/components/navbar";

const Hero = () => {
    const {logo,phone} = brand;
    return (
        <div className="relative w-full min-h-screen" id={"home"}>
            {/* Navigation Bar */}
            <Navbar />

            {/* Background Image with Dark Overlay */}
            <div className="fixed inset-0 -z-10">
                <div
                    style={{ backgroundImage: `url('/static/hero/main.jpeg')` }}
                    className="absolute inset-0 bg-cover bg-center"
                />
                {/* Dark overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/45 backdrop-blur-xs" />
            </div>

            {/* Hero Section */}
            <section className="relative z-10 flex flex-col lg:flex-row justify-between items-start w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12">

                {/* Left Side - Hero Content */}
                <div className="w-full lg:flex-1 lg:max-w-5xl flex flex-col justify-end min-h-[calc(100vh-8rem)] ">

                    {/* Google Reviews Badge */}
                    <div className="flex flex-row sm:flex-row items-center sm:items-center gap-2 mb-4 sm:mb-6">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-black fill-accent " viewBox="0 0 20 20">
                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"  className={""}/>
                                </svg>
                            ))}
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full shadow-md">
                            <Image src={"/static/google.webp"} alt={"google logo"} width={20} height={20} />
                            <span className="text-xs sm:text-sm font-semibold text-primary">5 stars 50+ google reviews</span>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
                        Stop Paying for <br/><span className={"text-accent"}>‘Quick Fixes.’</span> We Build Plumbing Systems That Outlast the House.
                    </h1>

                    {/* Company Description */}
                    <div className="mb-6 sm:mb-8 max-w-2xl">
                        <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                            {`${brand.name} provides expert plumbing solutions across ${brand.area}. Whether you’re dealing with a leak, clog, or need a full system upgrade, our certified plumbers deliver fast, reliable service done right the first time.`}                        </p>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-6 sm:gap-8 mb-6 sm:mb-8">
                        <div>
                            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">1000+</div>
                            <div className="text-white/90 text-xs sm:text-sm mt-1">Happy customers</div>
                        </div>
                        <div>
                            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">100%</div>
                            <div className="text-white/90 text-xs sm:text-sm mt-1">Satisfaction rate</div>
                        </div>
                        <div>
                            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">40+</div>
                            <div className="text-white/90 text-xs sm:text-sm mt-1">Years of experience</div>
                        </div>
                    </div>

                    {/* Call Button */}
                    <a
                    href={`tel:${phone.url}`}
                    className="inline-block w-full max-w-md sm:max-w-lg bg-accent hover:bg-accent text-white text-center font-semibold py-3 sm:py-4 px-6 rounded-lg transition-all shadow-lg text-base sm:text-lg"
                    >
                        {phone.display}
                </a>
        </div>

{/* Right Side - Contact Form */}
    <div className="hidden lg:block lg:flex-shrink-0 lg:ml-8 lg:w-96 xl:w-[28rem] self-center">
        <ContactForm />
    </div>

{/* Mobile Contact Form - Shows below hero on mobile */}
    <div className="flex overflow-hidden min-w-full lg:hidden mt-8">
        <ContactForm />
    </div>
</section>
</div>
);
};

export default Hero;
'use client'
import React, {useState, useEffect, useMemo} from 'react';
import Image from "next/image";
import { brand } from "@/lib/info";

const Navbar = () => {
    const { logo, phone } = brand;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const handleMenuToggle = () => {
        if (isMenuOpen) {
            // Start exit animation
            setIsAnimating(true);
            setTimeout(() => {
                setIsMenuOpen(false);
                setIsAnimating(false);
            }, 600); // Total animation duration
        } else {
            setIsMenuOpen(true);
        }
    };

    const handleLinkClick = (link: string | null) => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsMenuOpen(false);
            setIsAnimating(false);
        }, 600);
        if (link === null) return;
        document.querySelector(link)?.scrollIntoView({behavior: "smooth",  block: "center" });
    };

    const navLinks = [
        { href: "#about", text: "ABOUT" },
        { href: "#why", text: "WHY US" },
        { href: "#projects", text: "PROJECTS" },
        { href: "#process", text: "PROCESS" },
    ];

    return (
        <>
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <div className=" rounded flex items-center justify-center">
                    {!logo.hasText ? (
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={64}
                            height={64}
                            className="object-cover h-full w-full"
                        />
                    ) : (
                        <div className="relative inline-flex items-center justify-center group">
                            {/* Circle Background with Border */}
                            <div className="relative w-12 h-12 bg-white rounded-full border-3 border-accent flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
                  <span className="font-black text-accent text-xl">
                    {logo.logoText.charAt(0)}
                  </span>
                            </div>
                            {/* Full Text (if you want it next to the monogram) */}
                            <span className="ml-2 font-bold text-white text-xl tracking-tight hidden sm:inline">
                </span>
                        </div>
                    )}
                </div>
                <span className="text-white text-xl font-bold">{brand.name}</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <button
                    key={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="text-white hover:text-accent transition-colors font-medium text-sm cursor-pointer"
                    >
                {link.text}
                    </button>
                    ))}
                <a
                href={`tel:${phone.url}`}
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-2.5 rounded-lg transition-all"
                >
                {phone.display}
            </a>
        </div>

        {/* Hamburger Menu Button */}
        <button
            onClick={handleMenuToggle}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center z-[60]"
            aria-label="Toggle menu"
        >
          <span
              className={`block w-7 h-0.5 bg-white transition-all duration-300 ease-out ${
                  isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-2'
              }`}
          />
            <span
                className={`block w-7 h-0.5 bg-white transition-all duration-300 ease-out ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
            />
            <span
                className={`block w-7 h-0.5 bg-white transition-all duration-300 ease-out ${
                    isMenuOpen ? '-rotate-45 translate-y-[-1px]' : 'translate-y-2'
                }`}
            />
        </button>
        </nav>

    {/* Full Screen Mobile Menu */}
    {isMenuOpen && (
        <div className="fixed flex items-center justify-center inset-0 z-40 md:hidden">
            {/* Background Overlay */}
            <div
                className={`absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity opacity-0 duration-300 ${
                    isAnimating ? 'opacity-100' : 'opacity-100'
                } ${isMenuOpen && 'opacity-100'}`}
                onClick={handleMenuToggle}
            />

            {/* Menu Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-8">
                {navLinks.map((link, index) => (
                <button
                    key={link.href}
                    onClick={()=>handleLinkClick(link.href)}
                    className={`text-white cursor-pointer text-3xl font-bold mb-8 transition-all duration-500 hover:text-accent ${
                    isAnimating
                    ? 'opacity-0 transform translate-y-4'
                    : 'opacity-100 transform translate-y-0'
                }`}
                    style={{
                    transitionDelay: isAnimating
                    ? `${(navLinks.length - index - 1) * 100}ms`
                    : `${index * 100}ms`
                }}
                    >
                {link.text}
                    </button>
                    ))}

                {/* Phone CTA */}
                <a
                href={`tel:${phone.url}`}
                onClick={()=>handleLinkClick(null)}
                className={`bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-lg text-xl transition-all duration-500 mt-8 ${
                isAnimating
                    ? 'opacity-0 transform translate-y-4'
                    : 'opacity-100 transform translate-y-0'
            }`}
                style={{
                transitionDelay: isAnimating
                    ? '0ms'
                    : `${navLinks.length * 100}ms`
            }}
                >
                    {phone.display}
            </a>

            {/* Optional: Social Links or Additional Info */}
            <div
                className={`absolute bottom-12 text-white/60 text-sm transition-all duration-500 ${
                    isAnimating
                        ? 'opacity-0 transform translate-y-4'
                        : 'opacity-100 transform translate-y-0'
                }`}
                style={{
                    transitionDelay: isAnimating
                        ? '0ms'
                        : `${(navLinks.length + 1) * 100}ms`
                }}
            >
                © {new Date().getFullYear()} {brand.name}
            </div>
        </div>
    </div>
    )}
</>
);
};

export default Navbar;
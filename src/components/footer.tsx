import {brand} from "@/lib/info";

export default function Footer() {
    const {logo,phone,name} = brand;
    return (
        <footer className="bg-neutral-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-8 md:px-16 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold">{name}</span>
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Professional HVAC services you can trust. Comfort delivered, guaranteed.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold tracking-wider text-accent">QUICK LINKS</h3>
                        <nav className="flex flex-col gap-3">
                            <a href="#services" className="text-neutral-400 hover:text-white transition-colors text-sm">
                                Services
                            </a>
                            <a href="#about" className="text-neutral-400 hover:text-white transition-colors text-sm">
                                About
                            </a>
                            <a href="#projects" className="text-neutral-400 hover:text-white transition-colors text-sm">
                                Projects
                            </a>
                            <a href="#area" className="text-neutral-400 hover:text-white transition-colors text-sm">
                                Service Area
                            </a>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold tracking-wider text-accent">CONTACT</h3>
                        <div className="flex flex-col gap-3 text-sm">
                            <a href={`tel:${phone.url}`} className="text-neutral-400 hover:text-white transition-colors">
                                {phone.display}
                            </a>
                            <a href="mailto:info@example.com" className="text-neutral-400 hover:text-white transition-colors">
                                info@{name.toLowerCase().replace(/\s+/g, '')}.com
                            </a>
                            <p className="text-neutral-400">
                                San Diego, CA
                            </p>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold tracking-wider text-accent">HOURS</h3>
                        <div className="flex flex-col gap-2 text-sm text-neutral-400">
                            <p>Monday - Friday</p>
                            <p className="text-white">8:00 AM - 6:00 PM</p>
                            <p className="mt-2">Saturday</p>
                            <p className="text-white">9:00 AM - 4:00 PM</p>
                            <p className="mt-2 text-accent font-medium">24/7 Emergency Service</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-800">
                <div className="max-w-7xl mx-auto px-8 md:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-neutral-500 text-sm">
                        © {new Date().getFullYear()} {name}. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="#privacy" className="text-neutral-500 hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#terms" className="text-neutral-500 hover:text-white transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
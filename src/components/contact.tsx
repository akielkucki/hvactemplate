'use client'
import React, {useEffect, useState} from 'react';
import {Award, Calendar, Clock, Mail, MessageSquare, Phone, Send, Wrench, User, Droplets} from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });

            setTimeout(() => {
                setIsSubmitted(false);
            }, 3000);
        }, 1500);
    };

    const testimonials = [
        {
            text: "Jeff fixed our water heater emergency on a Sunday! Fast, professional, and reasonably priced.",
            author: "Mike T.",
        },
        {
            text: "Best plumber in the area. Fixed our leak quickly and explained everything clearly.",
            author: "Sarah K.",
        },
        {
            text: "Honest pricing and quality work. Jeff saved us thousands by finding the real issue.",
            author: "Robert L.",
        },
        {
            text: "Called for a clogged drain, got same-day service. Very satisfied with the work!",
            author: "Jennifer M.",
        },
        {
            text: "Professional and clean. Jeff treated our home with respect and did excellent work.",
            author: "David S.",
        },
        {
            text: "Our go-to plumber for years. Reliable, skilled, and always on time.",
            author: "Lisa P.",
        },
    ];

    useEffect(()=> {
        const intv = setInterval(() => {
            setCurrentTestimonial(prev => (prev + 1) % testimonials.length)
        }, 4000)
        return () => clearInterval(intv)
    },[])

    return (
        <section className="py-20 px-8 bg-gradient-to-br from-white to-gradient" id={"contact"}>
            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <div
                                className="inline-flex items-center gap-2 bg-[#FF5E15]/10 text-[#FF5E15] px-4 py-2 rounded-full text-sm font-medium mb-4">
                                <Wrench className="w-4 h-4"/>
                                24/7 Emergency Service
                            </div>
                            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                                Expert Plumbing Solutions
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Get a free estimate from Jeff Bass Plumbing. Licensed, insured, and ready to solve your plumbing problems.
                            </p>
                        </div>

                        {/* Benefits */}
                        <div className="space-y-4">
                            <div
                                className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                <div
                                    className="w-12 h-12 bg-[#0B6ECC]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6 text-[#0B6ECC]"/>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Fast Response Time</h3>
                                    <p className="text-gray-600 text-sm">Same-day service available for emergencies</p>
                                </div>
                            </div>

                            <div
                                className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                <div
                                    className="w-12 h-12 bg-[#FF5E15]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Award className="w-6 h-6 text-[#FF5E15]"/>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Licensed & Insured</h3>
                                    <p className="text-gray-600 text-sm">20+ years of professional plumbing experience</p>
                                </div>
                            </div>

                            <div
                                className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                <div
                                    className="w-12 h-12 bg-[#0B6ECC]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Droplets className="w-6 h-6 text-[#0B6ECC]"/>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Upfront Pricing</h3>
                                    <p className="text-gray-600 text-sm">No hidden fees - transparent quotes before we start</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-[#0B6ECC]/60 to-[#FF5E15]/60 shadow-lg">
                            <div className="overflow-hidden rounded-3xl">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1653.8979036562926!2d-75.09940856705717!3d40.225410514789246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6aed1cfcfc581%3A0x3dd2b060f2564797!2s1172%20York%20Rd%2C%20Warminster%2C%20PA%2018974!5e0!3m2!1sen!2sus!4v1761665664467!5m2!1sen!2sus"
                                    width="100%"
                                    height="250"
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-[250px] rounded-3xl"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div
                        className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden h-full">
                        {/* Decorative Elements */}
                        <div
                            className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#0B6ECC]/10 to-[#FF5E15]/10 rounded-full blur-3xl opacity-50 -z-10"></div>
                        <div
                            className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#FF5E15]/10 to-[#0B6ECC]/10 rounded-full blur-3xl opacity-50 -z-10"></div>

                        <div className="mb-6">
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                Request a Free Estimate
                            </h3>
                            <p className="text-gray-600">
                                Fill out the form and we'll get back to you promptly
                            </p>
                        </div>

                        {isSubmitted && (
                            <div className="bg-green-50 border-2 border-green-400 text-green-700 px-4 py-3 rounded-xl mb-6 flex items-center gap-3">
                                <span className="text-2xl">✓</span>
                                <p className="font-medium">Success! We'll contact you soon.</p>
                            </div>
                        )}

                        <div className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400"/>
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="block w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0B6ECC] focus:border-[#0B6ECC] bg-gray-50 focus:bg-white transition-all text-gray-900 placeholder-gray-400"
                                            placeholder="John Smith"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Phone className="h-5 w-5 text-gray-400"/>
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="block w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0B6ECC] focus:border-[#0B6ECC] bg-gray-50 focus:bg-white transition-all text-gray-900 placeholder-gray-400"
                                            placeholder="(555) 123-4567"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400"/>
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="block w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0B6ECC] focus:border-[#0B6ECC] bg-gray-50 focus:bg-white transition-all text-gray-900 placeholder-gray-400"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Service Needed *
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Calendar className="h-5 w-5 text-gray-400"/>
                                    </div>
                                    <select
                                        name="service"
                                        required
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="block w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0B6ECC] focus:border-[#0B6ECC] bg-gray-50 focus:bg-white transition-all appearance-none cursor-pointer text-gray-900"
                                    >
                                        <option value="">Select a service...</option>
                                        <option value="emergency-repair">Emergency Repair</option>
                                        <option value="leak-detection">Leak Detection & Repair</option>
                                        <option value="drain-cleaning">Drain Cleaning</option>
                                        <option value="water-heater">Water Heater Service</option>
                                        <option value="pipe-installation">Pipe Installation/Replacement</option>
                                        <option value="bathroom-remodel">Bathroom Remodel</option>
                                        <option value="sewer-line">Sewer Line Service</option>
                                        <option value="fixture-installation">Fixture Installation</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Describe Your Plumbing Issue
                                </label>
                                <div className="relative">
                                    <div className="absolute top-4 left-4 pointer-events-none">
                                        <MessageSquare className="h-5 w-5 text-gray-400"/>
                                    </div>
                                    <textarea
                                        name="message"
                                        rows={11}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="block w-full h-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0B6ECC] focus:border-[#0B6ECC] bg-gray-50 focus:bg-white transition-all resize-none text-gray-900 placeholder-gray-400"
                                        placeholder="Tell us about your plumbing needs or any questions you have..."
                                    />
                                </div>
                            </div>

                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="w-full bg-accent text-white py-4 px-6 rounded-xl font-bold text-lg  transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5"/>
                                        Get Your Free Estimate
                                    </>
                                )}
                            </button>

                            <p className="text-xs text-gray-500 text-center">
                                🔒 Your information is secure and confidential.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
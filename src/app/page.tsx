import Hero from "@/components/hero";
import AboutSection from "@/components/about";
import TestimonialsSection from "@/components/testimonials";
import WhySection from "@/components/why";
import Offer from "@/components/offer";
import Footer from "@/components/footer";
import ProcessSection from "@/components/theprocess";

export default function Home() {
    return (
        <>
            <Hero/>
            <AboutSection/>
            <WhySection/>
            <TestimonialsSection/>
            <ProcessSection/>
            <Offer/>
            <Footer/>
        </>
    );
}
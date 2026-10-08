import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import Speakers from "@/components/Speakers";
import BlogSection from "@/components/BlogSection";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <CTASection />
      <Testimonials />
      <Speakers />
      <BlogSection />
      <FaqSection />
    </>
  );
}

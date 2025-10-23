import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/Services';
import { TestimonialsSection } from '@/components/home/Testimonials';
import { NewsSection } from '@/components/home/News';
import { DoctorsPreview } from '@/components/home/DoctorsPreview';
import { EmergencyCTA } from '@/components/home/EmergencyCTA';
import { ContactBar } from '@/components/home/ContactBar';
import Stats from '@/components/home/Stats';
import AboutSection from '@/components/home/AboutSection';
export default function Home() {
  return (
    <main className=" ">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <DoctorsPreview />
      <NewsSection />
      <EmergencyCTA />
      {/* <ContactBar /> */}
    </main>
  );
}
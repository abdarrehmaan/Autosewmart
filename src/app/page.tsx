import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedMachines from '@/components/FeaturedMachines';
import Applications from '@/components/Applications';
import WhyChooseUs from '@/components/WhyChooseUs';
import MachineComparison from '@/components/MachineComparison';
import HowItWorks from '@/components/HowItWorks';
import ProductGallery from '@/components/ProductGallery';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import QuoteRequest from '@/components/QuoteRequest';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedMachines />
        <Applications />
        <WhyChooseUs />
        <MachineComparison />
        <HowItWorks />
        <ProductGallery />
        <Testimonials />
        <FAQ />
        <QuoteRequest />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

'use client';

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import AboutSection from './components/aboutsection';
import Testimonials from './components/testimonials';
import CTASection from './components/CTASection';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className="bg-[#F7FAFC] text-gray-800 overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}

'use client';

import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Services from './components/sections/Services';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import CalculatorCTA from './components/sections/CalculatorCTA';
import Footer from './components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F3F0] text-[#2C2C2C] font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
        <CalculatorCTA />
      </main>
      <Footer />
    </div>
  );
}

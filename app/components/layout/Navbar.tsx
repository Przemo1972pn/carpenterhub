'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '@/app/data/content';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gradient-to-r from-[#2D5016] to-[#4A7C2E] shadow-lg' : 'bg-gradient-to-r from-[#2D5016] to-[#4A7C2E]'
    }`}>
      <div className="max-w-[1200px] mx-auto px-5 py-4 flex justify-between items-center">
        <div className="text-white text-2xl font-extrabold tracking-wide flex items-center gap-2.5 hover:scale-105 transition-transform">
          🔨 CarpenterHub
        </div>
        <ul className="hidden md:flex gap-10 list-none">
          {navLinks.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-white font-bold text-base relative py-2 hover:text-[#D4AF37] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4AF37] after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <Link 
          href="/kalkulator" 
          className="bg-[#D4AF37] text-[#2D5016] px-5 py-2.5 rounded-full font-bold hover:bg-transparent hover:text-[#D4AF37] border-2 border-[#D4AF37] transition-all"
        >
          🧮 Kalkulator
        </Link>
      </div>
    </nav>
  );
}

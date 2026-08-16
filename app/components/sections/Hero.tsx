'use client';

import Link from 'next/link';

export default function Hero() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-white px-5 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Film_o_aplikacji_dla_stolarzu.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[#2E2626]/60 backdrop-blur-[2px]"></div>

      <div className="max-w-[1200px] mx-auto text-center relative z-10 py-20">
        <span className="inline-block text-[#C5A059] font-mono tracking-[0.3em] uppercase text-sm mb-6 animate-[fadeInUp_0.8s_ease]">
          Stworzone przez stolarzy, dla stolarzy
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 leading-[1.1] animate-[slideInDown_0.8s_ease]">
          Koniec z ręcznymi kalkulacjami
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-4 text-white/80 font-light leading-relaxed animate-[slideInUp_0.8s_ease]">
          Masz dość nieprzespanych nocy przed oddaniem wyceny? Wyobraź sobie, że Twój najtrudniejszy
          obowiązek staje się przyjemnością.
        </p>
        <p className="max-w-2xl mx-auto text-base md:text-lg mb-12 text-white/60 font-light leading-relaxed animate-[slideInUp_0.8s_ease]">
          CarpenterHub – aplikacja, która liczy materiał, robociznę i Twój zysk w kilka minut.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-[fadeInUp_1s_ease]">
          <Link
            href="/kalkulator"
            className="w-full sm:w-auto bg-[#C5A059] text-[#2E2626] px-10 py-4 rounded-md font-medium text-base hover:bg-[#D4B978] transition-all hover:-translate-y-0.5"
          >
            Wypróbuj kalkulator
          </Link>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="w-full sm:w-auto border border-white/40 text-white px-10 py-4 rounded-md font-medium text-base hover:bg-white/10 transition-all hover:-translate-y-0.5"
          >
            Dołącz do projektu
          </a>
        </div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-[1px] h-12 bg-white/50 mx-auto"></div>
      </div>
    </section>
  );
}

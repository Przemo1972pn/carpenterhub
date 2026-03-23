import Link from 'next/link';

export default function Hero() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-[#2D5016] to-[#1a3009] text-white py-24 px-5 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)" />
          <circle cx="80" cy="80" r="3" fill="rgba(255,255,255,0.1)" />
          <circle cx="50" cy="50" r="1.5" fill="rgba(255,255,255,0.1)" />
          <circle cx="10" cy="70" r="2" fill="rgba(255,255,255,0.1)" />
          <circle cx="90" cy="30" r="2.5" fill="rgba(255,255,255,0.1)" />
        </svg>
      </div>
      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-5 animate-[slideInDown_0.8s_ease]">
          Drewno. Cyfrowo. Zysk.
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-white/90 animate-[slideInUp_0.8s_ease]">
          Profesjonalne usługi stolarskie dla Twojego biznesu
        </p>
        <a
          href="#contact"
          onClick={scrollToContact}
          className="inline-block bg-[#D4AF37] text-[#2D5016] px-10 py-4 rounded-full font-bold text-base hover:bg-transparent hover:text-[#D4AF37] border-2 border-[#D4AF37] transition-all hover:-translate-y-0.5 hover:shadow-xl"
        >
          Zapytaj o ofertę
        </a>
      </div>
    </section>
  );
}

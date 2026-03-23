'use client';

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
          Craftsmanship meets Technology
        </span>
        <h1 className="text-6xl md:text-8xl font-serif font-light mb-8 leading-[1.1] animate-[slideInDown_0.8s_ease]">
          Drewno. Cyfrowo. <br />
          <span className="italic font-normal text-[#C5A059]">Zysk.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-12 text-white/80 font-light leading-relaxed animate-[slideInUp_0.8s_ease]">
          Profesjonalne usługi stolarskie dla Twojego biznesu. 
          Nowoczesne podejście do tradycyjnego rzemiosła.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-[fadeInUp_1s_ease]">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="w-full sm:w-auto bg-[#C5A059] text-[#2E2626] px-10 py-4 rounded-md font-medium text-base hover:bg-[#D4B978] transition-all hover:-translate-y-0.5"
          >
            Zapytaj o ofertę
          </a>
          <a
            href="/kalkulator"
            className="w-full sm:w-auto border border-[#C5A059] text-[#C5A059] px-10 py-4 rounded-md font-medium text-base hover:bg-[#C5A059] hover:text-[#2E2626] transition-all hover:-translate-y-0.5"
          >
            Kalkulator Stolarski
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

import { pricing } from '@/app/data/content';

export default function Pricing() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-32 px-5 bg-[#F5F3F0]">
      <div className="max-w-[1200px] mx-auto text-center">
        <span className="text-[#C5A059] font-mono tracking-widest uppercase text-xs mb-4 block">Partnership Path</span>
        <h2 className="text-5xl font-serif font-light text-[#2E2626] mb-20 leading-tight">
          Select Your Craft Path
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-[1000px] mx-auto">
          {pricing.map((p, i) => (
            <div
              key={i}
              className={`bg-white p-12 border border-stone-200 transition-all duration-500 hover:shadow-2xl ${
                p.featured ? 'bg-[#2E2626] text-white border-[#C5A059] scale-105 z-10' : 'text-[#2E2626]'
              }`}
            >
              <span className={`text-[10px] font-mono tracking-widest uppercase mb-4 block ${p.featured ? 'text-[#C5A059]' : 'text-[#7A5D4F]'}`}>
                {p.name}
              </span>
              <div className="text-4xl font-serif font-light mb-2">
                ${p.price} <span className="text-sm font-sans italic opacity-60">/ proj.</span>
              </div>
              <p className={`text-sm font-light mb-10 ${p.featured ? 'text-white/60' : 'text-[#7A5D4F]'}`}>{p.desc}</p>
              
              <ul className="text-left space-y-4 mb-12">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-xs font-light">
                    <span className="text-[#C5A059] mt-1">●</span>
                    <span className={p.featured ? 'text-white/80' : 'text-[#2E2626]'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={scrollToContact}
                className={`block w-full text-center py-4 rounded-md font-medium text-xs tracking-widest uppercase transition-all border ${
                  p.featured 
                    ? 'bg-[#C5A059] text-[#2E2626] border-[#C5A059] hover:bg-transparent hover:text-[#C5A059]' 
                    : 'bg-transparent text-[#2E2626] border-stone-200 hover:border-[#C5A059] hover:text-[#C5A059]'
                }`}
              >
                {p.featured ? 'Zapytaj o ofertę Pro' : 'Wybierz Pakiet'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

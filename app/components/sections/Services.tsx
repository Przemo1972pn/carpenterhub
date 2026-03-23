import { services } from '@/app/data/content';

export default function Services() {
  return (
    <section id="services" className="py-32 px-5 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end mb-24">
          <div>
            <span className="text-[#C5A059] font-mono tracking-widest uppercase text-sm mb-4 block">Woodcraft 2026</span>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-[#2E2626] leading-tight">
              Architectural <br /> Integration
            </h2>
          </div>
          <p className="text-[#7A5D4F] text-lg font-light leading-relaxed max-w-md">
            From residential sanctuaries to corporate headquarters, we realize our craftsmanship to match the vision.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-8 bg-[#F5F3F0]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={s.image} 
                  alt={s.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#2E2626]/10 group-hover:bg-transparent transition-all duration-700"></div>
              </div>
              <h3 className="text-xl font-serif font-light text-[#2E2626] mb-3">{s.title}</h3>
              <p className="text-[#7A5D4F] text-sm font-light mb-4 leading-relaxed">{s.desc}</p>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A059] group-hover:pl-2 transition-all duration-300">
                Learn More —
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

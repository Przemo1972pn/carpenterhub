import { features } from '@/app/data/content';

export default function Features() {
  return (
    <section id="features" className="py-32 px-5 bg-[#F5F3F0]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-24">
          <span className="text-[#C5A059] font-mono tracking-widest uppercase text-sm mb-4 block">Engineered</span>
          <h2 className="text-5xl md:text-6xl font-serif font-light text-[#2E2626] leading-tight">
            Engineered Excellence
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((f, i) => (
            <div
              key={i}
              className="group opacity-0 animate-[fadeInUp_0.6s_ease_forwards]"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="text-4xl mb-8 grayscale group-hover:grayscale-0 transition-all duration-500">{f.icon}</div>
              <h3 className="text-2xl mb-6 text-[#2E2626] font-serif font-light tracking-tight">{f.title}</h3>
              <p className="text-[#7A5D4F] leading-relaxed font-light text-lg">{f.desc}</p>
              <div className="mt-8 w-0 group-hover:w-12 h-[1px] bg-[#C5A059] transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

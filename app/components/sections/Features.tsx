import { features } from '@/app/data/content';

export default function Features() {
  return (
    <section id="features" className="py-20 px-5 bg-[#F5F3F0]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl text-center mb-16 text-[#5D4337] font-bold relative pb-5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#C5A059] after:rounded">
          Dlaczego CarpenterHub?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-xl text-center transition-all duration-300 shadow-md hover:-translate-y-2.5 hover:shadow-xl opacity-0 animate-[fadeInUp_0.6s_ease_forwards]"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-5xl mb-5">{f.icon}</div>
              <h3 className="text-2xl mb-4 text-[#5D4337] font-bold">{f.title}</h3>
              <p className="text-[#666] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

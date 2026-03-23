import { testimonials } from '@/app/data/content';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-5 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl text-center mb-16 text-[#2D5016] font-bold relative pb-5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#8B6F47] after:rounded">
          Opinie Klientów
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-xl shadow-md border-l-4 border-[#2D5016]"
            >
              <p className="text-[#666] italic mb-4 leading-relaxed">
                ⭐⭐⭐⭐⭐ &quot;{t.text}&quot;
              </p>
              <div className="font-bold text-[#2D5016]">- {t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

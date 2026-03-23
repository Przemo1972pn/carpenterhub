import { services } from '@/app/data/content';

export default function Services() {
  return (
    <section id="services" className="py-20 px-5 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl text-center mb-16 text-[#5D4337] font-bold relative pb-5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#C5A059] after:rounded">
          Nasze Usługi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[#5D4337] to-[#3D2B24] text-white p-10 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl mb-4 font-bold">{s.icon} {s.title}</h3>
              <p className="mb-5 leading-relaxed">{s.desc}</p>
              <ul className="list-none">
                {s.items.map((item, j) => (
                  <li key={j} className="py-2 pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#C5A059] before:font-bold">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

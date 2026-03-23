import { pricing } from '@/app/data/content';

export default function Pricing() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 px-5 bg-[#F5F3F0]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl text-center mb-16 text-[#2D5016] font-bold relative pb-5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#8B6F47] after:rounded">
          Pakiety Cenowe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {pricing.map((p, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl ${
                p.featured ? 'scale-105 border-2 border-[#8B6F47]' : ''
              }`}
            >
              <div className="bg-[#2D5016] text-white p-8 text-center">
                <h3 className="text-2xl mb-2.5 font-bold">{p.name}</h3>
                <div className="text-4xl font-extrabold my-4">
                  od {p.price} <span className="text-lg font-normal">zł</span>
                </div>
                <p>{p.desc}</p>
              </div>
              <div className="p-8">
                <ul className="list-none mb-8">
                  {p.features.map((f, j) => (
                    <li key={j} className="py-3 border-b border-gray-100 text-[#666] before:content-['✓_'] before:text-[#2D5016] before:font-bold">
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="block w-full text-center bg-[#D4AF37] text-[#2D5016] py-3 rounded-full font-bold hover:bg-transparent hover:text-[#2D5016] border-2 border-[#D4AF37] transition-all"
                >
                  Zapytaj
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

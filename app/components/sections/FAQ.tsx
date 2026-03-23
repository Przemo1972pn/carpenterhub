'use client';

import { useState } from 'react';
import { faqs } from '@/app/data/content';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-5 bg-[#F5F3F0]">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-4xl text-center mb-16 text-[#5D4337] font-bold relative pb-5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#C5A059] after:rounded">
          Pytania i Odpowiedzi
        </h2>
        <div className="space-y-5">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full bg-[#5D4337] text-white p-5 flex justify-between items-center font-semibold text-left hover:bg-[#3D2B24] transition-colors"
              >
                {faq.q}
                <span className={`text-2xl transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40' : 'max-h-0'}`}>
                <p className="p-5 text-[#666] leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

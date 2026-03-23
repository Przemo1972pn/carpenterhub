'use client';

import { contactInfo, formFields, socialLinks } from '@/app/data/content';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Dziękujemy! Twoja wiadomość została wysłana. Skontaktujemy się z Tobą wkrótce.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-32 px-5 bg-[#5D4337] text-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <div>
            <span className="text-[#C5A059] font-mono tracking-widest uppercase text-xs mb-4 block">Get in Touch</span>
            <h2 className="text-5xl md:text-6xl font-serif font-light mb-12 leading-tight">
              Start Your <br />
              <span className="italic">Heritage Piece</span>
            </h2>
            <p className="text-white/70 text-lg font-light mb-16 max-w-md leading-relaxed">
              Whether it is a single statement table or an entire corporate campus, our consultants are ready to discuss your specifications.
            </p>
            
            <div className="space-y-10">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <span className="text-2xl opacity-50">{item.icon}</span>
                  <div>
                    <strong className="text-[#C5A059] block text-xs font-mono tracking-widest uppercase mb-2">{item.title}</strong>
                    <p className="text-white/80 font-light text-sm leading-relaxed whitespace-pre-line">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#2E2626] p-12 shadow-2xl border border-white/5">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {formFields.slice(0, 2).map((field) => (
                  <div key={field.name}>
                    <label className="block text-[10px] font-mono tracking-widest uppercase text-white/40 mb-3">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.required}
                      className="w-full bg-white/5 border-b border-white/10 p-3 text-white focus:outline-none focus:border-[#C5A059] transition-all font-light"
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-[10px] font-mono tracking-widest uppercase text-white/40 mb-3">
                  Project Type
                </label>
                <select className="w-full bg-white/5 border-b border-white/10 p-3 text-white focus:outline-none focus:border-[#C5A059] transition-all font-light appearance-none">
                  <option className="bg-[#2E2626]">Bespoke Furniture</option>
                  <option className="bg-[#2E2626]">Kitchen Cabinetry</option>
                  <option className="bg-[#2E2626]">Architectural Millwork</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-mono tracking-widest uppercase text-white/40 mb-3">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  className="w-full bg-white/5 border-b border-white/10 p-3 text-white focus:outline-none focus:border-[#C5A059] transition-all font-light min-h-[120px] resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#C5A059] text-[#2E2626] py-5 rounded-md font-medium text-xs tracking-[0.2em] uppercase hover:bg-[#D4B978] transition-all"
              >
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

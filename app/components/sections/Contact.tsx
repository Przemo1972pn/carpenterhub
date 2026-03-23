'use client';

import { contactInfo, formFields, socialLinks } from '@/app/data/content';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Dziękujemy! Twoja wiadomość została wysłana. Skontaktujemy się z Tobą wkrótce.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 px-5 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl text-center mb-16 text-[#5D4337] font-bold relative pb-5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#C5A059] after:rounded">
          Skontaktuj się z nami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-8">
            {contactInfo.map((item, i) => (
              <div key={i} className="p-5 bg-[#F5F3F0] rounded-xl border-l-4 border-[#5D4337]">
                <strong className="text-[#5D4337] block mb-2.5">{item.icon} {item.title}</strong>
                <p className="text-[#666] leading-relaxed whitespace-pre-line">{item.content}</p>
              </div>
            ))}
            <div className="p-5 bg-[#F5F3F0] rounded-xl border-l-4 border-[#5D4337]">
              <strong className="text-[#5D4337] block mb-2.5">Śledź nas:</strong>
              <div className="flex gap-4 mt-5">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 bg-[#5D4337] text-white rounded-full flex items-center justify-center font-bold hover:bg-[#3D2B24] hover:-translate-y-1 transition-all"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-[#F5F3F0] p-10 rounded-xl">
            <h3 className="text-[#5D4337] mb-5 text-xl font-bold">Wyślij wiadomość</h3>
            <form onSubmit={handleSubmit}>
              {formFields.map((field) => (
                <div key={field.name} className="mb-5">
                  <label className="block mb-2 font-semibold text-[#5D4337]">
                    {field.label} {field.required && '*'}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    required={field.required}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#5D4337] focus:shadow-[0_0_0_3px_rgba(93,67,55,0.1)] transition-all"
                  />
                </div>
              ))}
              <div className="mb-5">
                <label className="block mb-2 font-semibold text-[#5D4337]">Wiadomość *</label>
                <textarea
                  name="message"
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#5D4337] focus:shadow-[0_0_0_3px_rgba(93,67,55,0.1)] transition-all min-h-[120px] resize-y"
                />
              </div>
              <button
                type="submit"
                className="w-full text-center bg-[#C5A059] text-[#5D4337] py-3 rounded-full font-bold hover:bg-transparent hover:text-[#5D4337] border-2 border-[#C5A059] transition-all"
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

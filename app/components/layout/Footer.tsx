import { socialLinks } from '@/app/data/content';

export default function Footer() {
  return (
    <footer className="bg-[#2D5016] text-white py-10 px-5 text-center">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-center gap-4 mb-5">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 bg-[#1a3009] text-white rounded-full flex items-center justify-center font-bold hover:bg-[#8B6F47] hover:-translate-y-1 transition-all"
            >
              {social}
            </a>
          ))}
        </div>
        <p className="my-2.5">© 2026 CarpenterHub. Wszystkie prawa zastrzeżone.</p>
        <p className="text-xs mt-2.5">Polityka prywatności | Warunki użytkowania</p>
      </div>
    </footer>
  );
}

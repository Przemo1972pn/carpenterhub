import Link from 'next/link';

export default function CalculatorCTA() {
  return (
    <section className="py-16 px-5 bg-gradient-to-r from-[#5D4337] to-[#3D2B24]">
      <div className="max-w-[800px] mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Wypróbuj nasz Kalkulator Stolarski
        </h2>
        <p className="text-lg mb-8 text-white/90">
          Oblicz elementy, zoptymalizuj rozkrój płyt i wygeneruj listę zakupów w kilka minut.
        </p>
        <Link
          href="/kalkulator"
          className="inline-block bg-[#C5A059] text-[#5D4337] px-10 py-4 rounded-md font-bold text-lg hover:bg-white transition-all hover:-translate-y-0.5 hover:shadow-xl"
        >
          🧮 Przejdź do Kalkulatora
        </Link>
      </div>
    </section>
  );
}

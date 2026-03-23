export const navLinks = [
  { href: '#features', label: 'Strona główna' },
  { href: '#services', label: 'Usługi' },
  { href: '#pricing', label: 'Cennik' },
  { href: '#testimonials', label: 'Opinie' },
  { href: '#contact', label: 'Kontakt' },
];

export const features = [
  { icon: '🎯', title: 'Precyzja', desc: 'Każdy projekt wykonywany z najwyższą dokładnością i dbałością o szczegóły.' },
  { icon: '⚡', title: 'Szybkość', desc: 'Terminowe realizacje bez kompromisów na jakości pracy.' },
  { icon: '💎', title: 'Jakość', desc: 'Używamy tylko najlepszych materiałów i nowoczesnych technik.' },
];

export const services = [
  {
    icon: '🛋️',
    title: 'Meble na zamówienie',
    desc: 'Projektujemy i wykonujemy meble dostosowane do Twoich potrzeb i wnętrza.',
    image: 'https://images.unsplash.com/photo-1556912177-c54030639a60?auto=format&fit=crop&q=80&w=800',
    items: ['Szafy i garderoby', 'Biurka i półki', 'Łóżka i stoły', 'Kuchnie drewniane'],
  },
  {
    icon: '🏠',
    title: 'Remonty i wykończenia',
    desc: 'Kompleksowe usługi remontowe z drewnem w roli głównej.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800',
    items: ['Podłogi drewniane', 'Drzwi i okna', 'Panele ścienne', 'Sufity drewniane'],
  },
  {
    icon: '�',
    title: 'Projekty i konsultacje',
    desc: 'Pomoc w wyborze materiałów i projektowaniu Twojego wnętrza.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    items: ['Konsultacje projektowe', 'Wizualizacje 3D', 'Dobór materiałów', 'Kosztorysowanie'],
  },
];

export const pricing = [
  {
    name: 'Starter',
    price: '2 000',
    desc: 'Idealne dla małych projektów',
    features: ['Konsultacja projektowa', 'Projekt podstawowy', 'Wykonanie prac', 'Materiały podstawowe', 'Gwarancja 1 rok'],
    featured: false,
  },
  {
    name: '⭐ Professional',
    price: '5 000',
    desc: 'Najpopularniejszy pakiet',
    features: ['Konsultacja rozszerzona', 'Projekt zaawansowany', 'Wizualizacja 3D', 'Materiały premium', 'Gwarancja 3 lata', 'Serwis bezpłatny'],
    featured: true,
  },
  {
    name: 'Premium',
    price: '10 000',
    desc: 'Dla wymagających klientów',
    features: ['Pełna konsultacja', 'Projekt indywidualny', 'Wizualizacja 4K', 'Materiały luksusowe', 'Gwarancja 5 lat', 'Serwis priorytetowy'],
    featured: false,
  },
];

export const testimonials = [
  { text: 'Fantastyczna robota! Meble wykonane na najwyższym poziomie. Polecam każdemu!', author: 'Anna Kowalski' },
  { text: 'Profesjonalizm i szybkość realizacji. Dokładnie to, czego szukałem.', author: 'Piotr Nowak' },
  { text: 'Najlepsza inwestycja w moje mieszkanie. Polecam CarpenterHub!', author: 'Maria Lewandowska' },
];

export const faqs = [
  { q: 'Jak długo trwa realizacja projektu?', a: 'Czas realizacji zależy od złożoności projektu. Zwykle wynosi 2-4 tygodnie. Dokładny termin ustalamy na etapie konsultacji.' },
  { q: 'Czy oferujecie gwarancję?', a: 'Tak, oferujemy gwarancję. Długość gwarancji zależy od wybranego pakietu: Starter - 1 rok, Professional - 3 lata, Premium - 5 lat.' },
  { q: 'Czy mogę zmienić projekt po jego zatwierdzeniu?', a: 'Tak, możliwe są zmiany. Jednak zmiana projektu po rozpoczęciu produkcji może wiązać się z dodatkowymi kosztami.' },
  { q: 'Jakie materiały stosujecie?', a: 'Używamy drewna naturalnego (dąb, jesion, klon) oraz materiałów ekologicznych. Wszystkie materiały są certyfikowane.' },
  { q: 'Czy oferujecie dostawę i montaż?', a: 'Tak, oferujemy dostawę i montaż. Koszt dostawy zależy od lokalizacji i wielkości zamówienia.' },
];

export const contactInfo = [
  { icon: '📍', title: 'Adres:', content: 'ul. Drewniana 42\n80-001 Gdańsk, Polska' },
  { icon: '📞', title: 'Telefon:', content: '+48 123 456 789\n+48 987 654 321' },
  { icon: '📧', title: 'Email:', content: 'info@carpenterhub.pro\nkontakt@carpenterhub.pro' },
  { icon: '🕐', title: 'Godziny otwarcia:', content: 'Poniedziałek - Piątek: 8:00 - 18:00\nSobota: 9:00 - 14:00\nNiedziela: Zamknięte' },
];

export const formFields = [
  { label: 'Imię i nazwisko', name: 'name', type: 'text', required: true },
  { label: 'Email', name: 'email', type: 'email', required: true },
  { label: 'Telefon', name: 'phone', type: 'tel', required: false },
  { label: 'Temat', name: 'subject', type: 'text', required: true },
];

export const socialLinks = ['f', '📷', 'in'];

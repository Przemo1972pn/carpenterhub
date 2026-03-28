export const navLinks = [
  { href: '#features', label: 'Dlaczego My' },
  { href: '#services', label: 'Usługi' },
  { href: '#pricing', label: 'Cennik' },
  { href: '#testimonials', label: 'Opinie' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Kontakt' },
];

export const features = [
  { icon: '🎯', title: 'Doświadczenie', desc: 'Ponad 15 lat doświadczenia w branży stolarskiej. Wiemy, jak tworzyć meble, które trwają.' },
  { icon: '⭐', title: 'Najwyższa Jakość', desc: 'Używamy tylko najlepszych materiałów i nowoczesnych technik produkcji.' },
  { icon: '🎨', title: 'Indywidualny Podejście', desc: 'Każdy projekt jest unikatowy. Dostosowujemy się do Twoich potrzeb i marzeń.' },
  { icon: '💰', title: 'Konkurencyjne Ceny', desc: 'Oferujemy najlepszy stosunek jakości do ceny na rynku.' },
  { icon: '⚡', title: 'Szybka Realizacja', desc: 'Realizujemy projekty w ustalonych terminach bez kompromisów na jakości.' },
  { icon: '🤝', title: 'Obsługa Klienta', desc: 'Zawsze dostępni do konsultacji. Twoja satysfakcja to nasza gwarancja.' },
];

export const services = [
  {
    icon: '🛋️',
    title: 'Meble na Zamówienie',
    desc: 'Projektujemy i wykonujemy meble dostosowane do Twoich potrzeb:',
    image: 'https://images.unsplash.com/photo-1556912177-c54030639a60?auto=format&fit=crop&q=80&w=800',
    items: ['Szafy i garderoby', 'Kuchnie drewniane', 'Biurka i półki', 'Łóżka i stoły'],
  },
  {
    icon: '🔨',
    title: 'Remonty i Renowacja',
    desc: 'Profesjonalne usługi remontowe:',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800',
    items: ['Renowacja mebli', 'Naprawa drewna', 'Zabudowy ścienne', 'Prace wykończeniowe'],
  },
  {
    icon: '🎨',
    title: 'Projekty Drewniane',
    desc: 'Unikalne projekty dla Twojego domu:',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    items: ['Drewniane dekoracje', 'Elementy architektoniczne', 'Drewniane schody', 'Niestandardowe rozwiązania'],
  },
];

export const pricing = [
  {
    name: 'Starter',
    price: '500',
    desc: 'Idealne do małych projektów',
    features: ['Konsultacja projektu', 'Materiały podstawowe', 'Montaż i dostawa', 'Gwarancja 1 rok'],
    featured: false,
  },
  {
    name: 'Professional',
    price: '1500',
    desc: 'Najpopularniejszy pakiet',
    features: ['Pełna konsultacja', 'Materiały premium', 'Projekt 3D', 'Montaż i dostawa', 'Gwarancja 3 lata'],
    featured: true,
  },
  {
    name: 'Premium',
    price: '3000+',
    desc: 'Dla wymagających projektów',
    features: ['Pełna personalizacja', 'Materiały luksusowe', 'Projekt 3D + wizualizacja', 'Montaż profesjonalny', 'Gwarancja dożywotnia'],
    featured: false,
  },
];

export const testimonials = [
  { text: 'Fantastyczna praca! Meble są piękne i trwałe. Polecam wszystkim!', author: 'Anna Kowalska' },
  { text: 'Profesjonalizm na najwyższym poziomie. Realizacja przed terminem!', author: 'Piotr Nowak' },
  { text: 'Najlepszy stosunek jakości do ceny. Bardzo zadowolony z efektu końcowego.', author: 'Maria Lewandowska' },
];

export const faqs = [
  { q: 'Jaki jest czas realizacji projektu?', a: 'Czas realizacji zależy od złożoności projektu. Zwykle wynosi 2-4 tygodnie. Dokładny termin ustalamy na etapie konsultacji.' },
  { q: 'Czy oferujecie dostawę?', a: 'Tak, oferujemy dostawę i montaż. Koszt dostawy zależy od lokalizacji i wielkości zamówienia.' },
  { q: 'Jakie materiały wykorzystujecie?', a: 'Używamy drewna naturalnego (dąb, jesion, klon) oraz materiałów ekologicznych. Wszystkie materiały są certyfikowane.' },
  { q: 'Czy mogę zmienić projekt po jego zatwierdzeniu?', a: 'Tak, możliwe są zmiany. Jednak zmiana projektu po rozpoczęciu produkcji może wiązać się z dodatkowymi kosztami.' },
  { q: 'Jaką gwarancję oferujecie?', a: 'Gwarancja zależy od wybranego pakietu: Starter - 1 rok, Professional - 3 lata, Premium - dożywotnia.' },
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

export interface Carpenter {
  id: number;
  name: string;
  rating: number;
  specialization: string;
  location: string;
  isAvailable: boolean;
}

export interface Appointment {
  id: number;
  customer: string;
  date: string;
  status: 'confirmed' | 'pending';
  description: string;
}

export const carpenters: Carpenter[] = [
  { id: 1, name: 'Jan Kowalski', rating: 4.8, specialization: 'Meble kuchenne', location: 'Warszawa', isAvailable: true },
  { id: 2, name: 'Piotr Nowak', rating: 4.5, specialization: 'Schody i balustrady', location: 'Kraków', isAvailable: false },
  { id: 3, name: 'Stolarnia "Pod Dębem"', rating: 5.0, specialization: 'Renowacja antyków', location: 'Wrocław', isAvailable: true },
];

export const statistics = {
  activeCarpenters: 124,
  completedProjects: 852,
  totalRevenue: '1,240,000 PLN',
  activeUsers: 342,
};

export const appointments: Appointment[] = [
  { id: 101, customer: 'Anna Wiśniewska', date: '2023-11-15T10:00', status: 'confirmed', description: 'Pomiar kuchni' },
  { id: 102, customer: 'Michał Zieliński', date: '2023-11-16T14:30', status: 'pending', description: 'Konsultacja szafy wnękowej' },
];

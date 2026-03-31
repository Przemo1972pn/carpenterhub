'use client';

import React, { useState } from 'react';
import { carpenters, Carpenter } from '../data/mockData';
import { MapPin, Star } from 'lucide-react';

export default function CustomerPanel() {
  const [selectedCarpenter, setSelectedCarpenter] = useState<Carpenter | null>(null);

  return (
    <div>
      <h1 style={{ color: 'var(--primary)' }}>Wyszukaj Stolarza</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>Znajdź najlepszego specjalistę w swojej okolicy i zarezerwuj pomiar.</p>

      {selectedCarpenter ? (
        <div className="glass-panel" style={{ padding: '30px', animation: 'fadeIn 0.3s' }}>
          <h2>Rezerwacja: {selectedCarpenter.name}</h2>
          <p>Specjalizacja: {selectedCarpenter.specialization}</p>
          <p><MapPin size={16}/> {selectedCarpenter.location}</p>
          <div style={{ marginTop: '20px' }}>
            <label style={{ display: 'block', marginBottom: '10px' }}>Wybierz datę pomiaru:</label>
            <input type="datetime-local" style={{ padding: '10px', borderRadius: '8px', border: 'none', background: '#333', color: '#fff', marginBottom: '20px', width: '100%', maxWidth: '300px' }} />
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button className="btn-primary" onClick={() => alert('Zarezerwowano pomiar!')}>Potwierdź rezerwację</button>
            <button className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--text-muted)', color: 'var(--text-main)' }} onClick={() => setSelectedCarpenter(null)}>Wróć</button>
          </div>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {carpenters.map(c => (
            <div key={c.id} className="glass-panel" style={{ padding: '20px', cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => setSelectedCarpenter(c)}>
              <h3 style={{ margin: '0 0 10px 0' }}>{c.name}</h3>
              <p style={{ margin: '5px 0', color: 'var(--text-muted)' }}>{c.specialization}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffd700' }}><Star size={16} fill="currentColor" /> {c.rating}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9em' }}><MapPin size={16} /> {c.location}</span>
              </div>
              <div style={{ marginTop: '15px', color: c.isAvailable ? '#4CAF50' : '#F44336' }}>
                {c.isAvailable ? 'Dostępny natychmiast' : 'Zajęty'}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { appointments } from '../data/mockData';
import { Calculator, Clock } from 'lucide-react';

export default function CarpenterPanel() {
  const [materialCalc, setMaterialCalc] = useState({ length: '', width: '', height: '', depth: '', cost: null as string | null });

  const calculateCost = () => {
    const l = parseFloat(materialCalc.length) || 1;
    const w = parseFloat(materialCalc.width) || 1;
    const h = parseFloat(materialCalc.height) || 1;
    const d = parseFloat(materialCalc.depth) || 1;
    
    // Obliczenie objętości drewna uwzględniające opcjonalną wysokość.
    // Dzielimy przez odpowiednią potęgę w zależności od ilości użytych wymiarów, 
    // aby otrzymać prawidłowo M3 zakładając, że podano wymiary w cm.
    const dimensionsUsed = [materialCalc.length, materialCalc.width, materialCalc.height, materialCalc.depth].filter(Boolean).length;
    const divisor = Math.pow(100, dimensionsUsed);
    
    const vol = (l * w * h * d) / (divisor || 1000000);
    const pricePerM3 = 3500;
    
    if (dimensionsUsed > 0) {
      setMaterialCalc(prev => ({ ...prev, cost: (vol * pricePerM3).toFixed(2) }));
    }
  };

  const inputStyle = { width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border-color)', background: '#111', color: 'white', marginTop: '5px' };

  return (
    <div>
      <h1 style={{ color: 'var(--primary)' }}>Panel Stolarza</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '30px' }}>
        <div className="glass-panel" style={{ padding: '30px' }}>
          <h2>Twoje Zlecenia i Pomiary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {appointments.map(app => (
              <div key={app.id} style={{ background: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '8px', borderLeft: app.status === 'confirmed' ? '4px solid #4CAF50' : '4px solid #FFC107' }}>
                <h4 style={{ margin: '0 0 5px 0' }}>{app.customer}</h4>
                <p style={{ margin: '5px 0', fontSize: '0.9em', color: 'var(--text-muted)' }}>{app.description}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8em', marginTop: '10px' }}>
                  <Clock size={14} /> {new Date(app.date).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '30px' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Calculator /> Kalkulator Materiałów</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9em' }}>Pozwala szybko obliczyć koszt surowca (desek) na podstawie wymiarów w centymetrach.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
            <div>
              <label>Długość (cm)</label>
              <input type="number" style={inputStyle} value={materialCalc.length} onChange={e => setMaterialCalc({...materialCalc, length: e.target.value})} />
            </div>
            <div>
              <label>Szerokość (cm)</label>
              <input type="number" style={inputStyle} value={materialCalc.width} onChange={e => setMaterialCalc({...materialCalc, width: e.target.value})} />
            </div>
            <div>
              <label>Wysokość (cm)</label>
              <input type="number" style={inputStyle} value={materialCalc.height} onChange={e => setMaterialCalc({...materialCalc, height: e.target.value})} />
            </div>
            <div>
              <label>Grubość (cm)</label>
              <input type="number" style={inputStyle} value={materialCalc.depth} onChange={e => setMaterialCalc({...materialCalc, depth: e.target.value})} />
            </div>
            <button className="btn-primary" onClick={calculateCost}>Oblicz Koszt</button>

            {materialCalc.cost && (
              <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(212, 163, 115, 0.1)', border: '1px solid var(--primary)', borderRadius: '8px' }}>
                <h3 style={{ margin: 0, color: 'var(--primary)' }}>Szacowany koszt: {materialCalc.cost} PLN</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

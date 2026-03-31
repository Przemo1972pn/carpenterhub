'use client';

import React from 'react';
import { statistics, carpenters } from '../data/mockData';
import { Users, TrendingUp, Activity, CheckCircle } from 'lucide-react';

export default function AdminPanel() {
  return (
    <div>
      <h1 style={{ color: 'var(--primary)', marginBottom: '30px' }}>Panel Administratora</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        <KpiCard title="Aktywni Stolarze" value={statistics.activeCarpenters} icon={<Users />} />
        <KpiCard title="Aktywni Użytkownicy" value={statistics.activeUsers} icon={<Activity />} />
        <KpiCard title="Ukończone Zlecenia" value={statistics.completedProjects} icon={<CheckCircle />} />
        <KpiCard title="Przychód całkowity" value={statistics.totalRevenue} icon={<TrendingUp />} />
      </div>

      <div className="glass-panel" style={{ padding: '30px', overflowX: 'auto' }}>
        <h2 style={{ marginTop: 0 }}>Zarządzanie Stolarzami</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', minWidth: '600px' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--border-color)', textAlign: 'left' }}>
              <th style={{ padding: '10px' }}>ID</th>
              <th style={{ padding: '10px' }}>Imię / Firma</th>
              <th style={{ padding: '10px' }}>Specjalizacja</th>
              <th style={{ padding: '10px' }}>Lokalizacja</th>
              <th style={{ padding: '10px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {carpenters.map(c => (
              <tr key={c.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <td style={{ padding: '15px 10px' }}>{c.id}</td>
                <td style={{ padding: '15px 10px', color: 'var(--primary)', fontWeight: 'bold' }}>{c.name}</td>
                <td style={{ padding: '15px 10px', color: 'var(--text-muted)' }}>{c.specialization}</td>
                <td style={{ padding: '15px 10px' }}>{c.location}</td>
                <td style={{ padding: '15px 10px' }}>
                  <span style={{ padding: '5px 10px', borderRadius: '20px', fontSize: '0.8em', backgroundColor: c.isAvailable ? 'rgba(76, 175, 80, 0.2)' : 'rgba(244, 67, 54, 0.2)', color: c.isAvailable ? '#4CAF50' : '#F44336' }}>
                    {c.isAvailable ? 'Aktywny' : 'Zajęty'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function KpiCard({ title, value, icon }: { title: string; value: string | number; icon: React.ReactNode }) {
  return (
    <div className="glass-panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ color: 'var(--primary)' }}>{icon}</div>
      <div style={{ fontSize: '2em', fontWeight: 'bold', margin: '5px 0' }}>{value}</div>
      <div style={{ color: 'var(--text-muted)', fontSize: '0.9em' }}>{title}</div>
    </div>
  );
}

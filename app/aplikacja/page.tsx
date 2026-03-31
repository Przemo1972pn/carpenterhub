'use client';

import React, { useState } from 'react';
import CustomerPanel from './components/CustomerPanel';
import CarpenterPanel from './components/CarpenterPanel';
import AdminPanel from './components/AdminPanel';
import './styles.css';
import { User, Hammer, Settings } from 'lucide-react';

export default function AplikacjaPage() {
  const [role, setRole] = useState<'customer' | 'carpenter' | 'admin'>('customer');

  return (
    <div id="carpenter-app">
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '20px', 
        padding: '15px',
        backgroundColor: 'var(--bg-card)',
        borderBottom: '1px solid var(--border-color)',
        flexWrap: 'wrap'
      }}>
        <button 
          className="btn-primary" 
          style={{ opacity: role === 'customer' ? 1 : 0.6, display: 'flex', alignItems: 'center', gap: '8px' }}
          onClick={() => setRole('customer')}
        >
          <User size={18} /> Panel Klienta
        </button>
        <button 
          className="btn-primary" 
          style={{ opacity: role === 'carpenter' ? 1 : 0.6, display: 'flex', alignItems: 'center', gap: '8px' }}
          onClick={() => setRole('carpenter')}
        >
          <Hammer size={18} /> Panel Stolarza
        </button>
        <button 
          className="btn-primary" 
          style={{ opacity: role === 'admin' ? 1 : 0.6, display: 'flex', alignItems: 'center', gap: '8px' }}
          onClick={() => setRole('admin')}
        >
          <Settings size={18} /> Panel Admina
        </button>
      </nav>

      <main style={{ flex: 1, padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {role === 'customer' && <CustomerPanel />}
        {role === 'carpenter' && <CarpenterPanel />}
        {role === 'admin' && <AdminPanel />}
      </main>
    </div>
  );
}

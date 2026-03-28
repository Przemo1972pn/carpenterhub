'use client';

import { useState } from 'react';
import ProjectTab from '../components/ProjectTab';
import ResultsTab from '../components/ResultsTab';
import ShoppingTab from '../components/ShoppingTab';
import VisualizationTab from '../components/VisualizationTab';
import { Cabinet, MaterialSettings, Element, CalculationResult } from '../types';
import { packSheets } from '../utils';
import Link from 'next/link';

type TabId = 'input' | 'results' | 'shopping' | 'visualization';

export default function KalkulatorPage() {
  const [activeTab, setActiveTab] = useState<TabId>('input');
  const [counter, setCounter] = useState(2);
  const [cabinets, setCabinets] = useState<Cabinet[]>([
    { id: 1, name: 'Szafka 1', w: 600, h: 720, d: 550, qty: 1 },
    { id: 2, name: 'Szafka 2', w: 600, h: 720, d: 550, qty: 1 },
  ]);
  const [settings, setSettings] = useState<MaterialSettings>({
    sheetW: 2800,
    sheetH: 2070,
    sheetPrice: 180,
    hdfW: 2800,
    hdfH: 2070,
    hdfPrice: 60,
    kerf: 4,
    thickness: 18,
    hourRate: 80,
  });
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculate = () => {
    const allElem: Element[] = [];

    cabinets.forEach(cab => {
      const { w: W, h: H, d: D, qty, name } = cab;
      for (let q = 0; q < qty; q++) {
        const cn = qty > 1 ? `${name} (${q + 1})` : name;
        allElem.push({ name: 'Bok lewy', w: D - settings.thickness, h: H, mat: 'wiórowa', color: '#C5A059', cab: cn });
        allElem.push({ name: 'Bok prawy', w: D - settings.thickness, h: H, mat: 'wiórowa', color: '#C5A059', cab: cn });
        allElem.push({ name: 'Spód', w: W - 2 * settings.thickness, h: D - settings.thickness, mat: 'wiórowa', color: '#7A5D4F', cab: cn });
        allElem.push({ name: 'Góra', w: W - 2 * settings.thickness, h: D - settings.thickness, mat: 'wiórowa', color: '#5D4337', cab: cn });
        allElem.push({ name: 'Tył (HDF)', w: W - 8, h: H - 8, mat: 'pilśniowa', color: '#3D2B24', cab: cn });
      }
    });

    const wiElem = allElem.filter(e => e.mat === 'wiórowa');
    const hdfElem = allElem.filter(e => e.mat === 'pilśniowa');

    const wiRes = packSheets(wiElem, settings.sheetW, settings.sheetH, settings.kerf);
    const hdfRes = packSheets(hdfElem, settings.hdfW, settings.hdfH, settings.kerf);

    const matCost = wiRes.n * settings.sheetPrice + hdfRes.n * settings.hdfPrice;
    const laborH = cabinets.reduce((a, c) => a + c.qty * 2.5, 0);
    const laborCost = laborH * settings.hourRate;
    const grand = matCost + laborCost;

    setResult({
      elements: allElem,
      wiRes,
      hdfRes,
      laborH,
      laborCost,
      grand,
    });

    setActiveTab('results');
  };

  const tabs = [
    { id: 'input' as TabId, label: '📐 Projekt' },
    { id: 'results' as TabId, label: '📊 Wyniki' },
    { id: 'shopping' as TabId, label: '🛒 Zakupy' },
    { id: 'visualization' as TabId, label: '🪵 Wizualizacja' },
  ];

  return (
    <div className="min-h-screen bg-[#0f0d0b] text-[#f0ebe3] font-sans">
      <nav className="flex items-center justify-between px-6 md:px-8 py-4 border-b border-[#C5A059] bg-[#0f0d0b]/95 sticky top-0 z-50 backdrop-blur-md">
          <Link href="/" className="text-xl font-extrabold tracking-tight hover:opacity-80 transition-opacity">
          🔨 <span className="text-[#C5A059]">Carpenter</span><span className="text-[#C5A059]">Hub</span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex gap-1 bg-[#C5A059] p-1 rounded-lg border border-[#C5A059]">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#C5A059] text-[#2E2626]'
                    : 'text-stone-500 hover:text-stone-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <Link 
            href="/" 
            className="text-sm text-stone-400 hover:text-white transition-colors hidden md:block"
          >
            ← Powrót
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 md:px-6 py-8">
        {activeTab === 'input' && (
          <ProjectTab
            cabinets={cabinets}
            setCabinets={setCabinets}
            settings={settings}
            setSettings={setSettings}
            onCalculate={calculate}
            counter={counter}
            setCounter={setCounter}
          />
        )}
        {activeTab === 'results' && (
          <ResultsTab result={result} settings={settings} cabinets={cabinets} />
        )}
        {activeTab === 'shopping' && <ShoppingTab result={result} settings={settings} />}
        {activeTab === 'visualization' && <VisualizationTab cabinets={cabinets} />}
      </main>
    </div>
  );
}

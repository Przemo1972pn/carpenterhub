'use client';

import React, { useState } from 'react';

export default function CalculatorCTA() {
  const [materialCalc, setMaterialCalc] = useState({ length: '', width: '', height: '', depth: '', cost: null as string | null });

  const calculateCost = () => {
    const l = parseFloat(materialCalc.length) || 1;
    const w = parseFloat(materialCalc.width) || 1;
    const h = parseFloat(materialCalc.height) || 1;
    const d = parseFloat(materialCalc.depth) || 1;
    
    // Obliczenie objętości (M3): z racji, że podajemy wymiary w cm.
    const dimensionsUsed = [materialCalc.length, materialCalc.width, materialCalc.height, materialCalc.depth].filter(Boolean).length;
    const divisor = Math.pow(100, dimensionsUsed);
    
    const vol = (l * w * h * d) / (divisor || 1000000);
    const pricePerM3 = 3500;
    
    if (dimensionsUsed > 0) {
      setMaterialCalc(prev => ({ ...prev, cost: (vol * pricePerM3).toFixed(2) }));
    }
  };

  return (
    <section className="py-16 px-5 bg-gradient-to-r from-[#5D4337] to-[#3D2B24]">
      <div className="max-w-[800px] mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Szybka wycena materiału (Kalkulator)
        </h2>
        <p className="text-lg mb-8 text-white/90">
          Wprowadź wymiary w cm (Długość, Szerokość, Wysokość, Grubość), aby oszacować koszt surowych desek na swoje zlecenie.
        </p>

        <div className="bg-[#2E2626] rounded-xl p-6 md:p-8 max-w-[600px] mx-auto shadow-2xl border border-[#C5A059]/30 text-left">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-sm text-[#C5A059] mb-1">Długość (cm)</label>
              <input type="number" 
                className="w-full bg-[#1A1515] text-white border border-[#C5A059]/40 rounded-md p-2 focus:outline-none focus:border-[#C5A059]" 
                value={materialCalc.length} onChange={e => setMaterialCalc({...materialCalc, length: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm text-[#C5A059] mb-1">Szerokość (cm)</label>
              <input type="number" 
                className="w-full bg-[#1A1515] text-white border border-[#C5A059]/40 rounded-md p-2 focus:outline-none focus:border-[#C5A059]" 
                value={materialCalc.width} onChange={e => setMaterialCalc({...materialCalc, width: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm text-[#C5A059] mb-1">Wysokość (cm)</label>
              <input type="number" 
                className="w-full bg-[#1A1515] text-white border border-[#C5A059]/40 rounded-md p-2 focus:outline-none focus:border-[#C5A059]" 
                value={materialCalc.height} onChange={e => setMaterialCalc({...materialCalc, height: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm text-[#C5A059] mb-1">Grubość (cm)</label>
              <input type="number" 
                className="w-full bg-[#1A1515] text-white border border-[#C5A059]/40 rounded-md p-2 focus:outline-none focus:border-[#C5A059]" 
                value={materialCalc.depth} onChange={e => setMaterialCalc({...materialCalc, depth: e.target.value})} />
            </div>
          </div>
          
          <button 
            onClick={calculateCost}
            className="w-full bg-[#C5A059] text-[#2E2626] py-3 rounded-md font-bold text-lg hover:bg-white transition-all hover:shadow-lg"
          >
            Oblicz Koszt Drewna
          </button>

          {materialCalc.cost && (
            <div className="mt-6 p-4 bg-[#C5A059]/10 border border-[#C5A059] rounded-lg text-center">
              <h3 className="text-xl font-bold text-[#C5A059]">Szacowany koszt: {materialCalc.cost} PLN</h3>
              <p className="text-sm text-white/70 mt-1">bazując na średniej kwocie 3500 PLN za m³</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

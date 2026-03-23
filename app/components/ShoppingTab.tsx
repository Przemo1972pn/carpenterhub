'use client';

import { CalculationResult, MaterialSettings } from '../types';

interface ShoppingTabProps {
  result: CalculationResult | null;
  settings: MaterialSettings;
}

export default function ShoppingTab({ result, settings }: ShoppingTabProps) {
  if (!result) {
    return (
      <div className="text-center py-20 text-stone-500">
        <div className="text-5xl mb-4 opacity-40">🛒</div>
        <div className="text-base">Lista zakupów pojawi się po obliczeniu</div>
      </div>
    );
  }

  const matCost = result.wiRes.n * settings.sheetPrice + result.hdfRes.n * settings.hdfPrice;

  const items = [
    {
      name: `Płyta wiórowa ${settings.sheetW}×${settings.sheetH}mm (${result.wiRes.n} ark.)`,
      qty: `${result.wiRes.n} ark.`,
      cost: `${(result.wiRes.n * settings.sheetPrice).toFixed(0)} PLN`,
      dot: '#c17f3a',
    },
    {
      name: `Płyta HDF/pilśniowa ${settings.hdfW}×${settings.hdfH}mm (${result.hdfRes.n} ark.)`,
      qty: `${result.hdfRes.n} ark.`,
      cost: `${(result.hdfRes.n * settings.hdfPrice).toFixed(0)} PLN`,
      dot: '#5a9e6e',
    },
    {
      name: `Robocizna (${result.laborH.toFixed(1)} h × ${settings.hourRate} PLN/h)`,
      qty: `${result.laborH.toFixed(1)} h`,
      cost: `${result.laborCost.toFixed(0)} PLN`,
      dot: '#6a9fc0',
    },
  ];

  return (
    <div className="animate-fadeUp space-y-5">
      <div className="py-6">
        <h2 className="text-2xl font-extrabold">Lista zakupów</h2>
        <p className="text-sm text-stone-500 mt-1">Gotowe zestawienie do zamówienia materiałów</p>
      </div>

      <div className="bg-stone-900 border border-stone-800 rounded-xl p-6">
        <ul className="flex flex-col gap-3">
          {items.map((it, i) => (
            <li
              key={i}
              className="flex items-center justify-between p-4 bg-stone-800 border border-stone-700 rounded-lg gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: it.dot }} />
                <span className="text-sm">{it.name}</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-mono text-sm text-amber-400">{it.qty}</span>
                <span className="font-mono text-sm text-stone-500 w-20 text-right">{it.cost}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between p-5 bg-amber-900/10 border border-amber-800 rounded-lg mt-5">
          <div className="text-lg font-extrabold">Łącznie do zapłaty</div>
          <div className="text-3xl font-extrabold text-amber-400">{result.grand.toFixed(0)} PLN</div>
        </div>
      </div>

      <div className="bg-stone-900 border border-stone-800 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-stone-800">
          <div className="w-9 h-9 bg-amber-900 rounded-lg flex items-center justify-center text-lg">💡</div>
          <div className="font-bold">Wskazówki zamówienia</div>
        </div>
        <div className="text-sm leading-8 text-stone-500 space-y-1">
          <div>
            ✅ Zamów <strong className="text-stone-300">{result.wiRes.n} ark. płyty wiórowej</strong> — poproś o cięcie na wymiar w tartaku lub markecie budowlanym
          </div>
          <div>
            ✅ Zamów <strong className="text-stone-300">{result.hdfRes.n} ark. HDF</strong> — 3.2mm dla tyłów szafek wiszących, 5mm dla stojących
          </div>
          <div>
            ✅ Weź <strong className="text-stone-300">+1 arkusz zapasu</strong> na każde 5 zamówionych — na błędy i cięcia testowe
          </div>
          <div>
            ✅ Wydrukuj <strong className="text-stone-300">schemat rozkroju</strong> z zakładki Wyniki i daj go przy zamawianiu cięcia
          </div>
          <div>
            ✅ Sprawdź <strong className="text-stone-300">kierunek słojów (okleiny)</strong> przed zaznaczeniem na arkuszu
          </div>
        </div>
      </div>
    </div>
  );
}

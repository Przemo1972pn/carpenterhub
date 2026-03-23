'use client';

import { CalculationResult, MaterialSettings, Cabinet, Sheet } from '../types';

interface ResultsTabProps {
  result: CalculationResult | null;
  settings: MaterialSettings;
  cabinets: Cabinet[];
}

interface Cabinet3D {
  id: number;
  name: string;
  width: number;
  height: number;
  depth: number;
  thickness: number;
  material: string;
  color: string;
}

function Cabinet3D({ cabinet }: { cabinet: Cabinet3D }) {
  const scale = 0.8;
  const w = cabinet.width * scale;
  const h = cabinet.height * scale;
  const d = cabinet.depth * scale;
  const t = cabinet.thickness * scale;

  return (
    <div className="relative" style={{ width: w, height: h + 40, perspective: '1000px' }}>
      {/* Tył */}
      <div
        className="absolute border-2"
        style={{
          width: w,
          height: h,
          background: cabinet.color,
          borderColor: '#2E2626',
          transform: `translateZ(${-d/2}px)`,
        }}
      />
      
      {/* Lewy bok */}
      <div
        className="absolute border-2"
        style={{
          width: d,
          height: h,
          background: cabinet.color,
          borderColor: '#2E2626',
          transform: `rotateY(-90deg) translateZ(${-w/2}px)`,
        }}
      />
      
      {/* Prawy bok */}
      <div
        className="absolute border-2"
        style={{
          width: d,
          height: h,
          background: cabinet.color,
          borderColor: '#2E2626',
          transform: `rotateY(90deg) translateZ(${w/2}px)`,
        }}
      />
      
      {/* Spód */}
      <div
        className="absolute border-2"
        style={{
          width: w - 2*t,
          height: d,
          background: cabinet.color,
          borderColor: '#2E2626',
          transform: `rotateX(90deg) translateZ(${-h/2 + t}px)`,
        }}
      />
      
      {/* Góra */}
      <div
        className="absolute border-2"
        style={{
          width: w - 2*t,
          height: d,
          background: cabinet.color,
          borderColor: '#2E2626',
          transform: `rotateX(-90deg) translateZ(${h/2 - t}px)`,
        }}
      />
      
      {/* Uchwyty i detale */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-xs font-bold text-white bg-black/50 px-2 py-1 rounded">
          {cabinet.name}
        </div>
      </div>
    </div>
  );
}

function SheetVisualization({ sheet, idx, sw, sh }: { sheet: Sheet; idx: number; sw: number; sh: number }) {
  const maxW = Math.min(typeof window !== 'undefined' ? window.innerWidth - 100 : 700, 700);
  const scaleX = maxW / sw;
  const H = 72;
  const scaleY = H / sh;

  const usedX = sheet.pieces.reduce((mx, p) => Math.max(mx, (p.x + p.w) * scaleX), 0);
  const wasteX = maxW - usedX;

  return (
    <div className="bg-[#2E2626] border border-[#C5A059] rounded-lg p-4">
      <div className="flex items-center gap-3 mb-3 text-xs font-mono text-[#7A5D4F]">
        <span>Arkusz {idx + 1}</span>
        <span className="px-2 py-1 bg-[#C5A059]/20 text-[#C5A059] rounded-full"> {sheet.eff}% wyk.</span>
        {sheet.eff && sheet.eff < 60 && (
          <span className="px-2 py-1 bg-orange-900/20 text-orange-400 rounded-full"> duży odpad</span>
        )}
      </div>
      <div
        className="relative h-[72px] bg-[#7A5D4F] rounded overflow-hidden"
        style={{ width: maxW }}
      >
        {sheet.pieces.map((p, i) => {
          const px = p.x * scaleX;
          const py = p.y * scaleY;
          const pw = Math.max(p.w * scaleX - 1, 2);
          const ph = Math.max(p.h * scaleY - 1, 6);
          return (
            <div
              key={i}
              className="absolute rounded-sm flex items-center justify-center text-[9px] font-mono font-medium text-white/80 overflow-hidden whitespace-nowrap text-ellipsis px-1 cursor-default hover:opacity-75 transition-opacity border border-[#2E2626]"
              style={{
                left: px,
                top: py,
                width: pw,
                height: ph,
                background: p.color,
                borderColor: '#2E2626',
              }}
              title={`${p.name} · ${p.cab} · ${Math.round(p.w)}×${Math.round(p.h)}mm`}
            >
              {pw > 28 ? p.name.charAt(0) : ''}
            </div>
          );
        })}
        {wasteX > 5 && (
          <div
            className="absolute top-0 bottom-0 flex items-center justify-center text-[9px] text-white/30 font-mono"
            style={{
              left: usedX,
              width: wasteX,
              background: 'repeating-linear-gradient(45deg,rgba(93,67,55,0.1),rgba(93,67,55,0.1) 4px,transparent 4px,transparent 8px)',
            }}
          >
            odpad
          </div>
        )}
      </div>
    </div>
  );
}

export default function ResultsTab({ result, settings, cabinets }: ResultsTabProps) {
  if (!result) {
    return (
      <div className="text-center py-20 text-stone-500">
        <div className="text-5xl mb-4 opacity-40">📐</div>
        <div className="text-base">Najpierw uzupełnij dane i kliknij OBLICZ</div>
      </div>
    );
  }

  const matCost = result.wiRes.n * settings.sheetPrice + result.hdfRes.n * settings.hdfPrice;

  return (
    <div className="animate-fadeUp space-y-5">
      {/* 3D Cabinet Preview */}
      <div className="bg-[#2E2626] border border-[#C5A059] rounded-lg p-6 mb-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-[#C5A059] rounded-lg flex items-center justify-center text-lg">🪑</div>
          <div>
            <h3 className="text-xl font-bold text-[#C5A059]">Podgląd 3D Szafki</h3>
            <p className="text-sm text-[#7A5D4F]">Wizualizacja rzeczywistej szafki na podstawie obliczeń</p>
          </div>
        </div>
        <div className="flex justify-center gap-6 overflow-x-auto pb-4">
          {cabinets.slice(0, 3).map((cab, i) => (
            <Cabinet3D 
              key={i} 
              cabinet={{
                id: cab.id,
                name: cab.name,
                width: cab.w,
                height: cab.h,
                depth: cab.d,
                thickness: 18,
                material: 'wiórowa',
                color: '#C5A059'
              }} 
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between py-6 flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-extrabold">Wyniki kalkulacji</h2>
          <p className="text-sm text-stone-500 mt-1">
            {cabinets.length} szafek · {result.elements.length} elementów
          </p>
        </div>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-stone-700 rounded-lg text-stone-500 font-semibold text-sm hover:border-amber-500 hover:text-amber-500 transition-colors"
        >
          🖨️ Drukuj raport
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-[#2E2626] border border-[#C5A059] rounded-xl p-5 text-center">
          <div className="text-3xl font-extrabold text-[#C5A059]">{result.wiRes.n}</div>
          <div className="text-xs font-mono text-[#7A5D4F]">ark. płyty wiórowej</div>
          <div className="text-xs text-[#7A5D4F] mt-2 uppercase tracking-wide">{settings.sheetW}×{settings.sheetH}mm</div>
        </div>
        <div className="bg-[#2E2626] border border-[#C5A059] rounded-xl p-5 text-center">
          <div className="text-3xl font-extrabold text-[#C5A059]">{result.hdfRes.n}</div>
          <div className="text-xs font-mono text-[#7A5D4F]">ark. HDF / pilśniowej</div>
          <div className="text-xs text-[#7A5D4F] mt-2 uppercase tracking-wide">tyły szafek</div>
        </div>
        <div className="bg-[#2E2626] border border-[#C5A059] rounded-xl p-5 text-center">
          <div className="text-3xl font-extrabold text-[#C5A059]">{result.elements.length}</div>
          <div className="text-xs font-mono text-[#7A5D4F]">elementów łącznie</div>
          <div className="text-xs text-[#7A5D4F] mt-2 uppercase tracking-wide">boki · dno · góra · tył</div>
        </div>
        <div className="bg-[#2E2626] border border-[#C5A059] rounded-xl p-5 text-center">
          <div className="text-3xl font-extrabold text-[#C5A059]">{result.laborH.toFixed(1)}</div>
          <div className="text-xs font-mono text-[#7A5D4F]">godzin robocizny</div>
          <div className="text-xs text-[#7A5D4F] mt-2 uppercase tracking-wide">szacunek</div>
        </div>
      </div>

      <div className="bg-[#2E2626] border border-[#C5A059] rounded-xl p-6">
        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#3D2B24]">
          <div className="w-9 h-9 bg-[#C5A059] rounded-lg flex items-center justify-center text-lg">📋</div>
          <div className="font-bold text-white">Lista elementów do wycięcia</div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[10px] text-[#7A5D4F] uppercase tracking-wider font-mono border-b border-[#3D2B24]">
                <th className="pb-2 px-3">Szafka</th>
                <th className="pb-2 px-3">Element</th>
                <th className="pb-2 px-3">Szer (mm)</th>
                <th className="pb-2 px-3">Wys (mm)</th>
                <th className="pb-2 px-3">Materiał</th>
              </tr>
            </thead>
            <tbody>
              {result.elements.map((e, i) => (
                <tr key={i} className="border-b border-[#3D2B24] hover:bg-[#C5A059]/5">
                  <td className="py-2.5 px-3 text-[#7A5D4F] text-xs">{e.cab}</td>
                  <td className="py-2.5 px-3">{e.name}</td>
                  <td className="py-2.5 px-3 font-mono">{Math.round(e.w)}</td>
                  <td className="py-2.5 px-3 font-mono">{Math.round(e.h)}</td>
                  <td className="py-2.5 px-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[11px] font-mono ${
                        e.mat === 'wiórowa'
                          ? 'bg-[#C5A059]/20 text-[#C5A059]'
                          : 'bg-[#5D4337]/20 text-[#5D4337]'
                      }`}
                    >
                      {e.mat}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-[#2E2626] border border-[#C5A059] rounded-xl p-6">
        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#3D2B24]">
          <div className="w-9 h-9 bg-[#C5A059] rounded-lg flex items-center justify-center text-lg">🪚</div>
          <div>
            <div className="font-bold text-white">Rozkrój — Płyta wiórowa</div>
            <div className="text-xs text-[#7A5D4F]">{settings.sheetW}×{settings.sheetH}mm · {result.wiRes.n} ark.</div>
          </div>
        </div>
        <div className="overflow-x-auto pb-2">
          <div className="flex flex-col gap-4">
            {result.wiRes.data.map((s, i) => (
              <SheetVisualization key={i} sheet={s} idx={i} sw={settings.sheetW} sh={settings.sheetH} />
            ))}
          </div>
        </div>
        <p className="text-[11px] text-[#7A5D4F] font-mono mt-3">
          🎨 Kolory: 🟠 boki · � spód · 🔴 góra · Przekreślone = odpad piły ({settings.kerf}mm)
        </p>
      </div>

      {result.hdfRes.data.length > 0 && (
        <div className="bg-[#2E2626] border border-[#C5A059] rounded-xl p-6">
          <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#3D2B24]">
            <div className="w-9 h-9 bg-[#C5A059] rounded-lg flex items-center justify-center text-lg">🪵</div>
            <div>
              <div className="font-bold text-white">Rozkrój — Płyta HDF / pilśniowa</div>
              <div className="text-xs text-[#7A5D4F]">{settings.hdfW}×{settings.hdfH}mm · {result.hdfRes.n} ark.</div>
            </div>
          </div>
          <div className="overflow-x-auto pb-2">
            <div className="flex flex-col gap-4">
              {result.hdfRes.data.map((s, i) => (
                <SheetVisualization key={i} sheet={s} idx={i} sw={settings.hdfW} sh={settings.hdfH} />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="bg-[#2E2626] border border-[#C5A059] rounded-xl p-6">
        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#3D2B24]">
          <div className="w-9 h-9 bg-[#C5A059] rounded-lg flex items-center justify-center text-lg">⏱️</div>
          <div className="font-bold text-white">Szacowany czas robocizny</div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-[#3D2B24] border border-[#C5A059] rounded-lg p-4 text-center">
            <div className="text-xl font-mono text-[#C5A059]">{(result.laborH * 0.35).toFixed(1)}h</div>
            <div className="text-[11px] text-[#7A5D4F] uppercase mt-1">Cięcie</div>
          </div>
          <div className="bg-[#3D2B24] border border-[#C5A059] rounded-lg p-4 text-center">
            <div className="text-xl font-mono text-[#C5A059]">{(result.laborH * 0.45).toFixed(1)}h</div>
            <div className="text-[11px] text-[#7A5D4F] uppercase mt-1">Montaż</div>
          </div>
          <div className="bg-[#3D2B24] border border-[#C5A059] rounded-lg p-4 text-center">
            <div className="text-xl font-mono text-[#C5A059]">{(result.laborH * 0.20).toFixed(1)}h</div>
            <div className="text-[11px] text-[#7A5D4F] uppercase mt-1">Wykończenie</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between p-5 bg-[#C5A059]/10 border border-[#C5A059] rounded-lg">
        <div>
          <div className="text-lg font-extrabold text-[#5D4337]">Łączny koszt projektu</div>
          <div className="text-xs text-[#7A5D4F] mt-1">
            Materiały {matCost.toFixed(0)} PLN + robocizna {result.laborCost.toFixed(0)} PLN
          </div>
        </div>
        <div className="text-3xl font-extrabold text-[#5D4337]">{result.grand.toFixed(0)} PLN</div>
      </div>
    </div>
  );
}

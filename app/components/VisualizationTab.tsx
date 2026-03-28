'use client';

import { useState } from 'react';
import { Cabinet } from '../types';

interface VisualizationTabProps {
  cabinets: Cabinet[];
}

const PALETTES = [
  { name: 'Dąb naturalny',   body: '#c8a96e', door: '#b8934a', edge: '#7a5c2e', back: '#d4b87a' },
  { name: 'Orzech ciemny',   body: '#6b4226', door: '#5a3520', edge: '#3d2010', back: '#7a4e32' },
  { name: 'Sosna jasna',     body: '#e8d5a3', door: '#d9c07a', edge: '#a8854a', back: '#f0e0b0' },
  { name: 'Biel mat',        body: '#f0ede8', door: '#e0dcd5', edge: '#c5bfb5', back: '#fafaf8' },
  { name: 'Antracyt',        body: '#3a3a3a', door: '#2e2e2e', edge: '#1a1a1a', back: '#444444' },
  { name: 'Szary beton',     body: '#8a8a8a', door: '#757575', edge: '#555555', back: '#9a9a9a' },
];

function Cabinet3D({
  cab,
  palette,
  scale,
}: {
  cab: Cabinet;
  palette: typeof PALETTES[0];
  scale: number;
}) {
  const W = cab.w * scale;
  const H = cab.h * scale;
  const D = cab.d * scale;

  const faceStyle = (
    bg: string,
    w: number,
    h: number,
    transform: string,
    brightness = 1
  ): React.CSSProperties => ({
    position: 'absolute',
    width: w,
    height: h,
    background: bg,
    filter: `brightness(${brightness})`,
    border: '1px solid rgba(0,0,0,0.25)',
    transform,
    transformOrigin: '0 0',
    backfaceVisibility: 'hidden',
  });

  // Door panel sizes (2 doors)
  const dw = W * 0.45;
  const dh = H * 0.88;
  const dTop = H * 0.06;

  return (
    <div style={{ position: 'relative', width: W + D * 0.6, height: H + D * 0.35, marginBottom: 16 }}>
      <div style={{ position: 'absolute', left: D * 0.6, top: 0, width: W, height: H, transformStyle: 'preserve-3d' }}>
        {/* Front face */}
        <div style={faceStyle(palette.body, W, H, 'none', 1.05)}>
          {/* Door left */}
          <div style={{
            position: 'absolute', left: W * 0.03, top: dTop, width: dw, height: dh,
            background: palette.door, border: '1px solid rgba(0,0,0,0.15)',
            boxShadow: 'inset 0 0 0 4px rgba(255,255,255,0.1)',
          }} />
          {/* Door right */}
          <div style={{
            position: 'absolute', left: W * 0.52, top: dTop, width: dw, height: dh,
            background: palette.door, border: '1px solid rgba(0,0,0,0.15)',
            boxShadow: 'inset 0 0 0 4px rgba(255,255,255,0.1)',
          }} />
          {/* Handles */}
          <div style={{ position: 'absolute', left: W * 0.41, top: H * 0.47, width: 5, height: 24, background: '#c5a059', borderRadius: 2 }} />
          <div style={{ position: 'absolute', left: W * 0.55, top: H * 0.47, width: 5, height: 24, background: '#c5a059', borderRadius: 2 }} />
          {/* Label */}
          <div style={{
            position: 'absolute', bottom: 6, left: 0, right: 0, textAlign: 'center',
            fontSize: 9, color: 'rgba(255,255,255,0.6)', fontFamily: 'monospace', letterSpacing: 1,
          }}>
            {cab.name}
          </div>
        </div>
        {/* Top face */}
        <div style={{
          ...faceStyle(palette.back, W, D * 0.6,
            `translateY(0) rotateX(-90deg) translateZ(0)`, 1.25),
          top: 0, left: 0,
          transformOrigin: '0 0',
          transform: `translateY(0px) skewX(-30deg) scaleY(0.5) translateX(${-D * 0.6}px) translateY(${-D * 0.3}px)`,
          width: W + D * 0.6,
        }} />
        {/* Right side face */}
        <div style={{
          ...faceStyle(palette.edge, D * 0.6, H,
            'none', 0.75),
          top: 0,
          left: W,
          transform: `skewY(-60deg) scaleX(0.5) translateX(${-D * 0.3}px) translateY(${D * 0.3}px)`,
          width: D * 0.6,
        }} />
      </div>
    </div>
  );
}

export default function VisualizationTab({ cabinets }: VisualizationTabProps) {
  const [paletteIdx, setPaletteIdx] = useState(0);
  const [showPalette, setShowPalette] = useState(false);
  const palette = PALETTES[paletteIdx];

  const maxDim = Math.max(...cabinets.map(c => Math.max(c.w, c.h, c.d)), 1);
  const scale = Math.min(200 / maxDim, 0.22);

  const totalCabinets = cabinets.reduce((a, c) => a + c.qty, 0);

  return (
    <div className="animate-fadeUp space-y-5">
      <div className="py-6 flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-extrabold">Wizualizacja 3D</h2>
          <p className="text-sm text-stone-500 mt-1">
            Podgląd gotowych mebli na podstawie projektu · {cabinets.length} model(i) · {totalCabinets} szt. łącznie
          </p>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowPalette(v => !v)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-md border border-[#C5A059] text-[#C5A059] text-sm font-bold hover:bg-[#C5A059]/10 transition-all"
          >
            <span
              className="w-4 h-4 rounded-sm border border-white/20"
              style={{ background: palette.door }}
            />
            🎨 Paleta kolorów
          </button>
          {showPalette && (
            <div className="absolute right-0 top-full mt-2 z-50 bg-stone-900 border border-stone-700 rounded-xl p-3 shadow-2xl w-56">
              <div className="text-[10px] text-stone-500 uppercase tracking-widest mb-2 font-mono">Wybierz wykończenie</div>
              {PALETTES.map((p, i) => (
                <button
                  key={i}
                  onClick={() => { setPaletteIdx(i); setShowPalette(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all mb-1 ${
                    i === paletteIdx ? 'bg-[#C5A059]/20 text-[#C5A059]' : 'text-stone-300 hover:bg-stone-800'
                  }`}
                >
                  <span className="w-6 h-6 rounded flex-shrink-0 border border-white/10" style={{ background: p.door }} />
                  {p.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {cabinets.length === 0 ? (
        <div className="text-center py-20 text-stone-500">
          <div className="text-5xl mb-4 opacity-40">🗄️</div>
          <div className="text-base">Dodaj szafki w zakładce Projekt aby zobaczyć wizualizację</div>
        </div>
      ) : (
        <>
          <div className="bg-stone-900 border border-stone-800 rounded-xl p-6">
            <div className="text-[10px] text-stone-500 uppercase tracking-widest mb-6 font-mono">
              Wykończenie: <span className="text-[#C5A059]">{palette.name}</span>
            </div>
            <div className="flex flex-wrap gap-10 items-end justify-start">
              {cabinets.map(cab =>
                Array.from({ length: cab.qty }).map((_, qi) => (
                  <div key={`${cab.id}-${qi}`} className="flex flex-col items-center gap-3">
                    <Cabinet3D
                      cab={{ ...cab, name: cab.qty > 1 ? `${cab.name} (${qi + 1})` : cab.name }}
                      palette={palette}
                      scale={scale}
                    />
                    <div className="text-center">
                      <div className="text-xs font-bold text-stone-300">
                        {cab.qty > 1 ? `${cab.name} (${qi + 1})` : cab.name}
                      </div>
                      <div className="text-[10px] text-stone-500 font-mono mt-0.5">
                        {cab.w}×{cab.h}×{cab.d} mm
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cabinets.map(cab => (
              <div key={cab.id} className="bg-stone-900 border border-stone-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: palette.door }} />
                  <div className="font-bold text-sm">{cab.name}</div>
                  {cab.qty > 1 && (
                    <span className="ml-auto text-[10px] bg-[#5D4337]/40 text-[#C5A059] px-2 py-0.5 rounded-full font-mono">
                      ×{cab.qty}
                    </span>
                  )}
                </div>
                <div className="space-y-1.5 text-xs font-mono text-stone-400">
                  <div className="flex justify-between"><span>Szerokość</span><span className="text-stone-200">{cab.w} mm</span></div>
                  <div className="flex justify-between"><span>Wysokość</span><span className="text-stone-200">{cab.h} mm</span></div>
                  <div className="flex justify-between"><span>Głębokość</span><span className="text-stone-200">{cab.d} mm</span></div>
                  <div className="flex justify-between border-t border-stone-800 pt-1.5 mt-1.5">
                    <span>Objętość</span>
                    <span className="text-[#C5A059]">
                      {((cab.w * cab.h * cab.d) / 1e9).toFixed(3)} m³
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

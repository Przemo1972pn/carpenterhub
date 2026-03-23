'use client';

import { Cabinet, MaterialSettings } from '../types';

interface ProjectTabProps {
  cabinets: Cabinet[];
  setCabinets: (c: Cabinet[]) => void;
  settings: MaterialSettings;
  setSettings: (s: MaterialSettings) => void;
  onCalculate: () => void;
  counter: number;
  setCounter: (n: number) => void;
}

export default function ProjectTab({
  cabinets,
  setCabinets,
  settings,
  setSettings,
  onCalculate,
  counter,
  setCounter,
}: ProjectTabProps) {
  const addCabinet = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    setCabinets([
      ...cabinets,
      { id: newCounter, name: `Szafka ${newCounter}`, w: 600, h: 720, d: 550, qty: 1 },
    ]);
  };

  const removeCabinet = (id: number) => {
    setCabinets(cabinets.filter(c => c.id !== id));
  };

  const updateCab = (id: number, field: keyof Cabinet, val: string | number) => {
    setCabinets(
      cabinets.map(c =>
        c.id === id ? { ...c, [field]: field === 'name' ? val : parseFloat(val as string) || 0 } : c
      )
    );
  };

  const updateSetting = (field: keyof MaterialSettings, val: string) => {
    setSettings({ ...settings, [field]: parseFloat(val) || 0 });
  };

  return (
    <div className="animate-fadeUp">
      <div className="text-center py-12 md:py-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Kalkulator<br />
          <span className="text-[#C5A059]">Stolarski</span>
        </h1>
        <p className="text-stone-400 max-w-md mx-auto text-sm md:text-base">
          Dodaj wymiary szafek — obliczę elementy, zoptymalizuję rozkrój płyt wiórowych i HDF, wygeneruję listę zakupów.
        </p>
      </div>

      <div className="bg-stone-900 border border-stone-800 rounded-xl p-6 mb-5">
        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-stone-800">
          <div className="w-9 h-9 bg-[#5D4337] rounded-lg flex items-center justify-center text-lg">
            ⚙️
          </div>
          <div>
            <div className="font-bold">Ustawienia materiałów i cen</div>
            <div className="text-xs text-stone-500">Parametry płyt i stawki robocizny</div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-stone-500 uppercase tracking-wider font-mono">Płyta wiórowa — szer. (mm)</label>
            <input
              type="number"
              value={settings.sheetW}
              onChange={e => updateSetting('sheetW', e.target.value)}
              className="bg-stone-800 border border-stone-700 rounded-md px-3 py-2 text-sm font-mono focus:outline-none focus:border-[#C5A059]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-stone-500 uppercase tracking-wider font-mono">Płyta wiórowa — wys. (mm)</label>
            <input
              type="number"
              value={settings.sheetH}
              onChange={e => updateSetting('sheetH', e.target.value)}
              className="bg-stone-800 border border-stone-700 rounded-md px-3 py-2 text-sm font-mono focus:outline-none focus:border-[#C5A059]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-stone-500 uppercase tracking-wider font-mono">Cena płyty wiórowej (PLN)</label>
            <input
              type="number"
              value={settings.sheetPrice}
              onChange={e => updateSetting('sheetPrice', e.target.value)}
              className="bg-stone-800 border border-stone-700 rounded-md px-3 py-2 text-sm font-mono focus:outline-none focus:border-[#C5A059]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-stone-500 uppercase tracking-wider font-mono">Płyta HDF — szer. (mm)</label>
            <input
              type="number"
              value={settings.hdfW}
              onChange={e => updateSetting('hdfW', e.target.value)}
              className="bg-stone-800 border border-stone-700 rounded-md px-3 py-2 text-sm font-mono focus:outline-none focus:border-[#C5A059]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-stone-500 uppercase tracking-wider font-mono">Płyta HDF — wys. (mm)</label>
            <input
              type="number"
              value={settings.hdfH}
              onChange={e => updateSetting('hdfH', e.target.value)}
              className="bg-stone-800 border border-stone-700 rounded-md px-3 py-2 text-sm font-mono focus:outline-none focus:border-[#C5A059]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-stone-500 uppercase tracking-wider font-mono">Cena płyty HDF (PLN)</label>
            <input
              type="number"
              value={settings.hdfPrice}
              onChange={e => updateSetting('hdfPrice', e.target.value)}
              className="bg-stone-800 border border-stone-700 rounded-md px-3 py-2 text-sm font-mono focus:outline-none focus:border-[#C5A059]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-stone-500 uppercase tracking-wider font-mono">Szerokość cięcia piły (mm)</label>
            <input
              type="number"
              value={settings.kerf}
              onChange={e => updateSetting('kerf', e.target.value)}
              className="bg-stone-800 border border-stone-700 rounded-md px-3 py-2 text-sm font-mono focus:outline-none focus:border-[#C5A059]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-stone-500 uppercase tracking-wider font-mono">Grubość ścianki (mm)</label>
            <input
              type="number"
              value={settings.thickness}
              onChange={e => updateSetting('thickness', e.target.value)}
              className="bg-stone-800 border border-stone-700 rounded-md px-3 py-2 text-sm font-mono focus:outline-none focus:border-[#C5A059]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-stone-500 uppercase tracking-wider font-mono">Stawka robocizny (PLN/h)</label>
            <input
              type="number"
              value={settings.hourRate}
              onChange={e => updateSetting('hourRate', e.target.value)}
              className="bg-stone-800 border border-stone-700 rounded-md px-3 py-2 text-sm font-mono focus:outline-none focus:border-[#C5A059]"
            />
          </div>
        </div>
      </div>

      <div className="bg-stone-900 border border-stone-800 rounded-xl p-6 mb-5">
        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-stone-800">
          <div className="w-9 h-9 bg-[#5D4337] rounded-lg flex items-center justify-center text-lg">
            🗄️
          </div>
          <div>
            <div className="font-bold">Lista szafek / mebli</div>
            <div className="text-xs text-stone-500">Dodaj wszystkie elementy projektu (szer × wys × głęb w mm)</div>
          </div>
        </div>
        <div className="flex flex-col gap-3 mb-4">
          {cabinets.map((c, i) => (
            <div key={c.id} className="bg-stone-800 border border-stone-700 rounded-xl p-4 grid grid-cols-2 md:grid-cols-6 gap-3 items-end">
              <div className="flex flex-col gap-1 col-span-2 md:col-span-1">
                <div className="text-[10px] font-bold text-[#C5A059] uppercase tracking-wider">#{i + 1}</div>
                <label className="text-[10px] text-stone-500 uppercase tracking-wider font-mono">Nazwa</label>
                <input
                  type="text"
                  value={c.name}
                  onChange={e => updateCab(c.id, 'name', e.target.value)}
                  className="bg-stone-700 border border-stone-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#C5A059]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-stone-500 uppercase tracking-wider font-mono">Szerokość (mm)</label>
                <input
                  type="number"
                  value={c.w}
                  onChange={e => updateCab(c.id, 'w', e.target.value)}
                  className="bg-stone-700 border border-stone-600 rounded-md px-3 py-2 text-sm font-mono focus:outline-none focus:border-[#C5A059]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-stone-500 uppercase tracking-wider font-mono">Wysokość (mm)</label>
                <input
                  type="number"
                  value={c.h}
                  onChange={e => updateCab(c.id, 'h', e.target.value)}
                  className="bg-stone-700 border border-stone-600 rounded-md px-3 py-2 text-sm font-mono focus:outline-none focus:border-[#C5A059]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-stone-500 uppercase tracking-wider font-mono">Głębokość (mm)</label>
                <input
                  type="number"
                  value={c.d}
                  onChange={e => updateCab(c.id, 'd', e.target.value)}
                  className="bg-stone-700 border border-stone-600 rounded-md px-3 py-2 text-sm font-mono focus:outline-none focus:border-[#C5A059]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-stone-500 uppercase tracking-wider font-mono">Ilość szt.</label>
                <input
                  type="number"
                  value={c.qty}
                  min={1}
                  onChange={e => updateCab(c.id, 'qty', e.target.value)}
                  className="bg-stone-700 border border-stone-600 rounded-md px-3 py-2 text-sm font-mono focus:outline-none focus:border-[#C5A059]"
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => removeCabinet(c.id)}
                  className="w-9 h-9 rounded-md border border-stone-600 text-stone-500 hover:bg-red-900 hover:border-red-900 hover:text-white transition-colors flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={addCabinet}
          className="w-full flex items-center justify-center gap-2 py-3 border border-dashed border-[#5D4337] rounded-lg text-[#C5A059] font-semibold text-sm hover:bg-[#5D4337]/20 hover:border-[#C5A059] transition-colors"
        >
          + Dodaj szafkę
        </button>
      </div>

      <button
        onClick={() => {
          console.log('Calculating...');
          onCalculate();
        }}
        className="w-full py-5 bg-gradient-to-r from-[#5D4337] to-[#C5A059] rounded-xl text-white font-extrabold text-lg tracking-wide hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#2E2626]/30 transition-all"
      >
        🔨 OBLICZ ROZKRÓJ I KOSZTY
      </button>
    </div>
  );
}

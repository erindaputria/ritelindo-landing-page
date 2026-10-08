import React, { useState, useMemo } from 'react';
import { Calculator, MessageSquare, Check, Sparkles, Store, Layers, Truck, ShieldAlert } from 'lucide-react';

export default function LayoutSimulator() {
  const [storeWidth, setStoreWidth] = useState(6);
  const [storeLength, setStoreLength] = useState(10);
  const [storeType, setStoreType] = useState('minimarket');

  const storeTypes = [
    { id: 'minimarket', label: 'Minimarket / Toko Kelontong Modern', factor: 1.0 },
    { id: 'supermarket', label: 'Supermarket / Toko Serba Ada', factor: 1.25 },
    { id: 'apotek', label: 'Apotek / Toko Obat Modern', factor: 0.85 },
    { id: 'petshop', label: 'Petshop / Toko Aksesoris', factor: 0.95 }
  ];

  // Calculations based on dimensions & type
  const area = useMemo(() => storeWidth * storeLength, [storeWidth, storeLength]);

  const estimation = useMemo(() => {
    const selectedType = storeTypes.find(t => t.id === storeType) || storeTypes[0];
    
    // Perimeter wall rack calculation (leaving front door space ~3m)
    const wallPerimeter = (storeWidth * 2 + storeLength * 2) - 3;
    const singleRacks = Math.max(4, Math.floor(wallPerimeter / 0.9));
    
    // Island double racks in center
    const islandsCount = Math.max(1, Math.floor((storeWidth - 2) / 2.2));
    const doubleRacksPerIsland = Math.max(2, Math.floor((storeLength - 3) / 0.9));
    const totalDoubleRacks = islandsCount * doubleRacksPerIsland;
    const totalEndRacks = islandsCount * 2;
    
    // Cost estimation logic (base price direct factory)
    const baseCostSingle = 1250000;
    const baseCostDouble = 1850000;
    const baseCostEnd = 1350000;
    const cashierCost = 4500000;

    const rawTotal = (singleRacks * baseCostSingle) + (totalDoubleRacks * baseCostDouble) + (totalEndRacks * baseCostEnd) + cashierCost;
    const adjustedTotal = Math.round(rawTotal * selectedType.factor);

    const minPrice = Math.floor(adjustedTotal * 0.92 / 100000) * 100000;
    const maxPrice = Math.ceil(adjustedTotal * 1.08 / 100000) * 100000;

    return {
      singleRacks,
      doubleRacks: totalDoubleRacks,
      endRacks: totalEndRacks,
      cashierCounters: 1,
      minPrice,
      maxPrice,
      estimatedDays: area > 100 ? '2 - 3 Hari' : '1 Hari'
    };
  }, [storeWidth, storeLength, storeType]);

  const formatRupiah = (val) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  const whatsappMessage = encodeURIComponent(
    `Halo Ritelindo! Saya sudah coba hitung simulasi toko ukuran ${storeWidth}m x ${storeLength}m (${area} m²) jenis ${storeTypes.find(t=>t.id===storeType)?.label}.\n\nEstimasi kebutuhan:\n- Rak Single: ${estimation.singleRacks} unit\n- Rak Double: ${estimation.doubleRacks} unit\n- Rak End: ${estimation.endRacks} unit\n- Meja Kasir: 1 unit\n\nMohon bantu kirimkan Desain Layout 3D & Rincian Penawaran Harga Resminya. Terima kasih!`
  );

  const whatsappUrl = `https://wa.me/6281234567890?text=${whatsappMessage}`;

  return (
    <section id="simulasi" className="py-20 bg-slate-950 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>Kalkulator Simulasi Toko Interaktif</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Hitung Estimasi Paket & Layout Toko Anda <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Secara Instan</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Geser ukuran ruangan toko Anda untuk melihat kebutuhan unit rak & estimasi paket biaya hemat langsung dari pabrik.
          </p>
        </div>

        {/* Main Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls Form */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
            
            {/* Store Type Selection */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Store className="w-4 h-4 text-amber-400" />
                <span>1. Pilih Kategori Jenis Toko:</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {storeTypes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setStoreType(t.id)}
                    className={`p-3.5 rounded-xl text-left text-xs font-bold transition-all border flex items-center justify-between ${
                      storeType === t.id
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500 shadow-md'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <span>{t.label}</span>
                    {storeType === t.id && <Check className="w-4 h-4 text-amber-400 shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Width Slider */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-slate-300">Lebar Toko:</span>
                <span className="text-lg font-black text-amber-400">{storeWidth} Meter</span>
              </div>
              <input
                type="range"
                min="3"
                max="15"
                step="1"
                value={storeWidth}
                onChange={(e) => setStoreWidth(Number(e.target.value))}
                aria-label="Lebar Toko (Meter)"
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-slate-300 font-medium">
                <span>3m (Minimal)</span>
                <span>8m (Standar)</span>
                <span>15m (Supermarket)</span>
              </div>
            </div>

            {/* Length Slider */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-slate-300">Panjang Toko:</span>
                <span className="text-lg font-black text-amber-400">{storeLength} Meter</span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={storeLength}
                onChange={(e) => setStoreLength(Number(e.target.value))}
                aria-label="Panjang Toko (Meter)"
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-slate-300 font-medium">
                <span>5m</span>
                <span>15m</span>
                <span>30m</span>
              </div>
            </div>

            {/* Area Result Summary Box */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                  📐
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-300">Total Luas Toko</span>
                  <span className="text-base font-extrabold text-white">{area} Meter Persegi (m²)</span>
                </div>
              </div>
              <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-full font-bold">
                Kapasitas Ideal
              </span>
            </div>

          </div>

          {/* Right Live Results Card */}
          <div className="lg:col-span-6 glass-panel-amber p-6 sm:p-8 rounded-3xl border border-amber-500/30 relative flex flex-col justify-between space-y-6 glow-orange">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <h3 className="text-xl font-black text-white">Rekomendasi Hardware & Rak</h3>
              </div>
              <span className="text-xs bg-amber-400 text-slate-950 font-bold px-3 py-1 rounded-full">
                Estimasi Direct Pabrik
              </span>
            </div>

            {/* Rack Breakdown Items */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-white/5 flex flex-col">
                <span className="text-xs text-slate-300">Rak Single (Wall)</span>
                <span className="text-2xl font-black text-amber-400">{estimation.singleRacks} <span className="text-xs font-normal text-slate-300">Unit</span></span>
                <span className="text-[10px] text-slate-300 mt-1">Nempel dinding toko</span>
              </div>
              <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-white/5 flex flex-col">
                <span className="text-xs text-slate-300">Rak Double (Island)</span>
                <span className="text-2xl font-black text-amber-400">{estimation.doubleRacks} <span className="text-xs font-normal text-slate-300">Unit</span></span>
                <span className="text-[10px] text-slate-300 mt-1">Lorong tengah toko</span>
              </div>
              <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-white/5 flex flex-col">
                <span className="text-xs text-slate-300">Rak End (Penutup)</span>
                <span className="text-2xl font-black text-amber-400">{estimation.endRacks} <span className="text-xs font-normal text-slate-300">Unit</span></span>
                <span className="text-[10px] text-slate-300 mt-1">Ujung lorong island</span>
              </div>
              <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-white/5 flex flex-col">
                <span className="text-xs text-slate-300">Meja Kasir Custom</span>
                <span className="text-2xl font-black text-amber-400">{estimation.cashierCounters} <span className="text-xs font-normal text-slate-300">Set</span></span>
                <span className="text-[10px] text-slate-300 mt-1">Lengkap shelving depan</span>
              </div>
            </div>

            {/* Estimated Price Range Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-slate-950 border border-amber-500/40 space-y-2">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">Estimasi Total Investasi Paket Toko:</span>
              <div className="text-2xl sm:text-3xl font-black text-white">
                {formatRupiah(estimation.minPrice)} <span className="text-sm font-normal text-slate-300">s/d</span> {formatRupiah(estimation.maxPrice)}
              </div>
              <div className="flex items-center gap-4 pt-1 text-xs text-emerald-400 font-semibold">
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Free Layout 3D</span>
                <span className="flex items-center gap-1"><Truck className="w-3.5 h-3.5" /> Free Ongkir Jatim-Jateng-DIY-Bali</span>
              </div>
            </div>

            {/* Direct WhatsApp Action Button with dynamic details */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base py-4 px-6 rounded-2xl transition-all shadow-xl shadow-emerald-600/40 flex items-center justify-center gap-3 text-center"
            >
              <MessageSquare className="w-5 h-5 fill-white stroke-emerald-600" />
              <span>Kirim Hasil Ukuran {storeWidth}x{storeLength}m ke WA (Free Desain 3D)</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

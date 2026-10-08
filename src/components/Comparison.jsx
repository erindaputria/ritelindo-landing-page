import React from 'react';
import { ShieldCheck, CheckCircle2, XCircle, Sparkles, Scale } from 'lucide-react';

export default function Comparison() {
  const comparisons = [
    {
      feature: 'Material Utama & Ketebalan Metal',
      ritelindo: 'Cold Rolled Steel (SPCC) 1.2mm Presisi Industri',
      others: 'Plat Besi Tipis Recycled 0.4mm - 0.5mm',
      ritelindoOk: true
    },
    {
      feature: 'Kapasitas Beban Per Shelving',
      ritelindo: 'Heavy Duty 70kg - 100kg (Tahan Barang Berat & Cairan)',
      others: 'Maksimal 20kg - 30kg (Mudah Melengkung)',
      ritelindoOk: true
    },
    {
      feature: 'Teknologi Finishing Karat',
      ritelindo: 'Electrostatic Powder Coating Open-Baked 200°C',
      others: 'Cat Semprot Biasa (Mudah Mengelupas & Berkarat)',
      ritelindoOk: true
    },
    {
      feature: 'Layanan Layout & Desain',
      ritelindo: 'FREE Konsultasi & Layout 3D Arsitek Retail',
      others: 'Tidak Ada / Harus Bayar Jasa Arsitek Tambahan',
      ritelindoOk: true
    },
    {
      feature: 'Fasilitas Ongkir & Perakitan',
      ritelindo: 'FREE Ongkir Jawa-Bali + FREE Perakitan di Toko',
      others: 'Ongkir Mahal & Harus Merakit Sendiri (Bingung)',
      ritelindoOk: true
    },
    {
      feature: 'Jaminan Harga & Sumber',
      ritelindo: 'Direct Factory (Tangan Pertama Tanpa Broker)',
      others: 'Harga Perantara / Reseller (Markup Tinggi)',
      ritelindoOk: true
    }
  ];

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Scale className="w-4 h-4" />
            <span>Smart Buyer Guide B2B</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Perbandingan Kualitas: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Ritelindo vs Rak Impor Tipis</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Investasi rak minimarket adalah untuk jangka panjang 10+ tahun. Jangan biarkan toko Anda memakai rak tipis yang membahayakan barang dagangan!
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="glass-panel rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              
              {/* Header */}
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/80">
                  <th className="p-5 text-sm font-extrabold text-slate-300 w-1/3">Spesifikasi & Fitur Layanan</th>
                  <th className="p-5 text-sm font-black text-amber-400 w-1/3 bg-amber-500/10 border-x border-amber-500/20">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-amber-400" />
                      <span>RAK FABRIKASI RITELINDO</span>
                    </div>
                  </th>
                  <th className="p-5 text-sm font-bold text-slate-300 w-1/3">Rak Generik / Pasaran Impor</th>
                </tr>
              </thead>

              {/* Rows */}
              <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
                {comparisons.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                    <td className="p-5 font-bold text-white flex items-center gap-2">
                      <span>{row.feature}</span>
                    </td>
                    <td className="p-5 font-extrabold text-white bg-amber-500/5 border-x border-amber-500/20">
                      <div className="flex items-start gap-2 text-amber-300">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{row.ritelindo}</span>
                      </div>
                    </td>
                    <td className="p-5 font-medium text-slate-300">
                      <div className="flex items-start gap-2 text-rose-400">
                        <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

      </div>
    </section>
  );
}

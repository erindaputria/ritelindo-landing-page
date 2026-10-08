import React, { useState } from 'react';
import { PackageCheck, Check, MessageSquare, Shield, Layers, ChevronRight, Sparkles, Star } from 'lucide-react';

export default function Catalog({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('paket');

  const packages = [
    {
      id: 'starter',
      name: 'Paket Starter Toko Kecil',
      size: 'Ukuran Ruangan 4x8m s/d 5x10m',
      badge: 'Favorit Toko Kelontong Modern',
      highlight: false,
      image: '/assets/images/rack-single.png',
      price: 'Rp 14.800.000',
      normalPrice: 'Rp 18.500.000',
      items: [
        '8 Unit Rak Single Wall (Tinggi 180cm, 5 Shelving)',
        '3 Unit Rak Double Island (Tinggi 150cm, 4 Shelving)',
        '2 Unit Rak End Penutup Island',
        '1 Set Meja Kasir Standard Powder Coating',
        'FREE Konsultasi & Desain Layout 3D',
        'FREE Perakitan Jatim, Jateng & DIY'
      ]
    },
    {
      id: 'standard',
      name: 'Paket Minimarket Standard',
      size: 'Ukuran Ruangan 6x12m s/d 8x15m',
      badge: '🔥 BEST SELLER GOOGLE ADS',
      highlight: true,
      image: '/assets/images/rack-double.png',
      price: 'Rp 29.500.000',
      normalPrice: 'Rp 36.000.000',
      items: [
        '14 Unit Rak Single Wall (Tinggi 200cm, 5 Shelving)',
        '6 Unit Rak Double Island (Tinggi 150cm, 4 Shelving)',
        '4 Unit Rak End Penutup Island',
        '1 Set Meja Kasir Express + Shelving Display Depan',
        'FREE Konsultasi & Desain Layout 3D Realistis',
        'FREE Ongkir Jawa - Bali',
        'FREE Perakitan di Lokasi Toko Anda'
      ]
    },
    {
      id: 'supermarket',
      name: 'Paket Supermarket Pro',
      size: 'Ukuran Ruangan 10x20m ke Atas',
      badge: 'Proyek Retail Skala Besar',
      highlight: false,
      image: '/assets/images/interior.png',
      price: 'Rp 58.000.000',
      normalPrice: 'Rp 72.000.000',
      items: [
        '24 Unit Rak Single Heavy Duty (Tinggi 240cm, 6 Shelving)',
        '12 Unit Rak Double Heavy Duty (Tinggi 180cm, 5 Shelving)',
        '6 Unit Rak End Penutup Heavy Duty',
        '2 Set Meja Kasir Belt Custom + Header Box Branding',
        'FREE Survey Tim Pabrik ke Lokasi Toko',
        'FREE Desain Layout 3D & Visual Render Arsitek',
        'FREE Perakitan & Prioritas Delivery Armada Pabrik'
      ]
    }
  ];

  const specs = [
    { label: 'Bahan Material Utama', val: 'Cold Rolled Steel (SPCC) Standar Industri Retail' },
    { label: 'Ketebalan Plat Shelving', val: '0.7mm - 0.8mm (Presisi Robot Bending)' },
    { label: 'Ketebalan Tiang Upright', val: '1.2mm - 1.5mm Cold Rolled Tube' },
    { label: 'Finishing Permukaan', val: 'Electrostatic Powder Coating Open-baked 200°C' },
    { label: 'Kapasitas Beban', val: '70 kg s/d 100 kg per hambalan / shelving' },
    { label: 'Pilihan Warna Trim Price Tag', val: 'Merah, Hijau, Biru, Kuning, Oranye, Custom' },
    { label: 'Garansi Struktur', val: '1 Tahun Garansi Presisi Metal Pabrik' }
  ];

  return (
    <section id="paket-rak" className="py-20 bg-slate-900/40 relative overflow-hidden border-b border-slate-800">
      
      {/* Decorative Blur Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <PackageCheck className="w-4 h-4" />
            <span>Pilihan Paket Toko Direct Pabrik</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Paket Rak Minimarket Siap Pasang <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Harga Spesial B2B</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Dapatkan paket perlengkapan toko komplit dengan harga tangan pertama langsung dari pabrik kami.
          </p>

          {/* Tab Selector Buttons */}
          <div className="flex justify-center gap-3 pt-4">
            <button
              onClick={() => setActiveTab('paket')}
              className={`px-6 py-2.5 rounded-xl font-extrabold text-sm transition-all ${
                activeTab === 'paket'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Pilihan Paket Toko Complete
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-6 py-2.5 rounded-xl font-extrabold text-sm transition-all ${
                activeTab === 'specs'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Spesifikasi Teknis & Material Baja
            </button>
          </div>
        </div>

        {/* Tab 1: Paket Toko Cards */}
        {activeTab === 'paket' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg) => {
              const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
                `Halo Ritelindo! Saya mau pesan/konsultasi mengenai ${pkg.name} (${pkg.size}) harga promo ${pkg.price}. Mohon rincian & layout 3D gratisnya.`
              )}`;

              return (
                <div
                  key={pkg.id}
                  className={`glass-panel rounded-3xl p-6 flex flex-col justify-between relative border glass-card-hover ${
                    pkg.highlight
                      ? 'border-amber-500/50 bg-slate-950/90 glow-orange ring-2 ring-amber-500/30'
                      : 'border-slate-800'
                  }`}
                >
                  {/* Highlight Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${
                      pkg.highlight
                        ? 'bg-amber-500 text-slate-950 shadow-md'
                        : 'bg-slate-800 text-amber-400 border border-amber-500/20'
                    }`}>
                      {pkg.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{pkg.size}</span>
                  </div>

                  {/* Title & Image */}
                  <div className="space-y-4 mb-6">
                    <h3 className="text-2xl font-black text-white">{pkg.name}</h3>
                    
                    <div className="relative rounded-2xl overflow-hidden h-44 border border-slate-800 bg-slate-900">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Pricing Box */}
                    <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-baseline justify-between">
                      <div>
                        <span className="text-xs text-slate-400 line-through mr-2">{pkg.normalPrice}</span>
                        <div className="text-2xl font-black text-amber-400">{pkg.price}</div>
                      </div>
                      <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                        Hemat Direct Pabrik
                      </span>
                    </div>
                  </div>

                  {/* Items List */}
                  <div className="space-y-2.5 mb-8 flex-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Rincian Komponen Paket:</span>
                    {pkg.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 px-4 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 transition-all ${
                        pkg.highlight
                          ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30'
                          : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20'
                      }`}
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Pesan / Konsultasi Paket Ini</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Technical Specifications */}
        {activeTab === 'specs' && (
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <Shield className="w-6 h-6 text-amber-400" />
              <h3 className="text-2xl font-black text-white">Standar Kualitas Manufaktur Ritelindo</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specs.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col space-y-1">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">{item.label}</span>
                  <span className="text-sm font-semibold text-slate-200">{item.val}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-amber-400" />
                <div className="text-left">
                  <span className="text-sm font-bold text-white block">Butuh Ukuran Rak Custom Khusus?</span>
                  <span className="text-xs text-slate-300">Tim enginer kami siap memproduksi rak sesuai sketsa denah ruangan Anda.</span>
                </div>
              </div>
              <button
                onClick={onOpenModal}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold px-4 py-2.5 rounded-xl transition-all shrink-0"
              >
                Minta Custom Catalog
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

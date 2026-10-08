import React from 'react';
import { Sparkles, Palette, Store, Lightbulb, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

export default function InteriorServices() {
  const whatsappUrl = "https://wa.me/6281234567890?text=Halo%20Ritelindo!%20Saya%20tertarik%20konsultasi%20Jasa%20Interior%20Toko%20Modern%20(Meja%20Kasir%20Custom%2C%20Lighting%2C%20%26%20Layout%203D).";

  const services = [
    {
      icon: Store,
      title: "Meja Kasir Custom (HPL & Stainless)",
      desc: "Desain meja kasir ergonomis dengan jalur kabel POS tersembunyi, laci kasir otomatis, dan shelving impulse buying di bagian depan."
    },
    {
      icon: Lightbulb,
      title: "Lighting & Header Box Signage",
      desc: "Pencahayaan LED khusus lorong toko & pembuatan header box penanda kategori barang agar memudahkan pembeli dan memberikan kesan mewah."
    },
    {
      icon: Palette,
      title: "Aksen Wall Panel & Backwall Display",
      desc: "Pemasangan kisi-kisi kayu sintetis, wall grid display, dan aksen warna branding pada dinding toko agar suasana belanja lebih hangat & estetik."
    },
    {
      icon: Sparkles,
      title: "Zonal Layouting & Consumer Traffic Flow",
      desc: "Penataan lorong belanja strategis berdasarkan psikologi konsumen untuk memaksimalkan jumlah barang yang dibeli per kunjungan."
    }
  ];

  return (
    <section id="interior" className="py-20 bg-slate-950 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group glow-orange">
              <img
                src="/assets/images/interior.png"
                alt="Jasa Interior Toko Modern Ritelindo"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 glass-panel rounded-2xl border border-amber-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-extrabold shrink-0">
                    ✨
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-white">Toko Mewah Tanpa Biaya Arsitek Mahal</h4>
                    <p className="text-xs text-slate-300">Dapatkan konsep interior retail lengkap dengan pembelian paket rak.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Palette className="w-4 h-4" />
              <span>Jasa Interior Toko & Shopfitting</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Bikin Tampilan Toko Anda Lebih <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">Stylish, Modern & Berkelas</span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Bukan sekadar memasang rak baja, tim profesional Ritelindo siap mendesain dan mengeksekusi interior toko retail Anda agar tampil profesional sekelas minimarket jejaring nasional.
            </p>

            {/* Service Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {services.map((item, i) => {
                const IconComp = item.icon;
                return (
                  <div key={i} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 hover:border-amber-500/30 transition-all">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-extrabold text-white">{item.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Konsultasi Jasa Interior Toko via WA</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

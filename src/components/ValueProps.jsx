import React from 'react';
import { Box, Truck, Wrench, Factory, ShoppingBag, LayoutTemplate, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function ValueProps() {
  const whatsappUrl = "https://wa.me/6281234567890?text=Halo%20Ritelindo!%20Saya%20ingin%20tanya%20layanan%20Free%20Layout%203D%20dan%20Promo%20Free%20Ongkir.";

  const propsList = [
    {
      icon: LayoutTemplate,
      title: "Free Konsultasi & Layout 3D",
      desc: "Layanan utama gratis sebelum Anda membeli! Tim arsitek retail kami akan menggambarkan tata letak toko 3D presisi agar ruang toko terpakai maksimal.",
      tag: "Layanan Gratis Utama",
      highlight: true,
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Truck,
      title: "Free Ongkir Jawa - Bali",
      desc: "Pengiriman armada langsung dari pabrik kami tanpa biaya pengiriman tambahan untuk seluruh wilayah Pulau Jawa & Bali.",
      tag: "Hemat Biaya Kirim",
      highlight: false,
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Wrench,
      title: "Free Perakitan Jatim, Jateng & DIY",
      desc: "Tim teknisi berpengalaman siap memasang rak minimarket langsung di toko Anda hingga rapi & siap pakai tanpa dipungut biaya perakitan.",
      tag: "Bebas Repot",
      highlight: false,
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Box,
      title: "Bisa Custom Sesuai Ruangan",
      desc: "Tersedia pilihan tinggi rak (120cm - 240cm), kedalaman shelving, serta warna powder coating custom sesuai warna branding toko Anda.",
      tag: "100% Flexibel",
      highlight: false,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Factory,
      title: "Produk Langsung dari Pabrik",
      desc: "Tangan pertama tanpa perantara / distributor! Dapatkan jaminan harga super kompetitif & ketersediaan stok komponen yang melimpah.",
      tag: "Harga Tangan Pertama",
      highlight: true,
      color: "from-orange-500 to-amber-600"
    },
    {
      icon: ShoppingBag,
      title: "Satuan, Paket Toko & Proyek Retail",
      desc: "Melayani pembelian 1 unit rak tambahan, 1 paket komplit setup toko minimarket, hingga pengadaan proyek rantai retail skala besar.",
      tag: "Skala Pembelian",
      highlight: false,
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Sparkles,
      title: "Jasa Interior Toko Modern",
      desc: "Bukan sekadar rak, kami melayani desain & pembuatan meja kasir custom, wall display, backwall kayu, lighting, dan branding fasad toko modern.",
      tag: "Toko Stylish & Modern",
      highlight: true,
      color: "from-amber-400 to-emerald-400"
    }
  ];

  return (
    <section id="keunggulan" className="py-20 bg-slate-900/60 relative overflow-hidden border-t border-b border-slate-800/80">
      
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            7 Keunggulan Utama Ritelindo
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Mengapa Ratusan Pemilik Toko Memilih <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Pabrik Ritelindo?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Dapatkan pengalaman setup toko tanpa stres dengan fasilitas layanan terlengkap dari pabrik langsung.
          </p>
        </div>

        {/* 7 Value Props Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propsList.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className={`glass-panel p-6 rounded-3xl relative flex flex-col justify-between glass-card-hover group border ${
                  item.highlight ? 'border-amber-500/30 bg-slate-900/90' : 'border-slate-800'
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-500/10 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6 text-slate-950" />
                  </div>
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border ${
                    item.highlight 
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' 
                      : 'bg-slate-800 text-slate-300 border-slate-700'
                  }`}>
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3 mb-6">
                  <h3 className="text-xl font-extrabold text-white group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom CTA Indicator */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-amber-400 transition-colors">
                  <span>Termasuk dalam Paket</span>
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-amber-600/20 via-orange-600/20 to-slate-900 border border-amber-500/30 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 font-extrabold text-2xl shadow-lg">
              🎁
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-bold text-amber-400 uppercase tracking-wide">Siap Buka Toko Bulan Ini?</span>
              <h4 className="text-xl sm:text-2xl font-extrabold text-white">Dapatkan Layout 3D Toko Anda dalam 1x24 Jam</h4>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full lg:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base px-7 py-3.5 rounded-2xl transition-all shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2 shrink-0"
          >
            <span>Kirim Denah / Ukuran Toko via WA</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

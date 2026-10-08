import React from 'react';
import { MessageSquare, LayoutTemplate, Truck, Wrench, ArrowRight } from 'lucide-react';

export default function Steps() {
  const steps = [
    {
      num: '01',
      title: 'Konsultasi & Ukur Ruangan',
      desc: 'Hubungi WhatsApp sales kami & kirimkan sketsa ukuran toko Anda. Tim kami siap memandu 24 jam.',
      icon: MessageSquare,
      color: 'from-amber-500 to-orange-500'
    },
    {
      num: '02',
      title: 'Desain Layout 3D Visual (Free)',
      desc: 'Tim arsitek kami akan menggambarkan denah 3D tata letak rak presisi & membuat penawaran harga resmi.',
      icon: LayoutTemplate,
      color: 'from-orange-500 to-amber-600'
    },
    {
      num: '03',
      title: 'Produksi & Delivery Armada Pabrik',
      desc: 'Rak baja diproduksi direct pabrik & dikirim via armada internal kami (Free Ongkir Jawa - Bali).',
      icon: Truck,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      num: '04',
      title: 'Perakitan & Toko Siap Buka',
      desc: 'Tim teknisi langsung memasang rak di lokasi toko Anda hingga rapi & siap diisi barang dagangan.',
      icon: Wrench,
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  return (
    <section className="py-20 bg-slate-900/40 relative overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            Proses Kerja Praktis
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            4 Langkah Mudah Buka Toko Bersama <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Ritelindo</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Tanpa repot, tanpa pusing. Biarkan tim profesional kami yang menyelesaikan seluruh kebutuhan setup minimarket Anda.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => {
            const IconComp = st.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-3xl border border-slate-800 relative flex flex-col justify-between glass-card-hover group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-slate-700 group-hover:text-amber-400 transition-colors">
                      {st.num}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${st.color} flex items-center justify-center text-slate-950 font-bold shadow-lg`}>
                      <IconComp className="w-6 h-6 text-slate-950" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center gap-1 text-xs font-bold text-amber-400">
                  <span>Langkah {st.num}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

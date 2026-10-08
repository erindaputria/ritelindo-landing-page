import React from 'react';
import { Star, Quote, Building2, UserCheck, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'H. Bambang Prasetyo',
      store: 'Pemilik Barokah Mart (6x14m)',
      location: 'Surabaya, Jawa Timur',
      text: 'Sangat puas dengan respon Ritelindo! Layanan Free Desain 3D-nya sangat membantu saya membayangkan tata letak sebelum beli. Setelah dikirim, armada gratis ongkir & tim perakitannya sangat cekatan. Recommended!',
      rating: 5
    },
    {
      name: 'Ibu Ratna Pertiwi',
      store: 'Toko Kelontong Modern Rejeki',
      location: 'Semarang, Jawa Tengah',
      text: 'Bahan raknya tebal sekali, beda jauh sama rak yang dijual di pasaran online biasa. Hambalannya kuat menampung dus minyak goreng & minuman botol tanpa melengkung. Mantap harga pabrik!',
      rating: 5
    },
    {
      name: 'Bpk. Hendra Gunawan',
      store: 'Supermarket Sentosa Retail',
      location: 'Sidoarjo, Jawa Timur',
      text: 'Pesanan paket 24 unit rak heavy duty dan 2 meja kasir custom selesai tepat waktu. Warna powder coating merahnya mengkilap & rapi. Terima kasih Ritelindo atas perakitannya yang rapi!',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="glass-panel p-6 rounded-3xl text-center border border-slate-800">
            <div className="text-3xl sm:text-4xl font-black text-amber-400">10.000+</div>
            <div className="text-xs text-slate-300 font-medium mt-1">Toko Terpasang</div>
          </div>
          <div className="glass-panel p-6 rounded-3xl text-center border border-slate-800">
            <div className="text-3xl sm:text-4xl font-black text-amber-400">100%</div>
            <div className="text-xs text-slate-300 font-medium mt-1">Direct Pabrik SPCC</div>
          </div>
          <div className="glass-panel p-6 rounded-3xl text-center border border-slate-800">
            <div className="text-3xl sm:text-4xl font-black text-amber-400">FREE</div>
            <div className="text-xs text-slate-300 font-medium mt-1">Ongkir Jawa - Bali</div>
          </div>
          <div className="glass-panel p-6 rounded-3xl text-center border border-slate-800">
            <div className="text-3xl sm:text-4xl font-black text-amber-400">4.9 / 5</div>
            <div className="text-xs text-slate-300 font-medium mt-1">Kepuasan Pelanggan</div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <UserCheck className="w-4 h-4" />
            <span>Kisah Sukses Pemilik Toko</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Pengalaman Mereka Bersama <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Ritelindo</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Dengar langsung pendapat dari pengusaha minimarket yang telah mempercayakan pengadaan rak & interior toko kepada kami.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="glass-panel p-6 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6 glass-card-hover"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-amber-500/20" />
                </div>
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center font-bold text-slate-950 text-sm">
                  {rev.name.charAt(0)}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-extrabold text-white">{rev.name}</span>
                  <span className="text-xs text-amber-400 font-medium">{rev.store}</span>
                  <span className="text-[11px] text-slate-300">{rev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

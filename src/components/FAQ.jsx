import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Apakah layanan desain layout 3D toko benar-benar gratis?',
      a: 'Ya, 100% GRATIS tanpa dipungut biaya apapun dan tanpa kewajiban langsung membeli! Cukup kirimkan sketsa ukuran ruangan toko Anda via WhatsApp, tim arsitek retail kami akan menggambar tata letak rak 3D presisi dalam 1x24 jam.'
    },
    {
      q: 'Wilayah mana saja yang mendapatkan promo Free Ongkir & Free Perakitan?',
      a: 'Promo FREE ONGKIR berlaku untuk seluruh wilayah Jawa & Bali. Sedangkan promo FREE PERAKITAN dilayani langsung oleh tim teknisi kami di wilayah Jawa Timur, Jawa Tengah, dan DIY (Yogyakarta).'
    },
    {
      q: 'Apakah bisa membeli unit rak minimarket secara satuan?',
      a: 'Tentu saja! Kami melayani pembelian eceran / satuan (misal hanya butuh 1 unit Rak Single atau 1 Meja Kasir), pembelian paket lengkap minimarket, hingga pengadaan proyek rantai toko retail skala besar.'
    },
    {
      q: 'Bagaimana jika ukuran ruangan toko saya tidak standar / banyak tiang?',
      a: 'Tenang, kami adalah pabrik manufaktur langsung! Kami dapat memproduksi rak custom sesuai dimensi ruangan, termasuk memotong panjang hambalan atau menyesuaikan tinggi tiang rak agar pas dengan toko Anda.'
    },
    {
      q: 'Berapa kekuatan beban maksimal tiap hambalan (shelving) rak Ritelindo?',
      a: 'Setiap hambalan rak Ritelindo dibuat dari Cold Rolled Steel SPCC berkualitas tinggi yang mampu menopang beban 70 kg hingga 100 kg per hambalan secara merata. Sangat kokoh untuk stok beras, minyak goreng, maupun minuman kemasan.'
    },
    {
      q: 'Berapa lama estimasi pengiriman dan pemasangan?',
      a: 'Untuk unit ready stock, pengiriman armada pabrik membutuhkan waktu 1-3 hari kerja tergantung kota tujuan. Perakitan di lokasi toko biasanya selesai dalam 1 hari untuk minimarket ukuran standar.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-900/50 relative overflow-hidden border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Pertanyaan Sering Diajukan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            FAQ Layanan & Produk <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Ritelindo</span>
          </h2>
          <p className="text-base text-slate-300">
            Temukan jawaban cepat mengenai proses pemesanan, pengiriman, dan spesifikasi rak minimarket.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-base text-white hover:text-amber-400 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs text-amber-400 font-mono bg-amber-500/10 px-2 py-1 rounded">
                      0{idx + 1}
                    </span>
                    {item.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-3">
          <p className="text-sm text-slate-300">Punya pertanyaan lain yang belum terjawab?</p>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Ritelindo!%20Saya%20punya%20pertanyaan%20mengenai..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Tanyakan Langsung ke Sales via WA</span>
          </a>
        </div>

      </div>
    </section>
  );
}

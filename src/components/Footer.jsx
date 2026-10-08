import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenModal }) {
  const whatsappUrl = "https://wa.me/6281234567890?text=Halo%20Ritelindo!%20Saya%20tertarik%20konsultasi%20Free%20Desain%20Layout%203D%20%26%20Paket%20Rak%20Minimarket.";

  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-12 text-slate-400 text-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-left">
          
          {/* Brand Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center font-extrabold text-slate-950 text-xl shadow-lg">
                R
              </div>
              <span className="text-2xl font-black text-white tracking-tight">RITELINDO</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Pabrik manufaktur rak minimarket, rak toko heavy duty, meja kasir, dan penyedia jasa interior toko retail modern terpercaya di Indonesia. Dapatkan produk berkualitas tinggi dengan harga direct pabrik tanpa perantara.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-bold text-amber-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Garansi Presisi Cold Rolled Steel SPCC 100%</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Navigasi Utama</h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#keunggulan" className="hover:text-amber-400 transition-colors">Keunggulan Pabrik</a></li>
              <li><a href="#simulasi" className="hover:text-amber-400 transition-colors">Simulasi Toko</a></li>
              <li><a href="#paket-rak" className="hover:text-amber-400 transition-colors">Paket Rak Minimarket</a></li>
              <li><a href="#interior" className="hover:text-amber-400 transition-colors">Jasa Interior Toko</a></li>
              <li><a href="#portofolio" className="hover:text-amber-400 transition-colors">Galeri Proyek</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">FAQ & Tanya Jawab</a></li>
            </ul>
          </div>

          {/* Value Props Summary */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Layanan Unggulan</h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-1.5"><span className="text-amber-400 font-bold">✓</span> Free Konsultasi & Layout 3D</li>
              <li className="flex items-center gap-1.5"><span className="text-amber-400 font-bold">✓</span> Free Ongkir Jawa - Bali</li>
              <li className="flex items-center gap-1.5"><span className="text-amber-400 font-bold">✓</span> Free Perakitan Jatim, Jateng & DIY</li>
              <li className="flex items-center gap-1.5"><span className="text-amber-400 font-bold">✓</span> Bisa Custom Ukuran & Warna</li>
              <li className="flex items-center gap-1.5"><span className="text-amber-400 font-bold">✓</span> Melayani Satuan & Paket Toko</li>
              <li className="flex items-center gap-1.5"><span className="text-amber-400 font-bold">✓</span> Jasa Interior Toko Modern</li>
            </ul>
          </div>

          {/* Factory Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Kontak & Workshop Pabrik</h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Kawasan Industri Heavy Duty Retail No. 88, Surabaya, Jawa Timur</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Hotline WA: 0812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Email: sales@ritelindo.co.id</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Senin - Sabtu: 08.00 - 17.00 WIB</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenModal}
                className="w-full bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-700 font-bold text-xs py-2.5 px-4 rounded-xl transition-all text-center"
              >
                Minta Catalog PDF & Pricelist
              </button>
            </div>
          </div>

        </div>

        {/* B2B Keywords Cloud Footer */}
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-[11px] text-slate-300 leading-relaxed text-left space-y-1">
          <span className="font-bold text-slate-300 block mb-1">Top Targeted B2B Google Ads Keywords:</span>
          <p>
            Pabrik Rak Minimarket Surabaya • Paket Setup Toko Retail • Jasa Desain Interior Toko Kelontong • Rak Toko Direct Pabrik • Rak Single Minimarket • Rak Double Island Heavy Duty • Free Ongkir Rak Minimarket Jawa Bali • Free Perakitan Rak Jatim Jateng DIY • Pricelist Rak Toko Murah • Meja Kasir Minimarket Custom
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© 2026 Ritelindo Indonesia. All Rights Reserved. Pabrik Rak Minimarket & Retail Interior.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 font-bold hover:underline">
              Konsultasi WA
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

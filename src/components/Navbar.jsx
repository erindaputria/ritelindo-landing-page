import React, { useState, useEffect } from 'react';
import { MessageSquare, PhoneCall, Menu, X, ShieldCheck, Truck, Sparkles, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/6281234567890?text=Halo%20Ritelindo!%20Saya%20tertarik%20dengan%20Promo%20Free%20Desain%20Layout%203D%20%26%20Paket%20Rak%20Minimarket.%20Bisa%20bantu%20konsultasi%3F";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar Announcement */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white text-xs md:text-sm font-semibold py-2 px-4 text-center shadow-inner flex items-center justify-center gap-2 flex-wrap">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider animate-pulse">
          🔥 Promo Google Ads
        </span>
        <span>Free Desain Layout 3D + Free Ongkir Jawa-Bali + Free Perakitan!</span>
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-amber-200 transition-colors inline-flex items-center gap-1 font-bold ml-1"
        >
          Klaim Sekarang <ChevronRight className="w-3.5 h-3.5 inline" />
        </a>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3' : 'bg-slate-950/50 backdrop-blur-sm py-4 border-b border-white/5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center font-extrabold text-slate-950 text-xl shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
              R
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black tracking-tight text-white flex items-center gap-1.5">
                RITELINDO <span className="text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-md uppercase tracking-wider hidden sm:inline-block">Pabrik B2B</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide">Solusi Rak Minimarket & Retail Interior</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#keunggulan" className="hover:text-amber-400 transition-colors">Keunggulan</a>
            <a href="#simulasi" className="hover:text-amber-400 transition-colors">Simulasi Toko</a>
            <a href="#paket-rak" className="hover:text-amber-400 transition-colors">Paket Rak</a>
            <a href="#interior" className="hover:text-amber-400 transition-colors">Interior Toko</a>
            <a href="#portofolio" className="hover:text-amber-400 transition-colors">Portofolio</a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a>
          </div>

          {/* Right CTA Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenModal}
              className="text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 transition-all hover:border-slate-500 flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>Minta Pricelist</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/50 flex items-center gap-2.5 overflow-hidden"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000"></div>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              <MessageSquare className="w-4 h-4 fill-white stroke-emerald-600" />
              <span>Konsultasi WA Gratis</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 shadow-md"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>WA</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-3 animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-3 text-sm font-medium text-slate-200">
              <a 
                href="#keunggulan" 
                onClick={() => setMobileMenuOpen(false)} 
                className="p-2 hover:bg-slate-900 rounded-lg hover:text-amber-400"
              >
                Keunggulan Utama
              </a>
              <a 
                href="#simulasi" 
                onClick={() => setMobileMenuOpen(false)} 
                className="p-2 hover:bg-slate-900 rounded-lg hover:text-amber-400"
              >
                Simulasi Ruangan Toko
              </a>
              <a 
                href="#paket-rak" 
                onClick={() => setMobileMenuOpen(false)} 
                className="p-2 hover:bg-slate-900 rounded-lg hover:text-amber-400"
              >
                Paket Rak Direct Pabrik
              </a>
              <a 
                href="#interior" 
                onClick={() => setMobileMenuOpen(false)} 
                className="p-2 hover:bg-slate-900 rounded-lg hover:text-amber-400"
              >
                Jasa Interior Toko
              </a>
              <a 
                href="#portofolio" 
                onClick={() => setMobileMenuOpen(false)} 
                className="p-2 hover:bg-slate-900 rounded-lg hover:text-amber-400"
              >
                Galeri Proyek
              </a>
              <a 
                href="#faq" 
                onClick={() => setMobileMenuOpen(false)} 
                className="p-2 hover:bg-slate-900 rounded-lg hover:text-amber-400"
              >
                FAQ
              </a>
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenModal(); }}
                className="w-full text-center py-2.5 text-xs font-bold rounded-xl bg-slate-900 text-slate-200 border border-slate-700"
              >
                Minta Katalog & Pricelist PDF
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 text-sm font-bold rounded-xl bg-emerald-600 text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Konsultasi WA Gratis (Fast Response)</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

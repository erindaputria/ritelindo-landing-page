import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, Truck, Wrench, Box, Sparkles, CheckCircle2, Star } from 'lucide-react';

export default function Hero({ onOpenModal }) {
  const whatsappUrl = "https://wa.me/6281234567890?text=Halo%20Ritelindo!%20Saya%20tertarik%20konsultasi%20Free%20Layout%203D%20%26%20Pricelist%20Rak%20Minimarket%20Direct%20Pabrik.";

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950 bg-grid-pattern">
      {/* Background Decorative Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Direct Factory Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>PABRIK PRODUSEN RAK & INTERIOR TOKO TERPERCAYA</span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Buka Toko & Minimarket Modern Lebih Mudah dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">Harga Direct Pabrik!</span>
            </h1>

            {/* Subheadline Description */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Solusi paket komplit rak minimarket heavy duty, rak supermarket, dan jasa interior toko retail. Tanpa perantara, harga lebih hemat & mutu standar minimarket nasional.
            </p>

            {/* Key Value Proposition Bullet Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-2 pb-2">
              <div className="flex items-center gap-2.5 bg-slate-900/80 border border-slate-800 p-2.5 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-100">FREE Konsultasi & Layout 3D</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/80 border border-slate-800 p-2.5 rounded-xl">
                <Truck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-100">FREE Ongkir Jawa - Bali</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/80 border border-slate-800 p-2.5 rounded-xl">
                <Wrench className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-100">FREE Perakitan Jatim, Jateng & DIY</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/80 border border-slate-800 p-2.5 rounded-xl">
                <Box className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-100">Bisa Custom Ukuran & Ruangan</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base md:text-lg px-8 py-4 rounded-2xl transition-all shadow-xl shadow-emerald-600/30 hover:shadow-emerald-500/50 flex items-center justify-center gap-3"
              >
                <div className="absolute -top-1.5 -right-1.5 bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow">
                  Layanan 24/7
                </div>
                <MessageSquare className="w-6 h-6 fill-white stroke-emerald-600 group-hover:scale-110 transition-transform" />
                <span>Konsultasi WA Gratis</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#simulasi"
                className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-amber-500/50 font-bold text-base px-7 py-4 rounded-2xl transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>Hitung Simulasi Paket Toko</span>
              </a>
            </div>

            {/* Trust Proof Badges Below Buttons */}
            <div className="flex items-center gap-6 pt-4 text-xs text-slate-400 border-t border-slate-800/80 w-full">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white text-sm">4.9 / 5</span>
              </div>
              <div className="h-4 w-px bg-slate-800"></div>
              <div>
                <span className="font-bold text-white">10.000+</span> Toko Terpasang di Indonesia
              </div>
            </div>

          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Visual Image Container */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-900 group glow-orange">
              
              {/* Image Badge Header */}
              <div className="absolute top-4 left-4 z-20 bg-slate-950/80 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-xl flex items-center gap-2 text-xs font-bold text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Visual Desain Layout 3D Realistis</span>
              </div>

              <img
                src="/assets/images/hero.png"
                alt="Visual Desain 3D Layout Minimarket Ritelindo"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay Gradient Card Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                <div className="glass-panel p-4 rounded-2xl flex items-center justify-between border border-amber-500/20">
                  <div className="flex flex-col">
                    <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">Garansi Pabrik</span>
                    <span className="text-sm font-extrabold text-white">Bahan Cold Rolled Steel SPCC</span>
                    <span className="text-[11px] text-slate-300">Daya Beban 70kg - 100kg / Shelving</span>
                  </div>
                  <button
                    onClick={onOpenModal}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold px-3.5 py-2 rounded-xl transition-all shadow-md shrink-0"
                  >
                    Minta Spesifikasi
                  </button>
                </div>
              </div>

            </div>

            

          </div>

        </div>
      </div>
    </section>
  );
}

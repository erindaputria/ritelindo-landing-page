import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, CheckCheck } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = "https://wa.me/6281234567890?text=Halo%20Ritelindo!%20Saya%20tertarik%20konsultasi%20Free%20Desain%20Layout%203D%20%26%20Pricelist%20Rak%20Minimarket%20Direct%20Pabrik.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      
      {/* Floating Chat Box Preview */}
      {isOpen && (
        <div className="w-80 sm:w-96 glass-panel rounded-3xl overflow-hidden border border-emerald-500/40 shadow-2xl animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white text-emerald-700 font-extrabold flex items-center justify-center text-lg">
                  R
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-700 rounded-full"></span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-extrabold">CS Sales Ritelindo</span>
                <span className="text-[11px] text-emerald-100">Online | Fast Response 24/7</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-emerald-100 hover:text-white p-1 rounded-lg"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-950/95 space-y-3 text-left">
            <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-2xl text-xs text-slate-200 space-y-1.5 shadow-sm">
              <div className="flex items-center justify-between text-[10px] text-amber-400 font-bold">
                <span>Tim Desain & Sales Ritelindo</span>
                <span>Baru saja</span>
              </div>
              <p>
                Halo Pak/Bu! 👋 Lagi cari paket rak minimarket atau butuh bantuan **Desain Layout 3D Toko Gratis**?
              </p>
              <div className="pt-1 flex items-center gap-1 text-[10px] text-slate-300">
                <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Terhubung dengan Sales Direct Pabrik</span>
              </div>
            </div>
          </div>

          {/* Chat Footer Button */}
          <div className="p-3 bg-slate-900 border-t border-slate-800">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
            >
              <Send className="w-4 h-4 fill-white" />
              <span>Mulai Chat WA Sekarang</span>
            </a>
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="relative group">
        
        {/* Unread Message Tooltip Pill */}
        {showTooltip && !isOpen && (
          <div 
            onClick={() => setIsOpen(true)}
            className="absolute right-16 top-2 cursor-pointer bg-slate-900 border border-emerald-500/40 text-slate-100 text-xs font-bold px-3.5 py-2 rounded-2xl shadow-xl whitespace-nowrap flex items-center gap-2 animate-bounce"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Konsultasi WA & Layout 3D Gratis!</span>
          </div>
        )}

        {/* Pulse Ring */}
        <div className="absolute inset-0 rounded-full bg-emerald-500 animate-pulse-ring pointer-events-none"></div>

        {/* Main WA Circle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/50 transition-all transform hover:scale-110 border-2 border-emerald-400"
          aria-label="WhatsApp Widget"
        >
          <MessageSquare className="w-7 h-7 fill-white stroke-emerald-600" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 text-slate-950 text-[10px] font-black rounded-full flex items-center justify-center">
            1
          </span>
        </button>

      </div>

    </div>
  );
}

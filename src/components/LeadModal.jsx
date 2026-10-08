import React, { useState } from 'react';
import { X, Send, FileText, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function LeadModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    storeSize: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Halo Ritelindo! Saya ingin meminta Katalog & Pricelist Resmi Direct Pabrik.\n\nData Saya:\n- Nama: ${formData.name}\n- No WA: ${formData.phone}\n- Lokasi Toko: ${formData.city}\n- Ukuran Toko: ${formData.storeSize || 'Belum pasti'}\n- Catatan: ${formData.notes || '-'}\n\nMohon dibantu kirimkan pricelist & konsultasi layout 3D gratisnya. Terima kasih!`;
    const url = `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 shadow-2xl bg-slate-900 text-left space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-800/80 border border-slate-700"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Katalog & Pricelist PDF Direct Pabrik</span>
          </div>
          <h3 className="text-2xl font-black text-white">Dapatkan Penawaran Harga Spesial B2B</h3>
          <p className="text-xs text-slate-300">
            Isi formulir singkat ini untuk menerima berkas pricelist lengkap & klaim "Free Desain Layout 3D".
          </p>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300">Nama Lengkap / Nama Toko *</label>
            <input
              type="text"
              required
              placeholder="Contoh: Erinda / Barokah Mart"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Nomor WhatsApp *</label>
              <input
                type="tel"
                required
                placeholder="081234567xxx"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Kota / Lokasi Toko *</label>
              <input
                type="text"
                required
                placeholder="Contoh: Surabaya"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300">Estimasi Ukuran Toko (Panjang x Lebar)</label>
            <input
              type="text"
              placeholder="Contoh: 6x12 meter (Optional)"
              value={formData.storeSize}
              onChange={(e) => setFormData({ ...formData, storeSize: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300">Catatan / Kebutuhan Khusus</label>
            <textarea
              rows="2"
              placeholder="Misal: Mau konsultasi sekalian meja kasir & interior..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm py-4 px-6 rounded-2xl transition-all shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2 mt-2"
          >
            <Send className="w-4 h-4 fill-white" />
            <span>Kirim via WA & Dapatkan Pricelist PDF</span>
          </button>
        </form>

        <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 border-t border-slate-800 pt-3">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Data Anda 100% aman & langsung terhubung ke Tim Pabrik Ritelindo</span>
        </div>

      </div>
    </div>
  );
}

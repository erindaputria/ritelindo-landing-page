import React, { useState } from 'react';
import { Images, MapPin, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Minimarket Barokah Mart',
      location: 'Surabaya, Jawa Timur',
      category: 'minimarket',
      size: '6x12 Meter',
      units: '18 Unit Rak',
      image: '/assets/images/hero.png',
      badge: 'Selesai 2 Hari'
    },
    {
      id: 2,
      title: 'Toko Kelontong Modern Rejeki',
      location: 'Semarang, Jawa Tengah',
      category: 'minimarket',
      size: '5x10 Meter',
      units: '12 Unit Rak',
      image: '/assets/images/rack-double.png',
      badge: 'Free Layout 3D'
    },
    {
      id: 3,
      title: 'Supermarket Retail Sentosa',
      location: 'Sidoarjo, Jawa Timur',
      category: 'supermarket',
      size: '12x25 Meter',
      units: '42 Unit Rak Heavy Duty',
      image: '/assets/images/interior.png',
      badge: 'Proyek Retail Besar'
    },
    {
      id: 4,
      title: 'Apotek & Medical Store Sehat',
      location: 'Yogyakarta (DIY)',
      category: 'apotek',
      size: '4x9 Meter',
      units: '10 Unit Rak Custom',
      image: '/assets/images/rack-single.png',
      badge: 'Custom Shelving'
    },
    {
      id: 5,
      title: 'Pabrik & Warehouse Assembly Center',
      location: 'Kawasan Industri Gresik',
      category: 'factory',
      size: 'Stok Melimpah',
      units: 'Pabrik Direct',
      image: '/assets/images/factory.png',
      badge: 'Produksi Direct Pabrik'
    },
    {
      id: 6,
      title: 'Pusat Oleh-oleh Nusantara',
      location: 'Denpasar, Bali',
      category: 'supermarket',
      size: '8x16 Meter',
      units: '26 Unit Rak + Meja Kasir',
      image: '/assets/images/hero.png',
      badge: 'Free Ongkir Bali'
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portofolio" className="py-20 bg-slate-900/60 relative overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Images className="w-4 h-4" />
            <span>Portofolio Hasil Pengerjaan Real</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Lebih dari 10.000+ Toko Telah <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Menggunakan Rak Ritelindo</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Berikut beberapa dokumentasi proyek pemasangan rak minimarket & interior toko di Jawa & Bali.
          </p>

          {/* Filter Category Buttons */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'Semua Proyek' },
              { id: 'minimarket', label: 'Minimarket & Kelontong' },
              { id: 'supermarket', label: 'Supermarket Retail' },
              { id: 'apotek', label: 'Apotek & Toko Khusus' },
              { id: 'factory', label: 'Fasilitas Pabrik' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === cat.id
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="glass-panel rounded-3xl overflow-hidden border border-slate-800 glass-card-hover group flex flex-col justify-between"
            >
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-amber-400 border border-amber-500/30">
                  {proj.badge}
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-black text-white group-hover:text-amber-400 transition-colors">
                    {proj.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{proj.location}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-medium text-slate-300">
                  <span>Ukuran: <strong className="text-white">{proj.size}</strong></span>
                  <span>Kapasitas: <strong className="text-amber-400">{proj.units}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Ritelindo!%20Saya%20mau%20lihat%20lebih%20banyak%20foto%20portofolio%20pemasangan%20rak%20di%20kota%20saya."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 underline"
          >
            <span>Minta Foto Portofolio Pengerjaan di Kota Anda via WA</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

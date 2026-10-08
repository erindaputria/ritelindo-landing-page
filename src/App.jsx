import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import LayoutSimulator from './components/LayoutSimulator';
import Catalog from './components/Catalog';
import InteriorServices from './components/InteriorServices';
import Gallery from './components/Gallery';
import Comparison from './components/Comparison';
import Steps from './components/Steps';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import WhatsAppWidget from './components/WhatsAppWidget';
import LeadModal from './components/LeadModal';
import Footer from './components/Footer';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Header & Navigation */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Landing Sections */}
      <main>
        {/* Above the Fold Hero */}
        <Hero onOpenModal={handleOpenModal} />

        {/* 7 Core Value Propositions */}
        <ValueProps />

        {/* Interactive Store Layout & Cost Simulator */}
        <LayoutSimulator />

        {/* Product Packages & Technical Specs */}
        <Catalog onOpenModal={handleOpenModal} />

        {/* Custom Interior & Shopfitting Services */}
        <InteriorServices />

        {/* Real Project Gallery Showcase */}
        <Gallery />

        {/* Quality Comparison (Ritelindo vs Generic) */}
        <Comparison />

        {/* 4 Simple Process Steps */}
        <Steps />

        {/* Social Proof & Testimonials */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Floating Sticky WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Lead Capture Modal */}
      <LeadModal isOpen={isModalOpen} onClose={handleCloseModal} />

    </div>
  );
}

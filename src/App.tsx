import React, { useState } from 'react';
import { 
  Compass, 
  ArrowRight,
  Plus,
  Video,
  Layout,
  Users,
  Target
} from 'lucide-react';
import VideoPlayer from './components/VideoPlayer';
import TeamSection from './components/TeamSection';
import DesignCycle from './components/DesignCycle';
import DigitalMockups from './components/DigitalMockups';
import Logo from './components/Logo';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<'pitch' | 'video' | 'mockups' | 'team'>('pitch');

  const navItems = [
    { id: 'pitch', label: '01. Concept', sectionId: 'pitch-section' },
    { id: 'video', label: '02. Playbook', sectionId: 'video-section' },
    { id: 'mockups', label: '03. Mockups', sectionId: 'mockups-section' },
    { id: 'team', label: '04. Collaborators', sectionId: 'team-section' }
  ] as const;

  const scrollToSection = (id: 'pitch' | 'video' | 'mockups' | 'team', sectionId: string) => {
    setActiveCategory(id);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="app-root" className="min-h-screen bg-[#FAF9F6] text-[#111827] font-sans relative flex flex-col justify-between selection:bg-brand-pink selection:text-white">
      
      {/* Structural Graphic Header Block */}
      <div className="border-b-3 border-[#111827] bg-white relative overflow-hidden">
        {/* Pattern Underlay */}
        <div className="absolute inset-0 flat-grid-pattern opacity-100 pointer-events-none" />
        
        {/* Top Metatag Rail */}
        <div className="border-b-3 border-[#111827] px-6 py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs font-mono font-bold tracking-wider uppercase bg-[#1F2035] text-white relative z-10">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-pink animate-pulse" />
            <span className="font-extrabold text-brand-pink">ARTI PROJECT</span>
          </div>
        </div>

        {/* Large Typographic Hero Block */}
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left side text column */}
            <div className="lg:col-span-12 text-left space-y-8">
              
              {/* Logo / Label Pairing */}
              <div className="flex items-center gap-4">
                <div className="border-3 border-[#111827] rounded-xl bg-white p-1 shadow-[4px_4px_0px_#111827] flex items-center justify-center">
                  <Logo size={64} />
                </div>
                <div>
                  <h1 className="text-2xl font-extrabold uppercase tracking-tight text-[#111827]">
                    ARTI<span className="text-brand-pink">.</span>
                  </h1>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#4B5563]">
                    HUMAN-SCALE PORTFOLIO BUILDERS & DETERMINISTIC PRICING TOOLS.
                  </p>
                </div>
              </div>

              {/* Massive Bold Headline (Typographical Art) */}
              <div className="space-y-3">
                <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none text-[#111827] max-w-4xl">
                  ELEVATE <br className="hidden sm:inline" />
                  BRAND BIO<span className="text-brand-pink">.</span> <br />
                  CALCULATE <br className="hidden sm:inline" />
                  COMPENSATION<span className="text-brand-pink">.</span>
                </h2>
              </div>

              <div className="max-w-xl text-sm leading-relaxed text-[#4B5563] space-y-4 font-sans border-l-4 border-brand-pink pl-5">
                <p>
                  Arti simplifies standard storefront tracking and pricing calculations for student artists and physical craftspeople. Perfect for managing work portfolios ethically, without algorithms or data-mining.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  id="header-cta-mockups"
                  onClick={() => scrollToSection('mockups', 'mockups-section')}
                  className="px-8 py-4 bg-[#2D2E49] text-white hover:bg-brand-pink hover:scale-105 font-bold text-xs uppercase tracking-widest transition-all duration-200 cursor-pointer border-2 border-[#111827] flex items-center gap-3 rounded-lg shadow-none"
                >
                  <span>EXPLORE MOCKUPS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  id="header-cta-process"
                  onClick={() => scrollToSection('pitch', 'pitch-section')}
                  className="px-8 py-4 bg-white text-[#111827] hover:bg-brand-gray hover:scale-105 font-bold text-xs uppercase tracking-widest transition-all duration-200 cursor-pointer border-2 border-[#111827] rounded-lg shadow-none"
                >
                  VIEW DESIGN PROCESS
                </button>
              </div>

            </div>



          </div>
        </div>
      </div>

      {/* Sticky Secondary Navigation Bar */}
      <nav className="sticky top-0 bg-white z-40 border-b-3 border-[#111827] relative">
        <div className="max-w-7xl mx-auto px-6 whitespace-nowrap overflow-x-auto flex gap-0 py-0 scrollbar-none">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`scroller-item-${item.id}`}
              onClick={() => scrollToSection(item.id, item.sectionId)}
              className={`px-6 py-5 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer border-r-2 border-[#111827] flex items-center gap-2 rounded-none relative ${
                activeCategory === item.id
                  ? 'bg-[#2D2E49] text-white'
                  : 'text-[#111827] hover:bg-brand-gray hover:text-brand-pink'
              }`}
            >
              {item.label}
              {activeCategory === item.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-pink" />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Sections Layout */}
      <main className="max-w-7xl mx-auto px-6 py-16 sm:py-24 space-y-36 flex-1 w-full">
        
        {/* Section A: The Pitch (Problem & Solution Statements) */}
        <section id="pitch-section" className="scroll-mt-24 space-y-6 animate-fade-in">
          <div className="border-b-3 border-[#111827] pb-4 flex items-center gap-4">
            <span className="text-xl font-mono font-bold text-brand-pink">01.</span>
            <h3 className="text-3xl font-extrabold uppercase tracking-tight text-[#111827]">
              CONSTITUENT CONCEPTS
            </h3>
          </div>
          <DesignCycle />
        </section>

        {/* Section B: Concept Video Walkthrough Player */}
        <section id="video-section" className="scroll-mt-24 space-y-8">
          <div className="border-b-3 border-[#111827] pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 font-sans">
            <div className="flex items-center gap-4">
              <span className="text-xl font-mono font-bold text-brand-pink">02.</span>
              <h3 className="text-3xl font-extrabold uppercase tracking-tight text-[#111827]">
                CONCEPT PLAYBOOK
              </h3>
            </div>

          </div>
          <VideoPlayer />
        </section>

        {/* Section C: Space for high fidelity mockup photos */}
        <section id="mockups-section" className="scroll-mt-24 space-y-8">
          <div className="border-b-3 border-[#111827] pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
            <div className="flex items-center gap-4">
              <span className="text-xl font-mono font-bold text-brand-pink">03.</span>
              <h3 className="text-3xl font-extrabold uppercase tracking-tight text-[#111827]">
                DIGITAL MOCKUPS
              </h3>
            </div>

          </div>
          <DigitalMockups />
        </section>

        {/* Section D: Meet the Team */}
        <section id="team-section" className="scroll-mt-24 space-y-8">
          <div className="border-b-3 border-[#111827] pb-4 flex items-center gap-4">
            <span className="text-xl font-mono font-bold text-brand-pink">04.</span>
            <h3 className="text-3xl font-extrabold uppercase tracking-tight text-[#111827]">
              COLLABORATORS
            </h3>
          </div>
          <TeamSection />
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-12 border-t-3 border-[#111827] relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-4 text-xs">
          <div className="flex items-center gap-4">
            <div className="border-2 border-[#111827]/10 rounded-lg bg-white p-0.5 flex items-center justify-center">
              <Logo size={36} />
            </div>
            <span className="font-black tracking-widest text-sm uppercase">ARTI</span>
          </div>
          <div className="text-[10px] text-gray-500 font-mono">
            © 2026 ARTI. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

    </div>
  );
}

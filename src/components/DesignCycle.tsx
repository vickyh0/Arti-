import React from 'react';
import { 
  Compass, 
  Lightbulb, 
  Layers, 
  Plus,
  ShieldCheck,
  UserCircle2,
  TrendingUp,
  Cpu
} from 'lucide-react';

export default function DesignCycle() {
  return (
    <div id="design-cycle" className="space-y-16 snappy-transition">
      
      {/* 01. Problem & Solution Pitch Block */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 flat-border divide-y-4 lg:divide-y-0 lg:divide-x-4 divide-[#111827] bg-[#1F2035] rounded-xl overflow-hidden">
        
        {/* Problem Statement Card */}
        <div className="bg-white p-8 sm:p-12 flex flex-col justify-between space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/5 rounded-full -translate-y-6 translate-x-6 pointer-events-none" />
          
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#2D2E49] text-white flex items-center justify-center font-bold text-sm">
                ✕
              </span>
              <h4 className="text-xs font-mono font-bold tracking-widest text-brand-pink uppercase">
                THE CHALLENGE
              </h4>
            </div>
            
            <h3 className="text-3xl font-extrabold uppercase tracking-tight leading-none text-[#111827]">
              STUDENT ARTISTS STRUGGLE WITH COMPLEX FORMULAS & INTIMIDATING WORKFLOWS.
            </h3>
            
            <div className="text-sm text-[#4B5563] space-y-4 leading-relaxed font-normal">
              <p>
                Our initial user discovery study confirmed student craftspeople encounter massive cognitive friction. Most track materials, labor hours, and platform markups in fragmented paper pads or dense spreadsheet templates. 
              </p>
              <p>
                Simultaneously, mainstream portfolio builders demand endless social feedback loops to stay visible, leading to creator burnout and pressure to yield copyrights under automated AI-generated scrapers.
              </p>
            </div>
          </div>
        </div>

        {/* Solution Statement Card */}
        <div className="bg-white p-8 sm:p-12 flex flex-col justify-between space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 flat-dots opacity-40 pointer-events-none" />
          
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-brand-pink text-white flex items-center justify-center font-bold text-sm">
                ✓
              </span>
              <h4 className="text-xs font-mono font-bold tracking-widest text-[#2D2E49] uppercase">
                THE REMEDY
              </h4>
            </div>
            
            <h3 className="text-3xl font-extrabold uppercase tracking-tight leading-none text-[#111827]">
              ARTI: TRANSPARENT COST LEDGERS + STREAMLINED DIGITAL BRAND BIO COMPOSERS.
            </h3>
            
            <div className="text-sm text-[#4B5563] space-y-4 leading-relaxed font-normal">
              <p>
                Arti provides a pristine, high-contrast workspace crafted for standard desktop or hand-held browser frames. By centering clean, logical calculators over intimidating spreadsheet arrays, students retain complete math autonomy.
              </p>
              <p>
                By keeping data storage local to the creator and refusing all generative automated models, we protect student copyrights while facilitating organic user and collector feedback.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* 02. Peek into our Process Block */}
      <div className="flat-border bg-white p-8 sm:p-12 space-y-12 relative rounded-xl overflow-hidden">
        <div className="absolute inset-0 flat-grid-pattern opacity-40 pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pb-8 border-b-3 border-[#111827] relative z-10">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-pink font-bold block">METHODOLOGY CYCLE</span>
            <h3 className="text-3xl font-extrabold uppercase tracking-tight text-[#111827]">
              DESIGN PILOT CHRONOLOGY
            </h3>
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          
          {/* Phase 1 */}
          <div className="bg-[#FAF9F6] p-6 rounded-lg border-2 border-[#111827] space-y-4">
            <div className="text-xs font-mono font-bold text-brand-pink uppercase tracking-wider">PHASE 01 // DISCOVERY</div>
            <h4 className="text-lg font-bold uppercase tracking-tight text-[#111827]">Documenting Manual Burnout</h4>
            <p className="text-xs text-[#4B5563] leading-relaxed">
              Interviews proved student creators love physical craft, but experience high friction in the office. Hand-calculated pricing leads to significant material cost loss, while tracking tables are intimidating to navigate.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="bg-[#FAF9F6] p-6 rounded-lg border-2 border-[#111827] space-y-4">
            <div className="text-xs font-mono font-bold text-brand-pink uppercase tracking-wider">PHASE 02 // SKETCHES & COMPOSING</div>
            <h4 className="text-lg font-bold uppercase tracking-tight text-[#111827]">Navigation Simplification</h4>
            <p className="text-xs text-[#4B5563] leading-relaxed">
              Our initial drawings used plain circular iconography. Tester reviews immediately highlighted heavy search friction. We redesigned our tab system to couple bold graphic shapes with obvious, uppercase labels beneath them.
            </p>
          </div>

          {/* Phase 3 */}
          <div className="bg-[#FAF9F6] p-6 rounded-lg border-2 border-[#111827] space-y-4">
            <div className="text-xs font-mono font-bold text-brand-pink uppercase tracking-wider">PHASE 03 // DATA ETHICS</div>
            <h4 className="text-lg font-bold uppercase tracking-tight text-[#111827]">The Anti-AI Commitment</h4>
            <p className="text-xs text-[#4B5563] leading-relaxed">
              While other tools lean into heavy model automation, student creators expressed zero interest in generative content. We committed to raw human-centered principles: absolute digital security and only transparent mathematics.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

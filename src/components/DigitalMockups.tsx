import React, { useState } from 'react';

// ─── Update these paths to match your project structure ───────────────────────
import analyticsImg       from '@/assets/.aistudio/mockups/Analytics.png';
import digitalMockupImg   from '@/assets/.aistudio/mockups/Digital Mockup.png';
import productAnalyticsImg from '@/assets/.aistudio/mockups/Product Analytics.png';
import uploadImg          from '@/assets/.aistudio/mockups/Upload.png';
import uploadArtworkImg   from '@/assets/.aistudio/mockups/Upload (artwork).png';
import profileImg         from '@/assets/.aistudio/mockups/Profile.png';
import profileViewImg     from '@/assets/.aistudio/mockups/Profile (view).png';
// ──────────────────────────────────────────────────────────────────────────────

const MOCKUP_TABS = [
  { id: 'all_screens',       label: 'All Screens',        src: digitalMockupImg   },
  { id: 'analytics',         label: 'Analytics',          src: analyticsImg       },
  { id: 'upload',            label: 'Upload',             src: uploadImg          },
  { id: 'upload_suggestion', label: 'Upload (Suggestion)', src: uploadArtworkImg  },
  { id: 'profile',           label: 'Profile',            src: profileImg         },
  { id: 'profile_view',      label: 'Profile (View)',     src: profileViewImg     },
  { id: 'price_check',       label: 'Price Check',        src: productAnalyticsImg },
];

export default function DigitalMockups() {
  const [activeTab, setActiveTab] = useState(MOCKUP_TABS[0].id);

  const currentTab = MOCKUP_TABS.find(t => t.id === activeTab)!;
  const currentSrc = currentTab.src;

  return (
    <div id="mockups-section" className="space-y-12 snappy-transition relative">

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#111827]">
          Digital Mockup Images
        </h3>
        <p className="text-xs font-mono uppercase text-[#4B5563] tracking-wider leading-relaxed">
          Review static concept images and Figma exports.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {MOCKUP_TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-mono font-bold text-xs uppercase tracking-wider rounded-lg border-2 transition-all ${
                activeTab === tab.id
                  ? 'bg-[#111827] text-white border-[#111827] shadow-[4px_4px_0px_#FF85A2]'
                  : 'bg-white text-[#111827] border-[#111827] hover:bg-gray-50 hover:shadow-[2px_2px_0px_#FF85A2] shadow-none'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl border-3 border-[#111827] overflow-hidden flex flex-col relative shadow-none">

          {/* Panel header */}
          <div className="bg-[#2D2E49] px-4 py-3 border-b-3 border-[#111827] flex justify-between items-center select-none shrink-0 text-white">
            <span className="text-xs font-mono font-black uppercase leading-none">
              {currentTab.label}
            </span>
          </div>

          {/* Image area */}
          <div
            className="relative min-h-[500px] w-full flex items-center justify-center p-8 bg-[#FAF9F6] overflow-hidden"
          >
            <div className="absolute inset-0 flat-grid-pattern opacity-10 pointer-events-none" />

            <img
              src={currentSrc}
              alt={`${currentTab.label} mockup`}
              className="max-w-full max-h-[800px] object-contain rounded-xl border-3 border-[#111827] relative z-10 shadow-[8px_8px_0px_#111827] bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
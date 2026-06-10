import React from 'react';

export default function TeamSection() {
  const members = [
    "Annabelle Choi",
    "Vicky Huang",
    "Sneha Murali",
    "Ivy Nguyen",
    "Nandini Sinha"
  ];

  return (
    <div id="team-section" className="space-y-6 snappy-transition">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {members.map((name, index) => (
          <div 
            key={index} 
            id={`team-member-${index}`}
            className="p-6 bg-white flat-border rounded-xl text-center font-extrabold uppercase tracking-tight text-[#111827] text-sm flex items-center justify-center min-h-[72px] shadow-[4px_4px_0px_#111827] hover:translate-y-[-2px] hover:translate-x-[-2px] hover:shadow-[6px_6px_0px_#111827] snappy-transition cursor-default select-none"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

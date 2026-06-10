import React from 'react';
import logoImg from '../assets/images/arti_brand_logo_1781073051936.png';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = '', size = 64 }: LogoProps) {
  return (
    <div className={`inline-flex items-center justify-center select-none overflow-hidden rounded-lg ${className}`} style={{ width: size, height: size }}>
      <img
        src={logoImg}
        alt="Arti Platform Logo"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

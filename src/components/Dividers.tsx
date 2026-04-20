import React from "react";

/**
 * Original circular divider (SectionDividerZ)
 */
export function SectionDividerZ() {
  return (
    <div className="w-full h-12 overflow-hidden bg-transparent relative z-20">
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        className="w-full h-full fill-secondary"
      >
        <path d="M0,0 C300,120 900,120 1200,0 V120 H0 Z" />
      </svg>
    </div>
  );
}

/**
 * Wave divider (Bottom) - From color to white
 */
export function SectionDividerV() {
  return (
    <div className="w-full h-24 bg-transparent relative z-20 overflow-hidden flex">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
        <defs>
          <linearGradient id="waveGradientBottom" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#931B88" />
            <stop offset="100%" stopColor="#C328B6" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <path 
          d="M0,0 L0,40 C200,100 400,0 600,40 C800,80 1000,0 1200,40 L1200,0 Z" 
          fill="url(#waveGradientBottom)" 
        />
      </svg>
    </div>
  );
}

/**
 * Wave divider (Top) - From white to color
 */
export function SectionDividerWaveTop() {
  return (
    <div className="w-full h-24 bg-transparent relative z-20 overflow-hidden flex">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
        <defs>
          <linearGradient id="waveGradientTop" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C328B6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#931B88" />
          </linearGradient>
        </defs>
        <path 
          d="M0,120 L0,80 C200,20 400,120 600,80 C800,40 1000,120 1200,80 L1200,120 Z" 
          fill="url(#waveGradientTop)" 
        />
      </svg>
    </div>
  );
}

export function SectionDividerGradient() {
  return (
    <div className="w-full h-24 bg-gradient-to-b from-secondary to-secondary/80 relative z-20" />
  );
}

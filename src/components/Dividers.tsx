import React from "react";

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

export function SectionDividerV() {
  return (
    <div className="w-full h-12 bg-transparent relative z-20 overflow-hidden flex transform rotate-180">
      <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-full fill-background">
        <polygon points="0,0 500,100 1000,0 1000,100 0,100" />
      </svg>
    </div>
  );
}

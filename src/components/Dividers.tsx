import React from "react";

export function SectionDividerZ() {
  return (
    <div className="w-full h-8 overflow-hidden bg-background -mt-4 relative z-20">
      <div 
        className="w-full h-8 bg-secondary"
        style={{clipPath: "polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0, 100% 100%, 0 100%)"}}
      />
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

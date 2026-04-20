"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionDividerZ, SectionDividerV } from "./Dividers";

gsap.registerPlugin(ScrollTrigger);

export default function Numbers() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animação removida a pedido do usuário
  }, []);

  const stats = [
    { value: "+R$85M", label: "FATURAMENTO ANUAL DA REDE" },
    { value: "+1,5 Mi", label: "DE QUILOS VENDIDOS POR ANO" },
    { value: "+R$100k", label: "FATURAMENTO MENSAL POR LOJA" },
    { value: "3x", label: "CHANCELADA PELA ABF" },
  ];

  return (
    <section id="números" className="bg-secondary relative py-24 text-white">
      <div className="absolute top-0 left-0 w-full -translate-y-[99%] pointer-events-none">
        <SectionDividerZ />
      </div>

      <div ref={containerRef} className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-fluid-h2 font-heading text-white uppercase mb-4 tracking-tight">
            Nossos <span className="text-primary [text-shadow:0_4px_12px_rgba(246,230,50,0.3)]">Números</span>
          </h2>
          <p className="text-fluid-p font-sans opacity-90 font-medium max-w-2xl mx-auto">
            Resultados que não param de crescer
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card flex flex-col items-center text-center p-4 sm:p-6 md:p-8 bg-black/30 rounded-base border border-white/10 backdrop-blur-sm hover:bg-black/40 transition-all hover:border-primary/40 shadow-xl group">
              <span className="text-3xl xs:text-4xl md:text-6xl lg:text-7xl font-heading text-primary mb-1 md:mb-2 tracking-tighter group-hover:scale-105 transition-transform [text-shadow:0_0_20px_rgba(246,230,50,0.5)]">
                {stat.value}
              </span>
              <span className="font-sans text-[10px] xs:text-xs md:text-sm lg:text-base font-bold uppercase tracking-wide opacity-80 leading-tight text-white">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full translate-y-[99%] pointer-events-none">
        <SectionDividerV />
      </div>
    </section>
  );
}

"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionDividerZ } from "./Dividers";

gsap.registerPlugin(ScrollTrigger);

export default function Numbers() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "+R$85M", label: "FATURAMENTO ANUAL DA REDE" },
    { value: "+1,5 Mi", label: "DE QUILOS VENDIDOS POR ANO" },
    { value: "+R$100k", label: "FATURAMENTO MENSAL POR LOJA" },
    { value: "3x", label: "CHANCELADA PELA ABF" },
  ];

  return (
    <section id="números" className="bg-secondary relative py-24 text-background mt-[-2px]">
      <div className="absolute top-0 left-0 w-full rotate-180 -translate-y-[90%]">
        <SectionDividerZ />
      </div>

      <div ref={containerRef} className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-heading text-primary uppercase mb-4 [text-shadow:0_2px_4px_rgba(75,32,65,0.4)]">
            Nossos Números
          </h2>
          <p className="font-sans text-xl md:text-2xl opacity-90 font-medium">Resultados que não param de crescer</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card flex flex-col items-center text-center p-6 bg-foreground/10 rounded-base border border-primary/20 backdrop-blur-sm">
              <span className="text-5xl md:text-6xl font-heading text-primary mb-2 tracking-tighter">
                {stat.value}
              </span>
              <span className="font-sans text-sm md:text-base font-bold uppercase tracking-wide opacity-90">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

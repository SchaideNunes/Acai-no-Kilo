"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] z-50 bg-background/50 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-6 py-3 rounded-2xl flex items-center justify-between transition-all">
      <div className="flex items-center gap-3">
        {/* Placeholder para logo com tamanho ajustado */}
        <div className="relative w-12 h-12 flex items-center justify-center bg-transparent mix-blend-multiply">
          <img 
             src="/assets/Logo açai.webp" 
             alt="Logo Açaí no Kilo" 
             className="w-full h-full object-contain"
          />
        </div>
      </div>

      <nav className="hidden lg:flex items-center gap-8">
        {["Franquia", "Números", "Formatos", "Vantagens", "Produtos"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[15px] font-sans font-bold uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors focus:ring-2 focus:ring-primary focus:outline-none rounded-base px-2 py-1"
          >
            {item}
          </a>
        ))}
      </nav>

      <button className="relative group overflow-hidden bg-primary text-background font-heading text-lg px-6 py-2 rounded-full hover:shadow-[0_0_15px_rgba(246,230,50,0.3)] active:scale-95 transition-all flex items-center gap-2">
        {/* Camada de brilho no hover */}
        <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
        
        <span className="relative z-10 pt-0.5 tracking-tight">SEJA FRANQUEADO</span>
        
        <div className="relative z-10 bg-background/20 p-0.5 rounded-full group-hover:bg-background/40 transition-colors">
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </div>
        
        {/* Borda animada discreta */}
        <div className="absolute inset-0 rounded-full border border-primary/40 animate-pulse group-hover:animate-none" />
      </button>
    </header>
  );
}

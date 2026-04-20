"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Bloquear scroll quando menu estiver aberto
  useEffect(() => {
    // Bloqueio padrão do navegador
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }

    // Bloqueio para o Lenis (Smooth Scroll)
    // O Lenis adiciona uma classe 'lenis' ou expõe instâncias globais às vezes, 
    // mas a forma mais segura é disparar um evento ou usar o atributo data-lenis-prevent
    if (isOpen) {
      document.documentElement.classList.add('lenis-stopped');
      // @ts-ignore - Acessando via window se o provedor expôs ou simplesmente forçando via atributo
      window.scrollTo(0, window.scrollY); 
    } else {
      document.documentElement.classList.remove('lenis-stopped');
    }
  }, [isOpen]);

  const navItems = ["Franquia", "Números", "Formatos", "Vantagens", "Produtos"];

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] z-50 bg-background/50 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-4 md:px-6 py-3 rounded-2xl flex items-center justify-between transition-all">
        <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-transparent mix-blend-multiply">
            <img 
               src="/assets/Logo açai.webp" 
               alt="Logo Açaí no Kilo" 
               className="w-full h-full object-contain"
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[15px] font-sans font-bold uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors focus:ring-2 focus:ring-primary focus:outline-none rounded-base px-2 py-1"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="#franquia"
            className="hidden sm:flex relative group overflow-hidden bg-primary text-background font-heading text-lg px-6 py-2 rounded-full hover:shadow-[0_0_15px_rgba(246,230,50,0.3)] active:scale-95 transition-all items-center gap-2"
          >
            <span className="relative z-10 pt-0.5 tracking-tight">SEJA FRANQUEADO</span>
            <div className="relative z-10 bg-background/20 p-0.5 rounded-full">
              <ArrowRight size={14} />
            </div>
            <div className="absolute inset-0 rounded-full border border-primary/40 group-hover:animate-none" />
          </a>

          {/* Botão Hambúrguer Mobile */}
          <button 
            className="lg:hidden p-2 text-foreground hover:bg-secondary/10 rounded-xl transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Menu Mobile lateral (Drawer) */}
      <div 
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${isOpen ? "visible" : "invisible pointer-events-none"}`}
      >
        {/* Overlay escuro */}
        <div 
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Lado Direito (Menu) - Estilo Vidro Premium */}
        <div 
          data-lenis-prevent
          className={`absolute right-0 top-0 h-full w-[45%] xs:w-[35%] sm:w-[30%] bg-white/10 backdrop-blur-[20px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col p-6 sm:p-8 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] border-l border-white/20 ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
          style={{
            background: "rgba(147, 27, 136, 0.2)", // Roxo da marca com muita transparência
            boxShadow: "inset 0 0 15px rgba(255, 255, 255, 0.05)", // Brilho interno
          }}
        >
          <div className="flex justify-end mb-8 md:mb-12">
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 text-white/80 hover:text-primary transition-all hover:rotate-90 duration-300"
            >
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-col gap-6 sm:gap-8">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-2xl sm:text-4xl font-heading text-white hover:text-primary transition-all uppercase tracking-tight transform ${isOpen ? "translate-x-0 opacity-100 scale-100" : "translate-x-8 opacity-0 scale-95"}`}
                style={{ 
                  transitionDelay: `${index * 70}ms`,
                  textShadow: "0 2px 10px rgba(0,0,0,0.2)"
                }}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className={`mt-auto transform transition-all duration-1000 delay-400 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
            <a 
              href="#franquia"
              onClick={() => setIsOpen(false)}
              className="w-full bg-primary text-secondary font-heading text-xl sm:text-2xl py-4 rounded-2xl active:scale-95 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:bg-white hover:text-secondary flex items-center justify-center"
            >
              SEJA FRANQUEADO
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

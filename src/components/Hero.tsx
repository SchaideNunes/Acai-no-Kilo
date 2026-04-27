import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { SectionDividerZ } from "./Dividers";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
      
      tl.from(".hero-badge", { y: -20, opacity: 0, duration: 0.6 })
        .from(".hero-title", { x: -50, opacity: 0 }, "-=0.3")
        .from(".hero-desc", { y: 20, opacity: 0 }, "-=0.6")
        .from(".hero-cta", { scale: 0.8, opacity: 0 }, "-=0.6")
        .from(".hero-image", { x: 100, opacity: 0, duration: 1.2 }, "-=1");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen flex items-center justify-center bg-background overflow-hidden pt-32 pb-16 lg:pt-24">
      {/* Background Graphic elements */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-primary/10 lg:rounded-l-[100px] blur-3xl opacity-50" />
      
      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="w-full lg:w-[55%] flex flex-col gap-4 md:gap-6 text-left items-start">
          <div className="hero-badge inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full font-sans font-bold text-xs md:text-sm tracking-widest uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Franquia Oficial
          </div>
          <h1 className="hero-title text-fluid-h1 font-heading text-foreground uppercase">
            FATURE ATÉ <span className="text-primary [text-shadow:0_4px_12px_rgba(246,230,50,0.3)]">2 MILHÕES</span>{" "}
            <br className="hidden sm:block" />
            AO ANO
          </h1>
          <p className="hero-desc text-fluid-p font-sans text-foreground/70 max-w-xl">
            A oportunidade de investimento lucrativo que você procura. Seja franqueado da marca chancelada 3 anos consecutivos pela ABF.
          </p>
          <div className="hero-cta flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
            <a 
              href="#franquia"
              className="bg-secondary text-white font-heading text-xl px-8 py-4 rounded-base hover:bg-primary hover:text-secondary active:scale-95 transition-all shadow-[0_8px_30px_rgb(147,27,136,0.15)] flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              DÊ O PRIMEIRO PASSO
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="w-full lg:w-[45%] relative mt-8 lg:mt-0 flex justify-center hero-image">
          {/* Forma Orgânica Amarela Inspirada no Print.png - Mais à direita */}
          <div className="absolute top-1/2 left-[68%] lg:left-[75%] -translate-x-1/2 -translate-y-1/2 w-[100%] sm:w-[90%] lg:w-[105%] aspect-square z-0 pointer-events-none opacity-95 rotate-[-10deg]">
            <svg viewBox="0 0 1000 1000" className="w-full h-full fill-primary drop-shadow-[-20px_15px_40px_rgba(0,0,0,0.15)]">
              <path d="M 780 220 C 950 350, 950 650, 800 800 C 700 900, 550 950, 400 880 C 300 830, 200 900, 100 800 C 0 700, 50 500, 150 400 C 250 300, 200 150, 350 100 C 500 50, 650 100, 780 220 Z" />
            </svg>
          </div>

          <div className="relative w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[600px] aspect-square z-10 flex items-center justify-center">
            {/* Imagem com sombra projetada suave e topo recortado para esconder o doce */}
            <img
              src="/assets/Acaiheropage.webp"
              alt="Açaí Delicioso"
              className="w-full h-full object-contain filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.35)] z-10 relative scale-[1.15] sm:scale-[1.25] lg:scale-[1.35] hover:scale-[1.4] transition-transform duration-1000 ease-out [clip-path:inset(18%_0_0_0)]"
            />
            
            {/* Aura Roxa Premium (Substituindo o amarelo) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/15 rounded-full z-0 blur-[120px]" />
            <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[40%] bg-secondary/20 rounded-[100%] z-0 blur-[60px]" />
            
            {/* Sombra de Contato (Ground Shadow) para dar peso */}
            <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[60%] h-[20px] bg-black/20 rounded-full z-0 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

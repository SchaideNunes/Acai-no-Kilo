import React from "react";
import { ArrowRight } from "lucide-react";
import { SectionDividerZ } from "./Dividers";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-background overflow-hidden pt-32 pb-16 lg:pt-24">
      {/* Background Graphic elements */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-primary/10 lg:rounded-l-[100px] blur-3xl opacity-50" />
      
      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="w-full lg:w-[55%] flex flex-col gap-4 md:gap-6 text-center lg:text-left items-center lg:items-start">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full font-sans font-bold text-xs md:text-sm tracking-widest uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Franquia Oficial
          </div>
          <h1 className="text-fluid-h1 font-heading text-foreground uppercase">
            FATURE ATÉ <span className="text-primary [text-shadow:0_4px_12px_rgba(246,230,50,0.3)]">2 MILHÕES</span>
            <br className="hidden sm:block" />
            AO ANO
          </h1>
          <p className="text-fluid-p font-sans text-foreground/70 max-w-xl mx-auto lg:mx-0">
            A oportunidade de investimento lucrativo que você procura. Seja franqueado da marca chancelada 3 anos consecutivos pela ABF.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="bg-secondary text-white font-heading text-xl px-8 py-4 rounded-base hover:bg-primary hover:text-secondary active:scale-95 transition-all shadow-[0_8px_30px_rgb(147,27,136,0.15)] flex items-center gap-2 group w-full sm:w-auto justify-center">
              DÊ O PRIMEIRO PASSO
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[45%] relative mt-8 lg:mt-0 flex justify-center">
          <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-md aspect-[4/5] z-10">
            <img 
              src="/assets/Açai.webp" 
              alt="Açaí Delicioso"
              className="w-full h-full object-contain filter drop-shadow-2xl z-10 relative scale-110 sm:scale-[1.2] lg:scale-[1.27] hover:scale-[1.32] transition-transform duration-700"
            />
            {/* Elemento de fundo geométrico */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary rounded-full z-0 opacity-20 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

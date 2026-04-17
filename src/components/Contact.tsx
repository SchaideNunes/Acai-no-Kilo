"use client";
import React, { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://franquia.acainokilo.com.br/");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="franquia" className="py-24 bg-background relative z-10 border-t border-foreground/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 p-10 bg-secondary/5 rounded-base ring-1 ring-secondary/10">
          
          <div className="lg:w-1/2 flex flex-col justify-center">
            <span className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm font-sans">
              Reconhecimento Máximo
            </span>
            <h2 className="text-5xl md:text-6xl font-heading text-foreground uppercase mb-6 leading-[0.9]">
              DÊ O PRIMEIRO PASSO PARA ABRIR A SUA LOJA
            </h2>
            <p className="font-sans text-lg text-foreground/70 mb-8">
              Para quem deseja empreender e prefere não iniciar a jornada sozinho. 
              Temos o selo de excelência da ABF e apoio total aos franqueados.
            </p>
            
            <div className="flex items-center gap-4">
               <button className="bg-secondary text-background font-heading text-xl px-8 py-4 rounded-base hover:bg-primary hover:text-foreground active:scale-95 transition-all w-full md:w-auto flex items-center justify-center gap-3">
                  <MessageCircle size={24} />
                  FALAR COM CONSULTOR
               </button>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white p-8 rounded-base shadow-[0_10px_40px_rgb(0,0,0,0.05)] border border-foreground/5 relative">
            <h3 className="font-heading text-4xl text-foreground mb-6">Comece sua jornada</h3>
            
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block font-sans text-sm font-bold text-foreground/70 mb-1">Nome Completo</label>
                <input 
                  type="text" 
                  className="w-full bg-background border border-foreground/20 rounded-sm px-4 py-3 font-sans focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                  placeholder="João Silva"
                />
              </div>
              
              <div>
                <label className="block font-sans text-sm font-bold text-foreground/70 mb-1">E-mail</label>
                <input 
                  type="email" 
                  className="w-full bg-background border border-foreground/20 rounded-sm px-4 py-3 font-sans focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                  placeholder="joao@exemplo.com"
                />
              </div>

              <div>
                <label className="block font-sans text-sm font-bold text-foreground/70 mb-1">Capital para Investimento</label>
                <select className="w-full bg-background border border-foreground/20 rounded-sm px-4 py-3 font-sans focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all">
                  <option>De R$150k a R$200k</option>
                  <option>De R$200k a R$300k</option>
                  <option>Acima de R$300k</option>
                </select>
              </div>

              <div className="flex gap-4 items-center mt-4">
                <button 
                  type="button"
                  className="bg-foreground text-background font-heading text-xl px-8 py-4 rounded-base hover:bg-primary hover:text-foreground active:scale-95 transition-all flex-1"
                >
                  ENVIAR DADOS
                </button>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="px-6 py-4 border border-foreground/20 text-foreground font-sans font-bold text-sm uppercase rounded-base hover:bg-foreground/5 transition-all relative"
                >
                  {copied ? "Copiado!" : "Copiar Link"}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

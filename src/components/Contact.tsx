"use client";
import React, { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SectionDividerV } from "./Dividers";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://franquia.acainokilo.com.br/");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="franquia" className="py-24 bg-secondary relative z-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 p-12 bg-black/20 rounded-3xl border border-white/10 shadow-3xl">
          
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="inline-block bg-primary text-secondary font-heading text-xl px-4 py-1 rounded-sm w-fit -rotate-2 mb-6">
              SUA OPORTUNIDADE
            </div>
            <h2 className="text-5xl md:text-7xl font-heading text-white uppercase mb-6 leading-none">
              DÊ O PRIMEIRO PASSO PARA <span className="text-primary">SEU SUCESSO</span>
            </h2>
            <p className="font-sans text-xl text-white/80 mb-8 leading-relaxed">
              Junte-se à rede que mais cresce no Brasil. Preencha o formulário e receba nosso material completo para novos investidores.
            </p>
            
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-3 text-white">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="text-primary" size={20} />
                  </div>
                  <span className="font-sans font-bold">Suporte total na escolha do ponto</span>
               </div>
               <div className="flex items-center gap-3 text-white">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="text-primary" size={20} />
                  </div>
                  <span className="font-sans font-bold">Consultoria de campo especializada</span>
               </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white/5 backdrop-blur-md p-10 rounded-2xl border border-white/20 relative shadow-inner">
            <h3 className="font-heading text-4xl text-primary mb-8 tracking-wide">Comece agora</h3>
            
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b-2 border-white/20 px-0 py-3 font-sans text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/30"
                  placeholder="Seu nome completo"
                />
                <label className="absolute left-0 -top-4 text-xs font-bold text-primary uppercase tracking-widest opacity-0 group-focus-within:opacity-100 transition-opacity">Nome Completo</label>
              </div>
              
              <div className="relative group">
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b-2 border-white/20 px-0 py-3 font-sans text-white focus:outline-none focus:border-primary transition-all placeholder:text-white/30"
                  placeholder="Seu melhor e-mail"
                />
                <label className="absolute left-0 -top-4 text-xs font-bold text-primary uppercase tracking-widest opacity-0 group-focus-within:opacity-100 transition-opacity">E-mail</label>
              </div>

              <div className="relative group">
                <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-1">Capital para Investimento</label>
                <div className="relative">
                  <select className="w-full bg-black/60 border-2 border-white/10 rounded-lg px-4 py-3 font-sans text-white focus:outline-none focus:border-primary transition-all appearance-none cursor-pointer">
                    <option value="" className="text-black bg-white">Selecione o valor</option>
                    <option value="150-200" className="text-black bg-white">De R$150k a R$200k</option>
                    <option value="200-300" className="text-black bg-white">De R$200k a R$300k</option>
                    <option value="300+" className="text-black bg-white">Acima de R$300k</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <ArrowRight size={18} className="text-primary rotate-90" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button 
                  type="button"
                  className="bg-primary text-secondary font-heading text-2xl px-10 py-4 rounded-xl hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95 transition-all flex-1"
                >
                  ENVIAR MEUS DADOS
                </button>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="px-6 py-4 border border-white/20 text-white font-sans font-bold text-xs uppercase rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  {copied ? "Link Copiado!" : "Compartilhar"}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full translate-y-[98%] z-20">
        <SectionDividerV />
      </div>
    </section>
  );
}

import React from "react";
import { SectionDividerV } from "./Dividers";

export default function Products() {
  const products = [
    { title: "5 Sabores", desc: "De açaís variados" },
    { title: "13 Cremes", desc: "Com receita exclusiva" },
    { title: "+60", desc: "Opções de adicionais" },
  ];

  return (
    <section id="produtos" className="relative w-full bg-secondary text-white py-16 md:py-24 pb-24 md:pb-32">
      <div className="absolute top-0 left-0 w-full -translate-y-full rotate-180">
        <SectionDividerV />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <h2 className="text-fluid-h2 font-heading text-primary uppercase mb-4 tracking-tight">
          Mix de Produtos
        </h2>
        <p className="text-fluid-p font-sans text-white/80 max-w-2xl mx-auto mb-12 md:mb-16">
          Qualidade excepcional em cada detalhe. Nossas receitas exclusivas garantem um sabor inigualável.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {products.map((p, i) => (
            <div key={i} className={`flex flex-col items-center p-6 md:p-10 bg-black/20 rounded-2xl border border-white/10 relative overflow-hidden group hover:bg-black/30 transition-all hover:border-primary/40 shadow-xl ${i === 2 ? 'col-span-2 lg:col-span-1' : ''}`}>
              {/* Efeito de brilho no hover */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary relative z-10 leading-none">{p.title}</h3>
              <p className="font-sans text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-white uppercase tracking-widest relative z-10 mt-3 md:mt-4 text-center">{p.desc}</p>
              
              <div className="w-8 md:w-12 h-0.5 md:h-1 bg-primary mt-4 md:mt-6 rounded-full group-hover:w-16 md:group-hover:w-24 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

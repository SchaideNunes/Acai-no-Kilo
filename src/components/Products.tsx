import React from "react";
import { SectionDividerV } from "./Dividers";

export default function Products() {
  const products = [
    { title: "5 Sabores", desc: "De açaís variados" },
    { title: "13 Cremes", desc: "Com receita exclusiva" },
    { title: "+60", desc: "Opções de adicionais" },
  ];

  return (
    <section id="produtos" className="relative w-full bg-secondary text-white py-24 pb-32">
      <div className="absolute top-0 left-0 w-full -translate-y-full rotate-180">
        <SectionDividerV />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-heading text-primary uppercase mb-6 tracking-tight">
          Mix de Produtos
        </h2>
        <p className="font-sans text-xl text-white/90 max-w-2xl mx-auto mb-16">
          Qualidade excepcional em cada detalhe. Nossas receitas exclusivas garantem um sabor inigualável e prontidão total para a venda.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div key={i} className="flex flex-col items-center p-10 bg-black/20 rounded-2xl border border-white/10 relative overflow-hidden group hover:bg-black/30 transition-all hover:border-primary/50 shadow-2xl">
              {/* Efeito de brilho no hover */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <h3 className="text-7xl font-heading text-primary relative z-10 leading-none">{p.title}</h3>
              <p className="font-sans text-xl font-bold text-white uppercase tracking-widest relative z-10 mt-4">{p.desc}</p>
              
              <div className="w-12 h-1 bg-primary mt-6 rounded-full group-hover:w-24 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

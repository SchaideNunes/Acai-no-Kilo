import React from "react";
import { SectionDividerV } from "./Dividers";

export default function Products() {
  const products = [
    { title: "5 Sabores", desc: "De açaís variados" },
    { title: "13 Cremes", desc: "Com receita exclusiva" },
    { title: "+60", desc: "Opções de adicionais" },
  ];

  return (
    <section id="produtos" className="relative w-full bg-foreground text-background py-24 pb-32">
      <div className="absolute top-0 left-0 w-full -translate-y-full rotate-180">
        <SectionDividerV />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-heading text-primary uppercase mb-6 tracking-tight">
          Nossos Produtos
        </h2>
        <p className="font-sans text-xl opacity-80 max-w-2xl mx-auto mb-16">
          Qualidade excepcional, prêmios conquistados e sucesso assegurado. O produto já vem pronto para venda!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div key={i} className="flex flex-col items-center p-8 bg-secondary/10 rounded-base ring-1 ring-secondary/30 relative overflow-hidden group hover:bg-secondary/20 transition-all">
              {/* Fake bg blur effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <h3 className="text-6xl font-heading text-primary relative z-10">{p.title}</h3>
              <p className="font-sans text-lg font-medium text-background/80 uppercase tracking-widest relative z-10 mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

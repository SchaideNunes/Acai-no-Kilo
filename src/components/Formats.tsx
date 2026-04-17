import React from "react";
import { Store, MapPin, Building2, CheckCircle2 } from "lucide-react";

export default function Formats() {
  const features = [
    "Inovação constante",
    "Produto pronto para venda",
    "Padrão de qualidade alto",
    "Facilidade na operação",
    "Previsibilidade de retorno",
  ];

  return (
    <section id="formatos" className="py-24 bg-background relative z-10 text-foreground">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-heading text-foreground uppercase mb-6 leading-none">
              Formatos de <span className="text-secondary bg-primary px-2 rounded-sm inline-block -rotate-2 mt-2">Operação</span>
            </h2>
            <p className="font-sans text-xl mb-8 opacity-80 leading-relaxed">
              Diferentes entre si, todos alicerçados no mesmo propósito: <strong>NUTRIR A VIDA COM EMOÇÕES POSITIVAS. 😊</strong>
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {features.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary" size={24} />
                  <span className="font-sans font-semibold text-lg">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-secondary text-background font-heading text-xl px-8 py-4 rounded-base hover:bg-primary hover:text-foreground active:scale-95 transition-all shadow-[0_8px_30px_rgb(147,27,136,0.12)]">
              QUERO FAZER PARTE DA FAMÍLIA
            </button>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Cards fictícios de modelo para visualização (padrão SaaS/Dashboard aplicado) */}
            <div className="bg-[#FAF8FC] border border-secondary/10 p-8 rounded-base hover:border-secondary flex flex-col gap-4 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded flex justify-center items-center">
                <Store className="text-secondary" size={28} />
              </div>
              <h3 className="font-heading text-3xl">Loja de Rua</h3>
              <p className="font-sans text-foreground/70">Ideal para áreas de alto fluxo de pessoas. Vitrine atrativa e espaço otimizado.</p>
            </div>
            
            <div className="bg-[#FAF8FC] border border-secondary/10 p-8 rounded-base hover:border-secondary flex flex-col gap-4 transition-colors mt-0 md:mt-12">
              <div className="w-12 h-12 bg-primary/20 rounded flex justify-center items-center">
                <Building2 className="text-secondary" size={28} />
              </div>
              <h3 className="font-heading text-3xl">Quiosque</h3>
              <p className="font-sans text-foreground/70">Feito para shoppings e galerias. Alta visibilidade e baixo custo de implantação.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

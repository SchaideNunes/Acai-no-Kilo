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

            <button className="bg-secondary text-white font-heading text-xl px-8 py-4 rounded-base hover:bg-primary hover:text-secondary active:scale-95 transition-all shadow-lg group">
              QUERO FAZER PARTE DA FAMÍLIA
            </button>          </div>

          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Cards com contraste corrigido e cores da marca */}
            <div className="bg-secondary/5 border border-secondary/20 p-8 rounded-base hover:border-primary flex flex-col gap-4 transition-all hover:bg-secondary/10 group">
              <div className="w-14 h-14 bg-primary rounded-xl flex justify-center items-center shadow-lg group-hover:scale-110 transition-transform">
                <Store className="text-secondary" size={32} />
              </div>
              <h3 className="font-heading text-4xl text-secondary">Loja de Rua</h3>
              <p className="font-sans text-foreground/80 text-lg leading-relaxed">
                Ideal para áreas de alto fluxo. Vitrine atrativa e espaço otimizado para experiência do cliente.
              </p>
            </div>

            <div className="bg-secondary/5 border border-secondary/20 p-8 rounded-base hover:border-primary flex flex-col gap-4 transition-all hover:bg-secondary/10 mt-0 md:mt-12 group">
              <div className="w-14 h-14 bg-primary rounded-xl flex justify-center items-center shadow-lg group-hover:scale-110 transition-transform">
                <Building2 className="text-secondary" size={32} />
              </div>
              <h3 className="font-heading text-4xl text-secondary">Quiosque</h3>
              <p className="font-sans text-foreground/80 text-lg leading-relaxed">
                Feito para shoppings e galerias. Alta visibilidade e baixo custo de implantação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

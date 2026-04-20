import React, { useEffect, useRef } from "react";
import { Store, MapPin, Building2, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Formats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".format-card", {
        scrollTrigger: {
          trigger: ".format-card-grid",
          start: "top 90%",
        },
        x: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        immediateRender: false,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const features = [
    "Inovação constante",
    "Produto pronto para venda",
    "Padrão de qualidade alto",
    "Facilidade na operação",
    "Previsibilidade de retorno",
  ];

  return (
    <section id="formatos" ref={containerRef} className="py-24 bg-background relative z-10 text-foreground">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="formats-title text-fluid-h2 font-heading text-foreground uppercase mb-6 leading-none">
              Formatos de <span className="text-secondary bg-primary px-2 rounded-sm inline-block -rotate-2 mt-2">Operação</span>
            </h2>
            <p className="text-fluid-p font-sans mb-8 opacity-80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Diferentes entre si, todos alicerçados no mesmo propósito: <strong>NUTRIR A VIDA COM EMOÇÕES POSITIVAS. 😊</strong>
            </p>

            <div className="flex flex-col gap-4 mb-8 items-center lg:items-start text-left">
              {features.map((item, i) => (
                <div key={i} className="flex items-center gap-3 w-full max-w-md lg:max-w-none">
                  <CheckCircle2 className="text-secondary shrink-0" size={24} />
                  <span className="font-sans font-semibold text-lg">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href="#franquia"
              className="bg-secondary text-white font-heading text-xl px-8 py-4 rounded-base hover:bg-primary hover:text-secondary active:scale-95 transition-all shadow-lg group w-full sm:w-auto inline-flex items-center justify-center"
            >
              QUERO FAZER PARTE DA FAMÍLIA
            </a>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 format-card-grid">
            {/* Cards com contraste corrigido e cores da marca */}
            <div className="format-card bg-secondary/5 border border-secondary/20 p-6 md:p-8 rounded-base hover:border-primary flex flex-col gap-3 md:gap-4 transition-all hover:bg-secondary/10 group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-xl flex justify-center items-center shadow-lg group-hover:scale-110 transition-transform">
                <Store className="text-secondary" size={28} />
              </div>
              <h3 className="font-heading text-3xl md:text-4xl text-secondary">Loja de Rua</h3>
              <p className="font-sans text-foreground/80 text-base md:text-lg leading-relaxed">
                Ideal para áreas de alto fluxo. Vitrine atrativa e espaço otimizado.
              </p>
            </div>

            <div className="format-card bg-secondary/5 border border-secondary/20 p-6 md:p-8 rounded-base hover:border-primary flex flex-col gap-3 md:gap-4 transition-all hover:bg-secondary/10 mt-0 sm:mt-8 lg:mt-12 group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-xl flex justify-center items-center shadow-lg group-hover:scale-110 transition-transform">
                <Building2 className="text-secondary" size={28} />
              </div>
              <h3 className="font-heading text-3xl md:text-4xl text-secondary">Quiosque</h3>
              <p className="font-sans text-foreground/80 text-base md:text-lg leading-relaxed">
                Feito para shoppings e galerias. Alta visibilidade e baixo custo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-12 md:py-20 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Coluna 1: Logo e Infos - Ocupa 2 colunas no mobile */}
          <div className="col-span-2 md:col-span-1">
            <div className="relative w-16 h-16 md:w-24 md:h-24 mb-4">
              <img 
                 src="/assets/Logo açai.webp" 
                 alt="Logo Açaí no Kilo" 
                 className="w-full h-full object-contain"
              />
            </div>
            <p className="font-sans text-sm md:text-lg text-foreground/70 leading-relaxed">
              📍 +60 lojas<br />
              <span className="font-bold text-secondary">10:00 às 22:00 todos os dias</span>
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="col-span-1">
            <h4 className="font-heading text-xl md:text-2xl text-secondary mb-4 uppercase">Explorar</h4>
            <ul className="flex flex-col gap-2">
              {["Franquia", "Números", "Formatos", "Produtos"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="font-sans text-xs md:text-sm font-bold uppercase tracking-widest hover:text-secondary transition-colors opacity-70">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Redes Sociais */}
          <div className="col-span-1">
            <h4 className="font-heading text-xl md:text-2xl text-secondary mb-4 uppercase">Siga-nos</h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Instagram", url: "https://www.instagram.com/acainokiloserrinha/" },
                { label: "Facebook", url: "https://www.facebook.com/acainokilooficial" }
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.url} target="_blank" className="font-sans text-xs md:text-sm font-bold uppercase tracking-widest hover:text-secondary transition-colors opacity-70">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Localização - Ocupa 2 colunas no mobile */}
          <div className="col-span-2 md:col-span-1 border-t border-foreground/5 pt-6 md:border-none md:pt-0">
            <h4 className="font-heading text-xl md:text-2xl text-secondary mb-4 uppercase">Onde Estamos</h4>
            <p className="font-sans text-xs md:text-sm text-foreground/70 uppercase tracking-wider leading-relaxed">
              Praça Centenário, R. Lauro Mota, 34<br />
              Centro, Serrinha - BA<br />
              📞 (75) 99154-2626
            </p>
          </div>
        </div>

        {/* Linha de Baixo */}
        <div className="border-t border-foreground/10 pt-10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-6 md:mb-0">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] opacity-40">
              &copy; {new Date().getFullYear()} Açaí no Kilo. Todos os direitos reservados.
            </span>
          </div>
          <div className="flex gap-6">
             <div className="bg-primary px-3 py-1 rounded-sm -rotate-2">
                <span className="font-heading text-secondary text-sm">SELADA PELA ABF</span>
             </div>
             <div className="bg-secondary px-3 py-1 rounded-sm rotate-1">
                <span className="font-heading text-white text-sm">DESIGN PREMIUM</span>
             </div>
          </div>
        </div>
      </div>
      
      {/* Detalhe Decorativo de Fundo */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
}

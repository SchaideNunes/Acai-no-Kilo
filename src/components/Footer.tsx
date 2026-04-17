import React from "react";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-20 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Coluna 1: Logo e Slogan */}
          <div className="col-span-1 md:col-span-1">
            <div className="relative w-24 h-24 mb-6">
              <img 
                 src="/assets/Logo açai.webp" 
                 alt="Logo Açaí no Kilo" 
                 className="w-full h-full object-contain"
              />
            </div>
            <p className="font-sans text-lg text-foreground/70 leading-relaxed">
              Nutrir a vida com emoções positivas. A rede de açaí que mais cresce no Brasil.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="font-heading text-2xl text-secondary mb-6 uppercase">Explorar</h4>
            <ul className="flex flex-col gap-3">
              {["Franquia", "Números", "Formatos", "Vantagens", "Produtos"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="font-sans text-sm font-bold uppercase tracking-widest hover:text-secondary transition-colors opacity-70 hover:opacity-100">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contato/Social */}
          <div>
            <h4 className="font-heading text-2xl text-secondary mb-6 uppercase">Redes Sociais</h4>
            <ul className="flex flex-col gap-3">
              {["Instagram", "Facebook", "LinkedIn", "YouTube"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-sans text-sm font-bold uppercase tracking-widest hover:text-secondary transition-colors opacity-70 hover:opacity-100">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Localização */}
          <div>
            <h4 className="font-heading text-2xl text-secondary mb-6 uppercase">Sede</h4>
            <p className="font-sans text-sm text-foreground/70 uppercase tracking-wider leading-loose">
              Av. Principal, 1234<br />
              Centro, São Paulo - SP<br />
              01234-567
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

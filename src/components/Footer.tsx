import React from "react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-heading text-4xl mb-4 text-primary">AÇAÍ NO KILO</h2>
        <p className="font-sans text-background/60 mb-12">
          Nutrir a vida com emoções positivas.
        </p>

        <div className="flex justify-center gap-8 mb-12">
          <a href="#" className="font-sans text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Termos</a>
          <a href="#" className="font-sans text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Privacidade</a>
          <a href="#" className="font-sans text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Contato</a>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center opacity-50 font-sans text-sm">
          <span>&copy; {new Date().getFullYear()} Açaí no Kilo. Todos os direitos reservados.</span>
          <span className="mt-4 md:mt-0">Feito com paixão.</span>
        </div>
      </div>
    </footer>
  );
}

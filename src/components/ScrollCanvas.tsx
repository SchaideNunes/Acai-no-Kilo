"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  const frameCount = 120;
  const currentFrame = (index: number) =>
    `/assets/sequence/frame_${index.toString().padStart(4, "0")}.jpg`;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    // Ajusta o tamanho visual do canvas, preservando a proporção da resolução (1080x608)
    canvas.width = 1080;
    canvas.height = 608;

    const images: HTMLImageElement[] = [];
    let loadedImages = 0;

    // State object para gsap manipular
    const imageInfo = {
      frame: 0,
    };

    // Preload images
    const loadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
          loadedImages++;
          if (loadedImages === frameCount) {
            setImagesPreloaded(true);
          }
          // Draw first frame as soon as it's ready
          if (i === 1 && context) {
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
          }
        };
        images.push(img);
      }
    };

    loadImages();

    // Scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=2000", 
        scrub: 0.8, 
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(imageInfo, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: () => {
        const frameIndex = Math.round(imageInfo.frame);
        const img = images[frameIndex];
        if (img && img.complete && context) {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full h-screen bg-secondary overflow-hidden flex items-center">
      {/* Background Decorativo - Mais sutil */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 skew-x-[-10deg] translate-x-20" />

      <div className="max-w-[1400px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Lado Esquerdo: Conteúdo Textual */}
        <div className="flex flex-col gap-6">
          <div className="inline-block bg-primary text-secondary font-heading text-2xl px-4 py-1 rounded-sm w-fit -rotate-2">
            CONCEITO EXCLUSIVO
          </div>
          
          <h2 className="text-6xl md:text-8xl font-heading text-white/90 leading-none uppercase">
            A CULTURA DO AÇAÍ COMO <span className="text-primary block">SUPERFOOD</span>
          </h2>
          
          <p className="font-sans text-xl text-white/70 max-w-lg leading-relaxed">
            Não vendemos apenas açaí, entregamos uma experiência de nutrição e energia. Nosso processo mantém todas as propriedades antioxidantes da fruta.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {[
              { title: "100% Natural", desc: "Sem corantes ou conservantes artificiais" },
              { title: "Energia Pura", desc: "O combustível ideal para o seu dia a dia" },
              { title: "Antioxidante", desc: "Rico em nutrientes que combatem radicais livres" },
              { title: "Sustentável", desc: "Extração consciente que preserva a Amazônia" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1 border-l-2 border-primary/50 pl-4 bg-white/[0.03] p-4 rounded-r-lg">
                <span className="font-heading text-2xl text-primary/80 uppercase">{item.title}</span>
                <span className="font-sans text-sm text-white/60">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lado Direito: Container da Animação */}
        <div className="relative w-full aspect-video lg:aspect-square max-w-[600px] mx-auto lg:mx-0">
          <div className="absolute inset-0 bg-black/40 rounded-3xl border border-white/20 overflow-hidden shadow-2xl z-0">
            <canvas
              ref={canvasRef}
              className="w-full h-full object-cover opacity-100"
              style={{ display: 'block' }}
            />
          </div>
          
          {/* Elementos Decorativos ao redor do Canvas */}
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" />
        </div>
      </div>
    </div>
  );
}

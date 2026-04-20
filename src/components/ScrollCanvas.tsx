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
        start: "top 60%",    // Começa quando o topo da seção chega a 60% da tela (mais pra baixo)
        end: "bottom 20%",   // Termina quando o fundo da seção chega a 20% do topo
        scrub: 1.5,          // Um pouco mais suave
        pin: false,
      },
    });

    tl.to(imageInfo, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: () => {
        const frameIndex = Math.round(imageInfo.frame);
        const img = images[frameIndex];
        // Log para debug interno se necessário
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
    <div ref={wrapperRef} className="relative w-full min-h-fit lg:h-screen bg-[#3b1533] overflow-hidden flex items-center py-20">
      {/* Background Decorativo - Centralizado */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 w-full flex flex-col items-center text-center relative z-10 gap-10">
        
        {/* Topo: Títulos */}
        <div className="flex flex-col items-center gap-4">
          <div className="inline-block bg-primary text-secondary font-heading text-xl md:text-2xl px-4 py-1 rounded-sm w-fit -rotate-2">
            CONCEITO EXCLUSIVO
          </div>
          
          <h2 className="text-fluid-h2 font-heading text-white/90 leading-none uppercase">
            A CULTURA DO AÇAÍ COMO <span className="text-primary block sm:inline sm:ml-2">SUPERFOOD</span>
          </h2>
          
          <p className="text-sm md:text-xl font-sans text-white/70 max-w-2xl leading-relaxed">
            Não vendemos apenas açaí, entregamos uma experiência de nutrição e energia. Nosso processo mantém todas as propriedades antioxidantes da fruta.
          </p>
        </div>

        {/* Centro: Container da Animação (Maior destaque) */}
        <div className="relative w-full aspect-video max-w-[800px] mx-auto group">
          <div className="absolute inset-0 bg-black/40 rounded-3xl border border-white/20 overflow-hidden shadow-2xl z-0">
            <canvas
              ref={canvasRef}
              className="w-full h-full object-cover opacity-100"
              style={{ display: 'block' }}
            />
          </div>
          {/* Elementos Decorativos de Fundo do Canvas */}
          <div className="absolute -inset-4 bg-primary/10 rounded-[40px] blur-3xl -z-10 group-hover:bg-primary/20 transition-colors" />
        </div>

        {/* Base: Benefícios em Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {[
            { title: "100% Natural", desc: "Sem conservantes" },
            { title: "Energia Pura", desc: "Para o seu dia" },
            { title: "Antioxidante", desc: "Rico em nutrientes" },
            { title: "Sustentável", desc: "Preserva a Amazônia" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1 border-t-2 border-primary/50 pt-4 bg-white/[0.03] p-4 rounded-b-lg">
              <span className="font-heading text-xl md:text-2xl text-primary/80 uppercase leading-none">{item.title}</span>
              <span className="font-sans text-[10px] md:text-xs text-white/60">{item.desc}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

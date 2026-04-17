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
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedImages++;
        if (loadedImages === frameCount) {
          setImagesPreloaded(true);
        }
      };
      images.push(img);
    }

    // Desenha o primeiro frame enquanto as imagens carregam ou quando finalizar
    images[0].onload = () => {
      context.drawImage(images[0], 0, 0, canvas.width, canvas.height);
    };

    // Ocultar a scrollbar ou ajustá-la dependendo de como vamos renderizar isso
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=3000", // Aumente conforme a duração que quiser o scroll fixo (pinned)
        scrub: 0.5,
        pin: true,
      },
    });

    tl.to(imageInfo, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: () => {
        const frameIndex = Math.round(imageInfo.frame);
        if (images[frameIndex] && images[frameIndex].complete) {
          context.clearRect(0, 0, canvas.width, canvas.height);
          // Manter o desenho centrado ou "cover"
          context.drawImage(images[frameIndex], 0, 0, canvas.width, canvas.height);
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full h-screen bg-foreground overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 mix-blend-screen opacity-60">
        <canvas
          ref={canvasRef}
          className="w-full h-full max-w-[1200px] object-contain opacity-80"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 p-4">
        <h2 className="text-4xl md:text-5xl font-heading text-background uppercase mt-[-20px] bg-secondary/80 backdrop-blur-sm px-6 py-2 rounded-base">
          A CULTURA DO AÇAÍ COMO
        </h2>
        <h1 className="text-[100px] md:text-[180px] leading-none font-heading font-black text-primary tracking-tighter text-center uppercase mix-blend-normal [text-shadow:0_4px_16px_rgba(0,0,0,0.6)]">
          SUPERFOOD
        </h1>
      </div>
    </div>
  );
}

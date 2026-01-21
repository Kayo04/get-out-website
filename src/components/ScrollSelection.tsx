"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    step: "Passo 1",
    title: "Planeia a tua saída.",
    image: "/assets/Home.jpg",
    desc: "Cria eventos estruturados e substitui as conversas fragmentadas.",
    gradient: "from-[#EC4899] to-[#8B5CF6]",
  },
  {
    step: "Passo 2",
    title: "Convida e Organiza.",
    image: "/assets/Event.jpg",
    desc: "Convida amigos, partilha detalhes importantes e mantém tudo num só lugar.",
    gradient: "from-[#3B82F6] to-[#2DD4BF]",
  },
  {
    step: "Passo 3",
    title: "RELAXA E APROVEITA.",
    image: "/assets/Code.jpg",
    desc: "Vê a tua visão ganhar vida em segundos, a app trata do resto.",
    gradient: "from-[#F59E0B] to-[#EF4444]",
  }
];

export default function ScrollSelection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Estado inicial
    STEPS.forEach((_, i) => {
      if (i !== 0) {
        gsap.set(`.img-step-${i}`, { xPercent: 100, opacity: 0 });
      } else {
        gsap.set(`.img-step-${i}`, { xPercent: 0, opacity: 1 });
      }
    });

    const st = ScrollTrigger.create({
      trigger: container.current,
      start: "top top",
      end: "+=150%", // MUDANÇA: Reduzi de 300% para 150% para ser muito mais rápido
      pin: true,
      scrub: 0.5, // MUDANÇA: Reduzi de 1 para 0.5 para ser mais reativo ao scroll
      onUpdate: (self) => {
        const progress = self.progress;
        const totalSteps = STEPS.length;
        
        STEPS.forEach((_, i) => {
          const stepStart = i / totalSteps;
          const stepEnd = (i + 1) / totalSteps;
          const isCurrent = progress >= stepStart && progress <= stepEnd;

          // Slide Horizontal das Fotos
          if (isCurrent) {
            gsap.to(`.img-step-${i}`, { 
              xPercent: 0, 
              opacity: 1, 
              duration: 0.3, // MUDANÇA: Animação mais curta
              overwrite: "auto",
              ease: "none" // MUDANÇA: Linear para acompanhar o scroll exato
            });
          } else if (progress > stepEnd) {
            gsap.to(`.img-step-${i}`, { 
              xPercent: -100, 
              opacity: 0, 
              duration: 0.3, 
              overwrite: "auto" 
            });
          } else {
            gsap.to(`.img-step-${i}`, { 
              xPercent: 100, 
              opacity: 0, 
              duration: 0.3, 
              overwrite: "auto" 
            });
          }

          // Animação dos Textos
          gsap.to(`.text-step-${i}`, { 
            opacity: isCurrent ? 1 : 0, 
            y: isCurrent ? 0 : (progress < stepStart ? 100 : -100), 
            duration: 0.3, 
            overwrite: "auto",
            visibility: isCurrent ? "visible" : "hidden"
          });
        });
      }
    });
    return () => st.kill();
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="bg-white dark:bg-[#0f1115] transition-colors duration-700 overflow-hidden min-h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-[1600px] flex flex-row items-center justify-between px-10 gap-20">
        
        {/* LADO ESQUERDA */}
        <div className="w-1/2 relative flex justify-start items-center">
          <div className="relative w-[600px] -ml-32"> 
            <img 
              src="/assets/maofixe.png" 
              alt="Mão" 
              className="w-full h-auto relative z-30 pointer-events-none transition-all duration-700 dark:brightness-100 brightness-90 contrast-110" 
            />
            
            <div 
              className="absolute z-20 overflow-hidden bg-black"
              style={{ 
                top: '15.5%', left: '29.5%', width: '32%', height: '69.0%', 
                borderRadius: '1.8rem', opacity: 1,
              }}
            >
              {STEPS.map((item, i) => (
                <img
                  key={i}
                  src={item.image}
                  alt=""
                  className={`img-step-${i} absolute inset-0 w-full h-full object-cover`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* LADO DIREITO */}
        <div className="w-1/2 relative h-[900px] flex flex-col justify-center">
          {STEPS.map((step, i) => (
            <div 
              key={i} 
              className={`text-step-${i} absolute inset-0 flex flex-col justify-center opacity-0`}
              style={{ visibility: 'hidden' }}
            >
              <span 
                className={`text-[50px] font-[1000] uppercase tracking-wider leading-none mb-10 bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent inline-block`}
              >
                {step.step}
              </span>

              <h2 className="text-[130px] font-[1000] leading-[1.1] mb-20 tracking-normal uppercase italic text-black dark:text-white transition-colors">
                {step.title}
              </h2>

              <p className={`text-[20px] font-bold max-w-2xl leading-[1.4] pl-10 text-gray-700 dark:text-gray-400 transition-colors`}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
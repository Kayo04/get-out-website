"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    step: "Passo 1",
    title: "Planeia a tua visão",
    image: "/assets/Home.jpg",
    desc: "Cria eventos estruturados e substitui as conversas fragmentadas."
  },
  {
    step: "Passo 2",
    title: "Escolhe o Estilo",
    image: "/assets/Event.jpg",
    desc: "Seleciona entre dezenas de estilos artísticos e refinamentos."
  },
  {
    step: "Passo 3",
    title: "Gera e Partilha",
    image: "/assets/Code.jpg",
    desc: "Vê a tua visão ganhar vida em segundos e partilha com o mundo."
  }
];

export default function ScrollSelection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const st = ScrollTrigger.create({
      trigger: container.current,
      start: "top top",
      end: "+=300%",
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalSteps = STEPS.length;
        
        STEPS.forEach((_, i) => {
          const stepStart = i / totalSteps;
          const stepEnd = (i + 1) / totalSteps;
          let opacity = 0;
          if (progress >= stepStart && progress <= stepEnd) opacity = 1;
          
          // Animação das Imagens
          gsap.to(`.img-step-${i}`, { 
            opacity: opacity, 
            duration: 0.3, 
            overwrite: "auto" 
          });

          // Animação dos Textos
          gsap.to(`.text-step-${i}`, { 
            opacity: opacity, 
            y: opacity === 1 ? 0 : (progress < stepStart ? 150 : -150), 
            duration: 0.4, 
            overwrite: "auto",
            visibility: opacity > 0 ? "visible" : "hidden"
          });
        });
      }
    });
    return () => st.kill();
  }, { scope: container });

  return (
    <section 
      ref={container} 
      // bg-white para Light Mode, dark:bg-[#0a0a0a] para Night Mode
      className="bg-white dark:bg-[#0a0a0a] transition-colors duration-700 overflow-hidden min-h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-[1600px] flex flex-row items-center justify-between px-10 gap-20">
        
        {/* LADO ESQUERDO: MOCKUP E IMAGENS */}
        <div className="w-1/2 relative flex justify-start items-center">
          <div className="relative w-[600px] -ml-32"> 
            
            <img 
              src="/assets/maofixe.png" 
              alt="Mão" 
              className="w-full h-auto relative z-30 pointer-events-none transition-all duration-700 dark:brightness-100 brightness-90 contrast-110" 
            />
            
            {/* Ecrã do telemóvel */}
            <div 
              className="absolute z-20 overflow-hidden bg-black"
              style={{ 
                top: '15.5%', left: '29.5%', width: '32%', height: '69.0%', 
                borderRadius: '1.8rem', mixBlendMode: 'screen', opacity: 1,
              }}
            >
              {STEPS.map((item, i) => (
                <img
                  key={i}
                  src={item.image}
                  alt=""
                  className={`img-step-${i} absolute inset-0 w-full h-full object-cover opacity-0`}
                  style={{ opacity: i === 0 ? 1 : 0 }}
                />
              ))}
            </div>

            {/* Reflexo de Vidro */}
            <div 
              className="absolute z-40 pointer-events-none"
              style={{
                top: '15.5%', left: '29.5%', width: '32%', height: '69.0%', borderRadius: '1.8rem',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.08) 100%)',
              }}
            />
          </div>
        </div>

        {/* LADO DIREITO: TEXTOS GIGANTES */}
        <div className="w-1/2 relative h-[850px] flex flex-col justify-center">
          {STEPS.map((step, i) => (
            <div 
              key={i} 
              className={`text-step-${i} absolute inset-0 flex flex-col justify-center opacity-0`}
              style={{ visibility: 'hidden' }}
            >
              <span 
                className="text-[50px] font-[1000] uppercase tracking-tighter leading-none mb-2 bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent inline-block"
              >
                {step.step}
              </span>

              {/* TÍTULO: ULTRA CARREGADO E MAIOR AINDA */}
              <h2 className="text-[160px] font-[1000] leading-[0.75] mb-12 tracking-tighter uppercase italic text-black dark:text-white transition-colors">
                {step.title}
              </h2>

              {/* DESCRIÇÃO COM BORDA ROSA */}
              <p className="text-[20px] font-bold max-w-2xl leading-[1.2] pl-10 text-gray-700 dark:text-gray-400 transition-colors">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
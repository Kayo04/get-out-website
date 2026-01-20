"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image"; // Otimização de imagem do Next.js

const STEPS = [
  {
    step: "Passo 1",
    title: "Planeia a tua visão",
    desc: "Cria eventos estruturados e substitui as conversas fragmentadas.",
    color: "#8B5CF6",
    image: "/Home.jpg", // Caminho relativo à pasta public
  },
  {
    step: "Passo 2",
    title: "Escolhe o Estilo",
    desc: "Seleciona entre dezenas de estilos artísticos e refinamentos.",
    color: "#EC4899",
    image: "/assets/Event.jpg",
  },
  {
    step: "Passo 3",
    title: "Gera e Partilha",
    desc: "Vê a tua visão ganhar vida em segundos e partilha com o mundo.",
    color: "#3B82F6",
    image: "/assets/Code.jpg",
  },
];

export default function ScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <main className="bg-white">
      {/* Espaçador Inicial */}
      <div className="h-screen flex items-center justify-center bg-slate-50">
        <h1 className="text-2xl text-slate-400">Scroll para ver o efeito ↓</h1>
      </div>

      <section ref={containerRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-10 items-center">
            
            {/* Mockup do Telemóvel */}
            <div className="relative flex justify-center items-center h-[600px]">
              
              {/* Moldura */}
              <div className="relative w-[280px] h-[570px] bg-black rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden z-10">
                {STEPS.map((step, i) => {
                  const start = i / STEPS.length;
                  const end = (i + 1) / STEPS.length;
                  
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  const opacity = useTransform(smoothProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);

                  return (
                    <motion.div key={i} className="absolute inset-0" style={{ opacity }}>
                      <Image 
                        src={step.image} 
                        alt={step.title} 
                        fill 
                        className="object-cover"
                      />
                    </motion.div>
                  );
                })}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20" />
              </div>

              {/* Mão (Sobreposta) */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-[48%] w-[420px] z-30 pointer-events-none">
                <Image 
                  src="/assets/maofixe.png" 
                  alt="Mão" 
                  width={420} 
                  height={500} 
                  priority
                />
              </div>
            </div>

            {/* Coluna de Texto */}
            <div className="relative h-[400px]">
              {STEPS.map((step, i) => {
                const start = i / STEPS.length;
                const end = (i + 1) / STEPS.length;

                // eslint-disable-next-line react-hooks/rules-of-hooks
                const opacity = useTransform(smoothProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const y = useTransform(smoothProgress, [start, start + 0.1, end - 0.1, end], [60, 0, 0, -60]);

                return (
                  <motion.div key={i} className="absolute inset-0 flex flex-col justify-center" style={{ opacity, y }}>
                    <span className="px-4 py-1 rounded-full text-white text-xs font-bold w-fit mb-4" style={{ backgroundColor: step.color }}>
                      {step.step}
                    </span>
                    <h2 className="text-5xl font-black text-slate-900">{step.title}</h2>
                    <p className="mt-6 text-lg text-slate-500">{step.desc}</p>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      <div className="h-screen bg-slate-900" />
    </main>
  );
}
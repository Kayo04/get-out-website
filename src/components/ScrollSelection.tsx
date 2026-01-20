"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";

const STEPS = [
  {
    step: "Passo 1",
    title: "Planeia a tua visão",
    desc: "Começa por criar eventos estruturados que substituem as conversas fragmentadas de grupo. Define o local, a hora e os detalhes importantes num só sítio, garantindo que toda a gente está na mesma página desde o primeiro momento.",
    color: "#8B5CF6",
    image: "/assets/Home.jpg",
  },
  {
    step: "Passo 2",
    title: "Escolhe o Estilo",
    desc: "Personaliza a aparência do teu evento selecionando entre dezenas de estilos artísticos e refinamentos visuais. Torna cada convite único e memorável, adaptado à vibe da tua festa ou encontro.",
    color: "#EC4899",
    image: "/assets/Event.jpg",
  },
  {
    step: "Passo 3",
    title: "Gera e Partilha",
    desc: "Vê a tua visão ganhar vida em segundos. Com um clique, gera o evento e partilha o link com o mundo ou apenas com os teus amigos próximos. Gere as confirmações em tempo real e aproveita o momento.",
    color: "#3B82F6",
    image: "/assets/Code.jpg",
  },
];

export default function ScrollSection() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to handle scroll and update active step
  useEffect(() => {
    const handleScroll = () => {
      const stepElements = document.querySelectorAll(".scroll-step");
      stepElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        // Check if the element is in the vertical center of the viewport
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--surface)' }}>
      {/* 2-Column Layout */}

      <section className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 gap-0 items-start">
          
          {/* Left Column: Sticky Phone */}
          {/* Direct sticky child of the grid container */}
          <div className="sticky top-[80px] h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
                {/* Phone Component */}
                <div className="relative w-[300px] h-[600px] flex items-center justify-center flex-shrink-0 scale-90 lg:scale-100 z-40">
                  
                {/* Hand Background */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                  <Image 
                    src="/assets/maofixe.png" 
                    alt="Hand holding phone" 
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>

                {/* Screen Content (Foreground) */}
                <div 
                  className="absolute w-[220px] h-[460px] bg-black rounded-[1.5rem] overflow-hidden z-20"
                  style={{ top: '70px' }} // Adjusted top to sit inside the phone screen area
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-full h-full"
                    >
                      <Image 
                        src={STEPS[activeStep].image} 
                        alt={STEPS[activeStep].title} 
                        fill 
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
                </div>
          </div>

          {/* Right Column: Scrolling Text */}
          <div className="relative z-10 flex flex-col justify-center">
             {/* Mobile: Phone shows up here or above? Usually Hidden or static on mobile. 
                 The user asked for a specific layout, assuming desktop for "Image on Left, Text on Right".
                 I'll simplify mobile to just show text blocks for now. */}
            
            {STEPS.map((step, index) => (
              <div 
                key={index} 
                className="scroll-step min-h-screen flex flex-col justify-center p-8 lg:p-16"
              >
                <div 
                  className="inline-block px-4 py-1 rounded-full text-white text-sm font-bold mb-6 w-fit" 
                  style={{ backgroundColor: step.color }}
                >
                  {step.step}
                </div>
                <h2 className="text-4xl lg:text-6xl font-black mb-6" style={{ color: 'var(--text-main)', lineHeight: 1.1 }}>
                  {step.title}
                </h2>
                <p className="text-lg lg:text-xl leading-relaxed max-w-lg" style={{ color: 'var(--text-dim)' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
      
      {/* Spacer for bottom */}
      <div className="h-[20vh]" />
    </div>
  );
}

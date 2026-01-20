"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import PhoneModel from "./PhoneModel";

import { useTheme } from "@/context/ThemeContext";

export default function AppDownloadSection() {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <section 
      style={{ 
        backgroundColor: 'var(--surface)', 
        color: 'var(--text-main)', 
        padding: '60px 20px 0 20px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        position: 'relative',
        minHeight: 'auto',
        transition: 'background-color 0.3s ease'
      }}
    >
      {/* TEXTO E BOTÕES */}
      <div style={{ zIndex: 10, position: 'relative', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '24px' }}>
          Download GetOut <br /> Social and Connect Today
        </h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '18px', maxWidth: '550px', margin: '0 auto 40px auto' }}>
          Download GetOut now to start connecting with like-minded people and enjoy a seamless social experience!
        </p>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <a href="#" style={{ height: '42px' }}>
            <img src="https://developer.android.com/images/brand/en_generic_rgb_wo_45.png" alt="Google Play" style={{ height: '100%' }} />
          </a>
          <a href="#" style={{ height: '42px' }}>
            <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" alt="App Store" style={{ height: '100%' }} />
          </a>
        </div>
      </div>

      {/* ÁREA 3D */}
      <div style={{ width: '100vw', height: '650px', position: 'relative' }}>
        <Canvas camera={{ position: [0, 0, 25], fov: 35 }} style={{ pointerEvents: 'none' }}>
          <ambientLight intensity={isDarkMode ? 0.8 : 1.5} />
          <pointLight position={[10, 10, 10]} intensity={2} />
          
          <Suspense fallback={null}>
            <Center>
              <group scale={1.3} position={[0, -0.5, 0]}> 
                <group position={[-6.5, -0.5, -3]} rotation={[0, 0.5, 0.1]}>
                  <PhoneModel image="/assets/Event.jpg" />
                </group>
                <group position={[0, 0.5, 0]} rotation={[0, 0, 0]}>
                  <PhoneModel image="/assets/Home.jpg" />
                </group>
                <group position={[6.5, -0.5, -3]} rotation={[0, -0.5, -0.1]}>
                  <PhoneModel image="/assets/Code.jpg" />
                </group>
              </group>
            </Center>
            <Environment preset="city" />
          </Suspense>
        </Canvas>

        {/* GRADIENTE CONDICIONAL: Só desvanece se for Dark Mode */}
        {isDarkMode && (
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '300px',
            background: 'linear-gradient(to top, var(--surface) 20%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 5
          }} />
        )}
      </div>
    </section>
  );
}
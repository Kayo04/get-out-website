"use client";

import Image from "next/image";

import PhoneScene from "@/components/PhoneScene";
import Testimonials from "@/components/Testimonials";
import AppShowcase from "@/components/AppShowcase";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Feature from "@/components/Features";
import LaunchCountdown from "@/components/Countdown";
import AppDownloadSection from "@/components/AppDownload";
import ScrollSection from "@/components/ScrollSelection";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main style={{ backgroundColor: 'var(--surface)', transition: 'background-color 0.3s ease' }}>
        {/* HERO SECTION */}
        <section style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          paddingTop: '80px',
          position: 'relative',
          overflow: 'hidden',
          // Use a variable or conditional gradient if needed, but for now lets keep it subtle or adjust opacity
        }}>
          
          <div className="container grid-2" style={{ alignItems: 'center' }}>
            
            {/* Left: Text Content */}
            <div style={{ zIndex: 10 }}>
              {/* Subtítulo em Azul */}
              <h4 style={{ 
                color: 'var(--secondary)', 
                letterSpacing: '0.05em', 
                marginLeft: '0.25em',
                marginBottom: '1em', 
                fontWeight: 700,
                fontSize: '0.9rem',
                textTransform: 'uppercase'
              }}> 
                {t.hero.subtitle}
              </h4>
              
              {/* Título Principal com quebra e cor laranja na segunda linha */}
              <h1 style={{ 
                fontSize: 'clamp(3rem, 6vw, 5rem)', 
                lineHeight: '1',
                fontWeight: 800,
                color: 'var(--text-main)',
                marginBottom: '0',
                marginTop: '0'
              }}>
                {t.hero.title_start}<br />
                <span style={{ color: 'var(--primary)' }}>{t.hero.title_end}</span>
              </h1>
              
              {/* Descrição com cor mais suave */}
              <p style={{ 
                fontSize: '1.1rem', 
                color: 'var(--text-dim)', 
                lineHeight: '1.6',
                maxWidth: '520px',
                marginBottom: '2.5rem',
                marginTop: '1rem'
              }}>
                {t.hero.description}
              </p>
              
              {/* Botões - Um Laranja e outro Azul Claro */}
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <Link href="/download" className="btn btn-primary" style={{ 
                  backgroundColor: 'var(--primary)',
                  color: '#fff',
                  padding: '16px 36px',
                  borderRadius: '12px',
                  border: 'none',
                  textDecoration: 'none',
                  fontWeight: 700,
                  boxShadow: '0 10px 20px rgba(255, 107, 0, 0.2)'
                }}>
                  {t.hero.cta_download}
                </Link>
                
                <Link href="/features" style={{ 
                  backgroundColor: 'var(--surface-secondary)',
                  color: 'var(--secondary)',
                  padding: '16px 30px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontWeight: 700,
                  transition: 'all 0.2s'
                }}>
                  {t.hero.cta_learn}
                </Link>
              </div>

              {/* Stats com design minimalista */}
              <div style={{ marginTop: '4rem', display: 'flex', gap: '50px' }}>
                   <div>
                     <h3 style={{ fontSize: '2.2rem', fontWeight: 800, margin: 0, color: 'var(--text-main)' }}>1.2M+</h3>
                     <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', margin: 0 }}>{t.hero.stats_users}</p>
                   </div>
                   <div>
                     <h3 style={{ fontSize: '2.2rem', fontWeight: 800, margin: 0, color: 'var(--text-main)' }}>85k+</h3>
                     <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', margin: 0 }}>{t.hero.stats_venues}</p>
                   </div>
              </div>
            </div>

            {/* Right: 3D Scene - Ajustado para o tamanho da imagem */}
            <div className="desktop-only" style={{ 
              height: '800px', 
              width: '100%', 
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
               <PhoneScene />
            </div>

            {/* Mobile-only static image to replace 3D model */}
            <div className="mobile-only" style={{ 
              width: '100%', 
              marginTop: '40px',
              display: 'flex', 
              justifyContent: 'center' 
            }}>
              <div style={{
                width: '280px',
                height: '580px',
                position: 'relative',
                borderRadius: '40px',
                border: '8px solid #1a1a1a',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
              }}>
                <Image 
                  src="/assets/Home.jpg" 
                  alt="App Screenshot" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

          </div>
        </section>

        <LaunchCountdown />
        <Feature/>
        <AppShowcase />
        <ScrollSection/>
        <Testimonials />
        <AppDownloadSection />
      </main>
  );
}
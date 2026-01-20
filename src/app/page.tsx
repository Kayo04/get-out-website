"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhoneScene from "@/components/PhoneScene";
import Testimonials from "@/components/Testimonials";
import AppShowcase from "@/components/AppShowcase";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Feature from "@/components/Features";
import LaunchCountdown from "@/components/Countdown";
import AppDownloadSection from "@/components/AppDownload";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#fff' }}>
        {/* HERO SECTION */}
        <section style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          paddingTop: '80px',
          position: 'relative',
          overflow: 'hidden',
          background: 'radial-gradient(circle at 90% 20%, rgba(255, 107, 0, 0.05) 0%, transparent 40%)'
        }}>
          
          <div className="container grid-2" style={{ alignItems: 'center' }}>
            
            {/* Left: Text Content */}
            <div style={{ zIndex: 10 }}>
              {/* Subtítulo em Azul */}
              <h4 style={{ 
                color: '#0066CC', 
                letterSpacing: '0.05em', 
                marginBottom: '1.5rem', 
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
                color: '#1A1F2C',
                marginBottom: '1.5rem'
              }}>
                {t.hero.title_start} <br />
                <span style={{ color: '#FF6B00' }}>{t.hero.title_end}</span>
              </h1>
              
              {/* Descrição com cor mais suave */}
              <p style={{ 
                fontSize: '1.1rem', 
                color: '#64748B', 
                lineHeight: '1.6',
                maxWidth: '520px',
                marginBottom: '2.5rem'
              }}>
                {t.hero.description}
              </p>
              
              {/* Botões - Um Laranja e outro Azul Claro */}
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <Link href="/download" className="btn btn-primary" style={{ 
                  backgroundColor: '#FF6B00',
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
                  backgroundColor: '#F0F7FF',
                  color: '#0066CC',
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
                     <h3 style={{ fontSize: '2.2rem', fontWeight: 800, margin: 0, color: '#1A1F2C' }}>1.2M+</h3>
                     <p style={{ color: '#64748B', fontSize: '0.9rem', margin: 0 }}>{t.hero.stats_users}</p>
                   </div>
                   <div>
                     <h3 style={{ fontSize: '2.2rem', fontWeight: 800, margin: 0, color: '#1A1F2C' }}>85k+</h3>
                     <p style={{ color: '#64748B', fontSize: '0.9rem', margin: 0 }}>{t.hero.stats_venues}</p>
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

          </div>
        </section>

        <LaunchCountdown />
        <Feature/>
        <AppShowcase />
        <Testimonials />
        <AppDownloadSection />
      </main>
      <Footer />
    </>
  );
}
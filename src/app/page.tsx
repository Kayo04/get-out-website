"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhoneScene from "@/components/PhoneScene";
import Testimonials from "@/components/Testimonials";
import AppShowcase from "@/components/AppShowcase";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <section style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          paddingTop: '120px',
          position: 'relative',
          overflow: 'hidden'
        }}>
           {/* Background Light Effects */}
           <div style={{
             position: 'absolute', top: '20%', right: '-10%', 
             width: '800px', height: '800px',
             background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)',
             opacity: 0.2, pointerEvents: 'none'
           }} />

          <div className="container grid-2">
            
            {/* Left: Text Content */}
            <div style={{ zIndex: 10 }}>
              <h4 style={{ color: 'var(--secondary)', letterSpacing: '0.2em', marginBottom: '1rem', fontWeight: 800 }}>{t.hero.subtitle}</h4>
              <h1>
                {t.hero.title_start} <br />
                <span className="text-gradient">{t.hero.title_end}</span>
              </h1>
              <p>
                {t.hero.description}
              </p>
              
              <div style={{ marginTop: '3rem', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <Link href="/download" className="btn btn-primary">{t.hero.cta_download}</Link>
                <Link href="/features" className="btn btn-blue">{t.hero.cta_learn}</Link>
              </div>

              <div style={{ marginTop: '4rem', display: 'flex', gap: '40px' }}>
                   <div>
                     <h3 style={{ fontSize: '2rem', marginBottom: '0', color: 'var(--text-main)' }}>1.2M+</h3>
                     <span style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{t.hero.stats_users}</span>
                   </div>
                   <div>
                     <h3 style={{ fontSize: '2rem', marginBottom: '0', color: 'var(--text-main)' }}>85k+</h3>
                     <span style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{t.hero.stats_venues}</span>
                   </div>
              </div>
            </div>

            {/* Right: 3D Scene */}
            <div className="desktop-only" style={{ height: '700px', width: '100%', position: 'relative' }}>
               <PhoneScene />
            </div>

          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <h2>{t.features.title}</h2>
              <p style={{ margin: '0 auto' }}>{t.features.subtitle}</p>
            </div>

            <div className="grid-2" style={{ alignItems: 'stretch' }}>
               {/* Mascot Feature Card */}
               <div className="glass-card" style={{ padding: 0, overflow: 'hidden', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <Image 
                    src="/mascote-com-luz.jpg" 
                    alt="Mascot" 
                    width={600} 
                    height={600} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
                 />
                 <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '30px', background: 'linear-gradient(to top, black, transparent)' }}>
                    <h3 style={{ color: 'white' }}>{t.features.mascot_title}</h3>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'white' }}>{t.features.mascot_desc}</p>
                 </div>
               </div>

               {/* Feature Grid */}
               <div style={{ display: 'grid', gap: '30px' }}>
                 <div className="glass-card">
                   <h3 style={{ color: 'var(--secondary)' }}>{t.features.heatmaps_title}</h3>
                   <p>{t.features.heatmaps_desc}</p>
                 </div>
                 <div className="glass-card">
                   <h3 style={{ color: 'var(--primary)' }}>{t.features.perks_title}</h3>
                   <p>{t.features.perks_desc}</p>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* APP SHOWCASE (ORGANIZE & ATTEND) */}
        <AppShowcase />

        {/* TESTIMONIALS */}
        <Testimonials />

      </main>
      <Footer />
    </>
  );
}

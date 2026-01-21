"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function DownloadPage() {
  const { t } = useLanguage();

  return (
    <main style={{ 
      paddingTop: 'var(--nav-height)', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'radial-gradient(circle at 15% 50%, rgba(0, 112, 243, 0.08) 0%, transparent 25%), radial-gradient(circle at 85% 30%, rgba(255, 107, 0, 0.08) 0%, transparent 25%)'
    }}>
      
      <div className="container grid-2" style={{ alignItems: 'center', position: 'relative', zIndex: 1 }}>
        
        {/* Lado Esquerdo */}
        <div>
          <div style={{ 
            display: 'inline-block', 
            padding: '8px 16px', 
            background: 'rgba(0, 112, 243, 0.1)', 
            color: '#0070f3', 
            borderRadius: '20px', 
            fontWeight: '700', 
            fontSize: '0.9rem', 
            marginBottom: '20px',
            border: '1px solid rgba(0, 112, 243, 0.2)'
          }}>
            Available Now
          </div>

          <h1 style={{ 
            fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
            fontWeight: '800', 
            lineHeight: '1.1', 
            marginBottom: '20px',
            background: 'linear-gradient(to right, var(--text-main), var(--text-dim))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'var(--text-main)'
          }}>
            {t.download.title_1} <br />
            <span style={{ color: 'var(--primary)', WebkitTextFillColor: 'initial' }}>{t.download.title_2}</span>
          </h1>

          <p style={{ 
            fontSize: '1.25rem', 
            color: 'var(--text-dim)', 
            marginBottom: '1.5rem', 
            lineHeight: '1.6', 
            maxWidth: '500px' 
          }}>
            {t.download.desc}
          </p>

          {/* --- A LINHA DE TEXTO COM EFEITO SHINE --- */}
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="text-shine" style={{ fontSize: '1.1rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Pronto para começar a tua aventura?
            </span>
          </div>
          {/* ----------------------------------------- */}
          
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href="#" className="hover-lift">
               <img 
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" 
                  alt="Download on the App Store" 
                  style={{ height: '55px', borderRadius: '8px', boxShadow: '0 4px 14px 0 rgba(0,0,0,0.1)' }}
               />
            </a>
            <a href="#" className="hover-lift">
               <img 
                  src="https://developer.android.com/images/brand/en_generic_rgb_wo_45.png" 
                  alt="Get it on Google Play" 
                  style={{ height: '55px', borderRadius: '8px', boxShadow: '0 4px 14px 0 rgba(0,0,0,0.1)' }}
               />
            </a>
          </div>

          <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ display: 'flex' }}>
                  {[1, 2, 3, 4].map((_, i) => (
                      <div key={i} style={{ 
                          width: '35px', 
                          height: '35px', 
                          borderRadius: '50%', 
                          background: `url(https://randomuser.me/api/portraits/men/${20 + i}.jpg)`,
                          backgroundSize: 'cover',
                          border: '2px solid var(--surface)',
                          marginLeft: i > 0 ? '-10px' : 0
                      }}></div>
                  ))}
              </div>
              <div style={{ color: 'var(--text-dim)', fontSize: '0.9rem', fontWeight: '500' }}>
                  Join <strong>1.2M+</strong> users today.
              </div>
          </div>
        </div>
        
        {/* Conteúdo da Direita (QR Card) - Mantido igual */}
        <div style={{ height: '600px', width: '100%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: '1000px' }}>
           <div style={{ position: 'absolute', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(0, 112, 243, 0.3) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0 }} />

           <div className="hover-lift" style={{ width: '320px', padding: '40px', background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', transform: 'rotateY(-5deg) rotateX(5deg)', transition: 'transform 0.3s ease', zIndex: 2, position: 'relative' }}>
               <div style={{ width: '240px', height: '240px', background: '#fff', padding: '10px', borderRadius: '20px', overflow: 'hidden' }}>
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://getout.app" alt="Scan" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
               </div>
               <div style={{ textAlign: 'center' }}>
                   <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-main)' }}>Scan to Install</h3>
                   <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Open camera to download app</p>
               </div>
           </div>
        </div>
      </div>
    </main>
  );
}
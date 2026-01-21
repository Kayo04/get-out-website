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
          {/* Left Content */}
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
              color: 'var(--text-main)' // Fallback
            }}>
              {t.download.title_1} <br />
              <span style={{ color: 'var(--primary)', WebkitTextFillColor: 'initial' }}>{t.download.title_2}</span>
            </h1>

            <p style={{ 
              fontSize: '1.25rem', 
              color: 'var(--text-dim)', 
              marginBottom: '3rem', 
              lineHeight: '1.6', 
              maxWidth: '500px' 
            }}>
              {t.download.desc}
            </p>
            
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
          
          {/* Right Content - Premium QR Card */}
          <div style={{ 
              height: '600px', 
              width: '100%', 
              position: 'relative', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              perspective: '1000px'
          }}>
             {/* Glow effect */}
             <div style={{
                 position: 'absolute',
                 width: '350px',
                 height: '350px',
                 background: 'radial-gradient(circle, rgba(0, 112, 243, 0.3) 0%, transparent 70%)',
                 filter: 'blur(80px)',
                 zIndex: 0
             }} />

             {/* 3D Floating Card */}
             <div 
                className="hover-lift"
                style={{
                  width: '320px',
                  padding: '40px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '20px',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  transform: 'rotateY(-5deg) rotateX(5deg)',
                  transition: 'transform 0.3s ease',
                  zIndex: 2,
                  position: 'relative'
             }}>
                 <div style={{
                     width: '240px',
                     height: '240px',
                     background: '#fff',
                     padding: '10px',
                     borderRadius: '20px',
                     overflow: 'hidden'
                 }}>
                    {/* Since we can't easily rely on the generated image path being permanent or correct in code for the user, 
                        I will use a standard QR code placeholder API that is reliable, or the generated one if copied. 
                        For robustness, I will use a reliable high-res QR API for the specific 'https://getout.app' URL. 
                    */}
                    <img 
                        src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://getout.app&color=000000&bgcolor=ffffff&margin=10" 
                        alt="Scan to Download"
                        style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '10px' }}
                    />
                 </div>

                 <div style={{ textAlign: 'center' }}>
                     <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '5px', color: 'var(--text-main)' }}>Scan to Install</h3>
                     <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Open camera to download app</p>
                 </div>

                 <div style={{ display: 'flex', gap: '15px', color: 'var(--text-dim)' }}>
                    {/* Simple Icons */}
                    <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.5 1.3 0 2.52.88 3.31.88.78 0 2.26-.91 3.81-.89 1.3.05 2.5.53 3.35 1.44-3.58 1.47-3.3 5.46.2 6.82zm-6.07-15c-.25-1.59 1.3-3.18 2.84-3.48.24 1.74-1.54 3.23-2.84 3.48z"/></svg>
                    </div>
                    <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 17.5l5.8-5.8c.2-.2.5-.2.7 0l2.3 2.3 5.8-5.8c.2-.2.5-.2.7 0l2 2"/></svg>
                        {/* Android Icon Placeholder - simple path */}
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style={{position:'absolute', opacity: 0}}>
                            {/* Real Android Path */}
                        </svg>
                        <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>A</span>
                    </div>
                 </div>
             </div>
          </div>
        </div>
      </main>
  );
}

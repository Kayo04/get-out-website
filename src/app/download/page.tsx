"use client";


import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function DownloadPage() {
  const { t } = useLanguage();

  return (
      <main style={{ paddingTop: 'var(--nav-height)', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h1>{t.download.title_1} <span style={{ color: 'var(--accent)' }}>{t.download.title_2}</span></h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
              {t.download.desc}
            </p>
            
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" style={{ minWidth: '200px' }}>
                {t.download.btn_ios}
              </button>
              <button className="btn btn-glass" style={{ minWidth: '200px', border: '2px solid #ddd', background: 'transparent' }}>
                {t.download.btn_android}
              </button>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center' }}>
             {/* Use the generated premium app screen here */}
             <div style={{ 
               width: '300px', 
               height: '600px', 
               position: 'relative', 
               border: '10px solid #222', 
               borderRadius: '40px',
               overflow: 'hidden',
               boxShadow: '0 0 50px rgba(157, 0, 255, 0.3)'
             }}>
                <Image 
                  src="/assets/app-de-frente.png" 
                  alt="App Interface" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
             </div>
          </div>
        </div>
      </main>
  );
}

"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function AppScreens() {
  const { t } = useLanguage();

  // Placeholders for now - ideally these would be real screenshots
  const screens = [
    { title: "Event Feed", color: "var(--surface-secondary)" },
    { title: "Ticket QR", color: "rgba(0,102,204,0.1)" },
    { title: "Chat Group", color: "var(--surface-tertiary)" }
  ];

  return (
    <section className="section" style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.5))' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2>{t.app_screens ? t.app_screens.title : "Interface Preview"}</h2>
          <p>{t.app_screens ? t.app_screens.subtitle : "Designed for speed and clarity."}</p>
        </div>

        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '40px', 
            overflowX: 'auto', 
            paddingBottom: '40px',
            maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
        }}>
            {screens.map((screen, index) => (
                <div key={index} style={{ 
                    flex: '0 0 280px', 
                    height: '580px', 
                    background: screen.color, 
                    borderRadius: '40px', 
                    border: '4px solid #333',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                }}>
                    {/* Fake UI Header */}
                    <div style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <div style={{ width: '60px', height: '6px', background: '#333', borderRadius: '10px', margin: '0 auto 10px auto' }}></div>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>9:41</span>
                    </div>
                    {/* Fake UI Content */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-dim)', fontSize: '1.2rem' }}>
                        {screen.title}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";

import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      // No modo claro é branco, no dark é preto
      backgroundColor: 'var(--surface)', 
      overflow: 'hidden',
      transition: 'background-color 0.3s ease'
    }}>
      
      {/* EFEITO DE TRANSIÇÃO (FADE-OUT BRANCO) - SÓ APARECE NO DARK MODE */}
      {isDarkMode && (
        <div 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '300px', // Altura do gradiente de transição
            background: 'linear-gradient(to bottom, #FFFFFF 0%, rgba(255,255,255,0) 100%)',
            zIndex: 1,
            opacity: 0.15 // Ajusta a intensidade do "fade" aqui
          }} 
        />
      )}

      {/* GLOW EFFECT (Apenas no Dark Mode para dar profundidade) */}
      {isDarkMode && (
        <div 
          style={{ 
            position: 'absolute',
            top: '-100px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '1000px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
            zIndex: 2
          }} 
        />
      )}

      <footer 
        style={{ 
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '120px 20px',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        
        {/* LOGO - Cor muda conforme o modo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill={isDarkMode ? "white" : "black"}>
            <path d="M12 2L2 22H22L12 2Z" />
          </svg>
          <span style={{ 
            color: isDarkMode ? 'white' : 'black', 
            fontSize: '24px', 
            fontWeight: 'bold' 
          }}>GetOut</span>
        </div>

        {/* SLOGAN - Cor muda conforme o modo */}
        <h3 style={{ 
          color: isDarkMode ? 'white' : '#111', 
          textAlign: 'center', 
          fontSize: '22px', 
          fontWeight: '500', 
          marginBottom: '40px'
        }}>
          Empower Your Social Connections <br /> with GetOut App
        </h3>

        {/* BOTÃO DE EMAIL */}
        <a 
          href="mailto:hello@getout.com"
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px',
            backgroundColor: isDarkMode ? 'var(--surface-secondary)' : 'rgba(0,0,0,0.05)',
            border: `1px solid ${isDarkMode ? 'var(--surface-tertiary)' : 'rgba(0,0,0,0.1)'}`,
            padding: '14px 32px', 
            borderRadius: '12px',
            color: 'var(--text-main)',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: '500',
            marginBottom: '70px',
            transition: 'all 0.3s ease'
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={isDarkMode ? "white" : "black"} strokeWidth="2">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          hello@getout.com
        </a>

        {/* LINKS */}
        <nav style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '35px' }}>
          {['Benefits', 'Features', 'Pricing', 'Testimonials', 'FAQ', 'Waitlist'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              style={{ 
                color: isDarkMode ? '#888' : '#666', 
                textDecoration: 'none', 
                fontSize: '13px', 
                fontWeight: '600', 
                textTransform: 'uppercase', 
                letterSpacing: '1.5px' 
              }}
            >
              {item}
            </Link>
          ))}
        </nav>

        <p style={{ color: isDarkMode ? '#444' : '#999', fontSize: '12px', marginTop: '60px' }}>
          © 2026 GetOut Social. All rights reserved.
        </p>

      </footer>
    </div>
  );
}
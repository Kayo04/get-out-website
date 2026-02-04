"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDarkMode = theme === 'dark';

  // Estilo base para os botões circulares das redes sociais
  const socialButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '45px',
    height: '45px',
    backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
    border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
    borderRadius: '50%',
    color: 'var(--text-main)',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      backgroundColor: 'var(--surface)', 
      overflow: 'hidden',
      transition: 'background-color 0.3s ease'
    }}>
      


      <footer style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 20px 40px 20px', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* LOGO E SLOGAN */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill={isDarkMode ? "white" : "black"}><path d="M12 2L2 22H22L12 2Z" /></svg>
          <span style={{ color: isDarkMode ? 'white' : 'black', fontSize: '20px', fontWeight: 'bold' }}>GetOut</span>
        </div>

        <h3 style={{ color: isDarkMode ? 'white' : '#111', textAlign: 'center', fontSize: '18px', fontWeight: '500', marginBottom: '24px', lineHeight: '1.4' }}>
          {t.footer.slogan}
        </h3>

        {/* CONTAINER DE CONTACTOS E REDES SOCIAIS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
          
          {/* BOTÃO DE EMAIL */}
          <a href="mailto:contact@getoutapp.pt" style={{ 
            display: 'flex', alignItems: 'center', gap: '10px',
            backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
            border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
            padding: '10px 24px', borderRadius: '12px', color: 'var(--text-main)', textDecoration: 'none', fontSize: '14px', fontWeight: '500'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            contact@getoutapp.pt
          </a>

          {/* INSTAGRAM */}
          <a href="#" style={socialButtonStyle} aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>

          {/* X (Twitter) */}
          <a href="#" style={socialButtonStyle} aria-label="X">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z"/></svg>
          </a>

          {/* WHATSAPP */}
          <a href="#" style={socialButtonStyle} aria-label="WhatsApp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </a>
        </div>

        {/* LINKS DE NAVEGAÇÃO */}
        <nav style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '25px', marginBottom: '40px' }}>
          <Link href="/features" style={{ color: isDarkMode ? '#888' : '#666', textDecoration: 'none', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {t.footer.links.features}
          </Link>
          <Link href="/pricing" style={{ color: isDarkMode ? '#888' : '#666', textDecoration: 'none', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {t.footer.links.pricing}
          </Link>
          <Link href="/#testimonials" style={{ color: isDarkMode ? '#888' : '#666', textDecoration: 'none', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {t.footer.links.testimonials}
          </Link>
          <Link href="/privacy" style={{ color: isDarkMode ? '#888' : '#666', textDecoration: 'none', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {t.footer.links.privacy}
          </Link>
          <Link href="/terms" style={{ color: isDarkMode ? '#888' : '#666', textDecoration: 'none', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {t.footer.links.terms}
          </Link>
          <Link href="/cookies" style={{ color: isDarkMode ? '#888' : '#666', textDecoration: 'none', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {t.footer.links.cookies}
          </Link>
          <Link href="/complaints" style={{ color: isDarkMode ? '#888' : '#666', textDecoration: 'none', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {t.footer.links.complaints}
          </Link>
          <Link href="/disputes" style={{ color: isDarkMode ? '#888' : '#666', textDecoration: 'none', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {t.footer.links.disputes}
          </Link>
        </nav>

        <p style={{ color: isDarkMode ? '#444' : '#999', fontSize: '11px' }}>
          © 2026 GetOut Social. All rights reserved.
        </p>

        {/* RAL TEXT */}
        <p style={{ 
          color: isDarkMode ? '#444' : '#999', 
          fontSize: '10px', 
          textAlign: 'center', 
          maxWidth: '800px', 
          marginTop: '20px',
          lineHeight: '1.5'
        }}>
          {t.footer.ral_text}
        </p>

      </footer>
    </div>
  );
}
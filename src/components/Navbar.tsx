"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import LanguageDropdown from "./LanguageDropdown";
import { useState } from "react";

export default function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: 'inherit',
    transition: 'opacity 0.2s ease'
  };

  return (
    <nav className="navbar-float" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 30px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      position: 'fixed',
      
      // ALTERAÇÕES AQUI:
      top: '0',                // Mudado de '20px' para '0'
      left: '0',               // Mudado de '50%' para '0'
      transform: 'none',       // Mudado de 'translateX(-50%)' para 'none'
      width: '100%',           // Mudado de '90%' para '100%'
      borderRadius: '0',       // Mudado de '50px' para '0' (para não haver buracos nos cantos)
      
      maxWidth: 'none',        // Removido o limite para encostar nas bordas
      zIndex: 1000,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.05)' // Borda apenas em baixo
    }}>
      
      {/* 1. LOGO */}
      <Link href="/" style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '8px', zIndex: 1001 }}>
          <span style={{ fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.05em', color: '#000' }}>
            GET<span style={{ color: '#FF6B00' }}>OUT</span>
          </span>
      </Link>
      
      {/* 2. LINKS CENTRALIZADOS */}
      <div className="desktop-only" style={{ display: 'flex', gap: '25px' }}>
        {['home', 'faq', 'download', 'contact'].map((key) => (
          <Link 
            key={key} 
            href={key === 'home' ? '/' : `/${key}`} 
            style={{ ...linkStyle, fontSize: '0.85rem', fontWeight: '500', color: '#444' }}
          >
            {t.navbar[key as keyof typeof t.navbar]}
          </Link>
        ))}
      </div>

      {/* 3. AÇÕES DA DIREITA */}
      <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <LanguageDropdown />
        <Link 
          href="/download" 
          style={{ 
            ...linkStyle,
            backgroundColor: '#000',
            color: '#fff',
            padding: '10px 22px', 
            fontSize: '0.8rem',
            fontWeight: '600',
            borderRadius: '20px'
          }}
        >
          {t.navbar.download}
        </Link>
      </div>

      {/* 4. AÇÕES MOBILE */}
      <div className="mobile-only" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
         <LanguageDropdown />
         
         <button 
           onClick={() => setIsOpen(!isOpen)} 
           aria-label="Toggle Menu"
           style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '5px', zIndex: 1001, display: 'flex', flexDirection: 'column', gap: '5px' }}
         >
            <div style={{ width: '22px', height: '2px', background: '#000', transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none', transition: '0.3s' }}></div>
            <div style={{ width: '22px', height: '2px', background: '#000', opacity: isOpen ? 0 : 1, transition: '0.3s' }}></div>
            <div style={{ width: '22px', height: '2px', background: '#000', transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none', transition: '0.3s' }}></div>
         </button>
      </div>

      {/* 5. OVERLAY MENU MOBILE */}
      <div style={{ 
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', 
          background: '#FFFFFF', zIndex: 1000, 
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '25px',
          visibility: isOpen ? 'visible' : 'hidden',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0)' : 'translateY(-20px)', 
          transition: 'all 0.4s ease-in-out'
      }}>
          <Link href="/" style={{ ...linkStyle, fontSize: '1.5rem', fontWeight: '700' }} onClick={() => setIsOpen(false)}>{t.navbar.home}</Link>
          <Link href="/faq" style={{ ...linkStyle, fontSize: '1.5rem', fontWeight: '700' }} onClick={() => setIsOpen(false)}>{t.navbar.faq}</Link>
          <Link href="/download" style={{ ...linkStyle, fontSize: '1.5rem', fontWeight: '700' }} onClick={() => setIsOpen(false)}>{t.navbar.download}</Link>
          <Link href="/contact" style={{ ...linkStyle, fontSize: '1.5rem', fontWeight: '700' }} onClick={() => setIsOpen(false)}>{t.navbar.contact}</Link>
          <div style={{ width: '40px', height: '1px', background: '#eee', margin: '10px 0' }} />
          <Link 
            href="/download" 
            style={{ ...linkStyle, backgroundColor: '#FF6B00', color: '#fff', padding: '14px 35px', borderRadius: '30px', fontWeight: '700' }}
            onClick={() => setIsOpen(false)}
          >
            {t.navbar.download}
          </Link>
      </div>
    </nav>
  );
}
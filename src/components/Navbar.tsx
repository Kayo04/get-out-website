"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import LanguageDropdown from "./LanguageDropdown";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else {
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      }
      setLastScrollY(currentScrollY);
    };

    
    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const linkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: 'var(--text-main)',
    transition: 'all 0.2s ease',
  };

  return (
    <nav className="navbar-float" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '15px 40px', // Aumentado para dar mais respiro aos itens maiores
      backgroundColor: 'var(--surface)',
      backdropFilter: 'blur(10px)',
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      zIndex: 1000,
      boxShadow: 'var(--card-shadow)',
      borderBottom: '1px solid var(--surface-tertiary)',
      transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
      transition: 'transform 0.3s ease-in-out'
    }}>
      
      {/* 1. LOGO AUMENTADO */}
      <Link href="/" style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '8px', zIndex: 1001 }}>
          <span style={{ 
            fontWeight: 800, 
            fontSize: '1.8rem', // Aumentado de 1.4rem para 1.8rem
            letterSpacing: '-0.05em', 
            color: '#0070f3' // Changed to Blue
          }}>
            GET<span style={{ color: '#FF6B00' }}>OUT</span>
          </span>
      </Link>
      
      {/* 2. LINKS CENTRALIZADOS AUMENTADOS */}
      <div className="desktop-only" style={{ 
          display: 'flex', 
          gap: '35px',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)'
      }}> {/* Gap aumentado para 35px */}
        {['home', 'pricing', 'contact'].map((key) => (
          <Link 
            key={key} 
            href={key === 'home' ? '/' : `/${key}`} 
            style={{ 
                ...linkStyle, 
                fontSize: '1.05rem', // Aumentado de 0.85rem para 1.05rem
                fontWeight: '600'    // Peso da fonte aumentado para 600
            }}
            className="hover:opacity-75 transition-opacity"
          >
            {t.navbar[key as keyof typeof t.navbar]}
          </Link>
        ))}
      </div>

      {/* 3. AÇÕES DA DIREITA */}
      <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {mounted && (
          <button
            onClick={toggleTheme}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-main)',
            }}
            aria-label="Toggle Dark Mode"
          >
             {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
             ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
             )}
          </button>
        )}

        <LanguageDropdown />
        
        <Link 
          href="/download" 
          style={{ 
            ...linkStyle,
            backgroundColor: 'var(--text-main)',
            color: 'var(--surface)', 
            padding: '12px 26px',
            fontSize: '0.95rem',
            fontWeight: '700',
            borderRadius: '25px'
          }}
        >
          {t.navbar.download}
        </Link>
      </div>

      {/* 4. AÇÕES MOBILE AUMENTADAS */}
      <div className="mobile-only" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
         <LanguageDropdown />
         
         <button 
           onClick={() => setIsOpen(!isOpen)} 
           aria-label="Toggle Menu"
           style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '5px', zIndex: 1001, display: 'flex', flexDirection: 'column', gap: '6px' }}
         >
            <div style={{ width: '26px', height: '2.5px', background: 'var(--text-main)', transform: isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none', transition: '0.3s' }}></div>
            <div style={{ width: '26px', height: '2.5px', background: 'var(--text-main)', opacity: isOpen ? 0 : 1, transition: '0.3s' }}></div>
            <div style={{ width: '26px', height: '2.5px', background: 'var(--text-main)', transform: isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none', transition: '0.3s' }}></div>
         </button>
      </div>

      {/* 5. OVERLAY MENU MOBILE */}
      <div style={{ 
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', 
          background: 'var(--surface)', zIndex: 1000, 
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '30px',
          visibility: isOpen ? 'visible' : 'hidden',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0)' : 'translateY(-20px)', 
          transition: 'all 0.4s ease-in-out'
      }}>
          {mounted && (
            <button
              onClick={toggleTheme}
              style={{
                background: 'transparent',
                border: '1px solid var(--surface-tertiary)',
                cursor: 'pointer',
                padding: '12px 25px',
                borderRadius: '25px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: 'var(--text-main)',
                fontSize: '1.1rem',
                marginBottom: '15px'
              }}
            >
               {theme === 'light' ? t.navbar.mode_dark : t.navbar.mode_light}
            </button>
          )}

           <Link href="/" style={{ ...linkStyle, fontSize: '1.8rem', fontWeight: '800' }} onClick={() => setIsOpen(false)}>{t.navbar.home}</Link>
          <Link href="/pricing" style={{ ...linkStyle, fontSize: '1.8rem', fontWeight: '800' }} onClick={() => setIsOpen(false)}>{t.navbar.pricing}</Link>
          <Link href="/contact" style={{ ...linkStyle, fontSize: '1.8rem', fontWeight: '800' }} onClick={() => setIsOpen(false)}>{t.navbar.contact}</Link>
      </div>
    </nav>
  );
}
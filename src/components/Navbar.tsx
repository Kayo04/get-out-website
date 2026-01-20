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

  useEffect(() => {
    setMounted(true);
  }, []);

  const linkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: 'var(--text-main)',
    transition: 'opacity 0.2s ease',
  };

  return (
    <nav className="navbar-float" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 30px',
      backgroundColor: 'var(--surface)', // Changed to variable
      backdropFilter: 'blur(10px)',
      position: 'fixed',
      
      top: '0',
      left: '0',
      transform: 'none',
      width: '100%',
      borderRadius: '0',
      
      maxWidth: 'none',
      zIndex: 1000,
      boxShadow: 'var(--card-shadow)', // Changed to variable
      borderBottom: '1px solid var(--surface-tertiary)' // Changed to variable
    }}>
      
      {/* 1. LOGO */}
      <Link href="/" style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '8px', zIndex: 1001 }}>
          <span style={{ fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.05em', color: 'var(--text-main)' }}>
            GET<span style={{ color: '#FF6B00' }}>OUT</span>
          </span>
      </Link>
      
      {/* 2. LINKS CENTRALIZADOS */}
      <div className="desktop-only" style={{ display: 'flex', gap: '25px' }}>
        {['home', 'faq', 'download', 'contact'].map((key) => (
          <Link 
            key={key} 
            href={key === 'home' ? '/' : `/${key}`} 
            style={{ ...linkStyle, fontSize: '0.85rem', fontWeight: '500' }}
            className="hover:opacity-75 transition-opacity"
          >
            {t.navbar[key as keyof typeof t.navbar]}
          </Link>
        ))}
      </div>

      {/* 3. AÇÕES DA DIREITA */}
      <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        {/* Toggle Theme Button */}
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
                // Moon icon for light mode
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
             ) : (
                // Sun icon for dark mode
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            backgroundColor: 'var(--text-main)', // Use text-main for contrast (black in light, white in dark)
            color: 'var(--surface)', // Use surface for text (white in light, black in dark)
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
            <div style={{ width: '22px', height: '2px', background: 'var(--text-main)', transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none', transition: '0.3s' }}></div>
            <div style={{ width: '22px', height: '2px', background: 'var(--text-main)', opacity: isOpen ? 0 : 1, transition: '0.3s' }}></div>
            <div style={{ width: '22px', height: '2px', background: 'var(--text-main)', transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none', transition: '0.3s' }}></div>
         </button>
      </div>

      {/* 5. OVERLAY MENU MOBILE */}
      <div style={{ 
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', 
          background: 'var(--surface)', zIndex: 1000, 
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '25px',
          visibility: isOpen ? 'visible' : 'hidden',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0)' : 'translateY(-20px)', 
          transition: 'all 0.4s ease-in-out'
      }}>
          {/* Mobile Theme Toggle */}
          {mounted && (
            <button
            onClick={toggleTheme}
            style={{
              background: 'transparent',
              border: '1px solid var(--surface-tertiary)',
              cursor: 'pointer',
              padding: '10px 20px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: 'var(--text-main)',
              fontSize: '1rem',
              marginBottom: '10px'
            }}
          >
             {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
             {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
             ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

          <Link href="/" style={{ ...linkStyle, fontSize: '1.5rem', fontWeight: '700' }} onClick={() => setIsOpen(false)}>{t.navbar.home}</Link>
          <Link href="/faq" style={{ ...linkStyle, fontSize: '1.5rem', fontWeight: '700' }} onClick={() => setIsOpen(false)}>{t.navbar.faq}</Link>
          <Link href="/download" style={{ ...linkStyle, fontSize: '1.5rem', fontWeight: '700' }} onClick={() => setIsOpen(false)}>{t.navbar.download}</Link>
          <Link href="/contact" style={{ ...linkStyle, fontSize: '1.5rem', fontWeight: '700' }} onClick={() => setIsOpen(false)}>{t.navbar.contact}</Link>
          <div style={{ width: '40px', height: '1px', background: 'var(--surface-tertiary)', margin: '10px 0' }} />
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
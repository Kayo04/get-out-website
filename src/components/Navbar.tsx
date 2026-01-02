"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { t, locale, toggleLanguage } = useLanguage();

  return (
    <nav className="navbar-float">
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
         <span style={{ 
           fontWeight: 800, 
           fontSize: '2rem', /* Bigger */
           letterSpacing: '-0.05em',
           color: 'var(--secondary)',
           display: 'flex',
           alignItems: 'center'
         }}>
           GET<span style={{ color: 'var(--primary)' }}>OUT</span>
         </span>
      </Link>
      
      <div className="nav-links">
        <Link href="/" className="nav-link">{t.navbar.home}</Link>
        <Link href="/about" className="nav-link">{t.navbar.about}</Link>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        {/* Language Toggle */}
        <button 
          onClick={toggleLanguage}
          className="lang-btn"
          style={{
            background: 'rgba(0,0,0,0.05)',
            border: '1px solid rgba(0,0,0,0.1)',
            padding: '8px 16px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: 800,
            color: 'var(--text-main)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'all 0.2s ease',
            zIndex: 1001
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.background = 'rgba(0,0,0,0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = 'rgba(0,0,0,0.05)';
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>{locale === 'en' ? '🇺🇸' : '🇵🇹'}</span>
          {locale === 'en' ? 'EN' : 'PT'}
        </button>

        <Link href="/download" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.8rem' }}>
          {t.navbar.download}
        </Link>
      </div>
    </nav>
  );
}

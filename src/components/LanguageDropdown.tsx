"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

// SVG FLAGS
const FlagUS = () => (
  <svg width="24" height="24" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
    <path fill="#BD3D44" d="M0 26h36v5H0z"/>
    <path fill="#fff" d="M0 21h36v5H0z"/>
    <path fill="#BD3D44" d="M0 16h36v5H0z"/>
    <path fill="#fff" d="M0 11h36v5H0z"/>
    <path fill="#BD3D44" d="M0 5h36v6H0z"/>
    <path fill="#192F5D" d="M0 5h19v16H0z"/>
    {/* Simplified Stars (Dots) for readability at small size */}
    <circle cx="2.5" cy="8" r="1" fill="#fff"/>
    <circle cx="5.5" cy="8" r="1" fill="#fff"/>
    <circle cx="8.5" cy="8" r="1" fill="#fff"/>
    <circle cx="11.5" cy="8" r="1" fill="#fff"/>
    <circle cx="14.5" cy="8" r="1" fill="#fff"/>
    <circle cx="17.5" cy="8" r="1" fill="#fff"/>
    <circle cx="4" cy="11" r="1" fill="#fff"/>
    <circle cx="7" cy="11" r="1" fill="#fff"/>
    <circle cx="10" cy="11" r="1" fill="#fff"/>
    <circle cx="13" cy="11" r="1" fill="#fff"/>
    <circle cx="16" cy="11" r="1" fill="#fff"/>
    <circle cx="2.5" cy="14" r="1" fill="#fff"/>
    <circle cx="5.5" cy="14" r="1" fill="#fff"/>
    <circle cx="8.5" cy="14" r="1" fill="#fff"/>
    <circle cx="11.5" cy="14" r="1" fill="#fff"/>
    <circle cx="14.5" cy="14" r="1" fill="#fff"/>
    <circle cx="17.5" cy="14" r="1" fill="#fff"/>
    <circle cx="4" cy="17" r="1" fill="#fff"/>
    <circle cx="7" cy="17" r="1" fill="#fff"/>
    <circle cx="10" cy="17" r="1" fill="#fff"/>
    <circle cx="13" cy="17" r="1" fill="#fff"/>
    <circle cx="16" cy="17" r="1" fill="#fff"/>
  </svg>
);

const FlagPT = () => (
  <svg width="24" height="24" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
    <path fill="#DA291C" d="M14 5h22v26H14z"/>
    <path fill="#046A38" d="M0 5h14v26H0z"/>
    <circle cx="14" cy="18" r="5" fill="#FFE900"/>
    <circle cx="14" cy="18" r="3" fill="#fff" stroke="#DA291C" strokeWidth="2"/>
  </svg>
);

const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6"/>
  </svg>
);

export default function LanguageDropdown() {
  const { locale, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang: "en" | "pt") => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative' }} ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'rgba(0,0,0,0.05)',
          border: '1px solid rgba(0,0,0,0.1)',
          padding: '8px 12px',
          borderRadius: '20px',
          cursor: 'pointer',
          fontSize: '0.9rem',
          fontWeight: 700,
          color: 'var(--text-main)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.background = 'rgba(0,0,0,0.1)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = 'rgba(0,0,0,0.05)';
        }}
      >
        {/* Render Active Flag */}
        {locale === 'en' ? <FlagUS /> : <FlagPT />}
        <span>{locale === 'en' ? 'EN' : 'PT'}</span>
        <div style={{ 
            transition: 'transform 0.2s', 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            display: 'flex', alignItems: 'center'
        }}>
            <ChevronDown />
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '120%',
          right: 0,
          background: 'var(--surface)',
          border: '1px solid rgba(0,0,0,0.1)',
          borderRadius: '16px',
          boxShadow: '0 10px 30px -5px rgba(0,0,0,0.2)',
          padding: '8px',
          minWidth: '140px',
          zIndex: 2000,
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div 
             onClick={() => handleSelect('pt')}
             style={{
               display: 'flex', alignItems: 'center', gap: '10px',
               padding: '10px', borderRadius: '10px',
               cursor: 'pointer',
               background: locale === 'pt' ? 'var(--surface-secondary)' : 'transparent',
               fontWeight: locale === 'pt' ? 700 : 500,
               color: 'var(--text-main)',
               marginBottom: '4px'
             }}
             onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface-secondary)'}
             onMouseLeave={(e) => e.currentTarget.style.background = locale === 'pt' ? 'var(--surface-secondary)' : 'transparent'}
          >
             <FlagPT />
             <span>Português</span>
          </div>

          <div 
             onClick={() => handleSelect('en')}
             style={{
               display: 'flex', alignItems: 'center', gap: '10px',
               padding: '10px', borderRadius: '10px',
               cursor: 'pointer',
               background: locale === 'en' ? 'var(--surface-secondary)' : 'transparent',
               fontWeight: locale === 'en' ? 700 : 500,
               color: 'var(--text-main)'
             }}
             onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface-secondary)'}
             onMouseLeave={(e) => e.currentTarget.style.background = locale === 'en' ? 'var(--surface-secondary)' : 'transparent'}
          >
             <FlagUS />
             <span>English</span>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

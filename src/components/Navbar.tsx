"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import LanguageDropdown from "./LanguageDropdown";
import { useState } from "react";

export default function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-float">
      {/* Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', zIndex: 1001 }}>
         <span style={{ fontWeight: 800, fontSize: '1.8rem', letterSpacing: '-0.05em', color: 'var(--secondary)' }}>
           GET<span style={{ color: 'var(--primary)' }}>OUT</span>
         </span>
      </Link>
      
      {/* Desktop Links */}
      <div className="nav-links desktop-only">
        <Link href="/" className="nav-link">{t.navbar.home}</Link>
        <Link href="/faq" className="nav-link">{t.navbar.faq}</Link>
        <Link href="/download" className="nav-link">{t.navbar.download}</Link>
        <Link href="/contact" className="nav-link">{t.navbar.contact}</Link>
      </div>

      {/* Right Actions (Desktop) */}
      <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <LanguageDropdown />
        <Link href="/download" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.8rem' }}>
          {t.navbar.download}
        </Link>
      </div>

      {/* Mobile Actions */}
      <div className="mobile-only" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
         <LanguageDropdown />
         
         {/* Hamburger Button */}
         <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '5px', zIndex: 1001 }}>
            <div style={{ width: '25px', height: '2px', background: 'var(--text-main)', marginBottom: '6px', transform: isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none', transition: 'all 0.3s' }}></div>
            <div style={{ width: '25px', height: '2px', background: 'var(--text-main)', marginBottom: '6px', opacity: isOpen ? 0 : 1, transition: 'all 0.3s' }}></div>
            <div style={{ width: '25px', height: '2px', background: 'var(--text-main)', transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none', transition: 'all 0.3s' }}></div>
         </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div style={{ 
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', 
          background: 'rgba(255,255,255,0.98)', zIndex: 1000, 
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '30px',
          transform: isOpen ? 'translateY(0)' : 'translateY(-100%)', transition: 'transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
      }}>
          <Link href="/" className="nav-link" style={{ fontSize: '1.5rem' }} onClick={() => setIsOpen(false)}>{t.navbar.home}</Link>
          <Link href="/faq" className="nav-link" style={{ fontSize: '1.5rem' }} onClick={() => setIsOpen(false)}>{t.navbar.faq}</Link>
          <Link href="/download" className="nav-link" style={{ fontSize: '1.5rem' }} onClick={() => setIsOpen(false)}>{t.navbar.download}</Link>
          <Link href="/contact" className="nav-link" style={{ fontSize: '1.5rem' }} onClick={() => setIsOpen(false)}>{t.navbar.contact}</Link>
          <hr style={{ width: '50px', border: '1px solid #eee' }} />
          <Link href="/download" className="btn btn-primary" onClick={() => setIsOpen(false)}>{t.navbar.download}</Link>
      </div>
    </nav>
  );
}

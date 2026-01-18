"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import LanguageDropdown from "./LanguageDropdown";

export default function Navbar() {
  const { t } = useLanguage();

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
        <Link href="/features" className="nav-link">{t.navbar.features}</Link>
        <Link href="/about" className="nav-link">{t.navbar.about}</Link>
        <Link href="/contact" className="nav-link">{t.navbar.contact}</Link>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        {/* Language Dropdown */}
        <LanguageDropdown />

        <Link href="/download" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.8rem' }}>
          {t.navbar.download}
        </Link>
      </div>
    </nav>
  );
}

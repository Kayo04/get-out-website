"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '80px 0', background: 'var(--surface)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '50px' }}>
            {/* Brand */}
            <div>
               <h3 style={{ 
                 fontWeight: 800, 
                 fontSize: '1.8rem', 
                 letterSpacing: '-0.05em', 
                 color: 'var(--secondary)' 
               }}>
                 GET<span style={{ color: 'var(--primary)' }}>OUT</span>
               </h3>
               <p style={{ fontSize: '0.9rem' }}>
                 {t.footer.motto}
               </p>
            </div>

            {/* Links */}
            <div>
              <h4 style={{ fontSize: '0.9rem', color: '#fff', marginBottom: '20px' }}>{t.footer.explore}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <Link href="/" style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{t.navbar.home}</Link>
                <Link href="/about" style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{t.navbar.about}</Link>
                <Link href="/download" style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{t.navbar.download}</Link>
              </div>
            </div>

            {/* Socials */}
            <div>
               <h4 style={{ fontSize: '0.9rem', color: '#fff', marginBottom: '20px' }}>{t.footer.connect}</h4>
               <div style={{ display: 'flex', gap: '20px' }}>
                 <a href="#" style={{ color: 'white' }}>Instagram</a>
                 <a href="#" style={{ color: 'white' }}>Twitter</a>
                 <a href="#" style={{ color: 'white' }}>LinkedIn</a>
               </div>
            </div>
        </div>
        
        <div style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', fontSize: '0.8rem', color: 'rgba(255,255,255,0.2)' }}>
           &copy; {new Date().getFullYear()} Get Out App. {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}

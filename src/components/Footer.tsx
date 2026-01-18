"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '80px 0', background: 'var(--surface-secondary)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
            
            {/* 1. Brand & Motto */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
               <h3 style={{ 
                 fontWeight: 800, 
                 fontSize: '1.8rem', 
                 letterSpacing: '-0.05em', 
                 color: 'var(--secondary)',
                 margin: 0
               }}>
                 GET<span style={{ color: 'var(--primary)' }}>OUT</span>
               </h3>
               <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', lineHeight: '1.6', maxWidth: '300px' }}>
                 {t.footer.motto}
               </p>
               {/* Socials moved here for cleaner look */}
               <div style={{ display: 'flex', gap: '15px' }}>
                 {['X', 'LinkedIn', 'Instagram'].map((platform) => (
                   <a key={platform} href="#" style={{ color: 'var(--text-dim)', fontSize: '1.2rem', transition: 'color 0.2s' }}>
                     <i className={`icon-${platform.toLowerCase()}`} /> {/* Placeholder icons */}
                     {platform}
                   </a>
                 ))}
               </div>
            </div>

            {/* 2. Product Column */}
            <div>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {t.footer.product}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                 <li><Link href="/features" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.95rem' }}>{t.footer.links.features}</Link></li>
                 <li><Link href="/download" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.95rem' }}>{t.footer.links.download}</Link></li>
              </ul>
            </div>

            {/* 3. Company Column */}
            <div>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {t.footer.company}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                 <li><Link href="/about" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.95rem' }}>{t.footer.links.about}</Link></li>
                 <li><Link href="/contact" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.95rem' }}>{t.footer.links.contact}</Link></li>
              </ul>
            </div>

            {/* 4. Legal Column */}
            <div>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {t.footer.legal}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                 <li><Link href="/privacy" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.95rem' }}>{t.footer.links.privacy}</Link></li>
                 <li><Link href="#" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.95rem' }}>{t.footer.links.terms}</Link></li>
              </ul>
            </div>

        </div>
        
        <div style={{ 
          marginTop: '80px', 
          paddingTop: '40px', 
          borderTop: '1px solid rgba(0,0,0,0.05)', 
          textAlign: 'center', 
          fontSize: '0.85rem', 
          color: 'var(--text-dim)' 
        }}>
           &copy; {new Date().getFullYear()} Get Out. {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}

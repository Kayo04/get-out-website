"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '80px 0', background: 'var(--surface-secondary)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '50px' }}>
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
               <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', lineHeight: '1.6' }}>
                 {t.footer.motto}
               </p>
            </div>

            {/* Links */}
            <div>
              <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {t.footer.explore}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { href: "/", label: t.navbar.home },
                  { href: "/about", label: t.navbar.about },
                  { href: "/download", label: t.navbar.download }
                ].map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    style={{ color: 'var(--text-dim)', fontSize: '0.95rem', transition: 'color 0.2s', textDecoration: 'none' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-dim)'}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div>
               <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                 {t.footer.connect}
               </h4>
               <div style={{ display: 'flex', gap: '15px' }}>
                 {['Instagram', 'Twitter', 'LinkedIn'].map((platform) => (
                   <a 
                    key={platform} 
                    href="#" 
                    style={{ 
                      color: 'var(--secondary)', 
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      background: 'rgba(0, 102, 204, 0.1)',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--secondary)';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 102, 204, 0.1)';
                      e.currentTarget.style.color = 'var(--secondary)';
                    }}
                   >
                     {platform}
                   </a>
                 ))}
               </div>
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
           &copy; {new Date().getFullYear()} Get Out App. {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}

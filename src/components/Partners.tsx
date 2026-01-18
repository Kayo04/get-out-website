"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Partners() {
  const { t } = useLanguage();

  const partners = [
    "Ticketline", "Fever", "Shotgun", "Dice", "Resident Advisor", "Eventbrite"
  ];

  return (
    <section style={{ padding: '60px 0', borderBottom: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.02)' }}>
      <div className="container">
        <p style={{ 
            textAlign: 'center', 
            color: 'var(--text-dim)', 
            fontSize: '0.9rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em',
            marginBottom: '30px'
        }}>
            {t.partners ? t.partners.trusted_by : "Trusted by Industry Leaders"}
        </p>
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            gap: '40px',
            opacity: 0.6
        }}>
            {partners.map((partner, index) => (
                <div key={index} style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 700, 
                    color: 'var(--text-dim)',
                    filter: 'grayscale(100%)',
                    transition: 'all 0.3s',
                    cursor: 'default'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%)';
                    e.currentTarget.style.color = 'var(--text-main)';
                    e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(100%)';
                    e.currentTarget.style.color = 'var(--text-dim)';
                    e.currentTarget.style.opacity = '1';
                }}
                >
                    {partner}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

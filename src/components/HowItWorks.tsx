"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: "📅",
      title: t.how_it_works ? t.how_it_works.step1_title : "Create Event",
      desc: t.how_it_works ? t.how_it_works.step1_desc : "Set the details in seconds."
    },
    {
      icon: "🔗",
      title: t.how_it_works ? t.how_it_works.step2_title : "Invite Friends",
      desc: t.how_it_works ? t.how_it_works.step2_desc : "Share a single link. No more spam."
    },
    {
      icon: "🎟️",
      title: t.how_it_works ? t.how_it_works.step3_title : "Get Out",
      desc: t.how_it_works ? t.how_it_works.step3_desc : "Track RSVPs and scan tickets at the door."
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2>{t.how_it_works ? t.how_it_works.title : "How It Works"}</h2>
          <p>{t.how_it_works ? t.how_it_works.subtitle : "Simple, fast, and effective."}</p>
        </div>

        <div className="grid-3">
          {steps.map((step, index) => (
            <div key={index} className="glass-card" style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '20px',
                background: 'var(--primary-glow)',
                width: '80px',
                height: '80px',
                lineHeight: '80px',
                borderRadius: '50%',
                margin: '0 auto 20px auto'
              }}>
                {step.icon}
              </div>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '10px' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-dim)' }}>{step.desc}</p>
              
              {index < 2 && (
                <div style={{ 
                    position: 'absolute', 
                    top: '50%', 
                    right: '-20px', 
                    transform: 'translateY(-50%)', 
                    fontSize: '2rem', 
                    color: 'var(--primary)',
                    opacity: 0.3,
                    display: 'none' // Hidden on mobile, could show on desktop with media query if we had CSS modules
                }}>
                    →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

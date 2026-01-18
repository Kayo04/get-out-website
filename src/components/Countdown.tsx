"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const LAUNCH_DATE = new Date("2026-03-24T00:00:00");

export default function LaunchCountdown() {
  const { locale } = useLanguage();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = LAUNCH_DATE.getTime() - now.getTime();

    if (diff <= 0) {
      return null;
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 60000); // Update every minute instead of second

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '60px 0' }}>
         <h2 style={{ fontSize: '3rem', fontWeight: 800 }} className="text-gradient">We are Live! 🚀</h2>
      </div>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: locale === 'pt' ? 'DIAS' : 'DAYS' },
    { value: timeLeft.hours, label: locale === 'pt' ? 'HORAS' : 'HOURS' },
    { value: timeLeft.minutes, label: locale === 'pt' ? 'MINUTOS' : 'MINUTES' },
  ];

  return (
    <section className="section" style={{ 
        padding: '80px 0', 
        position: 'relative',
        background: 'radial-gradient(circle at 50% 50%, rgba(255, 107, 0, 0.03) 0%, transparent 70%)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px', position: 'relative', zIndex: 10 }}>
            <span style={{ 
                textTransform: 'uppercase', 
                letterSpacing: '0.3em', 
                fontSize: '0.9rem', 
                color: 'var(--primary)',
                fontWeight: 800,
                display: 'block',
                marginBottom: '10px'
            }}>
                {locale === 'pt' ? 'LANÇAMENTO OFICIAL' : 'OFFICIAL LAUNCH'}
            </span>
            <h2 style={{ fontSize: '3.5rem', margin: '0', lineHeight: 1 }}>
                24 <span style={{ color: 'var(--text-dim)', fontWeight: 300 }}>Mar</span> 2026
            </h2>
        </div>

        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '30px', 
            flexWrap: 'wrap' 
        }}>
          {timeUnits.map((unit, index) => (
            <div key={index} style={{ 
                textAlign: 'center',
                position: 'relative'
            }}>
                <div className="glass-card" style={{ 
                    padding: '30px', 
                    minWidth: '160px', 
                    border: '1px solid rgba(255,255,255,0.7)',
                    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
                    backdropFilter: 'blur(10px)',
                    background: 'rgba(255,255,255,0.6)'
                }}>
                  <div className="text-gradient" style={{ 
                      fontSize: '4.5rem', 
                      fontWeight: 800, 
                      lineHeight: 1,
                      fontVariantNumeric: 'tabular-nums',
                      marginBottom: '5px'
                  }}>
                    {String(unit.value).padStart(2, '0')}
                  </div>
                </div>
                <div style={{ 
                    fontSize: '0.9rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.2em',
                    color: 'var(--text-dim)',
                    marginTop: '20px',
                    fontWeight: 700
                }}>
                  {unit.label}
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function AppShowcase() {
  const { t } = useLanguage();

  return (
    <>
      {/* SECTION 1: ORGANIZE (Text Left, Phone Right) */}
      <section className="section">
        <div className="container grid-2">
          {/* Text Content */}
          <div style={{ order: 1 }}>
            <h4 style={{ color: 'var(--primary)', letterSpacing: '0.2em', marginBottom: '1rem', fontWeight: 800 }}>
                {t.showcase?.organize_subtitle || "ORGANIZE"}
            </h4>
            <h2 style={{ fontSize: '3rem', lineHeight: 1.1, marginBottom: '20px' }}>
                {t.showcase?.organize_title || "Host with Ease"}
            </h2>
            <p>
                {t.showcase?.organize_desc || "Create an event in seconds. Manage your guest list, track RSVPs in real-time, and scan tickets at the door."}
            </p>
          </div>

          {/* Visual: Phone Mockup (Create Event) */}
          <div style={{ display: 'flex', justifyContent: 'center', order: 2 }}>
            <div className="phone-mockup" style={{ 
                width: '300px', height: '600px', 
                background: 'var(--surface-secondary)', borderRadius: '40px', 
                border: '8px solid var(--surface-tertiary)', position: 'relative',
                boxShadow: '0 30px 60px rgba(0,0,0,0.2)', overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                {/* Notch */}
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '120px', height: '30px', background: 'var(--surface-tertiary)', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', zIndex: 10 }}></div>
                
                <div style={{ color: 'var(--text-main)', fontSize: '1.2rem', padding: '20px', textAlign: 'center', border: '2px dashed var(--text-dim)', borderRadius: '10px' }}>
                    meter foto de Criar Evento
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ATTEND (Phone Left, Text Right) */}
      <section className="section">
        <div className="container grid-2">
          
          {/* Visual: Phone Mockup (Events) */}
          <div style={{ display: 'flex', justifyContent: 'center', order: 1 }}>
            <div className="phone-mockup" style={{ 
                width: '300px', height: '600px', 
                background: 'var(--surface)', borderRadius: '40px', 
                border: '8px solid var(--surface-tertiary)', position: 'relative',
                boxShadow: '0 30px 60px rgba(0,0,0,0.1)', overflow: 'hidden',
                 display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                {/* Notch */}
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '120px', height: '30px', background: 'var(--surface-tertiary)', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', zIndex: 10 }}></div>
                
                <div style={{ color: 'var(--text-main)', fontSize: '1.2rem', padding: '20px', textAlign: 'center', border: '2px dashed var(--text-dim)', borderRadius: '10px' }}>
                    meter foto de eventos
                </div>
            </div>
          </div>

          {/* Text Content */}
          <div style={{ order: 2 }}>
            <h4 style={{ color: 'var(--secondary)', letterSpacing: '0.2em', marginBottom: '1rem', fontWeight: 800 }}>
                {t.showcase?.attend_subtitle || "ATTEND"}
            </h4>
            <h2 style={{ fontSize: '3rem', lineHeight: 1.1, marginBottom: '20px' }}>
                {t.showcase?.attend_title || "Night Out, Sorted"}
            </h2>
            <p>
                {t.showcase?.attend_desc || "All your tickets, messaging groups, and event details in one place."}
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        {/* Hero */}
        <section className="section">
          <div className="container grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '4rem' }}>{t.about.hero_title_1} <span style={{ color: 'var(--primary)' }}>{t.about.hero_title_2}</span></h1>
              <p style={{ fontSize: '1.2rem' }}>
                {t.about.hero_desc}
              </p>
            </div>
            <div style={{ position: 'relative', height: '500px', borderRadius: '20px', overflow: 'hidden' }}>
              <Image 
                src="/mascote-simples.jpg" 
                alt="Get Out Mascot" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="section" style={{ background: 'var(--surface)' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center' }}>{t.about.mission_title}</h2>
            <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              {t.about.mission_desc}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

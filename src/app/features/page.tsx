"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function FeaturesPage() {
  const { t } = useLanguage();
  
  const features = [
    {
      title: t.features_page.list[0].title,
      desc: t.features_page.list[0].desc,
      icon: "⚡"
    },
    {
      title: t.features_page.list[1].title,
      desc: t.features_page.list[1].desc,
      icon: "🗺️"
    },
    {
      title: t.features_page.list[2].title,
      desc: t.features_page.list[2].desc,
      icon: "💎"
    },
    {
      title: t.features_page.list[3].title,
      desc: t.features_page.list[3].desc,
      icon: "🤝"
    },
    {
      title: t.features_page.list[4].title,
      desc: t.features_page.list[4].desc,
      icon: "🤖"
    },
    {
      title: t.features_page.list[5].title,
      desc: t.features_page.list[5].desc,
      icon: "🎟️"
    }
  ];

  return (
    <>
      <main style={{ paddingTop: "100px", minHeight: "100vh" }}>
        
        {/* Header */}
        <section className="container" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h1 className="text-gradient" style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>{t.features_page.hero_title}</h1>
          <p style={{ maxWidth: "600px", margin: "0 auto", color: "var(--text-dim)", fontSize: "1.2rem" }}>
            {t.features_page.hero_subtitle}
          </p>
        </section>

        {/* Grid */}
        <section className="container">
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: "30px",
            marginBottom: "80px"
          }}>
            {features.map((f, i) => (
              <div key={i} className="glass-card" style={{ transition: "transform 0.2s" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{f.icon}</div>
                <h3 style={{ color: "var(--secondary)", marginBottom: "0.5rem" }}>{f.title}</h3>
                <p style={{ color: "var(--text-dim)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hero Bottom */}
        <section style={{ 
          background: "linear-gradient(to bottom, transparent, var(--background-light))", 
          padding: "80px 0",
          textAlign: "center" 
        }}>
          <div className="container">
            <h2 style={{ marginBottom: "2rem" }}>{t.features_page.ready_title}</h2>
            <a href="/download" className="btn btn-primary">{t.features_page.get_app_btn}</a>
          </div>
        </section>

      </main>
    </>
  );
}

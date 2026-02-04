"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function CookiePolicyPage() {
  const { t } = useLanguage();

  return (
    <main style={{ paddingTop: "120px", minHeight: "80vh", paddingBottom: "80px" }}>
      <div className="container" style={{ maxWidth: "900px" }}>
        <h1 className="text-gradient" style={{ textAlign: "center", marginBottom: "1rem" }}>
          {t.cookies_page?.title || "Cookie Policy"}
        </h1>
        <p style={{ textAlign: "center", color: "var(--text-dim)", marginBottom: "3rem" }}>
          {t.cookies_page?.last_updated || "Last updated: January 2026"}
        </p>

        <div className="glass-card" style={{ padding: "40px" }}>
          <section style={{ marginBottom: "2.5rem" }}>
            <p style={{ color: "var(--text-main)", lineHeight: "1.8", marginBottom: "1rem" }}>
              {(t.cookies_page as any)?.intro_text}
            </p>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 className="text-gradient" style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
              {(t.cookies_page as any)?.section_1_title}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "var(--text-dim)", lineHeight: "1.8" }}>
              <p><strong style={{ color: "var(--text-main)" }}>•</strong> {(t.cookies_page as any)?.section_1_web}</p>
              <p><strong style={{ color: "var(--text-main)" }}>•</strong> {(t.cookies_page as any)?.section_1_mobile}</p>
              <p style={{ fontStyle: "italic", marginTop: "0.5rem" }}>{(t.cookies_page as any)?.section_1_note}</p>
            </div>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 className="text-gradient" style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
              {(t.cookies_page as any)?.section_2_title}
            </h2>
            <p style={{ color: "var(--text-dim)", marginBottom: "1.5rem" }}>{(t.cookies_page as any)?.section_2_intro}</p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div>
                <h3 style={{ color: "var(--primary)", fontSize: "1.1rem", marginBottom: "0.5rem" }}>{(t.cookies_page as any)?.section_2_essential_title}</h3>
                <p style={{ color: "var(--text-dim)", lineHeight: "1.6" }}>{(t.cookies_page as any)?.section_2_essential_desc}</p>
              </div>
              <div>
                <h3 style={{ color: "var(--primary)", fontSize: "1.1rem", marginBottom: "0.5rem" }}>{(t.cookies_page as any)?.section_2_analytics_title}</h3>
                <p style={{ color: "var(--text-dim)", lineHeight: "1.6" }}>{(t.cookies_page as any)?.section_2_analytics_desc}</p>
              </div>
              <div>
                <h3 style={{ color: "var(--primary)", fontSize: "1.1rem", marginBottom: "0.5rem" }}>{(t.cookies_page as any)?.section_2_marketing_title}</h3>
                <p style={{ color: "var(--text-dim)", lineHeight: "1.6" }}>{(t.cookies_page as any)?.section_2_marketing_desc}</p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 className="text-gradient" style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
              {(t.cookies_page as any)?.section_3_title}
            </h2>
            <p style={{ color: "var(--text-dim)", marginBottom: "1rem" }}>{(t.cookies_page as any)?.section_3_intro}</p>
            <div style={{ background: "rgba(255,255,255,0.05)", padding: "1.5rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
               <p style={{ color: "var(--text-main)" }}>{(t.cookies_page as any)?.section_3_google}</p>
            </div>
          </section>

          <section style={{ marginBottom: "2.5rem" }}>
            <h2 className="text-gradient" style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
              {(t.cookies_page as any)?.section_4_title}
            </h2>
            <p style={{ color: "var(--text-dim)", marginBottom: "1.5rem" }}>{(t.cookies_page as any)?.section_4_intro}</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "var(--text-dim)", lineHeight: "1.8", paddingLeft: "20px" }}>
              <li>{(t.cookies_page as any)?.section_4_web}</li>
              <li>{(t.cookies_page as any)?.section_4_mobile}</li>
              <li>{(t.cookies_page as any)?.section_4_app}</li>
            </ul>
          </section>

           <section>
            <h2 className="text-gradient" style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
              {(t.cookies_page as any)?.section_5_title}
            </h2>
            <p style={{ color: "var(--text-dim)", lineHeight: "1.8" }}>
              {(t.cookies_page as any)?.section_5_text}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

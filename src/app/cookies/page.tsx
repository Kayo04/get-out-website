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
          <section style={{ marginBottom: "2rem" }}>
            <p style={{ color: "var(--text-dim)", lineHeight: "1.8" }}>
              {t.cookies_page?.intro_text}
            </p>
          </section>

          <section style={{ marginBottom: "2rem" }}>
            <h2 style={{ color: "var(--text-main)", marginBottom: "1rem" }}>
              {t.cookies_page?.what_are_cookies_title}
            </h2>
            <p style={{ color: "var(--text-dim)", lineHeight: "1.8" }}>
              {t.cookies_page?.what_are_cookies_text}
            </p>
          </section>

          <section style={{ marginBottom: "2rem" }}>
            <h2 style={{ color: "var(--text-main)", marginBottom: "1rem" }}>
              {t.cookies_page?.types_title}
            </h2>
            <ul style={{ color: "var(--text-dim)", lineHeight: "1.8", paddingLeft: "20px" }}>
              <li style={{ marginBottom: "10px" }}>{t.cookies_page?.types_essential}</li>
              <li style={{ marginBottom: "10px" }}>{t.cookies_page?.types_analytics}</li>
            </ul>
          </section>

          <section>
            <h2 style={{ color: "var(--text-main)", marginBottom: "1rem" }}>
              {t.cookies_page?.management_title}
            </h2>
            <p style={{ color: "var(--text-dim)", lineHeight: "1.8" }}>
              {t.cookies_page?.management_text}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

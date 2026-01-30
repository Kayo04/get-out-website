"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <main style={{ paddingTop: "120px", minHeight: "80vh", paddingBottom: "80px" }}>
      <div className="container" style={{ maxWidth: "900px" }}>
        <h1 className="text-gradient" style={{ textAlign: "center", marginBottom: "1rem" }}>
          {t.terms_page.title}
        </h1>
        <p style={{ textAlign: "center", color: "var(--text-dim)", marginBottom: "3rem" }}>
          {t.terms_page.last_updated}
        </p>

        <div className="glass-card" style={{ padding: "40px" }}>
          <section style={{ marginBottom: "2rem" }}>
            <h2 style={{ color: "var(--text-main)", marginBottom: "1rem" }}>
              {t.terms_page.acceptance_title}
            </h2>
            <p style={{ color: "var(--text-dim)", lineHeight: "1.8" }}>
              {t.terms_page.acceptance_text}
            </p>
          </section>

          <section style={{ marginBottom: "2rem" }}>
            <h2 style={{ color: "var(--text-main)", marginBottom: "1rem" }}>
              {t.terms_page.account_title}
            </h2>
            <p style={{ color: "var(--text-dim)", lineHeight: "1.8", marginBottom: "1rem" }}>
              {t.terms_page.account_text}
            </p>
            <ul style={{ color: "var(--text-dim)", lineHeight: "1.8", paddingLeft: "20px" }}>
              {t.terms_page.account_list.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section style={{ marginBottom: "2rem" }}>
            <h2 style={{ color: "var(--text-main)", marginBottom: "1rem" }}>
              {t.terms_page.usage_title}
            </h2>
            <p style={{ color: "var(--text-dim)", lineHeight: "1.8", marginBottom: "1rem" }}>
              {t.terms_page.usage_text}
            </p>
            <ul style={{ color: "var(--text-dim)", lineHeight: "1.8", paddingLeft: "20px" }}>
              {t.terms_page.usage_list.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section style={{ marginBottom: "2rem" }}>
            <h2 style={{ color: "var(--text-main)", marginBottom: "1rem" }}>
              {t.terms_page.payment_title}
            </h2>
            <p style={{ color: "var(--text-dim)", lineHeight: "1.8" }}>
              {t.terms_page.payment_text}
            </p>
          </section>

          <section style={{ marginBottom: "2rem" }}>
            <h2 style={{ color: "var(--text-main)", marginBottom: "1rem" }}>
              {t.terms_page.termination_title}
            </h2>
            <p style={{ color: "var(--text-dim)", lineHeight: "1.8" }}>
              {t.terms_page.termination_text}
            </p>
          </section>

          <section>
            <h2 style={{ color: "var(--text-main)", marginBottom: "1rem" }}>
              {t.terms_page.contact_title}
            </h2>
            <p style={{ color: "var(--text-dim)", lineHeight: "1.8" }}>
              {t.terms_page.contact_text}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

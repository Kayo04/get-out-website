"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ComplaintsPage() {
  const { t } = useLanguage();

  return (
    <main style={{ paddingTop: "120px", minHeight: "80vh", paddingBottom: "80px" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <h1 className="text-gradient" style={{ textAlign: "center", marginBottom: "2rem" }}>
          {t.complaints_page?.title || "Electronic Complaints Book"}
        </h1>

        <div className="glass-card" style={{ padding: "40px", textAlign: "center" }}>
          <p style={{ color: "var(--text-dim)", lineHeight: "1.8", marginBottom: "2rem" }}>
            {t.complaints_page?.info_text}
          </p>

          <a 
            href="https://www.livroreclamacoes.pt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ display: "inline-block", marginBottom: "3rem" }}
          >
            {t.complaints_page?.access_btn || "Access Complaints Book"}
          </a>

          <div style={{ marginTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem" }}>
            <p style={{ color: "var(--text-dim)", marginBottom: "0.5rem" }}>
              {t.complaints_page?.contact_intro}
            </p>
            <a 
              href={`mailto:${t.complaints_page?.contact_email}`} 
              style={{ color: "var(--primary)", fontWeight: "bold" }}
            >
              {t.complaints_page?.contact_email}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

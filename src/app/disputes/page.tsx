"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function DisputesPage() {
  const { t } = useLanguage();

  return (
    <main style={{ paddingTop: "120px", minHeight: "80vh", paddingBottom: "80px" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <h1 className="text-gradient" style={{ textAlign: "center", marginBottom: "2rem" }}>
          {t.disputes_page?.title || "Alternative Dispute Resolution (RAL)"}
        </h1>

        <div className="glass-card" style={{ padding: "40px" }}>
          <p style={{ color: "var(--text-dim)", lineHeight: "1.8", marginBottom: "2rem" }}>
            {t.disputes_page?.intro_text}
          </p>

          <ul style={{ color: "var(--text-main)", marginBottom: "2rem", paddingLeft: "20px", lineHeight: "2" }}>
            <li>{t.disputes_page?.lisbon_center}</li>
            <li>{t.disputes_page?.national_center}</li>
          </ul>

          <p style={{ color: "var(--text-dim)", fontSize: "0.9rem" }}>
            {t.disputes_page?.more_info}
          </p>
        </div>
      </div>
    </main>
  );
}

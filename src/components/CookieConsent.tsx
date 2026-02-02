"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function CookieConsent() {
  const { t } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      background: "rgba(10, 10, 10, 0.95)",
      backdropFilter: "blur(10px)",
      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      padding: "20px",
      zIndex: 9999,
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.3)"
    }}>
      <div className="container" style={{ display: "flex", flexDirection: "column", gap: "15px", alignItems: "center", maxWidth: "1200px", width: "100%" }}>
        <p style={{ color: "var(--text-dim)", fontSize: "0.9rem", textAlign: "center", margin: 0 }}>
          {t.cookie_consent?.text || "We use cookies to improve your experience. By using our site, you agree to our use of cookies."}{" "}
          <Link href="/cookies" style={{ color: "var(--primary)", textDecoration: "underline" }}>
            {t.cookie_consent?.learn_more || "Learn more"}
          </Link>
        </p>
        
        <div style={{ display: "flex", gap: "10px" }}>
          <button 
            onClick={handleDecline}
            style={{
              padding: "8px 20px",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              background: "transparent",
              color: "var(--text-main)",
              cursor: "pointer",
              fontSize: "0.9rem",
              fontWeight: "600"
            }}
          >
            {t.cookie_consent?.decline || "Decline"}
          </button>
          <button 
            onClick={handleAccept}
            style={{
              padding: "8px 20px",
              borderRadius: "8px",
              border: "none",
              background: "var(--primary)",
              color: "white",
              cursor: "pointer",
              fontSize: "0.9rem",
              fontWeight: "600"
            }}
          >
            {t.cookie_consent?.accept || "Accept"}
          </button>
        </div>
      </div>
    </div>
  );
}

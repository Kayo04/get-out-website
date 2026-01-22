"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { Zap, Ticket, ScanLine, Globe, ShieldCheck, Users } from "lucide-react";

export default function FeaturesPage() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  
  const isDark = theme === "dark";

  const features = [
    {
      title: t.features_page.list[0].title,
      desc: t.features_page.list[0].desc,
      icon: <Zap size={32} color={isDark ? "#D4AF37" : "#FF5500"} />
    },
    {
      title: t.features_page.list[1].title,
      desc: t.features_page.list[1].desc,
      icon: <Ticket size={32} color={isDark ? "#D4AF37" : "#FF5500"} />
    },
    {
      title: t.features_page.list[2].title,
      desc: t.features_page.list[2].desc,
      icon: <ScanLine size={32} color={isDark ? "#D4AF37" : "#FF5500"} />
    },
    {
      title: t.features_page.list[3].title,
      desc: t.features_page.list[3].desc,
      icon: <Globe size={32} color={isDark ? "#D4AF37" : "#FF5500"} />
    },
    {
      title: t.features_page.list[4].title,
      desc: t.features_page.list[4].desc,
      icon: <ShieldCheck size={32} color={isDark ? "#D4AF37" : "#FF5500"} />
    },
    {
      title: t.features_page.list[5].title,
      desc: t.features_page.list[5].desc,
      icon: <Users size={32} color={isDark ? "#D4AF37" : "#FF5500"} />
    }
  ];

  return (
    <>
      <main style={{ 
          backgroundColor: isDark ? "#000" : "var(--surface)", 
          minHeight: "100vh", 
          paddingBottom: "100px",
          transition: "background-color 0.3s ease"
      }}>
        
        {/* Header */}
        <section className="container" style={{ textAlign: "center", paddingTop: "140px", marginBottom: "80px" }}>
          <h1 style={{ 
              fontSize: "3.5rem", 
              fontWeight: "700", 
              marginBottom: "10px",
              color: isDark ? "white" : "var(--text-main)",
              transition: "color 0.3s ease"
          }}>
            {t.features_page.hero_title}
          </h1>
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
              <div key={i} style={{
                backgroundColor: isDark ? "#0a0a0a" : "var(--surface)",
                borderRadius: "20px",
                padding: "40px",
                border: isDark ? "1px solid #222" : "1px solid var(--border-color)",
                display: "flex", 
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                transition: "all 0.3s ease",
                height: "100%", 
                gap: "20px",
                boxShadow: isDark ? "none" : "var(--card-shadow)"
              }}>
                <div style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    backgroundColor: isDark ? "rgba(212, 175, 55, 0.1)" : "rgba(255, 85, 0, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px"
                }}>
                    {f.icon}
                </div>
                <h3 style={{ 
                    color: isDark ? "white" : "var(--text-main)", 
                    fontSize: "1.5rem", 
                    fontWeight: "600",
                    marginBottom: "10px",
                    marginTop: 0,
                    transition: "color 0.3s ease" 
                }}>
                    {f.title}
                </h3>
                <p style={{ 
                    color: isDark ? "#888" : "var(--text-dim)", 
                    lineHeight: "1.6",
                    fontSize: "1rem",
                    margin: 0,
                    transition: "color 0.3s ease"
                }}>
                    {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}



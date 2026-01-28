"use client";

import { useState } from "react";
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
          <h1 className="text-gradient" style={{ 
              fontSize: "4rem", 
              fontWeight: "800", 
              marginBottom: "24px",
              color: isDark ? "white" : "var(--text-main)",
              transition: "color 0.3s ease"
          }}>
            {t.features_page.hero_title}
          </h1>
          <p style={{
              fontSize: "1.25rem",
              color: isDark ? "#888" : "var(--text-dim)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6"
          }}>
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
              <FeatureCard key={i} feature={f} isDark={isDark} />
            ))}
          </div>
        </section>

      </main>
    </>
  );
}

function FeatureCard({ feature, isDark }: { feature: any, isDark: boolean }) {
    const [hover, setHover] = useState(false);

    return (
        <div 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                backgroundColor: isDark ? "#0a0a0a" : "var(--surface)",
                borderRadius: "24px",
                padding: "40px",
                border: hover 
                    ? (isDark ? "1px solid rgba(212, 175, 55, 0.5)" : "1px solid rgba(255, 85, 0, 0.5)") 
                    : (isDark ? "1px solid #222" : "1px solid var(--border-color)"),
                display: "flex", 
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                height: "100%", 
                gap: "20px",
                boxShadow: hover 
                    ? (isDark ? "0 10px 40px rgba(0,0,0,0.5)" : "0 10px 40px rgba(0,0,0,0.1)") 
                    : (isDark ? "none" : "var(--card-shadow)"),
                transform: hover ? "translateY(-8px)" : "translateY(0)",
                cursor: "default"
            }}
        >
            <div style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: isDark 
                    ? "linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.05))" 
                    : "linear-gradient(135deg, rgba(255, 85, 0, 0.2), rgba(255, 85, 0, 0.05))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
                border: isDark ? "1px solid rgba(212, 175, 55, 0.1)" : "1px solid rgba(255, 85, 0, 0.1)"
            }}>
                {feature.icon}
            </div>
            <h3 style={{ 
                color: isDark ? "white" : "var(--text-main)", 
                fontSize: "1.5rem", 
                fontWeight: "700",
                marginBottom: "12px",
                marginTop: 0,
                transition: "color 0.3s ease" 
            }}>
                {feature.title}
            </h3>
            <p style={{ 
                color: isDark ? "#888" : "var(--text-dim)", 
                lineHeight: "1.6",
                fontSize: "1rem",
                margin: 0,
                transition: "color 0.3s ease"
            }}>
                {feature.desc}
            </p>
        </div>
    );
}



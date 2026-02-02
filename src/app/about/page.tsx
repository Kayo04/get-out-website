"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { t } = useLanguage();

  const founders = [
    {
      key: "tiago",
      image: "/tiago.jpg"
    },
    {
      key: "vasco",
      image: "/vasco.jpg"
    },
    {
      key: "bruno",
      image: "/bruno.jpg"
    }
  ];

  return (
    <>
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        {/* Hero */}
        <section className="section">
          <div className="container" style={{ textAlign: "center", maxWidth: "900px" }}>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}
            >
              {t.about.hero_title_1} <span className="text-gradient">{t.about.hero_title_2}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontSize: '1.25rem', color: "var(--text-dim)", lineHeight: 1.6 }}
            >
              {t.about.hero_desc}
            </motion.p>
          </div>
        </section>

        {/* Story Section */}
        <section className="section" style={{ background: 'var(--surface-secondary)' }}>
          <div className="container grid-2" style={{ alignItems: "center", gap: "4rem" }}>
            <div style={{ position: 'relative', height: '400px', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <Image 
                src="/mascote-simples.jpg"
                alt="Get Out Mascot"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <h2 className="text-gradient" style={{ marginBottom: "1.5rem" }}>{t.about.story_title}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "var(--text-main)", lineHeight: 1.7 }}>
                <p>{t.about.story_text_1}</p>
                <p>{t.about.story_text_2}</p>
                <p>{t.about.story_text_3}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section">
          <div className="container">
            <h2 style={{ textAlign: "center", marginBottom: "4rem", fontSize: "2.5rem" }}>
              {t.about.team_title}
            </h2>
            
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
              gap: "2rem" 
            }}>
              {t.about.team && founders.map((founder, index) => {
                const teamData = t.about.team as any; // Cast to any to avoid type complexity during hot reload
                const data = teamData[founder.key];
                
                if (!data) return null;

                return (
                  <motion.div
                    key={founder.key}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card"
                    style={{ 
                      padding: "30px", 
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      background: "rgba(255, 255, 255, 0.03)"
                    }}
                  >
                    <div style={{ 
                      width: "120px", 
                      height: "120px", 
                      borderRadius: "50%", 
                      background: "var(--surface-tertiary)", 
                      marginBottom: "1.5rem",
                      overflow: "hidden",
                      border: "2px solid var(--primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2rem",
                      color: "var(--text-dim)"
                    }}>
                      {/* Placeholder for user image */}
                      {founder.key.charAt(0).toUpperCase()}
                    </div>
                    
                    <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{data.name}</h3>
                    <p style={{ color: "var(--primary)", fontWeight: "600", marginBottom: "0" }}>{data.role}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

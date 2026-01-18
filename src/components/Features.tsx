"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";


export default function Feature() {
    const { t } = useLanguage();

    return (
        <section className="section">
            <div className="container">
                <div style={{ textAlign: "center", marginBottom: "80px" }}>
                    <h2>{t.features.title}</h2>
                    <p style={{ margin: "0 auto" }}>{t.features.subtitle}</p>
                </div>

                <div className="grid-2" style={{ alignItems: "stretch" }}>
                    {/* Mascot Feature Card */}
                    <div
                        className="glass-card"
                        style={{
                            padding: 0,
                            overflow: "hidden",
                            minHeight: "400px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                        }}
                    >
                        <Image
                            src="/mascote-com-luz.jpg"
                            alt="Mascot"
                            width={600}
                            height={600}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                opacity: 0.9,
                            }}
                        />
                        {/* Gradient + texto */}
                        <div
                            style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                width: "100%",
                                padding: "30px",
                                background: "linear-gradient(to top, black, transparent)",
                            }}
                        >
                            <h3 style={{ color: "white" }}>
                                {t.features.mascot_title}
                            </h3>
                            <p style={{ margin: 0, fontSize: "0.9rem", color: "white" }}>
                                {t.features.mascot_desc}
                            </p>
                        </div>
                    </div>

                    {/* Feature Grid */}
                    <div style={{ display: "grid", gap: "30px" }}>
                        <div className="glass-card">
                            <h3 style={{ color: "var(--secondary)" }}>
                                {t.features.heatmaps_title}
                            </h3>
                            <p>{t.features.heatmaps_desc}</p>
                        </div>

                        <div className="glass-card">
                            <h3 style={{ color: "var(--primary)" }}>
                                {t.features.perks_title}
                            </h3>
                            <p>{t.features.perks_desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

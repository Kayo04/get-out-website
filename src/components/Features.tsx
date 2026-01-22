"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CalendarRange, Ticket, UserCheck } from "lucide-react";

export default function Feature() {
    const { t } = useLanguage();

    return (
        <section style={{ backgroundColor: "#050505", padding: "100px 0" }}>
            <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
                {/* Header Section */}
                <div style={{ textAlign: "center", marginBottom: "80px" }}>
                    <h2 style={{ 
                        fontSize: "3rem", 
                        fontWeight: "700", 
                        marginBottom: "16px",
                        color: "white",
                        fontFamily: "system-ui, -apple-system, sans-serif"
                    }}>
                        {t.features.title}
                    </h2>
                    <p style={{ 
                        fontSize: "1.25rem", 
                        color: "#888", 
                        maxWidth: "600px",
                        margin: "0 auto",
                        lineHeight: "1.6",
                        fontFamily: "system-ui, -apple-system, sans-serif"
                    }}>
                        {t.features.subtitle}
                    </p>
                </div>

                {/* Grid Section */}
                <div 
                    style={{ 
                        display: "grid", 
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
                        gap: "24px" 
                    }}
                >
                    {/* Feature 1 */}
                    <FeatureCard 
                        icon={<CalendarRange size={28} color="#FF5500" />}
                        title={t.features.mascot_title}
                        description={t.features.mascot_desc}
                    />

                    {/* Feature 2 */}
                    <FeatureCard 
                        icon={<Ticket size={28} color="#FF5500" />}
                        title={t.features.heatmaps_title}
                        description={t.features.heatmaps_desc}
                    />

                    {/* Feature 3 */}
                    <FeatureCard 
                        icon={<UserCheck size={28} color="#FF5500" />}
                        title={t.features.perks_title}
                        description={t.features.perks_desc}
                    />
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div style={{
            backgroundColor: "#0C0C0C", // Matches the dark card bg in image
            borderRadius: "12px",       // Slightly tighter radius as seen in image
            padding: "48px 32px",       // Generous padding
            border: "1px solid #1F1F1F", // Very subtle dark border
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            transition: "all 0.3s ease",
            height: "100%"
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.borderColor = "#333";
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor = "#1F1F1F";
        }}
        >
            {/* Icon Container */}
            <div style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "#161616", // Darker circle background
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px",
                border: "1px solid #222"
            }}>
                {icon}
            </div>

            {/* Title */}
            <h3 style={{ 
                color: "white", 
                fontSize: "1.25rem", 
                fontWeight: "600",
                marginBottom: "16px",
                fontFamily: "system-ui, -apple-system, sans-serif"
            }}>
                {title}
            </h3>

            {/* Description */}
            <p style={{ 
                color: "#9CA3AF", // Muted grey text
                lineHeight: "1.6",
                fontSize: "0.95rem",
                fontFamily: "system-ui, -apple-system, sans-serif"
            }}>
                {description}
            </p>
        </div>
    );
}
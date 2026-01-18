"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

export default function Testimonials() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      text: t.testimonials ? t.testimonials.review1 : "Finally, an app that understands how hard it is to organize a dinner. No more 50-message threads.",
      user: t.testimonials ? t.testimonials.user1 : "Sarah J.",
      role: t.testimonials ? t.testimonials.role1 : "Event Planner",
      stars: 5,
      date: "12/01/2026"
    },
    {
      text: t.testimonials ? t.testimonials.review2 : "The ticketing system is flawless. Used it for my theatre troupe and it was seamless.",
      user: t.testimonials ? t.testimonials.user2 : "Miguel R.",
      role: t.testimonials ? t.testimonials.role2 : "Theatre Director",
      stars: 5,
      date: "10/01/2026"
    },
    {
      text: t.testimonials ? t.testimonials.review3 : "I love the heatmaps. We always find the best spots on Friday nights.",
      user: t.testimonials ? t.testimonials.user3 : "Andre P.",
      role: t.testimonials ? t.testimonials.role3 : "Student",
      stars: 4,
      date: "05/01/2026"
    }
  ];

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2>{t.testimonials ? t.testimonials.title : "What Users Say"}</h2>
          <p>{t.testimonials ? t.testimonials.subtitle : "Join thousands of satisfied organizers."}</p>
        </div>

        <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', marginTop: '40px' }}>
            
            {/* Review Card - Play Store Style */}
            <div className="glass-card" style={{ padding: '30px', minHeight: '200px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <div style={{ 
                            width: '40px', height: '40px', 
                            background: 'linear-gradient(135deg, var(--primary), var(--secondary))', 
                            borderRadius: '50%',
                            color: 'white', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            {reviews[activeIndex].user.charAt(0)}
                        </div>
                        <div>
                            <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>{reviews[activeIndex].user}</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <span style={{ color: '#FFD700' }}>{'★'.repeat(reviews[activeIndex].stars)}</span>
                                <span>{reviews[activeIndex].date}</span>
                            </div>
                        </div>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Play_Arrow_logo.svg/512px-Google_Play_Arrow_logo.svg.png" alt="Play Store" style={{ width: '20px', opacity: 0.5 }} />
                </div>
                
                <p style={{ color: 'var(--text-dim)', lineHeight: '1.6', margin: 0 }}>
                    "{reviews[activeIndex].text}"
                </p>
            </div>

            {/* Controls (Desktop: Absolute Sides | Mobile: Below Card) */}
            <div className="carousel-controls">
                <button onClick={prevReview} className="nav-btn prev" aria-label="Previous">‹</button>
                <button onClick={nextReview} className="nav-btn next" aria-label="Next">›</button>
            </div>
            
            {/* Dots */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
                {reviews.map((_, i) => (
                    <div 
                        key={i} 
                        onClick={() => setActiveIndex(i)}
                        style={{ 
                            width: '8px', height: '8px', borderRadius: '50%', 
                            background: i === activeIndex ? 'var(--primary)' : 'var(--glass-border)',
                            cursor: 'pointer'
                        }} 
                    />
                ))}
            </div>

        </div>
      </div>
    </section>
  );
}

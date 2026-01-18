"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();

  const faqs = [
    {
      q: t.faq ? t.faq.q1 : "Is the app free?",
      a: t.faq ? t.faq.a1 : "Yes, for free events. We only charge a small fee for paid ticket sales."
    },
    {
      q: t.faq ? t.faq.q2 : "Can I manage private events?",
      a: t.faq ? t.faq.a2 : "Absolutely. You can set events to 'Private' and they won't appear on the public feed."
    },
    {
      q: t.faq ? t.faq.q3 : "How do I get paid for tickets?",
      a: t.faq ? t.faq.a3 : "Payouts are processed weekly directly to your bank account."
    }
  ];

  return (
    <section className="section" style={{ background: 'var(--surface-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2>{t.faq ? t.faq.title : "FAQ"}</h2>
          <p>{t.faq ? t.faq.subtitle : "Everything you need to know."}</p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gap: '20px' }}>
          {faqs.map((item, index) => (
            <div key={index} className="glass-card" style={{ padding: '30px', textAlign: 'left' }}>
              <h4 style={{ color: 'var(--text-main)', marginBottom: '10px', fontSize: '1.1rem' }}>{item.q}</h4>
              <p style={{ margin: 0, color: 'var(--text-dim)', lineHeight: '1.6' }}>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

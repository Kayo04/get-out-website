"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function FAQPage() {
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
      <main style={{ paddingTop: '120px', minHeight: '80vh', paddingBottom: '80px' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h1 className="text-gradient">{t.faq ? t.faq.title : "FAQ"}</h1>
            <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem' }}>{t.faq ? t.faq.subtitle : "Everything you need to know."}</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {faqs.map((item, index) => (
              <div key={index} className="glass-card" style={{ padding: '30px' }}>
                <h3 style={{ color: 'var(--text-main)', marginBottom: '15px', fontSize: '1.2rem' }}>{item.q}</h3>
                <p style={{ margin: 0, color: 'var(--text-dim)', lineHeight: '1.6' }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
  );
}

"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function PricingPage() {
  const { t } = useLanguage();

  const plans = [
    {
      id: "free",
      name: t.pricing_page?.plan_free.name,
      price: t.pricing_page?.plan_free.price,
      period: t.pricing_page?.plan_free.period,
      features: t.pricing_page?.plan_free.features,
      highlight: false
    },
    {
      id: "pro",
      name: t.pricing_page?.plan_pro.name,
      price: t.pricing_page?.plan_pro.price,
      period: t.pricing_page?.plan_pro.period,
      features: t.pricing_page?.plan_pro.features,
      highlight: true
    },
    {
      id: "company",
      name: t.pricing_page?.plan_company.name,
      price: t.pricing_page?.plan_company.price,
      period: t.pricing_page?.plan_company.period,
      features: t.pricing_page?.plan_company.features,
      highlight: false,
      cta: t.pricing_page?.plan_company.cta
    }
  ];

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
    <main style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '80px' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '20px' }}>
            {t.pricing_page?.title || "Simple Pricing"}
          </h1>
          <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem' }}>
            {t.pricing_page?.subtitle || "Choose your plan"}
          </p>
        </div>

        {/* Pricing Cards */}
        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px',
            marginBottom: '100px',
            maxWidth: '1200px',
            marginLeft: 'auto',
            marginRight: 'auto'
        }}>
            {plans.map((plan) => (
                <div 
                    key={plan.id} 
                    className="glass-card" 
                    style={{ 
                        padding: '40px', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        height: '100%',
                        position: 'relative',
                        border: plan.highlight ? '2px solid var(--primary)' : '1px solid rgba(255, 255, 255, 0.1)', // Thicker border
                        transform: plan.highlight ? 'scale(1.1)' : 'none', // Bigger scale
                        boxShadow: plan.highlight ? '0 20px 50px rgba(0, 0, 0, 0.5)' : 'none', // Neutral shadow
                        zIndex: plan.highlight ? 2 : 1,
                        background: plan.highlight ? 'rgba(255, 255, 255, 0.03)' : 'var(--surface)', // Subtle background diff
                    }}
                >
                    {/* Best Option Badge */}
                    {plan.highlight && (
                        <div style={{
                            position: 'absolute',
                            top: '-15px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: 'var(--primary)',
                            color: '#fff',
                            padding: '8px 20px',
                            borderRadius: '20px',
                            fontWeight: '700',
                            fontSize: '0.9rem',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                            whiteSpace: 'nowrap'
                        }}>
                            {t.pricing_page?.best_option || "Best Option"}
                        </div>
                    )}
                    
                    {/* Plan Name */}
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '10px' }}>{plan.name}</h3>
                    
                    {/* Price */}
                    <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'baseline', flexWrap: 'wrap' }}>
                        <span style={{ 
                            fontSize: plan.price && plan.price.length > 8 ? '1.8rem' : '3rem', 
                            fontWeight: '800', 
                            color: plan.highlight ? 'var(--primary)' : 'var(--text-main)',
                            lineHeight: 1
                        }}>
                            {plan.price}
                        </span>
                        {plan.period && (
                            <span style={{ color: 'var(--text-dim)', fontSize: '1.1rem', marginLeft: '5px' }}>
                                {plan.period}
                            </span>
                        )}
                    </div>

                    {/* Features */}
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', flex: 1 }}>
                        {plan.features?.map((feature, idx) => (
                            <li key={idx} style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '12px', 
                                marginBottom: '15px', 
                                color: 'var(--text-main)',
                                fontSize: '1.05rem'
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    {/* Button */}
                    <button style={{
                        width: '100%',
                        padding: '16px',
                        borderRadius: '12px',
                        border: 'none',
                        background: plan.highlight ? 'var(--primary)' : 'rgba(255, 255, 255, 0.1)',
                        color: plan.highlight ? '#fff' : 'var(--text-main)',
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                    }}>
                        {plan.id === 'company' ? t.pricing_page?.plan_company.cta : t.features_page?.get_app_btn}
                    </button>
                    {/* Wait, the button text logic above is a bit messy. Let's simplify. 
                        Free/Pro -> Download (since app is free to download) or "Get Started". 
                        Company -> Contact Us.
                        Let's just use "Download App" for Free/Pro and "Contact Us" for Company.
                        Actually, t.navbar.download is "Download" (removed from navbar but key might be gone?? NO, I removed it from the navbar LIST but did I remove the key from the object? 
                        Let me check the diff. YES, I removed 'download' key from navbar object in en.ts and pt.ts. 
                        I should probably put it back purely as a key for this button or use a new key.
                        Or I can use a hardcoded string or a new key.
                        Let's check 'pricing_page.plan_company.cta'.
                        For others, I'll use "Get App" or similar.
                    */}
                </div>
            ))}
        </div>

        {/* FAQ Section */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{t.faq ? t.faq.title : "FAQ"}</h2>
                <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem' }}>{t.faq ? t.faq.subtitle : "Everything you need to know."}</p>
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

      </div>
    </main>
  );
}

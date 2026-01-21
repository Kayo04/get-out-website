"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function PricingPage() {
  const { t } = useLanguage();
  const [billing, setBilling] = useState<'monthly' | 'annually'>('monthly');

  // ==========================================================
  // CONFIGURAÇÃO DE PREÇOS (AJUSTE AQUI)
  // ==========================================================
  const pricingConfig = {
    basic: { 
      monthly: 4.99, 
      freeMonthsAnnually: 1 // 1 mês grátis
    },
    pro: { 
      monthly: 9.99, 
      freeMonthsAnnually: 2 // 2 meses grátis
    },
    company: { 
      monthly: 29.99, 
      freeMonthsAnnually: 3 // 3 meses grátis
    }
  };

  // Função interna para calcular o preço final com arredondamento estético
  const getPrice = (planId: keyof typeof pricingConfig | 'free') => {
    if (planId === 'free') return "0";
    
    const plan = pricingConfig[planId];
    if (billing === 'annually') {
      // Cálculo base: Preço Mensal * (12 - Meses Grátis)
      const rawPrice = plan.monthly * (12 - plan.freeMonthsAnnually);
      
      // ARREDONDAMENTO ESTÉTICO: 
      // Pegamos o número inteiro e forçamos o final .99
      return (Math.floor(rawPrice) + 0.99).toFixed(2);
    }
    return plan.monthly.toFixed(2);
  };

  const periodLabel = billing === 'annually' ? "PER YEAR" : "PER MONTH";

  const plans = [
    {
      id: "free",
      name: t.pricing_page?.plan_free.name || "Free",
      price: getPrice('free'),
      features: t.pricing_page?.plan_free.features,
      highlight: false,
      freeMonths: 0
    },
    {
      id: "basic",
      name: t.pricing_page?.plan_pro.name || "Basic",
      price: getPrice('basic'),
      features: t.pricing_page?.plan_pro.features,
      highlight: false,
      freeMonths: pricingConfig.basic.freeMonthsAnnually
    },
    {
      id: "pro",
      name: t.pricing_page?.plan_pro_max?.name || "Pro",
      price: getPrice('pro'),
      features: t.pricing_page?.plan_pro_max?.features || [],
      highlight: true,
      freeMonths: pricingConfig.pro.freeMonthsAnnually
    },
    {
      id: "company",
      name: t.pricing_page?.plan_company.name || "Company",
      price: getPrice('company'),
      features: t.pricing_page?.plan_company.features,
      highlight: false,
      cta: t.pricing_page?.plan_company.cta,
      freeMonths: pricingConfig.company.freeMonthsAnnually
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
    <main style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '80px', background: '#0a0a0a' }}>
      <div className="container" style={{ maxWidth: '1400px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 className="text-gradient" style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px', color: 'white' }}>
            {t.pricing_page?.title || "Simple, Transparent Pricing"}
          </h1>

          <div className="flex flex-col items-center justify-center">
            <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '6px',
                borderRadius: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                border: '1px solid rgba(255, 255, 255, 0.1)',
            }}>
              <button
                onClick={() => setBilling('monthly')}
                style={{
                  padding: '10px 24px',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: billing === 'monthly' ? '#ff6b00' : 'transparent',
                  color: billing === 'monthly' ? '#fff' : '#888',
                }}
              >
                Monthly
              </button>
              
              <button
                onClick={() => setBilling('annually')}
                style={{
                  padding: '10px 24px',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: billing === 'annually' ? '#ff6b00' : 'transparent',
                  color: billing === 'annually' ? '#fff' : '#888',
                }}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '24px', 
            maxWidth: '1300px',
            margin: '0 auto 100px auto',
            padding: '20px'
        }}>
            {plans.map((plan) => (
                <div 
                    key={plan.id} 
                    style={{ 
                        padding: '40px', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        height: '100%',
                        position: 'relative',
                        borderRadius: '24px',
                        border: plan.highlight ? '2px solid #ff6b00' : '1px solid rgba(255, 255, 255, 0.1)',
                        transform: plan.highlight ? 'scale(1.05)' : 'none',
                        zIndex: plan.highlight ? 2 : 1,
                        background: '#141414', 
                        transition: 'all 0.3s ease',
                        boxShadow: plan.highlight ? '0 0 40px rgba(255, 107, 0, 0.15)' : 'none'
                    }}
                >
                    {billing === 'annually' && plan.freeMonths > 0 && (
                      <div style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        background: 'rgba(255, 107, 0, 0.1)',
                        color: '#ff6b00',
                        padding: '4px 10px',
                        borderRadius: '8px',
                        fontSize: '0.7rem',
                        fontWeight: '800',
                        border: '1px solid #ff6b00'
                      }}>
                        {plan.freeMonths} {plan.freeMonths === 1 ? 'MONTH' : 'MONTHS'} FREE
                      </div>
                    )}

                    {plan.highlight && (
                        <div style={{
                            position: 'absolute',
                            top: '-15px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: '#ff6b00',
                            color: '#fff',
                            padding: '6px 16px',
                            borderRadius: '20px',
                            fontWeight: '700',
                            fontSize: '0.8rem',
                            whiteSpace: 'nowrap'
                        }}>
                            Best Option
                        </div>
                    )}
                    
                    <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '24px', color: 'white' }}>{plan.name}</h3>
                    
                    <div style={{ marginBottom: '32px', textAlign: 'left' }}>
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                          <span style={{ fontSize: '1.5rem', fontWeight: '700', color: '#ff6b00', position: 'absolute', left: '-18px', top: '8px' }}>€</span>
                          <span style={{ fontSize: '4rem', fontWeight: '800', color: 'white', lineHeight: '1' }}>
                              {plan.price}
                          </span>
                        </div>
                        <div style={{ color: '#666', fontSize: '0.9rem', fontWeight: '600', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            {periodLabel}
                        </div>
                    </div>

                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', flex: 1 }}>
                        {plan.features?.map((feature, idx) => (
                            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px', color: '#ccc', fontSize: '0.95rem' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff6b00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px' }}>
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <button style={{
                        width: '100%',
                        padding: '16px',
                        borderRadius: '14px',
                        border: 'none',
                        background: plan.highlight ? '#ff6b00' : 'rgba(255, 255, 255, 0.05)',
                        color: '#fff',
                        fontSize: '1rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                    }}>
                        {plan.id === 'company' ? (t.pricing_page?.plan_company.cta || "Contact Us") : "Get the App"}
                    </button>
                </div>
            ))}
        </div>

        {/* FAQ Section */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'white', fontWeight: '800' }}>{t.faq ? t.faq.title : "FAQ"}</h2>
                <p style={{ color: '#888', fontSize: '1.1rem' }}>{t.faq ? t.faq.subtitle : "Everything you need to know."}</p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {faqs.map((item, index) => (
                    <div key={index} style={{ 
                        padding: '30px', 
                        background: '#141414', 
                        borderRadius: '20px', 
                        border: '1px solid rgba(255,255,255,0.05)',
                        textAlign: 'left'
                    }}>
                        <h3 style={{ color: 'white', marginBottom: '10px', fontSize: '1.2rem', fontWeight: 'bold' }}>{item.q}</h3>
                        <p style={{ margin: 0, color: '#aaa', lineHeight: '1.6' }}>{item.a}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </main>
  );
}
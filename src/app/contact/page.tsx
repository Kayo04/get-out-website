"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(t.contact_page.success_msg);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
      <main style={{ paddingTop: "100px", minHeight: "80vh" }}>
        <div className="container">
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h1 className="text-gradient" style={{ textAlign: "center", marginBottom: "2rem" }}>{t.contact_page.title}</h1>
            <div className="glass-card">
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                  <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem", color: "var(--text-dim)" }}>{t.contact_page.name_label}</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    style={{ 
                      width: "100%", 
                      padding: "12px", 
                      borderRadius: "8px", 
                      border: "1px solid rgba(255,255,255,0.1)",
                      background: "rgba(255,255,255,0.05)",
                      color: "white"
                    }}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", color: "var(--text-dim)" }}>{t.contact_page.email_label}</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    style={{ 
                      width: "100%", 
                      padding: "12px", 
                      borderRadius: "8px", 
                      border: "1px solid rgba(255,255,255,0.1)",
                      background: "rgba(255,255,255,0.05)",
                      color: "white"
                    }}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="message" style={{ display: "block", marginBottom: "0.5rem", color: "var(--text-dim)" }}>{t.contact_page.message_label}</label>
                  <textarea 
                    id="message"
                    required
                    rows={5}
                    style={{ 
                      width: "100%", 
                      padding: "12px", 
                      borderRadius: "8px", 
                      border: "1px solid rgba(255,255,255,0.1)",
                      background: "rgba(255,255,255,0.05)",
                      color: "white",
                      resize: "vertical"
                    }}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ width: "100%", marginTop: "1rem", opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
                  disabled={loading}
                >
                  {loading ? "Sending..." : t.contact_page.submit_btn}
                </button>
              </form>
            </div>

            <div style={{ marginTop: "3rem", textAlign: "center", color: "var(--text-dim)" }}>
              <p>{t.contact_page.alt_contact} <a href="mailto:getoutappmobile@gmail.com" style={{ color: "var(--primary)" }}>getoutappmobile@gmail.com</a></p>
            </div>
          </div>
        </div>
      </main>
  );
}

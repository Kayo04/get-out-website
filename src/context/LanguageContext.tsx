"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { en, Translations } from "@/locales/en";
import { pt } from "@/locales/pt";

type Locale = "en" | "pt";

interface LanguageContextProps {
  locale: Locale;
  t: Translations;
  toggleLanguage: () => void;
  setLanguage: (lang: Locale) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("en");
  
  useEffect(() => {
    // 1. Check LocalStorage first
    const saved = localStorage.getItem("app-locale") as Locale;
    if (saved && (saved === "en" || saved === "pt")) {
      setLocale(saved);
      return;
    }

    // 2. Fallback to Browser Detection
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith("pt")) {
      setLocale("pt");
    } else {
      setLocale("en");
    }
  }, []);

  const toggleLanguage = () => {
    setLocale((prev) => {
      const next = prev === "en" ? "pt" : "en";
      localStorage.setItem("app-locale", next);
      return next;
    });
  };

  const setLanguage = (lang: Locale) => {
    setLocale(lang);
    localStorage.setItem("app-locale", lang);
  };

  const t = locale === "en" ? en : pt;

  return (
    <LanguageContext.Provider value={{ locale, t, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    // Fallback for build/SSR scenarios where context might be missing?
    return {
      locale: "en",
      t: en,
      toggleLanguage: () => {},
      setLanguage: () => {}
    } as LanguageContextProps;
  }
  return context;
};

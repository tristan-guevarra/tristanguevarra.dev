"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Language = "en" | "fr" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved && ["en", "fr", "es"].includes(saved)) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

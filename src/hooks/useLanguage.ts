"use client";

import { useState, useEffect } from "react";
import { i18n, Language } from "@/lib/i18n";

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("zh");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "zh" || savedLanguage === "en")) {
      setLanguage(savedLanguage);
    }

    const handleLanguageChange = (event: CustomEvent<Language>) => {
      setLanguage(event.detail);
    };

    window.addEventListener("languageChange", handleLanguageChange as EventListener);
    
    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener);
    };
  }, []);

  const t = (key: string) => {
    const keys = key.split(".");
    let value: any = i18n[language];
    
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key; // 如果找不到翻译，返回原key
      }
    }
    
    return value;
  };

  return {
    language,
    setLanguage,
    t,
  };
}

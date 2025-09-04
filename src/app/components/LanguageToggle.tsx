"use client";

import { useState, useEffect } from "react";

export default function LanguageToggle() {
  const [language, setLanguage] = useState<"zh" | "en">("zh");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as "zh" | "en";
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "zh" ? "en" : "zh";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    // 触发语言切换事件，让父组件知道语言已改变
    window.dispatchEvent(new CustomEvent("languageChange", { detail: newLanguage }));
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-full bg-secondary hover:bg-accent transition-colors duration-200 border border-border text-sm font-medium"
      aria-label="切换语言"
      title={language === "zh" ? "Switch to English" : "切换到中文"}
    >
      {language === "zh" ? "EN" : "中"}
    </button>
  );
}

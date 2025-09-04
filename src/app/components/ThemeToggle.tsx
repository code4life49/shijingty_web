"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // 检查本地存储的主题
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    // 检查系统主题偏好
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const currentTheme = savedTheme || systemTheme;
    
    setTheme(currentTheme);
    applyTheme(currentTheme);
  }, []);

  const applyTheme = (newTheme: "light" | "dark") => {
    const root = document.documentElement;
    
    if (newTheme === "dark") {
      root.classList.add("dark");
      root.style.setProperty("--background", "#0F1419");
      root.style.setProperty("--foreground", "#F1F5F9");
      root.style.setProperty("--card", "#1E293B");
      root.style.setProperty("--card-foreground", "#F1F5F9");
      root.style.setProperty("--primary", "#8B9EFF");
      root.style.setProperty("--secondary", "#334155");
      root.style.setProperty("--muted", "#334155");
      root.style.setProperty("--muted-foreground", "#94A3B8");
      root.style.setProperty("--border", "#334155");
    } else {
      root.classList.remove("dark");
      root.style.setProperty("--background", "#F8F9FA");
      root.style.setProperty("--foreground", "#1A1A1A");
      root.style.setProperty("--card", "#FFFFFF");
      root.style.setProperty("--card-foreground", "#1A1A1A");
      root.style.setProperty("--primary", "#667EEA");
      root.style.setProperty("--secondary", "#F3F4F6");
      root.style.setProperty("--muted", "#F3F4F6");
      root.style.setProperty("--muted-foreground", "#6B7280");
      root.style.setProperty("--border", "#E5E7EB");
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-secondary hover:bg-accent transition-colors duration-200 border border-border"
      aria-label="切换主题"
      title={theme === "light" ? "切换到深色模式" : "切换到浅色模式"}
    >
      {theme === "light" ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </button>
  );
}

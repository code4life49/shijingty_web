"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const article = document.querySelector("article.article, article.prose");
      if (!article) return setProgress(0);
      const total = article.scrollHeight - window.innerHeight;
      // Amount scrolled within article relative to top of page
      const scrolled = Math.min(Math.max(window.scrollY - (article as HTMLElement).offsetTop, 0), total);
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      setProgress(pct);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed left-0 right-0 top-0 h-[3px] z-40 bg-transparent">
      <div className="h-full bg-primary/80 transition-[width] duration-150 ease-out" style={{ width: `${progress}%` }} />
    </div>
  );
}

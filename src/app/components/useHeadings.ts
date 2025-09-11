"use client";

import { useEffect, useMemo, useState } from "react";
import { slugify } from "@/lib/slugify";

export type HeadingItem = { id: string; text: string; level: number };

export function useHeadings(containerSelector = "article.prose") {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    const nodes = Array.from(container.querySelectorAll("h1, h2, h3"));
    const items: HeadingItem[] = nodes.map((el, idx) => {
      const text = el.textContent?.trim() || "";
      const level = Number(el.tagName.substring(1));
      const baseId = slugify(text, `section-${idx}`);
      if (!el.id) el.id = baseId;
      return { id: el.id, text, level };
    });
    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).id;
            if (id) setActiveId(id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0, 1] }
    );
    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [containerSelector]);

  const toc = useMemo(() => headings, [headings]);
  return { toc, activeId };
}

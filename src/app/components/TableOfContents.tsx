"use client";

import { useHeadings } from "./useHeadings";

type TocItem = ReturnType<typeof useHeadings>["toc"][number];
type NumberedTocItem = TocItem & { number: string };

function withNumbers(items: ReturnType<typeof useHeadings>["toc"]): NumberedTocItem[] {
  let h2 = 0;
  let h3 = 0;
  return items.map((h): NumberedTocItem => {
    if (h.level === 2) {
      h2 += 1;
      h3 = 0;
      return { ...h, number: `${h2}.` };
    }
    if (h.level === 3) {
      h3 += 1;
      return { ...h, number: `${h2}.${h3}` };
    }
    return { ...h, number: "" };
  });
}

export default function TableOfContents() {
  const { toc, activeId } = useHeadings();
  const numbered = withNumbers(toc);

  if (toc.length === 0) return null;
  return (
    <nav className="text-sm leading-6 sticky top-24 hidden lg:block">
      <div className="font-semibold text-foreground/70 mb-2">目录</div>
      <ul className="space-y-1">
        {numbered.map((h) => (
          <li key={h.id} className={h.level >= 3 ? "pl-6" : h.level === 2 ? "pl-3" : ""}>
            <a href={`#${h.id}`} className={`block truncate hover:text-primary ${activeId === h.id ? "text-primary font-medium" : "text-foreground/70"}`}>
              {h.number && <span className="mr-1 tabular-nums text-foreground/50">{h.number}</span>}
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

"use client";

import { useMemo, useState } from "react";
import Card from "./Card";
import { useLanguage } from "@/hooks/useLanguage";

export type ShowcaseProduct = {
  slug?: string;
  title: string;
  description: string;
  imageUrl?: string;
  logoUrl?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  features: string[];
  comingSoon?: boolean;
};

interface ProductSwitcherProps {
  products: ShowcaseProduct[];
}

export default function ProductSwitcher({ products }: ProductSwitcherProps) {
  const { t, language } = useLanguage();
  const [active, setActive] = useState(0);

  const safeProducts = useMemo(() => products ?? [], [products]);
  const total = safeProducts.length;
  const current = safeProducts[active] ?? safeProducts[0];

  const prev = () => setActive((p) => (p - 1 + total) % total);
  const next = () => setActive((p) => (p + 1) % total);

  // Touch swipe
  let touchStartX = 0;
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) {
      if (dx > 0) {
        prev();
      } else {
        next();
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Logo Carousel */}
      <div className="relative">
        <div className="flex items-center justify-between">
          <button aria-label="prev" onClick={prev} className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-accent">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <div className="flex-1 overflow-x-auto no-scrollbar px-2">
            <div className="flex items-center gap-3 min-w-max">
              {safeProducts.map((p, i) => {
                const activeItem = i === active;
                return (
                  <button key={p.title + i} onClick={() => setActive(i)} className={`group relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all ${activeItem ? "border-primary bg-primary/10" : "border-border hover:bg-accent"}`} title={p.title}>
                    {p.logoUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.logoUrl} alt={p.title} className="h-7 w-7 object-contain" />
                    ) : (
                      <span className="text-sm font-semibold text-foreground/80">{p.title?.slice(0, 1) ?? "A"}</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          <button aria-label="next" onClick={next} className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-accent">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Detail Panel */}
      <Card className="border border-border overflow-hidden" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="lg:flex items-stretch">
          {/* Left: Image */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex justify-center items-center bg-muted/30">
            <div className="relative w-64 h-96 lg:w-80 lg:h-[520px] bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl lg:text-8xl opacity-30">📱</div>
              </div>
              {current?.comingSoon ? <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">{t("products.comingSoon")}</div> : null}
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2 p-8 lg:p-12 space-y-6">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">{current?.title}</h3>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">{current?.description}</p>
            </div>

            {current?.features && current.features.length > 0 ? (
              <div className="grid grid-cols-2 gap-3">
                {current.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            ) : null}

            {current?.comingSoon ? null : (
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                {current?.appStoreUrl ? (
                  <a href={current.appStoreUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg transition-colors duration-200 border border-gray-200 hover:border-gray-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <span className="font-medium">App Store</span>
                  </a>
                ) : null}
                {current?.googlePlayUrl ? (
                  <a href={current.googlePlayUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 px-6 py-3 bg-white hover:bg-gray-50 text-black rounded-lg transition-colors duration-200 border border-gray-200 hover:border-gray-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <span className="font-medium">Google Play</span>
                  </a>
                ) : null}
              </div>
            )}

            {/* Legal & Feedback */}
            <div className="pt-4 mt-2 border-t border-border/60">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <a href={`${current?.slug ? `/${current.slug}/privacy?lang=${language}` : `/privacy?lang=${language}`}`} className="inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 bg-muted/40 hover:bg-muted/60 border border-border/60 text-muted-foreground hover:text-foreground transition-colors">
                  <span className="text-[13px]">🔒</span>
                  <span>{t("legal.privacy")}</span>
                </a>
                <a href={`${current?.slug ? `/${current.slug}/terms?lang=${language}` : `/terms?lang=${language}`}`} className="inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 bg-muted/40 hover:bg-muted/60 border border-border/60 text-muted-foreground hover:text-foreground transition-colors">
                  <span className="text-[13px]">📄</span>
                  <span>{t("legal.terms")}</span>
                </a>
                <a href={`/feedback?product=${encodeURIComponent(current?.title ?? "")}&lang=${language}`} className="inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 bg-muted/40 hover:bg-muted/60 border border-border/60 text-muted-foreground hover:text-foreground transition-colors">
                  <span className="text-[13px]">💬</span>
                  <span>{t("legal.feedback")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Dots */}
      {total > 1 ? (
        <div className="flex items-center justify-center gap-2 pt-2">
          {safeProducts.map((_, i) => (
            <button key={i} aria-label={`go-to-${i}`} onClick={() => setActive(i)} className={`h-1.5 w-6 rounded-full transition-colors ${i === active ? "bg-foreground" : "bg-border"}`} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

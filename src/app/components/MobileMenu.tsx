"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";

interface MobileMenuProps {
  className?: string;
}

export default function MobileMenu({ className }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: "#home", label: t("nav.home") },
    { href: "#products", label: t("nav.products") },
    { href: "#about", label: t("nav.about") },
    { href: "#contact", label: t("nav.contact") },
  ];

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  return (
    <div className={cn("md:hidden", className)}>
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors border border-border"
        aria-label={t("nav.home")}
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
        title="菜单"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Dim overlay under the menu panel */}
          <div
            className="fixed top-16 left-0 right-0 bottom-0 bg-black/30 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-menu-panel"
            className="fixed top-16 left-0 right-0 bg-background border-b border-border shadow-lg z-50 md:hidden"
            role="dialog"
            aria-modal="true"
          >
            <nav className="px-4 py-6 space-y-4 max-h-[calc(100vh-4rem)] overflow-auto">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </div>
  );
}

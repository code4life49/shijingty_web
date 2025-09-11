"use client";

import { ComponentType, useEffect, useState } from "react";

interface MDXWrapperProps {
  loaderId: string;
  fallback?: React.ReactNode;
}

export default function MDXWrapper({ loaderId, fallback }: MDXWrapperProps) {
  const [Mod, setMod] = useState<ComponentType<any> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMDX() {
      try {
        let module;
        switch (loaderId) {
          case "smart-ledger-privacy-zh":
            module = await import("@/content/legal/smart-ledger/privacy.zh.mdx");
            break;
          case "smart-ledger-privacy-en":
            module = await import("@/content/legal/smart-ledger/privacy.en.mdx");
            break;
          case "smart-ledger-terms-zh":
            module = await import("@/content/legal/smart-ledger/terms.zh.mdx");
            break;
          case "smart-ledger-terms-en":
            module = await import("@/content/legal/smart-ledger/terms.en.mdx");
            break;
          default:
            throw new Error(`Unknown loader ID: ${loaderId}`);
        }
        setMod(() => module.default);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load MDX:", error);
        setLoading(false);
      }
    }

    loadMDX();
  }, [loaderId]);

  if (loading) {
    return fallback || <div>Loading...</div>;
  }

  if (!Mod) {
    return <div>Failed to load content.</div>;
  }

  return <Mod />;
}

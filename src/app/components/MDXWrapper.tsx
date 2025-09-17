"use client";

import { ComponentType, useEffect, useState } from "react";

interface MDXWrapperProps {
  loaderId: string;
  fallback?: React.ReactNode;
}

export default function MDXWrapper({ loaderId, fallback }: MDXWrapperProps) {
  const [Mod, setMod] = useState<ComponentType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMDX() {
      try {
        let mod: { default: ComponentType };
        switch (loaderId) {
          case "delaybuy-privacy-zh":
            mod = await import("@/content/legal/delaybuy/privacy.zh.mdx");
            break;
          case "delaybuy-privacy-en":
            mod = await import("@/content/legal/delaybuy/privacy.en.mdx");
            break;
          case "delaybuy-terms-zh":
            mod = await import("@/content/legal/delaybuy/terms.zh.mdx");
            break;
          case "delaybuy-terms-en":
            mod = await import("@/content/legal/delaybuy/terms.en.mdx");
            break;
          default:
            throw new Error(`Unknown loader ID: ${loaderId}`);
        }
        setMod(() => mod.default);
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

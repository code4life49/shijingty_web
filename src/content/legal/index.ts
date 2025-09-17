// Type helpers are inferred from imports in pages; no extra helpers needed here.

export const legalLoaders = {
  "delaybuy": {
    privacy: {
      zh: () => import("./delaybuy/privacy.zh.mdx"),
      en: () => import("./delaybuy/privacy.en.mdx"),
    },
    terms: {
      zh: () => import("./delaybuy/terms.zh.mdx"),
      en: () => import("./delaybuy/terms.en.mdx"),
    },
  },
} as const;

export type LegalDoc = keyof (typeof legalLoaders)["delaybuy"];

export type LegalLoaders = typeof legalLoaders;

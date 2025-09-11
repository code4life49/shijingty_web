export const legalLoaders = {
  "smart-ledger": {
    privacy: {
      zh: () => import("./smart-ledger/privacy.zh.mdx"),
      en: () => import("./smart-ledger/privacy.en.mdx"),
    },
    terms: {
      zh: () => import("./smart-ledger/terms.zh.mdx"),
      en: () => import("./smart-ledger/terms.en.mdx"),
    },
  },
} as const;

export type LegalDoc = keyof (typeof legalLoaders)["smart-ledger"];

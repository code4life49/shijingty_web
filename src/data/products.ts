export type ProductEntry = {
  slug: string;
  name: string;
  shortName?: string;
  contactEmail?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  legalFlags?: {
    analytics?: string[];
    sdks?: string[];
    permissions?: string[];
  };
};

export const products: ProductEntry[] = [
  {
    slug: "smart-ledger",
    name: "智能记账助手",
    shortName: "记账助手",
    contactEmail: "contact@shijingty.com",
    appStoreUrl: "https://apps.apple.com/app/example",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=example",
    legalFlags: {
      analytics: ["Apple App Analytics"],
      sdks: [],
      permissions: ["网络访问"],
    },
  },
];

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);

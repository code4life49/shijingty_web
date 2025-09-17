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
    slug: "delaybuy",
    name: "DelayBuy",
    shortName: "DelayBuy",
    contactEmail: "contact@shijingty.com",
    appStoreUrl: "https://apps.apple.com/app/delaybuy",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.shijingty.delaybuy",
    legalFlags: {
      analytics: ["Apple App Analytics", "Google Analytics"],
      sdks: ["Firebase", "RevenueCat"],
      permissions: ["网络访问", "本地存储", "推送通知"],
    },
  },
];

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);

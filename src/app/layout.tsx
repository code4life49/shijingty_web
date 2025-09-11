import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "诗璟同悦 - ShiJing TongYue | 独立开发者工作室",
  description: "专注于原创应用开发和数字产品创新的独立开发工作室。将创意想法转化为用户喜爱的应用。",
  keywords: "独立开发者, 应用开发, 数字产品, 创意软件, 诗璟同悦, ShiJingTY, indie hacker",
  authors: [{ name: "诗璟同悦 ShiJing TongYue" }],
  creator: "诗璟同悦 ShiJing TongYue",
  publisher: "诗璟同悦 ShiJing TongYue",
  openGraph: {
    title: "诗璟同悦 - ShiJing TongYue | 独立开发者工作室",
    description: "专注于原创应用开发和数字产品创新的独立开发工作室。",
    url: "https://shijingty.com",
    siteName: "诗璟同悦 ShiJing TongYue",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "诗璟同悦 - ShiJing TongYue | 独立开发者工作室",
    description: "专注于原创应用开发和数字产品创新的独立开发工作室。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#667EEA" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#8B9EFF" media="(prefers-color-scheme: dark)" />
      </head>
      <body className="antialiased bg-background text-foreground transition-colors duration-200">{children}</body>
    </html>
  );
}

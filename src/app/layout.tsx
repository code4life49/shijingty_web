import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShijingTY Technologies - Indie Hacker & Creative Digital Products",
  description: "Independent software development studio focused on creating innovative digital products and applications. Turning creative ideas into apps that users love.",
  keywords: "indie hacker, app development, digital products, creative software, ShijingTY, 诗璟同悦",
  authors: [{ name: "ShijingTY Technologies" }],
  creator: "ShijingTY Technologies",
  publisher: "ShijingTY Technologies",
  openGraph: {
    title: "ShijingTY Technologies - Indie Hacker & Creative Digital Products",
    description: "Independent software development studio focused on creating innovative digital products and applications.",
    url: "https://shijingty.com",
    siteName: "ShijingTY Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShijingTY Technologies - Indie Hacker & Creative Digital Products",
    description: "Independent software development studio focused on creating innovative digital products and applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

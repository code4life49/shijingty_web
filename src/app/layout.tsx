import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShiJing TongYue - Indie Hacker",
  description: "Shanghai ShiJing TongYue Network Technology Co., Ltd. - Independent Development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

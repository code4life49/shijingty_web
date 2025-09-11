import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  async redirects() {
    return [
      { source: "/legal/:product/privacy", destination: "/:product/privacy", permanent: false },
      { source: "/legal/:product/terms", destination: "/:product/terms", permanent: false },
    ];
  },
};

export default withMDX(nextConfig);

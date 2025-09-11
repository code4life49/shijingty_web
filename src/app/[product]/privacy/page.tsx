import LegalLayout from "@/app/components/LegalLayout";
import MDXWrapper from "@/app/components/MDXWrapper";
import { getProductBySlug, products } from "@/data/products";
import { legalLoaders } from "@/content/legal";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ product: string }>; searchParams: Promise<{ lang?: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ product: p.slug }));
}

export default async function ProductPrivacyPage({ params, searchParams }: Props) {
  const { product: slug } = await params;
  const { lang: langRaw } = await searchParams;
  const lang = (langRaw === "en" ? "en" : "zh") as "zh" | "en";
  const product = getProductBySlug(slug);
  if (!product) {
    // Unknown product -> 404
    notFound();
  }

  const loaders = (legalLoaders as typeof legalLoaders)[slug as keyof typeof legalLoaders]?.privacy;
  const load = loaders?.[lang] ?? loaders?.zh ?? loaders?.en;
  if (!load) {
    return (
      <LegalLayout title={`${product.name} · Privacy Policy`} subtitle={`Missing content for ${product.name}`}>
        <p>Content not available.</p>
      </LegalLayout>
    );
  }

  const loaderId = `${slug}-privacy-${lang}` as `${string}-privacy-${"zh" | "en"}`;
  const pageTitle = lang === "zh" ? `${product.name} · 隐私政策` : `${product.name} · Privacy Policy`;
  const subTitle = lang === "zh" ? "本页面说明本应用的隐私实践。" : "This page describes the app's privacy practices.";

  return (
    <LegalLayout title={pageTitle} subtitle={subTitle}>
      <MDXWrapper loaderId={loaderId} fallback={<div>加载中...</div>} />
    </LegalLayout>
  );
}

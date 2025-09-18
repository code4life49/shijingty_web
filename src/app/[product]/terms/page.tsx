import LegalLayout from "@/app/components/LegalLayout";
import MDXWrapper from "@/app/components/MDXWrapper";
import { legalLoaders } from "@/content/legal";
import { getProductBySlug, products } from "@/data/products";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ product: string }>; searchParams: Promise<{ lang?: string }> };

export async function generateStaticParams() {
    return products.map((p) => ({ product: p.slug }));
}

export default async function ProductTermsPage({ params, searchParams }: Props) {
    const { product: slug } = await params;
    const { lang: langRaw } = await searchParams;
    const lang = (langRaw === "en" ? "en" : "zh") as "zh" | "en";
    const product = getProductBySlug(slug);
    if (!product) {
        notFound();
    }

    const loaders = (legalLoaders as typeof legalLoaders)[slug as keyof typeof legalLoaders]?.terms;
    const load = loaders?.[lang] ?? loaders?.zh ?? loaders?.en;
    if (!load) {
        return (
            <LegalLayout title={`${product.name} · Terms`} subtitle={`Missing content for ${product.name}`}>
                <p>Content not available.</p>
            </LegalLayout>
        );
    }

    const loaderId = `${slug}-terms-${lang}` as `${string}-terms-${"zh" | "en"}`;
    const pageTitle = lang === "zh" ? `${product.name} · 服务条款` : `${product.name} · Terms & Conditions`;
    const subTitle = lang === "zh" ? "最后更新日期：2025年1月22日" : "Last updated: January 22, 2025";

    return (
        <LegalLayout title={pageTitle} subtitle={subTitle}>
            <MDXWrapper loaderId={loaderId} fallback={<div>加载中...</div>} />
        </LegalLayout>
    );
}

"use client";
import { useLanguage } from "@/hooks/useLanguage";
import Button from "./components/Button";
import LanguageToggle from "./components/LanguageToggle";
import MobileMenu from "./components/MobileMenu";
import ProductSwitcher from "./components/ProductSwitcher";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
    const { t } = useLanguage();

    // DelayBuy 产品数据
    const products = [
        {
            slug: "delaybuy",
            title: "DelayBuy",
            description: {
                zh: "智能延迟购买助手，帮助您理性消费。通过延迟购买机制和冲动干预提醒，让您做出更明智的消费决策，避免冲动购物，培养健康的消费习惯。",
                en: "Smart delayed purchase assistant to help you make rational consumption decisions. Through delayed purchase mechanisms and impulse intervention reminders, make wiser spending choices, avoid impulse shopping, and develop healthy consumption habits."
            },
            imageUrl: "/api/placeholder/300/600", // 这里可以替换为实际的应用截图
            logoUrl: "/logos/delaybuy/logo_light.png", // 默认使用浅色版本，ProductSwitcher 会根据主题切换
            appStoreUrl: "https://apps.apple.com/app/delaybuy",
            googlePlayUrl: "https://play.google.com/store/apps/details?id=com.shijingty.delaybuy",
            features: {
                zh: ["延迟购买机制", "冲动干预提醒", "消费决策记录", "节省金额统计", "智能分析激励"],
                en: ["Delayed Purchase Mechanism", "Impulse Intervention Reminders", "Spending Decision Records", "Savings Statistics", "Smart Analysis & Motivation"]
            },
            comingSoon: false,
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                                <span className="text-sm font-bold text-primary-foreground">诗</span>
                            </div>
                            <span className="text-xl font-bold">诗璟同悦</span>
                        </div>

                        <div className="hidden md:flex items-center space-x-6">
                            <a href="#products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                {t("nav.home")}
                            </a>
                            <a href="#products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                {t("nav.products")}
                            </a>
                            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                {t("nav.about")}
                            </a>
                            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                {t("nav.contact")}
                            </a>
                        </div>

                        <div className="flex items-center space-x-4">
                            <LanguageToggle />
                            <ThemeToggle />
                            <MobileMenu />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero removed: Start directly with Products section */}

            {/* Products Showcase - 轮播展示 */}
            <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{t("hero.title")}</h1>
                        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">{t("hero.philosophy")}</p>
                    </div>

                    <ProductSwitcher products={products} />

                    {/* 产品特色说明 */}
                    <div className="bg-background rounded-2xl p-8 lg:p-12 border border-border mt-16">
                        <div className="text-center mb-8">
                            <h3 className="text-xl lg:text-2xl font-bold mb-4">{t("products.whyChoose")}</h3>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-sm lg:text-base">{t("products.whyChooseDesc")}</p>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="text-xl">🧘</span>
                                </div>
                                <h4 className="font-semibold mb-2 text-sm">{t("products.features.adFreeLimited")}</h4>
                                <p className="text-xs text-muted-foreground">{t("products.features.adFreeLimitedDesc")}</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="text-xl">⚡</span>
                                </div>
                                <h4 className="font-semibold mb-2 text-sm">{t("products.features.instantLight")}</h4>
                                <p className="text-xs text-muted-foreground">{t("products.features.instantLightDesc")}</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="text-xl">💬</span>
                                </div>
                                <h4 className="font-semibold mb-2 text-sm">{t("products.features.uxFeedback")}</h4>
                                <p className="text-xs text-muted-foreground">{t("products.features.uxFeedbackDesc")}</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="text-xl">🧩</span>
                                </div>
                                <h4 className="font-semibold mb-2 text-sm">{t("products.features.smallFocused")}</h4>
                                <p className="text-xs text-muted-foreground">{t("products.features.smallFocusedDesc")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About & Contact - 简化版本 */}
            <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold">{t("about.title")}</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">{t("about.description")}</p>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span className="text-muted-foreground">{t("about.features.fullstack")}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span className="text-muted-foreground">{t("about.features.productFocus")}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span className="text-muted-foreground">{t("about.features.userCentered")}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span className="text-muted-foreground">{t("about.features.continuousOptimization")}</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto mb-8 flex items-center justify-center">
                                <span className="text-4xl font-bold text-primary-foreground">诗</span>
                            </div>
                            <div id="contact" className="space-y-4">
                                <h4 className="text-xl font-semibold">{t("contact.title")}</h4>
                                <p className="text-muted-foreground text-sm">{t("contact.description")}</p>
                                <Button href={`mailto:${t("contact.email")}`}>{t("contact.button")}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-muted/10 border-t border-border">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-3">
                            <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                                <span className="text-xs font-bold text-primary-foreground">诗</span>
                            </div>
                            <span className="font-semibold">{t("footer.company")}</span>
                        </div>

                        <div className="text-center md:text-left">
                            <p className="text-muted-foreground text-sm">{t("footer.slogan")}</p>
                        </div>

                        <div className="text-xs text-muted-foreground text-center md:text-right space-y-1">
                            <div>
                                © 2025 {t("footer.companyEn")} · {t("footer.rights")}
                            </div>
                            <div>
                                {t("footer.madeWith")} by{" "}
                                <a href="https://code4life.net" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline">
                                    CODE4LIFE
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

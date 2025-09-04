"use client";

import { useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle";
import Button from "./components/Button";
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from "./components/Card";
import MobileMenu from "./components/MobileMenu";
import LanguageToggle from "./components/LanguageToggle";
import ProductCard from "./components/ProductCard";
import { useLanguage } from "@/hooks/useLanguage";

export default function Home() {
  const { t } = useLanguage();
  
  // 示例产品数据 - 您可以根据实际情况修改
  const products = [
    {
      title: "智能记账助手",
      description: "简单易用的个人财务管理应用，帮助您轻松追踪收支，制定预算计划，实现财务目标。",
      imageUrl: "/api/placeholder/300/600", // 这里可以替换为实际的应用截图
      appStoreUrl: "https://apps.apple.com/app/example",
      googlePlayUrl: "https://play.google.com/store/apps/details?id=example",
      features: ["智能分类", "预算管理", "数据可视化", "云端同步"],
      comingSoon: false,
    },
    {
      title: "专注时间管理",
      description: "基于番茄工作法的时间管理工具，提高工作效率，培养专注习惯，让时间更有价值。",
      imageUrl: "/api/placeholder/300/600",
      appStoreUrl: "https://apps.apple.com/app/example2",
      googlePlayUrl: "https://play.google.com/store/apps/details?id=example2",
      features: ["番茄计时", "任务管理", "统计报告", "专注提醒"],
      comingSoon: false,
    },
    {
      title: "创意灵感收集",
      description: "随时随地记录灵感和想法，支持文字、图片、语音等多种形式，让创意不再流失。",
      imageUrl: "/api/placeholder/300/600",
      features: ["多格式记录", "标签分类", "云端同步", "快速搜索"],
      comingSoon: true,
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
              <a href="#home" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
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

      {/* Main Philosophy Section - 核心理念展示 */}
      <section id="home" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* 主标题区域 - 简化版 */}
          <div className="text-center mb-16">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-light text-muted-foreground mb-4">
              {t("hero.philosophy")}
            </h1>
          </div>

          {/* 核心价值观 */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="group">
              <Card className="h-full text-center p-8 hover:shadow-lg transition-all duration-300 border-2 border-primary/10 hover:border-primary/30 hover:scale-105">
                <div className="text-primary text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🚫</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{t("products.philosophy.noAds")}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("products.philosophy.noAdsDesc")}
                </p>
              </Card>
            </div>
            
            <div className="group">
              <Card className="h-full text-center p-8 hover:shadow-lg transition-all duration-300 border-2 border-primary/10 hover:border-primary/30 hover:scale-105">
                <div className="text-primary text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">✨</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{t("products.philosophy.minimalUI")}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("products.philosophy.minimalUIDesc")}
                </p>
              </Card>
            </div>
            
            <div className="group">
              <Card className="h-full text-center p-8 hover:shadow-lg transition-all duration-300 border-2 border-primary/10 hover:border-primary/30 hover:scale-105">
                <div className="text-primary text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">�</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{t("products.philosophy.practical")}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("products.philosophy.practicalDesc")}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase - 产品展示 */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">{t("products.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("products.subtitle")}
            </p>
          </div>

          {/* 产品列表 - 全宽度展示 */}
          <div className="space-y-12">
            {products.map((product, index) => (
              <div 
                key={index} 
                className={`group bg-background rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-500 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`lg:flex ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} items-center`}>
                  {/* 产品图片 */}
                  <div className="lg:w-1/2 p-8 lg:p-12 flex justify-center">
                    <div className="relative w-64 h-96 lg:w-80 lg:h-[500px] bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl lg:text-8xl opacity-30">📱</div>
                      </div>
                      {product.comingSoon && (
                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                          {t("products.comingSoon")}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 产品信息 */}
                  <div className="lg:w-1/2 p-8 lg:p-12 space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-6">
                        {product.description}
                      </p>
                    </div>

                    {/* 功能特色 */}
                    <div className="grid grid-cols-2 gap-3">
                      {product.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-center space-x-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* 下载按钮 */}
                    {!product.comingSoon && (
                      <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        {product.appStoreUrl && (
                          <a
                            href={product.appStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center space-x-3 px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg transition-colors duration-200 border border-gray-200 hover:border-gray-300"
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                            <span className="font-medium">App Store</span>
                          </a>
                        )}
                        {product.googlePlayUrl && (
                          <a
                            href={product.googlePlayUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center space-x-3 px-6 py-3 bg-white hover:bg-gray-50 text-black rounded-lg transition-colors duration-200 border border-gray-200 hover:border-gray-300"
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                            </svg>
                            <span className="font-medium">Google Play</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 产品特色说明 */}
          <div className="bg-background rounded-2xl p-8 lg:p-12 border border-border mt-16">
            <div className="text-center mb-8">
              <h3 className="text-xl lg:text-2xl font-bold mb-4">{t("products.whyChoose")}</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm lg:text-base">
                {t("products.whyChooseDesc")}
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">🎨</span>
                </div>
                <h4 className="font-semibold mb-2 text-sm">{t("products.features.innovative")}</h4>
                <p className="text-xs text-muted-foreground">{t("products.features.innovativeDesc")}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">🚀</span>
                </div>
                <h4 className="font-semibold mb-2 text-sm">{t("products.features.fastLaunch")}</h4>
                <p className="text-xs text-muted-foreground">{t("products.features.fastLaunchDesc")}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">🛡️</span>
                </div>
                <h4 className="font-semibold mb-2 text-sm">{t("products.features.secure")}</h4>
                <p className="text-xs text-muted-foreground">{t("products.features.secureDesc")}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">💡</span>
                </div>
                <h4 className="font-semibold mb-2 text-sm">{t("products.features.innovation")}</h4>
                <p className="text-xs text-muted-foreground">{t("products.features.innovationDesc")}</p>
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
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about.description")}
              </p>
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
                <p className="text-muted-foreground text-sm">
                  {t("contact.description")}
                </p>
                <Button href={`mailto:${t("contact.email")}`}>
                  {t("contact.button")}
                </Button>
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
              <p className="text-muted-foreground text-sm">
                {t("footer.slogan")}
              </p>
            </div>
            
            <div className="text-xs text-muted-foreground text-center md:text-right space-y-1">
              <div>© 2025 {t("footer.companyEn")} · {t("footer.rights")}</div>
              <div>
                {t("footer.madeWith")} by{" "}
                <a 
                  href="https://code4life.net" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors underline"
                >
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

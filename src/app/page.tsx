"use client";

import { useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle";
import Button from "./components/Button";
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./components/Card";
import MobileMenu from "./components/MobileMenu";
import LanguageToggle from "./components/LanguageToggle";
import { useLanguage } from "@/hooks/useLanguage";

export default function Home() {
  const { t } = useLanguage();

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
              <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.about")}
              </a>
              <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.services")}
              </a>
              <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.projects")}
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

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              {t("hero.title")}
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-muted-foreground mb-8 font-medium">
            {t("hero.subtitle")}
          </h2>
          <div className="text-2xl sm:text-3xl font-light text-primary mb-6">
            {t("hero.description")}
          </div>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {t("hero.summary")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" href="#projects">
              {t("hero.viewWork")}
            </Button>
            <Button variant="outline" size="lg" href="#contact">
              {t("hero.contactMe")}
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12">{t("about.title")}</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-primary">{t("about.subtitle")}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.description")}
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">{t("about.features.appDev")}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">{t("about.features.digitalProducts")}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">{t("about.features.userCentered")}</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary-foreground">诗</span>
              </div>
              <p className="text-muted-foreground italic">"{t("about.quote")}"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-center mb-12">{t("services.title")}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="text-primary text-3xl mb-4">🚀</div>
                <CardTitle>{t("services.originalApps.title")}</CardTitle>
                <CardDescription>
                  {t("services.originalApps.description")}
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="text-primary text-3xl mb-4">💡</div>
                <CardTitle>{t("services.creativeProducts.title")}</CardTitle>
                <CardDescription>
                  {t("services.creativeProducts.description")}
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="text-primary text-3xl mb-4">🤝</div>
                <CardTitle>{t("services.partnerships.title")}</CardTitle>
                <CardDescription>
                  {t("services.partnerships.description")}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-center mb-12">{t("projects.title")}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <span className="text-white text-lg font-medium">
                  {t("projects.project1.screenshot")}
                </span>
              </div>
              <CardContent>
                <h4 className="text-xl font-semibold mb-2">{t("projects.project1.title")}</h4>
                <p className="text-muted-foreground mb-4">
                  {t("projects.project1.description")}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-600 text-xs rounded-full">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-600 text-xs rounded-full">
                    MongoDB
                  </span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-primary hover:text-primary/80 text-sm font-medium">
                    {t("projects.project1.liveDemo")}
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
                    {t("projects.project1.github")}
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                <span className="text-white text-lg font-medium">
                  {t("projects.project2.screenshot")}
                </span>
              </div>
              <CardContent>
                <h4 className="text-xl font-semibold mb-2">{t("projects.project2.title")}</h4>
                <p className="text-muted-foreground mb-4">
                  {t("projects.project2.description")}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    React
                  </span>
                  <span className="px-3 py-1 bg-yellow-500/10 text-yellow-600 text-xs rounded-full">
                    Firebase
                  </span>
                  <span className="px-3 py-1 bg-red-500/10 text-red-600 text-xs rounded-full">
                    Redux
                  </span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-primary hover:text-primary/80 text-sm font-medium">
                    {t("projects.project2.liveDemo")}
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
                    {t("projects.project2.github")}
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <span className="text-white text-lg font-medium">
                  {t("projects.project3.screenshot")}
                </span>
              </div>
              <CardContent>
                <h4 className="text-xl font-semibold mb-2">{t("projects.project3.title")}</h4>
                <p className="text-muted-foreground mb-4">
                  {t("projects.project3.description")}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-600 text-xs rounded-full">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-600 text-xs rounded-full">
                    OpenAI
                  </span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-600 text-xs rounded-full">
                    FastAPI
                  </span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-primary hover:text-primary/80 text-sm font-medium">
                    {t("projects.project3.liveDemo")}
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
                    {t("projects.project3.github")}
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold mb-8">{t("contact.title")}</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {t("contact.description")}
          </p>
          <Button size="lg" href="mailto:contact@shijingty.com">
            {t("contact.button")}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-bold text-lg">{t("footer.company")}</div>
            <div className="text-sm text-muted-foreground">{t("footer.companyEn")}</div>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2025{" "}
            <a 
              href="https://code4life.net" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
            >
              CODE4LIFE
            </a>
            . {t("footer.rights")}
          </div>
        </div>
      </footer>
    </div>
  );
}

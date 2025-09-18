"use client";

import { ReactNode } from "react";
import ReadingProgress from "./ReadingProgress";
import TableOfContents from "./TableOfContents";

export default function LegalLayout({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
    return (
        <div className="min-h-screen bg-background">
            <ReadingProgress />
            <div className="container mx-auto max-w-6xl px-6 py-10">
                <header className="mb-8 pb-5 border-b border-border/30 sticky top-0 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-30">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.15]">{title}</h1>
                    <p className="mt-2 text-base md:text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
                </header>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
                    <article className="legal-document prose prose-lg dark:prose-invert mx-auto max-w-3xl md:max-w-4xl prose-headings:font-bold prose-headings:tracking-tight prose-a:no-underline hover:prose-a:underline prose-a:decoration-2 prose-a:underline-offset-4">{children}</article>
                    <aside>
                        <TableOfContents />
                    </aside>
                </div>
            </div>
        </div>
    );
}

"use client";

import { useEffect, useState } from "react";

interface DelayBuyLogoProps {
    className?: string;
    width?: number;
    height?: number;
    alt?: string;
}

export default function DelayBuyLogo({
    className = "",
    width = 32,
    height = 32,
    alt = "DelayBuy"
}: DelayBuyLogoProps) {
    const [mounted, setMounted] = useState(false);
    const [isDark, setIsDark] = useState(false);

    // 防止 hydration 不匹配
    useEffect(() => {
        setMounted(true);

        // 检测主题
        const checkTheme = () => {
            // 优先检查 HTML 元素的 class
            const hasDarkClass = document.documentElement.classList.contains('dark');
            // 如果没有 dark class，则检查系统偏好
            const prefersDark = !hasDarkClass && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            const isDarkMode = hasDarkClass || prefersDark;
            setIsDark(isDarkMode);
        };

        checkTheme();

        // 监听主题变化
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        // 监听系统主题变化
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', checkTheme);

        return () => {
            observer.disconnect();
            mediaQuery.removeEventListener('change', checkTheme);
        };
    }, []);

    if (!mounted) {
        // 在服务端渲染时显示一个占位符
        return (
            <div
                className={`bg-muted animate-pulse rounded ${className}`}
                style={{ width, height }}
                aria-label={alt}
            />
        );
    }

    // 根据主题选择对应的 logo
    const logoSrc = isDark
        ? "/logos/delaybuy/logo_dark.png"
        : "/logos/delaybuy/logo_light.png";

    return (
        <img
            src={logoSrc}
            alt={alt}
            width={width}
            height={height}
            className={className}
        />
    );
}

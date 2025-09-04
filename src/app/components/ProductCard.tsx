import React from "react";
import { cn } from "@/lib/utils";
import Card, { CardContent } from "./Card";

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  comingSoon?: boolean;
  features: string[];
  className?: string;
}

export default function ProductCard({
  title,
  description,
  imageUrl,
  appStoreUrl,
  googlePlayUrl,
  comingSoon = false,
  features,
  className,
}: ProductCardProps) {
  return (
    <Card className={cn("overflow-hidden hover:shadow-xl transition-all duration-300 group", className)}>
      {/* 产品截图区域 */}
      <div className="relative overflow-hidden">
        <div className="aspect-[9/16] bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={`${title} 应用截图`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="text-center text-muted-foreground">
              <div className="text-4xl mb-2">📱</div>
              <div className="text-sm">应用截图</div>
            </div>
          )}
        </div>
        
        {/* 即将推出标签 */}
        {comingSoon && (
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            即将推出
          </div>
        )}
      </div>

      <CardContent className="p-6">
        {/* 产品标题和描述 */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>

        {/* 产品特性 */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* 下载按钮区域 */}
        <div className="space-y-3">
          {comingSoon ? (
            <div className="text-center py-3 text-muted-foreground">
              <div className="text-sm">敬请期待</div>
            </div>
          ) : (
            <>
              {appStoreUrl && (
                <a
                  href={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-black text-white hover:bg-gray-800 px-4 py-3 rounded-lg transition-colors font-medium"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </a>
              )}
              
              {googlePlayUrl && (
                <a
                  href={googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-green-600 text-white hover:bg-green-700 px-4 py-3 rounded-lg transition-colors font-medium"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Google Play
                </a>
              )}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

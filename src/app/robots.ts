import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // 1. Determine Environment Context
  // VERCEL_ENV is set by Vercel: 'production', 'preview', or 'development'
  // For other platforms, fallback to NODE_ENV check
  const isProduction = 
    process.env.VERCEL_ENV === 'production' || 
    (process.env.VERCEL_ENV === undefined && process.env.NODE_ENV === 'production');
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rhinopanelbeaters.co.za';

  // 2. Defensive Posture for Non-Production
  // CRITICAL: Block all crawlers in staging/preview/development environments
  // This prevents "environment leakage" where staging URLs get indexed by Google
  if (!isProduction) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/', // TOTAL BLOCK - prevents staging from being indexed
      },
      // Do not expose sitemap in non-prod to prevent discovery
    };
  }

  // 3. Permissive Posture for Production
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',      // Hide API routes (save crawl budget)
        '/admin/',    // Hide admin routes (if you add them later)
        '/private/',  // Hide private folders
        // Note: We do NOT disallow /_next/ as it contains CSS/JS required for rendering
        // Blocking /_next/ would prevent Googlebot from rendering the page content
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
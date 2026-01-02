/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for modern browsers - remove legacy JS polyfills
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  
  // CRITICAL SEO: Trailing slash configuration
  // Must match canonical URL strategy across all pages
  // false = URLs without trailing slash (e.g., /about)
  // true = URLs with trailing slash (e.g., /about/)
  // Default is false, but we explicitly set it for clarity
  trailingSlash: false,
  
  // Optimize images - AVIF prioritized for maximum compression
  images: {
    formats: ["image/avif", "image/webp"], // AVIF first for best compression
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Enable modern formats for better performance
    remotePatterns: [],
  },
  
  // Reduce JavaScript bundle size
  experimental: {
    optimizePackageImports: ["lucide-react", "@radix-ui/react-slot"],
  },
  
  // Enable compression
  compress: true,
  
  // Optimize production builds with SWC - target modern browsers only
  swcMinify: true,
  
  // Optimize output
  reactStrictMode: true,
  
  // Performance optimizations
  poweredByHeader: false,
  
  // Optimize CSS
  optimizeFonts: true,
  
  // CRITICAL SEO: X-Robots-Tag headers for non-production environments
  // Deep defense layer: Even if robots.txt is misconfigured, this prevents indexing
  // This operates at the edge, before React hydrates
  async headers() {
    // Determine if we're in production
    const isProduction = 
      process.env.VERCEL_ENV === 'production' || 
      (process.env.VERCEL_ENV === undefined && process.env.NODE_ENV === 'production');
    
    // Security headers for non-production: Force noindex
    const securityHeaders = isProduction
      ? [] // Production: No special headers needed
      : [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow', // Block indexing in staging/preview/dev
          },
        ];
    
    // Only add headers if we have any to add
    if (securityHeaders.length === 0) {
      return [];
    }
    
    return [
      {
        source: '/:path*', // Apply to all paths
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

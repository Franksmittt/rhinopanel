/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for modern browsers - remove legacy JS polyfills
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
};

export default nextConfig;

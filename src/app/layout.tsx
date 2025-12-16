import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";

// Optimize font loading with display swap to prevent layout shifts
// Next.js self-hosts fonts, so no need for preconnect to Google Fonts
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true, // Optimize font fallback
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "Rhino Panelbeaters & Towing | Mtubatuba | Professional Auto Repair",
  description: "Trusted panelbeaters in Mtubatuba. Insurance approved, professional quality. 24/7 emergency towing. Factory-spec repairs with 3-year warranty.",
  keywords: "panelbeater Mtubatuba, towing Mtubatuba, collision repair, professional auto body shop",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://rhinopanelbeaters.co.za'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Only preconnect to Google Maps since fonts are self-hosted by Next.js */}
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}

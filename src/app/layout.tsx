import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// NOTE: ThemeProvider import removed

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Modern Boilerplate",
  description: "A production-ready Next.js 14 boilerplate with shadcn/ui and App Router.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning is no longer needed
    <html lang="en"> 
      <body className={inter.className}>
        {/* No ThemeProvider wrapping here */}
        {children}
      </body>
    </html>
  );
}
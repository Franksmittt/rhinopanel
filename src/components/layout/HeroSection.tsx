// src/components/layout/HeroSection.tsx
// This is a Server Component, responsible for structure and static content.
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Note: The Button component itself is a client component, 
// but it is imported and composed here by the parent server component.

export function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-gray-50 dark:bg-gray-900 border-b">
      <div className="container px-4 md:px-8 mx-auto flex flex-col items-center text-center max-w-4xl">
        
        {/* Title and Tagline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          The Modern Next.js Boilerplate
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
          Start building your scalable web application today. Fully configured with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <Link href="/dashboard">
              Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/about">
              Learn More
            </Link>
          </Button>
        </div>

        {/* Small Trust/Social Element */}
        <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            Trusted by developers for modern, performance-first architecture.
        </div>
      </div>
    </section>
  );
}
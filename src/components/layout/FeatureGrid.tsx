// src/components/layout/FeatureGrid.tsx
import { Rocket, Shield, Code, Zap } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    title: "Server-First Performance",
    description: "Leverage React Server Components (RSCs) and Next.js 14 to minimize client JavaScript, reducing network latency and improving TTFB.",
    icon: <Rocket className="h-5 w-5" />,
  },
  {
    title: "Architectural Sovereignty",
    description: "Build on shadcn/ui's 'copy, don't install' model, giving you full control over every component's source code and customization.",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    title: "End-to-End Type Safety",
    description: "Built entirely with TypeScript and ready to integrate with Drizzle/Prisma for type-safe database queries and Zod for validation.",
    icon: <Code className="h-5 w-5" />,
  },
  {
    title: "Optimized Toolchain",
    description: "Configured with pnpm and Tailwind CSS for lightning-fast installs, development speed, and minimal production CSS bundle sizes.",
    icon: <Zap className="h-5 w-5" />,
  },
];

export function FeatureGrid() {
  return (
    <section className="w-full py-16">
      <div className="container px-4 md:px-8 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose This Boilerplate?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard 
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
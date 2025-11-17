import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TrustBar } from "@/components/layout/TrustBar";
import { LocationAndCTA } from "@/components/layout/LocationAndCTA";
import { ProcessTimeline } from "@/components/features/ProcessTimeline";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

// Metadata optimized for "Process" and "Transparency" keywords 
export const metadata: Metadata = {
  title: "Our Repair Process | Rhino Panelbeaters Mtubatuba",
  description: "Understand the 7-step collision repair process at Rhino Panelbeaters. From insurance authorization to final quality control, we guarantee transparency.",
  keywords: "panelbeating process, collision repair steps, insurance claim process, car repair timeline Mtubatuba",
};

export default function ProcessPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow">
        
        {/* === HERO SECTION === */}
        <section className="w-full py-16 md:py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
           {/* Abstract Background Pattern */}
           <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute right-0 top-0 h-96 w-96 bg-primary rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute left-0 bottom-0 h-64 w-64 bg-accent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
           </div>

           <div className="container px-4 md:px-8 mx-auto relative z-10 text-center">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6 border border-white/20">
                <ShieldCheck className="h-4 w-4" />
                <span>Lifetime Workmanship Guarantee</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                Demystifying the <span className="text-primary">Repair Process</span>
              </h1>
              
              <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                We know accidents are stressful. That&rsquo;s why we follow a rigid, transparent 7-stage protocol to get you back on the road with zero surprises.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="h-14 px-8 text-lg font-bold shadow-lg hover:scale-105 transition-transform">
                  <Link href="/quote">
                    Start Your Repair Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
           </div>
        </section>

        {/* === TRUST BAR === */}
        {/* Reusing the reusable component [cite: 191] */}
        <TrustBar />

        {/* === TIMELINE SECTION === */}
        <ProcessTimeline />

        {/* === FINAL CTA & LOCATION === */}
        <LocationAndCTA />
        
      </main>
      
      <Footer />
    </div>
  );
}
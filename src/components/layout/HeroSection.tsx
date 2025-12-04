// Professional Hero Section with Dual-Funnel Strategy

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Shield, 
  ArrowRight, 
  Phone, 
  Zap, 
  CheckCircle2, 
  AlertCircle
} from "lucide-react";
import { HeroQuoteForm } from "@/components/features/HeroQuoteForm";

export function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-20 bg-gradient-to-br from-white via-blue-50/30 to-white">
      {/* Decorative background elements - optimized with will-change */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl will-change-auto"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl will-change-auto"></div>
      </div>

      <div className="container relative px-4 md:px-8 mx-auto">
        
        {/* === REPLACED EMERGENCY BANNER BLOCK === */}
        <div className="mb-8 w-full p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between rounded-2xl bg-destructive text-destructive-foreground shadow-2xl">
            
            <div className="flex items-start md:items-center space-x-3 md:space-x-4 mb-4 sm:mb-6 lg:mb-0 lg:w-2/3 w-full">
                <AlertCircle className="h-10 w-10 sm:h-12 w-12 md:h-16 md:w-16 shrink-0 mt-1 md:mt-0" />
                <div className="flex-1 min-w-0">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 leading-tight">
                        24/7 Emergency Towing & Recovery
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
                        Round-the-clock emergency towing services for Mtubatuba and the N2 corridor.
Fast response times for accidents and breakdowns.
                    </p>
                </div>
            </div>

            <Button 
              asChild 
              size="xl" 
              variant="secondary"
              className="w-full lg:w-auto h-12 sm:h-14 md:h-16 text-sm sm:text-base md:text-lg font-bold shadow-lg hover:shadow-xl transition-all"
            >
                <a href="tel:0723115870" className="flex items-center justify-center space-x-2 md:space-x-3">
                    {/* FIX: Wrapped children in a Fragment */}
                    <>
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 shrink-0" />
                        <span className="text-xs sm:text-sm md:text-base">CALL 24/7: 072 311 5870</span>
                    </>
                </a>
            </Button>
            
        </div>
        {/* === END OF REPLACED BLOCK === */}


        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* === LEFT COLUMN: Trust-Building Content === */}
          <div className="space-y-6">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 px-3 md:px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-xs md:text-sm">
               <Shield className="h-4 w-4 shrink-0" /> 
              <span className="whitespace-nowrap">INSURER & OEM APPROVED</span>
            </div>

            {/* Main Headline - Fixed dimensions to prevent layout shift */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight min-h-[3.5rem] md:min-h-[4.5rem] lg:min-h-[5.5rem]">
              <span className="text-foreground block">Trusted Panelbeaters for</span>
              <span className="text-primary block">Mtubatuba & Zululand</span>
            </h1>
            
            {/* Sub-Headline */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Professional repairs for all major insurance partners.
Factory-spec quality with a 3-year paint warranty. We get you back on the road, guaranteed.
            </p>

            {/* Trust Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Warranty Protected Repairs</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span>3-Year Paint Guarantee</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Insurance Approved</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Digital Quote in Minutes</span>
              </div>
            </div>

            {/* Primary CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild className="h-14 px-8 text-base font-bold shadow-lg hover:shadow-xl transition-all">
                  <Link href="/quote" className="flex items-center space-x-2">
                    {/* FIX: Wrapped children in a Fragment */}
                    <>
                        <Zap className="h-5 w-5 shrink-0" />
                        <span>Get Free Digital Quote</span>
                        <ArrowRight className="h-5 w-5 shrink-0" />
                    </>
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="h-14 px-8 text-base">
                <Link href="/process">
                  See Our Process
                </Link>
              </Button>
            </div>
          </div>
          
          {/* === RIGHT COLUMN: Quote Form === */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <HeroQuoteForm />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
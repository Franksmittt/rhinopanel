// Professional Homepage with Dual-Funnel Strategy

import { Header } from "@/components/layout/Header"; 
import { HeroSection } from "@/components/layout/HeroSection";
import { TrustBar } from "@/components/layout/TrustBar";
import { FeatureGrid } from "@/components/layout/FeatureGrid";
import { TestimonialsSection } from "@/components/layout/TestimonialsSection";
import { ProcessCallout } from "@/components/layout/ProcessCallout";
import { InsuranceAndServiceHub } from "@/components/layout/InsuranceAndServiceHub";
import { LocationAndCTA } from "@/components/layout/LocationAndCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white"> 
      <Header /> 
      
      <main className="flex-grow"> 
        {/* 1. Hero Section with Dual CTAs */}
        <HeroSection /> 
        
        {/* 2. Trust Bar (Immediately below the fold for max trust) */}
        <TrustBar />

        {/* 3. Feature Grid Section */}
        <FeatureGrid /> 
        
        {/* 4. Testimonials Section (Social Proof) */}
        <TestimonialsSection />
        
        {/* 5. Process Transparency Block */}
        <ProcessCallout />
        
        {/* 6. Insurance & Service Hub */}
        <InsuranceAndServiceHub />
        
        {/* 7. Location and Final CTA */}
        <LocationAndCTA />
        
      </main>
      
      <Footer /> 
    </div>
  );
}

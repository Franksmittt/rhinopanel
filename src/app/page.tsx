// Professional Homepage with Dual-Funnel Strategy

import { Metadata } from "next";
import { Header } from "@/components/layout/Header"; 
import { HeroSection } from "@/components/layout/HeroSection";
import { TrustBar } from "@/components/layout/TrustBar";
import { FeatureGrid } from "@/components/layout/FeatureGrid";
import { TestimonialsSection } from "@/components/layout/TestimonialsSection";
import { ProcessCallout } from "@/components/layout/ProcessCallout";
import { InsuranceAndServiceHub } from "@/components/layout/InsuranceAndServiceHub";
import { LocationAndCTA } from "@/components/layout/LocationAndCTA";
import { Footer } from "@/components/layout/Footer";
import { StructuredData } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Rhino Panelbeaters & Towing | Mtubatuba | Professional Auto Repair",
  description: "Trusted panelbeaters in Mtubatuba. Insurance approved, professional quality. 24/7 emergency towing. Factory-spec repairs with 3-year warranty.",
  keywords: "panelbeater Mtubatuba, towing Mtubatuba, collision repair, professional auto body shop",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Rhino Panelbeaters & Towing | Mtubatuba",
    description: "Trusted panelbeaters in Mtubatuba. Insurance approved, professional quality. 24/7 emergency towing.",
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://rhinopanelbeaters.co.za',
    siteName: "Rhino Panelbeaters & Towing",
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rhino Panelbeaters & Towing | Mtubatuba",
    description: "Trusted panelbeaters in Mtubatuba. Insurance approved, professional quality.",
  },
};

export default function Home() {
  return (
    <>
      <StructuredData type="LocalBusiness" />
      <StructuredData type="AutomotiveBusiness" />
      <StructuredData type="WebSite" />
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
    </>
  );
}

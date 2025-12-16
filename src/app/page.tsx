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
import JsonLd from "@/components/seo/JsonLd";
import { generalFAQs } from "@/lib/faq-data";
import type { WithContext, FAQPage } from "schema-dts";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rhinopanelbeaters.co.za';

// Phase 3: Enhanced semantic metadata for homepage
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Rhino Panelbeaters & Towing | Rated 4.9/5 Stars | Mtubatuba Auto Repair",
  description: "Top-rated panelbeaters in Mtubatuba. Insurance approved (MiWay, Old Mutual, Agruma). 24/7 emergency towing. Factory-spec repairs with 3-year warranty. Serving Northern Route (Hluhluwe, Mkhuze, Pongola, Ulundi, Nongoma, Kosi Bay).",
  keywords: "panelbeater Mtubatuba, towing Mtubatuba, collision repair Mtubatuba, insurance approved panelbeater, 24/7 towing Northern Route, car repair KZN",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Rhino Panelbeaters & Towing | Rated 4.9/5 Stars | Mtubatuba",
    description: "Top-rated panelbeaters in Mtubatuba. Insurance approved, professional quality. 24/7 emergency towing. Factory-spec repairs with 3-year warranty.",
    url: baseUrl,
    siteName: "Rhino Panelbeaters & Towing",
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rhino Panelbeaters & Towing | Mtubatuba",
    description: "Top-rated panelbeaters in Mtubatuba. Insurance approved. 24/7 emergency towing. Rated 4.9/5 stars.",
  },
};

// Phase 3: FAQ Schema for homepage
const homepageFAQSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: generalFAQs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <StructuredData type="LocalBusiness" />
      <StructuredData type="AutomotiveBusiness" />
      <StructuredData type="WebSite" />
      <JsonLd data={homepageFAQSchema} />
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

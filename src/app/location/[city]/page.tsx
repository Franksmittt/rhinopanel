// Phase 6: Location-specific landing page - "Edge Dictatorship" Strategy
// This page is served when middleware rewrites the homepage based on geolocation
// The user sees the homepage URL, but gets personalized content for their city

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocationBySlug } from "@/lib/location-data";
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
import { getAllLocationSlugsForSSG } from "@/lib/location-data";
import type { WithContext, FAQPage } from "schema-dts";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rhinopanelbeaters.co.za';

// Phase 6: Generate static params for location pages (ISR support)
export async function generateStaticParams() {
  return getAllLocationSlugsForSSG();
}

// Phase 6: ISR for location pages
export const revalidate = 3600; // 1 hour

// Phase 6: Generate location-specific metadata
export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const location = getLocationBySlug(params.city);
  
  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  // Phase 6: CRITICAL - Canonical tag points to the EXPLICIT location URL, not the homepage
  // This ensures Google indexes the location-specific content under its own URL
  const canonicalUrl = `${baseUrl}/location/${params.city}`;

  const routeRef = location.localContext?.routeReference || '';
  const landmarks = location.localContext?.landmarks?.slice(0, 2).join(', ') || '';
  
  const localizedDescription = `Top-rated panelbeaters in ${location.name}${routeRef ? ` on the ${routeRef}` : ''}. Insurance approved (MiWay, Old Mutual, Agruma). 24/7 emergency towing. Factory-spec repairs with 3-year warranty.${landmarks ? ` Serving ${landmarks} and surrounding areas.` : ''}`;

  return {
    metadataBase: new URL(baseUrl),
    title: `Rhino Panelbeaters & Towing in ${location.name} | Rated 4.9/5 Stars`,
    description: localizedDescription,
    keywords: `${location.keywords.join(', ')}, panelbeater ${location.name}, towing ${location.name}, car repair ${location.name} KZN`,
    // Phase 6: SEO Critical - Canonical points to explicit location URL
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `Rhino Panelbeaters & Towing in ${location.name} | Rated 4.9/5 Stars`,
      description: localizedDescription,
      url: canonicalUrl,
      siteName: "Rhino Panelbeaters & Towing",
      locale: 'en_ZA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Rhino Panelbeaters & Towing in ${location.name}`,
      description: localizedDescription,
    },
  };
}

export default function LocationLandingPage({ params }: { params: { city: string } }) {
  const location = getLocationBySlug(params.city);

  // Phase 6: Graceful Failure - If location doesn't exist, return 404
  if (!location) {
    notFound();
  }

  // Phase 6: Location-specific FAQ Schema
  const locationFAQSchema: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: generalFAQs.map((faq) => ({
      '@type': 'Question',
      name: faq.question.replace('Mtubatuba', location.name),
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.replace('Mtubatuba', location.name),
      },
    })),
  };

  // Phase 6: Localized content messaging
  const routeRef = location.localContext?.routeReference || '';
  const welcomeMessage = routeRef 
    ? `Welcome to ${location.name}! We're your trusted panelbeating experts on the ${routeRef}.`
    : `Welcome to ${location.name}! We're your trusted panelbeating experts.`;

  return (
    <>
      <StructuredData type="LocalBusiness" />
      <StructuredData type="AutomotiveBusiness" />
      <StructuredData type="WebSite" />
      <JsonLd data={locationFAQSchema} />
      
      {/* Phase 6: Location-specific welcome banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 px-4">
        <p className="text-sm font-medium">
          {welcomeMessage} Get a free quote today!
        </p>
      </div>
      
      <div className="flex flex-col min-h-screen bg-white"> 
        <Header /> 
        
        <main className="flex-grow"> 
          {/* Phase 6: Location-specific hero section would go here if we had a customized component */}
          {/* For now, we reuse the standard HeroSection but with location context */}
          <HeroSection /> 
          
          <TrustBar />

          <FeatureGrid /> 
          
          <TestimonialsSection />
          
          <ProcessCallout />
          
          <InsuranceAndServiceHub />
          
          {/* Phase 6: Location-specific CTA with location name */}
          <LocationAndCTA />
          
        </main>
        
        <Footer /> 
      </div>
    </>
  );
}


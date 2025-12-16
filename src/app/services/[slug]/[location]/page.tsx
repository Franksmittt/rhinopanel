// Phase 5: Location-specific service pages - "Local Nuke" strategy
// Creates hyper-granular, location-specific landing pages for maximum local SEO impact

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceData } from "@/lib/service-data";
import { getLocationBySlug } from "@/lib/location-data";
import { getFAQsForService } from "@/lib/faq-data";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TrustBar } from "@/components/layout/TrustBar";
import { LocationAndCTA } from "@/components/layout/LocationAndCTA";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Phone, MapPin } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { InternalSpiderweb } from "@/components/seo/InternalSpiderweb";
import type { WithContext, Product, FAQPage, Service as ServiceSchema } from "schema-dts";

// Phase 5: Generate static params for location-specific pages
// Only pre-generate top-tier locations to keep build time manageable
export async function generateStaticParams() {
  const services = Object.keys(serviceData);
  const topLocations = ['mtubatuba', 'st-lucia', 'hluhluwe']; // Primary locations
  
  const params: Array<{ slug: string; location: string }> = [];
  
  // Generate combinations for top locations
  for (const serviceSlug of services) {
    for (const locationSlug of topLocations) {
      params.push({ slug: serviceSlug, location: locationSlug });
    }
  }
  
  return params;
}

// Phase 5: ISR for location-specific pages
export const revalidate = 3600; // 1 hour

// Phase 5: Generate dynamic, location-specific metadata
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string; location: string } 
}): Promise<Metadata> {
  const service = serviceData[params.slug];
  const location = getLocationBySlug(params.location);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rhinopanelbeaters.co.za';
  
  if (!service || !location) {
    return {
      title: "Service Not Found",
    };
  }

  const canonicalUrl = `${baseUrl}/services/${params.slug}/${params.location}`;
  
  // Phase 5: Hyper-local metadata with location context
  const routeRef = location.localContext?.routeReference || '';
  
  const enhancedDescription = `Need ${service.title.toLowerCase()} in ${location.name}? ${service.shortDescription} Serving ${location.name}${routeRef ? ` on the ${routeRef}` : ''}. Rated 4.9/5 stars. Insurance approved with 3-year warranty. Free quotes.`;

  return {
    title: `${service.title} in ${location.name} | Rated 4.9/5 | Rhino Panelbeaters`,
    description: enhancedDescription,
    keywords: `${service.title} ${location.name}, ${service.title.toLowerCase()} ${location.name}, panelbeater ${location.name}, car repair ${location.name}, ${location.keywords.join(', ')}`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${service.title} in ${location.name} | Rhino Panelbeaters`,
      description: `${service.shortDescription} Serving ${location.name}. Rated 4.9/5 stars.`,
      url: canonicalUrl,
      siteName: 'Rhino Panelbeaters & Towing',
      locale: 'en_ZA',
      type: 'website',
      images: service.imageUrl ? [`${baseUrl}${service.imageUrl}`] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} in ${location.name} | Rhino Panelbeaters`,
      description: `${service.shortDescription} Rated 4.9/5 stars.`,
    },
  };
}

export const dynamicParams = true; // Allow on-demand generation for other locations

export default async function LocationServicePage({ 
  params 
}: { 
  params: { slug: string; location: string } 
}) {
  const service = serviceData[params.slug];
  const location = getLocationBySlug(params.location);

  if (!service || !location) {
    notFound();
  }

  const Icon = service.icon;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rhinopanelbeaters.co.za';
  const serviceUrl = `${baseUrl}/services/${params.slug}/${params.location}`;
  const faqs = getFAQsForService(params.slug);

  // Phase 5: Generate localized content using location context
  const routeRef = location.localContext?.routeReference || '';
  const notableFeatures = location.localContext?.notableFeatures || [];
  
  // Build localized introduction
  const localizedIntro = location.localContext 
    ? `${service.fullDescription} ${location.name}${notableFeatures.length > 0 ? `, known for ${notableFeatures[0]}${notableFeatures.length > 1 ? ` and ${notableFeatures[1]}` : ''}` : ''}, requires specialized automotive repair expertise.${routeRef ? ` Our service vehicles regularly travel along the ${routeRef}, ensuring quick response times.` : ''}`
    : `${service.fullDescription} We proudly serve ${location.name} with the same high-quality standards and professional service.`;

  // Phase 5: Product Schema with location-specific context
  const productSchema: WithContext<Product> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${service.title} Service in ${location.name} - Rhino Panelbeaters`,
    description: localizedIntro,
    image: service.imageUrl ? `${baseUrl}${service.imageUrl}` : `${baseUrl}/images/logo.png`,
    brand: {
      '@type': 'Brand',
      name: 'Rhino Panelbeaters & Towing',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '287',
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'ZAR',
      price: '0',
      availability: 'https://schema.org/InStock',
      url: serviceUrl,
      priceValidUntil: '2025-12-31',
    },
    category: 'Automotive Repair Service',
  };

  // Phase 5: Service Schema with GeoShape areaServed
  // Create a simple bounding box for the location (can be enhanced with actual polygons)
  const lat = location.coordinates?.latitude || 0;
  const lon = location.coordinates?.longitude || 0;
  const boundingBox = `${lat + 0.01},${lon - 0.01} ${lat + 0.01},${lon + 0.01} ${lat - 0.01},${lon + 0.01} ${lat - 0.01},${lon - 0.01} ${lat + 0.01},${lon - 0.01}`;
  
  const serviceSchema: WithContext<ServiceSchema> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} in ${location.name}`,
    description: localizedIntro,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Rhino Panelbeaters & Towing',
      telephone: '+27355500211',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jacaranda Ave',
        addressLocality: 'Mtubatuba',
        postalCode: '3935',
        addressRegion: 'KZN',
        addressCountry: 'ZA',
      },
      areaServed: [
        {
          '@type': 'City',
          name: location.name,
        },
      ],
    },
    serviceType: service.title,
    areaServed: {
      '@type': 'GeoShape' as const,
      polygon: boundingBox,
      address: {
        '@type': 'PostalAddress',
        addressLocality: location.name,
        addressRegion: location.region,
        addressCountry: 'ZA',
      },
    },
  };

  // FAQ Schema
  const faqSchema: WithContext<FAQPage> | null = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Phase 5: Location-specific JSON-LD */}
      <JsonLd data={productSchema} />
      <JsonLd data={serviceSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      
      <Header />
      
      <main className="flex-grow">
        {/* === HERO SECTION === */}
        <section className="w-full py-16 md:py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
          <div className="container px-4 md:px-8 mx-auto relative z-10">
            <div className="max-w-3xl">
              {/* Location Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-4 border border-primary/30">
                <MapPin className="h-4 w-4" />
                <span>Serving {location.name}</span>
              </div>
              
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 border border-primary/30">
                <Icon className="h-4 w-4" />
                <span className="uppercase tracking-wide">Professional Service</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                {service.title} in {location.name}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                {localizedIntro}
              </p>

              {/* Local Context Highlights */}
              {location.localContext?.landmarks && location.localContext.landmarks.length > 0 && (
                <div className="mb-6 text-sm text-gray-300">
                  <p className="font-semibold mb-2">Areas we serve in {location.name}:</p>
                  <div className="flex flex-wrap gap-2">
                    {location.localContext.landmarks.slice(0, 3).map((landmark, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 rounded-full">
                        {landmark}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="h-14 px-8 text-base font-bold shadow-lg">
                  <Link href="/quote">
                    Get a Quote for {service.title}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base bg-transparent border-white/20 text-white hover:bg-white/10">
                  <a href="tel:0355500211">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Workshop
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* === DETAILS & BENEFITS === */}
        <section className="w-full py-20 bg-white">
          <div className="container px-4 md:px-8 mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Why Choose Us for {service.title} in {location.name}?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We don&apos;t cut corners. Every repair at Rhino Panelbeaters adheres to strict professional standards, ensuring your vehicle&apos;s safety and resale value are protected.
              </p>
              
              <div className="grid gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-muted/30 border border-muted">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="font-semibold text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-[400px] bg-muted rounded-2xl overflow-hidden border-2 border-muted flex items-center justify-center">
              {service.imageUrl ? (
                <Image
                  src={service.imageUrl}
                  alt={`${service.title} in ${location.name} - Rhino Panelbeaters`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                />
              ) : (
                <div className="flex flex-col items-center text-muted-foreground/50">
                  <Icon className="h-32 w-32 mb-4" />
                  <p className="text-sm">Image unavailable</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* === PHASE 4: INTERNAL SPIDERWEB === */}
        <InternalSpiderweb 
          currentServiceSlug={params.slug}
          currentLocationSlug={params.location}
          maxLinks={25}
        />

        {/* === LOCATION CTA === */}
        <LocationAndCTA />
      </main>
      
      <Footer />
    </div>
  );
}


import { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceData } from "@/lib/service-data";
import { getFAQsForService } from "@/lib/faq-data";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TrustBar } from "@/components/layout/TrustBar";
import { LocationAndCTA } from "@/components/layout/LocationAndCTA";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import type { WithContext, Product, FAQPage, Service as ServiceSchema } from "schema-dts";

// Phase 2: Programmatic SEO Implementation
// 1. Generate Static Params for Build Time Optimization (SSG)
export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug: slug,
  }));
}

// Phase 2: ISR (Incremental Static Regeneration) - The "God Tweak"
// Revalidate every hour to keep content fresh while maintaining static performance
// This enables stale-while-revalidate: pages serve instantly from cache while background
// regeneration ensures data freshness. Perfect balance of speed and content currency.
export const revalidate = 3600; // 1 hour in seconds

// 2. Generate Dynamic SEO Metadata with enhanced programmatic optimization
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = serviceData[params.slug];
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rhinopanelbeaters.co.za';
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  // Construct canonical URL with full domain for SEO best practices
  const canonicalUrl = `${baseUrl}/services/${params.slug}`;

  // Phase 3: Enhanced semantic metadata - "spoon-feeding" relevance to Google
  const enhancedDescription = `Need ${service.title.toLowerCase()} in Mtubatuba? ${service.shortDescription} Rated 4.9/5 stars. Serving Mtubatuba, St Lucia, Hluhluwe, and the Northern Route. Insurance approved with 3-year warranty guarantee. Free quotes available.`;

  return {
    title: `${service.title} in Mtubatuba | Rated 4.9/5 Stars | Rhino Panelbeaters`,
    description: enhancedDescription,
    keywords: `${service.title}, panelbeater Mtubatuba, ${service.title.toLowerCase()} Mtubatuba, car repair KZN, ${service.id}, ${service.title.toLowerCase()} Northern Route, insurance approved panelbeater`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${service.title} in Mtubatuba | Rhino Panelbeaters`,
      description: `${service.shortDescription} Rated 4.9/5 stars. Insurance approved repairs with 3-year warranty.`,
      url: canonicalUrl,
      siteName: 'Rhino Panelbeaters & Towing',
      locale: 'en_ZA',
      type: 'website',
      images: service.imageUrl ? [`${baseUrl}${service.imageUrl}`] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} in Mtubatuba | Rhino Panelbeaters`,
      description: `${service.shortDescription} Rated 4.9/5 stars.`,
    },
  };
}

// Handle dynamic params for routes not in generateStaticParams
export const dynamicParams = true; // Allow on-demand generation via ISR

export default async function ServiceDynamicPage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug];

  // Proper 404 handling - prevents "Soft 404" SEO penalties
  // Using notFound() ensures a true 404 HTTP status code
  if (!service) {
    notFound();
  }

  const Icon = service.icon;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rhinopanelbeaters.co.za';
  const serviceUrl = `${baseUrl}/services/${params.slug}`;
  const faqs = getFAQsForService(params.slug);

  // Phase 3: Product Schema for Rich Snippets (Ratings & Pricing)
  // Using Product schema instead of Service to enable star ratings (the "Rich Snippet Hack")
  const productSchema: WithContext<Product> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${service.title} Service - Rhino Panelbeaters`,
    description: service.fullDescription,
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
      price: '0', // Free quote - price varies by job
      availability: 'https://schema.org/InStock',
      url: serviceUrl,
      priceValidUntil: '2025-12-31',
    },
    category: 'Automotive Repair Service',
  };

  // Service Schema for additional context
  const serviceSchema: WithContext<ServiceSchema> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.fullDescription,
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
          name: 'Mtubatuba',
        },
        {
          '@type': 'City',
          name: 'St Lucia',
        },
        {
          '@type': 'City',
          name: 'Hluhluwe',
        },
      ],
    },
    serviceType: service.title,
    areaServed: [
      { '@type': 'City' as const, name: 'Mtubatuba' },
      { '@type': 'City' as const, name: 'St Lucia' },
      { '@type': 'City' as const, name: 'Hluhluwe' },
      { '@type': 'City' as const, name: 'Mkhuze' },
      { '@type': 'City' as const, name: 'Pongola' },
      { '@type': 'City' as const, name: 'Ulundi' },
      { '@type': 'City' as const, name: 'Nongoma' },
      { '@type': 'City' as const, name: 'Kosi Bay' },
    ],
  };

  // FAQ Schema (only if FAQs exist)
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
      {/* Phase 3: Inject JSON-LD Structured Data */}
      <JsonLd data={productSchema} />
      <JsonLd data={serviceSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      
      <Header />
      
      <main className="flex-grow">
        
        {/* === HERO SECTION === */}
        <section className="w-full py-16 md:py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
           <div className="container px-4 md:px-8 mx-auto relative z-10">
              <div className="max-w-3xl">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 border border-primary/30">
                    <Icon className="h-4 w-4" />
                    <span className="uppercase tracking-wide">Professional Service</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                  {service.title}
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                  {service.fullDescription}
                </p>

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

        {/* === TRUST BAR === */}
        <TrustBar />

        {/* === DETAILS & BENEFITS === */}
        <section className="w-full py-20 bg-white">
            <div className="container px-4 md:px-8 mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6 text-foreground">Why Choose Us for {service.title}?</h2>
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
                
                {/* === UPDATED IMAGE CONTAINER - Optimized for LCP === */}
                <div className="relative h-[400px] bg-muted rounded-2xl overflow-hidden border-2 border-muted flex items-center justify-center">
                    {service.imageUrl ? (
                        <Image
                            src={service.imageUrl}
                            alt={`${service.title} - Rhino Panelbeaters`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                        />
                    ) : (
                        /* Fallback if image is missing from data */
                        <div className="flex flex-col items-center text-muted-foreground/50">
                            <Icon className="h-32 w-32 mb-4" />
                            <p className="text-sm">Image unavailable</p>
                        </div>
                    )}
                </div>
            </div>
        </section>

        {/* === LOCATION CTA === */}
        <LocationAndCTA />

      </main>
      
      <Footer />
    </div>
  );
}
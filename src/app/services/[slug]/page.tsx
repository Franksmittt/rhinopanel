import { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceData } from "@/lib/service-data";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TrustBar } from "@/components/layout/TrustBar";
import { LocationAndCTA } from "@/components/layout/LocationAndCTA";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image"; // <--- ADDED IMPORT
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

// 1. Generate Static Params for Build Time Optimization (SSG)
export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug: slug,
  }));
}

// 2. Generate Dynamic SEO Metadata
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = serviceData[params.slug];
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} in Mtubatuba | Rhino Panelbeaters`,
    description: `${service.shortDescription} Serving Mtubatuba, St Lucia, and Zululand. Professional quality standards.`,
    keywords: `${service.title}, panelbeater Mtubatuba, car repair KZN, ${service.id}`,
    alternates: {
      canonical: `/services/${params.slug}`,
    },
  };
}

export default function ServiceDynamicPage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug];

  // 404 if slug doesn't exist
  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="flex flex-col min-h-screen bg-white">
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
                
                {/* === UPDATED IMAGE CONTAINER === */}
                <div className="relative h-[400px] bg-muted rounded-2xl overflow-hidden border-2 border-muted flex items-center justify-center">
                    {service.imageUrl ? (
                        <Image
                            src={service.imageUrl}
                            alt={`${service.title} - Rhino Panelbeaters`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
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
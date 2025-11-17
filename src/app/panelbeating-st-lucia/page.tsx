import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TrustBar } from "@/components/layout/TrustBar";
import { LocationAndCTA } from "@/components/layout/LocationAndCTA";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin, Truck, ArrowRight, ShieldCheck } from "lucide-react";

// Highly targeted SEO metadata for the "Vacuum" strategy
export const metadata: Metadata = {
  title: "Expert Panelbeater for St Lucia KZN | Rhino Panelbeaters",
  description: "Looking for a panelbeater in St Lucia? We are the closest SAMBRA accredited repairer (25km away). We offer vehicle collection & drop-off for St Lucia residents.",
  keywords: "panelbeater St Lucia, collision repair St Lucia, towing St Lucia, auto body shop St Lucia KZN, R618 towing",
};

const TOWING_NUMBER = "072 311 5870";

export default function StLuciaLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow">
        
        {/* === GEO-TARGETED HERO === */}
        <section className="w-full py-16 md:py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
           <div className="container px-4 md:px-8 mx-auto relative z-10">
              <div className="max-w-3xl">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 border border-primary/30">
                    <MapPin className="h-4 w-4" />
                    <span>Serving St Lucia & The Elephant Coast</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                  The Closest Accredited<br/>
                  <span className="text-primary">Panelbeater to St Lucia</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                  Struggling to find a repairer in St Lucia? We are just 25 minutes away on the R618. 
                  We provide full collision repair, spray painting, and 4x4 restoration for the St Lucia community.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="h-14 px-8 text-base font-bold shadow-lg">
                    <Link href="/quote">
                      Get a Quote (We Collect)
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="destructive" size="lg" className="h-14 px-8 text-base font-bold shadow-lg">
                    <a href={`tel:${TOWING_NUMBER.replace(/\s/g, '')}`}>
                      <Truck className="mr-2 h-5 w-5" />
                      R618 Towing: {TOWING_NUMBER}
                    </a>
                  </Button>
                </div>
              </div>
           </div>
        </section>

        <TrustBar />

        {/* === THE "VACUUM" SOLUTION SECTION === */}
        <section className="w-full py-20 bg-white">
            <div className="container px-4 md:px-8 mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6 text-foreground">Why St Lucia Residents Choose Us</h2>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="p-3 bg-primary/10 text-primary rounded-lg h-fit">
                                <Truck className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Vehicle Collection &amp; Drop-off</h3>
                                <p className="text-muted-foreground">Don&apos;t worry about the drive. For major repairs, we can arrange to collect your vehicle from St Lucia and return it once finished.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-3 bg-primary/10 text-primary rounded-lg h-fit">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">R618 & N2 Recovery</h3>
                                <p className="text-muted-foreground">Breakdown on the way to the wetland park? Our tow trucks patrol the R618 daily. We are your quickest response for accidents on the St Lucia road.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-3 bg-primary/10 text-primary rounded-lg h-fit">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">4x4 & Safari Specialists</h3>
                                <p className="text-muted-foreground">We understand the specific needs of safari viewers and off-road vehicles common in St Lucia. We handle chassis repair and rust-proofing.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Visual Map Representation */}
                <div className="bg-muted rounded-2xl p-8 text-center border-2 border-border">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Just 25 Minutes Away</h3>
                    <div className="space-y-4 text-lg">
                        <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                            <span className="font-semibold">St Lucia</span>
                            <span className="text-muted-foreground">0 km</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-300 pb-2 opacity-50">
                            <span className="text-sm">R618 Corridor</span>
                            <ArrowRight className="h-4 w-4" />
                        </div>
                        <div className="flex justify-between items-center text-primary font-bold text-xl">
                            <span>Rhino Panelbeaters</span>
                            <span>26 km</span>
                        </div>
                    </div>
                    <div className="mt-8">
                        <p className="text-sm text-muted-foreground mb-4">
                            Stop searching for &ldquo;panelbeaters near me&rdquo; in a town without one. Come to the accredited experts in Mtubatuba.
                        </p>
                        <Button asChild variant="outline" className="w-full">
                            <Link href="/contact">Get Directions</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        <LocationAndCTA />

      </main>
      
      <Footer />
    </div>
  );
}
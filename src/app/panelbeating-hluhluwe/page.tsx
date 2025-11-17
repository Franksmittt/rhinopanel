import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TrustBar } from "@/components/layout/TrustBar";
import { LocationAndCTA } from "@/components/layout/LocationAndCTA";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin, Truck, ArrowRight, ShieldCheck, Car } from "lucide-react";

export const metadata: Metadata = {
  title: "Panelbeaters Serving Hluhluwe | 4x4 & Safari Specialists",
  description: "Expert collision repair and spray painting for Hluhluwe residents and game lodges. We specialize in 4x4 and safari vehicle repairs. SAMBRA Accredited.",
  keywords: "panelbeater Hluhluwe, auto body repair Hluhluwe, safari vehicle repair KZN, towing Hluhluwe, Toyota Land Cruiser repair Zululand",
};

const TOWING_NUMBER = "072 311 5870";

export default function HluhluweLandingPage() {
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
                    <span>Serving Hluhluwe & The Elephant Coast</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                  Expert Collision Repair for<br/>
                  <span className="text-primary">Hluhluwe & Game Lodges</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                  Quality repair options in Hluhluwe are limited. We are the accredited hub for the northern corridor, specializing in heavy-duty 4x4s, safari viewers, and fleet vehicles.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="h-14 px-8 text-base font-bold shadow-lg">
                    <Link href="/quote">
                      Get an Estimate
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="destructive" size="lg" className="h-14 px-8 text-base font-bold shadow-lg">
                    <a href={`tel:${TOWING_NUMBER.replace(/\s/g, '')}`}>
                      <Truck className="mr-2 h-5 w-5" />
                      Hluhluwe Towing: {TOWING_NUMBER}
                    </a>
                  </Button>
                </div>
              </div>
           </div>
        </section>

        <TrustBar />

        {/* === THE REGIONAL SOLUTION SECTION === */}
        <section className="w-full py-20 bg-white">
            <div className="container px-4 md:px-8 mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6 text-foreground">Dedicated to the Northern Corridor</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        We understand that vehicles in Hluhluwe work harder. Whether it&apos;s a game viewer, a farm bakkie, or a family SUV, we restore it to factory specifications.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="p-3 bg-primary/10 text-primary rounded-lg h-fit">
                                <Car className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">4x4 & Safari Expertise</h3>
                                <p className="text-muted-foreground">We specialize in bodywork for Toyota Land Cruisers, Hiluxes, and Rangers. We handle chassis alignment and rust-proofing for vehicles exposed to bush conditions.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-3 bg-primary/10 text-primary rounded-lg h-fit">
                                <Truck className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">N2 North Recovery</h3>
                                <p className="text-muted-foreground">Our breakdown team services the N2 route from Mtubatuba to Hluhluwe daily. We are your fastest link to accredited repairs.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-3 bg-primary/10 text-primary rounded-lg h-fit">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">SAMBRA Accredited</h3>
                                <p className="text-muted-foreground">Don&apos;t risk your insurance claim with unaccredited backyard repairs. We are approved by major insurers for the Zululand region.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Visual Map Representation */}
                <div className="bg-muted rounded-2xl p-8 text-center border-2 border-border">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Worth the Short Drive</h3>
                    <div className="space-y-4 text-lg">
                        <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                            <span className="font-semibold">Hluhluwe</span>
                            <span className="text-muted-foreground">0 km</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-300 pb-2 opacity-50">
                            <span className="text-sm">N2 South Corridor</span>
                            <ArrowRight className="h-4 w-4" />
                        </div>
                        <div className="flex justify-between items-center text-primary font-bold text-xl">
                            <span>Rhino Panelbeaters</span>
                            <span>50 km</span>
                        </div>
                    </div>
                    <div className="mt-8">
                        <p className="text-sm text-muted-foreground mb-4">
                            We offer vehicle collection services for non-drivable vehicles in the Hluhluwe area.
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
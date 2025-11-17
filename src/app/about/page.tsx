import { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TrustBar } from "@/components/layout/TrustBar";
import { LocationAndCTA } from "@/components/layout/LocationAndCTA";
import { CheckCircle2, Award, Users, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Rhino Panelbeaters | Our Story & Team",
  description: "Family-owned panelbeaters serving Mtubatuba. Meet the team committed to honest, SAMBRA-accredited repairs and lifetime workmanship guarantees.",
  keywords: "Rhino Panelbeaters owner, auto body shop history, SAMBRA accredited Mtubatuba, RMI member KZN",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow">
        
        {/* === HERO SECTION === */}
        <section className="w-full py-16 md:py-24 bg-secondary text-secondary-foreground">
           <div className="container px-4 md:px-8 mx-auto">
              <div className="max-w-3xl">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 border border-primary/30">
                    <Users className="h-4 w-4" />
                    <span>Family Owned & Operated</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                  More Than Just <br/>
                  <span className="text-primary">Panelbeating</span>
                </h1>
                
                <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-2xl mb-8 leading-relaxed">
                  We are a team of qualified artisans, dedicated to restoring safety and value to your vehicle. We don&apos;t just fix cars; we help people get back on the road.
                </p>
              </div>
           </div>
        </section>

        {/* === OUR STORY & MISSION === */}
        <section className="w-full py-20 bg-white">
            <div className="container px-4 md:px-8 mx-auto grid lg:grid-cols-2 gap-16 items-center">
                
                {/* UPDATED: Real Image */}
                <div className="relative h-[500px] bg-muted rounded-2xl overflow-hidden border-2 border-border shadow-xl">
                     <Image 
                        src="/images/team-workshop-tools-background.png" 
                        fill 
                        alt="Rhino Panelbeaters Workshop and Team" 
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                     />
                </div>

                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Founded with a single tow truck and a passion for mechanics, Rhino Panelbeaters & Towing has grown into Mtubatuba&apos;s premier collision repair centre. We recognized a need in the Zululand region for a repairer that didn&apos;t compromise on quality. 
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            Today, we serve the entire KZN North Coast, combining old-school craftsmanship with modern chassis straightening technology and waterborne paint systems.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                            <Award className="h-6 w-6 text-primary" />
                            Our Core Values
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-semibold text-foreground block">Transparency</span>
                                    <span className="text-sm text-muted-foreground">No hidden costs. We explain every step of the repair process.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-semibold text-foreground block">Safety First</span>
                                    <span className="text-sm text-muted-foreground">We never cut corners on structural integrity. Your safety is our license to operate.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-semibold text-foreground block">Customer Advocacy</span>
                                    <span className="text-sm text-muted-foreground">We fight for your right to OEM parts and quality repairs with insurance assessors.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>

        {/* === ACCREDITATION DEEP DIVE === */}
        <section className="w-full py-20 bg-muted/30 border-y border-border">
            <div className="container px-4 md:px-8 mx-auto text-center max-w-4xl">
                <div className="inline-block p-4 rounded-full bg-primary/10 mb-6">
                    <ShieldCheck className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    The &ldquo;Workmanship Guarantee&rdquo;
                </h2>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                    We stand behind our work. Every structural repair is backed by our lifetime guarantee, and all paintwork carries a minimum 3-year warranty against peeling or fading.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                        <h4 className="font-bold text-lg mb-2 text-foreground">What SAMBRA Means for You</h4>
                        <p className="text-sm text-muted-foreground">
                            As a SAMBRA accredited shop, we are subject to random quality audits. This gives you, the consumer, recourse and protection that unaccredited &ldquo;backyard&rdquo; shops cannot offer.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                        <h4 className="font-bold text-lg mb-2 text-foreground">RMI Code of Conduct</h4>
                        <p className="text-sm text-muted-foreground">
                            Our RMI membership ensures we adhere to fair labor practices and ethical business conduct. You are dealing with a legitimate, tax-paying entity committed to the local economy.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* === REUSED TRUST BAR === */}
        <TrustBar />

        {/* === LOCATION CTA === */}
        <LocationAndCTA />

      </main>
      
      <Footer />
    </div>
  );
}
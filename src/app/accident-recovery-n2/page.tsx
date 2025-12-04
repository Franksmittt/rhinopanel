import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationAndCTA } from "@/components/layout/LocationAndCTA";
import { AlertTriangle, Phone, Clock, Shield, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "N2 Accident Recovery & Towing | Mtubatuba to Richards Bay",
  description: "Immediate accident response for the N2 highway. Serving the corridor between Hluhluwe, Mtubatuba, and Richards Bay. Rollback towing and accident scene clearance.",
  keywords: "N2 accident recovery, N2 towing service, breakdown N2 Mtubatuba, accident towing Richards Bay, N2 emergency services",
  alternates: {
    canonical: '/accident-recovery-n2',
  },
};

const TOWING_NUMBER = "072 311 5870";

export default function N2RecoveryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow">
        
        {/* === HIGH URGENCY HERO === */}
        <section className="w-full py-20 bg-destructive text-destructive-foreground text-center">
           <div className="container px-4 mx-auto max-w-4xl">
              <div className="inline-flex items-center justify-center p-4 bg-white/20 rounded-full mb-6 animate-pulse">
                <AlertTriangle className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
                N2 Accident Response Unit
              </h1>
              <p className="text-xl md:text-2xl font-medium opacity-90 mb-10 max-w-2xl mx-auto">
                Rapid deployment for collisions and breakdowns on the N2 Highway (Hluhluwe - Mtubatuba - Richards Bay).
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                    href={`tel:${TOWING_NUMBER.replace(/\s/g, '')}`} 
                    className="flex items-center gap-3 bg-white text-destructive px-8 py-6 rounded-xl font-black text-2xl shadow-2xl hover:bg-gray-50 transition-transform hover:scale-105"
                >
                    <Phone className="h-8 w-8 fill-current" />
                    CALL NOW: {TOWING_NUMBER}
                </a>
              </div>
              <p className="mt-4 text-white/80 text-sm font-medium">
                Average response time: &lt; 45 Minutes
              </p>
           </div>
        </section>

        {/* === SERVICE DETAILS === */}
        <section className="w-full py-20 bg-white">
            <div className="container px-4 mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="p-6 border-2 border-border rounded-xl bg-muted/10">
                        <Clock className="h-10 w-10 text-destructive mb-4" />
                        <h3 className="text-xl font-bold mb-2">24/7 Highway Patrol</h3>
                        <p className="text-muted-foreground">
                            Our fleet is stationed strategically in Mtubatuba to provide equal coverage North (towards Hluhluwe) and South (towards Richards Bay).
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="p-6 border-2 border-border rounded-xl bg-muted/10">
                        <Truck className="h-10 w-10 text-destructive mb-4" />
                        <h3 className="text-xl font-bold mb-2">Rollback & Rigging</h3>
                        <p className="text-muted-foreground">
                            We utilize flatbed rollbacks to ensure accident-damaged vehicles are recovered without causing further structural damage.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="p-6 border-2 border-border rounded-xl bg-muted/10">
                        <Shield className="h-10 w-10 text-destructive mb-4" />
                        <h3 className="text-xl font-bold mb-2">Insurance Approved</h3>
                        <p className="text-muted-foreground">
                            We are authorized to tow for major insurance panels. We can recover your vehicle directly to our accredited repair centre, simplifying your claim.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* === COVERAGE MAP TEXT === */}
        <section className="w-full py-16 bg-secondary text-secondary-foreground">
            <div className="container px-4 mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">N2 Coverage Zones</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    {["Kwambonambi", "Teza", "Mtubatuba Offramp", "Charters Creek", "Hluhluwe Turnoff", "Bushlands", "Nyalazi"].map((zone) => (
                        <span key={zone} className="px-4 py-2 bg-white/10 rounded-full border border-white/20 text-sm font-medium">
                            📍 {zone}
                        </span>
                    ))}
                </div>
            </div>
        </section>

        <LocationAndCTA />

      </main>
      
      <Footer />
    </div>
  );
}
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationAndCTA } from "@/components/layout/LocationAndCTA";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, Truck, Clock, Shield, MapPin, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "24/7 Towing Services | Rhino Towing | Northern Route KZN",
  description: "Professional 24/7 towing and recovery services covering the Northern Route (Hluhluwe, Mkhuze, Pongola, Ulundi, Nongoma, Kosi Bay). Accident recovery, breakdown assistance, and vehicle transportation.",
  keywords: "towing service Mtubatuba, 24/7 towing Northern Route, accident recovery KZN, breakdown service Hluhluwe, towing Kosi Bay, vehicle recovery",
  alternates: {
    canonical: '/towing',
  },
};

const TOWING_NUMBER = "072 311 5870";

export default function TowingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow">
        
        {/* === HERO SECTION === */}
        <section className="w-full py-16 md:py-24 bg-destructive text-destructive-foreground relative overflow-hidden">
           <div className="container px-4 md:px-8 mx-auto relative z-10">
              <div className="max-w-3xl">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6 border border-white/30">
                    <Truck className="h-4 w-4" />
                    <span>24/7 Emergency Towing</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                  Professional Towing &<br/>
                  <span className="text-white">Recovery Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
                  Fast, reliable towing services covering the entire Northern Route. Available 24/7 for accidents, breakdowns, and vehicle transportation.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="secondary" className="h-14 px-8 text-base font-bold shadow-lg">
                    <a href={`tel:${TOWING_NUMBER.replace(/\s/g, '')}`}>
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now: {TOWING_NUMBER}
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base font-bold bg-white/10 text-white border-white/30 hover:bg-white/20">
                    <Link href="/emergency-towing">
                      Emergency Response →
                    </Link>
                  </Button>
                </div>
              </div>
           </div>
        </section>

        {/* === SERVICE AREAS SECTION === */}
        <section className="w-full py-20 bg-gradient-to-b from-white to-muted/30">
            <div className="container px-4 md:px-8 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary rounded-xl mb-6">
                        <MapPin className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Northern Route Coverage
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We provide comprehensive towing services throughout the entire Northern Route region
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
                    {[
                        { name: "Mtubatuba", isPrimary: true },
                        { name: "St Lucia", isPrimary: false },
                        { name: "Hluhluwe", isPrimary: false },
                        { name: "Mkhuze", isPrimary: false },
                        { name: "Pongola", isPrimary: false },
                        { name: "Ulundi", isPrimary: false },
                        { name: "Nongoma", isPrimary: false },
                        { name: "Kosi Bay", isPrimary: false },
                        { name: "N2 Highway", isPrimary: true },
                        { name: "R618", isPrimary: true },
                    ].map((area) => (
                        <div 
                            key={area.name} 
                            className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                                area.isPrimary 
                                    ? "bg-primary text-primary-foreground border-primary shadow-md" 
                                    : "bg-white text-foreground border-border hover:border-primary/50"
                            }`}
                        >
                            <div className="flex flex-col items-center text-center space-y-2">
                                <MapPin className={`h-5 w-5 ${area.isPrimary ? "text-primary-foreground" : "text-primary"}`} />
                                <span className={`font-bold text-sm leading-tight ${area.isPrimary ? "text-primary-foreground" : "text-foreground"}`}>
                                    {area.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* === SERVICES GRID === */}
        <section className="w-full py-20 bg-muted/30">
            <div className="container px-4 md:px-8 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Our Towing Services
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Professional recovery solutions for every situation
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Service 1 */}
                    <div className="bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="p-3 bg-destructive/10 text-destructive rounded-lg w-fit mb-4">
                            <AlertTriangle className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-foreground">Accident Recovery</h3>
                        <p className="text-muted-foreground mb-4">
                            Immediate response to accident scenes with rollback trucks for safe vehicle recovery. We handle scene clearance and secure transport to our repair facility.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center">
                                <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0" />
                                Rollback & flatbed options
                            </li>
                            <li className="flex items-center">
                                <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0" />
                                Insurance-approved recovery
                            </li>
                            <li className="flex items-center">
                                <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0" />
                                Scene clearance services
                            </li>
                        </ul>
                    </div>

                    {/* Service 2 */}
                    <div className="bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="p-3 bg-destructive/10 text-destructive rounded-lg w-fit mb-4">
                            <Truck className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-foreground">Breakdown Assistance</h3>
                        <p className="text-muted-foreground mb-4">
                            24/7 breakdown recovery for mechanical failures, flat tires, battery issues, and any roadside emergency. Fast response times across the Northern Route.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center">
                                <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0" />
                                24/7 availability
                            </li>
                            <li className="flex items-center">
                                <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0" />
                                Average response: &lt; 45 minutes
                            </li>
                            <li className="flex items-center">
                                <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0" />
                                Secure storage available
                            </li>
                        </ul>
                    </div>

                    {/* Service 3 */}
                    <div className="bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="p-3 bg-destructive/10 text-destructive rounded-lg w-fit mb-4">
                            <Shield className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-foreground">Commercial & Heavy Duty</h3>
                        <p className="text-muted-foreground mb-4">
                            Specialized towing for trucks, bakkies, commercial vehicles, and heavy equipment. We understand the urgency of fleet downtime.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center">
                                <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0" />
                                Heavy-duty equipment
                            </li>
                            <li className="flex items-center">
                                <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0" />
                                Fleet priority service
                            </li>
                            <li className="flex items-center">
                                <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0" />
                                N2 commercial corridor
                            </li>
                        </ul>
                    </div>

                    {/* Service 4 */}
                    <div className="bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="p-3 bg-destructive/10 text-destructive rounded-lg w-fit mb-4">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-foreground">Long Distance Transport</h3>
                        <p className="text-muted-foreground mb-4">
                            Reliable vehicle transport services for long-distance moves. Safe, secure transportation with full insurance coverage.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center">
                                <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0" />
                                Secure transportation
                            </li>
                            <li className="flex items-center">
                                <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0" />
                                Full insurance coverage
                            </li>
                            <li className="flex items-center">
                                <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0" />
                                Competitive rates
                            </li>
                        </ul>
                    </div>

                    {/* Service 5 */}
                    <div className="bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="p-3 bg-destructive/10 text-destructive rounded-lg w-fit mb-4">
                            <Shield className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-foreground">Off-Road Recovery</h3>
                        <p className="text-muted-foreground mb-4">
                            Specialized recovery services for vehicles stuck off-road, in difficult terrain, or in challenging positions. Winching and specialized equipment available.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center">
                                <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0" />
                                Winching capabilities
                            </li>
                            <li className="flex items-center">
                                <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0" />
                                Off-road expertise
                            </li>
                            <li className="flex items-center">
                                <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0" />
                                Safari route recovery
                            </li>
                        </ul>
                    </div>

                    {/* Service 6 */}
                    <div className="bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="p-3 bg-destructive/10 text-destructive rounded-lg w-fit mb-4">
                            <Clock className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-foreground">Secure Vehicle Storage</h3>
                        <p className="text-muted-foreground mb-4">
                            Fenced, secure storage facility for vehicles awaiting repair, assessment, or collection. Peace of mind while your vehicle is in our care.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center">
                                <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0" />
                                Secure, fenced facility
                            </li>
                            <li className="flex items-center">
                                <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0" />
                                24/7 monitored access
                            </li>
                            <li className="flex items-center">
                                <CheckCircle2 className="h-4 w-4 text-primary mr-2 shrink-0" />
                                Seamless repair transfer
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* === WHY CHOOSE US === */}
        <section className="w-full py-20 bg-white">
            <div className="container px-4 md:px-8 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Why Choose Rhino Towing?
                        </h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="p-3 bg-primary/10 text-primary rounded-lg h-fit">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Fast Response Times</h3>
                                    <p className="text-muted-foreground">
                                        Our fleet is strategically stationed in Mtubatuba for rapid response across the Northern Route. Average response time under 45 minutes.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="p-3 bg-primary/10 text-primary rounded-lg h-fit">
                                    <Shield className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Insurance Approved</h3>
                                    <p className="text-muted-foreground">
                                        We are approved by major insurance companies (MiWay, Old Mutual, Agruma). Direct recovery to our accredited repair facility simplifies your claim process.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="p-3 bg-primary/10 text-primary rounded-lg h-fit">
                                    <Truck className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Professional Equipment</h3>
                                    <p className="text-muted-foreground">
                                        Rollback trucks, flatbeds, and specialized recovery equipment ensure damage-free vehicle transport. We treat your vehicle with care.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-muted/50 rounded-2xl p-8 border-2 border-border">
                        <h3 className="text-2xl font-bold mb-6 text-foreground">Ready to Help 24/7</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Phone className="h-6 w-6 text-destructive shrink-0" />
                                <div>
                                    <p className="text-sm text-muted-foreground">Emergency Towing</p>
                                    <a href={`tel:${TOWING_NUMBER.replace(/\s/g, '')}`} className="text-2xl font-extrabold text-destructive hover:underline">
                                        {TOWING_NUMBER}
                                    </a>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-border">
                                <p className="text-sm text-muted-foreground mb-4">
                                    Call us anytime, day or night, for immediate assistance. Our operators are standing by to dispatch help to your location.
                                </p>
                                <Button asChild variant="destructive" size="lg" className="w-full h-14 text-base font-bold">
                                    <a href={`tel:${TOWING_NUMBER.replace(/\s/g, '')}`}>
                                        <Phone className="mr-2 h-5 w-5" />
                                        Call Now: {TOWING_NUMBER}
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* === CTA SECTION === */}
        <section className="w-full py-16 bg-primary text-primary-foreground">
            <div className="container px-4 md:px-8 mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Need Immediate Assistance?
                </h2>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                    Our towing team is available 24/7 to help with accidents, breakdowns, and vehicle recovery across the Northern Route.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild variant="secondary" size="lg" className="h-14 px-8 text-base font-bold">
                        <a href={`tel:${TOWING_NUMBER.replace(/\s/g, '')}`}>
                            <Phone className="mr-2 h-5 w-5" />
                            Call {TOWING_NUMBER}
                        </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base font-bold bg-white/10 text-white border-white/30 hover:bg-white/20">
                        <Link href="/services">
                            View Our Services
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>

        <LocationAndCTA />
        
      </main>
      
      <Footer />
    </div>
  );
}

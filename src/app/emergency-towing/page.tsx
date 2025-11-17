import { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowLeft, MapPin, CheckCircle2, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "24/7 EMERGENCY TOWING | Mtubatuba & N2",
  description: "IMMEDIATE RESPONSE. Call 072 311 5870 for accident recovery and towing in Mtubatuba, St Lucia, and N2. 24/7 Service.",
  keywords: "towing Mtubatuba, emergency towing N2, breakdown service St Lucia, accident recovery KZN",
};

const TOWING_NUMBER = "072 311 5870";

export default function EmergencyTowingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* === SIMPLIFIED HEADER === */}
      <header className="py-4 px-4 border-b flex items-center justify-between bg-white sticky top-0 z-50">
        <Link href="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-5 w-5 mr-1" />
            <span className="font-medium">Back to Home</span>
        </Link>
        <div className="font-bold text-lg">RHINO TOWING</div>
      </header>

      <main className="flex-grow flex flex-col">
        
        {/* === CRISIS HERO (RED ZONE) === */}
        <section className="bg-destructive text-destructive-foreground py-12 px-4 text-center flex-grow flex flex-col justify-center items-center">
            <div className="bg-white/20 p-4 rounded-full mb-6 animate-pulse">
                <AlertTriangle className="h-12 w-12 md:h-16 md:w-16" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">
                Emergency<br/>Assistance
            </h1>
            
            <p className="text-xl md:text-2xl font-medium opacity-90 mb-8 max-w-md mx-auto">
                Immediate Response for Accidents & Breakdowns in Mtubatuba & N2.
            </p>

            {/* GIANT CALL BUTTON */}
            <a 
                href={`tel:${TOWING_NUMBER.replace(/\s/g, '')}`} 
                className="w-full max-w-md bg-white text-destructive hover:bg-gray-100 text-2xl md:text-4xl font-black py-8 rounded-2xl shadow-2xl flex items-center justify-center gap-4 transform transition-transform active:scale-95 border-4 border-destructive-foreground/10"
            >
                <Phone className="h-8 w-8 md:h-12 md:w-12 fill-current" />
                <span>CLICK TO CALL</span>
            </a>
            
            <p className="mt-6 text-lg font-bold tracking-widest">
                {TOWING_NUMBER}
            </p>
        </section>

        {/* === REASSURANCE SECTION === */}
        <section className="py-12 px-4 bg-white text-center">
            <div className="max-w-md mx-auto space-y-8">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">We Are On The Way</h2>
                    <p className="text-muted-foreground">Our fleet is stationed in Mtubatuba for rapid response to:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {["N2 Highway", "St Lucia Road (R618)", "Mtubatuba Town", "Hluhluwe", "Kwambonambi"].map(area => (
                            <span key={area} className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-sm font-medium">
                                <MapPin className="h-3 w-3 mr-1 text-primary" />
                                {area}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-left">
                    <h3 className="font-bold text-green-800 mb-3 flex items-center">
                        <CheckCircle2 className="h-5 w-5 mr-2" />
                        Why Trust Us?
                    </h3>
                    <ul className="space-y-2 text-green-700">
                        <li>✓ Approved by major insurance companies</li>
                        <li>✓ Secure storage facility for your vehicle</li>
                        <li>✓ Seamless transfer to our Repair Centre</li>
                    </ul>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
}
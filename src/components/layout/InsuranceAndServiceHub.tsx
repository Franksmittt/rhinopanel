// Professional Insurance & Service Hub Component

import { Button } from "@/components/ui/button";
import { Zap, Wrench, ShieldCheck, Truck, Car } from "lucide-react";
import Link from "next/link";

// Approved insurance panels:
const insurerLogos = [
  { name: "MiWay", src: "/logos/miway.svg", alt: "MiWay Approved" },
  { name: "Old Mutual", src: "/logos/oldmutual.svg", alt: "Old Mutual Approved" },
  { name: "Agruma (c/o King Price)", src: "/logos/agruma.svg", alt: "Agruma Approved" },
];

// Key services tailored to the Northern Route market:
const marketServices = [
  { title: "N2 Truck & Commercial", icon: Truck, description: "Heavy vehicle and fleet repair for the N2 Northern Route traffic." },
  { title: "4x4 & Safari Vehicles", icon: Car, description: "Expert repairs for tourist and safari 4x4s from St Lucia, Hluhluwe, Mkhuze, and the Northern Route." },
  { title: "Cash & Taxi Repairs", icon: Zap, description: "Affordable, high-volume repairs for the local Mtubatuba community." },
  { title: "Specialist Paint & Body", icon: Wrench, description: "Chassis straightening and factory-spec paintwork guarantee." },
];

export function InsuranceAndServiceHub() {
  return (
    <section className="w-full py-20 bg-muted/30">
      <div className="container px-4 md:px-8 mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* === LEFT COLUMN: Insurance Trust Hub === */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2 text-foreground">
            <ShieldCheck className="h-7 w-7 md:h-8 md:w-8 text-primary shrink-0" />
            <span>Insurance & Claims Authority</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            We are on the Approved Panel for South Africa&apos;s leading insurers. Choosing Rhino Panelbeaters means choosing the path of least resistance after an accident.
          </p>
          
          <ul className="list-disc list-inside text-base text-muted-foreground mb-8 space-y-3 pl-4 leading-relaxed">
            <li>We handle the entire claims process directly with your insurer, from authorization to billing.</li>
            <li>No hidden fees, no unnecessary bureaucracy—just fast, quality-guaranteed repairs.</li>
            <li>Rest assured that all work meets the stringent compliance and quality standards required by major insurance partners.</li>
          </ul>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-6 p-6 bg-white rounded-lg border border-border">
            {insurerLogos.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center">
                <span className="text-lg font-bold text-muted-foreground text-center">{logo.name}</span>
              </div>
            ))}
          </div>

          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg mb-10">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Non-Panel Insurance Work:</strong> We can also work with insurance companies not listed above. For non-panel insurers, clients will be required to sign an indemnity form before work commences.
            </p>
          </div>

          <Button variant="default" asChild size="lg" className="h-12 px-8">
            <Link href="/accreditations">
              View All Approvals & Warranties
            </Link>
          </Button>
        </div>

        {/* === RIGHT COLUMN: Market-Specific Services === */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 md:mb-8 text-foreground">
            Services for the Zululand Market
          </h2>

          <div className="space-y-6">
            {marketServices.map((service) => (
              <div key={service.title} className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-border hover:border-primary/20 transition-all duration-300">
                <div className="p-3 bg-primary/10 text-primary rounded-lg flex-shrink-0">
                  <service.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <Button variant="link" asChild className="mt-6 pl-0 text-base font-semibold">
            <Link href="/services">
              Explore Our Full Service List →
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}

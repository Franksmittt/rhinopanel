import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationAndCTA } from "@/components/layout/LocationAndCTA";
import { AccreditationCard } from "@/components/features/AccreditationCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Shield, FileCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Insurance Partners & Quality Standards | Rhino Panelbeaters",
  description: "Insurance approved panelbeaters in Mtubatuba. Approved by Santam, Hollard, and major insurers. Lifetime workmanship guarantee and professional quality standards.",
  keywords: "insurance approved panelbeater, Santam approved repairer Mtubatuba, insurance approved panel beaters KZN, professional auto repair",
  alternates: {
    canonical: '/accreditations',
  },
};

// Focus on insurance partnerships and quality standards
const accreditations = [
  {
    title: "Professional Quality Standards",
    logoSrc: "/logos/quality-standards.png", 
    description: "We adhere to the strictest industry standards for equipment, staff training, and ethical conduct, ensuring every repair meets the highest quality benchmarks.",
    benefits: [
      "Rigorous quality control processes",
      "Regular workshop inspections",
      "Guaranteed workmanship standards",
      "Consumer protection focus"
    ]
  },
  {
    title: "Industry Excellence",
    logoSrc: "/logos/excellence.png",
    description: "Our commitment to excellence signals our status as a legitimate, tax-paying, and labor-law compliant business that you can trust with your vehicle.",
    benefits: [
      "Code of Conduct adherence",
      "Qualified technical staff",
      "Fair pricing guidelines",
      "Industry-standard labor practices"
    ]
  },
  {
    title: "Santam Approved",
    logoSrc: "/logos/santam.png",
    description: "We are a direct authorized repairer for Santam. This allows us to process claims faster and bypass the need for multiple quotes.",
    benefits: [
      "Direct claims authorization",
      "No obtaining 3 quotes needed",
      "Lifetime warranty on paintwork",
      "Manufacturer-spec parts only"
    ]
  }
];

export default function AccreditationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow">
        
        {/* === HERO SECTION === */}
        <section className="w-full py-16 md:py-24 bg-foreground text-background relative overflow-hidden">
           <div className="container px-4 md:px-8 mx-auto relative z-10">
              <div className="max-w-3xl">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 border border-primary/30">
                    <Shield className="h-4 w-4" />
                    <span>Official Industry Certifications</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                  Your Safety is <br />
                  <span className="text-primary">Officially Certified</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                  In the auto repair industry, trust isn&rsquo;t given&mdash;it&rsquo;s earned through rigorous audits. We hold the highest accreditations in South Africa to guarantee your peace of mind.
                </p>
              </div>
           </div>
        </section>

        {/* === MAIN ACCREDITATION GRID === */}
        <section className="w-full py-20 bg-white">
            <div className="container px-4 md:px-8 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Why Our Badges Matter to You
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        These aren&rsquo;t just logos. They are your guarantee of recourse, quality, and safety.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {accreditations.map((item) => (
                        <AccreditationCard key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </section>

        {/* === INSURANCE PARTNERS SECTION === */}
        <section className="w-full py-20 bg-muted/30 border-y border-border">
            <div className="container px-4 md:px-8 mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Content */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary rounded-xl">
                            <FileCheck className="h-8 w-8" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                            Approved by South Africa&rsquo;s Leading Insurers
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We simplify the accident aftermath. As an approved repairer, we integrate directly with your insurance provider&rsquo;s digital systems.
                        </p>
                        
                        <div className="space-y-4 pt-4">
                            <div className="p-4 bg-white rounded-lg border border-border shadow-sm">
                                <h4 className="font-bold text-foreground mb-1">Faster Claims Processing</h4>
                                <p className="text-sm text-muted-foreground">Direct digital links to Santam, Hollard, and Old Mutual mean authorizations happen in hours, not days.</p>
                            </div>
                            <div className="p-4 bg-white rounded-lg border border-border shadow-sm">
                                <h4 className="font-bold text-foreground mb-1">No &ldquo;Three Quote&rdquo; Hassle</h4>
                                <p className="text-sm text-muted-foreground">For most approved partners, you can bring your vehicle directly to us without needing to shop around.</p>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Button asChild size="lg" className="h-14 px-8 text-base font-bold shadow-md">
                                <Link href="/quote">
                                    Upload Your Insurance Claim Info
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Logo Grid (Visual Representation) */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Placeholder Boxes for Logos - Replace with actual brand assets */}
                        <div className="aspect-video bg-white rounded-xl border border-border flex items-center justify-center shadow-sm p-6">
                             <span className="text-xl font-bold text-muted-foreground">Hollard</span>
                        </div>
                        <div className="aspect-video bg-white rounded-xl border border-border flex items-center justify-center shadow-sm p-6">
                             <span className="text-xl font-bold text-muted-foreground">Santam</span>
                        </div>
                        <div className="aspect-video bg-white rounded-xl border border-border flex items-center justify-center shadow-sm p-6">
                             <span className="text-xl font-bold text-muted-foreground">Old Mutual</span>
                        </div>
                        <div className="aspect-video bg-white rounded-xl border border-border flex items-center justify-center shadow-sm p-6">
                             <span className="text-xl font-bold text-muted-foreground">Discovery</span>
                        </div>
                        <div className="col-span-2 aspect-[3/1] bg-white rounded-xl border border-border flex items-center justify-center shadow-sm p-6">
                             <span className="text-lg font-medium text-muted-foreground">And most other major SA Insurers...</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* === FINAL CTA === */}
        <LocationAndCTA />
        
      </main>
      
      <Footer />
    </div>
  );
}
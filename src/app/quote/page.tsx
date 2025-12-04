import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FullQuoteForm } from "@/components/features/FullQuoteForm";
import { CheckCircle2, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Get a Free Quote | Rhino Panelbeaters Mtubatuba",
  description: "Request a free digital assessment for collision repair, spray painting, or dent removal. Upload photos for a faster quote. No obligation.",
  keywords: "panel beating quote, car repair estimate Mtubatuba, collision repair quote online",
  alternates: {
    canonical: '/quote',
  },
};

export default function QuotePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow bg-muted/10">
        <div className="container px-4 md:px-8 mx-auto py-12 md:py-20">
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
                    Get Your <span className="text-primary">Free Assessment</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                    Skip the drive. Upload your details below and we&apos;ll get back to you with an initial estimate within 24 hours.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Main Form Area */}
                <div className="lg:col-span-2">
                    <FullQuoteForm />
                </div>

                {/* Sidebar Trust Signals */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border shadow-sm">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <Shield className="h-5 w-5 text-primary" />
                            Why Choose Us?
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                <span>Professional Quality Standards</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                <span>Lifetime Workmanship Guarantee</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                <span>Approved by Major Insurers</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                <span>3-Year Paint Warranty</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                        <h3 className="font-bold text-lg mb-2 text-foreground">Prefer to call?</h3>
                        <p className="text-sm text-muted-foreground mb-4">Our workshop office is open Mon-Fri, 7:30am - 5:00pm.</p>
                        <a href="tel:0355500211" className="text-2xl font-bold text-primary hover:underline block">
                            035 550 0211
                        </a>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
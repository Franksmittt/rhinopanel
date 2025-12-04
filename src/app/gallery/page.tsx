import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocationAndCTA } from "@/components/layout/LocationAndCTA";
import { GalleryGrid } from "@/components/features/GalleryGrid";
import { Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Before & After Gallery | Rhino Panelbeaters Mtubatuba",
  description: "View our portfolio of collision repairs, spray painting, and dent removal. See the difference factory-spec quality makes. Rhino Panelbeaters Mtubatuba.",
  keywords: "panel beating before and after, car spray painting examples, collision repair gallery, rhino panelbeaters work",
  alternates: {
    canonical: '/gallery',
  },
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow">
        
        {/* === HERO SECTION === */}
        <section className="w-full py-16 bg-secondary text-secondary-foreground">
           <div className="container px-4 md:px-8 mx-auto text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary rounded-xl text-primary-foreground mb-6">
                <Camera className="h-8 w-8" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                Proof of Quality
              </h1>
              
              <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-2xl mx-auto leading-relaxed">
                We let our work speak for itself. Browse our recent repairs to see the Rhino Panelbeaters difference.
              </p>
           </div>
        </section>

        {/* === GALLERY GRID === */}
        <section className="w-full py-20 bg-white">
            <div className="container px-4 md:px-8 mx-auto">
                <GalleryGrid />
            </div>
        </section>

        {/* === CTA === */}
        <LocationAndCTA />

      </main>
      
      <Footer />
    </div>
  );
}
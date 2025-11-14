"use client"; // <-- ADDED: This file now uses client-side animations

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { TrustBar } from "@/components/layout/TrustBar";
import { motion } from "framer-motion"; // <-- ADDED: Import for animations

// Metadata is still static, so we can't export it from a client component.
// We'll just remove it for this example, as it would need to be moved to the layout
// or passed in. For now, we'll focus on the layout.

/*
// This metadata export must be removed or moved to layout.tsx
export const metadata: Metadata = {
  title: "Our Services | Rhino Panelbeaters & Towing | Mtubatuba",
  description: "Comprehensive panelbeating and towing services in Mtubatuba. Collision repair, spray painting, dent removal, 24/7 emergency towing, and more. SAMBRA accredited.",
  keywords: "panelbeating services Mtubatuba, collision repair, spray painting, dent removal, towing services, chassis straightening",
};
*/

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow">
        
        {/* === REVAMPED HERO SECTION === */}
        <section className="w-full py-12 md:py-20 lg:py-28 bg-foreground">
          <div className="container px-4 md:px-8 mx-auto">
            
            {/* Split-column layout to break the centered text */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
              
              {/* Column 1: Animated Heading */}
              <div>
                <motion.h1 
                  className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-background leading-tight"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  Our Services
                </motion.h1>
              </div>
              
              {/* Column 2: Animated Description */}
              <div>
                <motion.p 
                  className="text-lg md:text-xl lg:text-2xl text-background/80 leading-relaxed" // Using opacity for hierarchy
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                >
                  Comprehensive panelbeating and towing services for Mtubatuba and the Zululand region. Factory-spec repairs with 3-year warranty guarantee.
                </motion.p>
              </div>
            </div>
            
          </div>
        </section>
        {/* === END OF REVAMPED HERO === */}


        {/* Trust Bar (This was updated in the previous step) */}
        <TrustBar />

        {/* Services Grid */}
        <ServicesGrid />

      </main>
      
      <Footer />
    </div>
  );
}
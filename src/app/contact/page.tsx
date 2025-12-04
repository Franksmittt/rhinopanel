import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LazyMap } from "@/components/layout/LazyMap";
import { ContactForm } from "@/components/features/ContactForm";
import { ContactDetails } from "@/components/features/ContactDetails";
import { Phone } from "lucide-react";

// Metadata optimized for Local SEO
export const metadata: Metadata = {
  title: "Contact Rhino Panelbeaters Mtubatuba | Address & Phone",
  description: "Contact Rhino Panelbeaters in Mtubatuba. Find our address, workshop phone number (035 550 0211), and 24/7 emergency towing line (072 311 5870).",
  keywords: "contact panelbeater Mtubatuba, panelbeater address, rhino panelbeaters phone number, 24/7 towing Mtubatuba",
  alternates: {
    canonical: '/contact',
  },
};

// Map URL from LocationAndCTA.tsx
const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.7497989346457!2d32.186301974730945!3d-28.426805558160726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1efa4f69fb506301%3A0x3816aedcd1d65990!2sRhino%20Panelbeaters%20and%20Towing!5e0!3m2!1sen!2sza!4v1763116439280!5m2!1sen!2sza";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow">
        
        {/* === HERO SECTION === */}
        <section className="w-full py-16 md:py-24 bg-secondary text-secondary-foreground">
           <div className="container px-4 md:px-8 mx-auto text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary rounded-xl text-primary-foreground mb-6">
                <Phone className="h-8 w-8" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                Get in Touch
              </h1>
              
              <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-2xl mx-auto leading-relaxed">
                We&apos;re here to help. Contact our workshop for bookings or call our 24/7 line for immediate emergency assistance.
              </p>
           </div>
        </section>

        {/* === CONTACT & MAP SECTION === */}
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="container px-4 md:px-8 mx-auto">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    
                    {/* COLUMN 1: Contact Details */}
                    <div className="flex flex-col space-y-8">
                        <ContactDetails />
                    </div>

                    {/* COLUMN 2: Form */}
                    <div className="flex flex-col space-y-8">
                         <ContactForm />
                    </div>

                </div>

            </div>
        </section>

        {/* === MAP SECTION === */}
        <section className="w-full pb-16 md:pb-24 -mt-8 md:-mt-12">
            <div className="container px-4 md:px-8 mx-auto">
                 <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border-2 border-border h-96 md:h-[500px]">
                    <LazyMap
                      src={MAP_EMBED_URL}
                      className="w-full h-full"
                      ariaLabel="Google Map showing the location of Rhino Panelbeaters on Jacaranda Ave."
                    />
                </div>
            </div>
        </section>
        
      </main>
      
      <Footer />
    </div>
  );
}
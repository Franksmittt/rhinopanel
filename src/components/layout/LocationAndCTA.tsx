// Professional Location & Final CTA Component

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  MapPin, 
  Clock, 
  Phone, 
  ArrowRight, 
  Wrench, 
  Car, 
  FileText,
  Star, 
  ExternalLink 
} from "lucide-react";
import { LazyMap } from "./LazyMap";

const OFFICE_PHONE = "035 550 0211";
const TOWING_NUMBER = "072 311 5870";
const GMB_LINK = "https://share.google/UBoRn59KzPkWT48fK";
const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.7497989346457!2d32.186301974730945!3d-28.426805558160726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1efa4f69fb506301%3A0x3816aedcd1d65990!2sRhino%20Panelbeaters%20and%20Towing!5e0!3m2!1sen!2sza!4v1763116439280!5m2!1sen!2sza";

export function LocationAndCTA() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-8 mx-auto space-y-16">

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
            Find Us: Rhino Panelbeaters, Mtubatuba
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
           Visit our workshop or call us 24/7 for emergency towing
          </p>
        </div>
        
        {/* === MAP AND DETAILED CONTACT ROW === */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* COLUMN 1 & 2: Lazy-loaded Map */}
            <div className="lg:col-span-2 relative w-full rounded-2xl overflow-hidden shadow-xl border-2 border-border">
                <LazyMap
                  src={MAP_EMBED_URL}
                  className="w-full h-96 rounded-2xl"
                  ariaLabel="Google Map showing the location of Rhino Panelbeaters on Jacaranda Ave."
                />
            </div>

            {/* COLUMN 3: Contact Details */}
            <div className="lg:col-span-1 space-y-8 p-6 bg-muted/30 rounded-2xl border border-border">
                
                 {/* Workshop Office Details */}
                 <div className="space-y-4">
                    <h3 className="text-2xl font-bold flex items-center space-x-2 text-foreground">
                        <Wrench className="h-6 w-6 text-primary shrink-0" />
                        <span>Workshop Office</span>
                    </h3>
                    
                    <div className="space-y-4 text-base">
                        <div className="flex items-start space-x-3">
                            <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">Jacaranda Ave, Mtubatuba, 3935</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Clock className="h-5 w-5 text-primary shrink-0" />
                            <span className="text-muted-foreground">Mon-Fri: 7:30 am - 5:00 pm</span>
                        </div>
                        <div className="flex items-center space-x-3 pt-2">
                            <Phone className="h-5 w-5 text-primary shrink-0" />
                            <a href={`tel:${OFFICE_PHONE.replace(/\s/g, '')}`} className="font-bold text-foreground hover:text-primary transition-colors">
                                {OFFICE_PHONE}
                            </a>
                        </div>
                      
                        {/* === NEW GMB LINK === */}
                        <div className="pt-2">
                          <Button asChild variant="outline" className="w-full">
                            <a href={GMB_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                              <span>See Our Google Reviews</span>
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                        {/* === END OF NEW GMB LINK === */}
                        
                    </div>
                 </div>

                 {/* Emergency Towing Section */}
                <div className="space-y-3 pt-6 border-t border-border">
                    <h3 className="text-xl font-bold flex items-center space-x-2 text-destructive">
                        <Car className="h-6 w-6 shrink-0" />
                        <span>24/7 EMERGENCY TOWING</span>
                    </h3>
                    <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 md:h-6 md:w-6 text-destructive shrink-0" />
                        <a href={`tel:${TOWING_NUMBER.replace(/\s/g, '')}`} className="text-xl md:text-2xl font-extrabold text-destructive hover:underline break-all">
                            {TOWING_NUMBER}
                        </a>
                    </div>
                    <p className="text-sm text-muted-foreground pl-9 leading-relaxed">
                        Call immediately for N2 accident support.
                    </p>
                </div>
            </div>
        </div>

        {/* === FINAL CONVERSION CTA BAR === */}
        <div className="w-full p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between rounded-2xl bg-primary text-primary-foreground shadow-2xl">
            
            <div className="flex items-center space-x-3 
md:space-x-4 mb-6 md:mb-0 w-full md:w-auto">
                <FileText className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 shrink-0" />
                <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 leading-tight">Ready to Start Your Repair?</h3>
                    <p className="text-sm sm:text-base 
md:text-lg opacity-90">Start your claim immediately with our digital quote engine.</p>
                 </div>
            </div>

            <Button asChild size="xl" variant="secondary" className="w-full md:w-auto h-12 md:h-14 text-sm md:text-lg font-bold shadow-lg hover:shadow-xl transition-all">
                <Link href="/quote" className="flex items-center justify-center space-x-2">
                    {/* FIX: Wrapped children in a Fragment */}
                    <>
                        <span className="text-xs sm:text-sm md:text-base">BEGIN FREE DIGITAL QUOTE</span>
                        <ArrowRight className="h-4 w-4 md:h-5 md:w-5 shrink-0" />
                    </>
                </Link>
            </Button>
            
        </div>

      </div>
    </section>
  );
}
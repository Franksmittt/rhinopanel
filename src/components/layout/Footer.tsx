// Professional Footer Component

import Link from "next/link";
import { MapPin, Clock, Phone, Award, Wrench } from "lucide-react";

const currentYear = new Date().getFullYear();
const TOWING_NUMBER = "072 311 5870"; // <-- UPDATED
const OFFICE_PHONE = "035 550 0211";

export function Footer() {
  return (
    <footer className="w-full border-t bg-muted/30 text-foreground">
      <div className="container px-4 md:px-8 mx-auto py-12">
        
        {/* === TOP SECTION: Content Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-x-8 gap-y-10 border-b border-border pb-10 mb-8">
            
            {/* COLUMN 1: Brand Info & Trust */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-4">
                <h3 className="text-xl font-bold flex items-center space-x-2 text-foreground">
                    <Wrench className="h-6 w-6 text-primary shrink-0" />
                    <span>Rhino Panelbeaters</span>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    Your OEM & Insurer Approved repair centre in Mtubatuba. We guarantee peace of mind and factory-spec quality.
                </p>
                <div className="flex items-center space-x-2 text-primary font-semibold text-sm">
                    <Award className="h-4 w-4 shrink-0" />
                    <span>SAMBRA & RMI Accredited</span>
                </div>
            </div>

            {/* COLUMN 2: Quick Links */}
            <div className="col-span-1 space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
                <nav className="flex flex-col space-y-2 text-sm">
                    <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                        Our Services
                    </Link>
                    <Link href="/process" className="text-muted-foreground hover:text-primary transition-colors">
                        Our Process
                    </Link>
                    <Link href="/accreditations" className="text-muted-foreground hover:text-primary transition-colors">
                        Accreditations
                    </Link>
                    <Link href="/quote" className="text-sm font-bold text-primary hover:text-primary/80 transition-colors">
                        → Get Free Quote
                    </Link>
                </nav>
            </div>

            {/* COLUMN 3: Contact Info & Hours */}
            <div className="col-span-1 space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Workshop Details</h4>
                <div className="flex flex-col space-y-3 text-sm pt-1">
                    <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                        <a href={`tel:${OFFICE_PHONE.replace(/\s/g, '')}`} className="font-semibold hover:text-primary transition-colors break-all">
                            {OFFICE_PHONE}
                        </a>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Mon-Fri: 7:30 am - 5:00 pm</span>
                    </div>
                    <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Jacaranda Ave, Mtubatuba, 3935</span>
                    </div>
                </div>
            </div>
            
            {/* COLUMN 4: Emergency CTA */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-4 lg:pl-4 lg:border-l border-border pt-4 lg:pt-0 border-t lg:border-t-0">
                <h4 className="text-lg font-semibold text-destructive">TOWING 24/7</h4>
                
                <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-3">
                        <Phone className="h-6 w-6 text-destructive flex-shrink-0" />
                        <a href={`tel:${TOWING_NUMBER.replace(/\s/g, '')}`} className="text-lg md:text-xl font-extrabold text-destructive hover:underline break-all">
                            {TOWING_NUMBER}
                        </a>
                    </div>
                    <p className="text-sm text-muted-foreground pl-9">
                        Immediate response for N2 accidents and breakdowns. Available 24/7.
                    </p>
                </div>
            </div>
        </div>
        
        {/* === BOTTOM SECTION: Copyright & Legal === */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          
          {/* UPDATED: Copyright/Credit Section */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>
              © {currentYear} Rhino Panelbeaters and Towing. All rights reserved.
            </p>
            <p>
              Designed, Developed & Maintained by{' '}
              <a 
                href="https://www.endpointmedia.co.za/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                Endpoint Media
              </a>.
            </p>
          </div>
          
          {/* Legal Links */}
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
               Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
"use client";

import Link from "next/link";
import { Phone, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// Navigation Items defined in Header.tsx
const navItems = [
  { name: "Services", href: "/services" },
  { name: "Our Process", href: "/process" },
  { name: "Accreditations", href: "/accreditations" },
  { name: "Contact", href: "/contact" },
];

// Key Strategic Data
const TOWING_NUMBER = "072 311 5870";
const PANELBEATING_NUMBER = "035 550 0211";

interface MobileNavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavOverlay({ isOpen, onClose }: MobileNavOverlayProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className="lg:hidden fixed inset-0 top-20 bg-black/50 z-40"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-secondary z-50 overflow-y-auto transform transition-transform ease-in-out duration-300">
        <div className="container px-4 py-8 mx-auto min-h-full flex flex-col">
          
          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4 mb-8">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost" 
                asChild
                className="w-full justify-start text-lg font-semibold text-secondary-foreground hover:text-primary transition-colors py-3 border-b border-white/10 h-auto"
              >
                <Link 
                  href={item.href}
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              </Button>
            ))}
          </nav>

          {/* Contact Buttons at Bottom */}
          <div className="mt-auto pt-8 border-t-2 border-white/10 space-y-4">
            
            {/* Panel Beating Button - FIX: Wrapped children in fragment */}
            <Button 
              variant="default" 
              size="lg"
              asChild
              className="w-full h-14 text-base font-semibold"
            >
              <a href={`tel:${PANELBEATING_NUMBER.replace(/\s/g, '')}`} onClick={onClose}>
                <>
                  <Phone className="h-5 w-5 mr-2 shrink-0" />
                  <span>Panel Beating: {PANELBEATING_NUMBER}</span>
                </>
              </a>
            </Button>

            {/* Towing Button - FIX: Wrapped children in fragment */}
            <Button 
              variant="destructive" 
              size="lg"
              asChild
              className="w-full h-14 text-base font-bold"
            >
              <a href={`tel:${TOWING_NUMBER.replace(/\s/g, '')}`} onClick={onClose}>
                <>
                  <AlertCircle className="h-5 w-5 mr-2 shrink-0" />
                  <span>Towing 24/7: {TOWING_NUMBER}</span>
                </>
              </a>
            </Button>
            
          </div>
        </div>
      </div>
    </>
  );
}
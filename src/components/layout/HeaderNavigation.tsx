import { Button } from "@/components/ui/button";
import { Phone, AlertCircle } from "lucide-react";

// Key Strategic Data
const TOWING_NUMBER = "072 311 5870"; // <-- UPDATED
const PANELBEATING_NUMBER = "035 550 0211"; // <-- CONFIRMED

export function HeaderNavigation() {
  return (
    <div className="flex items-center space-x-2 md:space-x-3">
      {/* Primary Action: Call Panelbeater (General Enquiries) */}
      <Button 
        variant="default" 
        size="sm"
        asChild
        className="hidden sm:flex items-center space-x-1 font-semibold"
      >
        <a href={`tel:${PANELBEATING_NUMBER.replace(/\s/g, '')}`}>
          <Phone className="h-4 w-4" />
          <span>Call Us</span>
        </a>
      </Button>

      {/* Towing Action: Call Towing (24/7, High-Visibility) */}
      <Button 
        variant="destructive" 
        size="sm"
        asChild
        className="flex items-center space-x-1 font-bold hover:scale-105 transition-transform"
      >
        <a href={`tel:${TOWING_NUMBER.replace(/\s/g, '')}`}>
          <AlertCircle className="h-4 w-4" />
          <span className="hidden md:inline">Towing 24/7</span>
          <span className="md:hidden">24/7</span>
        </a>
      </Button>
    </div>
  );
}
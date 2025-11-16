"use client"; // Client component for mobile menu state

// Professional Header Component

import Link from "next/link";
import { Wrench, Menu, X,} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeaderNavigation } from "./HeaderNavigation";
import { MobileNavOverlay } from "./MobileNavOverlay";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

// Navigation Items for the center
const navItems = [
  { name: "Services", href: "/services" },
  { name: "Our Process", href: "/process" },
  { name: "Accreditations", href: "/accreditations" },
  { name: "Contact", href: "/contact" }, 
];

// Key Strategic Data
/* REMOVED: const TOWING_NUMBER = "072 311 5870";
   REMOVED: const PANELBEATING_NUMBER = "035 550 0211"; */

// Logo component
function Logo() {
  return (
    <Link href="/" className="mr-4 md:mr-6 flex items-center space-x-2 transition-opacity duration-300 hover:opacity-80 min-w-0">
      <div className="p-1.5 md:p-2 bg-primary rounded-lg shrink-0">
        <Wrench className="h-4 w-4 md:h-5 md:w-5 text-white" />
      </div>
      <span className="font-bold text-base md:text-xl inline-block text-secondary-foreground whitespace-nowrap overflow-hidden">
        <span className="text-primary">RHINO</span>
        <span className="text-secondary-foreground"> PANELBEATERS</span> 
      </span>
    </Link>
  );
}

export function Header({ className }: { className?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] =useState(false);
  const closeMobileMenu = () => setMobileMenuOpen(false);

// Close mobile menu when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full bg-secondary text-secondary-foreground border-b border-black/10 shadow-sm",
      className
    )}>
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between px-4 md:px-8 mx-auto">
        
        {/* 1. Logo/Title (Left) */}
        <Logo />

        {/* 2. Main Navigation Links (Center) - Desktop Only */}
        <nav 
          className="hidden lg:flex flex-grow justify-center items-center"
        >
            <div className="flex space-x-1">
                {navItems.map((item) => (
                    <Button 
                      key={item.name} 
                      variant="ghost"
                      size="default" 
                      asChild
                      className="text-base text-secondary-foreground hover:bg-white/10 hover:text-primary" 
                    >
                        <Link href={item.href}>{item.name}</Link>
                    </Button>
                ))}
            </div>
        </nav>

        {/* 3. CTAs / Buttons (Right) - Desktop Only */}
        <div className="hidden lg:block">
          <HeaderNavigation />
        </div>

        {/* 4. Mobile Hamburger Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-secondary-foreground hover:bg-white/10 hover:text-secondary-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu Overlay - Uses the new component */}
      <MobileNavOverlay 
        isOpen={mobileMenuOpen} 
        onClose={closeMobileMenu} 
      /> 

    </header>
  );
}
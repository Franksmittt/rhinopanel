"use client"; 

// Professional Services Grid Component

import {
  Car,
  Paintbrush,
  Hammer,
  CarFront,
  Wrench,
  Shield,
  Truck,
  Layers,
  GlassWater,
  SparklesIcon,
  AlertCircle,
  MapPin,
  Zap,
  Phone,
} from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { LogoScroller } from "@/components/layout/LogoScroller";

// === 1. CREATE THE MOTION-WRAPPED BUTTON ===
const MotionButton = motion(Button);

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  category: "repair" | "towing" | "specialty";
  imageUrl: string;
}

const services: Service[] = [
  // ... (all your services)
  {
    title: "Collision Repair",
    description: "Expert collision repair services for all vehicle types. Factory-spec repairs that protect your warranty and restore your vehicle to pre-accident condition.",
    icon: <Car className="h-6 w-6" />,
    href: "/services/collision-repair",
    category: "repair",
    imageUrl: "/images/collision-repair-chassis-welding-mtubatuba-kzn.png",
  },
  {
    title: "Spray Painting",
    description: "Professional spray painting with 3-year warranty guarantee. Computer-matched color mixing and professional spray booth finishing.",
    icon: <Paintbrush className="h-6 w-6" />,
    href: "/services/spray-painting",
    category: "repair",
    imageUrl: "/images/car-spray-painting-finish-kzn.png",
  },
  {
    title: "Scratch Repair",
    description: "Professional removal of surface scratches and paint scuffs. We restore your vehicle's finish, making blemishes disappear.",
    icon: <SparklesIcon className="h-6 w-6" />,
    href: "/services/scratch-repair",
    category: "repair",
    imageUrl: "/images/car-scratch-repair-buffing-kzn.png",
  },
  {
    title: "Paintless Dent Removal (PDR)",
    description: "Advanced paintless dent removal for minor dents and hail damage. No paint required, preserving your vehicle's original finish.",
    icon: <Hammer className="h-6 w-6" />,
    href: "/services/dent-removal",
    category: "repair",
    imageUrl: "/images/paintless-dent-removal-close-up-pdr.png",
  },
  {
    title: "Bumper Repair & Replacement",
    description: "Expert bumper repair and replacement services. OEM and aftermarket options available with factory-spec fitment.",
    icon: <CarFront className="h-6 w-6" />,
    href: "/services/bumper-repair",
    category: "repair",
    imageUrl: "/images/bumper-plastic-welding-repair-mtubatuba.png",
  },
  {
    title: "Chassis Straightening",
    description: "Professional chassis and frame straightening services. Advanced equipment ensures precise structural repairs.",
    icon: <Wrench className="h-6 w-6" />,
    href: "/services/chassis-straightening",
    category: "repair",
    imageUrl: "/images/chassis-straightening-rig-alignment-kzn.png",
  },
  {
    title: "Hail Damage Repair",
    description: "Specialized hail damage repair services. Paintless dent removal and respray options for comprehensive hail damage restoration.",
    icon: <Shield className="h-6 w-6" />,
    href: "/services/hail-damage-repair",
    category: "repair",
    imageUrl: "/images/hail-damage-inspection-dent-kzn.png",
  },
  {
    title: "Panel Replacement",
    description: "Expert panel replacement services for damaged body panels. OEM and quality aftermarket parts available.",
    icon: <Layers className="h-6 w-6" />,
    href: "/services/panel-replacement",
    category: "repair",
    imageUrl: "/images/car-panel-replacement-fitment.png",
  },
  {
    title: "Auto Glass Repair",
    description: "Windshield and auto glass repair and replacement services. Quality glass with proper installation and sealing.",
    icon: <GlassWater className="h-6 w-6" />,
    href: "/services/auto-glass",
    category: "repair",
    imageUrl: "/images/auto-glass-windshield-sealant-installation.png",
  },
  {
    title: "Auto Detailing",
    description: "Professional auto detailing services. Interior and exterior cleaning, polishing, and protection treatments.",
    icon: <SparklesIcon className="h-6 w-6" />,
    href: "/services/auto-detailing",
    category: "specialty",
    imageUrl: "", // No image provided
  },
  {
    title: "24/7 Emergency Towing",
    description: "Round-the-clock emergency towing services for Mtubatuba and the N2 corridor. Fast response times for accidents and breakdowns.",
    icon: <AlertCircle className="h-6 w-6" />,
    href: "/services/emergency-towing",
    category: "towing",
    imageUrl: "", // No image provided
  },
  {
    title: "N2 Truck & Commercial",
    description: "Heavy vehicle and commercial fleet repair services. Specialized expertise for trucks, bakkies, and commercial vehicles on the N2 route.",
    icon: <Truck className="h-6 w-6" />,
    href: "/services/commercial-repair",
    category: "specialty",
    imageUrl: "", // No image provided
  },
  {
    title: "4x4 & Safari Vehicles",
    description: "Expert repairs for 4x4 and safari vehicles from St Lucia and Hluhluwe. Specialized knowledge of off-road vehicle requirements.",
    icon: <MapPin className="h-6 w-6" />,
    href: "/services/4x4-repair",
    category: "specialty",
    imageUrl: "", // No image provided
  },
  {
    title: "Cash & Taxi Repairs",
    description: "Affordable, high-volume repair services for the local Mtubatuba community. Quality repairs at competitive prices.",
    icon: <Zap className="h-6 w-6" />,
    href: "/services/cash-repairs",
    category: "specialty",
    imageUrl: "", // No image provided
  },
];

export function ServicesGrid() {
  // Group services by category
  const repairServices = services.filter((s) => s.category === "repair");
  const specialtyServices = services.filter((s) => s.category === "specialty");
  
  // Manually define the towing service data for our new CTA
  const towingService = {
      title: "24/7 Emergency Towing & Recovery",
      description: "Round-the-clock emergency towing services for Mtubatuba and the N2 corridor. Fast response times for accidents and breakdowns.",
      phone: "072 311 5870", // <-- UPDATED
      href: "/services/emergency-towing"
  };

  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-8 mx-auto space-y-16">
        
        {/* Panelbeating Services */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
              Panelbeating Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
               Comprehensive collision repair and bodywork services with factory-spec quality and 3-year warranty guarantee
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>

        {/* Logo Scroller Section */}
        <div className="w-full">
          <div className="h-px bg-border w-1/2 mx-auto"></div>
          <div className="min-h-[4rem] mt-12">
            <p className="text-center text-sm font-medium text-muted-foreground mb-4">
              OEM Approved Repairer for Leading Brands
            </p>
            <LogoScroller />
          </div>
        </div>

        {/* Full-Width Emergency CTA Block */}
        <div className="w-full p-6 sm:p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between rounded-2xl bg-destructive text-destructive-foreground shadow-2xl">
            
            <div className="flex items-center space-x-3 md:space-x-4 mb-6 lg:mb-0 lg:w-2/3 w-full">
                <AlertCircle className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 shrink-0" />
                <div className="flex-1 min-w-0">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 leading-tight">
                        {towingService.title}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg opacity-90">
                        {towingService.description}
                    </p>
                </div>
            </div>

            <Button 
              asChild 
              size="xl" 
              variant="secondary"
              className="w-full lg:w-auto h-14 sm:h-16 text-base sm:text-lg font-bold shadow-lg hover:shadow-xl transition-all"
            >
                <a href={`tel:${towingService.phone.replace(/\s/g, '')}`} className="flex items-center justify-center space-x-2 sm:space-x-3">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" />
                    <span className="text-sm sm:text-base">CALL 24/7: {towingService.phone}</span>
                </a>
            </Button>
            
        </div>

        {/* Specialty Services */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
              Specialty Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized services tailored to the Zululand market and regional needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialtyServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>

        {/* === REVAMPED CTA BLOCK === */}
        <motion.div
          className="text-center pt-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-col items-center space-y-6 p-8 bg-primary text-primary-foreground rounded-2xl shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-3xl font-extrabold">
              Ready to Get Started?
            </h3>
            <p className="text-lg opacity-90">
              Get a free digital quote in minutes. No need to bring your car in!
            </p>
            
            {/* === 2. USE THE NEW MOTIONBUTTON === */}
            <MotionButton
              asChild // This prop is for the Button component
              size="lg"
              variant="secondary"
              className="h-14 px-8 text-base font-bold"
              // These props are for framer-motion
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/quote">
                Get Free Digital Quote
              </Link>
            </MotionButton>
            
          </div>
        </motion.div>
        {/* === END OF REVAMPED BLOCK === */}

      </div>
    </section>
  );
}
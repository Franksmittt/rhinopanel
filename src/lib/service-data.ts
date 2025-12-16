import { 
  Car, 
  Paintbrush, 
  SparklesIcon, 
  Hammer, 
  CarFront, 
  Wrench, 
  Shield, 
  Layers, 
  GlassWater, 
  Truck, 
  MapPin, 
  Zap, 
  AlertCircle 
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceData {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  icon: LucideIcon;
  category: "repair" | "towing" | "specialty";
  imageUrl: string; // Ensure this is defined
}

export const serviceData: Record<string, ServiceData> = {
  "collision-repair": {
    id: "collision-repair",
    title: "Collision Repair",
    shortDescription: "Expert collision repair services for all vehicle types.",
    fullDescription: "Our collision repair centre uses state-of-the-art chassis straightening technology and OEM-approved welding techniques to restore your vehicle&apos;s structural integrity. We handle major accident damage, ensuring your vehicle meets factory safety specifications before it leaves our workshop.",
    benefits: ["Chassis Straightening", "OEM-Approved Welding", "Structural Integrity Check", "Lifetime Workmanship Guarantee"],
    icon: Car,
    category: "repair",
    imageUrl: "/images/collision-repair-chassis-welding-mtubatuba-kzn.png"
  },
  "spray-painting": {
    id: "spray-painting",
    title: "Spray Painting",
    shortDescription: "Professional spray painting with 3-year warranty guarantee.",
    fullDescription: "We utilize computer-assisted color matching and a dust-free spray booth to ensure a flawless, factory-grade finish. Our waterborne paint systems are environmentally friendly and backed by a 3-year warranty against peeling or fading.",
    benefits: ["Computer Color Matching", "Dust-Free Booth", "3-Year Paint Warranty", "Eco-Friendly Waterborne Paint"],
    icon: Paintbrush,
    category: "repair",
    imageUrl: "/images/car-spray-painting-finish-kzn.png"
  },
  "scratch-repair": {
    id: "scratch-repair",
    title: "Scratch Repair",
    shortDescription: "Professional removal of surface scratches and paint scuffs.",
    fullDescription: "Don&apos;t let minor scratches devalue your vehicle. Our targeted scratch repair techniques blend perfectly with your existing paintwork, removing unsightly scuffs and restoring your vehicle&apos;s showroom shine.",
    benefits: ["Cost-Effective", "Color Blending", "Quick Turnaround", "Surface Protection"],
    icon: SparklesIcon,
    category: "repair",
    imageUrl: "/images/car-scratch-repair-buffing-kzn.png"
  },
  "dent-removal": {
    id: "dent-removal",
    title: "Paintless Dent Removal (PDR)",
    shortDescription: "Advanced paintless dent removal for minor dents.",
    fullDescription: "For dents where the paint surface isn&apos;t broken, we use Paintless Dent Removal (PDR). This specialized technique massages the metal back into shape without the need for fillers or repainting, preserving your original factory finish.",
    benefits: ["No Filler Needed", "Retains Original Paint", "Faster Than Conventional Repair", "Cost-Effective"],
    icon: Hammer,
    category: "repair",
    imageUrl: "/images/paintless-dent-removal-close-up-pdr.png"
  },
  "bumper-repair": {
    id: "bumper-repair",
    title: "Bumper Repair & Replacement",
    shortDescription: "Expert bumper repair and plastic welding services.",
    fullDescription: "Cracked or dented bumpers don&apos;t always need replacement. Our plastic welding experts can often repair your bumper to like-new condition. If replacement is necessary, we source high-quality OEM or approved aftermarket parts.",
    benefits: ["Plastic Welding", "Color Matching", "Sensor Calibration", "OEM Part Sourcing"],
    icon: CarFront,
    category: "repair",
    imageUrl: "/images/bumper-plastic-welding-repair-mtubatuba.png"
  },
  "chassis-straightening": {
    id: "chassis-straightening",
    title: "Chassis Straightening",
    shortDescription: "Precision structural alignment for accident vehicles.",
    fullDescription: "Using advanced laser measuring systems and hydraulic rigs, we pull your vehicle&apos;s frame back to within millimeters of factory specifications. This is critical for proper wheel alignment and safety system functionality.",
    benefits: ["Laser Measuring", "Factory Spec Alignment", "Safety Certification", "Advanced Hydraulics"],
    icon: Wrench,
    category: "repair",
    imageUrl: "/images/chassis-straightening-rig-alignment-kzn.png"
  },
  "hail-damage-repair": {
    id: "hail-damage-repair",
    title: "Hail Damage Repair",
    shortDescription: "Specialized storm damage restoration.",
    fullDescription: "We specialize in mass hail damage repair, coordinating directly with insurance assessment centers. We combine PDR and traditional panel beating to restore hundreds of dents efficiently.",
    benefits: ["Insurance Assessment Support", "PDR Specialists", "Glass Replacement", "Respray Options"],
    icon: Shield,
    category: "repair",
    imageUrl: "/images/hail-damage-inspection-dent-kzn.png"
  },
  "panel-replacement": {
    id: "panel-replacement",
    title: "Panel Replacement",
    shortDescription: "Expert fitment of doors, bonnets, and fenders.",
    fullDescription: "When a panel is beyond repair, we source and fit replacement parts with precision gap alignment. We ensure that doors close correctly, latches align, and the new panel blends seamlessly with the vehicle body.",
    benefits: ["Precision Gap Alignment", "Corrosion Protection", "Sound Deadening", "OEM & Aftermarket Options"],
    icon: Layers,
    category: "repair",
    imageUrl: "/images/car-panel-replacement-fitment.png"
  },
  "auto-glass": {
    id: "auto-glass",
    title: "Auto Glass Repair",
    shortDescription: "Windshield and window replacement services.",
    fullDescription: "We supply and fit SABS-approved automotive glass. Proper installation is vital for the structural integrity of the vehicle&apos;s cabin during a rollover.",
    benefits: ["SABS Approved Glass", "Leak-Free Sealant", "Chip Repair", "Tinting Services"],
    icon: GlassWater,
    category: "repair",
    imageUrl: "/images/auto-glass-windshield-sealant-installation.png"
  },
  "auto-detailing": {
    id: "auto-detailing",
    title: "Auto Detailing",
    shortDescription: "Interior and exterior professional cleaning.",
    fullDescription: "A full valet service that goes beyond a wash. We clean upholstery, polish paintwork, and detail engine bays to make your vehicle look as good as new.",
    benefits: ["Paint Polishing", "Upholstery Cleaning", "Odor Removal", "Engine Bay Cleaning"],
    icon: SparklesIcon,
    category: "specialty",
    imageUrl: "/images/auto-detailing-polish-interior.png" // <-- UPDATED
  },
  "emergency-towing": {
    id: "emergency-towing",
    title: "24/7 Emergency Towing",
    shortDescription: "Round-the-clock accident and breakdown recovery.",
    fullDescription: "Our fleet is on standby 24/7 to assist with breakdowns and accidents across Mtubatuba, St Lucia, and the N2 corridor. We offer rollback services for damage-free transportation.",
    benefits: ["24/7 Availability", "Rollback Trucks", "Accident Scene Clearance", "Secure Storage"],
    icon: AlertCircle,
    category: "towing",
    imageUrl: "/images/emergency-towing-winch-hook-n2.png" // <-- UPDATED
  },
  "commercial-repair": {
    id: "commercial-repair",
    title: "N2 Truck & Commercial",
    shortDescription: "Heavy vehicle and fleet repair services.",
    fullDescription: "We have the facilities to handle light commercial vehicles, bakkies, and trucks. We understand that fleet downtime costs money, so we prioritize fast turnaround times for business vehicles.",
    benefits: ["Fleet Priority", "Heavy Duty Equipment", "Bakkie Specialists", "Fast Turnaround"],
    icon: Truck,
    category: "specialty",
    imageUrl: "/images/commercial-truck-suspension-repair.png" // <-- UPDATED
  },
  "4x4-repair": {
    id: "4x4-repair",
    title: "4x4 & Safari Vehicles",
    shortDescription: "Expert repairs for off-road vehicles.",
    fullDescription: "Servicing the Northern Route (St Lucia, Hluhluwe, Mkhuze, Pongola, Ulundi, Nongoma, up to Kosi Bay) tourism sector, we are experts in repairing safari viewers and 4x4s. We understand specialized accessories like bullbars, winches, and snorkels.",
    benefits: ["Accessory Fitment", "Rust Proofing", "Chassis Repair", "Safari Viewer Mods"],
    icon: MapPin,
    category: "specialty",
    imageUrl: "/images/safari-vehicle-bullbar-fitment.png" // <-- UPDATED
  },
  "cash-repairs": {
    id: "cash-repairs",
    title: "Cash & Taxi Repairs",
    shortDescription: "Affordable repairs for non-insured vehicles.",
    fullDescription: "We offer competitive pricing for cash customers and taxi operators. We focus on structural safety and cost-effective cosmetic solutions to get you back on the road affordably.",
    benefits: ["Competitive Pricing", "Payment Options", "Quick Service", "Safety Focus"],
    icon: Zap,
    category: "specialty",
    imageUrl: "/images/taxi-panel-sanding-prep.png" // <-- UPDATED
  }
};
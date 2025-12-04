// Professional Feature Grid Component

import {
  Shield,
  Wrench,
  Car,
  Camera,
  MapPin,
  Truck,
  Award,
  Lock,
} from "lucide-react"; 
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    title: "Warranty Protected Repairs",
    description: "OEM-approved repair center guaranteeing factory-spec repairs that keep your manufacturer's warranty 100% protected.",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "Digital Quote Engine",
    description: "Get a detailed quote by uploading photos and your license disc—no need to bring your car in! Estimate in minutes.",
    icon: <Camera className="h-6 w-6" />,
  },
  {
    title: "3-Year Paintwork Guarantee",
    description: "Documented minimum warranty of 3 years on all paintwork, ensuring financial transparency and complete peace of mind.",
    icon: <Wrench className="h-6 w-6" />,
  },
  {
    title: "Professional Standards",
    description: "We maintain the highest standards of quality, ethical service, and customer satisfaction with industry-leading expertise.",
    icon: <Award className="h-6 w-6" />,
  },
  {
    title: "N2 Emergency Response Hub",
    description: "Strategically located to serve the N2 highway's high-accident corridor and high-value tourist routes (St Lucia, Hluhluwe).",
    icon: <MapPin className="h-6 w-6" />,
  },
  {
    title: "24/7 Accident Towing",
    description: "Immediate response and seamless integration with regional towing partners to capture high-urgency N2 traffic when you need it most.",
    icon: <Car className="h-6 w-6" />,
  },
  {
    title: "Fleet & Commercial Focus",
    description: "Expertise in heavy vehicle, bakkie, and commercial fleet repairs, targeting the industrial hubs of Richards Bay and Empangeni.",
    icon: <Truck className="h-6 w-6" />,
  },
  {
    title: "Safe, Secure Vehicle Storage",
    description: "We address local crime concerns by guaranteeing secure, fenced storage for all vehicles, providing peace of mind to all customers.",
    icon: <Lock className="h-6 w-6" />,
  },
];

export function FeatureGrid() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
            Why Choose Rhino Panelbeaters?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional, accredited, and trusted by major insurers across Mtubatuba and the Zululand region
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> 
          {features.map((feature) => (
            <FeatureCard 
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

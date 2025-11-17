"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  Search, 
  Wrench, 
  Hammer, 
  Paintbrush, 
  CheckCircle2, 
  Car,
  ArrowDown
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Data derived from Research.txt Part 3.4 
const processSteps = [
  {
    id: 1,
    title: "Vehicle Drop-off & Assessment",
    description: "Your vehicle enters our secure facility. We perform a 360-degree damage mapping and strip-down analysis to identify both visible and hidden structural damage.",
    icon: Search,
    phase: "Intake"
  },
  {
    id: 2,
    title: "Quote & Insurance Authorisation",
    description: "We generate a comprehensive Audatex quote and submit it directly to your insurer (Santam, Hollard, etc.). We handle the negotiation to ensure all OEM parts are approved.",
    icon: FileText,
    phase: "Admin"
  },
  {
    id: 3,
    title: "Disassembly & Parts Ordering",
    description: "Once authorized, we order genuine parts directly from manufacturers. We completely disassemble the damaged area to prepare for structural realignment.",
    icon: Wrench,
    phase: "Preparation"
  },
  {
    id: 4,
    title: "Structural Repair & Panelbeating",
    description: "Using precision chassis straightening equipment, we restore your vehicle's frame to factory specifications. Certified artisans handle all panel replacement and dent repair.",
    icon: Hammer,
    phase: "Repair"
  },
  {
    id: 5,
    title: "Paint Preparation & Refinishing",
    description: "Computer-matched color mixing ensures a perfect blend. Your vehicle enters our dust-free spray booth for a factory-grade finish, backed by our 3-year warranty.",
    icon: Paintbrush,
    phase: "Finish"
  },
  {
    id: 6,
    title: "Reassembly & Quality Control",
    description: "All systems are reconnected, electronics are recalibrated, and a rigorous 20-point quality inspection is performed by our workshop manager.",
    icon: CheckCircle2,
    phase: "Quality"
  },
  {
    id: 7,
    title: "Final Wash & Handover",
    description: "Your vehicle is professionally valeted. We walk you through the repairs, explain your warranty, and get you back on the road with total peace of mind.",
    icon: Car,
    phase: "Completion"
  }
];

export function ProcessTimeline() {
  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="container px-4 md:px-8 mx-auto">
        
        <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
          {/* Vertical Timeline Line */}
          <div 
            className="border-2-2 absolute border-opacity-20 border-primary h-full border" 
            style={{ left: "50%" }} 
          ></div>

          {processSteps.map((step, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`mb-8 flex justify-between items-center w-full ${
                  isEven ? "flex-row-reverse left-timeline" : "right-timeline"
                }`}
              >
                {/* Empty Space for alternating layout */}
                <div className="order-1 w-5/12"></div>
                
                {/* Center Icon Node */}
                <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-10 h-10 md:w-14 md:h-14 rounded-full justify-center border-4 border-white shrink-0">
                  <step.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                
                {/* Content Card */}
                <div className={`order-1 w-[42%] md:w-5/12 px-1 py-4 ${isEven ? "text-right" : "text-left"}`}>
                   <Card className="border-2 border-muted hover:border-primary/30 transition-colors shadow-md">
                     <CardHeader className="pb-2">
                       <div className={`text-xs font-bold uppercase tracking-wide text-primary mb-1 ${isEven ? "flex justify-end" : "flex justify-start"}`}>
                         Phase {step.id}: {step.phase}
                       </div>
                       <CardTitle className="text-lg md:text-xl font-bold text-foreground">
                         {step.title}
                       </CardTitle>
                     </CardHeader>
                     <CardContent>
                       <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                         {step.description}
                       </p>
                     </CardContent>
                   </Card>
                </div>
              </motion.div>
            );
          })}
          
        </div>

        {/* Bottom Connector */}
        <div className="flex justify-center mt-8">
            <div className="animate-bounce p-2 bg-primary/10 rounded-full text-primary">
                <ArrowDown className="h-6 w-6" />
            </div>
        </div>

      </div>
    </section>
  );
}
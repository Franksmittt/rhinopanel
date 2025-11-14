"use client"; 

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  FileText, 
  CheckCircle, 
  Car, 
  Wrench, 
  Zap,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

const MotionButton = motion(Button);

// Data for the 4 small cards
const keySteps = [
  { step: 1, title: "Quote by Photo (3 Min)", icon: FileText, description: "Skip the physical drop-off. We instantly assess damage using our digital quote engine." },
  { step: 2, title: "OEM & Insurer Authorization", icon: CheckCircle, description: "We manage all claims directly. Get peace of mind knowing your factory warranty is protected." },
  { step: 3, title: "Structural Repair & Paint", icon: Wrench, description: "Factory-spec repair using the latest technology and a guaranteed 3-year paint warranty." },
  { step: 4, title: "Final Handover & Assurance", icon: Car, description: "We confirm a perfect finish and get your vehicle back on the road, guaranteed." },
];

// Animation variants for the grid
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Faster stagger for a cooler effect
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      ease: "easeInOut" as const,
      duration: 0.5,
    },
  },
};

// --- NEW COMPONENT: The small 1x1 step card ---
function ProcessCard({ step, title, icon: Icon, description }: (typeof keySteps)[0]) {
  return (
    <motion.div variants={itemVariants} className="h-full">
      <Card className="flex flex-col h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 bg-white group">
        <CardHeader className="flex-col items-start space-y-4">
          <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle className="text-lg md:text-xl font-bold text-foreground">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
        </CardContent>
        <CardFooter>
          <div className="text-xs font-semibold uppercase text-primary/70">
            Step {step} of 14
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

// --- NEW COMPONENT: The large 2x2 CTA card ---
function CTACard() {
  return (
    <motion.div 
      variants={itemVariants} 
      className="md:col-span-2 lg:col-span-2 lg:row-span-2 h-full"
    >
      <Card className="flex flex-col h-full p-6 md:p-8 lg:p-10 rounded-2xl bg-primary text-primary-foreground shadow-2xl space-y-4 md:space-y-6">
        <Zap className="h-8 w-8 md:h-10 md:w-10 shrink-0" />
        <CardTitle className="text-2xl md:text-3xl font-extrabold leading-tight">
            Ready to Begin? Start Your Claim Instantly.
        </CardTitle>
        <CardContent className="p-0 flex-grow">
          <p className="text-base md:text-lg opacity-90 leading-relaxed">
              Don&apos;t wait in a queue. Launch the digital quote engine from your phone right now. It takes just minutes.
          </p>
          
          {/* Guarantees */}
          <div className="flex flex-col gap-2 mt-6">
            <div className="flex items-center space-x-2 text-sm opacity-90">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>3-Year Paint Guarantee</span>
            </div>
            <div className="flex items-center space-x-2 text-sm opacity-90">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>Lifetime Workmanship Guarantee</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-0 flex-col items-start gap-4">
          {/* Main Button */}
          <MotionButton 
            asChild 
            size="xl" 
            variant="secondary" 
            className="w-full h-12 md:h-14 text-sm md:text-lg font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
              <Link href="/quote" className="flex items-center justify-center space-x-2">
                  <span className="text-xs md:text-base">BEGIN FREE DIGITAL QUOTE</span>
                   <ArrowRight className="h-4 w-4 md:h-5 md:w-5 shrink-0" />
              </Link>
          </MotionButton>
          {/* Secondary Link */}
          <motion.div whileHover={{ x: 2 }} className="w-full flex justify-start">
            <Link href="/process" className="text-sm font-semibold hover:underline opacity-90 transition-opacity flex items-center space-x-2">
                <span>View the Full 14-Step Blueprint</span>
                <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}


export function ProcessCallout() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-8 mx-auto">
        
        {/* Animated Headline */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" as const }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
            Your Damage Fixed. Your Warranty Protected.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
             We follow a rigorous, transparent 14-step process that guarantees a factory-spec finish and complete peace of mind.
          </p>
        </motion.div>

        {/* --- NEW BENTO GRID LAYOUT --- */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-6" // auto-rows-fr makes all rows equal height
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
            {/* The 2x2 CTA Card */}
            <CTACard />
            
            {/* The 4 1x1 Step Cards */}
            {keySteps.map((step) => (
                <ProcessCard key={step.step} {...step} />
            ))}
        </motion.div>
        
      </div>
    </section>
  );
}
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface AccreditationProps {
  title: string;
  description: string;
  benefits: string[];
}

export function AccreditationCard({ title, description, benefits }: AccreditationProps) {
  return (
    <Card className="h-full border-2 border-muted hover:border-primary/20 transition-all duration-300 bg-white flex flex-col">
      <CardHeader className="pb-4 flex flex-col items-center text-center border-b border-muted/30">
        {/* Logo Placeholder - In production, use real images */}
        <div className="relative w-32 h-24 mb-4 grayscale hover:grayscale-0 transition-all duration-500">
           <div className="flex items-center justify-center w-full h-full bg-muted/10 rounded-lg">
             {/* Fallback text if image is missing, or use actual Image component */}
             <span className="text-xs font-bold text-muted-foreground">{title} LOGO</span>
           </div>
           {/* Uncomment this when you have real logos in public/logos/ */}
           {/* <Image src={logoSrc} alt={title} fill className="object-contain" /> */}
        </div>
        <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="pt-6 flex-grow flex flex-col">
        <p className="text-muted-foreground mb-6 text-sm leading-relaxed text-center">
          {description}
        </p>
        
        <div className="mt-auto space-y-3">
          <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
            Customer Protection:
          </h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-2 text-sm text-foreground/80">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
"use client"; // Client component for form logic

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Upload, ArrowRight, CheckCircle2 } from "lucide-react";

export function HeroQuoteForm() {
  return (
    <Card className="w-full border-2 border-primary/20 shadow-2xl bg-white">
      <CardHeader className="space-y-2 pb-4">
        <CardTitle className="text-2xl font-bold text-foreground">
          Start Your Free Quote
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Get an instant estimate in 3 minutes - no visit required
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        
        <div className="space-y-3">
          <Input 
            placeholder="Vehicle Make (e.g., Toyota)" 
            aria-label="Vehicle Make Input"
            className="h-12"
          />
          <Input 
            placeholder="Your Phone Number" 
            aria-label="Phone Number Input"
            className="h-12"
          />
        </div>
        
        {/* Photo Upload Area - Fixed dimensions to prevent layout shift */}
        <div 
          className="border-2 border-dashed border-primary/30 rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer bg-primary/5 min-h-[120px] flex flex-col items-center justify-center"
          style={{ contain: "layout style paint" }}
        >
          <Upload className="h-8 w-8 text-primary mx-auto mb-2 shrink-0" />
          <p className="text-sm font-medium text-foreground mb-1">
            Upload Damage Photos
          </p>
          <p className="text-xs text-muted-foreground">
            Tap to upload up to 5 images
          </p>
        </div>

        {/* Benefits List */}
        <div className="space-y-2 pt-2">
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
            <span>No need to bring your car in</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
            <span>Accurate quote in minutes</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
            <span>100% free & no obligation</span>
          </div>
        </div>

        <Button asChild className="w-full h-12 text-base font-bold shadow-lg hover:shadow-xl transition-all">
          <Link href="/quote" className="flex items-center justify-center space-x-2">
            <span>Begin Quote Upload</span>
            <ArrowRight className="h-5 w-5 shrink-0" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

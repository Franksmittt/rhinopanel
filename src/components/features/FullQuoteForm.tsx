"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label"; // Assuming shadcn Label component
import { Upload, Send, Loader2, Car } from "lucide-react";

export function FullQuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert("Quote request submitted! We will contact you shortly.");
    setIsSubmitting(false);
  };

  return (
    <Card className="w-full border-2 border-primary/10 shadow-xl">
      <CardHeader className="bg-muted/20 border-b border-border pb-6">
        <CardTitle className="text-2xl md:text-3xl font-bold flex items-center gap-2">
          <Car className="h-6 w-6 text-primary" />
          Digital Assessment Form
        </CardTitle>
        <CardDescription className="text-base">
          Fill in the details below. Uploading photos helps us give you an accurate estimate without a workshop visit.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* 1. Personal Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-l-4 border-primary pl-3">1. Your Contact Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" required placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" required placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" required placeholder="082 123 4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Your Location (Town)</Label>
                <Input id="location" placeholder="e.g. Mtubatuba" />
              </div>
            </div>
          </div>

          {/* 2. Vehicle Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-l-4 border-primary pl-3">2. Vehicle Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="make">Make *</Label>
                <Input id="make" required placeholder="e.g. Toyota" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="model">Model *</Label>
                <Input id="model" required placeholder="e.g. Hilux" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Input id="year" placeholder="e.g. 2019" />
              </div>
            </div>
            <div className="space-y-2">
                 <Label htmlFor="reg">Registration Number</Label>
                 <Input id="reg" placeholder="e.g. NUF 12345" />
            </div>
          </div>

          {/* 3. Damage Description */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-l-4 border-primary pl-3">3. Damage Details</h3>
            <div className="space-y-2">
                <Label htmlFor="description">Describe the damage *</Label>
                <Textarea id="description" required placeholder="Please describe where the damage is and how it happened..." className="min-h-[100px]" />
            </div>
            
            {/* Photo Upload Placeholder */}
            <div className="space-y-2">
                <Label>Upload Photos (Optional but Recommended)</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 hover:border-primary/50 transition-colors rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer bg-muted/5">
                    <Upload className="h-10 w-10 text-muted-foreground mb-4" />
                    <p className="font-medium text-foreground">Click or Drag photos here</p>
                    <p className="text-sm text-muted-foreground mt-1">Up to 5 images (JPG, PNG)</p>
                </div>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold shadow-lg" disabled={isSubmitting}>
            {isSubmitting ? (
                <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending Assessment...
                </>
            ) : (
                <>
                    <Send className="mr-2 h-5 w-5" />
                    Request Free Quote
                </>
            )}
          </Button>

        </form>
      </CardContent>
    </Card>
  );
}
"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // The new component
import { Send } from "lucide-react";

export function ContactForm() {
  
  // This would be handled by a server action or API route in a real app
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thank you! Your general inquiry has been sent.");
  };

  return (
    <Card className="w-full border-2 border-muted/30 shadow-lg bg-white">
      <CardHeader className="space-y-2 pb-4">
        <CardTitle className="text-2xl font-bold text-foreground">
          Send a General Inquiry
        </CardTitle>
        <CardDescription>
          For general questions only. For damage estimates, please use our{' '}
          <a href="/quote" className="text-primary font-medium hover:underline">
            Free Digital Quote
          </a>{' '}
          form.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-3">
            <Input 
              placeholder="Your Name" 
              aria-label="Your Name"
              className="h-12"
              required
            />
            <Input 
              placeholder="Your Phone Number" 
              aria-label="Phone Number"
              className="h-12"
              required
            />
             <Input 
              type="email"
              placeholder="Your Email Address" 
              aria-label="Email Address"
              className="h-12"
              required
            />
            <Textarea 
              placeholder="Your Message or Question..."
              aria-label="Your Message"
              required
            />
          </div>
          
          <Button type="submit" className="w-full h-12 text-base font-bold shadow-lg hover:shadow-xl transition-all">
            <Send className="h-5 w-5 mr-2" />
            Send Inquiry
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
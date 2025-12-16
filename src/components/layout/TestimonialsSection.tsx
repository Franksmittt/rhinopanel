// Professional Testimonials Section

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "J. Smith",
    location: "Mtubatuba",
    rating: 5,
    text: "Rhino Panelbeaters fixed my Toyota Hilux after an accident. The work was perfect, and they handled everything with my insurance. Highly professional and trustworthy.",
  },
  {
    name: "M. Khumalo",
    location: "St Lucia",
    rating: 5,
    text: "Had a breakdown on the N2 and called their 24/7 towing. They towed my car and handled the repair. One call, one solution. Excellent service!",
  },
  {
    name: "P. van der Merwe",
    location: "Hluhluwe",
    rating: 5,
    text: "The paintwork on my BMW was flawless. Three-year warranty gives me complete peace of mind. Professional quality standards show they're serious about quality.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full py-20 bg-muted/30">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
            Trusted by Our Customers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real reviews from real customers across Mtubatuba and the Zululand region
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-border hover:border-primary/20 transition-all duration-300 bg-white">
              <CardContent className="p-6 space-y-4">
                <Quote className="h-8 w-8 text-primary/20" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


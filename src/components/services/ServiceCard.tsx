// Professional Service Card Component

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Service } from "./ServicesGrid";

interface ServiceCardProps {
  service: Service;
  highlighted?: boolean;
}

export function ServiceCard({ service, highlighted = false }: ServiceCardProps) {
  return (
    <Card 
      className={`flex flex-col h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 bg-white group overflow-hidden ${
        highlighted ? "border-accent/20 bg-accent/5" : ""
      }`}
    >
      {/* Service Image - Above the content */}
      {service.imageUrl && (
        <div className="relative w-full h-48 overflow-hidden bg-muted">
          <Image
            src={service.imageUrl}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
      )}
      
      <CardHeader className="flex-row items-start space-x-4 pb-4">
        <div className={`p-3 rounded-lg flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300 ${
          highlighted ? "bg-accent/20 text-accent" : "bg-primary/10 text-primary"
        }`}>
          {service.icon}
        </div>
        <div className="flex-1">
          <CardTitle className="text-xl font-bold mb-2">{service.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow pt-0">
        <CardDescription className="text-base leading-relaxed">
          {service.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-4">
        <Button asChild variant="outline" className="w-full group/btn">
          <Link href={service.href} className="flex items-center justify-center space-x-2">
            <span>Learn More</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}


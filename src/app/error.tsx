"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCcw, Phone } from "lucide-react";

// Key Strategic Data
const OFFICE_PHONE = "035 550 0211";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  
  useEffect(() => {
    // Log the error to an error reporting service (e.g., Sentry)
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center bg-muted/10">
      
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-2 border-destructive/10 max-w-lg w-full">
        <div className="inline-flex items-center justify-center p-4 bg-destructive/10 rounded-full mb-6">
            <AlertTriangle className="h-12 w-12 text-destructive" />
        </div>
        
        <h1 className="text-3xl font-extrabold text-foreground mb-4">
            Something went wrong!
        </h1>
        
        <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            We encountered an unexpected error while loading this page. Our technical team has been notified.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Attempt to recover by trying to re-render the segment */}
            <Button 
                onClick={() => reset()}
                size="lg"
                className="h-12 font-bold shadow-md"
            >
                <RefreshCcw className="mr-2 h-4 w-4" />
                Try Again
            </Button>
            
            {/* Fallback for urgent users */}
            <Button 
                variant="outline" 
                size="lg"
                className="h-12"
                asChild
            >
                <a href={`tel:${OFFICE_PHONE.replace(/\s/g, '')}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call Support
                </a>
            </Button>
        </div>

        {/* Debug info for developers (hidden in production ideally, but useful for now) */}
        <p className="mt-8 text-xs text-muted-foreground/50 font-mono">
            Error Digest: {error.digest || "Unknown Error"}
        </p>
      </div>

    </div>
  );
}
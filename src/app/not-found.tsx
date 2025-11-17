import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileQuestion, Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted/20 px-4 text-center">
      
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-2 border-border max-w-lg w-full">
        <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
            <FileQuestion className="h-12 w-12 text-primary" />
        </div>
        
        <h1 className="text-4xl font-extrabold text-foreground mb-2">Page Not Found</h1>
        <p className="text-muted-foreground mb-8 text-lg">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
        </p>

        <div className="space-y-3">
            <Button asChild size="lg" className="w-full h-12 text-base font-bold">
                <Link href="/">
                    <Home className="mr-2 h-5 w-5" />
                    Back to Homepage
                </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="w-full h-12 text-base">
                <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Us
                </Link>
            </Button>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-2">Need immediate assistance?</p>
            <a href="tel:0723115870" className="text-xl font-black text-destructive hover:underline">
                Call 24/7 Towing: 072 311 5870
            </a>
        </div>
      </div>

    </div>
  );
}
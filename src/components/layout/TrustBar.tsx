// Professional Trust Bar Component

import { Shield, Award, CheckCircle2 } from "lucide-react";

export function TrustBar() {
  return (
    <section className="w-full bg-[#1f1f1f] py-12 md:py-16 border-y border-border"> {/* <-- THIS LINE IS UPDATED */}
      <div className="container px-4 md:px-8 mx-auto">
        
        {/* UPDATED: Converted to a 3-column "Bento-style" grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow border-2 border-transparent hover:border-primary/20 hover:shadow-lg transition-all">
            <Shield className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground">
              Quality Guaranteed
            </h3>
            <p className="text-sm text-muted-foreground text-center mt-1">
              Adherence to the highest ethical and service standards.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow border-2 border-transparent hover:border-primary/20 hover:shadow-lg transition-all">
            <Award className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground">
              Professional Service
            </h3>
            <p className="text-sm text-muted-foreground text-center mt-1">
              Experienced team with industry-leading expertise.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow border-2 border-transparent hover:border-primary/20 hover:shadow-lg transition-all">
            <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground">
              Insurance Approved
            </h3>
            <p className="text-sm text-muted-foreground text-center mt-1">
              We handle claims for all major insurance partners.
            </p>
          </div>
          
        </div>
        
        {/* === Divider and LogoScroller section REMOVED === */}

      </div>
    </section>
  );
}
import { Loader2, Wrench } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm transition-all">
      
      <div className="relative flex flex-col items-center">
        {/* Brand Icon (Static) */}
        <div className="bg-primary p-3 rounded-xl shadow-xl mb-6">
            <Wrench className="h-8 w-8 text-white" />
        </div>

        {/* Spinner (Animated) */}
        <div className="relative">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            
            {/* Secondary pulsing ring for visual polish */}
            <div className="absolute inset-0 h-12 w-12 rounded-full border-4 border-primary/20 animate-ping opacity-20"></div>
        </div>

        <h2 className="mt-6 text-lg font-semibold text-foreground animate-pulse">
            Loading...
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
            Getting you back on the road
        </p>
      </div>

    </div>
  );
}
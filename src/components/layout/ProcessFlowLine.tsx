// src/components/layout/ProcessFlowLine.tsx

import { ArrowRight } from "lucide-react";

/**
 * A Server Component that renders the visual flow line and arrows 
 * to connect the steps in the ProcessCallout.
 * It's designed to align perfectly with the grid in ProcessCallout.tsx
 * to reinforce the sequential nature of the 14-step process.
 */
export function ProcessFlowLine() {
  return (
    // This div needs to match the structure of the grid below it (grid-cols-4)
    // but only needs to render the separators in the gaps.
    <div className="hidden md:grid grid-cols-4 gap-8 mb-6 relative px-8">
      
      {/* Container for the horizontal line */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-px bg-muted/40"></div>
      
      {/* Column 1: Empty to align with the first Step */}
      <div className="col-span-1" />

      {/* Separator 1 (Between Step 1 and 2) */}
      <div className="relative flex justify-center items-center h-full">
        <ArrowRight className="h-6 w-6 text-primary z-10 bg-muted/30 p-1 rounded-full border-2 border-muted/30" />
      </div>

      {/* Separator 2 (Between Step 2 and 3) */}
      <div className="relative flex justify-center items-center h-full">
        <ArrowRight className="h-6 w-6 text-primary z-10 bg-muted/30 p-1 rounded-full border-2 border-muted/30" />
      </div>

      {/* Separator 3 (Between Step 3 and 4) */}
      <div className="relative flex justify-center items-center h-full">
        <ArrowRight className="h-6 w-6 text-primary z-10 bg-muted/30 p-1 rounded-full border-2 border-muted/30" />
      </div>

      {/* Column 5: Not rendered, as the structure is relative to the ProcessCallout grid */}
    </div>
  );
}
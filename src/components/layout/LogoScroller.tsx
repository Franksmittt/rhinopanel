"use client"; // Client Component for animation

import * as React from "react";

// Top 10 Car Brands in South Africa
const topBrands = [
  "TOYOTA",
  "VOLKSWAGEN",
  "FORD",
  "NISSAN",
  "BMW",
  "MERCEDES-BENZ",
  "AUDI",
  "SUZUKI",
  "HYUNDAI",
  "KIA",
];

// Duplicate the list for seamless infinite scroll
const duplicatedBrands = [...topBrands, ...topBrands];

export function LogoScroller() {
  // Use CSS animation instead of JavaScript for better performance
  // Prevent forced reflows by using transform and will-change
  return (
    <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
      <div 
        className="flex w-[200%] animate-scroll"
        style={{
          willChange: "transform", // Optimize animation performance
          contain: "layout style paint", // Prevent layout shifts and reflows
          transform: "translateZ(0)", // Force GPU acceleration
        }}
      >
        {duplicatedBrands.map((brandName, index) => (
          <div 
            key={`${brandName}-${index}`} 
            className="flex-shrink-0 flex justify-center items-center h-16 w-40 md:w-52"
            style={{
              contain: "layout style paint", // Prevent reflows
            }}
          >
            <span className="text-lg md:text-xl font-bold uppercase text-muted-foreground whitespace-nowrap hover:text-primary transition-colors duration-300">
              {brandName}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

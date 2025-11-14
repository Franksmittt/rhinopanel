"use client"; // Client component for lazy loading

import { useState, useEffect, useRef } from "react";

interface LazyMapProps {
  src: string;
  className?: string;
  ariaLabel?: string;
}

export function LazyMap({ src, className, ariaLabel }: LazyMapProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Use Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Clear any existing timeout
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
            // Delay loading slightly to prioritize above-the-fold content
            timeoutRef.current = setTimeout(() => {
              setShouldLoad(true);
            }, 100);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "200px", // Start loading when 200px away from viewport
        threshold: 0.01,
      }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ 
        minHeight: "384px", 
        backgroundColor: "#f3f4f6",
        contain: "layout style paint", // Prevent layout shifts
      }}
    >
      {shouldLoad ? (
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: "384px" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label={ariaLabel}
          title={ariaLabel}
        />
      ) : (
        <div 
          className="flex items-center justify-center h-full text-muted-foreground min-h-[384px]"
          style={{ contain: "layout style paint" }}
        >
          <div className="text-center">
            <div className="animate-pulse">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-sm">Loading map...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

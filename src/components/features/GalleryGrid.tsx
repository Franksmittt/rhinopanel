"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";
import Image from "next/image";

// UPDATED: Match exact filenames provided (PNGs)
// Removed items 4, 5, 6 as images were not provided yet.
const galleryItems = [
  { 
    id: 1, 
    category: "Collision", 
    title: "Toyota Hilux Front End", 
    before: "/images/before-1.png", 
    after: "/images/after-1.png" 
  },
  { 
    id: 2, 
    category: "Spray Painting", 
    title: "BMW M3 Respray", 
    before: "/images/before-2.png", 
    after: "/images/after-2.png" 
  },
  { 
    id: 3, 
    category: "Dent Removal", 
    title: "Hail Damage Repair", 
    before: "/images/before-3.png", 
    after: "/images/after-3.png" 
  },
];

const categories = ["All", "Collision", "Spray Painting", "Dent Removal"];

export function GalleryGrid() {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="space-y-8">
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={filter === cat ? "default" : "outline"}
            onClick={() => setFilter(cat)}
            className="rounded-full px-6 transition-all"
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Gallery Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden border-2 border-border h-full bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  
                  {/* Image Container */}
                  <div className="relative h-64 w-full bg-muted">
                    {/* Before Image (Left Half) */}
                    <div className="absolute left-0 top-0 bottom-0 w-1/2 overflow-hidden">
                        <Image 
                            src={item.before} 
                            alt={`${item.title} Before`} 
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/10" /> {/* Slight darken for contrast */}
                        <span className="absolute top-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded z-10">
                            BEFORE
                        </span>
                    </div>

                    {/* After Image (Right Half) */}
                    <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden border-l-2 border-white">
                        <Image 
                            src={item.after} 
                            alt={`${item.title} After`} 
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                            loading="lazy"
                        />
                        <span className="absolute top-2 right-2 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded z-10">
                            AFTER
                        </span>
                    </div>
                    
                    {/* Center Badge */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded-full shadow-lg text-xs font-black border border-border z-20">
                        VS
                    </div>
                    
                    {/* Overlay Category Label */}
                    <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded z-20">
                        {item.category}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                            <ImageIcon className="h-4 w-4" /> 2 Photos
                        </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
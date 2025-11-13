// src/app/page.tsx
import { Header } from "@/components/layout/Header"; 
import { HeroSection } from "@/components/layout/HeroSection"; 
import { FeatureGrid } from "@/components/layout/FeatureGrid"; // <-- Import the new component
import { Footer } from "@/components/layout/Footer"; 
import { InteractiveButton } from "@/components/features/interactive-button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Header /> 
      
      <main className="flex-grow"> 
        <HeroSection /> 
        
        {/* 1. The Feature Grid Section */}
        <FeatureGrid /> 

        <div className="flex flex-col items-center p-24 space-y-4">
          <h2 className="text-3xl font-semibold mb-4">Core Boilerplate Functionality</h2>
          <InteractiveButton /> 
        </div>
        
      </main>
      
      <Footer /> 
    </div>
  );
}
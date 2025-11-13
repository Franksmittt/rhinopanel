// src/components/layout/Header.tsx
// This is a clean Server Component for the primary navigation structure.

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-8 mx-auto">
        
        {/* Logo/Title */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lg inline-block">Boilerplate App</span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
                <Link href="/dashboard">Dashboard</Link>
            </Button>
            <Button variant="ghost" asChild>
                <Link href="/about">About</Link>
            </Button>
            {/* The right-hand side can be reserved for a Sign In button later */}
            <Button asChild>
                <Link href="/login">Sign In</Link>
            </Button>
        </nav>

      </div>
    </header>
  );
}
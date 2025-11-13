// src/components/layout/Footer.tsx
// This is a Server Component, optimized for rendering static content.

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-card text-card-foreground">
      <div className="container px-4 md:px-8 mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          
          {/* Copyright Section */}
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} Modern App Boilerplate. All rights reserved.
          </p>
          
          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
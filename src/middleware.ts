// Phase 6: Edge Middleware Personalization - "Edge Dictatorship" Strategy
// Intercepts requests to rewrite URLs based on geolocation headers
// Provides "God Effect" - instant personalized content based on user location

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getAllLocationSlugs, getLocationBySlug } from '@/lib/location-data';

// Configuration: Exclude static files and APIs from middleware processing
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes) - but we need /ingest which is not under /api
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - location (location-specific pages should not be rewritten)
     * - services (service pages should not be rewritten)
     * 
     * Phase 19: Analytics proxy routes (/ingest/*, /telemetry/*) are explicitly included
     */
    '/((?!api|_next/static|_next/image|favicon.ico|location|services).*)',
    // Explicitly match analytics proxy routes
    '/ingest/:path*',
    '/telemetry/:path*',
  ],
};

// Map of city names (from geolocation headers) to our location slugs
// This handles variations in city names from the geolocation database
const cityToSlugMap: Record<string, string> = {
  'mtubatuba': 'mtubatuba',
  'st-lucia': 'st-lucia',
  'saint-lucia': 'st-lucia',
  'hluhluwe': 'hluhluwe',
  'mkhuze': 'mkhuze',
  'pongola': 'pongola',
  'ulundi': 'ulundi',
  'nongoma': 'nongoma',
  'kosi-bay': 'kosi-bay',
  'kosibay': 'kosi-bay',
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Phase 19: Dark Analytics - First-Party Proxy for Analytics
  // Intercept analytics requests to bypass ad blockers
  // Route pattern: /ingest/* (PostHog standard) or /telemetry/*
  if (pathname.startsWith('/ingest') || pathname.startsWith('/telemetry')) {
    const url = request.nextUrl.clone();
    
    // Determine destination based on path structure
    // PostHog uses /ingest/e/ for events, /ingest/static/ for assets
    const hostname = pathname.includes('/static/') 
      ? 'us-assets.i.posthog.com' 
      : 'us.i.posthog.com';
    
    // Construct the upstream URL
    url.hostname = hostname;
    url.protocol = 'https';
    url.port = '';
    // Strip the local proxy prefix
    url.pathname = url.pathname.replace(/^\/(ingest|telemetry)/, '');
    
    // Clone and modify headers
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('host', hostname); // Essential to avoid 401 errors
    
    // Phase 19: Optional PII scrubbing - uncomment if needed
    // requestHeaders.delete('cookie'); // Prevent leaking session tokens
    
    return NextResponse.rewrite(url, {
      request: {
        headers: requestHeaders,
      },
    });
  }
  
  // Phase 6: Only intercept the root homepage for personalization
  // We do not want to rewrite internal pages or deep links unexpectedly
  if (pathname === '/') {
    
    // Phase 6: Geolocation Extraction
    // In Dev: these headers are missing. We'll mock them below.
    // In Prod: Vercel injects these trusted headers.
    let city = request.headers.get('x-vercel-ip-city');
    const country = request.headers.get('x-vercel-ip-country');
    
    // Phase 6: Development Mocking Strategy
    // For local development, mock a city if headers are not available
    if (process.env.NODE_ENV === 'development' && !city) {
      // Allow override via environment variable for testing
      city = process.env.MOCK_CITY || 'Mtubatuba';
      console.log(`[Middleware] Development mode: Mocking city to "${city}"`);
    }
    
    // Phase 6: Logic Gate - Do we have enough info to personalize?
    if (city && country) {
      // Phase 6: Input Sanitization (Security)
      // Remove any characters that aren't letters, numbers, or hyphens
      // Convert to lowercase for consistent routing
      const safeCity = city.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-');
      
      // Phase 6: Map city name to our location slug
      // First check our direct mapping, then try to find by slug match
      let locationSlug = cityToSlugMap[safeCity];
      
      if (!locationSlug) {
        // Try to find location by slug matching
        const allSlugs = getAllLocationSlugs();
        const foundSlug = allSlugs.find(slug => 
          slug === safeCity || 
          slug.replace(/-/g, '') === safeCity.replace(/-/g, '')
        );
        if (foundSlug) {
          locationSlug = foundSlug;
        }
      }
      
      // Phase 6: Only rewrite if we have a valid location
      if (locationSlug) {
        // Verify the location exists in our data
        const location = getLocationBySlug(locationSlug);
        
        if (location) {
          // Phase 6: Rewrite Construction
          // We rewrite the homepage (/) to the location-specific page
          // The user sees 'yoursite.com', but Next.js renders '/location/[city]'
          const rewriteUrl = new URL(`/location/${locationSlug}`, request.url);
          
          // Phase 6: Header Forwarding
          // Pass the detected city to the page component via headers for potential use
          const response = NextResponse.rewrite(rewriteUrl);
          response.headers.set('x-current-city', city);
          response.headers.set('x-location-slug', locationSlug);
          
          return response;
        }
      }
      
      // If we couldn't map the city, log it for debugging but don't rewrite
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Middleware] City "${city}" (sanitized: "${safeCity}") not found in location map`);
      }
    }
  }

  // Phase 6: Fallback - If no city detected, or not homepage, serve normally
  return NextResponse.next();
}


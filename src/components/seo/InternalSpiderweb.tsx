// Phase 4: Internal Spiderweb Component
// Creates a dense mesh of internal links for programmatic SEO
// Implements route-based proximity, topical affinity, and hierarchical hub linking
// Phase 13: Enhanced with route-based linking (N2 Highway, R618, etc.)

import Link from 'next/link';
import { MapPin, Wrench, Building2 } from 'lucide-react';
import { serviceData } from '@/lib/service-data';
import { locations, LocationData, getLocationBySlug } from '@/lib/location-data';

interface InternalSpiderwebProps {
  currentServiceSlug: string;
  currentLocationSlug?: string; // Optional for future location-specific pages
  maxLinks?: number;
}

interface RelatedLink {
  slug: string;
  title: string;
  href: string;
  type: 'route-based' | 'topical' | 'hierarchical';
}

/**
 * Find locations connected by routes (N2, R618, R66, R22)
 * Phase 13: Route-based linking instead of random geospatial
 * Logic: If on St Lucia, link to Mtubatuba (nearest hub via R618) and Hluhluwe (next tourist stop on N2)
 */
function findRouteConnectedLocations(currentLocationSlug: string): LocationData[] {
  const currentLocation = getLocationBySlug(currentLocationSlug);
  if (!currentLocation?.localContext?.routeReference) {
    return [];
  }

  const currentRoutes = currentLocation.localContext.routeReference.split('&').map(r => r.trim());
  const currentConnectingRoutes = currentLocation.localContext.connectingRoutes || [];
  const allCurrentRoutes = [...currentRoutes, ...currentConnectingRoutes];

  const connectedLocations: LocationData[] = [];

  // Find locations that share routes
  locations.forEach((loc) => {
    if (loc.slug === currentLocationSlug) return;

    const locRoutes = loc.localContext?.routeReference?.split('&').map(r => r.trim()) || [];
    const locConnectingRoutes = loc.localContext?.connectingRoutes || [];
    const allLocRoutes = [...locRoutes, ...locConnectingRoutes];

    // Check if locations share any routes
    const hasSharedRoute = allCurrentRoutes.some(route => 
      allLocRoutes.some(locRoute => locRoute.includes(route) || route.includes(locRoute))
    );

    if (hasSharedRoute) {
      connectedLocations.push(loc);
    }
  });

  // Always prioritize primary location (Mtubatuba) as nearest hub
  const primaryLocation = locations.find(loc => loc.tier === 'primary');
  if (primaryLocation && primaryLocation.slug !== currentLocationSlug) {
    // Remove primary if already added, then add to front
    const withoutPrimary = connectedLocations.filter(loc => loc.slug !== primaryLocation.slug);
    connectedLocations.length = 0;
    connectedLocations.push(primaryLocation, ...withoutPrimary);
  }

  return connectedLocations.slice(0, 8); // Limit to top 8 route-connected locations
}

export function InternalSpiderweb({
  currentServiceSlug,
  currentLocationSlug = 'mtubatuba', // Default to primary location
  maxLinks = 25,
}: InternalSpiderwebProps) {
  const currentService = serviceData[currentServiceSlug];
  if (!currentService) return null;

  const links: RelatedLink[] = [];

  // Vector 1: Route-Based Proximity (Locations Connected by Routes)
  // Phase 13: Link by route proximity (R618 connects St Lucia to Mtubatuba, N2 connects tourist stops)
  const routeConnectedLocations = findRouteConnectedLocations(currentLocationSlug);
  routeConnectedLocations.forEach((location) => {
    // Link to location-specific pages for better local SEO
    const href = `/services/${currentServiceSlug}/${location.slug}`;
    links.push({
      slug: location.slug,
      title: `${currentService.title} in ${location.name}`,
      href: href,
      type: 'route-based',
    });
  });

  // Vector 2: Service Affinity (Related Services)
  // Find services in the same category or related categories
  const relatedServices = Object.values(serviceData)
    .filter((service) => service.id !== currentServiceSlug)
    .sort((a, b) => {
      // Prioritize same category
      if (a.category === currentService.category && b.category !== currentService.category) return -1;
      if (b.category === currentService.category && a.category !== currentService.category) return 1;
      return 0;
    })
    .slice(0, 10);

  relatedServices.forEach((service) => {
    // Phase 5: If on a location-specific page, link to location-specific versions of related services
    const href = currentLocationSlug 
      ? `/services/${service.id}/${currentLocationSlug}`
      : `/services/${service.id}`;
    links.push({
      slug: service.id,
      title: service.title,
      href: href,
      type: 'topical',
    });
  });

  // Vector 3: Hierarchical Hubs
  // Link to category/region pages (if they exist) or main services page
  if (currentService.category === 'repair') {
    links.push({
      slug: 'panelbeating-services',
      title: 'Panelbeating Services',
      href: '/services',
      type: 'hierarchical',
    });
  }
  if (currentService.category === 'towing') {
    links.push({
      slug: 'towing-services',
      title: 'Towing Services',
      href: '/towing',
      type: 'hierarchical',
    });
  }

  // Limit total links to prevent DOM bloat
  const limitedLinks = links.slice(0, maxLinks);

  // Group links by type for better organization
  const routeBasedLinks = limitedLinks.filter((link) => link.type === 'route-based');
  const topicalLinks = limitedLinks.filter((link) => link.type === 'topical');
  const hierarchicalLinks = limitedLinks.filter((link) => link.type === 'hierarchical');

  return (
    <section className="w-full py-16 bg-muted/30 border-y border-border">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Related Services & Locations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Route-Based Cluster: Locations Connected by Routes */}
            {/* Phase 13: Links by route proximity (N2 Highway, R618, etc.) instead of random geospatial */}
            {routeBasedLinks.length > 0 && (
              <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-lg text-foreground">
                    {currentService.title} Along Northern Route
                  </h3>
                </div>
                <ul className="space-y-2">
                  {routeBasedLinks.slice(0, 8).map((link) => (
                    <li key={link.slug}>
                      <Link
                        href={link.href}
                        prefetch={false} // Critical: Prevents prefetch spam for crawler links
                        className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Topical Cluster: Related Services */}
            {topicalLinks.length > 0 && (
              <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <Wrench className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-lg text-foreground">
                    Other Services We Offer
                  </h3>
                </div>
                <ul className="space-y-2">
                  {topicalLinks.slice(0, 8).map((link) => (
                    <li key={link.slug}>
                      <Link
                        href={link.href}
                        prefetch={false}
                        className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Hierarchical Hubs */}
            {hierarchicalLinks.length > 0 && (
              <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <Building2 className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-lg text-foreground">
                    Service Categories
                  </h3>
                </div>
                <ul className="space-y-2">
                  {hierarchicalLinks.map((link) => (
                    <li key={link.slug}>
                      <Link
                        href={link.href}
                        prefetch={false}
                        className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


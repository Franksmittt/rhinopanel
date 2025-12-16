import { MetadataRoute } from 'next';
import { serviceData } from '@/lib/service-data';
import { getLocationsByTier, getAllLocationSlugs } from '@/lib/location-data';

// Phase 2: Enhanced Sitemap with proper metadata and scalability
// For future expansion: This structure supports index splitting via generateSitemaps if needed
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rhinopanelbeaters.co.za';
  const now = new Date();

  // 1. Define Static Routes with proper priorities
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/towing`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/quote`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/process`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/accreditations`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/emergency-towing`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/panelbeating-st-lucia`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/panelbeating-hluhluwe`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/accident-recovery-n2`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // 2. Generate Dynamic Service Routes from service-data.ts
  // High priority for service pages as they are SEO silos
  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(serviceData).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly', // Service pages may update more frequently
    priority: 0.9,
  }));

  // Phase 5: Generate Location-Specific Service Routes (Local Nuke strategy)
  // Only include top-tier locations in sitemap to keep it manageable
  // Secondary/tertiary locations will be generated on-demand via ISR
  const topLocations = getLocationsByTier('primary'); // Only primary locations for sitemap
  const locationServiceRoutes: MetadataRoute.Sitemap = [];
  
  Object.keys(serviceData).forEach((serviceSlug) => {
    topLocations.forEach((location) => {
      locationServiceRoutes.push({
        url: `${baseUrl}/services/${serviceSlug}/${location.slug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.85, // Slightly lower than general service pages, but still high
      });
    });
  });

  // Phase 6: Generate Location Landing Page Routes (Edge Dictatorship strategy)
  // These are the explicit location pages that middleware rewrites to
  // Important for SEO: Googlebot needs to discover these via sitemap/internal links
  const allLocationSlugs = getAllLocationSlugs();
  const locationLandingRoutes: MetadataRoute.Sitemap = allLocationSlugs.map((locationSlug) => ({
    url: `${baseUrl}/location/${locationSlug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9, // High priority - these are important for local SEO
  }));

  // 3. Combine and Return
  // Phase 5 & 6: Total URLs = static + service + location-service + location-landing combinations
  // For future: If this exceeds 50,000 URLs, implement generateSitemaps for index splitting
  return [...staticRoutes, ...serviceRoutes, ...locationServiceRoutes, ...locationLandingRoutes];
}
import { MetadataRoute } from 'next';
import { serviceData } from '@/lib/service-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rhinopanelbeaters.co.za';

  // 1. Define Static Routes
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/quote',
    '/services',
    '/process',
    '/accreditations',
    '/gallery',
    '/emergency-towing',
    '/panelbeating-st-lucia',
    '/panelbeating-hluhluwe',
    '/accident-recovery-n2',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Generate Dynamic Service Routes from service-data.ts
  const serviceRoutes = Object.keys(serviceData).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9, // High priority for SEO silos
  }));

  // 3. Combine and Return
  return [...staticRoutes, ...serviceRoutes];
}
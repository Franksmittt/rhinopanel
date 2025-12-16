// Phase 3: Service Schema Helpers for Programmatic SEO
// Provides utilities for generating type-safe structured data for services

import type { WithContext, LocalBusiness, AutomotiveBusiness } from 'schema-dts';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rhinopanelbeaters.co.za';

/**
 * Base LocalBusiness schema for Rhino Panelbeaters
 * Used across multiple pages for consistent entity recognition
 */
export const baseLocalBusinessSchema: WithContext<LocalBusiness> = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Rhino Panelbeaters & Towing',
  image: `${baseUrl}/images/logo.png`,
  url: baseUrl,
  telephone: '+27355500211',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jacaranda Ave',
    addressLocality: 'Mtubatuba',
    postalCode: '3935',
    addressRegion: 'KZN',
    addressCountry: 'ZA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -28.4081,
    longitude: 32.1814,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:30',
      closes: '17:00',
    },
  ],
  priceRange: '$$',
  areaServed: [
    {
      '@type': 'City',
      name: 'Mtubatuba',
    },
    {
      '@type': 'City',
      name: 'St Lucia',
    },
    {
      '@type': 'City',
      name: 'Hluhluwe',
    },
    {
      '@type': 'City',
      name: 'Mkhuze',
    },
    {
      '@type': 'City',
      name: 'Pongola',
    },
    {
      '@type': 'City',
      name: 'Ulundi',
    },
    {
      '@type': 'City',
      name: 'Nongoma',
    },
    {
      '@type': 'City',
      name: 'Kosi Bay',
    },
  ],
};

/**
 * AutomotiveBusiness schema - more specific than LocalBusiness
 * Better semantic clarity for search engines
 */
export const automotiveBusinessSchema = {
  ...baseLocalBusinessSchema,
  '@type': 'AutomotiveBusiness' as const,
  description: 'Expert collision repair, spray painting, and 24/7 emergency towing services in Mtubatuba and the Northern Route region.',
  // Note: 'service' property is valid in Schema.org but omitted here due to schema-dts type limitations
  // Services are better defined via individual Service/Product schemas on service pages
} as WithContext<AutomotiveBusiness>;


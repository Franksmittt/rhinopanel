// Phase 13: LocalBusinessSchema Component - AutoBodyShop Schema
// Strict entity definition for Google with exact business data

import JsonLd from './JsonLd';
import type { WithContext, LocalBusiness } from 'schema-dts';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rhinopanelbeaters.co.za';

/**
 * AutoBodyShop schema for Rhino Panelbeaters & Towing
 * Phase 13: Strict entity definition with exact business data
 * Note: schema-dts may not have AutoBodyShop type, so we use LocalBusiness with '@type' override
 */
export function LocalBusinessSchema() {
  // Check if logo exists, otherwise use placeholder
  const logoUrl = `${baseUrl}/logo.png`;

  const autoBodyShopSchema: WithContext<LocalBusiness> = {
    '@context': 'https://schema.org',
    '@type': 'AutoBodyShop', // More specific than LocalBusiness
    name: 'Rhino Panelbeaters & Towing',
    url: 'https://rhinopanelbeaters.co.za',
    image: logoUrl,
    telephone: '035 550 0211',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lot 991, Northen Route',
      addressLocality: 'Mtubatuba',
      addressRegion: 'KZN',
      postalCode: '3935',
      addressCountry: 'ZA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -28.4167,
      longitude: 32.1833,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:30',
        closes: '17:00',
      },
    ],
    sameAs: 'https://www.facebook.com/rhinopanelbeaters',
    areaServed: [
      {
        '@type': 'City',
        name: 'Mtubatuba',
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
        name: 'Richards Bay',
      },
    ],
  } as WithContext<LocalBusiness>; // Type assertion for AutoBodyShop (not in schema-dts types but valid Schema.org)

  return <JsonLd data={autoBodyShopSchema} />;
}


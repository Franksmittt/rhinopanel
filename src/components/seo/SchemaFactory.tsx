// Phase 13: Schema Factory for "Entity Stronghold" strategy
// Generates enhanced schema markup with sameAs, knowsAbout, and hasOfferCatalog
// Solves "Thin Content" violation by injecting real business entity relationships

import type { WithContext, LocalBusiness, Service as ServiceSchema } from 'schema-dts';
import { getLocationBySlug } from '@/lib/location-data';
import { baseLocalBusinessSchema } from '@/lib/service-schema';

/**
 * Wikipedia URL mappings for location entity recognition
 * Phase 13: Entity Stronghold - sameAs for location entities
 */
const locationSameAsMap: Record<string, string> = {
  'mtubatuba': 'https://en.wikipedia.org/wiki/Mtubatuba',
  'st-lucia': 'https://en.wikipedia.org/wiki/St_Lucia,_KwaZulu-Natal',
  'hluhluwe': 'https://en.wikipedia.org/wiki/Hluhluwe',
  'mkhuze': 'https://en.wikipedia.org/wiki/Mkhuze',
  'pongola': 'https://en.wikipedia.org/wiki/Pongola,_KwaZulu-Natal',
  'ulundi': 'https://en.wikipedia.org/wiki/Ulundi',
  'nongoma': 'https://en.wikipedia.org/wiki/Nongoma',
  'kosi-bay': 'https://en.wikipedia.org/wiki/Kosi_Bay',
};

/**
 * Generate enhanced LocalBusiness schema with Entity Stronghold features
 * Phase 13: Includes sameAs, knowsAbout, and hasOfferCatalog
 */
export function generateLocalSchema(locationSlug?: string): WithContext<LocalBusiness> {
  const location = locationSlug ? getLocationBySlug(locationSlug) : null;
  const sameAs = location && locationSameAsMap[location.slug] 
    ? [locationSameAsMap[location.slug]] 
    : undefined;

  // Phase 13: Entity Stronghold - Build schema with enhanced properties
  const schemaBase = baseLocalBusinessSchema as unknown as Record<string, unknown>;
  // @ts-expect-error - knowsAbout and hasOfferCatalog are valid Schema.org but not in schema-dts types
  const schema = {
    ...schemaBase,
    // Phase 13: Entity Stronghold - sameAs for location recognition
    ...(sameAs && { sameAs }),
    // Phase 13: knowsAbout for expertise signals (TypeScript may not recognize these properties in schema-dts, but they are valid Schema.org)
    knowsAbout: [
      'Safari Vehicle Modification',
      'Chassis Straightening',
      'Waterborne Paint Systems',
      'SABS Approved Glass',
      'OEM-Approved Welding',
      'Commercial Vehicle Repair',
      '4x4 Repair',
      'Agricultural Fleet Maintenance',
      'Insurance Claims Support',
    ],
    // Phase 13: hasOfferCatalog for service entitization
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Rhino Panelbeaters & Towing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Collision Repair',
            description: 'Expert collision repair with chassis straightening technology and OEM-approved welding techniques.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Spray Painting',
            description: 'Professional spray painting with waterborne paint systems and 3-year warranty guarantee.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Safari Vehicle Modification',
            description: 'Specialized repairs for safari viewers and 4x4s including bullbar fitment, winches, and snorkels.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Chassis Straightening',
            description: 'Precision structural alignment using advanced laser measuring systems and hydraulic rigs.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Insurance Claims Support',
            description: 'Direct claims authorization with MiWay, Old Mutual, and Agruma (c/o King Price).',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '24/7 Emergency Towing',
            description: 'Round-the-clock accident and breakdown recovery covering the Northern Route.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Vehicle Repair',
            description: 'Heavy vehicle and fleet repair services for N2 truck traffic and agricultural vehicles.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SABS Approved Glass',
            description: 'Windshield and window replacement with SABS-approved automotive glass and leak-free sealant.',
          },
        },
      ],
    },
  } as WithContext<LocalBusiness>; // Type assertion for knowsAbout and hasOfferCatalog which may not be in schema-dts types but are valid Schema.org

  // Phase 13: Location-specific areaServed with sameAs
  if (location) {
    const areaServedEntry = {
      '@type': 'City' as const,
      name: location.name,
      ...(locationSameAsMap[location.slug] && {
        sameAs: locationSameAsMap[location.slug],
      }),
    };
    (schema as unknown as Record<string, unknown>).areaServed = [areaServedEntry];
  }

  return schema as unknown as WithContext<LocalBusiness>;
}

/**
 * Generate enhanced Service schema with location-specific context
 * Phase 13: Includes location entity relationships and service expertise
 */
export function generateServiceSchema(
  serviceName: string,
  serviceDescription: string,
  locationSlug?: string
): WithContext<ServiceSchema> {
  const location = locationSlug ? getLocationBySlug(locationSlug) : null;

  const schema: WithContext<ServiceSchema> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: location ? `${serviceName} in ${location.name}` : serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Rhino Panelbeaters & Towing',
      telephone: '+27355500211',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jacaranda Ave',
        addressLocality: 'Mtubatuba',
        postalCode: '3935',
        addressRegion: 'KZN',
        addressCountry: 'ZA',
      },
      // Phase 13: Entity Stronghold - location entity sameAs
      ...(location && locationSameAsMap[location.slug] && {
        areaServed: [{
          '@type': 'City' as const,
          name: location.name,
          sameAs: locationSameAsMap[location.slug],
        }],
      }),
    },
    serviceType: serviceName,
    // Phase 13: knowsAbout for service expertise
    // @ts-expect-error - knowsAbout is valid Schema.org but not in schema-dts types
    knowsAbout: [
      'Chassis Straightening',
      'Waterborne Paint Systems',
      'SABS Approved Glass',
      'OEM-Approved Welding',
      'Safari Vehicle Modification',
    ],
  };

  // Phase 13: Location-specific areaServed with entity recognition
  if (location) {
    const areaServedEntry = {
      '@type': 'City' as const,
      name: location.name,
      ...(locationSameAsMap[location.slug] && {
        sameAs: locationSameAsMap[location.slug],
      }),
    };
    schema.areaServed = areaServedEntry;
  }

  return schema;
}


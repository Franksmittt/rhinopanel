// Phase 3: Enhanced Structured Data Component
// Uses type-safe schema helpers for better semantic control

import { baseLocalBusinessSchema, automotiveBusinessSchema } from '@/lib/service-schema';
import JsonLd from './JsonLd';
import type { WithContext, WebSite } from 'schema-dts';

interface StructuredDataProps {
  type: 'LocalBusiness' | 'AutomotiveBusiness' | 'WebSite';
}

/**
 * Legacy StructuredData component for backward compatibility
 * Phase 3: Now uses type-safe JsonLd component internally
 */
export function StructuredData({ type }: StructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rhinopanelbeaters.co.za';

  switch (type) {
    case 'LocalBusiness':
      return <JsonLd data={baseLocalBusinessSchema} />;
    
    case 'AutomotiveBusiness':
      return <JsonLd data={automotiveBusinessSchema} />;
    
    case 'WebSite': {
      // Type assertion needed for query-input property (valid Schema.org but not in schema-dts types)
      const websiteSchema = {
        '@context': 'https://schema.org' as const,
        '@type': 'WebSite' as const,
        name: 'Rhino Panelbeaters & Towing',
        url: baseUrl,
        potentialAction: {
          '@type': 'SearchAction' as const,
          target: `${baseUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      } as WithContext<WebSite>;
      return <JsonLd data={websiteSchema} />;
    }
    
    default:
      return <JsonLd data={baseLocalBusinessSchema} />;
  }
}

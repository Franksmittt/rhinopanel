// Structured Data (JSON-LD) Component for SEO
// Implements LocalBusiness and AutomotiveBusiness schema as per GSC best practices

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SchemaData = Record<string, any>;

interface StructuredDataProps {
  type: 'LocalBusiness' | 'AutomotiveBusiness' | 'Service' | 'WebSite';
  data?: SchemaData;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rhinopanelbeaters.co.za';
  
  const baseBusinessData = {
    '@context': 'https://schema.org',
    '@type': type,
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
    areaServed: {
      '@type': 'City',
      name: ['Mtubatuba', 'St Lucia', 'Hluhluwe', 'Richards Bay', 'Empangeni'],
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let schemaData: Record<string, any>;

  switch (type) {
    case 'LocalBusiness':
      schemaData = {
        ...baseBusinessData,
        description: 'Professional panelbeaters and towing services in Mtubatuba. Insurance approved repairs with 3-year warranty guarantee.',
      };
      break;
    
    case 'AutomotiveBusiness':
      schemaData = {
        ...baseBusinessData,
        '@type': 'AutomotiveBusiness',
        description: 'Expert collision repair, spray painting, and 24/7 emergency towing services in Mtubatuba and the Zululand region.',
        service: [
          'Collision Repair',
          'Spray Painting',
          'Dent Removal',
          'Chassis Straightening',
          'Emergency Towing',
        ],
      };
      break;
    
    case 'Service':
      schemaData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        ...data,
      };
      break;
    
    case 'WebSite':
      schemaData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Rhino Panelbeaters & Towing',
        url: baseUrl,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${baseUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      };
      break;
    
    default:
      schemaData = baseBusinessData;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData).replace(/</g, '\\u003c'),
      }}
    />
  );
}

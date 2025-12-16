// Phase 5: Enhanced location data structure for "Local Nuke" strategy
// This enables hyper-granular, location-specific programmatic SEO pages

export interface LocationData {
  slug: string;
  name: string;
  displayName: string;
  region: string;
  tier: 'primary' | 'secondary' | 'tertiary';
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  description?: string;
  keywords: string[];
  // Phase 5: Local context for "God Mode" content generation
  localContext?: {
    landmarks?: string[]; // Local landmarks, intersections, notable places
    notableFeatures?: string[]; // Architectural styles, geographical features
    commonServices?: string[]; // Services frequently needed in this area
    routeReference?: string; // Highway/road references (e.g., "N2 Highway", "R618")
  };
}

// Service areas - Northern Route coverage
export const locations: LocationData[] = [
  {
    slug: 'mtubatuba',
    name: 'Mtubatuba',
    displayName: 'Mtubatuba',
    region: 'KZN',
    tier: 'primary',
    coordinates: {
      latitude: -28.4081,
      longitude: 32.1814,
    },
    description: 'Professional panelbeating and towing services in Mtubatuba. Located in the heart of the Northern Route.',
    keywords: ['panelbeater Mtubatuba', 'towing Mtubatuba', 'car repair Mtubatuba', 'collision repair Mtubatuba'],
    localContext: {
      landmarks: ['Jacaranda Ave', 'N2 Highway', 'Mtubatuba Central'],
      notableFeatures: ['Northern Route hub', 'Commercial vehicle traffic', 'Tourism gateway'],
      commonServices: ['Commercial vehicle repair', 'Fleet maintenance', 'Emergency towing', 'Accident recovery'],
      routeReference: 'N2 Highway & R618',
    },
  },
  {
    slug: 'st-lucia',
    name: 'St Lucia',
    displayName: 'St Lucia',
    region: 'KZN',
    tier: 'secondary',
    coordinates: {
      latitude: -28.3778,
      longitude: 32.4108,
    },
    description: 'Expert panelbeating services for St Lucia residents. Just 25 minutes away on the R618.',
    keywords: ['panelbeater St Lucia', 'towing St Lucia', 'car repair St Lucia KZN', 'R618 towing'],
    localContext: {
      landmarks: ['iSimangaliso Wetland Park', 'St Lucia Estuary', 'R618'],
      notableFeatures: ['Tourist destination', '4x4 safari vehicles', 'Coastal environment'],
      commonServices: ['4x4 repair', 'Safari vehicle maintenance', 'Rust proofing', 'Tourism vehicle repairs'],
      routeReference: 'R618',
    },
  },
  {
    slug: 'hluhluwe',
    name: 'Hluhluwe',
    displayName: 'Hluhluwe',
    region: 'KZN',
    tier: 'secondary',
    coordinates: {
      latitude: -28.025,
      longitude: 32.261,
    },
    description: 'Specialized 4x4 and safari vehicle repairs for Hluhluwe and game lodges.',
    keywords: ['panelbeater Hluhluwe', 'towing Hluhluwe', '4x4 repair Hluhluwe', 'safari vehicle repair'],
    localContext: {
      landmarks: ['Hluhluwe-iMfolozi Park', 'N2 Highway', 'Game lodge area'],
      notableFeatures: ['Game reserve access', 'Safari vehicle traffic', '4x4 terrain'],
      commonServices: ['4x4 repair', 'Bullbar fitment', 'Safari viewer modifications', 'Off-road vehicle maintenance'],
      routeReference: 'N2 Highway',
    },
  },
  {
    slug: 'mkhuze',
    name: 'Mkhuze',
    displayName: 'Mkhuze',
    region: 'KZN',
    tier: 'secondary',
    coordinates: {
      latitude: -27.6333,
      longitude: 32.05,
    },
    description: 'Extending our expert services to Mkhuze, a key area on the Northern Route.',
    keywords: ['panelbeater Mkhuze', 'towing Mkhuze', 'car repair Mkhuze'],
    localContext: {
      landmarks: ['Mkhuze Game Reserve', 'N2 Highway'],
      notableFeatures: ['Game reserve proximity', 'Rural area', 'Tourism traffic'],
      commonServices: ['4x4 repair', 'Emergency towing', 'Vehicle recovery'],
      routeReference: 'N2 Highway',
    },
  },
  {
    slug: 'pongola',
    name: 'Pongola',
    displayName: 'Pongola',
    region: 'KZN',
    tier: 'secondary',
    coordinates: {
      latitude: -27.3833,
      longitude: 31.6167,
    },
    description: 'Comprehensive panelbeating and towing for Pongola and the surrounding agricultural region.',
    keywords: ['panelbeater Pongola', 'towing Pongola', 'car repair Pongola'],
    localContext: {
      landmarks: ['Pongola Dam', 'N2 Highway'],
      notableFeatures: ['Agricultural area', 'Rural community'],
      commonServices: ['Commercial vehicle repair', 'Farm vehicle maintenance', 'Towing services'],
      routeReference: 'N2 Highway',
    },
  },
  {
    slug: 'ulundi',
    name: 'Ulundi',
    displayName: 'Ulundi',
    region: 'KZN',
    tier: 'secondary',
    coordinates: {
      latitude: -28.324,
      longitude: 31.936,
    },
    description: 'Reliable auto repair and towing services for Ulundi and its communities.',
    keywords: ['panelbeater Ulundi', 'towing Ulundi', 'car repair Ulundi'],
    localContext: {
      landmarks: ['Ulundi Airport', 'R66'],
      notableFeatures: ['Town center', 'Community hub'],
      commonServices: ['General repairs', 'Towing', 'Accident recovery'],
      routeReference: 'R66',
    },
  },
  {
    slug: 'nongoma',
    name: 'Nongoma',
    displayName: 'Nongoma',
    region: 'KZN',
    tier: 'secondary',
    coordinates: {
      latitude: -27.899,
      longitude: 31.659,
    },
    description: 'Quality panelbeating and 24/7 towing available in Nongoma.',
    keywords: ['panelbeater Nongoma', 'towing Nongoma', 'car repair Nongoma'],
    localContext: {
      landmarks: ['R66'],
      notableFeatures: ['Rural town', 'Community services'],
      commonServices: ['General repairs', 'Towing', 'Vehicle recovery'],
      routeReference: 'R66',
    },
  },
  {
    slug: 'kosi-bay',
    name: 'Kosi Bay',
    displayName: 'Kosi Bay',
    region: 'KZN',
    tier: 'secondary',
    coordinates: {
      latitude: -26.8833,
      longitude: 32.8167,
    },
    description: 'Reaching up to Kosi Bay with our professional towing and panelbeating solutions.',
    keywords: ['panelbeater Kosi Bay', 'towing Kosi Bay', 'car repair Kosi Bay'],
    localContext: {
      landmarks: ['Kosi Bay Mouth', 'Coastal access', 'R22'],
      notableFeatures: ['Coastal destination', 'Tourism area', 'Remote location'],
      commonServices: ['4x4 repair', 'Emergency towing', 'Tourism vehicle maintenance'],
      routeReference: 'R22',
    },
  },
];

// Helper functions for location data access
export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find(loc => loc.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map(loc => loc.slug);
}

export function getLocationsByTier(tier: LocationData['tier']): LocationData[] {
  return locations.filter(loc => loc.tier === tier);
}

// Phase 6: Generate static params for location pages (for ISR)
export function getAllLocationSlugsForSSG(): Array<{ city: string }> {
  return locations.map(loc => ({ city: loc.slug }));
}


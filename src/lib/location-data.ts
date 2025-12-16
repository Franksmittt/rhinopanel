// Location data structure for programmatic SEO foundation
// This enables the "Hydra" strategy - generating location-specific pages at scale

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
  },
  {
    slug: 'st-lucia',
    name: 'St Lucia',
    displayName: 'St Lucia',
    region: 'KZN',
    tier: 'secondary',
    description: 'Expert panelbeating services for St Lucia residents. Just 25 minutes away on the R618.',
    keywords: ['panelbeater St Lucia', 'towing St Lucia', 'car repair St Lucia KZN', 'R618 towing'],
  },
  {
    slug: 'hluhluwe',
    name: 'Hluhluwe',
    displayName: 'Hluhluwe',
    region: 'KZN',
    tier: 'secondary',
    description: 'Specialized 4x4 and safari vehicle repairs for Hluhluwe and game lodges.',
    keywords: ['panelbeater Hluhluwe', 'towing Hluhluwe', '4x4 repair Hluhluwe', 'safari vehicle repair'],
  },
  {
    slug: 'mkhuze',
    name: 'Mkhuze',
    displayName: 'Mkhuze',
    region: 'KZN',
    tier: 'secondary',
    keywords: ['panelbeater Mkhuze', 'towing Mkhuze', 'car repair Mkhuze'],
  },
  {
    slug: 'pongola',
    name: 'Pongola',
    displayName: 'Pongola',
    region: 'KZN',
    tier: 'secondary',
    keywords: ['panelbeater Pongola', 'towing Pongola', 'car repair Pongola'],
  },
  {
    slug: 'ulundi',
    name: 'Ulundi',
    displayName: 'Ulundi',
    region: 'KZN',
    tier: 'secondary',
    keywords: ['panelbeater Ulundi', 'towing Ulundi', 'car repair Ulundi'],
  },
  {
    slug: 'nongoma',
    name: 'Nongoma',
    displayName: 'Nongoma',
    region: 'KZN',
    tier: 'secondary',
    keywords: ['panelbeater Nongoma', 'towing Nongoma', 'car repair Nongoma'],
  },
  {
    slug: 'kosi-bay',
    name: 'Kosi Bay',
    displayName: 'Kosi Bay',
    region: 'KZN',
    tier: 'secondary',
    keywords: ['panelbeater Kosi Bay', 'towing Kosi Bay', 'car repair Kosi Bay'],
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


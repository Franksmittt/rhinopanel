// Phase 5: Enhanced location data structure for "Local Nuke" strategy
// This enables hyper-granular, location-specific programmatic SEO pages
// Updated with real business data to solve "Thin Content" violation (Phase 13)

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
  // Phase 13: Enhanced with real business data (landmarks, hazards, vehicle types)
  localContext?: {
    landmarks?: string[]; // Local landmarks, intersections, notable places (e.g., "Riverview Sugar Mill", "N2/R618 Intersection")
    localHazards?: string[]; // Local hazards affecting vehicles (e.g., "Heavy cane truck traffic", "Coastal rust", "Roaming livestock")
    vehicleTypes?: string[]; // Common vehicle types in area (e.g., "Safari Viewers", "Sugar Cane Trucks", "4x4s", "Game Drive Vehicles")
    serviceRadius?: string; // Service radius description (e.g., "Mtubatuba & Surrounds")
    notableFeatures?: string[]; // Architectural styles, geographical features
    commonServices?: string[]; // Services frequently needed in this area
    routeReference?: string; // Highway/road references (e.g., "N2 Highway", "R618")
    connectingRoutes?: string[]; // Routes that connect to this location (for route-based linking)
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
    description: 'Professional panelbeating and towing services in Mtubatuba. Located in the heart of the Northern Route. Our main workshop serves as the primary hub for commercial vehicle traffic, fleet maintenance, and tourism gateway services.',
    keywords: ['panelbeater Mtubatuba', 'towing Mtubatuba', 'car repair Mtubatuba', 'collision repair Mtubatuba', 'chassis straightening Mtubatuba', 'waterborne paint Mtubatuba'],
    localContext: {
      landmarks: ['Riverview Sugar Mill', 'N2/R618 Intersection', 'Jacaranda Ave', 'Mtubatuba Central'],
      localHazards: ['Heavy cane truck traffic', 'Sugar cane transport vehicles', 'Commercial vehicle congestion'],
      vehicleTypes: ['Sugar Cane Trucks', 'Commercial Vehicles', 'Fleet Vehicles', 'Bakkies', 'N2 Long-distance Haulers'],
      serviceRadius: 'Mtubatuba & Surrounds',
      notableFeatures: ['Northern Route hub', 'Commercial vehicle traffic', 'Tourism gateway', 'Sugar mill access'],
      commonServices: ['Commercial vehicle repair', 'Fleet maintenance', 'Emergency towing', 'Accident recovery', 'Chassis straightening', 'SABS approved glass'],
      routeReference: 'N2 Highway & R618',
      connectingRoutes: ['N2 Highway', 'R618'],
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
    description: 'Expert panelbeating services for St Lucia residents. Just 25 minutes away on the R618. Specializing in 4x4 safari vehicles and coastal vehicle protection.',
    keywords: ['panelbeater St Lucia', 'towing St Lucia', 'car repair St Lucia KZN', 'R618 towing', 'safari vehicle repair St Lucia', 'rust proofing St Lucia'],
    localContext: {
      landmarks: ['iSimangaliso Wetland Park', 'Estuary Boardwalk', 'McKenzie Street', 'St Lucia Estuary'],
      localHazards: ['Coastal rust', 'Hippo/Wildlife collisions', 'Salt air corrosion', 'Gravel road stone chips'],
      vehicleTypes: ['Safari Viewers', '4x4s', 'Tourist Vehicles', 'Game Drive Vehicles'],
      serviceRadius: 'St Lucia & iSimangaliso Area',
      notableFeatures: ['Tourist destination', '4x4 safari vehicles', 'Coastal environment', 'Wetland park access'],
      commonServices: ['4x4 repair', 'Safari vehicle maintenance', 'Rust proofing', 'Tourism vehicle repairs', 'Wildlife collision damage', 'Chassis straightening'],
      routeReference: 'R618',
      connectingRoutes: ['R618', 'N2 Highway'], // R618 connects St Lucia to Mtubatuba, then to N2
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
    description: 'Specialized 4x4 and safari vehicle repairs for Hluhluwe and game lodges. Expert in game drive vehicle maintenance and off-road modifications.',
    keywords: ['panelbeater Hluhluwe', 'towing Hluhluwe', '4x4 repair Hluhluwe', 'safari vehicle repair', 'game drive vehicle repair', 'bullbar fitment Hluhluwe'],
    localContext: {
      landmarks: ['Hluhluwe-iMfolozi Park Gate', 'Memorial Gate', 'N2 Highway', 'Game lodge area'],
      localHazards: ['Wildlife collisions', 'Gravel road damage', '4x4 terrain wear', 'Game reserve access roads'],
      vehicleTypes: ['Game Drive Vehicles', 'Tourist 4x4s', 'Safari Viewers', 'Off-road vehicles'],
      serviceRadius: 'Hluhluwe & Game Reserve Area',
      notableFeatures: ['Game reserve access', 'Safari vehicle traffic', '4x4 terrain', 'Game lodge proximity'],
      commonServices: ['4x4 repair', 'Bullbar fitment', 'Safari viewer modifications', 'Off-road vehicle maintenance', 'Chassis repair', 'Accessory fitment'],
      routeReference: 'N2 Highway',
      connectingRoutes: ['N2 Highway'], // Next tourist stop on N2 from Mtubatuba
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
    description: 'Extending our expert services to Mkhuze, a key area on the Northern Route. Agricultural fleet repairs and long-distance N2 haulers.',
    keywords: ['panelbeater Mkhuze', 'towing Mkhuze', 'car repair Mkhuze', 'agricultural fleet repair', 'N2 towing Mkhuze'],
    localContext: {
      landmarks: ['Mkhuze Game Reserve', 'N2 Highway Corridor'],
      localHazards: ['Long-distance hauling damage', 'Rural road conditions', 'Agricultural vehicle wear'],
      vehicleTypes: ['Agricultural Fleet Vehicles', 'Long-distance N2 Haulers', '4x4s', 'Farm Vehicles'],
      serviceRadius: 'Mkhuze & Surrounding Agricultural Area',
      notableFeatures: ['Game reserve proximity', 'Rural area', 'Tourism traffic', 'Agricultural region'],
      commonServices: ['Agricultural fleet repairs', 'Long-distance N2 haulers', '4x4 repair', 'Emergency towing', 'Vehicle recovery', 'Chassis straightening'],
      routeReference: 'N2 Highway',
      connectingRoutes: ['N2 Highway'],
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
    description: 'Comprehensive panelbeating and towing for Pongola and the surrounding agricultural region. Specializing in agricultural fleet repairs and farm vehicle maintenance.',
    keywords: ['panelbeater Pongola', 'towing Pongola', 'car repair Pongola', 'agricultural fleet repair Pongola', 'farm vehicle repair'],
    localContext: {
      landmarks: ['Pongola Dam', 'N2 Highway Corridor'],
      localHazards: ['Roaming livestock', 'Agricultural vehicle wear', 'Rural road conditions'],
      vehicleTypes: ['Agricultural Fleet Vehicles', 'Farm Vehicles', 'Commercial Trucks', 'N2 Long-distance Haulers'],
      serviceRadius: 'Pongola & Agricultural Surrounds',
      notableFeatures: ['Agricultural area', 'Rural community', 'Pongola Dam access'],
      commonServices: ['Agricultural fleet repairs', 'Farm vehicle maintenance', 'Commercial vehicle repair', 'Towing services', 'Chassis straightening'],
      routeReference: 'N2 Highway',
      connectingRoutes: ['N2 Highway'],
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
    description: 'Reliable auto repair and towing services for Ulundi and its communities. Comprehensive panelbeating for the Northern Route.',
    keywords: ['panelbeater Ulundi', 'towing Ulundi', 'car repair Ulundi', 'collision repair Ulundi'],
    localContext: {
      landmarks: ['Ulundi Airport', 'R66', 'N2 Highway'],
      localHazards: ['Rural road conditions', 'Regional traffic'],
      vehicleTypes: ['Passenger Vehicles', 'Commercial Vehicles', '4x4s'],
      serviceRadius: 'Ulundi & Regional Communities',
      notableFeatures: ['Town center', 'Community hub', 'Northern Route access'],
      commonServices: ['General repairs', 'Towing', 'Accident recovery', 'Collision repair', 'Chassis straightening'],
      routeReference: 'R66',
      connectingRoutes: ['R66', 'N2 Highway'],
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
    description: 'Quality panelbeating and 24/7 towing available in Nongoma. Extended Northern Route coverage for local communities.',
    keywords: ['panelbeater Nongoma', 'towing Nongoma', 'car repair Nongoma', 'emergency towing Nongoma'],
    localContext: {
      landmarks: ['R66', 'Nongoma Town Center'],
      localHazards: ['Rural road conditions', 'Regional vehicle wear'],
      vehicleTypes: ['Passenger Vehicles', 'Commercial Vehicles', 'Local Fleet'],
      serviceRadius: 'Nongoma & Regional Communities',
      notableFeatures: ['Rural town', 'Community services', 'Extended Northern Route coverage'],
      commonServices: ['General repairs', 'Towing', 'Vehicle recovery', 'Collision repair', 'Emergency towing'],
      routeReference: 'R66',
      connectingRoutes: ['R66'],
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
    description: 'Reaching up to Kosi Bay with our professional towing and panelbeating solutions. Northernmost coverage point for tourism vehicle services.',
    keywords: ['panelbeater Kosi Bay', 'towing Kosi Bay', 'car repair Kosi Bay', 'tourism vehicle repair', '4x4 repair Kosi Bay'],
    localContext: {
      landmarks: ['Kosi Bay Mouth', 'Coastal access', 'R22', 'Northern Route endpoint'],
      localHazards: ['Coastal rust', 'Salt air corrosion', 'Remote location access', 'Gravel road stone chips'],
      vehicleTypes: ['Tourism Vehicles', '4x4s', 'Safari Viewers', 'Coastal vehicles'],
      serviceRadius: 'Kosi Bay & Coastal Area',
      notableFeatures: ['Coastal destination', 'Tourism area', 'Remote location', 'Northernmost coverage'],
      commonServices: ['4x4 repair', 'Emergency towing', 'Tourism vehicle maintenance', 'Rust proofing', 'Coastal vehicle protection'],
      routeReference: 'R22',
      connectingRoutes: ['R22', 'N2 Highway'],
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


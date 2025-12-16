// Phase 4: Geospatial utility functions for the Internal Spiderweb
// Implements Haversine formula for calculating great-circle distances
// Used to find nearby locations for programmatic internal linking

import { LocationData, locations } from './location-data';

/**
 * Haversine formula to calculate the distance between two points on Earth
 * Returns distance in kilometers
 * @param lat1 Latitude of first point
 * @param lon1 Longitude of first point
 * @param lat2 Latitude of second point
 * @param lon2 Longitude of second point
 * @returns Distance in kilometers
 */
export function haversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

/**
 * Find the K nearest neighbors to a given location
 * Uses geospatial proximity to create the "Nearby" graph
 * @param currentLocationSlug The slug of the current location
 * @param limit Maximum number of neighbors to return (default: 10)
 * @returns Array of location data sorted by distance (closest first)
 */
export function findNearestLocations(
  currentLocationSlug: string,
  limit: number = 10
): Array<LocationData & { distance: number }> {
  const currentLocation = locations.find(
    (loc) => loc.slug === currentLocationSlug
  );

  if (!currentLocation?.coordinates) {
    // If no coordinates, return other locations without distance (fallback)
    return locations
      .filter((loc) => loc.slug !== currentLocationSlug)
      .slice(0, limit)
      .map((loc) => ({ ...loc, distance: Infinity }));
  }

  const { latitude: lat1, longitude: lon1 } = currentLocation.coordinates;

  // Calculate distances to all other locations
  const locationsWithDistance = locations
    .filter((loc) => loc.slug !== currentLocationSlug && loc.coordinates)
    .map((loc) => ({
      ...loc,
      distance: haversineDistance(
        lat1,
        lon1,
        loc.coordinates!.latitude,
        loc.coordinates!.longitude
      ),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit);

  return locationsWithDistance;
}

/**
 * Adaptive radius algorithm to handle "islands" in the graph
 * Expands search radius if not enough neighbors found
 * @param currentLocationSlug The slug of the current location
 * @param minNeighbors Minimum number of neighbors desired
 * @returns Array of location data with at least minNeighbors entries
 */
export function findNearestLocationsAdaptive(
  currentLocationSlug: string,
  minNeighbors: number = 8
): Array<LocationData & { distance: number }> {
  // Start with a reasonable limit
  const results = findNearestLocations(currentLocationSlug, minNeighbors * 2);

  // If we have enough, return them
  if (results.length >= minNeighbors) {
    return results.slice(0, minNeighbors);
  }

  // Otherwise, expand to include all available locations (excluding self)
  return locations
    .filter((loc) => loc.slug !== currentLocationSlug && loc.coordinates)
    .map((loc) => {
      const currentLocation = locations.find(
        (l) => l.slug === currentLocationSlug
      );
      const distance = currentLocation?.coordinates
        ? haversineDistance(
            currentLocation.coordinates.latitude,
            currentLocation.coordinates.longitude,
            loc.coordinates!.latitude,
            loc.coordinates!.longitude
          )
        : Infinity;
      return { ...loc, distance };
    })
    .sort((a, b) => a.distance - b.distance);
}


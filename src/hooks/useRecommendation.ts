import { useMemo } from 'react';
import { TRoom } from '@/types/room.type';

/**
 * Simple seeded random number generator for consistent results
 */
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

/**
 * Generate a simple hash from a string
 */
function stringHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

/**
 * Hook to get 3 random rooms excluding the current room
 * @param rooms - Array of all available rooms
 * @param currentSlug - Slug of the current room to exclude
 * @param count - Number of recommendations to return (default: 3)
 * @returns Array of random rooms excluding the current one
 */
export const useRecommendation = (
  rooms: TRoom[],
  currentSlug?: string,
  count: number = 3,
): TRoom[] => {
  return useMemo(() => {
    // Filter out the current room
    const availableRooms = currentSlug
      ? rooms.filter((room) => room.slug !== currentSlug)
      : [...rooms];

    // If there are no available rooms, return empty array
    if (availableRooms.length === 0) {
      return [];
    }

    // If there are fewer rooms than requested count, return all available rooms
    if (availableRooms.length <= count) {
      return availableRooms;
    }

    let shuffled: { room: TRoom; sortKey: number }[] = [];

    // Create a deterministic but pseudo-random selection based on currentSlug
    if (currentSlug) {
      // Deterministic pseudo-random based on slug
      const seed = stringHash(currentSlug);
      shuffled = availableRooms.map((room, index) => ({
        room,
        sortKey: seededRandom(seed + index),
      }));
    } else {
      // Use a constant seed for consistent results
      const defaultSeed = 12345;
      shuffled = availableRooms.map((room, index) => ({
        room,
        sortKey: seededRandom(defaultSeed + index),
      }));
    }

    // Sort by the generated random keys and take the first 'count' items
    return shuffled
      .sort((a, b) => a.sortKey - b.sortKey)
      .slice(0, count)
      .map((item) => item.room);
  }, [rooms, currentSlug, count]);
};

import { getRoomBySlugWithImages, getRoomDatas } from './getRooms';
import { TRoom } from '@/types/room.type';

/**
 * TODO: Fetch room data with priority levels for optimal loading performance
 * Prioritizes critical data while allowing secondary data to load in parallel
 * @param slug - Room slug identifier
 * @returns Room data with prioritized loading structure
 */
export async function getRoomsWithPriority(slug: string) {
  // Priority 1: Critical data - fetch immediately
  const roomPromise = getRoomBySlugWithImages(slug);

  // Priority 2: Secondary data - can be fetched in parallel
  const allRoomsPromise = getRoomDatas();

  // Wait for critical data first
  const room = await roomPromise;

  if (!room) {
    return null;
  }

  // Return room immediately and let secondary data resolve in background
  return {
    room,
    allRooms: allRoomsPromise, // Return promise for streaming
  };
}

/**
 * TODO: Get room data for critical sections (title, features, booking)
 * Fetches essential room information needed for immediate display
 * @param slug - Room slug identifier
 * @returns Critical room data or null if not found
 */
export async function getCriticalRoomData(slug: string): Promise<TRoom | null> {
  return getRoomBySlugWithImages(slug);
}

/**
 * TODO: Get room data for secondary sections (amenities, rules)
 * Fetches additional room information that can load after critical content
 * @param slug - Room slug identifier
 * @returns Secondary room data with all rooms list
 */
export async function getSecondaryRoomData(slug: string): Promise<{
  room: TRoom | null;
  allRooms: TRoom[];
}> {
  const [room, allRooms] = await Promise.all([
    getRoomBySlugWithImages(slug),
    getRoomDatas(),
  ]);

  return {
    room,
    allRooms,
  };
}

import { getRoomBySlugWithImages, getRoomDatas } from './getRooms';
import { TRoom } from '@/types/room.type';

/**
 * Fetch room data with priority levels for optimal loading performance
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
 * Get room data for critical sections (title, features, booking)
 */
export async function getCriticalRoomData(slug: string): Promise<TRoom | null> {
  return getRoomBySlugWithImages(slug);
}

/**
 * Get room data for secondary sections (amenities, rules)
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

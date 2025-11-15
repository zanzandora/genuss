import { getRoomsWithPriority } from '@/lib/action/getRoomsWithPriority';
import { notFound } from 'next/navigation';
import { StreamingRoomDetails } from './StreamingRoomDetails';
import ScrollToTop from '@/components/common/ScrollToTop';

export default async function RoomDetailsContent({ slug }: { slug: string }) {
  // Fetch data with priority levels
  const roomData = await getRoomsWithPriority(slug);

  if (!roomData) {
    notFound();
  }

  const { room, allRooms } = roomData;

  return (
    <div>
      <ScrollToTop behavior='smooth' />
      <StreamingRoomDetails
        room={room}
        allRooms={await allRooms}
        currentSlug={slug}
      />
    </div>
  );
}

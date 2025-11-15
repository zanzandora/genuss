import { LazyRoomGallery } from '../LazyRoomGallery';
import RoomRecommends from '../RoomRecommends';
import { BackToTopButton } from '@/components/common/BackToTopButton';
import { TRoom } from '@/types/room.type';

interface DeferredRoomContentProps {
  room: TRoom;
  allRooms: TRoom[];
  currentSlug: string;
}

export function DeferredRoomContent({
  room,
  allRooms,
  currentSlug,
}: DeferredRoomContentProps) {
  return (
    <>
      <LazyRoomGallery room={room} />
      <RoomRecommends rooms={allRooms} currentSlug={currentSlug} />
      <BackToTopButton />
    </>
  );
}

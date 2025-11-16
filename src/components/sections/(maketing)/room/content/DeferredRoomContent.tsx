import RoomRecommends from '../RoomRecommends';
import { BackToTopButton } from '@/components/common/BackToTopButton';
import { TRoom } from '@/types/room.type';

interface DeferredRoomContentProps {
  allRooms: TRoom[];
  currentSlug: string;
}

export function DeferredRoomContent({
  allRooms,
  currentSlug,
}: DeferredRoomContentProps) {
  return (
    <>
      <RoomRecommends rooms={allRooms} currentSlug={currentSlug} />
      <BackToTopButton />
    </>
  );
}

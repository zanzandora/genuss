import RoomTitleSection from '../RoomTitleSection';
import { RoomFeatures } from '../RoomFeatures';
import { Separator } from '@/components/ui/separator';
import { TRoom } from '@/types/room.type';

interface CriticalRoomInfoProps {
  room: TRoom;
}

export function CriticalRoomInfo({ room }: CriticalRoomInfoProps) {
  return (
    <div className='space-y-8 lg:col-span-2'>
      <RoomTitleSection room={room} />
      <Separator className='bg-gray-500' />
      <RoomFeatures room={room} />
    </div>
  );
}

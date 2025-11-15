import RoomCard from './RoomCard';
import { TRoom } from '@/types/room.type';

interface BookingListProps {
  rooms: TRoom[];
  action?: React.ReactNode;
}

export default function BookingList({ rooms }: BookingListProps) {
  return (
    <div className='space-y-5'>
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} sizeCard='medium' />
      ))}
    </div>
  );
}

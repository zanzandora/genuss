'use client';

import RoomCard from './RoomCard';
import QuantityBooking from './QuantityBooking';
import { TRoom } from '@/types/room.type';

interface BookingListProps {
  rooms: TRoom[];
  action?: React.ReactNode;
}

export default function BookingList({ rooms, action }: BookingListProps) {
  return (
    <div>
      {rooms.map((room) => (
        <RoomCard
          key={room.id}
          room={room}
          sizeCard='medium'
          action={
            <QuantityBooking
              min={1}
              max={5}
              onQuantityChange={(qty) => console.log(qty)}
            />
          }
        />
      ))}
    </div>
  );
}

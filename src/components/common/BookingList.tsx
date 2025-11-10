'use client';

import RoomCard from './RoomCard';
import QuantityBooking from './QuantityBooking';
import { rooms } from '@/lib/data/rooms';

export default function BookingList() {
  return (
    <div>
      {Array.from({ length: 6 }).map((_, i) => (
        <RoomCard
          key={i}
          room={rooms[0]}
          sizeCard='large'
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

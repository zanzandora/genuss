'use client';

import RoomCard from './RoomCard';
import QuantityBooking from './QuantityBooking';

export default function BookingList() {
  return (
    <div>
      {Array.from({ length: 6 }).map((_, i) => (
        <RoomCard
          key={i}
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

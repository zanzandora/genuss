'use client';

import RoomCard from '@/components/common/RoomCard';
import { useRecommendation } from '@/hooks/useRecommendation';
import { ArrowRightIcon } from 'lucide-react';
import { TRoom } from '@/types/room.type';
import { Link } from '@/i18n/routing';

interface RoomRecommendsProps {
  rooms: TRoom[];
  currentSlug: string;
}

const RoomRecommends = ({ rooms, currentSlug }: RoomRecommendsProps) => {
  const recommendedRooms = useRecommendation(rooms, currentSlug, 3);

  return (
    <section className='relative px-6 py-20'>
      <div className='relative mx-auto max-w-6xl'>
        <div className='mb-14 text-center'>
          <h2 className='mb-4 text-h2'>More Rooms</h2>
        </div>

        <div className='mb-8 grid gap-6 md:grid-cols-3'>
          {recommendedRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        <div className='text-right'>
          <Link
            href='/rooms'
            className='flex items-center justify-end gap-2 font-semibold hover:underline hover:underline-offset-4'
          >
            View all rooms
            <ArrowRightIcon className='h-4 w-4' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RoomRecommends;

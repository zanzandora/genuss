'use client';

import { lazy, Suspense } from 'react';
import { useRecommendation } from '@/hooks/useRecommendation';
import { ArrowRightIcon } from 'lucide-react';
import { TRoom } from '@/types/room.type';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { DeferredRoomContentSkeleton } from './content/skeletons/DeferredRoomContentSkeleton';

// Lazy load RoomCard component
const RoomCard = lazy(() =>
  import('@/components/common/RoomCard').then((module) => ({
    default: module.default,
  })),
);

interface RoomRecommendsProps {
  rooms: TRoom[];
  currentSlug: string;
}

const RoomRecommends = ({ rooms, currentSlug }: RoomRecommendsProps) => {
  const tRooms = useTranslations('rooms');

  const recommendedRooms = useRecommendation(rooms, currentSlug, 3);

  return (
    <section className='relative px-6 py-20'>
      <div className='relative mx-auto max-w-6xl'>
        <div className='mb-14 text-center'>
          <h2 className='mb-4 text-h2 capitalize'>{tRooms('recommended')}</h2>
        </div>

        <div className='mb-8 grid gap-6 md:grid-cols-3'>
          {recommendedRooms.map((room) => (
            <Suspense key={room.id} fallback={<DeferredRoomContentSkeleton />}>
              <RoomCard room={room} />
            </Suspense>
          ))}
        </div>

        <div className='text-right'>
          <Link
            href='/rooms'
            className='flex items-center justify-end gap-2 font-semibold hover:underline hover:underline-offset-4'
          >
            {tRooms('viewAllRooms')}
            <ArrowRightIcon className='h-4 w-4' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RoomRecommends;

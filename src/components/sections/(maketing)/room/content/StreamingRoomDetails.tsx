'use client';

import { Suspense } from 'react';
import { CriticalRoomInfo } from './CriticalRoomInfo';
import { SecondaryRoomInfo } from './SecondaryRoomInfo';
import { DeferredRoomContent } from './DeferredRoomContent';
import { BookingPanel } from '../booking-panel/BookingPanel';
import { CriticalRoomInfoSkeleton } from './skeletons/CriticalRoomInfoSkeleton';
import { SecondaryRoomInfoSkeleton } from './skeletons/SecondaryRoomInfoSkeleton';
import { DeferredRoomContentSkeleton } from './skeletons/DeferredRoomContentSkeleton';
import { BookingPanelSkeleton } from './skeletons/BookingPanelSkeleton';
import { TRoom } from '@/types/room.type';

interface StreamingRoomDetailsProps {
  room: TRoom;
  allRooms: TRoom[];
  currentSlug: string;
}

/**
 * TODO: Stream room details with progressive loading for optimal performance
 * Renders content in priority order: critical, secondary, then deferred
 * @param room - Current room data
 * @param allRooms - Array of all available rooms
 * @param currentSlug - Current room slug for context
 * @returns Streaming room details component
 */
export function StreamingRoomDetails({
  room,
  allRooms,
  currentSlug,
}: StreamingRoomDetailsProps) {
  return (
    <div>
      <div className='mx-auto mb-16 max-w-6xl'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          {/* Critical Content - High Priority */}
          <Suspense fallback={<CriticalRoomInfoSkeleton />}>
            <CriticalRoomInfo room={room} />
          </Suspense>

          {/* Booking Panel - High Priority */}
          <Suspense fallback={<BookingPanelSkeleton />}>
            <BookingPanel />
          </Suspense>
        </div>

        {/* Secondary Content - Medium Priority */}
        <div className='mt-8'>
          <Suspense fallback={<SecondaryRoomInfoSkeleton />}>
            <SecondaryRoomInfo />
          </Suspense>
        </div>
      </div>

      {/* Deferred Content - Low Priority */}
      <Suspense fallback={<DeferredRoomContentSkeleton />}>
        <DeferredRoomContent allRooms={allRooms} currentSlug={currentSlug} />
      </Suspense>
    </div>
  );
}

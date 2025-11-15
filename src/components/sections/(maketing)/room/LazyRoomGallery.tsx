'use client';

import { lazy, Suspense } from 'react';
import { DeferredRoomContentSkeleton } from './content/skeletons/DeferredRoomContentSkeleton';
import { TRoom } from '@/types/room.type';

// Lazy load RoomGallery component
const RoomGallery = lazy(() =>
  import('./RoomGallery').then((module) => ({
    default: module.RoomGallery,
  })),
);

interface LazyRoomGalleryProps {
  room: TRoom;
}

export function LazyRoomGallery({ room }: LazyRoomGalleryProps) {
  return (
    <Suspense fallback={<DeferredRoomContentSkeleton />}>
      <RoomGallery room={room} />
    </Suspense>
  );
}

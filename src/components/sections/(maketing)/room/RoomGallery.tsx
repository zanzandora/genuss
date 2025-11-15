'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { getOptimizedImageProps } from '@/lib/utils/imageOptimization';
import { TRoom } from '@/types/room.type';

interface RoomGalleryProps {
  room: TRoom;
}

export function RoomGallery({ room }: RoomGalleryProps) {
  return (
    <div className='space-y-4'>
      <Carousel className='w-full'>
        <CarouselContent className='-ml-2 md:-ml-4'>
          {room.images && room.images.length > 0 ? (
            room.images.map((image, idx) => {
              const imageProps = getOptimizedImageProps(image, idx);
              return (
                <CarouselItem
                  key={idx}
                  className='basis-full sm:basis-1/2 md:basis-1/3 md:pl-6 lg:basis-1/4'
                >
                  <div className='relative aspect-[3/2] overflow-hidden rounded-lg'>
                    <Image
                      {...imageProps}
                      alt='Room Image'
                      fill
                      className={`${imageProps.className} cursor-pointer object-cover`}
                    />
                  </div>
                </CarouselItem>
              );
            })
          ) : (
            <CarouselItem className='basis-full'>
              <div className='relative aspect-square overflow-hidden rounded-lg'>
                <Image
                  {...getOptimizedImageProps('/images/rooms/room-1.jpg', 0)}
                  fill
                  alt='Room Image'
                  className={`${getOptimizedImageProps('/images/rooms/room-1.jpg', 0).className} cursor-pointer object-cover`}
                />
              </div>
            </CarouselItem>
          )}
        </CarouselContent>
        <CarouselPrevious className='left-4' />
        <CarouselNext className='right-4' />
      </Carousel>
    </div>
  );
}

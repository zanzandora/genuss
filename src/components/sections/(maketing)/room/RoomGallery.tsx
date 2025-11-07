'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { BLUR_DATA_URL } from '@/constants';

export function RoomGallery() {
  return (
    <div className='space-y-4'>
      <Carousel className='w-full'>
        <CarouselContent className='-ml-2 md:-ml-4'>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((_image, idx) => (
            <CarouselItem
              key={idx}
              className='basis-full sm:basis-1/2 md:basis-1/3 md:pl-6 lg:basis-1/4'
            >
              <div className='relative aspect-square overflow-hidden rounded-lg'>
                <Image
                  src={'/images/slide-swipe-1.jpg'}
                  alt={`Room image ${idx + 1}`}
                  fill
                  sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className='cursor-pointer object-cover transition-transform hover:scale-110'
                  loading='lazy'
                  placeholder='blur'
                  blurDataURL={BLUR_DATA_URL}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='left-4' />
        <CarouselNext className='right-4' />
      </Carousel>
    </div>
  );
}

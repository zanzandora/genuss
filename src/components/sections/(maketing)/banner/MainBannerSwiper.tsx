'use client';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BLUR_DATA_URL } from '@/constants';

type HeroSlide = {
  src: string;
  alt: string;
};

export default function MainBannerSwiper({
  heroSlides,
}: {
  heroSlides: HeroSlide[];
}) {
  //* Lưu instance của Carousel API để điều khiển carousel
  const [api, setApi] = useState<CarouselApi>();

  // TODO: Auto-play functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className='relative'>
      {/* Booking Title */}
      <div className='absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/12 md:-translate-y-1/2'>
        <div className='size-26 w-full perspective-dramatic'>
          <div className='font-allison translate-z-16 -rotate-[7.28deg] text-3xl text-white text-shadow-lg sm:text-4xl md:text-5xl xl:text-6xl'>
            Book your vacation
          </div>
        </div>
      </div>

      {/* Phone Contract */}
      {/* <div className='bg-opacity-50 absolute left-50 z-10 my-2 inline-flex items-center justify-center text-white'>
        <PhoneIcon className='mx-4' />{' '}
        <span className=''>
          +84 978 352 968 * +84 978 452 968 * +84 978 552 968
        </span>
      </div> */}

      {/* Main Banner Swiper*/}
      <Carousel setApi={setApi} className='w-full'>
        <CarouselContent>
          {heroSlides.map((slide, idx) => (
            <CarouselItem key={idx}>
              <div className='relative h-[580px] w-full md:h-[680px] lg:h-[780px]'>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes='(min-width: 1580px) 100vw, (min-width: 1040px) calc(15.58vw + 1317px), (min-width: 780px) 1236px, 995px'
                  className='h-full w-full rounded-4xl object-cover'
                  placeholder='blur'
                  blurDataURL={BLUR_DATA_URL}
                  // priority={idx === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

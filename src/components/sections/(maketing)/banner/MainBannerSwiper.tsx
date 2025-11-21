'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { BLUR_DATA_URL } from '@/constants';
import Autoplay from 'embla-carousel-autoplay';
import { useTranslations } from 'next-intl';
import { AnimatedTyppingText } from '@/components/ui/animations/AnimatedTyppingText';

type HeroSlide = {
  src: string;
  alt: string;
};

export default function MainBannerSwiper({
  heroSlides,
}: {
  heroSlides: HeroSlide[];
}) {
  const t = useTranslations('home');
  return (
    <div className='relative'>
      {/* Booking Title */}
      <div className='absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/12 md:-translate-y-1/2'>
        <div className='size-26 max-w-fit perspective-dramatic sm:mx-20 sm:w-40 md:w-full'>
          <div className='font-playfair_display_sc flex translate-z-16 flex-col items-center text-center text-xs text-white capitalize sm:text-sm md:text-base xl:text-lg'>
            <span className='font-playfair_display_sc text-shadow-lg'>
              genuss hotel
            </span>

            <AnimatedTyppingText
              text={t('description')}
              className='text-shadow-lg'
              fontText='font-playfair_display_sc'
              typingSpeed={0.03}
            />
          </div>
        </div>
      </div>

      {/* Main Banner Swiper*/}
      <Carousel
        className='w-full'
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
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
                <div className='absolute inset-0 rounded-4xl bg-black/50' />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

import { BLUR_DATA_URL } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const NormalBanner = ({
  title,
  imageSrc = '/images/normal-banner-2.webp',
  className,
}: {
  title: string;
  imageSrc?: string;
  className?: string;
}) => {
  return (
    <div className='relative mb-8 w-full rounded-4xl bg-secondary sm:mb-16 md:mb-24'>
      <div className='absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2'>
        <div className='size-26 w-full text-center text-3xl leading-tight sm:text-4xl md:text-5xl md:leading-snug lg:text-6xl'>
          <div
            className={cn(
              'font-playfair_display mt-5 text-balance text-primary-foreground uppercase md:mt-2',
              className,
            )}
          >
            {title}
          </div>
        </div>
      </div>

      <div className='relative h-[350px] w-full md:h-[410px] lg:h-[510px]'>
        <Image
          src={imageSrc}
          alt={`${title} - Genuss Hotel Tam Dao`}
          fill
          sizes='(min-width: 1580px) 100vw, (min-width: 1040px) calc(15.58vw + 1317px), (min-width: 780px) 1236px, 995px'
          className='h-full w-full rounded-4xl object-cover'
          placeholder='blur'
          blurDataURL={BLUR_DATA_URL}
        />
        <div className='absolute inset-0 rounded-4xl bg-black/50' />
      </div>
    </div>
  );
};

export default NormalBanner;

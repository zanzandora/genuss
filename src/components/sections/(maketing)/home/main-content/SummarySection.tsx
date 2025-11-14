import { AspectRatio } from '@/components/ui/aspect-ratio';
import { BLUR_DATA_URL } from '@/constants';
import { StarIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function SummarySection() {
  const tDesciptions = useTranslations('home.desciptions');

  return (
    <section className='mb-4 rounded-4xl bg-secondary sm:mb-10 md:mb-16'>
      <div className='mx-auto max-w-7xl px-6 py-8 md:py-12'>
        <div className='grid items-center gap-16 md:grid-cols-2'>
          {/* Text / Summary */}
          <div className='flex flex-col justify-center'>
            <div className='mb-6 flex items-center justify-between'>
              <div className='flex items-center gap-3 text-sm font-medium'>
                <span className='flex items-center gap-2' aria-hidden='false'>
                  <span>8/10</span>
                  <StarIcon fill='#ffd339' aria-hidden='true' />
                  <span>
                    {tDesciptions('rate', {
                      social: 'Travoleka',
                    })}
                  </span>
                </span>
              </div>

              <div className='mr-10 text-sm font-medium'>
                {tDesciptions('rooms', { countRooms: '94' })}
              </div>
            </div>

            <article className='text-lg leading-tight font-normal tracking-wider md:text-xl lg:text-3xl'>
              {tDesciptions('summary')}
            </article>
          </div>

          {/* Image */}
          <figure className='xl:[450px] mx-auto w-[350px] overflow-hidden rounded-tl-4xl rounded-br-4xl drop-shadow-xl md:w-[300px] lg:w-[400px]'>
            <AspectRatio ratio={1 / 1}>
              <Image
                src='/images/summary.webp'
                alt='Mountain view hotel exterior'
                fill
                sizes='(min-width: 1580px) 100vw, (min-width: 1040px) calc(15.58vw + 1317px), (min-width: 780px) 1236px, 995px'
                className='rounded-tl-[60px] rounded-br-[60px] object-cover'
                placeholder='blur'
                blurDataURL={BLUR_DATA_URL}
              />
            </AspectRatio>
            <figcaption className='sr-only'>
              Summary image: hotel at 1,000 meters altitude
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

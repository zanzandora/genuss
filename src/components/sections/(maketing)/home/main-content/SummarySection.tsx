import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Separator } from '@/components/ui/separator';
import { BLUR_DATA_URL } from '@/constants';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { AnimatedSection } from '@/components/ui/animations/AnimatedSection';

export function SummarySection() {
  const tSummaries = useTranslations('home.summary');

  return (
    <section className='mb-4 rounded-4xl bg-secondary sm:mb-10 md:mb-16'>
      <div className='mx-auto max-w-7xl px-6 py-8 md:py-12'>
        <div className='grid items-center gap-16 md:grid-cols-2'>
          {/* Text / Summary */}
          <AnimatedSection
            variant='slideInLeft'
            className='flex flex-col justify-center'
          >
            <div className='mb-2 flex items-center justify-between'>
              <div className='text-sm font-medium'>
                <span className='flex items-center gap-2' aria-hidden='false'>
                  <span className='text-xl font-bold uppercase sm:text-2xl lg:text-3xl'>
                    {tSummaries('title')}
                  </span>
                </span>
                <Separator className='my-8 max-w-3xs rounded-full py-0.5' />
              </div>
            </div>

            <article className='text-base leading-tight font-normal tracking-wider md:text-lg'>
              {tSummaries.rich('descriptions', {
                lineBreak: () => <br />,
              })}
            </article>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection variant='slideInRight' delay={0.2}>
            <figure className='xl:[450px] mx-auto w-[350px] overflow-hidden rounded-tl-4xl rounded-br-4xl drop-shadow-xl md:w-[300px] lg:w-[400px]'>
              <AspectRatio ratio={1 / 1}>
                <Image
                  src='/images/summary-1.webp'
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
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

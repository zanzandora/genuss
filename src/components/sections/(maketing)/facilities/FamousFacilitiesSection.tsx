import AnimatedSection from '@/components/ui/animations/AnimatedSection';
import { BLUR_DATA_URL } from '@/constants';
import { Link } from '@/i18n/routing';
import { ServiceImage } from '@/lib/seo';
import { cn } from '@/lib/utils';
import { ArrowRightIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const FamousFacilitiesSection = () => {
  const tFacilities = useTranslations('services');
  const tButtons = useTranslations('common.buttons');

  const services = [
    {
      title: tFacilities('dinning.title'),
      slug: 'dinning',
      description: tFacilities('dinning.descriptions'),
      image: '/images/facilities/restaurant-and-dining-service.jpg',
      position: 'left',
    },
    {
      title: tFacilities('event.title'),
      slug: 'event',
      description: tFacilities('event.descriptions'),
      image: '/images/facilities/conference-and-event-service.jpg',
      position: 'right',
    },
    {
      title: tFacilities('recreation.title'),
      slug: 'recreation',
      description: tFacilities('recreation.descriptions'),
      image: '/images/facilities/recreation-and-wellness-service.jpg',
      position: 'left',
    },
    {
      title: tFacilities('swimming.title'),
      slug: 'swimming',
      description: tFacilities('swimming.descriptions'),
      image: '/images/facilities/swimming-pool-service.webp',
      position: 'right',
    },
  ];

  return (
    <section className='relative mb-4 py-8 sm:mb-10 md:mb-16 md:py-16'>
      <Image
        width={500}
        height={500}
        src='/rectangles/Rectangle_8.svg'
        alt=''
        className='absolute top-1/2 right-0 z-0 -mx-4 h-auto w-4xl -translate-y-1/2 scale-x-[-1] opacity-50'
      />
      <div className='relative mx-auto max-w-6xl'>
        <AnimatedSection variant='fadeInDown'>
          <h1 className='font-playfair_display mb-8 text-center text-title md:mb-16'>
            {tFacilities('title')}
          </h1>
        </AnimatedSection>

        <AnimatedContainer
          variant='fastContainer'
          alternatingPattern='left-right'
          className='space-y-16'
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                'flex flex-col items-center gap-8',
                service.position === 'left'
                  ? 'md:flex-row'
                  : 'md:flex-row-reverse',
              )}
            >
              <div className='md:w-1/2'>
                <ServiceImage
                  width={576}
                  height={350}
                  src={service.image}
                  serviceName={service.title}
                  serviceType={service.slug}
                  className='h-64 w-full rounded-3xl bg-cover bg-center shadow-lg md:h-80'
                  placeholder='blur'
                  blurDataURL={BLUR_DATA_URL}
                />
              </div>

              <div className='px-6 md:w-1/2'>
                <h2 className='mb-6 text-2xl font-bold text-gray-900 uppercase md:mb-10'>
                  {service.title}
                </h2>
                <p className='leading-relaxed font-medium'>
                  {service.description}
                </p>

                <Link
                  href={`services/${service.slug}`}
                  className='my-2 flex items-center justify-start gap-2 font-semibold text-muted-foreground hover:underline hover:underline-offset-4'
                >
                  {tButtons('learnMore')}
                  <ArrowRightIcon className='size-8 md:size-4' />
                </Link>
              </div>
            </div>
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
};

export default FamousFacilitiesSection;

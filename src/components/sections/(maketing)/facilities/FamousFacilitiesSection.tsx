import { BLUR_DATA_URL } from '@/constants';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const FamousFacilitiesSection = () => {
  const tFacilities = useTranslations('services');

  const services = [
    {
      title: tFacilities('dinning.title'),
      description: tFacilities('dinning.desciptions'),
      image: '/images/facilities/restaurant-and-dining-service.jpg',
      position: 'left',
    },
    {
      title: tFacilities('event.title'),
      description: tFacilities('event.desciptions'),
      image: '/images/facilities/conference-and-event-service.jpg',
      position: 'right',
    },
    {
      title: tFacilities('recreation.title'),
      description: tFacilities('recreation.desciptions'),
      image: '/images/facilities/recreation-and-wellness-service.jpg',
      position: 'left',
    },
  ];

  return (
    <section className='relative'>
      <Image
        width={500}
        height={500}
        src='/rectangles/Rectangle_8.svg'
        alt=''
        className='absolute top-1/2 right-0 z-0 -mx-4 h-auto w-4xl -translate-y-1/2 scale-x-[-1] opacity-50'
      />
      <div className='relative mx-auto max-w-6xl'>
        <h1 className='mb-16 text-center text-4xl font-bold capitalize md:text-5xl'>
          {tFacilities('title')}
        </h1>

        <div className='space-y-16'>
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
                <Image
                  width={576}
                  height={350}
                  src={service.image}
                  alt={service.title}
                  className='h-64 w-full rounded-3xl bg-cover bg-center shadow-lg md:h-80'
                  placeholder='blur'
                  blurDataURL={BLUR_DATA_URL}
                />
              </div>

              <div className='px-6 md:w-1/2'>
                <h2 className='mb-10 text-2xl font-bold text-gray-900'>
                  {service.title}
                </h2>
                <p className='leading-relaxed font-medium'>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamousFacilitiesSection;

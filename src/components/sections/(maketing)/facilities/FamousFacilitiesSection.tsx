import { BLUR_DATA_URL } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const FamousFacilitiesSection = () => {
  const services = [
    {
      title: 'Restaurant & Dining Service',
      description:
        'Enjoy a rich culinary experience with buffet breakfast and a delightful Asian-European menu.',
      image: '/images/service-1.png',
      position: 'left',
    },
    {
      title: 'Conference & Event Service',
      description:
        'Elegant spaces for meetings, weddings, and professional events with full amenities.',
      image: '/images/service-2.jpg',
      position: 'right',
    },
    {
      title: 'Recreation & Wellness Service',
      description:
        'Relax and rejuvenate with our spa, swimming pool, and recreation facilities designed for your wellbeing.',
      image: '/images/service-3.jpg',
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
        <h1 className='mb-16 text-center text-4xl font-bold md:text-5xl'>
          Visit Our Famous Facilities
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

import { AnimatedContainer } from '@/components/ui/animations/AnimatedContainer';
import { FacilityKey } from '@/types/FacilityKey.type';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const HotelFacilitiesSection = () => {
  const tFacilities = useTranslations('facilities');

  const facilities = [
    { icon: '/icons/icon-parking.svg', nameKey: 'parking' as FacilityKey },
    {
      icon: '/icons/icon-swimming-pool.svg',
      nameKey: 'swimmingPool' as FacilityKey,
    },
    { icon: '/icons/icon-safe.svg', nameKey: 'safe' as FacilityKey },
    { icon: '/icons/icon-breakfast.svg', nameKey: 'breakfast' as FacilityKey },
    { icon: '/icons/icon-gym.svg', nameKey: 'gym' as FacilityKey },
    { icon: '/icons/icon-coffe.svg', nameKey: 'coffee' as FacilityKey },
    { icon: '/icons/icon-wifi.svg', nameKey: 'wifi' as FacilityKey },
  ];

  return (
    <section className='mb-4 px-6 py-20 sm:mb-10 md:mb-16'>
      <h1 className='font-playfair_display mb-12 text-center text-title'>
        {tFacilities('title')}
      </h1>
      <div className='mx-auto max-w-7xl px-4 md:px-28'>
        <AnimatedContainer
          variant='fastContainer'
          className='flex flex-wrap items-center justify-around gap-x-24 gap-y-16 md:justify-evenly md:gap-x-48 md:gap-y-28'
        >
          {facilities.map((facility, index) => (
            <div
              key={index}
              className='flex max-w-20 flex-col items-center gap-4 wrap-anywhere odd:last:mx-auto md:mx-0 md:w-auto md:max-w-full md:basis-0'
            >
              <div className='flex h-20 w-20 items-center justify-center'>
                <Image
                  src={facility.icon}
                  alt={tFacilities(facility.nameKey)}
                  className='h-auto w-auto object-contain'
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                  width={0}
                  height={0}
                  sizes='80px'
                />
              </div>
              <p className='text-center font-medium text-wrap text-primary capitalize'>
                {tFacilities(facility.nameKey)}
              </p>
            </div>
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
};

export default HotelFacilitiesSection;

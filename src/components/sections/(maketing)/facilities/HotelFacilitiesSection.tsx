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
    { icon: '/icons/icon-spa.svg', nameKey: 'spa' as FacilityKey },
    { icon: '/icons/icon-wifi.svg', nameKey: 'wifi' as FacilityKey },
  ];

  return (
    <section className='px-6 py-20'>
      <div className='mx-auto max-w-7xl px-28'>
        <h1 className='mb-12 text-center text-3xl font-bold text-primary uppercase md:text-4xl'>
          {tFacilities('title')}
        </h1>

        <div className='flex flex-wrap items-center justify-evenly gap-x-48 gap-y-28'>
          {facilities.map((facility, index) => (
            <div key={index} className='flex flex-col items-center gap-4'>
              <Image
                width={100}
                height={90}
                src={facility.icon}
                alt={tFacilities(facility.nameKey)}
                className='h-fit w-fit text-5xl'
              />
              <p className='text-center font-medium text-primary capitalize'>
                {tFacilities(facility.nameKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelFacilitiesSection;

import { BLUR_DATA_URL } from '@/constants';
import Image from 'next/image';

const HotelFacilitiesSection = () => {
  const facilities = [
    { icon: '/icons/icon-parking.svg', name: 'Parking' },
    { icon: '/icons/icon-swimming-pool.svg', name: 'Swimming Pool' },
    { icon: '/icons/icon-safe.svg', name: 'Safe' },
    { icon: '/icons/icon-breakfast.svg', name: 'Have Breakfast' },
    { icon: '/icons/icon-gym.svg', name: 'Gym' },
    { icon: '/icons/icon-spa.svg', name: 'Spa' },
    { icon: '/icons/icon-wifi.svg', name: 'Wi-Fi' },
  ];

  return (
    <section className='px-6 py-20'>
      <div className='mx-auto max-w-7xl px-28'>
        <h1 className='mb-12 text-center text-4xl font-bold text-primary md:text-5xl'>
          Hotel facilities
        </h1>

        <div className='flex flex-wrap items-center justify-evenly gap-x-48 gap-y-28'>
          {facilities.map((facility, index) => (
            <div key={index} className='flex flex-col items-center gap-4'>
              <Image
                width={100}
                height={90}
                src={facility.icon}
                alt={facility.name}
                className='h-fit w-fit text-5xl'
              />
              <p className='text-center font-medium text-primary'>
                {facility.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelFacilitiesSection;

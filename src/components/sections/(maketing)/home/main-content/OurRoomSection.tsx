import RoomCard from '@/components/common/RoomCard';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const OurRoomSection = () => {
  return (
    <section className='relative px-6 py-20'>
      <Image
        width={1000}
        height={1000}
        src='/rectangles/Rectangle_8.svg'
        alt=''
        className='absolute top-0 left-0 z-0 -mx-4 h-full w-auto opacity-50'
      />
      <div className='relative mx-auto max-w-6xl'>
        <div className='mb-12 text-center'>
          <h2 className='mb-4 text-h1'>Our room</h2>
          <p className='mx-auto max-w-2xl text-paragraph-m'>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of soul.
          </p>
        </div>

        <div className='mb-8 grid gap-6 md:grid-cols-3'>
          <RoomCard shouldUseHover={true} />
          <RoomCard shouldUseHover={true} />
          <RoomCard shouldUseHover={true} />
        </div>

        <div className='text-right'>
          <Link
            href='/rooms'
            className='flex items-center justify-end gap-2 font-semibold hover:underline hover:underline-offset-4'
          >
            View all rooms
            <ArrowRightIcon className='h-4 w-4' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurRoomSection;

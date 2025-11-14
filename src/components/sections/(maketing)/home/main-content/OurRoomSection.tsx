import RoomCard from '@/components/common/RoomCard';
import { Link } from '@/i18n/routing';
import { TRoom } from '@/types/room.type';
import { ArrowRightIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const OurRoomSection = ({ rooms }: { rooms: TRoom[] }) => {
  const tRooms = useTranslations('rooms');

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
          <h2 className='mb-4 text-h1'>{tRooms('title')}</h2>
          <p className='mx-auto max-w-2xl text-paragraph-m'>
            {tRooms('desciptions')}
          </p>
        </div>

        <div className='mb-8 grid gap-6 md:grid-cols-3'>
          {rooms.slice(0, 3).map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        <div className='text-right'>
          <Link
            href='/rooms'
            className='flex items-center justify-end gap-2 font-semibold hover:underline hover:underline-offset-4'
          >
            {tRooms('viewAllRooms')}
            <ArrowRightIcon className='h-4 w-4' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurRoomSection;

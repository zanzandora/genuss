import RoomCard from '@/components/common/RoomCard';
import { getRoomDatas } from '@/lib/action/getRooms';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

const RoomCards = async () => {
  const tRooms = await getTranslations('rooms');

  const rooms = await getRoomDatas();

  return (
    <div className='relative mb-4 py-8 sm:mb-10 md:mb-16 md:py-16'>
      <Image
        width={1000}
        height={1000}
        src='/rectangles/Rectangle_8.svg'
        alt=''
        className='absolute top-0 left-0 z-0 -mx-4 h-full min-w-auto opacity-50'
      />

      <section className='mx-auto mb-4 max-w-6xl sm:mb-16 md:mb-24'>
        <div className='mb-12 text-center'>
          <h2 className='font-playfair_display mb-4 text-2xl font-bold uppercase sm:text-3xl lg:text-4xl'>
            {tRooms('title')}
          </h2>
          <p className='mx-auto max-w-2xl text-paragraph-m'>
            {tRooms('descriptions')}
          </p>
        </div>

        <div className='mb-8 grid gap-6 md:grid-cols-3'>
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RoomCards;

import RoomCard from '@/components/common/RoomCard';
import { getRooms } from '@/lib/action/getRooms';
// import { rooms } from '@/lib/data/rooms';
import Image from 'next/image';

const RoomCards = async () => {
  const rooms = await getRooms();
  return (
    <div className='relative'>
      <Image
        width={1000}
        height={1000}
        src='/rectangles/Rectangle_8.svg'
        alt=''
        className='absolute top-0 left-0 z-0 -mx-4 h-full opacity-50'
      />

      <section className='mx-auto mb-4 max-w-6xl sm:mb-16 md:mb-24'>
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
          {rooms.map((room) => (
            <RoomCard shouldUseHover={true} key={room.id} room={room} />
          ))}

          {/* <RoomCard shouldUseHover={true} sizeCard='medium' room={rooms[0]} /> */}
        </div>
      </section>
    </div>
  );
};

export default RoomCards;

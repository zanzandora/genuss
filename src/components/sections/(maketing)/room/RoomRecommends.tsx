import RoomCard from '@/components/common/RoomCard';
import { getRooms } from '@/lib/action/getRooms';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

const RoomRecommends = async () => {
  const rooms = await getRooms();
  return (
    <section className='relative px-6 py-20'>
      <div className='relative mx-auto max-w-6xl'>
        <div className='mb-14 text-center'>
          <h2 className='mb-4 text-h2'>More Rooms</h2>
        </div>

        <div className='mb-8 grid gap-6 md:grid-cols-3'>
          <RoomCard shouldUseHover={true} room={rooms[0]} />
          <RoomCard shouldUseHover={true} room={rooms[1]} />
          <RoomCard shouldUseHover={true} room={rooms[2]} />
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

export default RoomRecommends;

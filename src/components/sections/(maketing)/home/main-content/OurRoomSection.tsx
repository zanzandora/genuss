import RoomCard from '@/components/common/RoomCard';
import { TRoom } from '@/types/room.type';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const OurRoomSection = ({ rooms }: { rooms: TRoom[] }) => {
  // const recommendedRooms = useRecommendation(rooms, undefined, 3);

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
            Tổng cộng 94 phòng với 7 hạng phòng phù hợp với mọi nhu cầu của
            khách hàng. Nội thất được lựa chọn tinh tế, trang thiết bị đầy đủ,
            đảm bảo sự thoải mái và riêng tư tối đa.
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
            View all rooms
            <ArrowRightIcon className='h-4 w-4' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurRoomSection;

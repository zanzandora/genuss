import { cn, formatCurrency } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, BedDoubleIcon, Users2Icon } from 'lucide-react';
import { Badge } from '../ui/badge';
import { BLUR_DATA_URL } from '@/constants';
import { BookNowButton } from './BookNowButton';
import { TRoom } from '@/types/room.type';

type SizeCard = 'normal' | 'medium' | 'large';

type Props = {
  className?: string;
  sizeCard?: SizeCard;
  room: TRoom;
  shouldUseHover?: boolean; // kept for compatibility (no-op)
  action?: React.ReactNode;
};

const RoomCard = ({
  className,
  room,
  sizeCard = 'normal',
  // keep prop to avoid breaking consumers, but we no longer use it
  shouldUseHover = false,
  action,
}: Props) => {
  const gridClasses = {
    normal: 'md:col-span-1 ',
    medium: 'md:col-span-2 ',
    large: 'md:col-span-3',
  };

  return (
    <div
      className={cn('group relative h-full', gridClasses[sizeCard], className)}
    >
      {/* Image Section (now standalone, occupies full container area) */}
      <div className='aspect-[3/2] max-h-[490px] min-w-full overflow-hidden rounded-xl shadow-[8px_8px_4px_0px_#0000004D]'>
        <div className='relative h-full w-full'>
          <Image
            src={
              room.mainImage || room.images?.[0] || '/images/rooms/room-1.jpg'
            }
            alt={`${room.name} room image`}
            fill
            sizes='100vw'
            className='object-cover transition-transform duration-500 ease-out'
            placeholder='blur'
            blurDataURL={BLUR_DATA_URL}
          />
        </div>
      </div>

      {/* Info Panel (separate block under image; no overlay) */}
      <div className='w-full rounded-xl border border-secondary bg-white p-4 shadow-sm'>
        <div className='flex items-start justify-between gap-4'>
          <p className='text-sm font-semibold uppercase'>{room.name}</p>
          <Badge className='h-6 min-w-[5rem] rounded-sm px-3 py-1 font-mono text-sm'>
            Từ {formatCurrency(+room.price)} / Đêm
          </Badge>
        </div>

        <div className='mt-3 space-y-2 text-sm font-medium'>
          <div className='flex items-start gap-2'>
            <BedDoubleIcon />
            <div className='flex flex-col'>
              {room.bed.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <Users2Icon />
            <span>tối đa {room.maxOccupancy} người</span>
          </div>
        </div>

        <div className='mt-4 flex items-center justify-between'>
          <Link
            href={`/room-detail/${room.slug}`}
            className='flex items-center gap-2 font-semibold'
            aria-description='Link into room detailt'
          >
            Thông tin chi tiết <ArrowRightIcon />
          </Link>

          {action || <BookNowButton />}
        </div>
      </div>
    </div>
  );
};

export default RoomCard;

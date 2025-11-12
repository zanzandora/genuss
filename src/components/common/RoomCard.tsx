'use client';

import { cn, formatCurrency } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, BedDoubleIcon, Users2Icon } from 'lucide-react';
import { Badge } from '../ui/badge';
import { BLUR_DATA_URL } from '@/constants';
import { BookNowButton } from './BookNowButton';
import { TRoom } from '@/types/room.type';
import { useMediaQuery } from 'usehooks-ts';

type SizeCard = 'normal' | 'medium' | 'large';

type Props = {
  className?: string;
  sizeCard?: SizeCard;
  room: TRoom;
  shouldUseHover?: boolean;
  action?: React.ReactNode;
};

const RoomCard = ({
  className,
  room,
  sizeCard = 'normal',
  shouldUseHover = false,
  action,
}: Props) => {
  const gridClasses = {
    normal: 'md:col-span-1 ',
    medium: 'md:col-span-2 ',
    large: 'md:col-span-3',
  };

  const matches = useMediaQuery('(min-width: 768px)');

  const panelClasses =
    shouldUseHover || matches
      ? 'translate-y-full transform transition-transform duration-300 ease-out group-focus-within:-translate-y-0 group-hover:-translate-y-0'
      : 'translate-y-0 transform';

  const infoClasses =
    shouldUseHover || matches
      ? 'opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100'
      : 'opacity-100';

  return (
    <div
      className={cn(
        'group relative h-full cursor-pointer',
        gridClasses[sizeCard],
        className,
      )}
    >
      {/* Room  Container */}
      <div className='relative mb-4 aspect-[3/4] max-h-[490px] min-w-full overflow-hidden rounded-xl shadow-[8px_8px_4px_0px_#0000004D]'>
        <div className='h-full w-full'>
          <div className='relative h-full w-full'>
            <Image
              src={
                room.mainImage || room.images?.[0] || '/images/rooms/room-1.jpg'
              }
              alt={`${room.name} room image`}
              fill
              sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 286px'
              className='object-cover transition-transform duration-500 ease-out group-hover:scale-110'
              placeholder='blur'
              blurDataURL={BLUR_DATA_URL}
            />
          </div>

          {/* Price */}
          <div className={cn('absolute top-3 right-3 z-10', infoClasses)}>
            <Badge className='h-5 min-w-[5rem] rounded-sm px-3 py-4 font-mono text-sm'>
              From {formatCurrency(+room.price)} / Night
            </Badge>
          </div>
        </div>

        {/* Info Panel  */}
        <div
          className={cn(
            'absolute right-0 bottom-0 left-0 max-h-56 rounded-t-xl border-t border-secondary bg-white p-4 shadow-xl backdrop-blur-sm',
            panelClasses,
          )}
        >
          <div className='mb-3 w-full space-y-2 py-3 text-sm font-medium'>
            <p className='font-semibold uppercase'>{room.name}</p>
            <div className='mt-2 flex items-center gap-2'>
              <BedDoubleIcon />{' '}
              <p className='flex flex-col'>
                {room.bed.map((item, index) => (
                  <span key={index}>{item} </span>
                ))}
              </p>
            </div>
            <p className='mt-1 flex items-center gap-2'>
              <Users2Icon />
              maximum {room.maxOccupancy} people
            </p>
          </div>

          {/* Action Content */}
          <div className='flex items-center justify-between'>
            <Link
              href={`/room-detail/${room.slug}`}
              className='flex items-center gap-2 font-semibold'
              aria-description='Link into room detailt'
            >
              View details <ArrowRightIcon />
            </Link>

            {action || <BookNowButton />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;

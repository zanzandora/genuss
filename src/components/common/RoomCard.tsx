import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRightIcon, BedDoubleIcon, Users2Icon } from 'lucide-react';
import { Badge } from '../ui/badge';
import { BLUR_DATA_URL } from '@/constants';

type SizeCard = 'normal' | 'medium' | 'large';

type Props = {
  className?: string;
  sizeCard?: SizeCard;
  shouldUseHover?: boolean;
};

const RoomCard = ({
  className,
  sizeCard = 'normal',
  shouldUseHover = false,
}: Props) => {
  const gridClasses = {
    normal: 'md:col-span-1 ',
    medium: 'md:col-span-2 ',
    large: 'md:col-span-3',
  };

  const panelClasses = shouldUseHover
    ? 'translate-y-full transform transition-transform duration-300 ease-out group-focus-within:-translate-y-0 group-hover:-translate-y-0'
    : 'translate-y-0 transform';

  const infoClasses = shouldUseHover
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
              src='/images/room/room-1.jpg'
              alt='Room image'
              fill
              sizes='(max-width: 640px) 200px, 286px'
              className='object-cover transition-transform duration-500 ease-out group-hover:scale-110'
              placeholder='blur'
              blurDataURL={BLUR_DATA_URL}
            />
          </div>

          {/* Price */}
          <div className={cn('absolute top-3 right-3 z-10', infoClasses)}>
            <Badge className='h-5 min-w-[5rem] rounded-sm px-3 py-4 font-mono text-sm'>
              From $35 / Night
            </Badge>
          </div>
        </div>

        {/* Hover Panel - sẽ được translate lên trên khi hover */}
        <div
          className={cn(
            'absolute right-0 bottom-0 left-0 rounded-t-xl border-t border-secondary bg-white p-4 shadow-xl backdrop-blur-sm',
            panelClasses,
          )}
        >
          <div className='mb-3 w-full py-3 text-sm font-medium'>
            <p className='font-semibold'>SUPERIOR DOUBLE ROOM</p>
            <p className='mt-2 flex items-center gap-2'>
              <BedDoubleIcon />1 double bed
            </p>
            <p className='mt-1 flex items-center gap-2'>
              <Users2Icon />
              maximum 2 people
            </p>
          </div>

          {/* Action Content */}
          <div className='flex items-center justify-between'>
            <Link
              href={`/room/1`}
              className='flex items-center gap-2 font-semibold'
              aria-description='Link into room detailt'
            >
              View details <ArrowRightIcon />
            </Link>

            <Button
              size='sm'
              className={cn(
                'h-8 min-w-[2.5rem] rounded-full border border-border bg-primary px-4 py-6 text-paragraph-m text-lg font-medium text-muted transition-all hover:scale-110 hover:border-secondary hover:bg-accent hover:text-muted-foreground',
              )}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;

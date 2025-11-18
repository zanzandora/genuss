import { cn, formatCurrency } from '@/lib/utils';
import Image from 'next/image';
import { ArrowRightIcon, BedDoubleIcon, Users2Icon } from 'lucide-react';
import { Badge } from '../ui/badge';
import { getOptimizedImageProps } from '@/lib/utils/imageOptimization';
import { BookNowButton } from './BookNowButton';
import { TRoom } from '@/types/room.type';
import { Link } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { useRoomTranslations } from '@/lib/utils/roomTranslations';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

type SizeCard = 'normal' | 'medium' | 'large';

type Props = {
  className?: string;
  sizeCard?: SizeCard;
  room: TRoom;
  action?: React.ReactNode;
};

/**
 * TODO: Display room card with responsive design and image optimization
 * Shows basic room information, pricing, and action buttons
 * @param className - Additional CSS classes
 * @param room - Room data object containing room details
 * @param sizeCard - Card size variant ('normal', 'medium', 'large')
 * @param action - Optional custom action component
 * @returns Room card component
 */
const RoomCard = ({ className, room, sizeCard = 'normal', action }: Props) => {
  const tRooms = useTranslations('rooms');
  const locale = useLocale();
  const { translateRoom } = useRoomTranslations();

  const gridClasses = {
    normal: 'md:col-span-1 ',
    medium: 'md:col-span-2 ',
    large: 'md:col-span-3',
  };

  const price = formatCurrency(+room.price, locale);
  const translatedRoom = translateRoom(room);

  return (
    <Card
      className={cn(
        'group relative h-full overflow-hidden rounded-xl py-0 pb-6 shadow-[8px_8px_4px_0px_#0000004D]',
        gridClasses[sizeCard],
        className,
      )}
    >
      {/* Image Section */}
      <CardHeader className='relative p-0'>
        <div className='relative aspect-[3/2] max-h-[300px] min-w-full overflow-hidden'>
          <Image
            {...getOptimizedImageProps(
              room.mainImage || room.images?.[0] || '/images/rooms/room-1.jpg',
              0,
            )}
            alt={room.slug}
            fill
            className={cn(
              getOptimizedImageProps(
                room.mainImage ||
                  room.images?.[0] ||
                  '/images/rooms/room-1.jpg',
                0,
              ).className,
              'object-cover transition-transform duration-500 ease-out',
            )}
          />

          {/* Badge Price */}
          <Badge className='absolute top-3 right-3 z-10 h-5 min-w-[5rem] rounded-sm px-3 py-4 font-mono text-sm'>
            {tRooms('price', { value: price })}
          </Badge>
        </div>
      </CardHeader>

      {/* Content Section */}
      <CardContent className='p-0 px-6'>
        <div className='flex items-start justify-between gap-4'>
          <p className='text-sm font-semibold uppercase'>
            {tRooms('room.title', { name: translatedRoom.name })}
          </p>
        </div>

        <div className='mt-3 space-y-2 text-sm font-medium'>
          <div className='flex items-start gap-2'>
            <BedDoubleIcon />
            <div className='flex flex-col'>
              {translatedRoom.bed.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <Users2Icon />
            <span>
              {tRooms('maxOccupancy', {
                maxOccupancy: room.maxOccupancy.toString(),
              })}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className='justify-between'>
        <Link
          href={`/room-detail/${room.slug}`}
          className='flex items-center gap-2 font-semibold'
          aria-description='Link into room detail'
        >
          {tRooms('viewDetails')} <ArrowRightIcon />
        </Link>

        {action || <BookNowButton room={room} />}
      </CardFooter>
    </Card>
  );
};

export default RoomCard;

'use client';

import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { TRoom } from '@/types/room.type';
import { useBookRoom } from '@/hooks/useBookRoom';
import { useTranslations } from 'next-intl';

type Props = {
  className?: string;
  onClick?: () => void;
  room?: TRoom;
  checkIn?: string;
  checkOut?: string;
};

export const BookNowButton = ({
  className,
  onClick,
  room,
  checkIn,
  checkOut,
}: Props) => {
  const tButtons = useTranslations('common.buttons');
  const { bookRoom, isLoading } = useBookRoom();

  async function handleClickDefault() {
    if (room) {
      await bookRoom(room, checkIn, checkOut);
    }
  }

  return (
    <Button
      size='sm'
      onClick={onClick || handleClickDefault}
      disabled={isLoading}
      className={cn(
        'h-8 min-w-[2.5rem] cursor-pointer rounded-full border border-border bg-primary px-4 py-6 text-paragraph-m text-lg font-medium text-muted transition-all hover:scale-110 hover:border-secondary hover:bg-accent hover:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100',
        className,
      )}
    >
      {isLoading ? (
        <div className='flex items-center gap-2'>
          <div className='h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent' />
          {tButtons('bookNow')}
        </div>
      ) : (
        tButtons('bookNow')
      )}
    </Button>
  );
};

export default BookNowButton;

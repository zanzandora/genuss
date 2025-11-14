'use client';

import { useRouter } from '@/i18n/routing';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { useRoomStore } from '@/stores/useRoomStore';
import { TRoom } from '@/types/room.type';
import { toast } from 'sonner';
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

  const router = useRouter();
  const addItem = useRoomStore((state) => state.addItem);

  function handleClickDefault() {
    if (room) {
      addItem(room, checkIn, checkOut);
      toast.success('Room added to booking!');
    }
    router.push('/booking-detail');
  }

  return (
    <Button
      size='sm'
      onClick={onClick || handleClickDefault}
      className={cn(
        'h-8 min-w-[2.5rem] cursor-pointer rounded-full border border-border bg-primary px-4 py-6 text-paragraph-m text-lg font-medium text-muted transition-all hover:scale-110 hover:border-secondary hover:bg-accent hover:text-muted-foreground',
        className,
      )}
    >
      {tButtons('bookNow')}
    </Button>
  );
};

export default BookNowButton;

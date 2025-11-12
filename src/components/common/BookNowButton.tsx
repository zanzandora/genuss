'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

type Props = {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

export const BookNowButton = ({
  className,
  onClick,
  children = 'Book Now',
}: Props) => {
  const router = useRouter();

  function handleClickDefault() {
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
      {children}
    </Button>
  );
};

export default BookNowButton;

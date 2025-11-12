'use client';

import { Button } from '../ui/button';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

type Props = {
  className?: string;
  min?: number;
  max?: number;
  initialQuantity?: number;
  onQuantityChange?: (quantity: number) => void;
};

export const QuantityBooking = ({
  className,
  min = 0,
  max = 10,
  initialQuantity = 1,
  onQuantityChange,
}: Props) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrease = () => {
    const newQuantity = Math.max(min, quantity - 1);
    setQuantity(newQuantity);
    onQuantityChange?.(newQuantity);
  };

  const handleIncrease = () => {
    const newQuantity = Math.min(max, quantity + 1);
    setQuantity(newQuantity);
    onQuantityChange?.(newQuantity);
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Button
        variant='outline'
        size='sm'
        onClick={handleDecrease}
        disabled={quantity <= min}
        className='h-8 w-8 rounded-full p-0'
      >
        <MinusIcon className='h-3 w-3' />
      </Button>

      <span className='min-w-[2rem] text-center text-paragraph-b'>
        {quantity}
      </span>

      <Button
        variant='outline'
        size='sm'
        onClick={handleIncrease}
        disabled={quantity >= max}
        className='h-8 w-8 rounded-full p-0'
      >
        <PlusIcon className='h-3 w-3' />
      </Button>
    </div>
  );
};

export default QuantityBooking;

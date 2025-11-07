'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { format } from 'date-fns';
import { TriangleIcon } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type Orientation = 'horizontal' | 'vertical';

type Props = {
  orientation?: Orientation;
  buttonClass?: string;
  className?: string;
};

export const BookingRoomForm = ({
  orientation = 'horizontal',
  className,
  buttonClass,
}: Props) => {
  const [date, setDate] = useState<Date>(new Date());

  const containerClasses =
    orientation === 'vertical'
      ? 'absolute bottom-0 my-20 flex w-full flex-col items-center justify-center gap-6'
      : 'absolute bottom-0 my-20 flex w-full items-center justify-center gap-6';

  return (
    <form className={cn(containerClasses, className)}>
      {/* Check in */}
      <Card className='w-3xs gap-0 py-2'>
        <CardHeader className='mx-3'>Check in</CardHeader>
        <CardContent>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant='outline'
                data-empty={!date}
                className='w-50 justify-between border-none text-left font-bold shadow-none data-[empty=true]:text-muted-foreground'
              >
                {format(date, 'd/MM/yyyy')}
                <TriangleIcon fill='#111111' className='rotate-180' />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0'>
              <Calendar
                mode='single'
                required
                selected={date}
                onSelect={setDate}
              />
            </PopoverContent>
          </Popover>
        </CardContent>
      </Card>

      {/* Check out */}
      <Card className='w-3xs gap-0 py-2'>
        <CardHeader className='mx-3'>Check out</CardHeader>
        <CardContent>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant='outline'
                data-empty={!date}
                className='w-50 justify-between border-none text-left font-bold shadow-none data-[empty=true]:text-muted-foreground'
              >
                {format(date, 'd/MM/yyyy')}
                <TriangleIcon fill='#111111' className='rotate-180' />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0'>
              <Calendar
                mode='single'
                required
                selected={date}
                onSelect={setDate}
              />
            </PopoverContent>
          </Popover>
        </CardContent>
      </Card>

      {/* Adult */}
      <Card className='w-3xs gap-0 py-2'>
        <CardHeader className='mx-3'>Adult</CardHeader>
        <CardContent>
          <Select>
            <SelectTrigger
              className='w-full border-none font-bold shadow-none'
              aria-label='Adult Select'
            >
              <SelectValue placeholder='1' />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 10 }, (_, i) => i + 1).map(
                (value, index) => (
                  <SelectItem key={value} value={index.toString()}>
                    {value}
                  </SelectItem>
                ),
              )}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Child */}
      <Card className='w-3xs gap-0 py-2'>
        <CardHeader className='mx-3'>Child</CardHeader>
        <CardContent>
          <Select>
            <SelectTrigger
              className='w-full border-none font-bold text-primary shadow-none'
              aria-label='Child Select'
            >
              <SelectValue placeholder='1' className='font-black' />
            </SelectTrigger>
            <SelectContent className='relative'>
              {Array.from({ length: 10 }, (_, i) => i + 1).map(
                (value, index) => (
                  <SelectItem key={value} value={index.toString()}>
                    {value}
                  </SelectItem>
                ),
              )}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Book button */}
      <Button
        size={'lg'}
        className={cn(
          'cursor-pointer rounded-xl border-4 border-border bg-transparent px-10 py-8 text-xl font-bold text-primary-foreground uppercase hover:border-primary-foreground hover:bg-primary hover:text-primary-foreground',
          buttonClass,
        )}
      >
        book rooms
      </Button>
    </form>
  );
};

export default BookingRoomForm;

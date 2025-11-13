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
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useBookingDataStore } from '@/stores/useBookingDataStore';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

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
  const bookingData = useBookingDataStore((state) => state.bookingData);
  const setCheckIn = useBookingDataStore((state) => state.setCheckIn);
  const setCheckOut = useBookingDataStore((state) => state.setCheckOut);
  const setAdultCount = useBookingDataStore((state) => state.setAdultCount);
  const setChildCount = useBookingDataStore((state) => state.setChildCount);

  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isBookingDetail = pathname === '/booking-detail';

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
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                type='button'
                variant='outline'
                data-empty={!bookingData.checkIn}
                className='w-50 justify-between border-none text-left font-bold shadow-none data-[empty=true]:text-muted-foreground'
              >
                {bookingData.checkIn
                  ? format(bookingData.checkIn, 'd/MM/yyyy')
                  : 'Select date'}
                <TriangleIcon fill='#111111' className='rotate-180' />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0'>
              <Calendar
                mode='single'
                required
                selected={bookingData.checkIn || undefined}
                onSelect={(date) => {
                  setCheckIn(date || null);
                  setOpen(false);
                }}
                disabled={(date) => date < new Date()}
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
                data-empty={!bookingData.checkOut}
                className='w-50 justify-between border-none text-left font-bold shadow-none data-[empty=true]:text-muted-foreground'
              >
                {bookingData.checkOut
                  ? format(bookingData.checkOut, 'd/MM/yyyy')
                  : 'Select date'}
                <TriangleIcon fill='#111111' className='rotate-180' />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0'>
              <Calendar
                mode='single'
                required
                selected={bookingData.checkOut || undefined}
                onSelect={(date) => {
                  setCheckOut(date || null);
                  setOpen(false);
                }}
                disabled={(date) => date < (bookingData.checkIn || new Date())}
              />
            </PopoverContent>
          </Popover>
        </CardContent>
      </Card>

      {/* Adult */}
      <Card className='w-3xs gap-0 py-2'>
        <CardHeader className='mx-3'>Adult</CardHeader>
        <CardContent>
          <Select
            value={bookingData.adultCount || '1'}
            onValueChange={(value) => setAdultCount(value)}
          >
            <SelectTrigger
              className='w-full border-none font-bold shadow-none'
              aria-label='Adult Select'
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 10 }, (_, i) => i + 1).map((value) => (
                <SelectItem key={value} value={value.toString()}>
                  {value.toString()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Child */}
      <Card className='w-3xs gap-0 py-2'>
        <CardHeader className='mx-3'>Child</CardHeader>
        <CardContent>
          <Select
            value={bookingData.childCount !== '' ? bookingData.childCount : '0'}
            onValueChange={(value) => setChildCount(value)}
          >
            <SelectTrigger
              className='w-full border-none font-bold text-primary shadow-none'
              aria-label='Child Select'
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className='relative'>
              {Array.from({ length: 10 }, (_, i) => i).map((value) => (
                <SelectItem key={value} value={value.toString()}>
                  {value.toString()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Book / Complete button */}
      {isBookingDetail ? (
        <Link href={'/booking-detail/#Contact'}>
          <Button
            size='lg'
            className={cn(
              'cursor-pointer rounded-xl border-4 border-border bg-primary px-10 py-8 text-xl font-bold text-primary-foreground uppercase hover:border-primary hover:bg-primary/80 hover:text-primary-foreground',
            )}
          >
            Complete Book Now
          </Button>
        </Link>
      ) : (
        <Link href={pathname === '/booking' ? '/booking-detail' : '/booking'}>
          <Button
            size='lg'
            type='button'
            className={cn(
              'cursor-pointer rounded-xl border-4 border-border bg-transparent px-10 py-8 text-xl font-bold text-primary-foreground uppercase hover:border-primary-foreground hover:bg-primary hover:text-primary-foreground',
              buttonClass,
            )}
          >
            Book Rooms
          </Button>
        </Link>
      )}
    </form>
  );
};

export default BookingRoomForm;

'use client';

import { BookingDetailsColumns } from '@/components/sections/tables/booking-details/BookingDetailsColumns';
import { BookingDetailsDataTable } from '@/components/sections/tables/booking-details/BookingDetailsDataTable';
import { formatCurrency } from '@/lib/utils';
import { useRoomStore } from '@/stores/useRoomStore';
import { BookingPanel } from '../../room/booking-panel/BookingPanel';
import ContactForm from '../../contact/ContactForm';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

const BookingDetailsContent = () => {
  const tBookingDetails = useTranslations('bookingDetails');

  const items = useRoomStore((state) => state.items);
  const totalPrice = useRoomStore((state) => state.getTotalPrice());
  const initializeAllRooms = useRoomStore((state) => state.initializeAllRooms);
  const totalRooms = useRoomStore((state) => state.getTotalRooms());

  useEffect(() => {
    // Initialize all rooms if store is empty
    if (items.length === 0) {
      initializeAllRooms();
    }
  }, [items.length, initializeAllRooms]);

  return (
    <div className='mx-auto mb-16 max-w-6xl'>
      <div className='mb-24 grid grid-cols-1 gap-8 lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <BookingDetailsDataTable
            columns={BookingDetailsColumns()}
            data={items}
          />

          <div className='bg mt-4 rounded-lg border p-4 text-right'>
            <div className='text-lg font-semibold'>
              {tBookingDetails('totalPrice')}:{' '}
              {totalRooms > 0 ? formatCurrency(totalPrice) : 0}
            </div>
          </div>
        </div>

        <BookingPanel />
      </div>

      <ContactForm requireBookingData={true} />
    </div>
  );
};

export default BookingDetailsContent;

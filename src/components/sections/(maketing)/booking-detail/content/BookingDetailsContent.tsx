'use client';

import { BookingDetailsColumns } from '@/components/sections/tables/booking-details/BookingDetailsColumns';
import { BookingDetailsDataTable } from '@/components/sections/tables/booking-details/BookingDetailsDataTable';
import { formatCurrency } from '@/lib/utils';
import { useRoomStore } from '@/stores/useRoomStore';
import { BookingPanel } from '../../room/booking-panel/BookingPanel';
import ContactForm from '../../contact/ContactForm';

const BookingDetailsContent = () => {
  const items = useRoomStore((state) => state.items);
  const getTotalPrice = useRoomStore((state) => state.getTotalPrice);
  return (
    <div className='mx-auto mb-16 max-w-6xl'>
      <div className='mb-24 grid grid-cols-1 gap-8 lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <BookingDetailsDataTable
            columns={BookingDetailsColumns}
            data={items}
          />

          {items.length > 0 && (
            <div className='bg mt-4 rounded-lg border p-4 text-right'>
              <div className='text-lg font-semibold'>
                Total Price: {formatCurrency(getTotalPrice())}
              </div>
            </div>
          )}
        </div>

        <BookingPanel />
      </div>

      <ContactForm requireBookingData={true} />
    </div>
  );
};

export default BookingDetailsContent;

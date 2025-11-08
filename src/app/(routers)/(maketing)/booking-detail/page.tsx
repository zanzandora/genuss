import { BackToTopButton } from '@/components/common/BackToTopButton';
import NormalBanner from '@/components/sections/(maketing)/banner/NomalBanner';
import ContactForm from '@/components/sections/(maketing)/contact/ContactForm';
import { BookingPanel } from '@/components/sections/(maketing)/room/booking-panel/BookingPanel';
import { BookingDetailsColumns } from '@/components/sections/tables/booking-details/BookingDetailsColumns';
import { BookingDetailsDataTable } from '@/components/sections/tables/booking-details/BookingDetailsDataTable';
import { BookingDetailsData } from '@/lib/mock/BookingDetailsData';

const BookingDetailsPage = async () => {
  const data = await BookingDetailsData();
  return (
    <div>
      <NormalBanner title='Booking Details' />

      <div className='mx-auto mb-16 max-w-6xl'>
        <div className='mb-24 grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <div className='lg:col-span-2'>
            <BookingDetailsDataTable
              columns={BookingDetailsColumns}
              data={data}
            />
          </div>

          <BookingPanel useTabsTwo={false} />
        </div>

        <ContactForm />
      </div>

      <BackToTopButton />
    </div>
  );
};

export default BookingDetailsPage;

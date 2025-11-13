import { BackToTopButton } from '@/components/common/BackToTopButton';
import NormalBanner from '@/components/sections/(maketing)/banner/NomalBanner';
import BookingDetailsContent from '@/components/sections/(maketing)/booking-detail/content/BookingDetailsContent';

const BookingDetailsPage = () => {
  return (
    <div>
      <NormalBanner title='Booking Details' />

      <BookingDetailsContent />

      <BackToTopButton />
    </div>
  );
};

export default BookingDetailsPage;

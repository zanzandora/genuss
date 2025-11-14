import { BackToTopButton } from '@/components/common/BackToTopButton';
import NormalBanner from '@/components/sections/(maketing)/banner/NomalBanner';
import BookingDetailsContent from '@/components/sections/(maketing)/booking-detail/content/BookingDetailsContent';
import { useTranslations } from 'next-intl';

const BookingDetailsPage = () => {
  const tMenu = useTranslations('menu');

  return (
    <div>
      <NormalBanner title={tMenu('bookingDetails')} />

      <BookingDetailsContent />

      <BackToTopButton />
    </div>
  );
};

export default BookingDetailsPage;

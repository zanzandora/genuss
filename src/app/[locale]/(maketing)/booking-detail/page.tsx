import { BackToTopButton } from '@/components/common/BackToTopButton';
import NormalBanner from '@/components/sections/(maketing)/banner/NomalBanner';
import BookingDetailsContent from '@/components/sections/(maketing)/booking-detail/content/BookingDetailsContent';
import { generateSEOMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generateSEOMetadata('booking-detail', locale, {
    canonical: '/booking-detail',
  });
}

const BookingDetailsPage = () => {
  // const tMenu = useTranslations('menu');

  return (
    <div>
      <NormalBanner />

      <BookingDetailsContent />

      <BackToTopButton />
    </div>
  );
};

export default BookingDetailsPage;

import { BackToTopButton } from '@/components/common/BackToTopButton';
import BookingList from '@/components/common/BookingList';
import NormalBanner from '@/components/sections/(maketing)/banner/NomalBanner';
import { BookingPanel } from '@/components/sections/(maketing)/room/booking-panel/BookingPanel';
import { getRoomDatas } from '@/lib/action/getRooms';
import { generateSEOMetadata } from '@/lib/seo';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generateSEOMetadata('booking', locale, {
    canonical: '/booking',
  });
}

const BookingPage = async () => {
  const rooms = await getRoomDatas();

  return (
    <section>
      <NormalBanner imageSrc='/images/normal-banner-6.webp' />

      <div className='mx-auto mb-16 max-w-4xl'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <div className='lg:col-span-2'>
            <BookingList rooms={rooms} />
          </div>

          <BookingPanel />
        </div>
      </div>

      <BackToTopButton />
    </section>
  );
};

export default BookingPage;

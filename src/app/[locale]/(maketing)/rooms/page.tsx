import { BackToTopButton } from '@/components/common/BackToTopButton';
import NormalBanner from '@/components/sections/(maketing)/banner/NomalBanner';
import RoomCards from '@/components/sections/(maketing)/rooms/RoomCards';
import { generateSEOMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generateSEOMetadata('rooms', locale, {
    canonical: '/rooms',
  });
}

const RoomsPage = () => {
  // const tMenu = useTranslations('menu');

  return (
    <div>
      <NormalBanner />

      <RoomCards />

      <BackToTopButton />
    </div>
  );
};

export default RoomsPage;

import NormalBanner from '@/components/sections/(maketing)/banner/NomalBanner';
import RoomDetailsContent from '@/components/sections/(maketing)/room/content/RoomDetailsContent';
import { getRoomBySlugWithImages } from '@/lib/action/getRooms';
import { generateSEOMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  const room = await getRoomBySlugWithImages(slug);

  return generateSEOMetadata('room-detail', locale, {
    canonical: `/rooms/${slug}`,
    imagePath: room?.mainImage,
  });
}

const RoomDetailsPage = async ({
  params,
}: {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}) => {
  const tMenu = await getTranslations('menu');

  const { slug } = await params;

  return (
    <section>
      <NormalBanner title={tMenu('roomDetails')} />

      <RoomDetailsContent slug={slug} />
    </section>
  );
};

export default RoomDetailsPage;

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

  // ✅ Server-side translation
  const tRoom = await getTranslations('rooms.room');
  const translatedRoomName = tRoom(`name.${room?.slug}` as never);

  return generateSEOMetadata('room-detail', locale, {
    roomName: translatedRoomName,
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
  const { slug } = await params;

  const room = await getRoomBySlugWithImages(slug);

  const tRoom = await getTranslations('rooms.room');
  const translatedRoomName = tRoom(`name.${room?.slug}` as never);

  return (
    <section>
      <NormalBanner title={translatedRoomName} />

      <RoomDetailsContent slug={slug} />
    </section>
  );
};

export default RoomDetailsPage;

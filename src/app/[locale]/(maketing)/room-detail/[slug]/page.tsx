import NormalBanner from '@/components/sections/(maketing)/banner/NomalBanner';
import RoomDetailsContent from '@/components/sections/(maketing)/room/content/RoomDetailsContent';
import { getRoomBySlugWithImages } from '@/lib/action/getRooms';
import { generateSEOMetadata } from '@/lib/seo';
import {
  generateRoomStructuredData,
  generateBreadcrumbStructuredData,
} from '@/lib/seo/structured-data';
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
  const { locale, slug } = await params;

  const room = await getRoomBySlugWithImages(slug);

  const tRoom = await getTranslations('rooms.room');
  const translatedRoomName = tRoom(`name.${room?.slug}` as never);
  const tMenu = await getTranslations('menu');

  // Generate structured data
  const roomStructuredData = room
    ? generateRoomStructuredData(
        {
          name: translatedRoomName,
          slug: room.slug,
          description: room.description || '',
          price: room.price,
          area: room.area,
          maxOccupancy: room.maxOccupancy,
          bed: room.bed,
          view: room.view,
          images: room.images,
        },
        locale,
      )
    : null;

  // Generate breadcrumb structured data
  const breadcrumbs = [
    { name: tMenu('home'), url: '/' },
    { name: tMenu('rooms'), url: '/rooms' },
    { name: translatedRoomName, url: `/rooms/${slug}` },
  ];

  const breadcrumbStructuredData = generateBreadcrumbStructuredData(
    breadcrumbs,
    locale,
  );

  return (
    <>
      {/* Room structured data */}
      {roomStructuredData && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(roomStructuredData, null, 2),
          }}
        />
      )}

      {/* Breadcrumb structured data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData, null, 2),
        }}
      />

      <section>
        <NormalBanner title={translatedRoomName} />

        <RoomDetailsContent slug={slug} />
      </section>
    </>
  );
};

export default RoomDetailsPage;

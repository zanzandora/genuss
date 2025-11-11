import { AmenitiesGrid } from '../AmenitiesGrid';
import { HotelRules } from '../HotelRules';
import { RoomFeatures } from '../RoomFeatures';
import RoomTitleSection from '../RoomTitleSection';
import { Separator } from '@/components/ui/separator';
import { hotelAmenities, hotelRules, roomAmenities } from '@/lib/mock';
import { getRoomBySlugWithImages, getRoomDatas } from '@/lib/action/getRooms';
import { formatCurrency } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { RoomGallery } from '../RoomGallery';
import RoomRecommends from '../RoomRecommends';
import { BackToTopButton } from '@/components/common/BackToTopButton';
import { BookingPanel } from '../booking-panel/BookingPanel';

export default async function RoomDetailsContent({ slug }: { slug: string }) {
  const [room, allRooms] = await Promise.all([
    getRoomBySlugWithImages(slug),
    getRoomDatas(),
  ]);

  if (!room) {
    notFound();
  }

  return (
    <div>
      <div className='mx-auto mb-16 max-w-6xl'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <main className='space-y-8 lg:col-span-2'>
            <RoomTitleSection
              title={room.name}
              subtitle={room.features?.join(', ') || ''}
              price={formatCurrency(+room.price)}
            />

            <Separator className='bg-gray-500' />

            <RoomFeatures room={room} />

            <Separator className='bg-gray-500' />

            {/* Room Amenities */}
            <AmenitiesGrid amenities={roomAmenities} title='Room amenities' />

            <br />

            {/* Hotel Amenities */}
            <AmenitiesGrid amenities={hotelAmenities} title='Hotel amenities' />

            <Separator className='bg-gray-500' />

            <HotelRules rules={hotelRules} />
          </main>

          {/* Sidebar - Booking Panel */}
          <BookingPanel />
        </div>
      </div>
      <RoomGallery room={room} />

      <RoomRecommends rooms={allRooms} currentSlug={slug} />

      <BackToTopButton />
    </div>
  );
}

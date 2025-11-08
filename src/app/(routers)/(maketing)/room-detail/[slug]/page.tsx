import { BackToTopButton } from '@/components/common/BackToTopButton';
import NormalBanner from '@/components/sections/(maketing)/banner/NomalBanner';
import { AmenitiesGrid } from '@/components/sections/(maketing)/room/AmenitiesGrid';
import { BookingPanel } from '@/components/sections/(maketing)/room/booking-panel/BookingPanel';
import { HotelRules } from '@/components/sections/(maketing)/room/HotelRules';
import { RoomFeatures } from '@/components/sections/(maketing)/room/RoomFeatures';
import { RoomGallery } from '@/components/sections/(maketing)/room/RoomGallery';
import RoomRecommends from '@/components/sections/(maketing)/room/RoomRecommends';
import RoomTitleSection from '@/components/sections/(maketing)/room/RoomTitleSection';
import { Separator } from '@/components/ui/separator';
import { hotelAmenities, hotelRules, roomAmenities } from '@/lib/mock';

const page = () => {
  return (
    <section>
      <NormalBanner title='Room Details' />

      <div className='mx-auto mb-16 max-w-6xl'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <main className='space-y-8 lg:col-span-2'>
            <RoomTitleSection
              title='Superior Double Room'
              subtitle='Room Features'
              price={35}
            />

            <Separator className='bg-gray-500' />

            <RoomFeatures />

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
      <RoomGallery />

      <RoomRecommends />

      <BackToTopButton />
    </section>
  );
};

export default page;

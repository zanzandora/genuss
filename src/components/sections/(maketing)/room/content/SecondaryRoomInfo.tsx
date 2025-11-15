import { AmenitiesGrid } from '../AmenitiesGrid';
import { HotelRules } from '../HotelRules';
import { Separator } from '@/components/ui/separator';
import { hotelAmenities, hotelRules, roomAmenities } from '@/lib/mock';

export function SecondaryRoomInfo() {
  return (
    <div className='space-y-8'>
      <Separator className='bg-gray-500' />

      {/* Room Amenities */}
      <AmenitiesGrid amenities={roomAmenities} title='Tiện nghi phòng' />

      <br />

      {/* Hotel Amenities */}
      <AmenitiesGrid amenities={hotelAmenities} title='Tiện nghi khách sạn' />

      <Separator className='bg-gray-500' />

      <HotelRules rules={hotelRules} />
    </div>
  );
}

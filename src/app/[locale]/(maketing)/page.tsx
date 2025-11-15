import HeaderSection from '@/components/sections/(maketing)/home/HeaderSection';
import FamousFacilitiesSection from '@/components/sections/(maketing)/facilities/FamousFacilitiesSection';
import HotelFacilitiesSection from '@/components/sections/(maketing)/facilities/HotelFacilitiesSection';
import OurRoomSection from '@/components/sections/(maketing)/home/main-content/OurRoomSection';
import { SummarySection } from '@/components/sections/(maketing)/home/main-content/SummarySection';
import TestimonialsSection from '@/components/sections/(maketing)/home/main-content/TestimonialsSection';
import { BackToTopButton } from '@/components/common/BackToTopButton';
import { getRoomDatas } from '@/lib/action/getRooms';

export default async function Home() {
  const rooms = await getRoomDatas();

  return (
    <div>
      <HeaderSection />

      <SummarySection />

      <OurRoomSection rooms={rooms} />

      <HotelFacilitiesSection />

      <FamousFacilitiesSection />

      <TestimonialsSection />

      <BackToTopButton />
    </div>
  );
}

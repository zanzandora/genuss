import HeaderSection from '@/components/sections/(maketing)/home/HeaderSection';
import FamousFacilitiesSection from '@/components/sections/(maketing)/facilities/FamousFacilitiesSection';
import HotelFacilitiesSection from '@/components/sections/(maketing)/facilities/HotelFacilitiesSection';
import NewLetterSection from '@/components/sections/(maketing)/home/main-content/NewLetterSection';
import OurRoomSection from '@/components/sections/(maketing)/home/main-content/OurRoomSection';
import { SummarySection } from '@/components/sections/(maketing)/home/main-content/SummarySection';
import TestimonialsSectino from '@/components/sections/(maketing)/home/main-content/TestimonialsSectino';
import { BackToTopButton } from '@/components/common/BackToTopButton';
import { getRooms } from '@/lib/action/getRooms';

export default async function Home() {
  const rooms = await getRooms();

  return (
    <div>
      <HeaderSection />

      <SummarySection />

      <OurRoomSection rooms={rooms} />

      <HotelFacilitiesSection />

      <FamousFacilitiesSection />

      <TestimonialsSectino />

      <NewLetterSection />

      <BackToTopButton />
    </div>
  );
}

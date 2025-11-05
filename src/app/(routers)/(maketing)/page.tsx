import HeaderSection from '@/components/sections/(maketing)/home/HeaderSection';
import FamousFacilitiesSection from '@/components/sections/(maketing)/home/main-content/facilities/FamousFacilitiesSection';
import HotelFacilitiesSection from '@/components/sections/(maketing)/home/main-content/facilities/HotelFacilitiesSection';
import NewLetterSection from '@/components/sections/(maketing)/home/main-content/NewLetterSection';
import OurRoomSection from '@/components/sections/(maketing)/home/main-content/OurRoomSection';
import { SummarySection } from '@/components/sections/(maketing)/home/main-content/SummarySection';
import TestimonialsSectino from '@/components/sections/(maketing)/home/main-content/TestimonialsSectino';

export default function Home() {
  return (
    <main className='p-4'>
      <HeaderSection />

      <SummarySection />

      <OurRoomSection />

      <HotelFacilitiesSection />

      <FamousFacilitiesSection />

      <TestimonialsSectino />

      <NewLetterSection />
    </main>
  );
}

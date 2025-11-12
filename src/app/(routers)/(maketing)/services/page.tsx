import { BackToTopButton } from '@/components/common/BackToTopButton';
import NormalBanner from '@/components/sections/(maketing)/banner/NomalBanner';
import FamousFacilitiesSection from '@/components/sections/(maketing)/facilities/FamousFacilitiesSection';

const ServicesPage = () => {
  return (
    <div>
      <NormalBanner title='Service' />

      <FamousFacilitiesSection />

      <BackToTopButton />
    </div>
  );
};

export default ServicesPage;

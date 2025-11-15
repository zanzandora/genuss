import { BackToTopButton } from '@/components/common/BackToTopButton';
import NormalBanner from '@/components/sections/(maketing)/banner/NomalBanner';
import FamousFacilitiesSection from '@/components/sections/(maketing)/facilities/FamousFacilitiesSection';
import { useTranslations } from 'next-intl';

const ServicesPage = () => {
  const tMenu = useTranslations('menu');

  return (
    <div>
      <NormalBanner title={tMenu('services')} />

      <FamousFacilitiesSection />

      <BackToTopButton />
    </div>
  );
};

export default ServicesPage;

import { BackToTopButton } from '@/components/common/BackToTopButton';
import NormalBanner from '@/components/sections/(maketing)/banner/NomalBanner';
import FamousFacilitiesSection from '@/components/sections/(maketing)/facilities/FamousFacilitiesSection';
import { generateSEOMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generateSEOMetadata('services', locale, {
    canonical: '/services',
  });
}

const ServicesPage = () => {
  return (
    <div>
      <NormalBanner imageSrc='/images/normal-banner-6.webp' />

      <FamousFacilitiesSection />

      <BackToTopButton />
    </div>
  );
};

export default ServicesPage;

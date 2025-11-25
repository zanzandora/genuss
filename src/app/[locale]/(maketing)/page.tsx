import HeaderSection from '@/components/sections/(maketing)/home/HeaderSection';
import FamousFacilitiesSection from '@/components/sections/(maketing)/facilities/FamousFacilitiesSection';
import HotelFacilitiesSection from '@/components/sections/(maketing)/facilities/HotelFacilitiesSection';
import OurRoomSection from '@/components/sections/(maketing)/home/main-content/OurRoomSection';
import { SummarySection } from '@/components/sections/(maketing)/home/main-content/SummarySection';
import TestimonialsSection from '@/components/sections/(maketing)/home/main-content/TestimonialsSection';
import { BackToTopButton } from '@/components/common/BackToTopButton';
import { getRoomDatas } from '@/lib/action/getRooms';
import IntroduceSection from '@/components/sections/(maketing)/home/main-content/IntroduceSection';
import { Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/seo';
import {
  generateLocalBusinessStructuredData,
  generateBreadcrumbStructuredData,
} from '@/lib/seo/structured-data';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generateSEOMetadata('home', locale, {
    imagePath: '/images/genuss-logo.png',
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}${locale === 'vi' ? '' : '/en'}`,
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const rooms = await getRoomDatas();
  const tMenu = await getTranslations('menu');

  // Generate structured data for home page
  const localBusinessStructuredData =
    generateLocalBusinessStructuredData(locale);
  const breadcrumbs = [{ name: tMenu('home'), url: '/' }];

  return (
    <>
      {/* Home page specific structured data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessStructuredData, null, 2),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbStructuredData(breadcrumbs, locale),
            null,
            2,
          ),
        }}
      />

      <div>
        <HeaderSection />

        <IntroduceSection />

        <SummarySection />

        <OurRoomSection rooms={rooms} />

        <HotelFacilitiesSection />

        <FamousFacilitiesSection />

        <TestimonialsSection />

        <BackToTopButton />
      </div>
    </>
  );
}

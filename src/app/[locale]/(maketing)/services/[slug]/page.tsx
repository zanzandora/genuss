import { BackToTopButton } from '@/components/common/BackToTopButton';
import NormalBanner from '@/components/sections/(maketing)/banner/NomalBanner';
import ServiceContent from '@/components/sections/(maketing)/services/ServiceContent';
import {
  getServiceBySlugWithImages,
  getOtherServicesWithImages,
} from '@/lib/action/getServices';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/seo';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  const service = await getServiceBySlugWithImages(slug);

  return generateSEOMetadata('service-detail', locale, {
    canonical: `/services/${slug}`,
    imagePath: service?.imageSrc || '/images/genuss-logo.png',
  });
}

const ServicePage = async ({ params }: ServicePageProps) => {
  const { slug } = await params;
  const service = await getServiceBySlugWithImages(slug);

  if (!service) {
    notFound();
  }

  const otherServices = await getOtherServicesWithImages(slug);
  const tServices = await getTranslations('services');
  const title = tServices(service.titleKey);

  return (
    <div>
      <NormalBanner title={title} imageSrc={service.imageSrc} />

      <ServiceContent service={service} otherServices={otherServices} />

      <BackToTopButton />
    </div>
  );
};

export default ServicePage;

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
import {
  generateServiceStructuredData,
  generateBreadcrumbStructuredData,
} from '@/lib/seo/structured-data';

interface ServicePageProps {
  params: Promise<{
    slug: string;
    locale: string;
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

  const tServices = await getTranslations('services');
  const serviceName = tServices(service?.titleKey as never);
  const serviceSubName = tServices(service?.subTitleKey as never);

  return generateSEOMetadata('service-detail', locale, {
    serviceName,
    title: serviceSubName,
    canonical: `/services/${slug}`,
    imagePath: service?.imageSrc || '/favicon.ico',
  });
}

const ServicePage = async ({ params }: ServicePageProps) => {
  const { slug, locale } = await params;
  const service = await getServiceBySlugWithImages(slug);

  if (!service) {
    notFound();
  }

  const otherServices = await getOtherServicesWithImages(slug);
  const tServices = await getTranslations('services');
  const tMenu = await getTranslations('menu');
  const title = tServices(service.titleKey);

  // Generate service structured data
  const serviceStructuredData = generateServiceStructuredData(
    {
      name: title,
      slug: service.slug,
      description: service.descriptionKey,
      type: service.slug,
      image: service.imageSrc,
    },
    locale,
  );

  // Generate breadcrumb structured data
  const breadcrumbs = [
    { name: tMenu('home'), url: '/' },
    { name: tMenu('services'), url: '/services' },
    { name: title, url: `/services/${slug}` },
  ];

  const breadcrumbStructuredData = generateBreadcrumbStructuredData(
    breadcrumbs,
    locale,
  );

  return (
    <>
      {/* Service structured data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData, null, 2),
        }}
      />

      {/* Breadcrumb structured data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData, null, 2),
        }}
      />

      <div>
        <NormalBanner title={title} imageSrc={service.imageSrc} />

        <ServiceContent service={service} otherServices={otherServices} />

        <BackToTopButton />
      </div>
    </>
  );
};

export default ServicePage;

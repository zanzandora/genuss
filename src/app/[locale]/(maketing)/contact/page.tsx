import { BackToTopButton } from '@/components/common/BackToTopButton';
import NormalBanner from '@/components/sections/(maketing)/banner/NomalBanner';
import ContactForm from '@/components/sections/(maketing)/contact/ContactForm';
import ContactInfo from '@/components/sections/(maketing)/contact/ContactInfo';
import ContactOfficerAddress from '@/components/sections/(maketing)/contact/ContactOfficerAddress';
import { useTranslations } from 'next-intl';
import { generateSEOMetadata } from '@/lib/seo/metadata';
import { generateBreadcrumbStructuredData } from '@/lib/seo/structured-data';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generateSEOMetadata('contact', locale, {
    imagePath: '/favicon.ico',
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}${locale === 'vi' ? '' : '/en'}/contact`,
  });
}

const ContactPage = () => {
  const tMenu = useTranslations('menu');

  // Generate breadcrumb structured data
  const breadcrumbs = [
    { name: tMenu('home'), url: '/' },
    { name: tMenu('contact'), url: '/contact' },
  ];

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbStructuredData(breadcrumbs, 'vi'), // This should be dynamic based on locale
            null,
            2,
          ),
        }}
      />

      <div>
        <NormalBanner />

        <ContactOfficerAddress />

        <ContactForm />

        <ContactInfo />

        <BackToTopButton />
      </div>
    </>
  );
};

export default ContactPage;

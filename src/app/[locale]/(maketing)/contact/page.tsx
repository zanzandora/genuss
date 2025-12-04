import { BackToTopButton } from '@/components/common/BackToTopButton';
import NormalBanner from '@/components/sections/(maketing)/banner/NomalBanner';
import ContactForm from '@/components/sections/(maketing)/contact/ContactForm';
import ContactInfo from '@/components/sections/(maketing)/contact/ContactInfo';
import ContactOfficerAddress from '@/components/sections/(maketing)/contact/ContactOfficerAddress';
import { generateSEOMetadata } from '@/lib/seo/metadata';
import {
  generateBreadcrumbStructuredData,
  generateLocalBusinessStructuredData,
  generateFAQStructuredData,
} from '@/lib/seo/structured-data';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generateSEOMetadata('contact', locale, {
    imagePath: '/logo/og-image.jpg',
  });
}

const ContactPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const tMenu = await getTranslations('menu');

  // Generate breadcrumb structured data
  const breadcrumbs = [
    { name: tMenu('home'), url: '/' },
    { name: tMenu('contact'), url: '/contact' },
  ];

  const breadcrumbStructuredData = generateBreadcrumbStructuredData(
    breadcrumbs,
    locale,
  );

  // Generate local business structured data
  const localBusinessStructuredData =
    generateLocalBusinessStructuredData(locale);

  // Generate FAQ structured data (example FAQs - you can customize these)
  const faqs = [
    {
      question:
        locale === 'en'
          ? 'What are the check-in and check-out times?'
          : 'Giờ nhận và trả phòng là bao nhiêu?',
      answer:
        locale === 'en'
          ? 'Check-in time is from 2:00 PM and check-out time is until 12:00 PM.'
          : 'Thời gian nhận phòng từ 2:00 chiều và trả phòng trước 12:00 trưa.',
    },
    {
      question:
        locale === 'en'
          ? 'Is parking available at the hotel?'
          : 'Khách sạn có chỗ đậu xe không?',
      answer:
        locale === 'en'
          ? 'Yes, we offer free parking for all our guests.'
          : 'Có, chúng tôi cung cấp chỗ đậu xe miễn phí cho tất cả khách hàng.',
    },
    {
      question:
        locale === 'en'
          ? 'Do you offer airport shuttle service?'
          : 'Khách sạn có dịch vụ đưa đón sân bay không?',
      answer:
        locale === 'en'
          ? 'Yes, we provide airport shuttle service upon request. Please contact us in advance to arrange.'
          : 'Có, chúng tôi cung cấp dịch vụ đưa đón sân bay khi có yêu cầu. Vui lòng liên hệ trước để sắp xếp.',
    },
  ];

  const faqStructuredData = generateFAQStructuredData(faqs);

  return (
    <>
      {/* Breadcrumb structured data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData, null, 2),
        }}
      />

      {/* Local Business structured data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessStructuredData, null, 2),
        }}
      />

      {/* FAQ structured data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData, null, 2),
        }}
      />

      <div>
        <NormalBanner imageSrc='/images/normal-banner-5.webp' />

        <ContactOfficerAddress />

        <ContactForm />

        <ContactInfo />

        <BackToTopButton />
      </div>
    </>
  );
};

export default ContactPage;

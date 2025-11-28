import type {
  HotelStructuredData,
  RoomStructuredData,
  ServiceStructuredData,
  BreadcrumbStructuredData,
} from '@/types/seo.type';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://genuss-hotel.vn';
const HOTEL_NAME = 'Genuss Hotel Tam Dao';
const HOTEL_PHONE = '+84-XXX-XXX-XXXX'; // Update with actual phone
const HOTEL_EMAIL = 'info@genuss-hotel.vn'; // Update with actual email

export function generateHotelStructuredData(
  locale: string = 'vi',
): HotelStructuredData {
  const isEnglish = locale === 'en';

  return {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: HOTEL_NAME,
    description: isEnglish
      ? `${HOTEL_NAME} - Modern mountain retreat in the heart of Tam Dao. Experience luxury accommodation with stunning views, outdoor pool, conference facilities, and exceptional service in Phu Tho, Vietnam.`
      : `${HOTEL_NAME} - Nơi nghỉ dưỡng hiện đại giữa lòng Tam Đảo. Trải nghiệm lưu trú sang trọng với tầm nhìn tuyệt đẹp, hồ bơi ngoài trời, tiện ích hội nghị và dịch vụ đẳng cấp tại Phú Thọ.`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Zone 1, Tam Dao commune',
      addressLocality: 'Tam Dao',
      addressRegion: 'Phu Tho',
      addressCountry: 'Vietnam',
    },
    telephone: HOTEL_PHONE,
    email: HOTEL_EMAIL,
    url: SITE_URL,
    starRating: '4',
    priceRange: isEnglish ? '$$ - $$$' : '1.500.000 - 8.000.000 VND',
    amenity: [
      'Outdoor Swimming Pool',
      'Fitness Center',
      'Restaurant',
      'Conference Room',
      'Free Wi-Fi',
      'Air Conditioning',
      '24/7 Service',
      'Mountain View',
      'Sauna',
      'Parking',
    ],
    image: [
      `${SITE_URL}/favicon.ico`,
      `${SITE_URL}/images/banner/slide-banner-4.webp`,
      `${SITE_URL}/images/facilities/swimming-pool-service.webp`,
    ],
    sameAs: [
      // Add social media URLs when available
    ],
  };
}

export function generateRoomStructuredData(
  room: {
    name: string;
    slug: string;
    description: string;
    price: string;
    area: number;
    maxOccupancy: number;
    bed: string[];
    view: string[];
    images?: string[];
  },
  locale: string = 'vi',
): RoomStructuredData {
  const isEnglish = locale === 'en';
  const roomType = room.name.toLowerCase().includes('suite')
    ? 'Suite'
    : 'HotelRoom';

  // Convert price from VND to USD for international
  const priceInVND = parseInt(room.price);
  const priceInUSD = Math.round(priceInVND / 25000); // Approximate conversion rate

  return {
    '@context': 'https://schema.org',
    '@type': roomType,
    name: room.name,
    description: room.description,
    bed: {
      '@type': 'Bed',
      type: room.bed.join(', '),
      quantity: room.bed.length,
    },
    occupancy: room.maxOccupancy,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: room.area,
      unitCode: 'MTK',
    },
    amenity: [
      'Air Conditioning',
      'Free Wi-Fi',
      'Flat-screen TV',
      'Mini Bar',
      'Private Bathroom',
      room.view.join(' View'),
    ].filter(Boolean),
    offers: {
      '@type': 'Offer',
      price: isEnglish
        ? `$${priceInUSD}`
        : `${priceInVND.toLocaleString('vi-VN')} VND`,
      priceCurrency: isEnglish ? 'USD' : 'VND',
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString(),
    },
    photo: room.images || [
      `${SITE_URL}/images/main-rooms/${room.slug}/${room.slug}_1.png`,
    ],
  };
}

export function generateServiceStructuredData(
  service: {
    name: string;
    slug: string;
    description: string;
    type: 'dinning' | 'event' | 'recreation' | 'swimming';
    image?: string;
  },
  locale: string = 'vi',
): ServiceStructuredData {
  const isEnglish = locale === 'en';

  const serviceNames = {
    dinning: {
      en: 'Restaurant & Dining Service',
      vi: 'Dịch vụ Nhà hàng & Ẩm thực',
    },
    event: {
      en: 'Conference & Event Service',
      vi: 'Dịch vụ Hội nghị & Sự kiện',
    },
    recreation: {
      en: 'Recreation & Wellness Service',
      vi: 'Dịch vụ Giải trí & Wellness',
    },
    swimming: {
      en: 'All-Year Outdoor Swimming Pool',
      vi: 'Hồ bơi ngoài trời quanh năm',
    },
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceNames[service.type][isEnglish ? 'en' : 'vi'],
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: HOTEL_NAME,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Place',
      name: 'Tam Dao, Phu Tho, Vietnam',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: serviceNames[service.type][isEnglish ? 'en' : 'vi'],
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: serviceNames[service.type][isEnglish ? 'en' : 'vi'],
        },
      ],
    },
  };
}

export function generateBreadcrumbStructuredData(
  breadcrumbs: Array<{
    name: string;
    url: string;
  }>,
  locale: string = 'vi',
): BreadcrumbStructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: `${SITE_URL}${locale === 'en' ? '/en' : ''}${breadcrumb.url}`,
    })),
  };
}

export function generateLocalBusinessStructuredData(locale: string = 'vi') {
  const isEnglish = locale === 'en';

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: HOTEL_NAME,
    description: isEnglish
      ? `${HOTEL_NAME} - Luxury hotel in Tam Dao, Phu Tho offering premium accommodation and services.`
      : `${HOTEL_NAME} - Khách sạn sang trọng tại Tam Đảo, Phú Thọ cung cấp lưu trú và dịch vụ cao cấp.`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Zone 1, Tam Dao commune',
      addressLocality: 'Tam Dao',
      addressRegion: 'Phu Tho',
      addressCountry: 'Vietnam',
    },
    telephone: HOTEL_PHONE,
    email: HOTEL_EMAIL,
    url: SITE_URL,
    openingHours: [
      'Mo-Su 00:00-24:00', // 24/7 operation
    ],
    priceRange: isEnglish ? '$$ - $$$' : '1.500.000 - 8.000.000 VND',
    image: `${SITE_URL}/favicon.ico`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.4744, // Update with actual coordinates
      longitude: 105.6327, // Update with actual coordinates
    },
  };
}

export function generateFAQStructuredData(
  faqs: Array<{
    question: string;
    answer: string;
  }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Helper function to convert structured data to JSON-LD script
export function generateJSONLDScript(data: unknown): string {
  return `<script type="application/ld+json">${JSON.stringify(data, null, 2)}</script>`;
}

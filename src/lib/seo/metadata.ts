import type { Metadata } from 'next';
import type { PageType } from '@/types/seo.type';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const HOTEL_NAME = 'Genuss Hotel Tam Dao';
const HOTEL_LOCATION = 'Tam Dao, Phu Tho, Vietnam';
const DEFAULT_LOCALE = 'vi';
const DEFAULT_LOGO = '/logo/genuss-logo.svg';

// Fallback constants to avoid empty strings
const FALLBACK_TITLE = HOTEL_NAME;
const FALLBACK_DESCRIPTION = {
  en: `${HOTEL_NAME} - Luxury hotel in ${HOTEL_LOCATION} offering premium accommodation and services.`,
  vi: `${HOTEL_NAME} - Khách sạn sang trọng tại ${HOTEL_LOCATION} cung cấp lưu trú và dịch vụ cao cấp.`,
};
const FALLBACK_KEYWORDS = [
  HOTEL_NAME,
  'hotel Tam Dao',
  'khách sạn Tam Đảo',
  'luxury hotel Phu Tho',
  'resort Tam Dao',
];
const FALLBACK_IMAGE_PATH = '/logo/genuss-logo.svg';

// SEO keywords cho different pages
const SEO_KEYWORDS = {
  home: [
    'Genuss Hotel Tam Dao',
    'khách sạn Tam Đảo',
    'hotel Tam Dao Phu Tho',
    'resort Tam Dao',
    'khách sạn gần núi Tam Đảo',
    'hotel with pool Tam Dao',
    'conference venue Tam Dao',
    'luxury hotel Phu Tho',
  ],
  rooms: [
    'phòng khách sạn Tam Đảo',
    'hotel rooms Tam Dao',
    'deluxe room Tam Dao',
    'suite mountain view',
    'khách sạn view núi',
    'hotel accommodation Phu Tho',
    'room booking Tam Dao',
  ],
  'room-detail': [
    'chi tiết phòng khách sạn',
    'room facilities Tam Dao',
    'hotel room amenities',
    'phòng ốc khách sạn',
    'luxury suite Tam Dao',
  ],
  services: [
    'dịch vụ khách sạn Tam Đảo',
    'hotel services Tam Dao',
    'restaurant Tam Dao',
    'conference room rental',
    'swimming pool hotel',
    'gym facilities Tam Dao',
  ],
  'service-detail': [
    'chi tiết dịch vụ khách sạn',
    'hotel dining service',
    'event venue Tam Dao',
    'wellness facilities',
    'recreation services',
  ],
  booking: [
    'đặt phòng khách sạn',
    'hotel booking Tam Dao',
    'room reservation Phu Tho',
    'online booking hotel',
    'khách sạn giá tốt',
  ],
  contact: [
    'liên hệ khách sạn Tam Đảo',
    'hotel contact information',
    'khách sạn Phu Tho địa chỉ',
    'Genuss Hotel phone',
    'hotel email contact',
  ],
  'booking-detail': [
    'chi tiết đặt phòng khách sạn',
    'booking confirmation hotel',
    'xác nhận đặt phòng Tam Đảo',
    'hotel reservation details',
    'thông tin đặt phòng',
  ],
};

// SEO descriptions templates
const SEO_DESCRIPTIONS = {
  home: {
    en: `${HOTEL_NAME} - Modern mountain retreat in the heart of Tam Dao. Experience luxury accommodation with stunning views, outdoor pool, conference facilities, and exceptional service in Phu Tho, Vietnam.`,
    vi: `${HOTEL_NAME} - Nơi nghỉ dưỡng hiện đại giữa lòng Tam Đảo. Trải nghiệm lưu trú sang trọng với tầm nhìn tuyệt đẹp, hồ bơi ngoài trời, tiện ích hội nghị và dịch vụ đẳng cấp tại Phú Thọ.`,
  },
  rooms: {
    en: `Discover our 94 elegant rooms and suites at ${HOTEL_NAME}. From deluxe rooms to royal suites, each accommodation offers modern amenities and breathtaking views of Tam Dao mountains.`,
    vi: `Khám phá 94 phòng và suite sang trọng tại ${HOTEL_NAME}. Từ phòng deluxe đến suite hoàng gia, mỗi chỗ ở đều trang bị tiện nghi hiện đại và tầm nhìn ngoạn mục ra núi Tam Đảo.`,
  },
  services: {
    en: `Experience world-class services at ${HOTEL_NAME}. Enjoy fine dining, conference facilities, outdoor swimming pool, fitness center, and wellness services in the beautiful Tam Dao setting.`,
    vi: `Trải nghiệm dịch vụ đẳng cấp thế giới tại ${HOTEL_NAME}. Thưởng thức ẩm thực tinh tế, tiện ích hội nghị, hồ bơi ngoài trời, trung tâm thể hình và dịch vụ wellness trong khung cảnh Tam Đảo tuyệt đẹp.`,
  },
  booking: {
    en: `Book your perfect stay at ${HOTEL_NAME} online. Easy reservation system for our luxury rooms and suites in Tam Dao. Best rates guaranteed for your mountain retreat experience.`,
    vi: `Đặt phòng lý tưởng tại ${HOTEL_NAME} trực tuyến. Hệ thống đặt phòng dễ dàng cho các phòng và suite sang trọng tại Tam Đảo. Cam kết giá tốt nhất cho trải nghiệm nghỉ dưỡng trên núi.`,
  },
  contact: {
    en: `Contact ${HOTEL_NAME} for inquiries, reservations, and event planning. Located in the heart of Tam Dao, Phu Tho. Call us or visit our hotel for exceptional hospitality.`,
    vi: `Liên hệ ${HOTEL_NAME} để được tư vấn, đặt phòng và lên kế hoạch sự kiện. Tọa lạc tại trung tâm Tam Đảo, Phú Thọ. Gọi cho chúng tôi hoặc ghé thăm khách sạn để trải nghiệm dịch vụ đẳng cấp.`,
  },
  'booking-detail': {
    en: `Booking confirmation for ${HOTEL_NAME}. View your reservation details, room information, and booking confirmation for your stay in Tam Dao, Phu Tho.`,
    vi: `Xác nhận đặt phòng tại ${HOTEL_NAME}. Xem chi tiết đặt phòng, thông tin phòng và xác nhận đặt chỗ cho kỳ nghỉ của bạn tại Tam Đảo, Phú Thọ.`,
  },
};

export function generateSEOMetadata(
  pageType: PageType,
  locale: string,
  options?: {
    title?: string;
    description?: string;
    keywords?: string[];
    imagePath?: string;
    canonical?: string;
    roomName?: string;
    serviceName?: string;
  },
): Metadata {
  const isEnglish = locale === 'en';

  // Generate title with fallback
  let title = options?.title?.trim() || FALLBACK_TITLE;
  if (pageType !== 'home') {
    const pageTitles = {
      rooms: isEnglish ? 'Our Rooms' : 'Phòng của chúng tôi',
      'room-detail': options?.roomName?.trim() || 'Room Details',
      services: isEnglish ? 'Our Services' : 'Dịch vụ của chúng tôi',
      'service-detail': options?.serviceName?.trim() || 'Service Details',
      booking: isEnglish ? 'Book Your Stay' : 'Đặt phòng của bạn',
      contact: isEnglish ? 'Contact Us' : 'Liên hệ chúng tôi',
      'booking-detail': isEnglish ? 'Booking Details' : 'Chi tiết đặt phòng',
    };
    title = `${pageTitles[pageType]} | ${HOTEL_NAME}`;
  }

  // Generate description with fallback
  let description = options?.description?.trim();
  if (
    !description &&
    SEO_DESCRIPTIONS[pageType as keyof typeof SEO_DESCRIPTIONS]
  ) {
    description =
      SEO_DESCRIPTIONS[pageType as keyof typeof SEO_DESCRIPTIONS][
        isEnglish ? 'en' : 'vi'
      ];
  }
  if (!description) {
    description = FALLBACK_DESCRIPTION[isEnglish ? 'en' : 'vi'];
  }

  // Generate keywords with fallback
  const keywords = [
    ...(SEO_KEYWORDS[pageType] || []),
    ...(options?.keywords?.filter((k) => k?.trim()) || []),
    ...FALLBACK_KEYWORDS,
  ].join(', ');

  // Generate image URL with fallback
  const imagePath = options?.imagePath?.trim() || FALLBACK_IMAGE_PATH;
  const imageUrl = `${SITE_URL}${imagePath}`;

  // Generate canonical URL - Vietnamese is default (no prefix), English has /en prefix
  const canonical =
    options?.canonical ||
    `${SITE_URL}${locale === DEFAULT_LOCALE ? '' : `/${locale}`}`;

  const metadata: Metadata = {
    title,
    description,
    keywords,

    authors: [
      { name: 'Genuss Hotel Vietnam' },
      { name: 'Zanzandora The LazyBoy' },
    ],
    creator: 'Genuss Hotel Vietnam',
    publisher: 'Genuss',

    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
      languages: {
        [DEFAULT_LOCALE]: `${SITE_URL}`, // Vietnamese - default, no prefix
        en: `${SITE_URL}/en`, // English - with /en prefix
      },
    },
    openGraph: {
      title,
      description,
      type: pageType === 'home' ? 'website' : 'website',
      locale: locale === 'en' ? 'en_US' : 'vi_VN',
      siteName: HOTEL_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
        {
          url: DEFAULT_LOGO,
          width: 800,
          height: 600,
          alt: `Genuss Logo`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };

  return metadata;
}

export function generateAltText(
  type: 'room' | 'service' | 'hotel' | 'facility',
  name: string,
  description?: string,
  location?: string,
): string {
  const isEnglish = true; // This could be based on locale

  // Clean and validate inputs with fallbacks
  const cleanName = name?.trim() || 'Facility';
  const cleanDescription = description?.trim();
  const cleanLocation = location?.trim() || HOTEL_LOCATION;

  const templates = {
    room: {
      en: `${cleanName} room at ${HOTEL_NAME}${cleanDescription ? ` - ${cleanDescription}` : ''}${cleanLocation ? ` in ${cleanLocation}` : ''}`,
      vi: `Phòng ${cleanName} tại ${HOTEL_NAME}${cleanDescription ? ` - ${cleanDescription}` : ''}${cleanLocation ? ` tại ${cleanLocation}` : ''}`,
    },
    service: {
      en: `${cleanName} service at ${HOTEL_NAME}${cleanDescription ? ` - ${cleanDescription}` : ''}`,
      vi: `Dịch vụ ${cleanName} tại ${HOTEL_NAME}${cleanDescription ? ` - ${cleanDescription}` : ''}`,
    },
    hotel: {
      en: `${cleanName} - ${HOTEL_NAME}${cleanDescription ? ` - ${cleanDescription}` : ''}${cleanLocation ? ` in ${cleanLocation}` : ''}`,
      vi: `${cleanName} - ${HOTEL_NAME}${cleanDescription ? ` - ${cleanDescription}` : ''}${cleanLocation ? ` tại ${cleanLocation}` : ''}`,
    },
    facility: {
      en: `${cleanName} facility at ${HOTEL_NAME}${cleanDescription ? ` - ${cleanDescription}` : ''}`,
      vi: `Tiện ích ${cleanName} tại ${HOTEL_NAME}${cleanDescription ? ` - ${cleanDescription}` : ''}`,
    },
  };

  return templates[type][isEnglish ? 'en' : 'vi'];
}

export function generateImageFileName(
  type: 'room' | 'service' | 'hotel' | 'facility',
  name: string,
  variant?: string,
): string {
  // Clean and validate name with fallback
  const cleanName =
    (name?.trim() || 'image')
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim() || 'image';

  // Clean variant if provided
  const cleanVariant = variant?.trim()
    ? `-${variant
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()}`
    : '';

  return `${type}-${cleanName}${cleanVariant}.webp`;
}

export function generateCanonicalUrl(locale: string, path?: string): string {
  const basePath = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  const fullPath = path ? `${basePath}${path}` : basePath;
  return `${SITE_URL}${fullPath}`;
}

// Export fallback description for use in layout
export { FALLBACK_DESCRIPTION };

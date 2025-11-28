import type { Metadata } from 'next';
import type { PageType } from '@/types/seo.type';

// Prioritize production URL if available, fallback to development URL
const SITE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_SITE_URL || 'https://genuss-hotel.vn'
    : process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const HOTEL_NAME = 'Genuss Hotel Tam Dao';
const HOTEL_LOCATION = 'Tam Dao, Phu Tho, Vietnam';
const DEFAULT_LOCALE = 'vi';
const DEFAULT_LOGO = '/favicon.ico';

// Fallback constants to avoid empty strings
const FALLBACK_TITLE = 'Luxury Hotel in Tam Dao | Genuss Hotel Tam Dao';
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
const FALLBACK_IMAGE_PATH = '/images/summary-1.webp';

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

// SEO descriptions templates (optimized for 110-160 characters)
const SEO_DESCRIPTIONS = {
  home: {
    en: `${HOTEL_NAME} - Luxury mountain retreat in Tam Dao. Enjoy stunning views, pool, conference facilities & premium service in Phu Tho, Vietnam.`,
    vi: `${HOTEL_NAME} - Khách sạn sang trọng trên núi Tam Đảo. Tận hưởng tầm nhìn tuyệt đẹp, hồ bơi, hội nghị & dịch vụ cao cấp tại Phú Thọ.`,
  },
  rooms: {
    en: `94 elegant rooms & suites at ${HOTEL_NAME}. Modern amenities, breathtaking mountain views. Luxury accommodation in Tam Dao, Phu Tho.`,
    vi: `94 phòng và suite sang trọng tại ${HOTEL_NAME}. Tiện nghi hiện đại, tầm nhìn núi ngoạn mục. Lưu trú cao cấp tại Tam Đảo, Phú Thọ.`,
  },
  services: {
    en: `World-class services at ${HOTEL_NAME}. Fine dining, conference facilities, pool, fitness & wellness in beautiful Tam Dao setting.`,
    vi: `Dịch vụ đẳng cấp tại ${HOTEL_NAME}. ẩm thực tinh tế, hội nghị, hồ bơi, thể hình & wellness trong khung cảnh Tam Đảo tuyệt đẹp.`,
  },
  booking: {
    en: `Book your stay at ${HOTEL_NAME} online. Easy reservation for luxury rooms & suites in Tam Dao. Best rates guaranteed.`,
    vi: `Đặt phòng tại ${HOTEL_NAME} trực tuyến. Đặt phòng dễ dàng cho phòng & suite sang trọng tại Tam Đảo. Cam kết giá tốt nhất.`,
  },
  contact: {
    en: `Contact ${HOTEL_NAME} for inquiries, reservations & events. Located in Tam Dao, Phu Tho. Call or visit for exceptional hospitality.`,
    vi: `Liên hệ ${HOTEL_NAME} để tư vấn, đặt phòng & sự kiện. Tọa lạc tại Tam Đảo, Phú Thọ. Gọi hoặc ghé thăm để trải nghiệm dịch vụ đẳng cấp.`,
  },
  'booking-detail': {
    en: `Booking confirmation for ${HOTEL_NAME}. View reservation details & room information for your stay in Tam Dao, Phu Tho.`,
    vi: `Xác nhận đặt phòng tại ${HOTEL_NAME}. Xem chi tiết đặt phòng & thông tin phòng cho kỳ nghỉ của bạn tại Tam Đảo, Phú Thọ.`,
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
      rooms: isEnglish
        ? 'Luxury Rooms & Suites in Tam Dao'
        : 'Phòng & Suite Sang trọng tại Tam Đảo',
      'room-detail': options?.roomName?.trim() || 'Room Details',
      services: isEnglish
        ? 'Premium Hotel Services & Facilities'
        : 'Dịch vụ & Tiện ích Khách sạn Cao cấp',
      'service-detail': options?.serviceName?.trim() || 'Service Details',
      booking: isEnglish
        ? 'Book Your Luxury Stay Online'
        : 'Đặt Phòng Sang Trọng Trực Tuyến',
      contact: isEnglish
        ? 'Contact Us for Reservations & Events'
        : 'Liên hệ Đặt phòng & Tổ chức Sự kiện',
      'booking-detail': isEnglish
        ? 'Your Booking Confirmation'
        : 'Xác nhận Đặt phòng của Bạn',
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
      url: canonical,
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
          alt: `${HOTEL_NAME} Logo`,
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
    other: {
      'og:logo': `${SITE_URL}${DEFAULT_LOGO}`,
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

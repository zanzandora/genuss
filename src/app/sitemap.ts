import type { MetadataRoute } from 'next';
import { getRoomDatas } from '@/lib/action/getRooms';
import { getServiceDatas } from '@/lib/action/getServices';
import { generateCanonicalUrl } from '@/lib/seo/metadata';
import type { TRoom } from '@/types/room.type';
import type { Service } from '@/types/service.type';

const DEFAULT_LOCALE = 'vi';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages = [
    {
      url: generateCanonicalUrl(DEFAULT_LOCALE, '/'),
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: generateCanonicalUrl('en', '/'),
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: generateCanonicalUrl(DEFAULT_LOCALE, '/rooms'),
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: generateCanonicalUrl('en', '/rooms'),
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: generateCanonicalUrl(DEFAULT_LOCALE, '/services'),
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: generateCanonicalUrl('en', '/services'),
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: generateCanonicalUrl(DEFAULT_LOCALE, '/booking'),
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: generateCanonicalUrl('en', '/booking'),
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: generateCanonicalUrl(DEFAULT_LOCALE, '/contact'),
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: generateCanonicalUrl('en', '/contact'),
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  // Dynamic room pages
  const roomPages: MetadataRoute.Sitemap = [];
  try {
    const rooms = await getRoomDatas();

    rooms.forEach((room: TRoom) => {
      // Vietnamese room pages
      roomPages.push({
        url: generateCanonicalUrl(DEFAULT_LOCALE, `/rooms/${room.slug}`),
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      });

      // English room pages
      roomPages.push({
        url: generateCanonicalUrl('en', `/rooms/${room.slug}`),
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      });
    });
  } catch (error) {
    console.error('Error fetching rooms for sitemap:', error);
  }

  // Dynamic service pages
  const servicePages: MetadataRoute.Sitemap = [];
  try {
    const services = await getServiceDatas();

    services.forEach((service: Service) => {
      // Vietnamese service pages
      servicePages.push({
        url: generateCanonicalUrl(DEFAULT_LOCALE, `/services/${service.slug}`),
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      });

      // English service pages
      servicePages.push({
        url: generateCanonicalUrl('en', `/services/${service.slug}`),
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      });
    });
  } catch (error) {
    console.error('Error fetching services for sitemap:', error);
  }

  return [...staticPages, ...roomPages, ...servicePages];
}
